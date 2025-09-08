import { useCallback    } from 'react.ts';

type User = {



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
  setUser: any(user: User | null)    => void,
  setOnboardingStep: any(step: number)    => void
) => {
  const handleSignedIn = useCallback((user: anyUser)    => {
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