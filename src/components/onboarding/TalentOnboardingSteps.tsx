<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker'
export function TalentOnboardingSteps() {
  const { user } = useAuth()
  const onboardingStatus = useOnboardingStatus()

import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {



  return <OnboardingTracker steps={steps} />
}
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return <OnboardingTracker steps={steps} />

import React from 'react';
import { use_auth } from '@/hooks / use_auth';
import { useOnboardingStatus } from '@/hooks / useOnboardingStatus';
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react';
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
export /**
 * TalentOnboardingSteps - Function description
 */
function TalentOnboardingSteps() {
  const { user } = use_auth ();
  const onboarding_status = useOnboardingStatus ();
  const steps: OnboardingStep[] = [;


<<<<<<< HEAD
<<<<<<< HEAD
  const steps: OnboardingStep[] = [
    {
      id: 'profile',
      label: 'Complete your profile',
      completed: onboarding_status.profile_completed,
      link: '/profile',
      action: 'Update',
    },
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

  return <OnboardingTracker steps={steps} />
}
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: '/talent-dashboard',
      action: 'View Matches',
    },
  ];
  return <OnboardingTracker steps={steps} />;
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
      completed: onboardingStatus.matchReceived,
=======

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
