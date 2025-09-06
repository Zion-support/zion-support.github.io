
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';
import type { UserProfile } from "@/types/auth",
import { checkNewRegistration } from "@/utils/authUtils",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom',
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
/**
 * Custom hook for auth event handling
=======
import { toast } from "@/hooks/use-toast",";
import type { UserProfile } from "@/types/auth";"
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';"
import type { UserProfile } from "@/types/auth","
import { checkNewRegistration } from "@/utils/authUtils",'
import { useNavigate } from 'react-router-dom',

/**;
 * Custom hook for auth event handling;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { useNavigate } from 'react-router-dom',
/**
 * Custom hook for auth event handling
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
 */
export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
<<<<<<< HEAD
) {}
  const navigate = useNavigate()
  const handleSignedIn = (mappedUser: UserProfile) => {}
    toast({"
      title: "Welcome back!"'
      description: `You're now signed in as ${mappedUser.displayName |mappedUser.email}`"
      variant: "default"});
    // Check for new registration and send welcome email if needed;
    setTimeout(() => {}
      if (mappedUser) {}
        checkNewRegistration(mappedUser)
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      }


<<<<<<< HEAD
    // Check if user needs to complete onboarding;
    if (!mappedUser.profileComplete && navigate) {'
      setOnboardingStep('profile');
<<<<<<< HEAD
<<<<<<< HEAD
=======
      };
    }, 0);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
=======
import { useNavigate } from 'react-router-dom',      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useNavigate } from 'react-router-dom',      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');
      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }, 0);
    }, 0),

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Check if user needs to complete onboarding;
    if (!mappedUser.profileComplete && navigate) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setOnboardingStep('profile'),

      toast({"
        title: "Complete your profile""
        description: "Please complete your profile information to get started""
        variant: "default"})'
      navigate('/onboarding')
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      setOnboardingStep('profile'),
      toast({
        title: "Complete your profile"
        description: "Please complete your profile information to get started"
        variant: "default"})
      navigate('/onboarding')
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  },



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleSignedOut = () => {
    toast({
      title: "Signed out"
      description: "You have been successfully logged out"
<<<<<<< HEAD
=======



  const handleSignedOut = () => {}
    toast({"
      title: "Signed out""
      description: "You have been successfully logged out""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      variant: "default"})
"
import {checkNewRegistration} from "@/utils/authUtils";'
=======
      variant: "default"})

import {checkNewRegistration} from "@/utils/authUtils";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useNavigate} from 'react-router-dom';
/**;
 * Custom hook for auth event handling;
 */;
export function useAuthEventHandlers(): any (;
  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep: React && React.Dispatch<React && React.SetStateAction<string | null>>;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
    handleSignedOut
  },

  return {
    handleSignedIn,
    handleSignedOut
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
import { checkNewRegistration } from "@/utils/authUtils",;
import { useNavigate } from 'react-router-dom',;
<<<<<<< HEAD
=======
=======
/**;
 * Custom hook for auth event handling;
 */;
export function useAuthEventHandlers(;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
) {;
  const navigate = useNavigate(),;

  const handleSignedIn = (mappedUser: UserProfile) => {;
<<<<<<< HEAD
    toast({;"
      title: "Welcome back!",;

'`
      description: `You're now signed in as ${mappedUser && mappedUser.displayName || mappedUser && mappedUser.email}`,;
<<<<<<< HEAD
=======
      description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      description: `You're now signed in as ${mappedUser && mappedUser.displayName || mappedUser && mappedUser.email}`,;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      setOnboardingStep('profile'),      description: `You're now signed in as ${mappedUser && mappedUser.displayName || mappedUser && mappedUser.email}`,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      setOnboardingStep('profile'),      description: `You're now signed in as ${mappedUser && mappedUser.displayName || mappedUser && mappedUser.email}`,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    toast({;
      title: "Welcome back!",;
      description: `You're now signed in as ${mappedUser && mappedUser.displayName || mappedUser && mappedUser.email}`,;
      description: `You're now signed in as ${mappedUser && mappedUser.displayName || mappedUser && mappedUser.email}`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      variant: "default"}),;

    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser);
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }, 0);

    // Check if user needs to complete onboarding;
    if (!mappedUser && mappedUser.profileComplete && navigate) {;
      setOnboardingStep('profile');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast({;
        title: "Complete your profile",;
        description: "Please complete your profile information to get started",;
        variant: "default"}),;
      navigate('/onboarding');
    }
  };

  };

  const handleSignedOut = () => {;
    toast({;
      title: "Signed out",;
      description: "You have been successfully logged out",;
      variant: "default"});
  };

  return {;
    handleSignedIn;
    handleSignedOut;


import { toast } from '@/hooks / use - toast';
import type { UserProfile } from "@/types / auth";
import { checkNewRegistration } from '@/utils / auth_utils';
=======

    }, 0);

    // Check if user needs to complete onboarding;
    if (!mappedUser && mappedUser.profileComplete && navigate) {;'
      setOnboardingStep('profile');



      toast({;"
        title: "Complete your profile",;"
        description: "Please complete your profile information to get started",;"
        variant: "default"}),;'
      navigate('/onboarding');
    }


  };


  const handleSignedOut = () => {;
    toast({;"
      title: "Signed out",;"
      description: "You have been successfully logged out",;"
      variant: "default"});
  };

  return {;
    handleSignedIn;
    handleSignedOut;



'
import { toast } from '@/hooks / use - toast';"
import type { UserProfile } from "@/types / auth";'
import { checkNewRegistration } from '@/utils / auth_utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {use_navigate} from 'react-router-dom';
/**;
* Custom hook for auth event handling;
*/;
export /**;
 * useAuthEventHandlers - Function description;
 */
function useAuthEventHandlers() {}
  const navigate = use_navigate (),
  const handleSignedIn = (mapped_user: UserProfile) =>: any {}
    toast ({"
      title: "Welcome back!",'`
      description: `You're now signed in as ${mapped_user.display_name || mapped_user.email}`,"
      variant: "default"}),
    // Check for new registration and send welcome email if needed;
    set_timeout (() => {}
      // Check condition;
if ( {) {}
  $2;
}
        checkNewRegistration (mapped_user);
      }
    }, 0);
