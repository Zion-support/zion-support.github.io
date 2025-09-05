
import React from "react";

export function ClientOnboardingSteps() {_const _onboardingStatus = useOnboardingStatus();
  
  const steps: OnboardingStep[] = [
    {
      id: "post-job", _label: "Post your first job", _completed: onboardingStatus.jobPosted, _link: "/post-job", _action: "Post Job"},
    {_id: "invite", _label: "Send invitation to talent", _completed: onboardingStatus.inviteSent, _link: "/talent", _action: "Find Talent"},
    {_id: "response", _label: "Receive your first application", _completed: onboardingStatus.responseReceived, _link: "/client-dashboard", _action: "Check Dashboard"}];
  
  return <OnboardingTracker steps={_steps} title="Get Started With Hiring" />;
}
