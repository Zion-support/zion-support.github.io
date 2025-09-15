
import React from "react";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
<<<<<<< HEAD
import { PlusCircleSendIconInboxIcon } from "lucide-react";
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
=======
import { PlusCircle, SendIcon, InboxIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
>>>>>>> origin/auto/autonomy-17186719616

export function ClientOnboardingSteps() {
  const onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {
      id: "post-job",
      label: "Post your first job",
      completed: onboardingStatus.jobPosted,
      link: "/post-job",
<<<<<<< HEAD
      action: "Post Job"},
=======
      action: "Post Job",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      id: "invite",
      label: "Send invitation to talent",
      completed: onboardingStatus.inviteSent,
      link: "/talent",
<<<<<<< HEAD
      action: "Find Talent"},
=======
      action: "Find Talent",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      id: "response",
      label: "Receive your first application",
      completed: onboardingStatus.responseReceived,
      link: "/client-dashboard",
<<<<<<< HEAD
      action: "Check Dashboard"}];
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}

=======
      action: "Check Dashboard",
    },
  ];
  
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;
}
>>>>>>> origin/auto/autonomy-17186719616
