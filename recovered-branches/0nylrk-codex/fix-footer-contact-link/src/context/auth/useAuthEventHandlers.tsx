<<<<<<< HEAD
=======
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {checkNewRegistration} from "@/utils/authUtils";
import {useNavigate} from 'react-router-dom';

>>>>>>> merged-prs-20250907-203621
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
/**
 * Custom hook for auth event handling
 */
}

=======
import type { UserProfile } from "@/types/auth",
import { checkNewRegistration } from "@/utils/authUtils",

<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**
 * Custom hook for auth event handling

 */
>>>>>>> merged-prs-20250907-203621
export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
<<<<<<< HEAD
) {
  const navigate = useNavigate($2);
  const handleSignedIn = (mappedUser: UserProfile) => {
    toast($2);
=======
<<<<<<< HEAD
=======
) {
  const navigate = useNavigate()
  const handleSignedIn = (mappedUser: UserProfile) => {
    toast({
      title: "Welcome back!"
      description: `You're now signed in as ${mappedUser.displayName |mappedUser.email}`
      variant: "default"})
>>>>>>> merged-prs-20250907-203621
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      }

      }

<<<<<<< HEAD
    }, 0);
    }, 0),

      setOnboardingStep('profile'),

      toast({"
        title: "Complete your profile""
        description: "Please complete your profile information to get started""
        variant: "default"})'
=======
    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile');
<<<<<<< HEAD
      };
    }, 0);
>>>>>>> merged-prs-20250907-203621
      }
    }, 0);
    }, 0),
<<<<<<< HEAD

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
=======

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep('profile'),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Complete your profile"
        description: "Please complete your profile information to get started"
        variant: "default"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      navigate('/onboarding')
    }

  },

<<<<<<< HEAD
=======


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSignedOut = () => {
    toast({
      title: "Signed out"
      description: "You have been successfully logged out"
<<<<<<< HEAD
=======
      variant: "default"})
<<<<<<< HEAD
  }
  return {
    handleSignedIn;

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
import { checkNewRegistration } from "@/utils/authUtils",;
import { useNavigate } from 'react-router-dom',;

) {;
  const navigate = useNavigate(),;

  const handleSignedIn = (mappedUser: UserProfile) => {;

      variant: "default"}),;

    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser);
      }

      toast({;
        title: "Complete your profile",
        description: "Please complete your profile information to get started",;
        variant: "default"}),;
      navigate('/onboarding');
    }
  };

  };

  const handleSignedOut = () => {;
    toast({;
      title: "Signed out",
      description: "You have been successfully logged out",;
      variant: "default"});
  };

  return {;
    handleSignedIn;
    handleSignedOut;

import { toast } from '@/hooks / use - toast';
import type { UserProfile } from "@/types / auth";
import { checkNewRegistration } from '@/utils / auth_utils';

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

    handleSignedOut;
  },

  return {}
    handleSignedIn,
<<<<<<< HEAD
    handleSignedOut,
import { toast } from "@/hooks/use-toast";"
import { checkNewRegistration } from "@/utils/authUtils",;"
import { useNavigate } from 'react-router-dom',;'
=======
    handleSignedOut"
import { toast } from "@/hooks/use-toast",;"
import type { UserProfile } from "@/types/auth",;"
import { checkNewRegistration } from "@/utils/authUtils",;'
import { useNavigate } from 'react-router-dom',;
>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD
  }
}  }
}

  }
}
"
import { toast } from "@/hooks/use-toast",;"
import type { UserProfile } from "@/types/auth",;"
<<<<<<< HEAD
=======
import { checkNewRegistration } from "@/utils/authUtils",;'
import { useNavigate } from 'react-router-dom',;
>>>>>>> origin/chore/fix-lint-and-merge
;
/**;
 * Custom hook for auth event handling;
 */;
<<<<<<< HEAD
export function useAuthEventHandlers() {;
  }
;
  const handleSignedIn = ("mappedUser":UserProfile) => {;
    }
    toast({;
      }
      "title":"Welcome back!",,"
  "description":`You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;`
      "variant":"default"}),;"
=======

      variant:"default"}),;
>>>>>>> origin/chore/fix-lint-and-merge
    ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Check for new registration and send welcome email if needed;
    setTimeout(() => {;
      if (mappedUser) {;
        checkNewRegistration(mappedUser),;
      }
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      variant:"default"}),;
  },;
;
  return {;
    handleSignedIn,;
    handleSignedOut;
<<<<<<< HEAD
  },;
}   toast ({}
  //Check for new registration and send welcome email if needed setTimeout ( () => {}
  if (mappedUser) {}
  checkNewRegistration (mappedUser) 
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621
  }
}
