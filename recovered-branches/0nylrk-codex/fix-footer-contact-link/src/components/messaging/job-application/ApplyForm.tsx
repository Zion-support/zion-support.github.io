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
interface ApplyFormProps {

  job: Job
  onClose: () => void

=======
interface ApplyFormProps {}
  job: Job;
  onClose: () => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onApplySuccess?: (jobId: string) => Promise<void>
}

<<<<<<< HEAD
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),

  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`

  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from 'react',;
import { Button } from "@/components/ui/button",;
import { Loader2 } from "lucide-react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useMessaging } from "@/context/MessagingContext",;
import { toast } from "@/hooks/use-toast",;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { MessageTab } from "./MessageTab",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
<<<<<<< HEAD
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const [message, setMessage] = useState(
`Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
'
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}interface ApplyFormProps {;
=======
}
interface ApplyFormProps {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;

export function ApplyForm() { return null; }
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {}
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
  );'
  const [proposalLink, setProposalLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",
interface ApplyFormProps {
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),"
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),

const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [activeTab, setActiveTab] = useState<string>("message");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD

  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume && resume.id);
  };

  const handleApply = async () => {;
    if (!message && message.trim()) {;
toast({;"
        title: "Message required",;"
        description: "Please enter a message before applying.",;"
        variant: "destructive";

      }),
      return;
    }

      }),
      return
    }
    try {

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsSubmitting(true),

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResumeId
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

      ),

      if (!applicationSuccess) {
        throw new Error("Failed to submit application")

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
      // Format message with proposal link if provided
      let fullMessage = message;
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ),

      if (!applicationSuccess) {"
        throw new Error("Failed to submit application")
<<<<<<< HEAD
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
        title: "Message required",;"
        description: "Please enter a message before applying.",;"
        variant: "destructive";
      }),;
      return;
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      }),
      return;
    }
try {
<<<<<<< HEAD
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

),

      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
      // Add info about attached resume if available;
      if (selectedResume) {'`
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Create context data for the conversation
      const contextData = {
        title: job.title
        description: job.description
        attachedResume: selectedResume ? {
          id: selectedResume.id
          title: selectedResume.title
          type: selectedResume.type
        } : null
=======

      // Create context data for the conversation;
      const contextData = {}
        title: job.title;
        description: job.description;
        attachedResume: selectedResume ? {}
          id: selectedResume.id;
          title: selectedResume.title;
          type: selectedResume.type;
        } : null;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
      // Create conversation with the job client;
      await createConversation(
        job.client_id;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    try {;
      setIsSubmitting(true);
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    try {;
      setIsSubmitting(true);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job && job.id, ;
        message, ;
        selectedResumeId;
      );
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
      });
      return;
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        fullMessage;
        'job';
        job && job.id;
        contextData;
<<<<<<< HEAD
      );
<<<<<<< HEAD
<<<<<<< HEAD
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
=======
      );;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      );;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      );

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
        fullMessage,;'
        'job',;
        job.id,;
        contextData;
      ),;
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job.id);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      }

      }

      }

      }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
      onClose()
    } catch (error) {
      console.error("Failed to send application:", error);
      console.error("Failed to send application:", error),
      toast({
        title: "Application failed"
        description: "There was an error sending your application. Please try again."
=======

      }

      }

      toast({"
        title: "Application sent""`
        description: `Your application for "${job.title}" has been sent.`})
      onClose()
    } catch (error) {}
"
      console.error("Failed to send application:", error),

      toast({"
        title: "Application failed""
        description: "There was an error sending your application. Please try again.""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
      })
    } finally {}
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;

      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job && job.id);
      }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({;
title: "Application sent",,
  description: `Your application for "${job && job.title}" has been sent.`}),;

      onClose();
    } catch (error) {;"
      console && console.error("Failed to send application:", error);
toast({;
title: "Application failed",,
  description: "There was an error sending your application. Please try again.",;
        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    }
  }

  return (

    }
  }

    }

  },

  return (
<<<<<<< HEAD

    }
  }

  return (

    }
  }
    }

  },
=======
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
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
  // TODO: Implement
}
  job: Job;,
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>
</void>
  onApplySuccess?: (jobId: string) => Promise<void>;
  const [activeTab, setActiveTab] = useState<string>("message");"
</string>
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);

          <MessageTab
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
=======

          <MessageTab;
