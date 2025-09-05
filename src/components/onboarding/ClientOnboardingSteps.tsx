
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
=======
import React from &quot;react&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from &quot;./OnboardingTracker&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  
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
<<<<<<< HEAD
      link: "/client-dashboard",
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
=======
      link: &quot;/client-dashboard&quot;,
      action: &quot;Check Dashboard&quot;}];
  
  return <OnboardingTracker steps={steps} title=&quot;Get Started With Hiring&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";

export function ClientOnboardingSteps() {_const _onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {
      id: "post-job", _label: "Post your first job", _completed: onboardingStatus.jobPosted, _link: "/post-job", _action: "Post Job"},
    {_id: "invite", _label: "Send invitation to talent", _completed: onboardingStatus.inviteSent, _link: "/talent", _action: "Find Talent"},
    {_id: "response", _label: "Receive your first application", _completed: onboardingStatus.responseReceived, _link: "/client-dashboard", _action: "Check Dashboard"}];
  
  return <OnboardingTracker steps={_steps} title="Get Started With Hiring" />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
