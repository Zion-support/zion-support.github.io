 export function ClientOnboardingSteps () {;
  const onboardingStatus = useOnboardingStatus ();
const steps: OnboardingStep[] = [ {;
  id: "post-job",";"label: "Post your first job","completed: onboardingStatus.jobPosted;";"link: any
"{";"  id: "invite",";"label: "Send invitation to talent","completed: onboardingStatus.inviteSent;";"link: any