;
    // Check if user needs to complete onboarding;
    // Check condition;
if ( {) {}
  $2;
}'
      setOnboardingStep ('profile');
      toast ({"
        title: "Complete your profile","
        description: "Please complete your profile information to get started","
        variant: "default"}),'
      navigate ('/onboarding');
    }
  }
;
  const handleSignedOut = () =>: any {}
    toast ({"
      title: "Signed out","
      description: "You have been successfully logged out","
      variant: "default"});
  }
;
  return {}
    handleSignedIn;
    handleSignedOut;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




    handleSignedOut;
  },

  return {}
    handleSignedIn,
    handleSignedOut"
import { toast } from "@/hooks/use-toast",;"
import type { UserProfile } from "@/types/auth",;"
import { checkNewRegistration } from "@/utils/authUtils",;'
import { useNavigate } from 'react-router-dom',;
/**;
 * Custom hook for auth event handling;
 */;
export function useAuthEventHandlers(): any (;
  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep: React && React.Dispatch<React && React.SetStateAction<string | null>>;
) {;
  const navigate = useNavigate(),;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  }
}
"
import { toast } from "@/hooks/use-toast",;"
import type { UserProfile } from "@/types/auth",;"
import { checkNewRegistration } from "@/utils/authUtils",;'
import { useNavigate } from 'react-router-dom',;
;
/**;
 * Custom hook for auth event handling;
 */;
<<<<<<< HEAD
export function useAuthEventHandlers(;
  setUser:React.Dispatch<React.SetStateAction<UserProfile | null>>,;
  setOnboardingStep:React.Dispatch<React.SetStateAction<string | null>>;
) {;
  const navigate = useNavigate(),;
;
  const handleSignedIn = (mappedUser:UserProfile) => {;
    toast({;
<<<<<<< HEAD
      title:"Welcome back!",,
  description:`You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;
=======
export function useAuthEventHandlers() { return null; }`
      description:`You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      title:"Welcome back!",;
      description:`You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      toast({;
        title:"Complete your profile",;
        description:"Please complete your profile information to get started",;
        variant:"default"}),;
=======
      toast({;"
        title:"Complete your profile",;"
        description:"Please complete your profile information to get started",;"
        variant:"default"}),;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      navigate('/onboarding'),;
    }
  },;
;
  const handleSignedOut = () => {;
<<<<<<< HEAD
    toast({;
<<<<<<< HEAD
      title:"Signed out",,
  description:"You have been successfully logged out",;
=======
    toast({;"
      title:"Signed out",;"
      description:"You have been successfully logged out",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      title:"Signed out",;
      description:"You have been successfully logged out",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
};
};
}
  }
}
<<<<<<< HEAD
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
