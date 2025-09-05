
<<<<<<< HEAD
import React, { useState } from 'react',;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useMessaging } from "@/context/MessagingContext",;
import { toast } from "@/hooks/use-toast",;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { MessageTab } from "./MessageTab",;
import { ResumeTab } from "./ResumeTab",;
import { Job } from "./types",;
;
interface ApplyFormProps {;
  job:Job,;
  onClose:() => void,;
  onApplySuccess?:(jobId:string) => Promise<void>;
}
;
export function ApplyForm({ job, onClose, onApplySuccess } ApplyFormProps) {;
  const { createConversation } = useMessaging(),;
  const { applyToJob } = useJobApplications(),;
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
  ),;
  const [proposalLink, setProposalLink] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [activeTab, setActiveTab] = useState<string>("message"),;
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),;
  ;
  const handleResumeSelected = (resume:ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume.id);
  },;
  ;
  const handleApply = async () => {;
    if (!message.trim()) {;
      toast({;
        title:"Message required",;
        description:"Please enter a message before applying.",;
        variant:"destructive";
      }),;
      return,;
    }
    ;
    try {;
      setIsSubmitting(true),;
      ;
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job.id, ;
        message, ;
        selectedResumeId;
      ),;
      ;
      if (!applicationSuccess) {;
        throw new Error("Failed to submit application"),;
      }
      ;
      // Format message with proposal link if provided;
      let fullMessage = message,;
      ;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal:${proposalLink}`,;
      }
      ;
      // Add info about attached resume if available;
      if (selectedResume) {;
        fullMessage += `\n\nI've attached my resume:${selectedResume.title}`,;
      }
      ;
      // Create context data for the conversation;
      const contextData = {;
        title:job.title,;
        description:job.description,;
        attachedResume:selectedResume ? {;
          id:selectedResume.id,;
          title:selectedResume.title,;
          type:selectedResume.type;
        } null;
      },;
      ;
      // Create conversation with the job client;
      await createConversation(;
        job.client_id,;
        fullMessage,;
        'job',;
        job.id,;
        contextData;
      ),;
      ;
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job.id),;
      }
      ;
      toast({;
        title:"Application sent",;
        description:`Your application for "${job.title}" has been sent.`}),;
      ;
      onClose(),;
    } catch (error) {;
      console.error("Failed to send application:", error),;
      toast({;
        title:"Application failed",;
        description:"There was an error sending your application. Please try again.",;
        variant:"destructive";
      }),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <>;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">;
          <TabsTrigger value="message" className="flex-1">;
            Message;
          </TabsTrigger>;
          <TabsTrigger value="resume" className="flex-1">;
            Resume;
          </TabsTrigger>;
        </TabsList>;
        ;
        <TabsContent value="message">;
          <MessageTab ;
            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}
          />;
        </TabsContent>;
        ;
        <TabsContent value="resume">;
          <ResumeTab ;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} ;
          />;
        </TabsContent>;
      </Tabs>;
      ;
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;
        <Button;
          type="button";
          variant="outline";
          onClick={onClose}
          className="border-zion-purple/30 text-white";
        >;
          Cancel;
        </Button>;
        <Button;
          type="button" ;
          onClick={handleApply}
          disabled={isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white";
        >;
          {isSubmitting ? (;
            <>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
          ) :(;
            'Submit Application';
          )}
        </Button>;
      </div>;
    </>;
  ),;
=======
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
import { ResumeTab } from "./ResumeTab",
import { Job } from "./types",interface ApplyFormProps {
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  ),
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(&quot;message&quot;);
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
  
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume),
    setSelectedResumeId(resume.id)
  },  
  const _handleApply = async () => {_if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message before applying.",
        variant: "destructive"
      }),
      return      return;
    }
    
    try {
      setIsSubmitting(true),
      
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id,
        message,
        selectedResumeId
      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")      }
      
      // Format message with proposal link if provided
      let fullMessage = message,
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
      }
      
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
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
      },
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
      ),
      
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
      }
      
      toast({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),      
      onClose()
    } catch (error) {
      console.error("Failed to send application:", error),
      toast({
        title: "Application failed",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive"
      })    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;w-full&quot;>
        <TabsList className=&quot;w-full mb-4 bg-zion-blue-dark/30&quot;>
          <TabsTrigger value=&quot;message&quot; className=&quot;flex-1&quot;>
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
          <TabsTrigger value=&quot;resume&quot; className=&quot;flex-1&quot;>
            Resume
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value=&quot;message&quot;>
          <MessageTab 
            message={_message}
            setMessage={_setMessage}
            proposalLink={_proposalLink}
            setProposalLink={_setProposalLink}
          />
        </TabsContent>
        
        <TabsContent value=&quot;resume&quot;>
          <ResumeTab 
            onResumeSelected={_handleResumeSelected}
            selectedResumeId={_selectedResumeId} 
          />
        </TabsContent>
      </Tabs>
      
      <div className=&quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4&quot;>
        <Button
          type=&quot;button&quot;
          variant=&quot;outline&quot;
          onClick={onClose}
          className=&quot;border-zion-purple/30 text-white&quot;        >
          Cancel
        </Button>
        <Button
          type=&quot;button&quot; 
          onClick={handleApply}
          disabled={isSubmitting}
          className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;        >
          {_isSubmitting ? (
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
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
