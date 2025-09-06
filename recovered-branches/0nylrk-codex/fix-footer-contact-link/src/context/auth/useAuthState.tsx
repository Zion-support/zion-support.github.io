import React, { useState } from "react",
import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",


/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep


import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
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



  }
}
;
  return {

  return {;
    user;
    set_user;
    is_loading;
    setIsLoading;
