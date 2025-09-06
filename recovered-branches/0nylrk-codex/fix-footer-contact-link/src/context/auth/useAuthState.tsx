<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import type { UserProfile } from "@/types/auth";
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {;
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
<<<<<<< HEAD
<<<<<<< HEAD

  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),

  

=======
  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),
  
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
<<<<<<< HEAD
  }
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
  }
}
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [user, setUser] = useState<UserProfile | null>(null),;
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  return {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  return {;
    user;
    set_user;
    is_loading;
    setIsLoading;
<<<<<<< HEAD

    onboarding_step;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
