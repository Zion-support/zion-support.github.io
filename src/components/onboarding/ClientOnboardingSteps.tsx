<<<<<<< HEAD
import React from 'react';
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus';
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

=======

import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [
    {
      id: 'post-job',
      label: 'Post your first job',
      completed: onboardingStatus.jobPosted,
      link: '/post-job',
      action: 'Post Job',
    },
    {
      id: 'invite',
      label: 'Send invitation to talent',
      completed: onboardingStatus.inviteSent,
      link: '/talent',
      action: 'Find Talent',
    },
    {
      id: 'response',
      label: 'Receive your first application',
      completed: onboardingStatus.responseReceived,
      link: '/client-dashboard',
      action: 'Check Dashboard',
    },
  ];

  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;
=======
      link: "/client-dashboard",

      action: "Check Dashboard"}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />

}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
