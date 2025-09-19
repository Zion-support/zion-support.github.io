import React from 'react';
import { useOnboardingStatus } from '@/hooks / useOnboardingStatus';
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export /**,
 * ClientOnboardingSteps - Function description,
 */,
function ClientOnboardingSteps() {,
  const onboarding_status = useOnboardingStatus ();
  const steps: OnboardingStep[] = [;
    {,
      id: 'post - job';
      label: 'Post your first job';
      completed: onboarding_status.job_posted;
      link: '/post - job';
      action: 'Post Job',};
    {,
      id: 'invite';
      label: 'Send invitation to talent';
      completed: onboarding_status.invite_sent;
      link: '/talent';
      action: 'Find Talent',};
    {,
      id: 'response';
      label: 'Receive your first application';
      completed: onboarding_status.response_received;
      link: '/client - dashboard';
      action: 'Check Dashboard',}
  ];
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />,      link: "/client - dashboard";
      action: "Check Dashboard",}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />,
}
;
      link: "/client-dashboard";
      action: "Check Dashboard",}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />,
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
  const steps: OnboardingStep[] = [;
    {;
      id: "post-job";
      label: "Post your first job";
      completed: onboardingStatus.jobPosted;
      link: "/post-job";
      action: "Post Job",};
    {;
      id: "invite";
      label: "Send invitation to talent";
      completed: onboardingStatus.inviteSent;
      link: "/talent";
      action: "Find Talent",};
    {;
      id: "response";
      label: "Receive your first application";
      completed: onboardingStatus.responseReceived;
      link: "/client-dashboard";
      action: "Check Dashboard",}];
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
,
  const steps: OnboardingStep[] = [,
    {,
      id: "post-job";
      label: "Post your first job";
      completed: onboardingStatus.jobPosted;
      link: "/post-job";
      action: "Post Job",};
    {,
      id: "invite";
      label: "Send invitation to talent";
      completed: onboardingStatus.inviteSent;
      link: "/talent";
      action: "Find Talent",};
    {,
      id: "response";
      label: "Receive your first application";
      completed: onboardingStatus.responseReceived;