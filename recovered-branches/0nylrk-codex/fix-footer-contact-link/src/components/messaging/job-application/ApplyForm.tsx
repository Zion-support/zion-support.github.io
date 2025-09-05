
import React, { useState } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Loader2 } from &quot;lucide-react&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
import { useMessaging } from &quot;@/context/MessagingContext&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { ResumeSelector, ResumeOption } from &quot;../resume-selector&quot;;
import { MessageTab } from &quot;./MessageTab&quot;;
import { ResumeTab } from &quot;./ResumeTab&quot;;
import { Job } from &quot;./types&quot;;

interface ApplyFormProps {
  job: Job;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job &quot;${job.title}&quot; and would like to apply. I believe my skills and experience are a great match for this role.`
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(&quot;message&quot;);
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
  
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume);
    setSelectedResumeId(resume.id);
  };
  
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: &quot;Message required&quot;,
        description: &quot;Please enter a message before applying.&quot;,
        variant: &quot;destructive&quot;
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id, 
        message, 
        selectedResumeId
      );
      
      if (!applicationSuccess) {
        throw new Error(&quot;Failed to submit application&quot;);
      }
      
      // Format message with proposal link if provided
      let fullMessage = message;
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }
      
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`;
      }
      
      // Create context data for the conversation
      const contextData = {
        title: job.title,
        description: job.description,
        attachedResume: selectedResume ? {
          id: selectedResume.id,
          title: selectedResume.title,
          type: selectedResume.type
        } : null
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
      if (onApplySuccess) {
        await onApplySuccess(job.id);
      }
      
      toast({
        title: &quot;Application sent&quot;,
        description: `Your application for &quot;${job.title}&quot; has been sent.`});
      
      onClose();
    } catch (error) {
      console.error(&quot;Failed to send application:&quot;, error);
      toast({
        title: &quot;Application failed&quot;,
        description: &quot;There was an error sending your application. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;w-full&quot;>
        <TabsList className=&quot;w-full mb-4 bg-zion-blue-dark/30&quot;>
          <TabsTrigger value=&quot;message&quot; className=&quot;flex-1&quot;>
            Message
          </TabsTrigger>
          <TabsTrigger value=&quot;resume&quot; className=&quot;flex-1&quot;>
            Resume
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value=&quot;message&quot;>
          <MessageTab 
            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}
          />
        </TabsContent>
        
        <TabsContent value=&quot;resume&quot;>
          <ResumeTab 
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />
        </TabsContent>
      </Tabs>
      
      <div className=&quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4&quot;>
        <Button
          type=&quot;button&quot;
          variant=&quot;outline&quot;
          onClick={onClose}
          className=&quot;border-zion-purple/30 text-white&quot;
        >
          Cancel
        </Button>
        <Button
          type=&quot;button&quot; 
          onClick={handleApply}
          disabled={isSubmitting}
          className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
        >
          {isSubmitting ? (
            <>
              <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
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
