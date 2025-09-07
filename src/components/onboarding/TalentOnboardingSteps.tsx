<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
=======
return <OnboardingTracker steps={steps} />

import React from 'react';'
import { use_auth } from '@/hooks / use_auth';'
import { useOnboardingStatus } from '@/hooks / useOnboardingStatus';'
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react';'
import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
export /**;
 * TalentOnboardingSteps - Function description;
 */
function TalentOnboardingSteps() {}
  const { user } = use_auth ();
  const onboarding_status = useOnboardingStatus ();
  const steps: OnboardingStep[] = [;


<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
  const steps: OnboardingStep[] = []
    {}
      id: "profile","
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,"
      link: "/profile","
      action: "Update",
    },
    {"
      id: "skills","
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,"
      link: "/profile/skills","
      action: "Add Skills",
    },
    {"
      id: "availability","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,"
      link: "/profile/availability","
      action: "Set",
    },
<<<<<<< HEAD
    {
<<<<<<< HEAD
=======
      id: "match",
=======
    {"
      id: "match","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,"
      link: "/talent-dashboard","
      action: "View Matches",
    },
  ];
<<<<<<< HEAD
      action: "Set"},
    {

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const { user } = useAuth();
  const onboardingStatus = null;
  return <OnboardingTracker steps={steps} />
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
"
      id: "match","
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
return <OnboardingTracker steps={steps} />
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
