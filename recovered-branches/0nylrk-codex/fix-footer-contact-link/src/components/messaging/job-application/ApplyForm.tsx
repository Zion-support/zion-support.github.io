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


=======
interface ApplyFormProps {
  }
  "job": Job;
    "onClose": () => void,
onApplySuccess?: ("jobId": string) => Promise<void>
import React, { useState } from 'react';'
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
import {Job} from "./types";"
import React, { useState } from 'react','
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface ApplyFormProps {

  job: Job
  onClose: () => void

  onApplySuccess?: (jobId: string) => Promise<void>


<<<<<<< HEAD

  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {}
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),

    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;

=======
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
  }
  "job": Job,;
  "onClose": () => void,;
  onApplySuccess?: ("jobId": string) => Promise<void>;
}


  job: Job,;
  onClose: () => void,;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

export function ApplyForm(): any ({ job, onClose, onApplySuccess }: ApplyFormProps) {;


export function ApplyForm() { return null; }
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
  
  );
  );'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


  const handleApply = async () => {

    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"



=======
  ),
  const [proposalLink, setProposalLink] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [activeTab, setActiveTab] = useState<string>("message"),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null),
  
  },
  


  const handleResumeSelected = (resume: ResumeOption) => {
    setSelectedResume(resume)
    setSelectedResumeId(resume.id)
  }
  },
  
  const handleApply = async () => {
    if (!message.trim()) {
      toast($2);
      return
    }
    try {
      setIsSubmitting($2);
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleResumeSelected = (resume: ResumeOption) => {;
    setSelectedResume(resume),;
    setSelectedResumeId(resume && resume.id);
  };

  const handleApply = async () => {;
    if (!message && message.trim()) {;
<<<<<<< HEAD

      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      }),
      return
    }
    try {

<<<<<<< HEAD


      setIsSubmitting(true),



=======
      setIsSubmitting(true),

      setIsSubmitting(true),

      setIsSubmitting(true);
      setIsSubmitting(true),
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // First submit the application to the job applications table
      const applicationSuccess = await applyToJob(
        job.id
        message
        selectedResumeId
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ),
      
      if (!applicationSuccess) {"
        throw new Error("Failed to submit application")

<<<<<<< HEAD
      
      // Format message with proposal link if provided
      let fullMessage = message;
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
<<<<<<< HEAD

=======
      }
      // Format message with proposal link if provided
      let fullMessage = $2;
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
      }
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


      


      
      
      // Create context data for the conversation
      const contextData = {
        title: job.title
        description: job.description
>>>>>>> origin/cursor/delete-old-data-records-6bba
        attachedResume: selectedResume ? {
          id: selectedResume.id
          title: selectedResume.title
          type: selectedResume.type
        } : null
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      }
      // Create conversation with the job client;
      await createConversation(
        job.client_id;


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

      if (!applicationSuccess) {;
        throw new Error("Failed to submit application");
      }
      // Format message with proposal link if provided;
      let fullMessage = message;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Add info about attached resume if available;
      if (selectedResume) {;
        }
        fullMessage += `\n\nI've attached my "resume": ${selectedResume && selectedResume.title}`;`      }
      // Create context data for the conversation;
      const contextData = {;
<<<<<<< HEAD
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
        fullMessage;
=======
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
      });
      return;
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba

        'job';
        job && job.id;
        contextData;


<<<<<<< HEAD



;

      // Create context data for the conversation;

      const contextData = {;
        title: job.title,;
        description: job.description,;
        attachedResume: selectedResume ? {;
          id: selectedResume.id,;
          title: selectedResume.title,;
          type: selectedResume.type;

=======
;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      }
      

      }
      
      
      }
      
      }
      

      }
      
      }

>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({
        }
        "title": "Application sent""
        "description": `Your application for "${job.title}" has been sent.`})`      onClose()
    } catch (error) {
<<<<<<< HEAD

      console.error("Failed to send application:", error);

=======
      }
      console.error("Failed to send "application":", error),      console.error("Failed to send "application":", error),"
      console.error("Failed to send application:", error),
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
      // Call onApplySuccess to update job status in the UI;
      if (onApplySuccess) {;
        }
        await onApplySuccess(job && job.id);
      }
<<<<<<< HEAD



      onClose();
    } catch (error) {;"
      console && console.error("Failed to send application:", error);

      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.",;

        variant: "destructive";
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
    } finally {;
      }
      setIsSubmitting(false);
<<<<<<< HEAD


  return (

    }
  }

=======
    }
  }
return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

  },

<<<<<<< HEAD
=======
  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba


  return (



<<<<<<< HEAD
=======
  return (


    }
  }

  return (

    }
  }
    }

  },

  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


        <TabsContent value="message">;
  // TODO: Implement
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
          <MessageTab
          <MessageTab

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
          <MessageTab
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ;
        <TabsContent value="message">;"
          <MessageTab ;
<<<<<<< HEAD

=======
        <Button,
type="button""
variant="outline";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            message={message}
            set_message={set_message}
            proposal_link={proposal_link}
            setProposalLink={setProposalLink}
<<<<<<< HEAD

          />;
        </TabsContent>;
        <TabsContent value="message">;
          <MessageTab;

=======


          type="button"
          onClick={handleApply}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
            selectedResumeId={selectedResumeId}
          />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
<<<<<<< HEAD


        <Button
          type="button"
          onClick={handleApply}
          disabled={isSubmitting}


          />;

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
            </>) : (
            'Submit Application')}'
        </Button>;
      </div>;
    </>);
            </>) : ('
            'Submit Application')}
        </Button>;
      </div>;
    </>);
<<<<<<< HEAD

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
;






=======

  ),; interface ApplyFormProps {
>>>>>>> origin/cursor/delete-old-data-records-6bba
