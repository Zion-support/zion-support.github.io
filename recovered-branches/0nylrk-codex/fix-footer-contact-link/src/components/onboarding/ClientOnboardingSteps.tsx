<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
=======
import React from "react";"
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";"
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const steps: OnboardingStep[] = [
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job",
    },
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,
      link: "/talent",
      action: "Find Talent",
    },
    {
  
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {  const onboardingStatus = useOnboardingStatus();
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const steps: OnboardingStep[] = [
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job",
=======
export function ClientOnboardingSteps() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },
    {"
      id: "invite","
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,"
      link: "/talent","
      action: "Find Talent",
    },
<<<<<<< HEAD
    {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
<<<<<<< HEAD
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const onboardingStatus = useOnboardingStatus();
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),
  
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
      id: "response"
      label: "Receive your first application"
      completed: onboardingStatus.responseReceived
      link: "/client-dashboard"
      action: "Check Dashboard"
    }
  ];
=======

<<<<<<< HEAD
  const steps: OnboardingStep[] = [;
    {;
      id: "post-job",;
      label: "Post your first job",;
      completed: onboardingStatus && onboardingStatus.jobPosted,;
      link: "/post-job",;
      action: "Post Job"},;
    {;
      id: "invite",;
      label: "Send invitation to talent",;
      completed: onboardingStatus && onboardingStatus.inviteSent,;
      link: "/talent",;
      action: "Find Talent"},;
    {;
      id: "response",;
      label: "Receive your first application",;
      completed: onboardingStatus && onboardingStatus.responseReceived,;
      link: "/client-dashboard",;
      action: "Check Dashboard"}],;


  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
<<<<<<< HEAD
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
<<<<<<< HEAD
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
=======

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
    {"
      id: "response","
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,"
      link: "/client-dashboard","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      action: "Check Dashboard",
    },
  ];
"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

<<<<<<< HEAD
export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),

import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
=======


export function ClientOnboardingSteps() {}
  const onboardingStatus = useOnboardingStatus(),

  


  
";
import React from "react";"
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";"
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {};
  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = []
    {"
      id: "post-job","
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,"
      link: "/post-job","
      action: "Post Job",
    },
    {"
      id: "invite","
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,"
      link: "/talent","
      action: "Find Talent",
    },
    {"
      id: "response","
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,"
      link: "/client-dashboard","
      action: "Check Dashboard",
    },
  ];
"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus(),;
  ;
  const steps:OnboardingStep[] = [;
    {;
      id:"post-job",;
      label:"Post your first job",;
      completed:onboardingStatus.jobPosted,;
      link:"/post-job",;
=======



import React from './react';'
import { useOnboardingStatus  } from '@/hooks / useOnboardingStatus';'
import { PlusCircle, SendIcon, InboxIcon  } from './lucide-react';'
import { OnboardingTracker, OnboardingStep  } from './OnboardingTracker';
export /**;
 * ClientOnboardingSteps - Function description;
 */
function ClientOnboardingSteps() {}
  const onboarding_status = useOnboardingStatus ();
;

export function ClientOnboardingSteps() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      action:"Post Job"},;
    {;"
      id:"invite",;"
      label:"Send invitation to talent",;
      completed:onboardingStatus.inviteSent,;"
      link:"/talent",;"
      action:"Find Talent"},;
    {;"
      action: "Check Dashboard",
    },
  ];
"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
"
      id: "response",;"
      label: "Receive your first application",;
      completed: onboardingStatus.responseReceived,;"
      link: "/client-dashboard";"
      action: "Check Dashboard"}];"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from "react";""
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";""
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";""
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";"
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [
    {"
      id: "post-job",""
      label: "Post your first job","
      completed: onboardingStatus.jobPosted,"
      link: "/post-job",""
      action: "Post Job","
    },
      id: "invite",""
      label: "Send invitation to talent","
      completed: onboardingStatus.inviteSent,"
      link: "/talent",""
      action: "Find Talent","
      id: "response",""
      label: "Receive your first application","
      completed: onboardingStatus.responseReceived,"
      link: "/client-dashboard",""
      action: "Check Dashboard","
    },]
  ];
"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;"
pr-12325
</OnboardingTracker>"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;"
</OnboardingTracker>"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;"
</OnboardingTracker>"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;"
</OnboardingTracker>"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;"
</OnboardingTracker>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
