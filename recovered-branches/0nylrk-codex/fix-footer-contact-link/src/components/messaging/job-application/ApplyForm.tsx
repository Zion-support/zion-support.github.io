import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",

<<<<<<< HEAD
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}

import React, { useState } from 'react';
import {Button} from "@/components/ui/button";"
import {Loader2} from "lucide-react";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {useJobApplications} from "@/hooks/useJobApplications";"
import {useMessaging} from "@/context/MessagingContext";"
import {toast} from "@/hooks/use-toast";"
import {ResumeSelector, ResumeOption} from "../resume-selector";"
import {MessageTab} from "./MessageTab";"
import {ResumeTab} from "./ResumeTab";"
import {Job} from "./types";

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
<<<<<<< HEAD
interface ApplyFormProps {
  }
  "job": Job,
"onClose": () => void,
onApplySuccess?: ("jobId": string) => Promise<void>
=======

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>

<<<<<<< HEAD
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();

  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;

  );

  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
"
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);

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
}'
import React, { useState } from 'react',"
import { Button } from "@/components/ui/button","
import { Loader2 } from "lucide-react","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { useJobApplications } from "@/hooks/useJobApplications","
import { useMessaging } from "@/context/MessagingContext","
import { toast } from "@/hooks/use-toast","
import { ResumeSelector, ResumeOption } from "../resume-selector","
import { MessageTab } from "./MessageTab",
interface ApplyFormProps {};
  job: Job;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>

>>>>>>> origin/chore/fix-lint-and-merge
}interface ApplyFormProps {;

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
interface ApplyFormProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;

<<<<<<< HEAD
export function ApplyForm() { return null; }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
<<<<<<< HEAD
export function ApplyForm() {
}
const { createConversation } = useMessaging(),;
const { applyToJob } = useJobApplications(),;
const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`  const { createConversation } = useMessaging();`  const { applyToJob } = useJobApplications();
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;`  );
  const [proposalLink, setProposalLink] = useState('');'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("message");"
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
interface ApplyFormProps {
}
const [proposalLink, setProposalLink] = useState(''),;'
const [isSubmitting, setIsSubmitting] = useState(false),;
const [activeTab, setActiveTab] = useState<string>("message"),;"
const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),;
  const handleResumeSelected = ("resume": ResumeOption) => {
    }
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
  const handleApply = async () => {
    }
    if (!message.trim()) {
      }
      toast({
        }
        "title": "title","
    "description": "Please enter a message before applying.""
"variant": "destructive";"
      }),
return;
    }
    try {
  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume($2);
    setSelectedResumeId(resume.id)
  },
  
=======
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {}
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),

    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
<<<<<<< HEAD
  );'
=======
<<<<<<< HEAD
  );
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
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

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {;
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),"
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),

  },

  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
}



  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ),
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
<<<<<<< HEAD
  },
  

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
<<<<<<< HEAD
  }
  },
  
=======

  },
  


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleApply = async () => {
>>>>>>> origin/chore/fix-lint-and-merge
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume && resume.id);
  };
  const handleApply = async () => {;
    if (!message && message.trim()) {;
<<<<<<< HEAD
=======
      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";
<<<<<<< HEAD
=======

      });
      return;
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),
      return
    }
    try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setIsSubmitting(true),

<<<<<<< HEAD
      setIsSubmitting(true);
      setIsSubmitting(true),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResumeId
<<<<<<< HEAD
      );
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
      // Format message with proposal link if provided
      let fullMessage = message;
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
=======

import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useMessaging } from "@/context/MessagingContext",;
import { toast } from "@/hooks/use-toast",;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { MessageTab } from "./MessageTab",;
interface ApplyFormProps {
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ),
      
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
<<<<<<< HEAD
      }
      
      // Format message with proposal link if provided
      let fullMessage = message;
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
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
;
    try {;
      setIsSubmitting(true),;
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job.id,;
        message,;
        selectedResumeId;
      ),;
      if (!applicationSuccess) {;
        throw new Error("Failed to submit application");
      }
;
      // Format message with proposal link if provided;
      let fullMessage = message,;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;

      ),
      
      if (!applicationSuccess) {"
        throw new Error("Failed to submit application")
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
export function ApplyForm() { return null; }
  const { createConversation } = useMessaging(),;
  const { applyToJob } = useJobApplications(),;
  const [message, setMessage] = useState(;'"`
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
  ),;'
  const [proposalLink, setProposalLink] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;"
  const [activeTab, setActiveTab] = useState<string>("message"),;
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),;
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume.id);
  },;
  const handleApply = async () => {;
    if (!message.trim()) {;
      toast({;"
        title: "Message required","
        description: "Please enter a message before applying.",;"
        variant: "destructive";
      }),;
      return;
    }

      }),
      return;
    }

      setIsSubmitting(true);
      setIsSubmitting(true),
      
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(
        job.id;
        message;
        selectedResumeId;
      );
      if (!applicationSuccess) {"
        throw new Error("Failed to submit application")
      }
