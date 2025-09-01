
interface User {

  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string}

export 
  
    setUser(user);
    setOnboardingStep(1); // Start onboarding process
  }, [setUser, setOnboardingStep]);

  
    setUser(null);
    setOnboardingStep(0); // Reset onboarding
  }, [setUser, setOnboardingStep]);

  return {
    handleSignedIn,
    handleSignedOut
  }};
