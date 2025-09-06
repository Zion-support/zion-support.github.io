<<<<<<< HEAD

import React, { useState } from "react",
import type { UserProfile } from "@/types/auth";
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
=======

  return {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    user;
    set_user;
    is_loading;
    setIsLoading;
<<<<<<< HEAD
    onboardingStep;
=======
    onboarding_step;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    setOnboardingStep;
  }
}