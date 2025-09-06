<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";
<<<<<<< HEAD

export function TalentOnboardingSteps() {;

  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();




=======

export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
=======
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react";
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker";
export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const steps: OnboardingStep[] = [;
    {;
      id: "profile",;
      label: "Complete your profile",;
      completed: onboardingStatus && onboardingStatus.profileCompleted,;
<<<<<<< HEAD
=======
      completed: onboardingStatus.profileCompleted,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      link: "/profile",;
      action: "Update"},;
    {;
      id: "skills",;
      label: "Add your top skills",;
      completed: onboardingStatus && onboardingStatus.skillsAdded,;
<<<<<<< HEAD
=======
      completed: onboardingStatus.skillsAdded,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      link: "/profile/skills",;
      action: "Add Skills"},;
    {;
      id: "availability",;
      label: "Set your availability",;
      completed: onboardingStatus && onboardingStatus.availabilitySet,;
<<<<<<< HEAD
=======
      completed: onboardingStatus.availabilitySet,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      link: "/profile/availability",;
      action: "Set"},;
    {;
      id: "match",;
      label: "Receive your first job match",;
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

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
<<<<<<< HEAD
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />

  return <OnboardingTracker steps={steps} />;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
      action: "View Matches",
    },
  ];

  return <OnboardingTracker steps={steps} />;
>>>>>>> main
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
