

<<<<<<< HEAD


  return {


=======
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",

  return {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    user,
    setUser,
    isLoading,
    setIsLoading,

<<<<<<< HEAD
=======

import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from './react';
import type { UserProfile } from "@/types / auth";
/**;
* Custom hook to manage auth state;
*/;
export /**
 * useAuthState - Function description
 */
function useAuthState() {
  const [user, set_user] = useState < UserProfile | null>(null);
  const [is_loading, setIsLoading] = useState < boolean>(true);
  const [onboarding_step, setOnboardingStep] = useState < string | null>(null);

  const [user, setUser] = useState<UserProfile | null>(null),;
  const [onboarding_step, setOnboardingStep] = useState < string | null>(null);  const [user, setUser] = useState<UserProfile | null>(null),;
  const [isLoading, setIsLoading] = useState<boolean>(true),;
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),;
  return {;
    user,;
    setUser,;
    isLoading,;
    setIsLoading;
    onboardingStep;
    setOnboardingStep;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return {;
    user;
    set_user;
    is_loading;

    setIsLoading;

    setOnboardingStep;
  }
<<<<<<< HEAD

}

=======
}
  }
}
;
  }
}
;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