'
import React, { useState } from 'react';'
import { Button } from '@/components / ui / button';'
import { Loader2 } from './lucide-react';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { useJobApplications } from '@/hooks / useJobApplications';'
import { use_messaging } from '@/context / MessagingContext';'
import { toast } from '@/hooks / use - toast';'
import { ResumeSelector, ResumeOption } from '../resume - selector';'
import { MessageTab } from './MessageTab';'
import { ResumeTab } from './ResumeTab';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Job } from './types';
interface ApplyFormProps {}
  job: Job,
  on_close: () => void,
  onApplySuccess?: (job_id: string) => Promise < void>;
}
export /**;
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
const handleResumeSelected = (resume: ResumeOption) =>: any {}
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
try {}
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
} finally {}
      setIsSubmitting (false);

    }
  }
;
  return (
<>;
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w-full">;
        <TabsList className="w - full mb - 4 bg - zion - blue-dark / 30">;
          <TabsTrigger value="message" className="flex-1">;
            Message;
          </TabsTrigger>;
<<<<<<< HEAD
          <TabsTrigger value="resume" className="flex-1">;
=======
          <TabsTrigger value="resume" className="flex-1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Resume;
          </TabsTrigger>;
        </TabsList>;"
        <TabsContent value="message">;
          <MessageTab;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<MessageTab 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <MessageTab 

        ;
        <TabsContent value="message">;
          <MessageTab ;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}

<div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-zion-purple/30 text-white">;
          Cancel;
        </Button>;
className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
          className="border-zion-purple/30 text-white">;
        </Button>;          className="border-zion-purple/30 text-white">;
          Cancel;
        </Button>;
        <Button
=======
        <Button"
          type="button""
          variant="outline"
          onClick={onClose}

"
          className="border-zion-purple/30 text-white">;
          Cancel;
        </Button>;

        <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          type="button"
          onClick={handleApply}
<<<<<<< HEAD
          disabled={isSubmitting}

          {isSubmitting ? (;
            <>;"
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          ) : (;
            'Submit Application';
          )}
<<<<<<< HEAD

          />;

=======
          disabled={isSubmitting}          />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          disabled={isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
;
        <TabsContent value="resume">;
          <ResumeTab ;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} ;
          />;
          disabled={isSubmitting}          />;
        </TabsContent>;
        <TabsContent value="resume">;

    <>;"
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;"
</Tabs>"
        <TabsList className="w - full mb - 4 bg - zion - blue - dark / 30">;"
</TabsList>"
          <TabsTrigger value="message" className="flex - 1">;"
</TabsTrigger>
          </TabsTrigger>;"
          <TabsTrigger value="resume" className="flex - 1">;"
</TabsTrigger>
          </TabsTrigger>;
        </TabsList>;"
        <TabsContent value="message">;"
</TabsContent>
          <MessageTab;

          <MessageTab;
          <MessageTab;
        ;"
        <TabsContent value="message">;"
</MessageTab>
          <MessageTab ;
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}

          />;
</MessageTab>
        </TabsContent>;"
        <TabsContent value="resume">;"
</TabsContent>
          <ResumeTab;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />;
</ResumeTab>
        </TabsContent>;
      </Tabs>;"
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;"
</div>
        <Button;"
          type="button"""
          variant="outline""
          onClick={onClose}"
          className="border-zion-purple/30 text-white">;"
</Button>
        </Button>;
        </Button>;
        <Button;"
          type="button""
          onClick={handleApply}
          disabled={isSubmitting}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white";
        >;
          {isSubmitting ? (;
            <>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
          ) : (;
            'Submit Application';
          disabled={isSubmitting}"
          className="bg-zion-purple hover:bg-zion-purple-dark text-white">;"
</Button>
            <>;"
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
</Loader2>
            </>;)
          ) : (;"
            'Submit Application';')
          )}

        </Button>;
      </div>;
    </>;
  );
}

) :(;
            'Submit Application';
          )}
        </Button>;
      </div>;
    </>;
          />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </TabsContent>;
        <TabsContent value="resume">;
=======
        </TabsContent>;'
        <TabsContent value="resume">;"
</TabsContent>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <ResumeTab;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId}
          />;
        </TabsContent>;
</Tabs>;
      <div className="flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 gap - 2 sm:gap - 0 mt-4">;
        <Button;
          type="button";
          variant="outline";
          on_click={on_close}
<<<<<<< HEAD
          className="border - zion - purple / 30 text-white";
=======
          className="border - zion - purple / 30 text-white";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >;
          Cancel;
        </Button>;
        <Button;"
          type="button";
          on_click={handle_apply}
disabled={is_submitting}
          className="bg - zion - purple hover:bg - zion - purple - dark text-white";
        >;
          {is_submitting ? (
            <>;
<<<<<<< HEAD
              <Loader2 className="h - 4 w - 4 mr - 2 animate-spin" />;
=======
              <Loader2 className="h - 4 w - 4 mr - 2 animate-spin" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Submitting...;
            </>) : ('
            'Submit Application')}
        </Button>;
      </div>;
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  ),; interface ApplyFormProps {
=======
}  ),; interface ApplyFormProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  ),; interface ApplyFormProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  ),; interface ApplyFormProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

;
  ),; interface ApplyFormProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  job: Job;
onClose: () => void;
onApplySuccess?: (jobId: string) => Promise<void> 
}export function ApplyForm ({};
  job, onClose, onApplySuccess;
}: ApplyFormProps) {}
  const {}
  createConversation;
}= useMessaging ();
const {}
  applyToJob;
}= useJobApplications ();
const [message, setMessage] = useState ();'
const [proposalLink, setProposalLink] = useState ('');
const [isSubmitting, setIsSubmitting] = useState (false);"
const [activeTab, setActiveTab] = useState<string> ("message");
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
  if (!message.trim () ) {}
  toast ({}
  return;
}
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
  title: job.title,
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
</ResumeTab>
        </TabsContent>;

      </Tabs>;"
      <div className="flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 gap - 2 sm:gap - 0 mt - 4">;"
</div>
        <Button;"
          type="button";""
          variant="outline";"
          on_click={on_close}"
          className="border - zion - purple / 30 text - white";"
        >;
</Button>
        </Button>;
        <Button;"
          type="button";"
          on_click={handle_apply}
          disabled={is_submitting}"
          className="bg - zion - purple hover:bg - zion - purple - dark text - white";"
        >;
</Button>
            <>;"
              <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;"
</Loader2>
            </>) : ()"
            'Submit Application')}'
        </Button>;
      </div>;
    </>);
}

  ),; interface ApplyFormProps {
  // TODO: Implement
}
  job: Job;,
  onClose: () => void;
onApplySuccess?: (jobId: string) => Promise<void> 
</void>'
const [activeTab, setActiveTab] = useState<string> ("message");"
</string>
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
</ResumeOption>
const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
</string>
return (<> <Tabs value= {
  activeTab;
}onValueChange= {
  setActiveTab;"
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {"
</Tabs>"
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {"
</TabsContent>"
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {"
</div>)"
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')'
</Loader2>
}</Button> </div> </>) 
}'
          className="bg-zion-purple hover:bg-zion-purple-dark text-white""
        >
          {isSubmitting ? (
            <>"
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />"
</Loader2>
            </>)
          ) : ("
            'Submit Application'')

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        job.id;)
        context_data);
      // Call onApplySuccess to update job status in the UI;
      // Check condition;
        await onApplySuccess (job.id);
      toast ({
        title: "Application sent",")"`;
        description: `Your application for "${job.title}" has been sent.`}),"
      on_close ();
    } catch (error) {"
      console.error ("Failed to send application:", error);"
        title: "Application failed",""
        description: "There was an error sending your application. Please try again.",""
    } finally {
  // TODO: Implement
      setIsSubmitting (false);
  return (
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;"
        <TabsList className="w - full mb - 4 bg - zion - blue - dark / 30">;"
          <TabsTrigger value="message" className="flex - 1">;"

          <TabsTrigger value="resume" className="flex - 1">;"

          <MessageTab;

          <MessageTab ;
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}

          />;

        <TabsContent value="resume">;"

          <ResumeTab;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;"
</div>
        <Button;"
          type="button"""
          variant="outline""
          onClick={onClose}"
          className="border-zion-purple/30 text-white">;"

          type="button""
          onClick={handleApply}
          disabled={isSubmitting}"
          className="bg-zion-purple hover:bg-zion-purple-dark text-white">;"

              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
</Loader2>
            </>;)
          ) : (;"
            'Submit Application';')
          )}

      </div>;
    </>;
  );

      <div className="flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2 gap - 2 sm:gap - 0 mt - 4">;"
          type="button";""
          variant="outline";"
          on_click={on_close}"
          className="border - zion - purple / 30 text - white";"
        >;

          type="button";"
          on_click={handle_apply}
          disabled={is_submitting}"
          className="bg - zion - purple hover:bg - zion - purple - dark text - white";"

              <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;"
            </>) : ()"
            'Submit Application')}
    </>);

  ),; interface ApplyFormProps {
  // TODO: Implement
const [activeTab, setActiveTab] = useState<string> ("message");"
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);

const [selectedResumeId, setSelectedResumeId] = useState<string | null> (null);
return (<> <Tabs value= {
  activeTab;
}onValueChange= {
  setActiveTab;"
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume   <TabsContent value=" message"> <MessageTab message= {"
}/>  <TabsContent value=" resume"> <ResumeTab onResumeSelected= {"
}/>   <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel  <Button > {"
</div>)"
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')
} </div> </>) 
          className="bg-zion-purple hover:bg-zion-purple-dark text-white""
        >
          {isSubmitting ? (
            <>"
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />"
            </>)
          ) : ("
            'Submit Application)
    </>
  )
`;
pr-12325
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
