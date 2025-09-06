
<<<<<<< HEAD

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus(),;
=======
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const steps: OnboardingStep[] = [;
    {;
      id: "post-job",;
      label: "Post your first job",;
<<<<<<< HEAD
      completed: onboardingStatus.jobPosted,;
=======
      completed: onboardingStatus && onboardingStatus.jobPosted,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      link: "/post-job",;
      action: "Post Job"},;
    {;
      id: "invite",;
      label: "Send invitation to talent",;
<<<<<<< HEAD
      completed: onboardingStatus.inviteSent,;
=======
      completed: onboardingStatus && onboardingStatus.inviteSent,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
