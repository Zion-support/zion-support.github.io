<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {useOnboardingStatus} from "@/hooks/useOnboardingStatus";
import {UserCheck, Star, CalendarCheck, BriefcaseIcon} from "lucide-react";
import {OnboardingTracker, OnboardingStep} from "./OnboardingTracker";

<<<<<<< HEAD
export function TalentOnboardingSteps() {;
<<<<<<< HEAD
  const { user } = useAuth();

  const onboardingStatus = useOnboardingStatus();
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
    {
<<<<<<< HEAD
<<<<<<< HEAD
id: "match"
      id: "match"
      label: "Receive your first job match"
      completed: onboardingStatus.matchReceived"
      link: "/talent-dashboard""
      action: "View Matches"
    }
  ];"
      id: "match","
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
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const steps: OnboardingStep[] = [;
    {;
      id: "profile",;
      label: "Complete your profile",;
completed: onboardingStatus && onboardingStatus.profileCompleted,;
<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
<<<<<<< HEAD
      action: "View Matches"}],

  return <OnboardingTracker steps={steps} />
      action: "View Matches",
    },
  ];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
      action: "View Matches",
    },
  ];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  return <OnboardingTracker steps={steps} />;
}

  const { user } = useAuth();

import React from './react';'
import { use_auth  } from '@/hooks / use_auth';'
import { useOnboardingStatus  } from '@/hooks / useOnboardingStatus';'
import { UserCheck, Star, CalendarCheck, BriefcaseIcon  } from './lucide-react';'
import { OnboardingTracker, OnboardingStep  } from './OnboardingTracker';
export /**;
 * TalentOnboardingSteps - Function description;
 */
function TalentOnboardingSteps() {}
  const { user } = use_auth ();
  const onboarding_status = useOnboardingStatus ();
;
  const steps: OnboardingStep[] = [;
{"
      id: "profile","
      label: "Complete your profile",
      completed: onboarding_status.profile_completed,"
      link: "/profile","
      action: "Update",
    },
    {"
      id: "skills","
      label: "Add your top skills",
      completed: onboarding_status.skills_added,"
      link: "/profile / skills","
      action: "Add Skills",
    },
    {"
      id: "availability","
      label: "Set your availability",
      completed: onboarding_status.availability_set,"
      link: "/profile / availability","
      action: "Set",
    },
    {"
      id: "match","
      label: "Receive your first job match",
      completed: onboarding_status.match_received,"
      link: "/talent - dashboard","
      action: "View Matches",
    },
  ];
;
  return <OnboardingTracker steps={steps} />;
}

return <OnboardingTracker steps={steps} />;
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
