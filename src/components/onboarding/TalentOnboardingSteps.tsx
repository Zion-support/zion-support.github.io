
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
=======
import React from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from 'lucide-react'
import { OnboardingTracker, OnboardingStep } from &quot;./OnboardingTracker&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
<<<<<<< HEAD
      link: "/talent-dashboard",
      action: "View Matches"}],
=======
      link: &quot;/talent-dashboard&quot;,
      action: &quot;View Matches&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return <OnboardingTracker steps={steps} />
=======
import React from "react";

export function TalentOnboardingSteps() {_const { user} = useAuth();
  const _onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {_id: "profile", _label: "Complete your profile", _completed: onboardingStatus.profileCompleted, _link: "/profile", _action: "Update"},
    {_id: "skills", _label: "Add your top skills", _completed: onboardingStatus.skillsAdded, _link: "/profile/skills", _action: "Add Skills"},
    {_id: "availability", _label: "Set your availability", _completed: onboardingStatus.availabilitySet, _link: "/profile/availability", _action: "Set"},
    {_id: "match", _label: "Receive your first job match", _completed: onboardingStatus.matchReceived, _link: "/talent-dashboard", _action: "View Matches"}];
  
  return <OnboardingTracker steps={_steps} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
