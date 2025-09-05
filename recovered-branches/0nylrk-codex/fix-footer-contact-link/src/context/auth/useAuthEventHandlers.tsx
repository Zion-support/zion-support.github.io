
import { toast } from &quot;@/hooks/use-toast&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
import { checkNewRegistration } from &quot;@/utils/authUtils&quot;;
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for auth event handling
 */
export function useAuthEventHandlers(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigate = useNavigate();

  const handleSignedIn = (mappedUser: UserProfile) => {
    toast({
      title: &quot;Welcome back!&quot;,
      description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,
      variant: &quot;default&quot;});
    
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser);
      }
    }, 0);

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');
      toast({
        title: &quot;Complete your profile&quot;,
        description: &quot;Please complete your profile information to get started&quot;,
        variant: &quot;default&quot;});
      navigate('/onboarding');
    }
  };

  const handleSignedOut = () => {
    toast({
      title: &quot;Signed out&quot;,
      description: &quot;You have been successfully logged out&quot;,
      variant: &quot;default&quot;});
  };

  return {
    handleSignedIn,
    handleSignedOut
  };
}
