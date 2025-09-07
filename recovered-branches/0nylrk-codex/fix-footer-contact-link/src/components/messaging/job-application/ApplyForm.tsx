<<<<<<< HEAD
interface ApplyFormProps {
  }
  "job": Job;
    "onClose": () => void,
onApplySuccess?: ("jobId": string) => Promise<void>
import React, { useState } from 'react';'
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
<<<<<<< HEAD

interface ApplyFormProps {
=======
<<<<<<< HEAD
import { ResumeTab } from "./ResumeTab";
import { Job } from "./types";
interface ApplyFormProps {
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging($2);
  const { applyToJob } = useJobApplications($2);
  const [message, setMessage] = useState($2);
  const [proposalLink, setProposalLink] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
=======

<<<<<<< HEAD
interface ApplyFormProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>
}

import React, { useState } from 'react';
>>>>>>> origin/resolved-merge-conflicts
import {Button} from "@/components/ui/button";"
import {Loader2} from "lucide-react";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {useJobApplications} from "@/hooks/useJobApplications";"
import {useMessaging} from "@/context/MessagingContext";"
import {toast} from "@/hooks/use-toast";"
import {ResumeSelector, ResumeOption} from "../resume-selector";"
import {MessageTab} from "./MessageTab";"
import {ResumeTab} from "./ResumeTab";"
<<<<<<< HEAD
import {Job} from "./types";"
import React, { useState } from 'react','
=======
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

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
import { Button } from "@/components/ui/button","
import { Loader2 } from "lucide-react","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { useJobApplications } from "@/hooks/useJobApplications","
import { useMessaging } from "@/context/MessagingContext","
import { toast } from "@/hooks/use-toast","
import { ResumeSelector, ResumeOption } from "../resume-selector","
import { MessageTab } from "./MessageTab","
interface ApplyFormProps {
  }
  "job": Job,
"onClose": () => void,
onApplySuccess?: ("jobId": string) => Promise<void>
}
import React, { useState } from 'react','
import { Button } from "@/components/ui/button","
import { Loader2 } from "lucide-react","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { useJobApplications } from "@/hooks/useJobApplications","
import { useMessaging } from "@/context/MessagingContext","
import { toast } from "@/hooks/use-toast","
import { ResumeSelector, ResumeOption } from "../resume-selector","
import { MessageTab } from "./MessageTab","
interface ApplyFormProps {
  }
  "job": Job,
"onClose": () => void,
onApplySuccess?: ("jobId": string) => Promise<void>
}interface ApplyFormProps {;
<<<<<<< HEAD
  }
  "job": Job,;
  "onClose": () => void,;
  onApplySuccess?: ("jobId": string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;
}
export function ApplyForm() {;
  }
=======

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;

<<<<<<< HEAD
export function ApplyForm() { return null; }
=======
<<<<<<< HEAD
export function ApplyForm() { return null; }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
export function ApplyForm() {
}
const { createConversation } = useMessaging(),;
const { applyToJob } = useJobApplications(),;
const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`  const { createConversation } = useMessaging();`  const { applyToJob } = useJobApplications();
  const [message, setMessage] = useState(;
    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;`  );
  const [proposalLink, setProposalLink] = useState('');'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("message");"
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
import { Button } from "@/components/ui/button","
import { Loader2 } from "lucide-react","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { useJobApplications } from "@/hooks/useJobApplications","
import { useMessaging } from "@/context/MessagingContext","
import { toast } from "@/hooks/use-toast","
import { ResumeSelector, ResumeOption } from "../resume-selector","
import { MessageTab } from "./MessageTab","
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
  const [activeTab, setActiveTab] = useState<string>("message");"
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
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
  
<<<<<<< HEAD
=======
=======
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {}
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),

    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;
<<<<<<< HEAD
  );'
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const handleApply = async () => {
    if (!message.trim()) {
<<<<<<< HEAD
      toast($2);
      return
    }
    try {
      setIsSubmitting($2);
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob($2);
=======
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume && resume.id);
  };
<<<<<<< HEAD

  const handleApply = async () => {;
    if (!message && message.trim()) {;

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }),
      return
    }
    try {
<<<<<<< HEAD

      setIsSubmitting(true),

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setIsSubmitting(true),

<<<<<<< HEAD
      setIsSubmitting(true);
      setIsSubmitting(true),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResumeId
<<<<<<< HEAD

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

      ),
      
      if (!applicationSuccess) {"
        throw new Error("Failed to submit application")

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
=======
<<<<<<< HEAD
      );
>>>>>>> origin/resolved-merge-conflicts
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      }
      // Format message with proposal link if provided
      let fullMessage = $2;
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
      }
<<<<<<< HEAD
      // Add info about attached resume if available,
if (selectedResume) {
        }
        fullMessage += `\n\nI've attached my "resume": ${selectedResume.title}``      }
      // Create context data for the conversation,
const contextData = {
        }
        "title": job.title,
"description": job.description,
"attachedResume": selectedResume ? {
          }
          "id": selectedResume.id,
"title": selectedResume.title,
"type": selectedResume.type
        } : null
