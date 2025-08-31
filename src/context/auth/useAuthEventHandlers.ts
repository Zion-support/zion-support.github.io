<<<<<<< HEAD
import { useCallback } from 'react';

=======
import { useCallback  } from 'react.ts';
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
interface User {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string;
}

=======
  updatedAt?: string}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
export const useAuthEventHandlers = (
  setUser: (user: User | null) => void,
  setOnboardingStep: (step: number) => void
) => {
  const handleSignedIn = useCallback((user: User) => {
    setUser(user);
    setOnboardingStep(1); // Start onboarding process
  }, [setUser, setOnboardingStep]);
<<<<<<< HEAD

  const handleSignedOut = useCallback(() => {
=======
  const handleSignedOut = useCallback(() => {;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    setUser(null);
    setOnboardingStep(0); // Reset onboarding
  }, [setUser, setOnboardingStep]);
  return {
    handleSignedIn,
    handleSignedOut
<<<<<<< HEAD
  };
};
=======
  }};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
