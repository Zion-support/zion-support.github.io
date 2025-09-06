
<<<<<<< HEAD
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
import { ResumeTab } from "./ResumeTab";
import { Job } from "./types";
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
=======
import React, { useState } from 'react';
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {useMessaging} from "@/context/MessagingContext";
import {toast} from "@/hooks/use-toast";
import {ResumeSelector, ResumeOption} from "../resume-selector";
import {MessageTab} from "./MessageTab";
import {ResumeTab} from "./ResumeTab";
import {Job} from "./types";
interface ApplyFormProps {;
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
<<<<<<< HEAD
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
  }
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
=======

  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume && resume.id);
  };

  const handleApply = async () => {;
    if (!message && message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;
    }
<<<<<<< HEAD
    try {
      setIsSubmitting(true);
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResumeId
      );
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
      // Format message with proposal link if provided
      let fullMessage = message;
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
      }
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
      // Create context data for the conversation
      const contextData = {
        title: job.title
        description: job.description
        attachedResume: selectedResume ? {
          id: selectedResume.id
          title: selectedResume.title
          type: selectedResume.type
        } : null
      }
      // Create conversation with the job client
      await createConversation(
        job.client_id;
=======

    try {;
      setIsSubmitting(true);

      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job && job.id, ;
        message, ;
        selectedResumeId;
      );

      if (!applicationSuccess) {;
        throw new Error("Failed to submit application");
      }

      // Format message with proposal link if provided;
      let fullMessage = message;

      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }

      // Add info about attached resume if available;
      if (selectedResume) {;
        fullMessage += `\n\nI've attached my resume: ${selectedResume && selectedResume.title}`;
      }

      // Create context data for the conversation;
      const contextData = {;
        title: job && job.title,;
        description: job && job.description,;
        attachedResume: selectedResume ? {;
          id: selectedResume && selectedResume.id,;
          title: selectedResume && selectedResume.title,;
          type: selectedResume && selectedResume.type;
        } : null;
      };

      // Create conversation with the job client;
      await createConversation(;
        job && job.client_id;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        fullMessage;
        'job';
        job && job.id;
        contextData;
      );
<<<<<<< HEAD
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
      }
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
      onClose()
    } catch (error) {
      console.error("Failed to send application:", error);
      toast({
        title: "Application failed"
        description: "There was an error sending your application. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
=======

      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job && job.id);
      }

      toast({;
        title: "Application sent",;
        description: `Your application for "${job && job.title}" has been sent.`}),;

      onClose();
    } catch (error) {;
      console && console.error("Failed to send application:", error);
      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.",;
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
<<<<<<< HEAD
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
=======
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

        <TabsContent value="message">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <MessageTab
            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}
<<<<<<< HEAD
          />
        </TabsContent>
        <TabsContent value="resume">
          <ResumeTab
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId}
          />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
=======
          />;
        </TabsContent>;

        <TabsContent value="resume">;
          <ResumeTab
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />;
        </TabsContent>;
      </Tabs>;

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-zion-purple/30 text-white">;
          Cancel;
        </Button>;
        <Button
          type="button"
          onClick={handleApply}
          disabled={isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
          {isSubmitting ? (;
            <>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
          ) : (;
            'Submit Application';
          )}
<<<<<<< HEAD
        </Button>
      </div>
    </>
  )
}
=======
        </Button>;
      </div>;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
