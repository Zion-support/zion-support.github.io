<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface ApplyFormProps {
=======
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApplyFormProps {
>>>>>>> interface ApplyFormProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Job } from "./types";
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApplyFormProps {
import { Job } from "./types",
import {logErrorToProduction} from '@/utils/productionLogger',
interface ApplyFormProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  job: Job,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  job: Job
  onClose: () => void
  onApplySuccess?: (jobId: string,) => Promise<void>

}
export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const { createConversation } = useMessaging()
  const { applyToJob } = useJobApplications()
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`

=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),
  const [message, setMessage] = useState(
    `Hi, I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleApply = async () => {
=======
  
>>>>>>>   const handleApply = async () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      })
      return
      return;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
      }
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
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      toast({
        title: "Application sent"
        description: `Your application for "${job.title}" has been sent.`})
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

      toast({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),

=======
      
>>>>>>>       toast({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),
      
>>>>>>>       onClose()
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      
      toast({
        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      onClose()
>>>>>>>     } catch (error) {
      logErrorToProduction('Failed to send application:', { data: error })
      toast({
        title: "Application failed"
        description: "There was an error sending your application. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
<<<<<<< HEAD
=======
  }

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            message = {message,}
=======
          <MessageTab
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (

          <MessageTab 

>>>>>>>             message = {message,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <TabsContent value="message">
          <MessageTab
          <MessageTab 
            message = {message,}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            setMessage = {setMessage,}
            proposalLink = {proposalLink,}
            setProposalLink = {setProposalLink,}
          />
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <TabsContent value="resume">
          <ResumeTab
            onResumeSelected = {handleResumeSelected,}
            selectedResumeId = {selectedResumeId,}
          />
        </TabsContent>
      </Tabs>
<<<<<<< HEAD
<<<<<<< HEAD
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            message={message}
            setMessage={setMessage}
            proposalLink={proposalLink}
            setProposalLink={setProposalLink}
          />
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

        <TabsContent value="resume">
=======
        
>>>>>>>         <TabsContent value="resume">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        
        <TabsContent value="resume">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ResumeTab 
            onResumeSelected={handleResumeSelected}
            selectedResumeId={selectedResumeId} 
          />
        </TabsContent>
      </Tabs>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>>         <Button
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
        <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          type="button"
          onClick = {handleApply,}
          disabled = {isSubmitting,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          type="button"
          onClick = {handleApply,}
          disabled = {isSubmitting,}
          type="button" 
          onClick={handleApply}
          disabled={isSubmitting}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  return
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id, message, selectedResume && selectedResume.type === 'ai resume'? selectedResumeId |undefined : undefined, selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>;
      </div>;
    </>;
  );
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
