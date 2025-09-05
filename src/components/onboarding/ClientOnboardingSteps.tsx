
import React from &quot;react&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from &quot;./OnboardingTracker&quot;;

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {
      id: &quot;post-job&quot;,
      label: &quot;Post your first job&quot;,
      completed: onboardingStatus.jobPosted,
      link: &quot;/post-job&quot;,
      action: &quot;Post Job&quot;},
    {
      id: &quot;invite&quot;,
      label: &quot;Send invitation to talent&quot;,
      completed: onboardingStatus.inviteSent,
      link: &quot;/talent&quot;,
      action: &quot;Find Talent&quot;},
    {
      id: &quot;response&quot;,
      label: &quot;Receive your first application&quot;,
      completed: onboardingStatus.responseReceived,
      link: &quot;/client-dashboard&quot;,
      action: &quot;Check Dashboard&quot;}];
  
  return <OnboardingTracker steps={steps} title=&quot;Get Started With Hiring&quot; />;
}
