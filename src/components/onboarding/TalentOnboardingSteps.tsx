
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {

  const { user } = useAuth()
  const onboardingStatus = useOnboardingStatus()
  const steps: OnboardingStep[] = [
    {
      id: 'profile'
      label: 'Complete your profile'
      completed: onboardingStatus.profileCompleted
      link: '/profile'
      action: 'Update'
    }
    {
      id: 'skills'
      label: 'Add your top skills'
      completed: onboardingStatus.skillsAdded
      link: '/profile/skills'
      action: 'Add Skills'
    }
    {
      id: 'availability'
      label: 'Set your availability'
      completed: onboardingStatus.availabilitySet
      link: '/profile/availability'
      action: 'Set'
    }
    {
      id: 'match'
      label: 'Receive your first job match'
      completed: onboardingStatus.matchReceived
      link: '/talent-dashboard'
      action: 'View Matches'
    }
  ]
export function TalentOnboardingSteps() {;
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();

  const steps: OnboardingStep[] = [;
    {;
      id: 'profile',;
      label: 'Complete your profile',;
      completed: onboardingStatus && onboardingStatus.profileCompleted,;
      link: '/profile',;
      action: 'Update',;
    },;
    {;
      id: 'skills',;
      label: 'Add your top skills',;
      completed: onboardingStatus && onboardingStatus.skillsAdded,;
      link: '/profile/skills',;
      action: 'Add Skills',;
    },;
    {;
      id: 'availability',;
      label: 'Set your availability',;
      completed: onboardingStatus && onboardingStatus.availabilitySet,;
      link: '/profile/availability',;
      action: 'Set',;
    },;
    {;
      id: 'match',;
      label: 'Receive your first job match',;
      completed: onboardingStatus && onboardingStatus.matchReceived,;
      link: '/talent-dashboard',;
      action: 'View Matches',;
    },;
  ];

  return <OnboardingTracker steps={steps} />;
}

export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
  
  const steps: OnboardingStep[] = [
    {
      id: 'profile',
      label: 'Complete your profile',
      completed: onboarding_status.profile_completed,
      link: '/profile',
      action: 'Update',
    },
    {
      id: 'skills',
      label: 'Add your top skills',
      completed: onboarding_status.skills_added,
      link: '/profile / skills',
      action: 'Add Skills',
    },
    {
      id: 'availability',
      label: 'Set your availability',
      completed: onboarding_status.availability_set,
      link: '/profile / availability',
      action: 'Set',
    },
    {

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
};
      link: "/talent-dashboard",
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />
import React from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function TalentOnboardingSteps() {;
  const { user } = useAuth(),;
  const onboardingStatus = useOnboardingStatus(),;
  const steps: OnboardingStep[] = [;
    {;
      id: "profile",;
      label: "Complete your profile",;
      completed: onboardingStatus.profileCompleted,;
      link: "/profile",;
      action: "Update"},;
    {;
      id: "skills",;
      label: "Add your top skills",;
      completed: onboardingStatus.skillsAdded,;
      link: "/profile/skills",;
      action: "Add Skills"},;
    {;
      id: "availability",;
      label: "Set your availability",;
      completed: onboardingStatus.availabilitySet,;
      link: "/profile/availability",;
      action: "Set"},;
    {;
      id: "match",;
      label: "Receive your first job match",;
      completed: onboardingStatus.matchReceived,;
      link: "/talent-dashboard";
      action: "View Matches"}];
  return <OnboardingTracker steps={steps} />;
}
;
