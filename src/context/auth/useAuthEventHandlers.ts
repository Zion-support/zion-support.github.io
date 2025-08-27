import { useCallback } from 'react';
<<<<<<< HEAD

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
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  }, [setUser, setOnboardingStep]);

  const handleSignedOut = useCallback(() => {
    setUser(null);
<<<<<<< HEAD
    setOnboardingStep(0);
=======
    // Reset onboarding step when user signs out
    setOnboardingStep({
      current: 1,
      total: 3,
      completed: false
    });
    
    console.log('User signed out');
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  }, [setUser, setOnboardingStep]);

  return {
    handleSignedIn,
    handleSignedOut
  };
};