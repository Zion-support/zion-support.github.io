
import React from "react";

export function TalentOnboardingSteps() {_const { user} = useAuth();
  const _onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {_id: "profile", _label: "Complete your profile", _completed: onboardingStatus.profileCompleted, _link: "/profile", _action: "Update"},
    {_id: "skills", _label: "Add your top skills", _completed: onboardingStatus.skillsAdded, _link: "/profile/skills", _action: "Add Skills"},
    {_id: "availability", _label: "Set your availability", _completed: onboardingStatus.availabilitySet, _link: "/profile/availability", _action: "Set"},
    {_id: "match", _label: "Receive your first job match", _completed: onboardingStatus.matchReceived, _link: "/talent-dashboard", _action: "View Matches"}];
  
  return <OnboardingTracker steps={_steps} />;
}
