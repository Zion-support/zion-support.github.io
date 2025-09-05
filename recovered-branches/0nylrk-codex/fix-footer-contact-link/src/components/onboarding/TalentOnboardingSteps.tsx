
import React from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useOnboardingStatus } from &quot;@/hooks/useOnboardingStatus&quot;;
import { UserCheck, Star, CalendarCheck, BriefcaseIcon } from &quot;lucide-react&quot;;
import { OnboardingTracker, OnboardingStep } from &quot;./OnboardingTracker&quot;;

export function TalentOnboardingSteps() {
  const { user } = useAuth();
  const onboardingStatus = useOnboardingStatus();
  
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
      link: &quot;/talent-dashboard&quot;,
      action: &quot;View Matches&quot;}];
  
  return <OnboardingTracker steps={steps} />;
}
