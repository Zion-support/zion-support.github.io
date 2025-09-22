:src_backup/components/onboarding/ClientOnboardingSteps.tsx

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),

  const steps: OnboardingStep[] = [
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

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
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
:src/components/onboarding/ClientOnboardingSteps.tsx
return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
;
    {
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
      action: "Check Dashboard"}],
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus(),;,
  const steps: OnboardingStep[] = [;,
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
      link: "/client-dashboard";",
      action: "Check Dashboard"}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
},
  const steps: OnboardingStep[] = [,
    {
      id: "post-job","
      label: "Post your first job","
      completed: onboardingStatus.jobPosted,
      link: "/post-job","
      action: "Post Job"},"
    {
      id: "invite","
      label: "Send invitation to talent","
      completed: onboardingStatus.inviteSent,
      link: "/talent","
      action: "Find Talent"},"
    {
      id: "response","
      label: "Receive your first application","
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard";
      action: "Check Dashboard"}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
:src_backup/components/onboarding/ClientOnboardingSteps.tsx
;

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
:src/components/onboarding/ClientOnboardingSteps.tsx
completed: onboardingStatus.responseReceived,
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
      completed: onboardingStatus.responseReceived,
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/onboarding/ClientOnboardingSteps.tsx
