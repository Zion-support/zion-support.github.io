
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';


import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';
/**
 * Custom hook for auth event handling
 */
}

/**
 * Custom hook for auth event handling

 */
export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigate = useNavigate($2);
  const handleSignedIn = (mappedUser: UserProfile) => {
    toast($2);
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser)

      }

      }

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
      navigate('/onboarding')
    }

  },

  const handleSignedOut = () => {
    toast({
      title: "Signed out"
      description: "You have been successfully logged out"

      variant: "default"})
"
import {checkNewRegistration} from "@/utils/authUtils";'

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


    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser),;
      }


      variant:"default"}),;
  },;
;
  return {;
    handleSignedIn,;
    handleSignedOut;

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
  }
}