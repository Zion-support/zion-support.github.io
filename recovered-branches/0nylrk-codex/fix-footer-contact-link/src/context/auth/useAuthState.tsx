

<<<<<<< HEAD

import React, { useState } from "react",
import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",


/**
 * Custom hook to manage auth state
 */
export function useAuthState() {

  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),

  

=======
 * Custom hook to manage auth state
 */
export function useAuthState() {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep

<<<<<<< HEAD

import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
  }
}
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
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
<<<<<<< HEAD
  const [onboarding_step, setOnboardingStep] = useState < string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null),;
=======
  const [onboarding_step, setOnboardingStep] = useState < string | null>(null);  const [user, setUser] = useState<UserProfile | null>(null),;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
}
;
  return {

  return {;
    user;
    set_user;
    is_loading;
<<<<<<< HEAD
    setIsLoading;

    onboarding_step;

    setOnboardingStep;
  }
}
=======
    setIsLoading;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