=======
<<<<<<< HEAD
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
      // Create context data for the conversation
      const contextData = $2;
        description: job.description,
=======
      
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Add info about attached resume if available;
      if (selectedResume) {'`
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      }
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Create context data for the conversation
      const contextData = {
        title: job.title
        description: job.description
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        attachedResume: selectedResume ? {
          id: selectedResume.id
          title: selectedResume.title
          type: selectedResume.type
        } : null
<<<<<<< HEAD

      }
      // Create conversation with the job client;
      await createConversation(
        job.client_id;

    try {;
      setIsSubmitting(true);

=======
<<<<<<< HEAD
      },
      
      // Create conversation with the job client
      await createConversation($2);
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
>>>>>>> origin/resolved-merge-conflicts
      }
      // Create conversation with the job client,
await createConversation(
        job.client_id;
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      // First submit the application to the job applications table;
      const applicationSuccess = await applyToJob(;
        job && job.id, ;
        message, ;
        selectedResumeId;
      );
      // Add info about attached resume if available;
      if (selectedResume) {;
        }
        fullMessage += `\n\nI've attached my "resume": ${selectedResume && selectedResume.title}`;`      }
      // Create context data for the conversation;
      const contextData = {;
<<<<<<< HEAD
        }
        "title": job && job.title,,
  "description": job && job.description,;
        "attachedResume": selectedResume ? {;
          }
          "id": selectedResume && selectedResume.id,;
          "title": selectedResume && selectedResume.title,;
          "type": selectedResume && selectedResume.type;
        } : null
};
      });
      return;
    }
        fullMessage;
        'job';'
        job && job.id;
        contextData;
      );
=======
        title: job && job.title,;
        description: job && job.description,;
        attachedResume: selectedResume ? {;
          id: selectedResume && selectedResume.id,;
          title: selectedResume && selectedResume.title,;
          type: selectedResume && selectedResume.type;
        } : null;
      };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      });
      return;
    }

<<<<<<< HEAD
=======
=======
      // Create conversation with the job client;
      await createConversation(;
        job && job.client_id;
        fullMessage;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        'job';
        job && job.id;
        contextData;

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

>>>>>>> origin/resolved-merge-conflicts
      // Create context data for the conversation;
      const contextData = {;
        }
        "title": job.title,,
  "description": job.description,;
        "attachedResume": selectedResume ? {;
          }
          "id": selectedResume.id,;
          "title": selectedResume.title,;
          "type": selectedResume.type;
        } : null;
      },;
      // Create conversation with the job client;
      await createConversation(;
        job.client_id,;
        fullMessage,;
        'job',;'
        job.id,;
        contextData;
      ),;
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        }
        await onApplySuccess(job.id);
<<<<<<< HEAD
=======
<<<<<<< HEAD

      }
      
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      }
      

      }
      
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
      
      }
      
<<<<<<< HEAD
      }

=======
<<<<<<< HEAD
      }

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      toast({
        }
        "title": "Application sent""
        "description": `Your application for "${job.title}" has been sent.`})`      onClose()
    } catch (error) {
<<<<<<< HEAD
      }
      console.error("Failed to send "application":", error),      console.error("Failed to send "application":", error),"
=======
<<<<<<< HEAD
      console.error("Failed to send application:", error);
      console.error("Failed to send application:", error),
=======
<<<<<<< HEAD
      console.error("Failed to send application:", error),
=======
      console.error("Failed to send application:", error);
