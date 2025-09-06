<<<<<<< HEAD

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),

  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`

  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
import { ResumeTab } from "./ResumeTab",
import { Job } from "./types",
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
<<<<<<< HEAD
interface ApplyFormProps {;
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
<<<<<<< HEAD
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
=======
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
interface ApplyFormProps {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}
import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}
interface ApplyFormProps {;
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {;
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ),
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
<<<<<<< HEAD

  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  


<<<<<<< HEAD
=======
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
  }
  },
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

      });
      return;
    }

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }),
      return
    }
    try {
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setIsSubmitting(true),
      


<<<<<<< HEAD
=======
      setIsSubmitting(true);
      setIsSubmitting(true),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResumeId
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
      );
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
      // Format message with proposal link if provided
      let fullMessage = message;
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
<<<<<<< HEAD
=======
      }
      
      // Format message with proposal link if provided
      let fullMessage = message;
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

      }),
      return
    }
    try {
      setIsSubmitting(true);
      setIsSubmitting(true),
      
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResumeId
      );
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
;
      // Format message with proposal link if provided;
      let fullMessage = message,;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
<<<<<<< HEAD

      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
<<<<<<< HEAD
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      


<<<<<<< HEAD
<<<<<<< HEAD
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

      });
      return;
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    try {;
      setIsSubmitting(true);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job && job.id, ;
        message, ;
        selectedResumeId;
      );
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
      });
      return;
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        fullMessage;
        'job';
        job && job.id;
        contextData;
      );
<<<<<<< HEAD
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
=======
<<<<<<< HEAD



<<<<<<< HEAD
=======
=======
        fullMessage;
        'job';
        job.id;
        contextData
      );
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
      }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      }
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      }
      
      }
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      }
      
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
      onClose()
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Failed to send application:", error);
=======
      console.error("Failed to send application:", error),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      console.error("Failed to send application:", error),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
        title: "Application failed"
        description: "There was an error sending your application. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }

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
<<<<<<< HEAD

;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

;

      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job && job.id);
      }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({;
        title: "Application sent",;
        description: `Your application for "${job && job.title}" has been sent.`}),;

      onClose();
    } catch (error) {;
      console && console.error("Failed to send application:", error);
      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <MessageTab
          <MessageTab 
;
      toast({;
        title: "Application sent",;
        description: `Your application for "${job.title}" has been sent.`}),;
      onClose();
    } catch (error) {;
      console.error("Failed to send application:", error),;
      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
<<<<<<< HEAD

    }
  }

  return (

=======
=======

    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }

  },


  return (
<<<<<<< HEAD

    }
  }
  return (

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
    }
  };
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

        <TabsContent value="message">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <MessageTab
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          <MessageTab 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

          <MessageTab 

        ;
        <TabsContent value="message">;
          <MessageTab ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
          />;
        </TabsContent>;
        <TabsContent value="message">;
          <MessageTab;
            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
<<<<<<< HEAD
<<<<<<< HEAD
          className="border-zion-purple/30 text-white">;
          Cancel;
        </Button>;
=======
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          className="border-zion-purple/30 text-white">;
          Cancel;
        </Button>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Button
          type="button"
          onClick={handleApply}
          disabled={isSubmitting}
<<<<<<< HEAD
<<<<<<< HEAD
          className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {isSubmitting ? (;
            <>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
<<<<<<< HEAD
<<<<<<< HEAD
          ) : (;
            'Submit Application';
          )}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        </Button>;
      </div>;
    </>;
  );
}

=======
          ) :(;
            'Submit Application';
          )}
        </Button>;
      </div>;
    </>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          />;
        </TabsContent>;
        <TabsContent value="resume">;
          <ResumeTab;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId}
          />;
        </TabsContent>;
      </Tabs>;
      <div className="flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 gap - 2 sm:gap - 0 mt - 4">;
        <Button;
          type="button";
          variant="outline";
          on_click={on_close}
          className="border - zion - purple / 30 text - white";
        >;
          Cancel;
        </Button>;
        <Button;
          type="button";
          on_click={handle_apply}
          disabled={is_submitting}
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
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ),; interface ApplyFormProps {
  job: Job;
onClose: () => void;
onApplySuccess?: (jobId: string) => Promise<void> 
}export function ApplyForm ({
  job, onClose, onApplySuccess 
}: ApplyFormProps) {
  const {
  createConversation 
}= useMessaging ();
const {
  applyToJob 
}= useJobApplications ();
const [message, setMessage] = useState ();
const [proposalLink, setProposalLink] = useState ('');
const [isSubmitting, setIsSubmitting] = useState (false);
const [activeTab, setActiveTab] = useState<string> ("message");
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
  if (!message.trim () ) {
  toast ({
  return;
}
<<<<<<< HEAD
;

}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {
  fullMessage += `\n\nHere's a link to my proposal: $ {
  proposalLink 
}` 
}//Add info about attached resume if available if (selectedResume) {
  fullMessage += `\n\nI've attached my resume: $ {
  selectedResume.title 
}` 
}//Create context data for the conversation const contextData = {
  title: job.title;
description: job.description;
attachedResume: selectedResume ? {
  id: selectedResume.id;
title: selectedResume.title;
type: selectedResume.type 
}: null 
};
fullMessage;
'job';
job.id;
contextData);
//Call onApplySuccess to update job status in the UI onClose () 
}catch (error) {
  
}finally {
  setIsSubmitting (false) 
}
};
return (<> <Tabs value= {
  activeTab 
}onValueChange= {
  setActiveTab 
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {
  message 
}setMessage= {
  setMessage 
}proposalLink= {
  proposalLink 
}setProposalLink= {
  setProposalLink 
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {
  handleResumeSelected 
}selectedResumeId= {
  selectedResumeId 
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application') 
}</Button> </div> </>) 
}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white"
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
  )
}
        </Button>;
      </div>;
    </>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
