
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';
=======
import type { UserProfile } from "@/types/auth",
import { checkNewRegistration } from "@/utils/authUtils",
import { useNavigate } from 'react-router-dom',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
/**
 * Custom hook for auth event handling
 */
export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigate = useNavigate()
  const handleSignedIn = (mappedUser: UserProfile) => {
    toast({
      title: "Welcome back!"
      description: `You're now signed in as ${mappedUser.displayName |mappedUser.email}`
      variant: "default"})
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser)
<<<<<<< HEAD
<<<<<<< HEAD
      };
    }, 0);
=======
      }
<<<<<<< HEAD
    }, 0);
=======
    }, 0),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile'),
=======


      }


    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');
>>>>>>> main
      toast({
        title: "Complete your profile"
        description: "Please complete your profile information to get started"
        variant: "default"})
      navigate('/onboarding')
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


  },



>>>>>>> main
  const handleSignedOut = () => {
    toast({
      title: "Signed out"
      description: "You have been successfully logged out"
      variant: "default"})
<<<<<<< HEAD
<<<<<<< HEAD
  }
  return {
    handleSignedIn;

    handleSignedOut
=======
  },

  return {
    handleSignedIn,
    handleSignedOut
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======

import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';
/**;
 * Custom hook for auth event handling;
 */;
export function useAuthEventHandlers(): any (;
  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep: React && React.Dispatch<React && React.SetStateAction<string | null>>;
) {;
  const navigate = useNavigate(),;

  const handleSignedIn = (mappedUser: UserProfile) => {;
    toast({;
      title: "Welcome back!",;
      description: `You're now signed in as ${mappedUser && mappedUser.displayName || mappedUser && mappedUser.email}`,;
      variant: "default"}),;

>>>>>>> main
    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser);
      }
<<<<<<< HEAD
    }, 0),;
    // Check if user needs to complete onboarding;
    if (!mappedUser.profileComplete && navigate) {;
      setOnboardingStep('profile'),;
=======
    }, 0);

    // Check if user needs to complete onboarding;
    if (!mappedUser && mappedUser.profileComplete && navigate) {;
      setOnboardingStep('profile');
>>>>>>> main
      toast({;
        title: "Complete your profile",;
        description: "Please complete your profile information to get started",;
        variant: "default"}),;
      navigate('/onboarding');
    }
<<<<<<< HEAD
  },;
=======
  };

>>>>>>> main
  const handleSignedOut = () => {;
    toast({;
      title: "Signed out",;
      description: "You have been successfully logged out",;
      variant: "default"});
  };
<<<<<<< HEAD
  return {;
    handleSignedIn;
    handleSignedOut;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  return {;
    handleSignedIn;
    handleSignedOut;

=======
import { toast } from '@/hooks / use - toast';
import type { UserProfile } from "@/types / auth";
import { checkNewRegistration } from '@/utils / auth_utils';
import {use_navigate} from 'react-router-dom';
/**;
* Custom hook for auth event handling;
*/;
export /**
 * useAuthEventHandlers - Function description
 */
function useAuthEventHandlers() {
  const navigate = use_navigate (),
  const handleSignedIn = (mapped_user: UserProfile) =>: any {
    toast ({
      title: "Welcome back!",
      description: `You're now signed in as ${mapped_user.display_name || mapped_user.email}`,
      variant: "default"}),
    // Check for new registration and send welcome email if needed;
    set_timeout (() => {
      // Check condition
if ( {) {
  $2
}
        checkNewRegistration (mapped_user);
      }
    }, 0);
;
    // Check if user needs to complete onboarding;
    // Check condition
if ( {) {
  $2
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  },

  return {
    handleSignedIn,
    handleSignedOut

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  }
}