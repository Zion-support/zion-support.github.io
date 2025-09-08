import { useCallback } from 'react';
import type { User } from './useAuthState';

export const useAuthEventHandlers = (
  setUser: (user: User | null) => void,
  setOnboardingStep: (step: number) => void
) => {
  const handleSignedIn = useCallback((user: User) => {
    setUser(user);
    setOnboardingStep(0);
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