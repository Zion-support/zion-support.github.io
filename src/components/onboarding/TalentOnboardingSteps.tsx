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
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
<<<<<<< HEAD
      action: "Update",
    },
=======
      action: "Update"},
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
<<<<<<< HEAD
      action: "Set",
    },
    {
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "View Matches",
    },
  ];
=======
      action: "Set"},
    {
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,