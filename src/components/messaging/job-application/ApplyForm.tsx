

  job: Job
  onClose: () => void
  onApplySuccess?: (jobId: string,) => Promise<void>

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

import React, { useState } from 'react',;
import { Button } from "@/components/ui/button",;
import { Loader2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useMessaging } from "@/context/MessagingContext",;
import { toast } from "@/hooks/use-toast",;
import { ResumeSelector, ResumeOption } from "../resume-selector",;
import { MessageTab } from "./MessageTab",;
import { ResumeTab } from "./ResumeTab",;
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApplyFormProps {
  job: Job;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>

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
            message = {message,}
            setMessage = {setMessage,}
            proposalLink = {proposalLink,}
            setProposalLink = {setProposalLink,}
          />
        </TabsContent>


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


          <MessageTab;
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
          className="bg-zion-purple hover:bg-zion-purple-dark text-white"

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
}
;
        </Button>
      </div>
    </div>
  );
};
        </Button>
      </div>
    </>
  );
  if (!message.trim () ) {;
  toast ({;
  return;
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId || undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined);
if (!applicationSuccess) {;
  ;
}//Format message with proposal link if provided let fullMessage = message;
if (proposalLink) {';
  fullMessage += `\n\nHere's a link to my proposal: $ {;
  proposalLink ;
}` ;
}//Add info about attached resume if available if (selectedResume) {';
  fullMessage += `\n\nI've attached my resume: $ {;
  selectedResume.title ;
}` ;
}//Create context data for the conversation const contextData = {;
  title: job.title;
description: job.description;
attachedResume: selectedResume ? {;
  id: selectedResume.id;
title: selectedResume.title;
type: selectedResume.type ;
}: null ;
};
fullMessage;';
'job';
job.id;
contextData);
//Call onApplySuccess to update job status in the UI onClose () ;
}catch (error) {';
  logErrorToProduction ('Failed to send application:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  setIsSubmitting (false) ;

};
return (<> <Tabs value= {;
  activeTab ;
}onValueChange= {;
  setActiveTab ";
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {;
  message ;
}setMessage= {;
  setMessage ;
}proposalLink= {;
  proposalLink ;
}setProposalLink= {;
  setProposalLink ";
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {;
  handleResumeSelected ;
}selectedResumeId= {;
  selectedResumeId ";
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'";
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application') ;
}</Button> </div> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
