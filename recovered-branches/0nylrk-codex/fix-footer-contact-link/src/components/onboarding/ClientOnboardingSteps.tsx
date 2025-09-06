<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
=======
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
=======
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus();

>>>>>>> main
  const steps: OnboardingStep[] = [
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job",
    },
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,
      link: "/talent",
      action: "Find Talent",
    },
    {
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
<<<<<<< HEAD
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
<<<<<<< HEAD
=======
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus(),;
  const steps: OnboardingStep[] = [;
    {;
      id: "post-job",;
      label: "Post your first job",;
      completed: onboardingStatus.jobPosted,;
      link: "/post-job",;
      action: "Post Job"},;
    {;
      id: "invite",;
      label: "Send invitation to talent",;
      completed: onboardingStatus.inviteSent,;
      link: "/talent",;
      action: "Find Talent"},;
    {;
      id: "response",;
      label: "Receive your first application",;
      completed: onboardingStatus.responseReceived,;
      link: "/client-dashboard";
      action: "Check Dashboard"}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
      action: "Check Dashboard",
    },
  ];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
>>>>>>> main
}
