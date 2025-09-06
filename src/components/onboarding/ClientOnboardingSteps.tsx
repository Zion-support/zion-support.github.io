import React from 'react'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker'
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus()
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {

  const onboardingStatus = useOnboardingStatus()
  const steps: OnboardingStep[] = [
    {
      id: 'post-job'
      label: 'Post your first job'
      completed: onboardingStatus.jobPosted
      link: '/post-job'
      action: 'Post Job'
    }
    {
      id: 'invite'
      label: 'Send invitation to talent'
      completed: onboardingStatus.inviteSent
      link: '/talent'
      action: 'Find Talent'
    }
    {
      id: 'response'
      label: 'Receive your first application'
      completed: onboardingStatus.responseReceived
      link: '/client-dashboard'
      action: 'Check Dashboard'
    }
  ]
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;      link: "/client-dashboard"
      action: "Check Dashboard"}]

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const steps: OnboardingStep[] = [
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
      link: '/client-dashboard',;
      action: 'Check Dashboard',;
    };
  ];
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;      link: "/client-dashboard",
      action: "Check Dashboard"}],
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
;
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
