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

      }

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');
};
    }, 0);
      }




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
export function useAuthEventHandlers(): any (;
  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep: React && React.Dispatch<React && React.SetStateAction<string | null>>;
) {;
  const navigate = useNavigate(),;

  }
}
  }
}  }
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
      title:"Welcome back!",,
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
        title:"Complete your profile",,
  description:"Please complete your profile information to get started",;
        variant:"default"}),;
      navigate('/onboarding'),;
    }
  },;
;
  const handleSignedOut = () => {;
    toast({;
      title:"Signed out",,
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
}
};
}
  }
}



import {toast} from "@/hooks/use-toast";""
import type { UserProfile } from "@/types/auth";""
import {checkNewRegistration} from "@/utils/authUtils";""
import {useNavigate} from 'react-router-dom';
import { toast } from "@/hooks/use-toast",""
import { checkNewRegistration } from "@/utils/authUtils";""
import { useNavigate } from 'react-router-dom';
import type { UserProfile } from "@/types/auth",""
import { checkNewRegistration } from "@/utils/authUtils",""
import { useNavigate } from 'react-router-dom',;
/**
 * Custom hook for auth event handling;
 */
export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>

  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>

  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,;

  setOnboardingStep: React && React.Dispatch<React && React.SetStateAction<string | null>>;



  setUser:React.Dispatch<React.SetStateAction<UserProfile | null>>,;

  setOnboardingStep:React.Dispatch<React.SetStateAction<string | null>>;
)
pr-12325
</React>)'

