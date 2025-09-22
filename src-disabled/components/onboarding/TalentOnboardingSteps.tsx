import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
      action: "Update"},
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
      action: "Add Skills"},
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,"
      link: "/profile/availability","
      action: "Set",
    },
{
label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,"
      link: "/talent-dashboard","
      action: "View Matches",
    },
  ];
action: "Set"},
    {

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,

}
origin/cursor/automate-test-improve-and-merge-code-2533
return <OnboardingTracker steps={steps} />
pr-12325
