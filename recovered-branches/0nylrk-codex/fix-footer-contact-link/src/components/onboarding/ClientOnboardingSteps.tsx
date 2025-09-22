<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  const steps: OnboardingStep[] = [
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job",
    },
    {"
      id: "invite","
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,"
      link: "/talent","
      action: "Find Talent",
    },
{
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
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
action: "Check Dashboard"}],

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      action: "Check Dashboard",
    },
  ];
"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus(),

import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
