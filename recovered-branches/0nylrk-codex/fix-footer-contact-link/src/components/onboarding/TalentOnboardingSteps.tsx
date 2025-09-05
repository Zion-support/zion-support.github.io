
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus",
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from "lucide-react",
import { OnboardingTracker, OnboardingStep } from "./OnboardingTracker",
=======
import React from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from &quot;lucide-react&quot;;
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
  return <OnboardingTracker steps={steps} />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;