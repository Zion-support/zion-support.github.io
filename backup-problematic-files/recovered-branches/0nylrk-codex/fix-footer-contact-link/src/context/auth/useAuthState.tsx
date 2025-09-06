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
;
  return {
  return {;
    user;
    set_user;
    is_loading;
    setIsLoading;
    onboarding_step;
    setOnboardingStep;
  }
}
=======

import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
;
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
  const [user, setUser] = useState<UserProfile | null>(null),;
  const [isLoading, setIsLoading] = useState<boolean>(true),;
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),;
  ;
  return {;
    user,;
    setUser,;
    isLoading,;
    setIsLoading,;
    onboardingStep,;
    setOnboardingStep;
  },;
} }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
