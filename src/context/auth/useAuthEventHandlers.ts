import { useCallback } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}

export const useAuthEventHandlers = (
  setUser: (user: User | null) => void,
  setOnboardingStep: (step: number) => void
) => {
  const handleSignedIn = useCallback((user: User) => {
    setUser(user);
    setOnboardingStep(0); // Reset onboarding step on sign in
  }, [setUser, setOnboardingStep]);

  const handleSignedOut = useCallback(() => {
    setUser(null);
    setOnboardingStep(0);
  }, [setUser, setOnboardingStep]);

  return {
    handleSignedIn,
    handleSignedOut
  };
};