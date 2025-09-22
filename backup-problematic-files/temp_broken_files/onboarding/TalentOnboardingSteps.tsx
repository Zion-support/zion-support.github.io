<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
 export function TalentOnboardingSteps () {;
  const { ;
  user ;
 } = useAuth ();
const onboardingStatus = useOnboardingStatus ();
const steps: OnboardingStep[] = [ {;
  id: "profile",";"label: "Complete your profile","completed: onboardingStatus.profileCompleted;";"link: "/profile",";"action: "Update",
};"{";"  id: "skills",";"label: "Add your top skills","completed: onboardingStatus.skillsAdded;";"link: "/profile/skills",";"action: "Add Skills",
};"{";"  id: "availability",";"label: "Set your availability","completed: onboardingStatus.availabilitySet;";"link: "/profile/availability",";"action: "Set",
};"{";"  id: "match",";"label: "Receive your first job match",
completed: onboardingStatus.matchReceived;
return <OnboardingTracker steps= {;
  steps ;
}/> ;"}"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
