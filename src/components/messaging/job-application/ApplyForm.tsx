  const handleApply = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"

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
      )
      if (!applicationSuccess) {
        throw new Error("Failed to submit application")
      // Format message with proposal link if provided
      let fullMessage = message
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI've attached my resume: ${selectedResume.title}`
      // Create context data for the conversation
      const contextData = {
        title: job.title
        description: job.description
        attachedResume: selectedResume ? {
          id: selectedResume.id
          title: selectedResume.title
          type: selectedResume.type
        } : null
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
  const handle_apply = async () => {
    if () {) {
  $2
      toast ({
        title: "Message required",
        description: "Please enter a message before applying.",
        variant: "destructive";
      });
      return;
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
        throw new Error ("Failed to submit application");
      // Create conversation with the job client
      await createConversation(
        job.client_id
        fullMessage
        'job'
        contextData
      // Call onApplySuccess to update job status in the UI
      if (onApplySuccess) {
        await onApplySuccess(job.id)
      // Add info about attached resume if available;
        full_message += `\n\n_i've attached my resume: ${selected_resume.title}`;
      // Create context data for the conversation;
      const context_data = {
        title: job.title,
        description: job.description,
        attached_resume: selected_resume ? {
          id: selected_resume.id,
          title: selected_resume.title,
          type: selected_resume.type;
        } : null;
      // Create conversation with the job client;
      await create_conversation (
        job.client_id;
        full_message;
        'job';
        context_data);
      // Call onApplySuccess to update job status in the UI;
        await onApplySuccess (job.id);

        title: "Application sent",
        description: `Your application for "${job.title}" has been sent.`}),

      onClose()
    } catch (error) {
      logErrorToProduction('Failed to send application:', { data: error })
        title: "Application failed"
        description: "There was an error sending your application. Please try again."
      })
    } finally {
      setIsSubmitting(false)

      let fullMessage = message;

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

export const ApplyForm: React.FC<ApplyFormProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState('message');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { applyToJob } = useJobApplications();
  const { sendMessage } = useMessaging();

  const handleSubmit = async () => {
    if (!selectedResume) {
        title: 'Resume required',
        description: 'Please select a resume before applying.',
        variant: 'destructive',

    setIsSubmitting(true);
      await applyToJob(job.id, {
        resumeId: selectedResume.id,
        message,

      // Send a message to the job poster
      await sendMessage({
        content: `I'm interested in the ${job.title} position. ${message}`,
        recipientId: job.posterId,
        jobId: job.id,

        title: 'Application submitted',
        description: 'Your application has been sent successfully.',

      onClose();
      logErrorToProduction('Job application failed', error);
        title: 'Application failed',
        description: 'There was an error submitting your application.',

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
    } catch (error) {;
      logErrorToProduction('Failed to send application:', { data: error }),;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.";
    } finally {;

      setIsSubmitting(false);
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
            message={message}
            onMessageChange={setMessage}
            job={job}

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
          />;
        </TabsContent>;

        <TabsContent value="resume">;

          <ResumeTab
            selectedResume={selectedResume}
            onResumeSelect={setSelectedResume}
      </Tabs>

      <div className="flex justify-end space-x-2">
          Cancel
        <Button

        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}

}//Format message with proposal link if provided let fullMessage = message
if (proposalLink) {'
  fullMessage += `\n\nHere's a link to my proposal: $ {
  proposalLink
}`
}//Add info about attached resume if available if (selectedResume) {'
  fullMessage += `\n\nI've attached my resume: $ {
  selectedResume.title
}//Create context data for the conversation const contextData = {
}: null
fullMessage;'
contextData)
//Call onApplySuccess to update job status in the UI onClose ()
}catch (error) {'
  logErrorToProduction ('Failed to send application:', {
  data: error
}finally {
  setIsSubmitting (false)
return (<> <Tabs value= {
  activeTab
}onValueChange= {
  setActiveTab "
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {
}setMessage= {
  setMessage
}proposalLink= {
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