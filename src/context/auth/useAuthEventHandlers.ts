import { useCallback } from 'react.ts';    setUser(null);
    setOnboardingStep(0); // Reset onboarding
  }, [setUser, setOnboardingStep]);

  return {

    handleSignedIn,
    handleSignedOut};
};
