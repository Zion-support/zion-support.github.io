
<<<<<<< HEAD
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { checkNewRegistration } from "@/utils/authUtils",
import { useNavigate } from 'react-router-dom',
=======
import { toast } from &quot;@/hooks/use-toast&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
import { checkNewRegistration } from &quot;@/utils/authUtils&quot;;
import { useNavigate } from 'react-router-dom';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
/**
 * Custom hook for auth event handling
 */
export function useAuthEventHandlers(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigate = useNavigate(),

  const handleSignedIn = (mappedUser: UserProfile) => {
    toast({
      title: &quot;Welcome back!&quot;,
      description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,
<<<<<<< HEAD
      variant: "default"}),
=======
      variant: &quot;default&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser)
      }
    }, 0),

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile'),
      toast({
<<<<<<< HEAD
        title: "Complete your profile",
        description: "Please complete your profile information to get started",
        variant: "default"}),
      navigate('/onboarding')
=======
        title: &quot;Complete your profile&quot;,
        description: &quot;Please complete your profile information to get started&quot;,
        variant: &quot;default&quot;});
      navigate('/onboarding');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleSignedOut = () => {
    toast({
<<<<<<< HEAD
      title: "Signed out",
      description: "You have been successfully logged out",
      variant: "default"})
  },
=======
      title: &quot;Signed out&quot;,
      description: &quot;You have been successfully logged out&quot;,
      variant: &quot;default&quot;});
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return {
    handleSignedIn,
    handleSignedOut
=======
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
import { checkNewRegistration } from "@/utils/authUtils",;
import { useNavigate } from 'react-router-dom',;
/**;
 * Custom hook for auth event handling;
 */;
export function useAuthEventHandlers(;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>;
) {;
  const navigate = useNavigate(),;
  const handleSignedIn = (mappedUser: UserProfile) => {;
    toast({;
      title: "Welcome back!",;
      description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;
      variant: "default"}),;
    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser);
      }
    }, 0),;
    // Check if user needs to complete onboarding;
    if (!mappedUser.profileComplete && navigate) {;
      setOnboardingStep('profile'),;
      toast({;
        title: "Complete your profile",;
        description: "Please complete your profile information to get started",;
        variant: "default"}),;
      navigate('/onboarding');
    }
  },;
  const handleSignedOut = () => {;
    toast({;
      title: "Signed out",;
      description: "You have been successfully logged out",;
      variant: "default"});
  };
  return {;
    handleSignedIn;
    handleSignedOut;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}
;