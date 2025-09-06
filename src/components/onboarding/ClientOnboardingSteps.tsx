<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker'
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus()

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {

  const onboardingStatus = useOnboardingStatus()
  const steps: OnboardingStep[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import { useOnboardingStatus } from '@/hooks / useOnboardingStatus';
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
export /**
 * ClientOnboardingSteps - Function description
 */
function ClientOnboardingSteps() {
  const onboarding_status = useOnboardingStatus ();
  const steps: OnboardingStep[] = [;
<<<<<<< HEAD
    {
<<<<<<< HEAD
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
=======
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
      action: "Check Dashboard"}],
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
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
      id: 'response',
      label: 'Receive your first application',
      completed: onboarding_status.response_received,
      link: '/client - dashboard',
      action: 'Check Dashboard',
    },
  ];
<<<<<<< HEAD
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;      link: "/client-dashboard",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;      link: "/client - dashboard",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      action: "Check Dashboard"}],
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
ursor/fix-website-loading-errors-and-merge-6662
;
      completed: onboardingStatus.responseReceived,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
