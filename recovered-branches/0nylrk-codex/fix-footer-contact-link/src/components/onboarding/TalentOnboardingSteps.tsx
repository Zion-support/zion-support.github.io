
<<<<<<< HEAD

import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",

=======
import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

export function TalentOnboardingSteps() {;

  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
import React from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function TalentOnboardingSteps() {;
  const { user } = useAuth(),;
  const onboardingStatus = useOnboardingStatus(),;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const steps: OnboardingStep[] = [;
    {;
      id: "profile",;
      label: "Complete your profile",;
<<<<<<< HEAD
      completed: onboardingStatus.profileCompleted,;
=======
      completed: onboardingStatus && onboardingStatus.profileCompleted,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      link: "/profile",;
      action: "Update"},;
    {;
      id: "skills",;
      label: "Add your top skills",;
<<<<<<< HEAD
      completed: onboardingStatus.skillsAdded,;
=======
      completed: onboardingStatus && onboardingStatus.skillsAdded,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      link: "/profile/skills",;
      action: "Add Skills"},;
    {;
      id: "availability",;
      label: "Set your availability",;
<<<<<<< HEAD
      completed: onboardingStatus.availabilitySet,;
=======
      completed: onboardingStatus && onboardingStatus.availabilitySet,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      link: "/profile/availability",;
      action: "Set"},;
    {;
      id: "match",;
      label: "Receive your first job match",;
<<<<<<< HEAD
      completed: onboardingStatus.matchReceived,;
      link: "/talent-dashboard";
      action: "View Matches"}];

  return <OnboardingTracker steps={steps} />;

=======
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

  return <OnboardingTracker steps={steps} />;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
