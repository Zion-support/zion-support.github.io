<<<<<<< HEAD:src_backup/components/onboarding/ClientOnboardingSteps.tsx
<<<<<<< HEAD:src/components/onboarding/ClientOnboardingSteps.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  
  const steps: OnboardingStep[] = [
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======

}
;
      link: "/client-dashboard","
      action: "Check Dashboard"}],"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ClientOnboardingSteps.tsx

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
<<<<<<< HEAD
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
=======
    {
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ClientOnboardingSteps.tsx

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
<<<<<<< HEAD:src/components/onboarding/ClientOnboardingSteps.tsx
<<<<<<< HEAD
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ClientOnboardingSteps.tsx
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
<<<<<<< HEAD:src_backup/components/onboarding/ClientOnboardingSteps.tsx
<<<<<<< HEAD:src/components/onboarding/ClientOnboardingSteps.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
=======


=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ClientOnboardingSteps.tsx


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
<<<<<<< HEAD:src/components/onboarding/ClientOnboardingSteps.tsx
<<<<<<< HEAD
      completed: onboardingStatus.responseReceived,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/onboarding/ClientOnboardingSteps.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ClientOnboardingSteps.tsx
=======
    },]
  ];
  return <OnboardingTracker steps={steps} title='Get Started With Hiring' />;      link: "/client - dashboard","
"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ClientOnboardingSteps.tsx
