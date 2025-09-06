<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus';
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
<<<<<<< HEAD
=======
=======

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [
    {
      id: 'profile',
      label: 'Complete your profile',
      completed: onboardingStatus.profileCompleted,
      link: '/profile',
      action: 'Update',
    },
    {
      id: 'skills',
      label: 'Add your top skills',
      completed: onboardingStatus.skillsAdded,
      link: '/profile/skills',
      action: 'Add Skills',
    },
    {
      id: 'availability',
      label: 'Set your availability',
      completed: onboardingStatus.availabilitySet,
      link: '/profile/availability',
      action: 'Set',
    },
    {
      id: 'match',
      label: 'Receive your first job match',
      completed: onboardingStatus.matchReceived,
<<<<<<< HEAD
      link: '/talent-dashboard',
      action: 'View Matches',
    },
  ];

  return <OnboardingTracker steps={steps} />;
=======
      link: "/talent-dashboard",
      action: "View Matches"}],
  return <OnboardingTracker steps={steps} />;
<<<<<<< HEAD
=======

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";


export function TalentOnboardingSteps() { const { user  } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),

  
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
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
      action: "Set"},
    {
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",

      action: "View Matches"}];
  return <OnboardingTracker steps={steps} />

}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
