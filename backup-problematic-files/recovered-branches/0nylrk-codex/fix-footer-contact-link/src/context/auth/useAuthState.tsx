
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
