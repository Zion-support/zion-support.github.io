
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
=======
import type {_UserProfile} from "@/types/auth";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
/**
 * Custom hook for auth event handling
 */
<<<<<<< HEAD
export function useAuthEventHandlers(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigate = useNavigate(),
=======
export function useAuthEventHandlers(_setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>, _setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>) {_const _navigate = useNavigate();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleSignedIn = (_mappedUser: UserProfile) => {
    toast({
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      navigate('/onboarding');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

<<<<<<< HEAD
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
=======
  const _handleSignedOut = () => {_toast({
      title: "Signed out", _description: "You have been successfully logged out", _variant: "default"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return {
    handleSignedIn,
    handleSignedOut
  }
=======
  return {_handleSignedIn, _handleSignedOut};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
