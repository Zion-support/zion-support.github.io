<<<<<<< HEAD
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
  
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {
=======
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const onboardingStatus = useOnboardingStatus();

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
      action: "Check Dashboard",
    },
  ];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  
  
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus();

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
      action: "Check Dashboard",
    },
  ];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}

import React from './react';
import { useOnboardingStatus  } from '@/hooks / useOnboardingStatus';
import { PlusCircle, SendIcon, InboxIcon  } from './lucide-react';
import { OnboardingTracker, OnboardingStep  } from './OnboardingTracker';
export /**
 * ClientOnboardingSteps - Function description
 */
function ClientOnboardingSteps() {
  const onboarding_status = useOnboardingStatus ();
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
