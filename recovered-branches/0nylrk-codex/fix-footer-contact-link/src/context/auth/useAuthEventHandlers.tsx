
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';


import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

import type { UserProfile } from "@/types/auth",
import { checkNewRegistration } from "@/utils/authUtils",



=======
/**
 * Custom hook for auth event handling
 */
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
/**
 * Custom hook for auth event handling

 */
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
<<<<<<< HEAD


=======
) {
  const navigate = useNavigate($2);
  const handleSignedIn = (mappedUser: UserProfile) => {
    toast($2);
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser)
>>>>>>> origin/cursor/delete-old-data-records-6bba

      }

      }

<<<<<<< HEAD

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');

=======
    }, 0);
    }, 0),

      setOnboardingStep('profile'),

      toast({"
        title: "Complete your profile""
        description: "Please complete your profile information to get started""
        variant: "default"})'
      }
    }, 0);
    }, 0),

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep($2);
      toast($2);
      navigate('/onboarding')
    }
  },

  const handleSignedOut = $2;
      description: "You have been successfully logged out",
      variant: "default"})
  },

  return {
    handleSignedIn,
    handleSignedOut
      toast({
        title: "Complete your profile"
        description: "Please complete your profile information to get started"
        variant: "default"})
>>>>>>> origin/cursor/delete-old-data-records-6bba
      navigate('/onboarding')
    }

  },

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSignedOut = () => {
    toast({
      title: "Signed out"
      description: "You have been successfully logged out"

      variant: "default"})

<<<<<<< HEAD
=======
import {useNavigate} from 'react-router-dom';
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

>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser),;
      }


<<<<<<< HEAD
=======
      variant:"default"}),;
  },;
;
  return {;
    handleSignedIn,;
    handleSignedOut;

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
}, 0);
//Check if user needs to complete onboarding if (!mappedUser.profileComplete && navigate) {'
  setOnboardingStep ('profile');
toast ({'
  navigate ('/onboarding');
}
}
};
}
<<<<<<< HEAD

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



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    if (!mappedUser.profileComplete && navigate) {;'
      setOnboardingStep('profile'),;

      navigate('/onboarding'),;
    }
  },;
;
  const handleSignedOut = () => {;

      variant:"default"}),;
  },;
;
  return {;
    handleSignedIn,;
    handleSignedOut;
  },;
}   toast ({}
  //Check for new registration and send welcome email if needed setTimeout ( () => {}
  if (mappedUser) {}
  checkNewRegistration (mappedUser) 
}
}, 0);
//Check if user needs to complete onboarding if (!mappedUser.profileComplete && navigate) {'
  setOnboardingStep ('profile');
toast ({'
  navigate ('/onboarding');
}
}
};
};
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}