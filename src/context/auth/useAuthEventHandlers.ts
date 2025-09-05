export const useAuthEventHandlers = (setUser: any, setOnboardingStep: any) => {
  const handleSignedIn = (user: any) => {
    setUser(user);
    setOnboardingStep(1);
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