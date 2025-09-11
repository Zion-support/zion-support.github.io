


<<<<<<< HEAD
<<<<<<< HEAD
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';
import type { UserProfile } from "@/types/auth",
import { checkNewRegistration } from "@/utils/authUtils",
import { useNavigate } from 'react-router-dom',
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      }


    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      };
    }, 0);
      }
    }, 0);
    }, 0),

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
<<<<<<< HEAD
      setOnboardingStep('profile'),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      setOnboardingStep('profile');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Complete your profile"
        description: "Please complete your profile information to get started"
        variant: "default"})
      navigate('/onboarding')
    }
<<<<<<< HEAD


  },



<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSignedOut = () => {
    toast({
      title: "Signed out"
      description: "You have been successfully logged out"
      variant: "default"})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  return {
    handleSignedIn;

<<<<<<< HEAD
    handleSignedOut
  },

  return {
    handleSignedIn,
    handleSignedOut
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser);
      }
<<<<<<< HEAD
<<<<<<< HEAD
    }, 0),;
    // Check if user needs to complete onboarding;
    if (!mappedUser.profileComplete && navigate) {;
      setOnboardingStep('profile'),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }, 0);

    // Check if user needs to complete onboarding;
    if (!mappedUser && mappedUser.profileComplete && navigate) {;
      setOnboardingStep('profile');
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({;
        title: "Complete your profile",;
        description: "Please complete your profile information to get started",;
        variant: "default"}),;
      navigate('/onboarding');
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSignedOut = () => {;
    toast({;
      title: "Signed out",;
      description: "You have been successfully logged out",;
      variant: "default"});
  };
<<<<<<< HEAD
<<<<<<< HEAD
  return {;
    handleSignedIn;
    handleSignedOut;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return {;
    handleSignedIn;
    handleSignedOut;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  },

  return {
    handleSignedIn,
    handleSignedOut

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}

import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
import { checkNewRegistration } from "@/utils/authUtils",;
import { useNavigate } from 'react-router-dom',;
;
/**;
 * Custom hook for auth event handling;
 */;
export function useAuthEventHandlers(;
  setUser:React.Dispatch<React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep:React.Dispatch<React.SetStateAction<string | null>>;
) {;
  const navigate = useNavigate(),;
;
  const handleSignedIn = (mappedUser:UserProfile) => {;
    toast({;
      title:"Welcome back!",;
      description:`You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;
      variant:"default"}),;
    ;
    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser),;
      }
    }, 0),;
;
    // Check if user needs to complete onboarding;
    if (!mappedUser.profileComplete && navigate) {;
      setOnboardingStep('profile'),;
      toast({;
        title:"Complete your profile",;
        description:"Please complete your profile information to get started",;
        variant:"default"}),;
      navigate('/onboarding'),;
    }
  },;
;
  const handleSignedOut = () => {;
    toast({;
      title:"Signed out",;
      description:"You have been successfully logged out",;
      variant:"default"}),;
  },;
;
  return {;
    handleSignedIn,;
    handleSignedOut;
  },;
}   toast ({
  //Check for new registration and send welcome email if needed setTimeout ( () => {
  if (mappedUser) {
  checkNewRegistration (mappedUser) 
}
}, 0);
//Check if user needs to complete onboarding if (!mappedUser.profileComplete && navigate) {
  setOnboardingStep ('profile');
toast ({
  navigate ('/onboarding');
}
};
};
}
  }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
