
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
<<<<<<< HEAD
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
=======
import { UserCheckStarCalendarCheckBriefcaseIcon } from "lucide-react";
import { OnboardingTrackerOnboardingStep } from "./OnboardingTracker";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
<<<<<<< HEAD
      action: "Update",
    },
=======
      action: "Update"},
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
<<<<<<< HEAD
      action: "Add Skills",
    },
=======
      action: "Add Skills"},
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
<<<<<<< HEAD
      action: "Set",
    },
=======
      action: "Set"},
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    {
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
<<<<<<< HEAD
      action: "View Matches",
    },
  ];
  
  return <OnboardingTracker steps={steps} />;
}
=======
      action: "View Matches"}];
  
  return <OnboardingTracker steps={steps} />;
}

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
