<<<<<<< HEAD
<<<<<<< HEAD
      let fullMessage = message
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useJobApplications } from "@/hooks/useJobApplications"
import { useMessaging } from "@/context/MessagingContext"
import { toast } from "@/hooks/use-toast"
import { ResumeSelector, ResumeOption } from "../resume-selector"
import { MessageTab } from "./MessageTab"
import { ResumeTab } from "./ResumeTab"
import { Job } from "./types"
import {logErrorToProduction} from '@/utils/productionLogger'

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
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApplyFormProps {
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApplyFormProps {
import { Job } from "./types",
import {logErrorToProduction} from '@/utils/productionLogger',
interface ApplyFormProps {
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}

  job: Job
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
job: Job
  onClose: () => void
  onApplySuccess?: (jobId: string,) => Promise<void>

}
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
<<<<<<< HEAD
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const { createConversation } = useMessaging()
  const { applyToJob } = useJobApplications()
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`

  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),

  )
  const [proposalLink, setProposalLink] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume);    setSelectedResumeId(resume.id)
  }
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
  
  const handleApply = async () => {
  
=======




  const handleApply = async () => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
<<<<<<< HEAD
      return
      })
      return
      return;
=======


      return;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    try {
      setIsSubmitting(true)
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResume && selectedResume.type === 'ai_resume'
          ? selectedResumeId |undefined
          : undefined
        selectedResume && selectedResume.type === 'custom_upload'
          ? selectedResume.file
          : undefined
      )
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
      // Format message with proposal link if provided
      let fullMessage = message
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
<<<<<<< HEAD
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
      
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      let full_message = message;
import React, { useState } from 'react';
import { Button  } from '@/components / ui / button';
import { Loader2 } from 'lucide-react'import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { useJobApplications  } from '@/hooks / useJobApplications';
import { use_messaging  } from '@/context / MessagingContext';
import { toast  } from '@/hooks / use - toast';
import { ResumeSelector, ResumeOption  } from '../resume - selector';
import { MessageTab  } from './MessageTab';
import { ResumeTab  } from './ResumeTab';
import { Job  } from './types';
import {logErrorToProduction} from '@/utils / production_logger';
interface ApplyFormProps {
  job: Job,
  on_close: () => void,
  onApplySuccess?: (job_id: string, ) => Promise < void>;
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
  const handleResumeSelected = (resume: ResumeOption) =>: any {
    setSelectedResume (resume);    setSelectedResumeId (resume.id);
  }
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
      // First submit the application to the job applications table;
      const application_success = await applyToJob (
        job.id;
        message;
        selected_resume && selected_resume.type === 'ai_resume';
          ? selectedResumeId || undefined;
          : undefined;
        selected_resume && selected_resume.type === 'custom_upload';
          ? selected_resume.file;
          : undefined);
      // Check condition
if ( {) {
  $2
}
        throw new Error ("Failed to submit application");
      }
<<<<<<< HEAD
      // Format message with proposal link if provided;
      let full_message = message;
      // Check condition
if ( {) {
  $2
}
        full_message += `\n\n_here's a link to my proposal: ${proposal_link}`;
=======
      // Create conversation with the job client
      await createConversation(
        job.client_id
        fullMessage
        'job'
        job.id
        contextData
      )
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      // Create conversation with the job client;
      await create_conversation (
        job.client_id;
        full_message;
        'job';
        job.id;
        context_data);
      // Call onApplySuccess to update job status in the UI;
      // Check condition
if ( {) {
  $2
}
        await onApplySuccess (job.id);
      }


      

<<<<<<< HEAD
      }),
      return
    }
    
    try {
      setIsSubmitting(true),
      
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
      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
import React, { useState } from 'react',;
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useMessaging } from "@/context/MessagingContext",;
import { toast } from "@/hooks/use-toast",;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { MessageTab } from "./MessageTab",;
import { ResumeTab } from "./ResumeTab",;
import { Job } from "./types",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ApplyFormProps {;
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
;
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {;
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
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume.id);
  },;
  const handleApply = async () => {;
    if (!message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";
      }),;
      return;
    }
;
    try {;
      setIsSubmitting(true),;
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job.id,;
        message,;
        selectedResume && selectedResume.type === 'ai_resume';
          ? selectedResumeId || undefined;
          : undefined,;
        selectedResume && selectedResume.type === 'custom_upload';
          ? selectedResume.file;
          : undefined;
      ),;
      if (!applicationSuccess) {;
        throw new Error("Failed to submit application");
      }
;
      // Format message with proposal link if provided;
      let fullMessage = message,;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }
