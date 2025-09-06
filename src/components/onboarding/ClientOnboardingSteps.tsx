<<<<<<< HEAD

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  
  const steps: OnboardingStep[] = [
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
  const steps: OnboardingStep[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job"},
<<<<<<< HEAD
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,
      link: "/talent",
      action: "Find Talent"},
    {
<<<<<<< HEAD
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
=======
=======
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,
      link: "/talent",
      action: "Find Talent"},    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

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
<<<<<<< HEAD
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
;
=======


=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
      completed: onboardingStatus.responseReceived,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
