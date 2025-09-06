

<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
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
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep

<<<<<<< HEAD

=======
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
  }
}
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    user;
    set_user;
    is_loading;
    setIsLoading;

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