;
      // Format message with proposal link if provided;
      let fullMessage = message,;
      if (proposalLink) {;'`
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;

      }
      // Add info about attached resume if available;
      if (selectedResume) {'`
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      // Create conversation with the job client;
      await createConversation(
        job.client_id;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      });
      return;
    }
    try {;
      setIsSubmitting(true);
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job && job.id, ;
        message, ;
        selectedResumeId;
      );
<<<<<<< HEAD
=======
      if (!applicationSuccess) {;
        throw new Error("Failed to submit application");
      }
      // Format message with proposal link if provided;
      let fullMessage = message;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Add info about attached resume if available;
      if (selectedResume) {;'`
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
<<<<<<< HEAD
      });
      return;
    }

=======
      // Create conversation with the job client;
      await createConversation(;
        job && job.client_id;
        fullMessage;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        'job';
        job && job.id;
        contextData;

<<<<<<< HEAD
=======


<<<<<<< HEAD
        fullMessage;
        'job';
        job.id;
        contextData
      );
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
      }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

      // Create context data for the conversation;
<<<<<<< HEAD
        }
        "title": job.title,,
  "description": job.description,;
        "attachedResume": selectedResume ? {;
          }
          "id": selectedResume.id,;
          "title": selectedResume.title,;
          "type": selectedResume.type;
=======
      const contextData = {;
        title: job.title,;
        description: job.description,;
        attachedResume: selectedResume ? {;
          id: selectedResume.id,;
          title: selectedResume.title,;
          type: selectedResume.type;
>>>>>>> origin/chore/fix-lint-and-merge
        } : null;
      },;
      // Create conversation with the job client;
      await createConversation(;
        job.client_id,;
        fullMessage,;'
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
      }
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      }
      
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
      
      }
      
<<<<<<< HEAD
      }

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
      onClose()
    } catch (error) {
<<<<<<< HEAD
      console.error("Failed to send application:", error),
=======
      console.error("Failed to send application:", error);
<<<<<<< HEAD
      console.error("Failed to send application:", error),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: "Application failed"
        description: "There was an error sending your application. Please try again."

        variant: "destructive"
      })
    } finally {}
      setIsSubmitting(false)
<<<<<<< HEAD
    }
  }
  },

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

;

      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job && job.id);
      }
<<<<<<< HEAD
      toast({;
        title: "Application sent",;
        description: `Your application for "${job && job.title}" has been sent.`}),;
=======

<<<<<<< HEAD
=======
      toast({;
        title: "Application sent",;
        description: `Your application for "${job && job.title}" has been sent.`}),;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      onClose();
    } catch (error) {;"
      console && console.error("Failed to send application:", error);
<<<<<<< HEAD

=======
      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.",;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
=======

  return (

    }
  }
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

  },

