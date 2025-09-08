
import type { UserProfile } from "@/types/auth",
import { checkNewRegistration } from "@/utils/authUtils",







    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');






      setOnboardingStep ('profile');
      toast ({
        title: "Complete your profile",
        description: "Please complete your profile information to get started",
        variant: "default"}),
      navigate ('/onboarding');
    }
  }
;
  const handleSignedOut = () =>: any {
    toast ({
      title: "Signed out",
      description: "You have been successfully logged out",
      variant: "default"});
  }
;
  return {
    handleSignedIn;
    handleSignedOut;

  },

  return {
    handleSignedIn,
    handleSignedOut




