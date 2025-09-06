


<<<<<<< HEAD
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {

  const onboardingStatus = useOnboardingStatus();
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  
  const steps: OnboardingStep[] = [
    {
      id: "post-job"
      label: "Post your first job"
      completed: onboardingStatus.jobPosted
      link: "/post-job"
      action: "Post Job"
    }
    {
      id: "invite"
      label: "Send invitation to talent"
      completed: onboardingStatus.inviteSent
      link: "/talent"
      action: "Find Talent"
    }
    {
<<<<<<< HEAD
id: "response"
      id: "response"
      label: "Receive your first application"
      completed: onboardingStatus.responseReceived
      link: "/client-dashboard"
      action: "Check Dashboard"
    }
  ];
=======

import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const steps: OnboardingStep[] = [;
    {;
      id: "post-job",;
      label: "Post your first job",;
      completed: onboardingStatus && onboardingStatus.jobPosted,;
<<<<<<< HEAD
      completed: onboardingStatus.jobPosted,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      link: "/post-job",;
      action: "Post Job"},;
    {;
      id: "invite",;
      label: "Send invitation to talent",;
      completed: onboardingStatus && onboardingStatus.inviteSent,;
<<<<<<< HEAD
      completed: onboardingStatus.inviteSent,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      link: "/talent",;
      action: "Find Talent"},;
    {;
      id: "response",;
      label: "Receive your first application",;
<<<<<<< HEAD
      completed: onboardingStatus.responseReceived,;
      link: "/client-dashboard";
      action: "Check Dashboard"}];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      completed: onboardingStatus && onboardingStatus.responseReceived,;
      link: "/client-dashboard",;
      action: "Check Dashboard"}],;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;

      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />

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
      action: "Check Dashboard",
    },
  ];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;

      id: "response",;
      label: "Receive your first application",;
      completed: onboardingStatus.responseReceived,;
      link: "/client-dashboard";
      action: "Check Dashboard"}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
