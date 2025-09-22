<<<<<<< HEAD
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
return <OnboardingTracker steps={steps} />
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
