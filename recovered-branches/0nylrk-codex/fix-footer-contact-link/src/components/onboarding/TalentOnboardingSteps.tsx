<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx

<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
export function TalentOnboardingSteps() {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",

export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
id: "match"
=======
      id: "match"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      label: "Receive your first job match"
      completed: onboardingStatus.matchReceived
      link: "/talent-dashboard"
      action: "View Matches"
    }
  ];
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function TalentOnboardingSteps() {;
  const { user } = useAuth(),;
  const onboardingStatus = useOnboardingStatus(),;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const steps: OnboardingStep[] = [;
    {;
      id: "profile",;
      label: "Complete your profile",;
<<<<<<< HEAD
<<<<<<< HEAD
      completed: onboardingStatus.profileCompleted,;
=======
      completed: onboardingStatus && onboardingStatus.profileCompleted,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      completed: onboardingStatus.profileCompleted,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      link: "/profile",;
      action: "Update"},;
    {;
      id: "skills",;
      label: "Add your top skills",;
<<<<<<< HEAD
<<<<<<< HEAD
      completed: onboardingStatus.skillsAdded,;
=======
      completed: onboardingStatus && onboardingStatus.skillsAdded,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      completed: onboardingStatus.skillsAdded,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      link: "/profile/skills",;
      action: "Add Skills"},;
    {;
      id: "availability",;
      label: "Set your availability",;
<<<<<<< HEAD
<<<<<<< HEAD
      completed: onboardingStatus.availabilitySet,;
=======
      completed: onboardingStatus && onboardingStatus.availabilitySet,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      completed: onboardingStatus.availabilitySet,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      link: "/profile/availability",;
      action: "Set"},;
    {;
      id: "match",;
      label: "Receive your first job match",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      completed: onboardingStatus.matchReceived,;
      link: "/talent-dashboard";
      action: "View Matches"}];
<<<<<<< HEAD

  return <OnboardingTracker steps={steps} />;

<<<<<<< HEAD
=======
      completed: onboardingStatus && onboardingStatus.matchReceived,;
      link: "/talent-dashboard",;
      action: "View Matches"}],;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/TalentOnboardingSteps.tsx
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
=======

import React from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
;
export function TalentOnboardingSteps() {;
  const { user } = useAuth(),;
  const onboardingStatus = useOnboardingStatus(),;
  ;
  const steps:OnboardingStep[] = [;
    {;
      id:"profile",;
      label:"Complete your profile",;
      completed:onboardingStatus.profileCompleted,;
      link:"/profile",;
      action:"Update"},;
    {;
      id:"skills",;
      label:"Add your top skills",;
      completed:onboardingStatus.skillsAdded,;
      link:"/profile/skills",;
      action:"Add Skills"},;
    {;
      id:"availability",;
      label:"Set your availability",;
      completed:onboardingStatus.availabilitySet,;
      link:"/profile/availability",;
      action:"Set"},;
    {;
      id:"match",;
      label:"Receive your first job match",;
      completed:onboardingStatus.matchReceived,;
      link:"/talent-dashboard",;
      action:"View Matches"}],;
  ;
  return <OnboardingTracker steps={steps} />,;}
 export function TalentOnboardingSteps () {
  const {
  user 
}= useAuth ();
const onboardingStatus = useOnboardingStatus ();
const steps: OnboardingStep[] = [ {
  id: "profile";
label: "Complete your profile";
completed: onboardingStatus.profileCompleted;
link: "/profile";
action: "Update" 
};
{
  id: "skills";
label: "Add your top skills";
completed: onboardingStatus.skillsAdded;
link: "/profile/skills";
action: "Add Skills" 
};
{
  id: "availability";
label: "Set your availability";
completed: onboardingStatus.availabilitySet;
link: "/profile/availability";
action: "Set" 
};
{
  id: "match";
label: "Receive your first job match";
completed: onboardingStatus.matchReceived;
return <OnboardingTracker steps= {
  steps 
}/> 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      action: "View Matches",
    },
  ];

  return <OnboardingTracker steps={steps} />;

=======
  return <OnboardingTracker steps={steps} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
