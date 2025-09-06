

<<<<<<< HEAD
import React, { useState } from "react",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

/**
 * Custom hook to manage auth state
 */
export function useAuthState() {

<<<<<<< HEAD
=======
  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),

  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;

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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
=======

  return {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    user;
    set_user;
    is_loading;
    setIsLoading;

    onboarding_step;

    setOnboardingStep;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
