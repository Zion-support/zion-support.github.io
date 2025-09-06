
<<<<<<< HEAD
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth",
=======
import React, { useState } from "react";
import type { UserProfile } from "@/types/auth";
>>>>>>> main
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
<<<<<<< HEAD
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
=======
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
  
  return {
    user;
    setUser;
    isLoading;
    setIsLoading;
    onboardingStep;
    setOnboardingStep
  }
}
>>>>>>> main