;
      // Add info about attached resume if available;
      if (selectedResume) {;
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`;
      }
;
      // Create context data for the conversation;
      const contextData = {;
        title: job.title,;
        description: job.description,;
        attachedResume: selectedResume ? {;
          id: selectedResume.id,;
          title: selectedResume.title,;
          type: selectedResume.type;
        } : null;
      },;
      // Create conversation with the job client;
      await createConversation(;
        job.client_id,;
        fullMessage,;
        'job',;
        job.id,;
        contextData;
      ),;
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job.id);
      }
      
      
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),
      
      onClose()
<<<<<<< HEAD
=======
    } catch (error) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      logErrorToProduction('Failed to send application:', { data: error })
      toast({
        title: "Application failed"
        description: "There was an error sending your application. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useJobApplications } from '@/hooks/useJobApplications';
import { useMessaging } from '@/context/MessagingContext';
import { toast } from '@/hooks/use-toast';
import { ResumeSelector, ResumeOption } from '../resume-selector';
import { MessageTab } from './MessageTab';
import { ResumeTab } from './ResumeTab';
import { Job } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';

interface ApplyFormProps {
  job: Job;
  onClose: () => void;
}

export const ApplyForm: React.FC<ApplyFormProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState('message');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { applyToJob } = useJobApplications();
  const { sendMessage } = useMessaging();

  const handleSubmit = async () => {
    if (!selectedResume) {
      toast({
        title: 'Resume required',
        description: 'Please select a resume before applying.',
        variant: 'destructive',
      });
      return;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }
  },

  return (
  }

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
          <MessageTab
  return (


    setIsSubmitting(true);
    try {
      await applyToJob(job.id, {
        resumeId: selectedResume.id,
        message,
      });

      // Send a message to the job poster
      await sendMessage({
        content: `I'm interested in the ${job.title} position. ${message}`,
        recipientId: job.posterId,
        jobId: job.id,
      });

      toast({
        title: 'Application submitted',
        description: 'Your application has been sent successfully.',
      });
      
      onClose();
    } catch (error) {
      logErrorToProduction('Job application failed', error);
      toast({
        title: 'Application failed',
        description: 'There was an error submitting your application.',
        variant: 'destructive',
      });
    } finally {
<<<<<<< HEAD
      setIsSubmitting (false),
    }
  }
=======


      let fullMessage = message;

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react'import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useJobApplications } from "@/hooks/useJobApplications";
import { useMessaging } from "@/context/MessagingContext";
import { toast } from "@/hooks/use-toast";
import { ResumeSelector, ResumeOption } from "../resume-selector";
import { MessageTab } from "./MessageTab";
import { ResumeTab } from "./ResumeTab";
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApplyFormProps {;
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string,) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;
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

  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume);    setSelectedResumeId(resume && resume.id);
  };

  const handleApply = async () => {;
    if (!message && message.trim()) {;
      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";
      });
      return;
    }

    try {;
      setIsSubmitting(true);

      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job && job.id;
        message;
        selectedResume && selectedResume.type === 'ai_resume';
          ? selectedResumeId || undefined;
          : undefined;
        selectedResume && selectedResume.type === 'custom_upload';
          ? selectedResume && selectedResume.file;
          : undefined;
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
          type: selectedResume.type;
        } : null;
      };

      // Create conversation with the job client;
      await createConversation(;
        job && job.client_id;
        fullMessage;
        'job';
        job && job.id;
        contextData;
      );

      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job && job.id);
      }

      toast({;
        title: "Application sent",;
        description: `Your application for "${job && job.title}" has been sent.`}),;
      onClose();
    } catch (error) {;
      logErrorToProduction('Failed to send application:', { data: error }),;
      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.",;
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false),;
      toast ({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),
      on_close ();
    } catch (error) {
      logErrorToProduction ('Failed to send application:', { data: error }),
      toast ({
        title: "Application failed",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive";
      });
    } finally {
      setIsSubmitting (false),
    }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }

  },




  return (


          <MessageTab 

<<<<<<< HEAD
        <TabsContent value="message">
          <MessageTab
          <MessageTab 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            message = {message,}
            setMessage = {setMessage,}
            proposalLink = {proposalLink,}
            setProposalLink = {setProposalLink,}
          />
        </TabsContent>
<<<<<<< HEAD
        <TabsContent value="resume">
          <ResumeTab
            onResumeSelected = {handleResumeSelected,}
            selectedResumeId = {selectedResumeId,}
          />
        </TabsContent>
      </Tabs>
        
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <TabsContent value="message">
          <MessageTab 
;
      toast({;
        title: "Application sent",;
        description: `Your application for "${job.title}" has been sent.`}),;
      onClose();
    } catch (error) {;
      logErrorToProduction('Failed to send application:', { data: error }),;
      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.";
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        
        
        <TabsContent value="resume">
          <ResumeTab 
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />
        </TabsContent>
      </Tabs>
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <MessageTab
            message = {message,}
            setMessage = {setMessage,}
            proposalLink = {proposalLink,}
            setProposalLink = {setProposalLink,}


      


      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
          />;
        </TabsContent>;

        <TabsContent value="resume">;
          <ResumeTab
            onResumeSelected = {handleResumeSelected,}
            selectedResumeId = {selectedResumeId,}
          />;
        </TabsContent>;
      </Tabs>;

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;
<<<<<<< HEAD
      
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick = {handleApply,}
          disabled = {isSubmitting,}
<<<<<<< HEAD
          type="button"
          onClick = {handleApply,}
          disabled = {isSubmitting,}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          type="button" 
          onClick={handleApply}
          disabled={isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white"
<<<<<<< HEAD
=======
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Apply to {job.title}</h2>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="message">Message</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="message" className="space-y-4">
          <MessageTab
            message={message}
            onMessageChange={setMessage}
            job={job}
          />
        </TabsContent>

        <TabsContent value="resume" className="space-y-4">
          <ResumeTab
            selectedResume={selectedResume}
            onResumeSelect={setSelectedResume}
          />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !selectedResume}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
<<<<<<< HEAD
<<<<<<< HEAD
  return
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId |undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)
        </Button>
      </div>
    </>
  )
  if (!message.trim () ) {
  toast ({
  return
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId |undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)
  return;
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)
=======

  return;
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
if (!applicationSuccess) {
}//Format message with proposal link if provided let fullMessage = message
if (proposalLink) {'
  fullMessage += `\n\nHere's a link to my proposal: $ {
  proposalLink
}`
}//Add info about attached resume if available if (selectedResume) {'
  fullMessage += `\n\nI've attached my resume: $ {
  selectedResume.title
}`
}//Create context data for the conversation const contextData = {
  title: job.title
