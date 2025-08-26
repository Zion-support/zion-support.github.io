import { User } from './AuthContext';

export const useAuthEventHandlers = (
  setUser: (user: User | null) => void,
  setOnboardingStep: (step: number) => void
) => {
  const handleSignedIn = (user: User) => {
    setUser(user);
    // Set onboarding step based on user data
    if (user.onboarding_step !== undefined) {
      setOnboardingStep(user.onboarding_step);
    }
  };

  const handleSignedOut = () => {
    setUser(null);
    setOnboardingStep(0);
  };

  return {
    handleSignedIn,
    handleSignedOut
  };
};