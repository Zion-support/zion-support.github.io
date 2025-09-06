<<<<<<< HEAD

=======
import React from 'react'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker'
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
<<<<<<< HEAD

  const steps: OnboardingStep[] = [
=======
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {

  const onboardingStatus = useOnboardingStatus()
  const steps: OnboardingStep[] = [
    {
      id: 'post - job',
      label: 'Post your first job',
      completed: onboarding_status.job_posted,
      link: '/post - job',
      action: 'Post Job',
    },
    {
      id: 'invite',
      label: 'Send invitation to talent',
      completed: onboarding_status.invite_sent,
      link: '/talent',
      action: 'Find Talent',
    },
    {
      id: 'response',
      label: 'Receive your first application',
      completed: onboarding_status.response_received,
      link: '/client - dashboard',
      action: 'Check Dashboard',
    },
  ];
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;      link: "/client - dashboard",
      action: "Check Dashboard"}],
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
>>>>>>>   const steps: OnboardingStep[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job"},
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,
      link: "/talent",
      action: "Find Talent"},
    {
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
<<<<<<< HEAD

=======
      link: '/client-dashboard',;
      action: 'Check Dashboard',;
    };
  ];
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;      link: "/client-dashboard",
      action: "Check Dashboard"}],
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      link: "/client-dashboard",
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react';
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
}
;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
