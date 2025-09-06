
<<<<<<< HEAD
=======
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
;
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus(),;
  ;
  const steps:OnboardingStep[] = [;
    {;
      id:"post-job",;
      label:"Post your first job",;
      completed:onboardingStatus.jobPosted,;
      link:"/post-job",;
      action:"Post Job"},;
    {;
      id:"invite",;
      label:"Send invitation to talent",;
      completed:onboardingStatus.inviteSent,;
      link:"/talent",;
      action:"Find Talent"},;
    {;
      id:"response",;
      label:"Receive your first application",;
      completed:onboardingStatus.responseReceived,;
      link:"/client-dashboard",;
      action:"Check Dashboard"}],;
  ;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />,;}
 export function ClientOnboardingSteps () {
  const onboardingStatus = useOnboardingStatus ();
const steps: OnboardingStep[] = [ {
  id: "post-job";
label: "Post your first job";
completed: onboardingStatus.jobPosted;
link: "/post-job";
action: "Post Job" 
};
{
  id: "invite";
label: "Send invitation to talent";
completed: onboardingStatus.inviteSent;
link: "/talent";
action: "Find Talent" 
};
{
  id: "response";
label: "Receive your first application";
completed: onboardingStatus.responseReceived;
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