<<<<<<< HEAD
  return (

    }
  }

  return (

    }
  }
    }

  },

  return (
=======

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
        <TabsContent value="message">;"
import { Button } from '@/components / ui / button';'
import { Loader2 } from './lucide-react';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { useJobApplications } from '@/hooks / useJobApplications';'
import { use_messaging } from '@/context / MessagingContext';'
import { toast } from '@/hooks / use - toast';'
import { ResumeSelector, ResumeOption } from '../resume - selector';'
import { MessageTab } from './MessageTab';'
import { ResumeTab } from './ResumeTab';'
import { Job } from './types';'
interface ApplyFormProps {
  }
  "job": Job,
  "on_close": () => void,
  onApplySuccess?: ("job_id": string) => Promise < void>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

        <TabsContent value="message">;
  // TODO: Implement
>>>>>>> origin/chore/fix-lint-and-merge
}
  job: Job;,
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>
</void>
  onApplySuccess?: (jobId: string) => Promise<void>;
  const [activeTab, setActiveTab] = useState<string>("message");"
</string>
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <MessageTab
<<<<<<< HEAD
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
</void>"
  const [activeTab, setActiveTab] = useState<string>("message"),"
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),

  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
</string>"

  const [activeTab, setActiveTab] = useState<string>("message"),;"
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;

  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),;
  onApplySuccess?:(jobId:string) => Promise<void>;

    <>;"
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
"
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">;"
          <TabsTrigger value="message" className="flex-1">;"

          ;"
          <TabsTrigger value="resume" className="flex-1">;"

          ;
        <TabsContent value="message">;"

          <MessageTab;"
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
interface ApplyFormProps {}
  job: Job,
  on_close: () => void,
  onApplySuccess?: (job_id: string) => Promise < void>;
}

 * ApplyForm - Function description;
 */
function ApplyForm() {}
  const { create_conversation } = use_messaging ();
  const { applyToJob } = useJobApplications ();
  const [message, set_message] = useState ('"`
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`);'
  const [proposal_link, setProposalLink] = useState ('');
  const [is_submitting, setIsSubmitting] = useState (false);"
  const [active_tab, setActiveTab] = useState < string>("message");

  const [message, set_message] = useState ()'
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`);""
  const [proposal_link, setProposalLink] = useState ('');'
  const [is_submitting, setIsSubmitting] = useState (false);'
  const [active_tab, setActiveTab] = useState < string>("message");"

  const [selected_resume, setSelectedResume] = useState < ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState < string | null>(null);
;

    setSelectedResume (resume),
    setSelectedResumeId (resume.id);
  }
;
  const handle_apply = async () => {}
    if () {) {}
  $2;
}
      toast ({"
        title: "Message required","
        description: "Please enter a message before applying.","
        variant: "destructive";
  $2;
}
      toast ({"
        title: "Message required",""
        description: "Please enter a message before applying.",""
        variant: "destructive";")

      });
      return;
    }

      setIsSubmitting (true);
;
      // First submit the application to the job applications table;
      const application_success = await applyToJob (
        job.id,
        message,
        selectedResumeId);
;
      // Check condition;
if ( {) {}
  $2;
}"
        throw new Error ("Failed to submit application");
        message,)
        selectedResumeId);
;
      // Check condition;

if ( {) {
  $2;
}"
        throw new Error ("Failed to submit application");"

      }
      // Format message with proposal link if provided;
      let full_message = message;
;
      // Check condition;
if ( {) {}
  $2;
}'`
        full_message += `\n\n_here's a link to my proposal: ${proposal_link}`;
      }
      // Add info about attached resume if available;
      // Check condition;
