<<<<<<< HEAD
<<<<<<< HEAD




=======
<<<<<<< HEAD




>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();

<<<<<<< HEAD
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

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

=======
=======
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
=======
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
