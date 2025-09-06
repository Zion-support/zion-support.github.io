<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/ClientOnboardingSteps.tsx

<<<<<<< HEAD

import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {

  const onboardingStatus = useOnboardingStatus();

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const steps: OnboardingStep[] = [
    {
      id: "post-job"
      label: "Post your first job"
      completed: onboardingStatus.jobPosted
      link: "/post-job"
      action: "Post Job"
    }
    {
      id: "invite"
      label: "Send invitation to talent"
      completed: onboardingStatus.inviteSent
      link: "/talent"
      action: "Find Talent"
    }
    {
<<<<<<< HEAD

<<<<<<< HEAD
=======
id: "response"
      label: "Receive your first application"
      completed: onboardingStatus.responseReceived
      link: "/client-dashboard"
      action: "Check Dashboard"
    }
  ];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus(),;
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/ClientOnboardingSteps.tsx
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/ClientOnboardingSteps.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/ClientOnboardingSteps.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const steps: OnboardingStep[] = [;
    {;
      id: "post-job",;
      label: "Post your first job",;
<<<<<<< HEAD
<<<<<<< HEAD
      completed: onboardingStatus.jobPosted,;
=======
      completed: onboardingStatus && onboardingStatus.jobPosted,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      completed: onboardingStatus.jobPosted,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      link: "/post-job",;
      action: "Post Job"},;
    {;
      id: "invite",;
      label: "Send invitation to talent",;
<<<<<<< HEAD
<<<<<<< HEAD
      completed: onboardingStatus.inviteSent,;
=======
      completed: onboardingStatus && onboardingStatus.inviteSent,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      completed: onboardingStatus.inviteSent,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      link: "/talent",;
      action: "Find Talent"},;
    {;
      id: "response",;
      label: "Receive your first application",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      completed: onboardingStatus.responseReceived,;
      link: "/client-dashboard";
      action: "Check Dashboard"}];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;

<<<<<<< HEAD
=======
      completed: onboardingStatus && onboardingStatus.responseReceived,;
      link: "/client-dashboard",;
      action: "Check Dashboard"}],;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/ClientOnboardingSteps.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/ClientOnboardingSteps.tsx
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
=======

      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
import React from './react';
import { useOnboardingStatus  } from '@/hooks / useOnboardingStatus';
import { PlusCircle, SendIcon, InboxIcon  } from './lucide-react';
import { OnboardingTracker, OnboardingStep  } from './OnboardingTracker';
export /**
 * ClientOnboardingSteps - Function description
 */
function ClientOnboardingSteps() {
  const onboarding_status = useOnboardingStatus ();
;
  const steps: OnboardingStep[] = [;
    {
      id: "post - job",
      label: "Post your first job",
      completed: onboarding_status.job_posted,
      link: "/post - job",
      action: "Post Job",
    },
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboarding_status.invite_sent,
      link: "/talent",
      action: "Find Talent",
    },
    {
      id: "response",
      label: "Receive your first application",
      completed: onboarding_status.response_received,
      link: "/client - dashboard",
      action: "Check Dashboard",
    },
  ];
;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
=======

import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
;
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus(),;
  ;
  const steps:OnboardingStep[] = [;
    {;
      id:"post-job",;
      label:"Post your first job",;
      completed:onboardingStatus.jobPosted,;
      link:"/post-job",;
      action:"Post Job"},;
    {;
      id:"invite",;
      label:"Send invitation to talent",;
      completed:onboardingStatus.inviteSent,;
      link:"/talent",;
      action:"Find Talent"},;
    {;
      id:"response",;
      label:"Receive your first application",;
      completed:onboardingStatus.responseReceived,;
      link:"/client-dashboard",;
      action:"Check Dashboard"}],;
  ;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />,;}
 export function ClientOnboardingSteps () {
  const onboardingStatus = useOnboardingStatus ();
const steps: OnboardingStep[] = [ {
  id: "post-job";
label: "Post your first job";
completed: onboardingStatus.jobPosted;
link: "/post-job";
action: "Post Job" 
};
{
  id: "invite";
label: "Send invitation to talent";
completed: onboardingStatus.inviteSent;
link: "/talent";
action: "Find Talent" 
};
{
  id: "response";
label: "Receive your first application";
completed: onboardingStatus.responseReceived;
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      action: "Check Dashboard",
    },
  ];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;

}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
