<<<<<<< HEAD
import { useCallback  } from 'react.ts';
interface User {
=======
import { useCallback                } from 'react.ts';

interface User {















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string}
=======
<<<<<<< HEAD
  updatedAt?: string;
=======
updatedAt?: string;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
export const useAuthEventHandlers = (
  setUser: anyanyanyanyanyanyanyanyanyanyanyanyanyany(user: User | null)                => void,
  setOnboardingStep: anyanyanyanyanyanyanyanyanyanyanyanyanyany(step: number)                => void
) => {;
  const handleSignedIn = useCallback((user: anyanyanyanyanyanyanyanyanyanyanyanyanyanyUser)                => {;
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
  }};
