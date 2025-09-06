


  const steps: OnboardingStep[] = [
    {
      id: "profile"
      label: "Complete your profile"
      completed: onboardingStatus.profileCompleted
      link: "/profile"
      action: "Update"
    }
    {
      id: "skills"
      label: "Add your top skills"
      completed: onboardingStatus.skillsAdded
      link: "/profile/skills"
      action: "Add Skills"
    }
    {
      id: "availability"
      label: "Set your availability"
      completed: onboardingStatus.availabilitySet
      link: "/profile/availability"
      action: "Set"
    }
    {

      id: "match",
      label: "Receive your first job match",
      completed: onboardingStatus.matchReceived,
      link: "/talent-dashboard",
      action: "View Matches"}],
  
  return <OnboardingTracker steps={steps} />

  return <OnboardingTracker steps={steps} />;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

