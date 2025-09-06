 export function TalentOnboardingSteps () {;
  const { ;
  user ;
 } = useAuth ();
const onboardingStatus = useOnboardingStatus ();
const steps: OnboardingStep[] = [ {;
  id: "profile",";"label: "Complete your profile","completed: onboardingStatus.profileCompleted;";"link: any
"{";"  id: "skills",";"label: "Add your top skills","completed: onboardingStatus.skillsAdded;";"link: any
"{";"  id: "availability",";"label: "Set your availability","completed: onboardingStatus.availabilitySet;";"link: any