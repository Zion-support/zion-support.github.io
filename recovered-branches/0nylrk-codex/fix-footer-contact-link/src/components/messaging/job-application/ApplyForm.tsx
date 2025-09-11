
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}
export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {;
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
}



  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
=======  ),
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
=======
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
  },
  

=======
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume && resume.id);
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleApply = async () => {;
    if (!message && message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setIsSubmitting(true),
      


=======

      


      });
      return;
    }
    try {;
      setIsSubmitting(true);
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        job && job.client_id;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        fullMessage;
        'job';
        job && job.id;
        contextData;
      );


=======


      }
      
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job && job.id);
      }
      toast({;
        title: "Application sent",;
        description: `Your application for "${job && job.title}" has been sent.`}),;

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
          <MessageTab
=======

        <TabsContent value="message">;

          <MessageTab
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Loader2 } from './lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { useJobApplications } from '@/hooks / useJobApplications';
import { use_messaging } from '@/context / MessagingContext';
import { toast } from '@/hooks / use - toast';
import { ResumeSelector, ResumeOption } from '../resume - selector';
import { MessageTab } from './MessageTab';
import { ResumeTab } from './ResumeTab';
import { Job } from './types';
interface ApplyFormProps {
  job: Job,
  on_close: () => void,
  onApplySuccess?: (job_id: string) => Promise < void>;
}
export /**
 * ApplyForm - Function description
 */
function ApplyForm() {
  const { create_conversation } = use_messaging ();
  const { applyToJob } = useJobApplications ();
  const [message, set_message] = useState (
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`);
  const [proposal_link, setProposalLink] = useState ('');
  const [is_submitting, setIsSubmitting] = useState (false);
  const [active_tab, setActiveTab] = useState < string>("message");
  const [selected_resume, setSelectedResume] = useState < ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState < string | null>(null);
;
  const handleResumeSelected = (resume: ResumeOption) =>: any {
    setSelectedResume (resume),
    setSelectedResumeId (resume.id);
  }
;
  const handle_apply = async () => {
    if () {) {
  $2
}
      toast ({
        title: "Message required",
        description: "Please enter a message before applying.",
        variant: "destructive";
      });
      return;
    }
    try {
      setIsSubmitting (true);
;
      // First submit the application to the job applications table;
      const application_success = await applyToJob (
        job.id,
        message,
        selectedResumeId);
;
      // Check condition
if ( {) {
  $2
}
        throw new Error ("Failed to submit application");
      }
      // Format message with proposal link if provided;
      let full_message = message;
;
      // Check condition
if ( {) {
  $2
}
        full_message += `\n\n_here's a link to my proposal: ${proposal_link}`;
      }
      // Add info about attached resume if available;
      // Check condition
if ( {) {
  $2
}
        full_message += `\n\n_i've attached my resume: ${selected_resume.title}`;
      }
      // Create context data for the conversation;
      const context_data = {
        title: job.title,
        description: job.description,
        attached_resume: selected_resume ? {
          id: selected_resume.id,
          title: selected_resume.title,
          type: selected_resume.type;
        } : null;
      }
;
      // Create conversation with the job client;
      await create_conversation (
        job.client_id;
        full_message;
        'job';
        job.id;
        context_data);
;
      // Call onApplySuccess to update job status in the UI;
      // Check condition
if ( {) {
  $2
}
        await onApplySuccess (job.id);
      }
      toast ({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),
      on_close ();
    } catch (error) {
      console.error ("Failed to send application:", error);
      toast ({
        title: "Application failed",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive";
      });
    } finally {
      setIsSubmitting (false);
    }
  }
;
  return (
    <>;
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
        <TabsList className="w - full mb - 4 bg - zion - blue - dark / 30">;
          <TabsTrigger value="message" className="flex - 1">;
            Message;
          </TabsTrigger>;
          <TabsTrigger value="resume" className="flex - 1">;
            Resume;
          </TabsTrigger>;
        </TabsList>;
        <TabsContent value="message">;
          <MessageTab;
        ;
        <TabsContent value="message">;
          <MessageTab ;
==============

          <MessageTab 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}
          />;
        </TabsContent>;

        <TabsContent value="resume">;
          <ResumeTab
            onResumeSelected={handleResumeSelected}            selectedResumeId={selectedResumeId} 
          />;
        </TabsContent>;
      </Tabs>;

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;

=======
          ) : (;
            'Submit Application';
          )}
        </Button>
      </div>
    </>
  )
}        </Button>;
      </div>;
    </>;
  );
}

=======
;