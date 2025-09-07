<<<<<<< HEAD
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

=======
<<<<<<< HEAD

=======
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
      action: "Post Job",

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },
    {"
      id: "invite","
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,"
      link: "/talent","
      action: "Find Talent",
    },
<<<<<<< HEAD

  const onboardingStatus = useOnboardingStatus();
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function ClientOnboardingSteps() {
=======
=======
<<<<<<< HEAD
import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();
import React from "react",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function ClientOnboardingSteps() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const onboardingStatus = useOnboardingStatus();
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function ClientOnboardingSteps() {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
id: "response"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      id: "response"
      label: "Receive your first application"
      completed: onboardingStatus.responseReceived
      link: "/client-dashboard"
      action: "Check Dashboard"
    }
  ];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

import React from "react";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {PlusCircle, SendIcon, InboxIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function ClientOnboardingSteps() {;
  const onboardingStatus = useOnboardingStatus();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const steps: OnboardingStep[] = [;
    {;
      id: "post-job",;
      label: "Post your first job",;
      completed: onboardingStatus && onboardingStatus.jobPosted,;
<<<<<<< HEAD
      completed: onboardingStatus.jobPosted,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      link: "/post-job",;
      action: "Post Job"},;
    {;
      id: "invite",;
      label: "Send invitation to talent",;
      completed: onboardingStatus && onboardingStatus.inviteSent,;
<<<<<<< HEAD
      completed: onboardingStatus.inviteSent,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      link: "/talent",;
      action: "Find Talent"},;
    {;
      id: "response",;
      label: "Receive your first application",;
<<<<<<< HEAD
      completed: onboardingStatus.responseReceived,;
      link: "/client-dashboard";
      action: "Check Dashboard"}];

  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      completed: onboardingStatus && onboardingStatus.responseReceived,;
      link: "/client-dashboard",;
      action: "Check Dashboard"}],;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
<<<<<<< HEAD

=======
<<<<<<< HEAD
      action: "Check Dashboard"}],
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />
}
}
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      action: "Check Dashboard",
    },
  ];
"
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;

}

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
=======
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
=======
import React from "react",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