description: job.description
attachedResume: selectedResume ? {
  id: selectedResume.id
title: selectedResume.title
type: selectedResume.type
}: null
}
fullMessage;'
'job'
job.id
contextData)
//Call onApplySuccess to update job status in the UI onClose ()
}catch (error) {'
  logErrorToProduction ('Failed to send application:', {
  data: error
})
toast ({
}finally {
  setIsSubmitting (false)
}
return (<> <Tabs value= {
  activeTab
}onValueChange= {
  setActiveTab "
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {
  message
}setMessage= {
  setMessage
}proposalLink= {
  proposalLink
}setProposalLink= {
  setProposalLink "
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {
  handleResumeSelected
}selectedResumeId= {
  selectedResumeId "
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'"
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')
}</Button> </div> </>)
}'"}
        </Button>;
      </div>;
    </>;
  );

<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            message = {message, }
            set_message = {set_message, }
            proposal_link = {proposal_link, }
            setProposalLink = {setProposalLink, }
          />;
        </TabsContent>;
        <TabsContent value="resume">;
          <ResumeTab;
            onResumeSelected = {handleResumeSelected, }
            selectedResumeId = {selectedResumeId, }
          />;
        </TabsContent>;
      </Tabs>;
      <div className="flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 gap - 2 sm:gap - 0 mt - 4">;
        <Button;
          type="button";
          variant="outline";
          on_click = {on_close, }
          className="border - zion - purple / 30 text - white";
        >;
          Cancel;
        </Button>;
        <Button;
          type="button";
          on_click = {handle_apply, }
          disabled = {is_submitting, }
          className="bg - zion - purple hover:bg - zion - purple - dark text - white";
        >;
          {is_submitting ? (
            <>;
              <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;
              Submitting...;
            </>) : (
            'Submit Application')}
        </Button>;
      </div>;
    </>);
  if () {) {
  $2
}
  toast ({
  return;
}//First submit the application to the job applications table const application_success = await applyToJob (job.id, message, selected_resume && selected_resume.type === 'ai resume'? selectedResumeId || undefined : undefined, selected_resume && selected_resume.type === 'custom upload'? selected_resume.file : undefined);
// Check condition
if ( {) {
  $2
}
}//Format message with proposal link if provided let full_message = message;
// Check condition
if ( {') {
  $2
}
  full_message += `\n\n_here's a link to my proposal: $ {
  proposal_link;
}`;
}//Add info about attached resume if available // Check condition
if ( {') {
  $2
}
  full_message += `\n\n_i've attached my resume: $ {
  selected_resume.title;
}`;
}//Create context data for the conversation const context_data = {
  title: job.title;
description: job.description;
attached_resume: selected_resume ? {
  id: selected_resume.id;
title: selected_resume.title;
type: selected_resume.type;
}: null;
}
full_message;';
'job';
job.id;
context_data);
//Call onApplySuccess to update job status in the UI on_close ();
}catch (error) {';
  logErrorToProduction ('Failed to send application:', {
  data: error;
});
toast ({
}finally {
  setIsSubmitting (false);
}
return (<> <Tabs value= {
  active_tab;
}onValueChange= {
  setActiveTab ";
}className="w - full" > <TabsList className="w - full mb - 4 bg - zion - blue - dark / 30" > <TabsTrigger value="message" className="flex - 1" > resume"className=" flex - 1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {
  message;
}set_message= {
  set_message;
}proposal_link= {
  proposal_link;
}setProposalLink= {
  setProposalLink ";
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {
  handleResumeSelected;
}selectedResumeId= {
  selectedResumeId ";
}/> </TabsContent> </Tabs> <div className=" flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 gap - 2 sm:gap - 0 mt - 4"> <Button > Cancel </Button> <Button > {'";
  is_submitting ? (<> <Loader2 className=" h - 4 w - 4 mr - 2 animate - spin" /> Submitting... </>) : ('Submit Application');
}</Button> </div> </>);
}'"}
}
<<<<<<< HEAD
;
}
;
=======
        </Button>
      </div>
    </div>
  );
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
