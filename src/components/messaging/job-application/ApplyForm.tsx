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
    </div>
  );
};