if ( {) {}
  $2;
}'`
        full_message += `\n\n_i've attached my resume: ${selected_resume.title}`;
      }
  const [message, set_message] = useState ()
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`);""
  const [proposal_link, setProposalLink] = useState ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const [active_tab, setActiveTab] = useState < string>("message");"
  const [selected_resume, setSelectedResume] = useState < ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState < string | null>(null);
  const handleResumeSelected = (resume: ResumeOption) =>: any {
  // TODO: Implement
    setSelectedResume (resume),
    setSelectedResumeId (resume.id);
  const handle_apply = async () => {
    if () {) {
  $2;
      toast ({"
        title: "Message required",""
        description: "Please enter a message before applying.",""
        variant: "destructive";")
      });
      return;
    try {
  // TODO: Implement
      setIsSubmitting (true);
      // First submit the application to the job applications table;
      const application_success = await applyToJob (
        job.id,
        message,)
        selectedResumeId);
      // Check condition;

if ( {) {
}"
        throw new Error ("Failed to submit application");"
      // Format message with proposal link if provided;
      let full_message = message;
      // Check condition;
}"`;
        full_message += `\n\n_here's a link to my proposal: ${proposal_link}`;
      // Add info about attached resume if available;
      // Check condition;
}`;
        full_message += `\n\n_i've attached my resume: ${selected_resume.title}`;
pr-12325
if ( {) {
  $2;
}'
        full_message += `\n\n_i've attached my resume: ${selected_resume.title}`;'

      }
      // Create context data for the conversation;
      const context_data = {}
        title: job.title,
        description: job.description,
        attached_resume: selected_resume ? {}
          id: selected_resume.id,

        attached_resume: selected_resume ? {,
  id: selected_resume.id,
          title: selected_resume.title,
          type: selected_resume.type;

        } : null;
      }
;
        attached_resume: selected_resume ? {,
  id: selected_resume.id,
          title: selected_resume.title,
          type: selected_resume.type;
        } : null;
pr-12325
      // Create conversation with the job client;
      await create_conversation (
        job.client_id;
        full_message;'
        'job';
        job.id;
        context_data);
;
      // Call onApplySuccess to update job status in the UI;
      // Check condition;
if ( {) {}
  $2;
}
        await onApplySuccess (job.id);
      }
      toast ({"
        title: "Application sent","`
        description: `Your application for "${job.title}" has been sent.`}),
      on_close ();
    } catch (error) {"
      console.error ("Failed to send application:", error);
      toast ({"
        title: "Application failed","
        description: "There was an error sending your application. Please try again.","
        variant: "destructive";
      });

      setIsSubmitting (false);

    }
  }
;
  return (

            Resume;
          </TabsTrigger>;
        </TabsList>;"
        <TabsContent value="message">;
          <MessageTab;

<<<<<<< HEAD
=======
          <MessageTab 

        ;
        <TabsContent value="message">;
          <MessageTab ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}
<<<<<<< HEAD

          type="button"
          onClick={handleApply}
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
<<<<<<< HEAD
            selectedResumeId={selectedResumeId}
          />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
=======
            selectedResumeId={selectedResumeId} 
          />;
        </TabsContent>;
      </Tabs>;

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
<<<<<<< HEAD
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
=======
          className="border-zion-purple/30 text-white">;
          Cancel;
        </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button
          type="button"
          onClick={handleApply}
          disabled={isSubmitting}
<<<<<<< HEAD
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
=======
          className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {isSubmitting ? (;
            <>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
          ) :(;
            'Submit Application';
          )}
<<<<<<< HEAD
        </Button>;
      </div>;
    </>;
=======

        </Button>;
      </div>;
    </>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;

          <ResumeTab;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId}
          />;
        </TabsContent>;

        >;
          Cancel;
        </Button>;
        <Button;"
          type="button";
          on_click={handle_apply}

              Submitting...;
            </>) : ('
            'Submit Application')}
        </Button>;
      </div>;
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
}  ),; interface ApplyFormProps {
  }
  "job": Job;
"onClose": () => void;
onApplySuccess?: ("jobId": string) => Promise<void>
}export function ApplyForm() {
  }
  const {
  }
  createConversation
}= useMessaging ();
  }
  applyToJob
}= useJobApplications ();
const [message, setMessage] = useState ();
const [proposalLink, setProposalLink] = useState ('');'
const [isSubmitting, setIsSubmitting] = useState (false);
const [activeTab, setActiveTab] = useState<string> ("message");"
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
  if (!message.trim () ) {
  }
  toast ({
  }
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return;
}
;
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  ),; interface ApplyFormProps {
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
