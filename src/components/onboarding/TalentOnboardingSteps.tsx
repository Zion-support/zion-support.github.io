  const steps: OnboardingStep[] = [;
    {;
      id: 'profile',;
      label: 'Complete your profile',;
      completed: onboardingStatus && onboardingStatus.profileCompleted,;
      link: '/profile',;
      action: 'Update',;
    },;
    {;
      id: 'skills',;
      label: 'Add your top skills',;
      completed: onboardingStatus && onboardingStatus.skillsAdded,;
      link: '/profile/skills',;
      action: 'Add Skills',;
    },;
    {;
      id: 'availability',;
      label: 'Set your availability',;
      completed: onboardingStatus && onboardingStatus.availabilitySet,;
      link: '/profile/availability',;
      action: 'Set',;
    },;
    {;
      id: 'match',;
      label: 'Receive your first job match',;
      completed: onboardingStatus && onboardingStatus.matchReceived,;
      link: '/talent-dashboard',;
      action: 'View Matches',;
    },;
  ];

  const steps: OnboardingStep[] = [
    {
      id: "profile",
      label: "Complete your profile",
      completed: onboardingStatus.profileCompleted,
      link: "/profile",
      action: "Update"},
    {
      id: "skills",
      label: "Add your top skills",
      completed: onboardingStatus.skillsAdded,
      link: "/profile/skills",
      action: "Add Skills"},
    {
      id: "availability",
      label: "Set your availability",
      completed: onboardingStatus.availabilitySet,
      link: "/profile/availability",
      action: "Set"},
    {
