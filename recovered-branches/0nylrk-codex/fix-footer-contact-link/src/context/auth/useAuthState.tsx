
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth",
=======
import React, { useState } from &quot;react&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),
  
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
=======
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}
;