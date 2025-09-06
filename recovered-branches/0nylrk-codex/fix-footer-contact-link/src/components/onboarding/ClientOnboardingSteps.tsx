
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
<<<<<<< HEAD
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {



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

import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [;
    {;
      id: "post-job",;
      label: "Post your first job",;
      completed: onboardingStatus && onboardingStatus.jobPosted,;
      link: "/post-job",;
      action: "Post Job"},;
    {;
      id: "invite",;
      label: "Send invitation to talent",;
      completed: onboardingStatus && onboardingStatus.inviteSent,;
      link: "/talent",;
      action: "Find Talent"},;
    {;
      id: "response",;
      label: "Receive your first application",;
      completed: onboardingStatus && onboardingStatus.responseReceived,;
      link: "/client-dashboard",;
      action: "Check Dashboard"}],;


  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
=======

      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

=======
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
  const steps: OnboardingStep[] = [;
    {
      id: "post - job",
      label: "Post your first job",
      completed: onboarding_status.job_posted,
      link: "/post - job",
      action: "Post Job",
    },
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboarding_status.invite_sent,
      link: "/talent",
      action: "Find Talent",
    },
    {
      id: "response",
      label: "Receive your first application",
      completed: onboarding_status.response_received,
      link: "/client - dashboard",
      action: "Check Dashboard",
    },
  ];
;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
