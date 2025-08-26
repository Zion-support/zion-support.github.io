import { useCallback } from 'react';
import { User } from './useAuthState';
export const useAuthEventHandlers = (
  setUser: (user: User | null) => void,
  setOnboardingStep: (step: any) => void
) => {
  const handleSignedIn = useCallback((user: User) => {
    setUser(user);
    // Reset onboarding step when user signs in
    setOnboardingStep({
      current: 1,
      total: 3,
      completed: false
    });
    
    console.log('User signed in:', user);
  }, [setUser, setOnboardingStep]);
  const handleSignedOut = useCallback(() => {
    setUser(null);
    // Reset onboarding step when user signs out
    setOnboardingStep({
      current: 1,
      total: 3,
      completed: false
    });
    
    console.log('User signed out');
  }, [setUser, setOnboardingStep]);
  return {
    handleSignedIn,
    handleSignedOut
  };
};