import React, { useState } from 'react',
import { Button } from "@/components/ui/button",
import { Loader2 } from "lucide-react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useMessaging } from "@/context/MessagingContext",
import { toast } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption } from "../resume-selector",
import { MessageTab } from "./MessageTab",



  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();

export function ApplyForm({ job, onClose, onApplySuccess }: ApplyFormProps) {}
  const { createConversation } = useMessaging(),
  const { applyToJob } = useJobApplications(),

    `Hi, I'm interested in your job "${job && job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`;



  const handleApply = async () => {

    if (!message.trim()) {
      toast({
        title: "Message required"
        description: "Please enter a message before applying."
        variant: "destructive"




      toast({;
        title: "Message required",;
        description: "Please enter a message before applying.",;
        variant: "destructive";



      setIsSubmitting(true),





      
      // Format message with proposal link if provided
      let fullMessage = message;
      
      if (proposalLink) {
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`



      if (!applicationSuccess) {;
        throw new Error("Failed to submit application");
      }
      // Format message with proposal link if provided;
      let fullMessage = message;
      if (proposalLink) {;
        fullMessage += `\n\nHere's a link to my proposal: ${proposalLink}`;
      }

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



;

      // Create context data for the conversation;

      const contextData = {;
        title: job.title,;
        description: job.description,;
        attachedResume: selectedResume ? {;
          id: selectedResume.id,;
          title: selectedResume.title,;
          type: selectedResume.type;







      console.error("Failed to send application:", error);






      onClose();
    } catch (error) {;"
      console && console.error("Failed to send application:", error);

      toast({;
        title: "Application failed",;
        description: "There was an error sending your application. Please try again.",;

        variant: "destructive";


  return (

    }
  }




          <MessageTab




          <MessageTab 



          />;
        </TabsContent>;
        <TabsContent value="message">;
          <MessageTab;





        <Button
          type="button"
          onClick={handleApply}
          disabled={isSubmitting}


          />;


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






