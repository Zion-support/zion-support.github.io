
import type {_UserProfile} from "@/types/auth";

/**
 * Custom hook for auth event handling
 */
export function useAuthEventHandlers(_setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>, _setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>) {_const _navigate = useNavigate();

  const _handleSignedIn = (_mappedUser: UserProfile) => {
    toast({
      title: "Welcome back!", _description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,
      variant: "default"});
    
    // Check for new registration and send welcome email if needed
    setTimeout__(() => {_if (mappedUser) {
        checkNewRegistration(mappedUser);}
    }, 0);

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {_setOnboardingStep('profile');
      toast({
        title: "Complete your profile", _description: "Please complete your profile information to get started", _variant: "default"});
      navigate('/onboarding');
    }
  };

  const _handleSignedOut = () => {_toast({
      title: "Signed out", _description: "You have been successfully logged out", _variant: "default"});
  };

  return {_handleSignedIn, _handleSignedOut};
}
