
<<<<<<< HEAD
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
  return <OnboardingTracker steps={steps} />,;
=======
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
export function TalentOnboardingSteps() {
  const { user } = useAuth(),
  const onboardingStatus = useOnboardingStatus(),
  
  const steps: OnboardingStep[] = [
    {
      id: &quot;profile&quot;,
      label: &quot;Complete your profile&quot;,
      completed: onboardingStatus.profileCompleted,
      link: &quot;/profile&quot;,
      action: &quot;Update&quot;},
    {
      id: &quot;skills&quot;,
      label: &quot;Add your top skills&quot;,
      completed: onboardingStatus.skillsAdded,
      link: &quot;/profile/skills&quot;,
      action: &quot;Add Skills&quot;},
    {
      id: &quot;availability&quot;,
      label: &quot;Set your availability&quot;,
      completed: onboardingStatus.availabilitySet,
      link: &quot;/profile/availability&quot;,
      action: &quot;Set&quot;},
    {
      id: &quot;match&quot;,
      label: &quot;Receive your first job match&quot;,
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "View Matches"}],  
  return <OnboardingTracker steps={steps} />
import React from "react";

export function TalentOnboardingSteps() {_const { user} = useAuth();
  const _onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {_id: "profile", _label: "Complete your profile", _completed: onboardingStatus.profileCompleted, _link: "/profile", _action: "Update"},
    {_id: "skills", _label: "Add your top skills", _completed: onboardingStatus.skillsAdded, _link: "/profile/skills", _action: "Add Skills"},
    {_id: "availability", _label: "Set your availability", _completed: onboardingStatus.availabilitySet, _link: "/profile/availability", _action: "Set"},
    {_id: "match", _label: "Receive your first job match", _completed: onboardingStatus.matchReceived, _link: "/talent-dashboard", _action: "View Matches"}];
  
  return <OnboardingTracker steps={_steps} />;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
