
<<<<<<< HEAD
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
=======
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";

export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();
>>>>>>> origin/auto/autonomy-17186719616
  
  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
<<<<<<< HEAD
      action: "Update"},
=======
      action: "Update",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
<<<<<<< HEAD
      action: "Add Skills"},
=======
      action: "Add Skills",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
<<<<<<< HEAD
      action: "Set"},
    {

=======
      action: "Set",
    },
    {
>>>>>>> origin/auto/autonomy-17186719616
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
<<<<<<< HEAD
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />,
=======
      action: "View Matches",
    },
  ];
  
  return <OnboardingTracker steps={steps} />;
>>>>>>> origin/auto/autonomy-17186719616
}