<<<<<<< HEAD
      console.error("Failed to send application:", error),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      toast({
        }
        "title": "Application failed""
        "description": "There was an error sending your application. Please try again.""
"variant": "destructive";"
      })
    } finally {
      }
      setIsSubmitting(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD

;

      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        await onApplySuccess(job && job.id);
      }

      onClose();
    } catch (error) {;"
      console && console.error("Failed to send application:", error);

        variant: "destructive";
      });
    } finally {;
      setIsSubmitting(false);

  return (

    }
  }

=======
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

>>>>>>> origin/resolved-merge-conflicts
;
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        }
        await onApplySuccess(job && job.id);
      }
      toast({;
        }
        "title": "Application sent",,"
  "description": `Your application for "${job && job.title}" has been sent.`}),;`      onClose();
    } catch (error) {;
      }
      console && console.error("Failed to send "application":", error);"
      toast({;
        }
        "title": "Application failed",,"
  "description": "There was an error sending your application. Please try again.",;"
        "variant": "destructive";"
      });
    } finally {;
      }
      setIsSubmitting(false);
    }
  }
<<<<<<< HEAD
return (;
=======
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    }
  }

  return (

    }
  }
    }

  },

  return (
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    <>;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
        <TabsList className="w-full mb-4 bg-zion-blue-dark/30">;"
          <TabsTrigger value="message" className="flex-1">;"
            Message;
          </TabsTrigger>;
          <TabsTrigger value="resume" className="flex-1">;"
            Resume;
          </TabsTrigger>;
        </TabsList>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <TabsContent value="message">;
          <MessageTab;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        <TabsContent value="message">;"
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
import { Job } from './types';'
interface ApplyFormProps {
  }
  "job": Job,
  "on_close": () => void,
  onApplySuccess?: ("job_id": string) => Promise < void>;
<<<<<<< HEAD
}
export /**
 * ApplyForm - Function description
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
          <MessageTab
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <MessageTab
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
 */
function ApplyForm() {
  }
  const { create_conversation } = use_messaging ();
  const { applyToJob } = useJobApplications ();
const [message, set_message] = useState (;
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`);`  const [proposal_link, setProposalLink] = useState ('');'
  const [is_submitting, setIsSubmitting] = useState (false);
  const [active_tab, setActiveTab] = useState < string>("message");"
  const [selected_resume, setSelectedResume] = useState < ResumeOption | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState < string | null>(null);
;
  const handleResumeSelected = ("resume": ResumeOption) =>: any {
    }
    setSelectedResume (resume),
    setSelectedResumeId (resume.id);
  }
;
  const handle_apply = async () => {
    }
    if () {) {
  $2
}
      toast ({
        }
        "title": "Message required","
        "description": "Please enter a message before applying.","
        "variant": "destructive";"
      });
      return;
    }
    try {
      }
      setIsSubmitting (true);
;
      // First submit the application to the job applications table;
const application_success = await applyToJob (;
        job.id,
        message,
        selectedResumeId);
;
      // Check condition,
if ( {) {
  $2
}
        throw new Error ("Failed to submit application");"
      }
      // Format message with proposal link if provided;
      let full_message = message;
;
      // Check condition,
if ( {) {
  $2
}
        full_message += `\n\n_here's a link to my "proposal": ${proposal_link}`;`      }
      // Add info about attached resume if available;
      // Check condition,
if ( {) {
  $2
}
        full_message += `\n\n_i've attached my "resume": ${selected_resume.title}`;`      }
      // Create context data for the conversation;
      const context_data = {
        }
        "title": job.title,
        "description": job.description,
        "attached_resume": selected_resume ? {
          }
          "id": selected_resume.id,
          "title": selected_resume.title,
          "type": selected_resume.type;
        } : null;
      }
;
      // Create conversation with the job client;
      await create_conversation (
        job.client_id;
        full_message;
        'job';'
        job.id;
        context_data);
;
      // Call onApplySuccess to update job status in the UI;
      // Check condition,
if ( {) {
  $2
}
        await onApplySuccess (job.id);
      }
      toast ({
        }
        "title": "Application sent","
        "description": `Your application for "${job.title}" has been sent.`}),`      on_close ();
    } catch (error) {
      }
      console.error ("Failed to send "application":", error);"
      toast ({
        }
        "title": "Application failed","
        "description": "There was an error sending your application. Please try again.","
        "variant": "destructive";"
      });
    } finally {
      }
      setIsSubmitting (false);
    }
  }
