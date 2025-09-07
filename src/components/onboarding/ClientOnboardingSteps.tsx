
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {
<<<<<<< HEAD
  const onboardingStatus = null;
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}