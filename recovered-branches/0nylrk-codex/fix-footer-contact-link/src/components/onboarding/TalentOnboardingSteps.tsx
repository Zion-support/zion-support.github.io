<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
<<<<<<< HEAD
<<<<<<< HEAD

export function TalentOnboardingSteps() {;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();
<<<<<<< HEAD
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
=======

<<<<<<< HEAD



=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
  
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();

<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
      action: "Update",
    },
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
      action: "Add Skills",
    },
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
      action: "Set",
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
id: "match"
      id: "match"
      label: "Receive your first job match"
      completed: onboardingStatus.matchReceived
      link: "/talent-dashboard"
      action: "View Matches"
    }
  ];
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
<<<<<<< HEAD
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />
import React from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",;
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",;
export function TalentOnboardingSteps() {;
  const { user } = useAuth(),;
  const onboardingStatus = useOnboardingStatus(),;
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const steps: OnboardingStep[] = [;
    {;
      id: "profile",;
      label: "Complete your profile",;
<<<<<<< HEAD
      completed: onboardingStatus && onboardingStatus.profileCompleted,;
<<<<<<< HEAD
=======
      completed: onboardingStatus.profileCompleted,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      link: "/profile",;
      action: "Update"},;
    {;
      id: "skills",;
      label: "Add your top skills",;
<<<<<<< HEAD
      completed: onboardingStatus && onboardingStatus.skillsAdded,;
<<<<<<< HEAD
=======
      completed: onboardingStatus.skillsAdded,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      link: "/profile/skills",;
      action: "Add Skills"},;
    {;
      id: "availability",;
      label: "Set your availability",;
<<<<<<< HEAD
      completed: onboardingStatus && onboardingStatus.availabilitySet,;
<<<<<<< HEAD
=======
      completed: onboardingStatus.availabilitySet,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      link: "/profile/availability",;
      action: "Set"},;
    {;
      id: "match",;
      label: "Receive your first job match",;
<<<<<<< HEAD
<<<<<<< HEAD
      completed: onboardingStatus && onboardingStatus.matchReceived,;
      link: "/talent-dashboard",;
      action: "View Matches"}],;


=======
      completed: onboardingStatus.matchReceived,;
      link: "/talent-dashboard";
      action: "View Matches"}];
      completed: onboardingStatus && onboardingStatus.matchReceived,;
      link: "/talent-dashboard",;
      action: "View Matches"}],;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return <OnboardingTracker steps={steps} />;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

=======

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
<<<<<<< HEAD
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      action: "View Matches",
    },
  ];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  return <OnboardingTracker steps={steps} />;
}

  const { user } = useAuth();

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
      action: "View Matches",
    },
  ];

  return <OnboardingTracker steps={steps} />;

  return <OnboardingTracker steps={steps} />;
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