;
return (;
    <>;
      <Tabs value={active_tab} onValueChange={setActiveTab} className="w-full">;"
        <TabsList className="w - full mb - 4 bg - zion - blue-dark / 30">;"
          <TabsTrigger value="message" className="flex-1">;"
            Message;
          </TabsTrigger>;
          <TabsTrigger value="resume" className="flex-1">;"
            Resume;
          </TabsTrigger>;
        </TabsList>;
        <TabsContent value="message">;"
          <MessageTab;
<<<<<<< HEAD
          <MessageTab
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          <MessageTab 

>>>>>>> origin/resolved-merge-conflicts
        ;
        <TabsContent value="message">;"
          <MessageTab ;
<<<<<<< HEAD
        <Button,
type="button""
variant="outline";"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}
<<<<<<< HEAD

          type="button"
          onClick={handleApply}

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
=======
<<<<<<< HEAD

          type="button"
          onClick={handleApply}
=======
          />;
        </TabsContent>;
        <TabsContent value="message">;
          <MessageTab;
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            selectedResumeId={selectedResumeId}
          />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
<<<<<<< HEAD
=======
=======
            selectedResumeId={selectedResumeId} 
          />;
        </TabsContent>;
      </Tabs>;

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        <Button
          type="button"
          variant="outline"
>>>>>>> origin/resolved-merge-conflicts
          onClick={onClose}
          className="border-zion-purple/30 text-white">;"
          Cancel;
        </Button>;          className="border-zion-purple/30 text-white">;"
          Cancel;
        </Button>;
        <Button,
type="button""
          onClick={handleApply}
          disabled={isSubmitting} />;
        </TabsContent>;
        <TabsContent value="resume">;"
          <ResumeTab;
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} />;
        </TabsContent>;
      </Tabs>;
      <div className="flex flex - col - reverse "sm":flex - row "sm":justify - end "sm":space - x-2 gap - 2 "sm":gap - 0 mt-4">;"
        <Button;
          type="button";"
          variant="outline";"
          on_click={on_close}
          className="border - zion - purple / 30 text-white";"
        >;
          Cancel;
        </Button>;
        <Button;
          type="button";"
          on_click={handle_apply}
          disabled={is_submitting}
          className="bg - zion - purple "hover":bg - zion - purple - dark text-white";"
        >;
          {is_submitting ? (
            <>;
              <Loader2 className="h - 4 w - 4 mr - 2 animate-spin" />;"
              }
              Submitting...;
<<<<<<< HEAD
            </>) : (
            'Submit Application')}'
        </Button>;
      </div>;
    </>);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </>) : ('
            'Submit Application')}
        </Button>;
      </div>;
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
const {
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
  return;
}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
  ),; interface ApplyFormProps {
=======
<<<<<<< HEAD
  ),; interface ApplyFormProps {
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {
  }
  fullMessage += `\n\nHere's a link to my "proposal": $ {'
  }
  proposalLink
}``}//Add info about attached resume if available if (selectedResume) {
  }
  fullMessage += `\n\nI've attached my "resume": $ {'
  }
  selectedResume.title
}``
}//Create context data for the conversation const contextData = {
  }
  "title": job.title,
  "description": job.description;
"attachedResume": selectedResume ? {
  }
  "id": selectedResume.id;
"title": selectedResume.title;
"type": selectedResume.type
}: null
};
fullMessage;
'job';'
job.id;
contextData);
//Call onApplySuccess to update job status in the UI onClose ()
}catch (error) {
  
}finally {
  }
  setIsSubmitting (false)
}
};
return (<> <Tabs value= {
  }
  activeTab
}onValueChange= {
  }
  setActiveTab
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {"
  }
  message
}setMessage= {
  }
  setMessage
}proposalLink= {
  }
  proposalLink
}setProposalLink= {
  }
  setProposalLink
} /> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {"
  }
  handleResumeSelected
}selectedResumeId= {
  }
  selectedResumeId
} /> </TabsContent> </Tabs> <div className=" flex flex-col-reverse "sm":flex-row "sm":justify-end "sm":space-x-2 gap-2 "sm":gap-0 mt-4"> <Button > Cancel </Button> <Button > {"
  }
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')'
}</Button> </div> </>)
}
          className="bg-zion-purple "hover":bg-zion-purple-dark text-white""
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />"
              }
              Submitting...
            </>
          ) : (
            'Submit Application''
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
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
