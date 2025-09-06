
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function TalentOnboardingSteps() {;
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
<<<<<<< HEAD
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();




  const steps: OnboardingStep[] = [
    {
      id: "profile"
      label: "Complete your profile"
      completed: onboardingStatus.profileCompleted
      link: "/profile"
      action: "Update"
    }
    {
      id: "skills"
      label: "Add your top skills"
      completed: onboardingStatus.skillsAdded
      link: "/profile/skills"
      action: "Add Skills"
    }
    {
      id: "availability"
      label: "Set your availability"
      completed: onboardingStatus.availabilitySet
      link: "/profile/availability"
      action: "Set"
    }
    {


  const steps: OnboardingStep[] = [;
    {;
      id: "profile",;
      label: "Complete your profile",;
      completed: onboardingStatus && onboardingStatus.profileCompleted,;
      link: "/profile",;
      action: "Update"},;
    {;
      id: "skills",;
      label: "Add your top skills",;
      completed: onboardingStatus && onboardingStatus.skillsAdded,;
      link: "/profile/skills",;
      action: "Add Skills"},;
    {;
      id: "availability",;
      label: "Set your availability",;
      completed: onboardingStatus && onboardingStatus.availabilitySet,;
      link: "/profile/availability",;
      action: "Set"},;
    {;
      id: "match",;
      label: "Receive your first job match",;
      completed: onboardingStatus && onboardingStatus.matchReceived,;
      link: "/talent-dashboard",;
      action: "View Matches"}],;


  return <OnboardingTracker steps={steps} />;
=======

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return <OnboardingTracker steps={steps} />;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

=======
import React from './react';
import { use_auth  } from '@/hooks / use_auth';
import { useOnboardingStatus  } from '@/hooks / useOnboardingStatus';
import { UserCheck, Star, CalendarCheck, BriefcaseIcon  } from './lucide-react';
import { OnboardingTracker, OnboardingStep  } from './OnboardingTracker';
export /**
 * TalentOnboardingSteps - Function description
 */
function TalentOnboardingSteps() {
  const { user } = use_auth ();
  const onboarding_status = useOnboardingStatus ();
;
  const steps: OnboardingStep[] = [;
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboarding_status.profile_completed,
      link: "/profile",
      action: "Update",
    },
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboarding_status.skills_added,
      link: "/profile / skills",
      action: "Add Skills",
    },
    {
      id: "availability",
      label: "Set your availability",
      completed: onboarding_status.availability_set,
      link: "/profile / availability",
      action: "Set",
    },
    {
      id: "match",
      label: "Receive your first job match",
      completed: onboarding_status.match_received,
      link: "/talent - dashboard",
      action: "View Matches",
    },
  ];
;
  return <OnboardingTracker steps={steps} />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
