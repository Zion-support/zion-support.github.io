import { useCallback } from 'react';

interface User {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export const useAuthEventHandlers = (
  setUser: (user: User | null) => void,
  setOnboardingStep: (step: number) => void
) => {
  const handleSignedIn = useCallback((user: User) => {
    setUser(user);
    setOnboardingStep(1); // Start onboarding process
  }, [setUser, setOnboardingStep]);

  const handleSignedOut = useCallback(() => {
    setUser(null);
    setOnboardingStep(0); // Reset onboarding
  }, [setUser, setOnboardingStep]);

  return {
    handleSignedIn,
    handleSignedOut
  };
};