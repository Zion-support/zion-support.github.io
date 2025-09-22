:src_backup/components/onboarding/ClientOnboardingSteps.tsx
<<<<<<< HEAD
<<<<<<< HEAD

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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  const steps: OnboardingStep[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD:src_backup/components/onboarding/ClientOnboardingSteps.tsx
    {
<<<<<<< HEAD
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,

    {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    {
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ClientOnboardingSteps.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ClientOnboardingSteps.tsx
  const steps: OnboardingStep[] = [
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      completed: onboardingStatus.responseReceived,
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/onboarding/ClientOnboardingSteps.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ClientOnboardingSteps.tsx
