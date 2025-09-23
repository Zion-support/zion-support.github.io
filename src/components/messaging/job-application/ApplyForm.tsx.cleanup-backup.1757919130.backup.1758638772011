
<<<<<<< HEAD
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
import { ResumeTab } from "./ResumeTab",
import { Job } from "./types",
import {logErrorToProduction} from '@/utils/productionLogger',


interface ApplyFormProps {
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
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume),
    setSelectedResumeId(resume.id)
  },
=======
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useJobApplications } from "@/hooks/useJobApplications";
import { useMessaging } from "@/context/MessagingContext";
import { toast } from "@/hooks/use-toast";
import { ResumeSelector, ResumeOption } from "../resume-selector";
import { MessageTab } from "./MessageTab";
import { ResumeTab } from "./ResumeTab";
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';


interface ApplyFormProps {
  job: Job;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
  
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume);
    setSelectedResumeId(resume.id);
  };
>>>>>>> origin/auto/autonomy-17186719616
  
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
<<<<<<< HEAD
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
      }),
      return,
    }
    
    try {
      setIsSubmitting(true),
=======
        title: "Message required",
        description: "Please enter a message before applying.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
>>>>>>> origin/auto/autonomy-17186719616
      
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id,
        message,
        selectedResume && selectedResume.type === 'ai_resume'
          ? selectedResumeId || undefined
          : undefined,
        selectedResume && selectedResume.type === 'custom_upload'
          ? selectedResume.file
          : undefined
<<<<<<< HEAD
      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application"),
      }
      
      // Format message with proposal link if provided
      let fullMessage = message,
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`,
=======
      );
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application");
      }
      
      // Format message with proposal link if provided
      let fullMessage = message;
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
>>>>>>> origin/auto/autonomy-17186719616
      }
      
      // Add info about attached resume if available
      if (selectedResume) {
<<<<<<< HEAD
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`,
=======
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`;
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
      },
=======
      };
>>>>>>> origin/auto/autonomy-17186719616
      
      // Create conversation with the job client
      await createConversation(
        job.client_id,
        fullMessage,
        'job',
        job.id,
        contextData
<<<<<<< HEAD
      ),
      
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id),
=======
      );
      
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id);
>>>>>>> origin/auto/autonomy-17186719616
      }
      
      toast({
        title: "Application sent",
<<<<<<< HEAD
        description: `Your application for "${job.title}" has been sent.`}),
      
      onClose(),
    } catch (error) {
      logErrorToProduction('Failed to send application:', { data: error }),
=======
        description: `Your application for "${job.title}" has been sent.`,
      });
      
      onClose();
    } catch (error) {
      logErrorToProduction('Failed to send application:', { data: error });
>>>>>>> origin/auto/autonomy-17186719616
      toast({
        title: "Application failed",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive"
<<<<<<< HEAD
      }),
    } finally {
      setIsSubmitting(false),
    }
  },
=======
      });
    } finally {
      setIsSubmitting(false);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
            message={message}
<<<<<<< HEAD
            onMessageChange={setMessage}
            job={job}
          />
        </TabsContent>



      

          <ResumeTab
            selectedResume={selectedResume}
            onResumeSelect={setSelectedResume}
=======
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}
          />
        </TabsContent>
        
        <TabsContent value="resume">
          <ResumeTab 
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
>>>>>>> origin/auto/autonomy-17186719616
          />
        </TabsContent>
      </Tabs>
      
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
        <Button
<<<<<<< HEAD


          type="button"
          onClick = {handleApply,}
          disabled = {isSubmitting,}
=======
>>>>>>> origin/auto/autonomy-17186719616
          type="button" 
          onClick={handleApply}
          disabled={isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white"
<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
        >
          {isSubmitting ? (
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
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
