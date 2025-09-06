<<<<<<< HEAD
import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker'
export function TalentOnboardingSteps() {
  const { user } = useAuth()
  const onboardingStatus = useOnboardingStatus()

<<<<<<< HEAD
=======
import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker'
export function TalentOnboardingSteps() {
  const { user } = useAuth()
  const onboardingStatus = useOnboardingStatus()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {



  return <OnboardingTracker steps={steps} />
}
>>>>>>>   const steps: OnboardingStep[] = [
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     {
=======
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


  const steps: OnboardingStep[] = [
    {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      id: 'profile',
      label: 'Complete your profile',
      completed: onboarding_status.profile_completed,
      link: '/profile',
      action: 'Update',
    },
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
  
  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
      action: "Update"},
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

      id: "match",
      label: "Receive your first job match",
<<<<<<< HEAD
      completed: onboardingStatus.matchReceived,
=======
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      link: '/talent-dashboard',
      action: 'View Matches',
    },
  ];
  return <OnboardingTracker steps={steps} />;
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
      completed: onboardingStatus.matchReceived,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
