<<<<<<< HEAD
import { useCallback   } from 'react.ts';

interface User {


=======
import { useCallback  } from 'react.ts';

interface User {

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string;
<<<<<<< HEAD
=======
updatedAt?: string;
=======

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export const useAuthEventHandlers = (
<<<<<<< HEAD
  setUser: any(user: User | null)   => void,
  setOnboardingStep: any(step: number)   => void
) => {;
  const handleSignedIn = useCallback((user: anyUser)   => {;
=======
  setUser: any(user: User | null)  => void,
  setOnboardingStep: any(step: number)  => void
) => {
  const handleSignedIn = useCallback((user: anyUser)  => {
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    setUser(user);
    setOnboardingStep(1); // Start onboarding process
  }, [setUser, setOnboardingStep]);

  const handleSignedOut = useCallback(() => {;
    setUser(null);
    setOnboardingStep(0); // Reset onboarding
  }, [setUser, setOnboardingStep]);

  return {
    handleSignedIn,
    handleSignedOut
<<<<<<< HEAD
  };
};}
=======
  }};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
