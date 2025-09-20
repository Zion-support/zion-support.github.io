
import React, { useState } from 'react',
import { Button,  } from "@/components/ui/button",
import { Loader2,  } from 'lucide-react'
import { Tabs,, TabsContent,, TabsList, TabsTrigger,  } from "@/components/ui/tabs",
import { useJobApplications,  } from "@/hooks/useJobApplications",
import { useMessaging,  } from "@/context/MessagingContext",
import { toast,  } from "@/hooks/use-toast",
import { ResumeSelector, ResumeOption,  } from "../resume-selector",
import { MessageTab,  } from "./MessageTab",
import { ResumeTab,  } from "./ResumeTab",
import { Job,  } from "./types";
import { logErrorToProduction } from '@/utils/productionLogger';
interface ApplyFormProps {
}
export function ApplyForm({ job onClose onApplySuccess }: ApplyFormProps) {
  const { createConversation } = useMessaging();
  const { applyToJob } = useJobApplications();
  const [message, setMessage] = useState(
    `Hi I'm interested in your job "${job.title}" and would like to apply. I believe my skills and experience are a great match for this role.`
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
          <MessageTab,
message = {message,}
            setMessage = {setMessage,}
            proposalLink = {proposalLink,}
            setProposalLink = {setProposalLink,}
          />
        </TabsContent>
        <TabsContent value="resume">
          <ResumeTab,
onResumeSelected = {handleResumeSelected,}
            selectedResumeId = {selectedResumeId,}
          />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4">
        <Button,
type="button"
          variant="outline"
          onClick = {onClose,}
          className="border-zion-purple/30 text-white"
        >
          Cancel
        </Button>
        <Button,
type="button"
          onClick = {handleApply,}
          disabled = {isSubmitting,}
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
  if (!message.trim () ) {
  toast ({
  return,
}//First submit the application to the job applications table const applicationSuccess = await applyToJob (job.id message selectedResume && selectedResume.type === 'ai resume'? selectedResumeId |undefined : undefined selectedResume && selectedResume.type === 'custom upload'? selectedResume.file : undefined)
if (!applicationSuccess) {
}//Format message with proposal link if provided let fullMessage = message,
if (proposalLink) {'
  fullMessage += `\n\nHere's a link to my proposal: $ {
  proposalLink,
}`
}//Add info about attached resume if available if (selectedResume) {'
  fullMessage += `\n\nI've attached my resume: $ {
  selectedResume.title,
}`
}//Create context data for the conversation const contextData = {
  title: job.title,
description: job.description,
attachedResume: selectedResume ? {,
id: selectedResume.id,
title: selectedResume.title,
type: selectedResume.type,
}: null,
}
fullMessage;'
'job'
job.id,
contextData)
//Call onApplySuccess to update job status in the UI onClose ()
}catch (error) {'
  logErrorToProduction ('Failed to send application:', {
  data: error;
})
toast ({
}finally {
  setIsSubmitting (false)
}
return (<> <Tabs value= {
  activeTab,
}onValueChange= {
  setActiveTab "
}className="w-full" > <TabsList className="w-full mb-4 bg-zion-blue-dark/30" > <TabsTrigger value="message" className="flex-1" > resume"className=" flex-1"> Resume </TabsTrigger> </TabsList> <TabsContent value=" message"> <MessageTab message= {
  message,
}setMessage= {
  setMessage,
}proposalLink= {
  proposalLink,
}setProposalLink= {
  setProposalLink "
}/> </TabsContent> <TabsContent value=" resume"> <ResumeTab onResumeSelected= {
  handleResumeSelected,
}selectedResumeId= {
  selectedResumeId "
}/> </TabsContent> </Tabs> <div className=" flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0 mt-4"> <Button > Cancel </Button> <Button > {'"
  isSubmitting ? (<> <Loader2 className=" h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ('Submit Application')
}</Button> </div> </>)
}'"}