export const useAuthEventHandlers = (setUser, setOnboardingStep) => {
  const handleSignedIn = (user) => {
    setUser(user);
    setOnboardingStep(1);
  };

  const handleSignedOut = () => {
    setUser(null);
    setOnboardingStep(1);
  };

  return {
    handleSignedIn,
    handleSignedOut,
  };
};