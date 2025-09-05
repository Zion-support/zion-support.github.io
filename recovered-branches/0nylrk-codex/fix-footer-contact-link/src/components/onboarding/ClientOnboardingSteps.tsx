
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
=======
import React from &quot;react&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { PlusCircle, SendIcon, InboxIcon } from &quot;lucide-react&quot;;
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
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;