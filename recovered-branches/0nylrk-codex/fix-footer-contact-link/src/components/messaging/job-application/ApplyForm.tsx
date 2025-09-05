
import React, {_useState} from 'react';

interface ApplyFormProps {_job: Job;
  onClose: () => void;
  onApplySuccess?: (_jobId: string) => Promise<void>;}

export function ApplyForm(_{_job, _onClose, _onApplySuccess}: ApplyFormProps) {_const { createConversation} = useMessaging();
  const {_applyToJob} = useJobApplications();
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${_job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
  
  const _handleResumeSelected = (_resume: ResumeOption) => {_setSelectedResume(resume);
    setSelectedResumeId(resume.id);};
  
  const _handleApply = async () => {_if (!message.trim()) {
      toast({
        title: "Message required", _description: "Please enter a message before applying.", _variant: "destructive"});
      return;
    }
    
    try {_setIsSubmitting(true);
      
      // First submit the application to the job applications table
      const _applicationSuccess = await applyToJob(
        job.id, _message, _selectedResumeId
      );
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application");}
      
      // Format message with proposal link if provided
      let _fullMessage = message;
      
      if (proposalLink) {_fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }
      
      // Add info about attached resume if available
      if (selectedResume) {_fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`;
      }
      
      // Create context data for the conversation
      const _contextData = {_title: job.title, _description: job.description, _attachedResume: selectedResume ? {
          id: selectedResume.id, _title: selectedResume.title, _type: selectedResume.type} : null
      };
      
      // Create conversation with the job client
      await createConversation(
        job.client_id,
        fullMessage,
        'job',
        job.id,
        contextData
      );
      
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {_await onApplySuccess(job.id);}
      
      toast({_title: "Application sent", _description: `Your application for "${job.title}" has been sent.`});
      
      onClose();
    } catch (error) {_toast({
        title: "Application failed", _description: "There was an error sending your application. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  return (
    <>
      <Tabs value={_activeTab} onValueChange={_setActiveTab} className="w-full">
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">
          <TabsTrigger value="message" className="flex-1">
            Message
          </TabsTrigger>
          <TabsTrigger value="resume" className="flex-1">
            Resume
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="message">
          <MessageTab 
            message={_message}
            setMessage={_setMessage}
            proposalLink={_proposalLink}
            setProposalLink={_setProposalLink}
          />
        </TabsContent>
        
        <TabsContent value="resume">
          <ResumeTab 
            onResumeSelected={_handleResumeSelected}
            selectedResumeId={_selectedResumeId} 
          />
        </TabsContent>
      </Tabs>
      
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
        <Button
          type="button"
          variant="outline"
          onClick={_onClose}
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
        <Button
          type="button" 
          onClick={_handleApply}
          disabled={_isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white"
        >
          {_isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </div>
    </>
  );
}
