
<<<<<<< HEAD
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
}
=======
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth",
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
  }}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
