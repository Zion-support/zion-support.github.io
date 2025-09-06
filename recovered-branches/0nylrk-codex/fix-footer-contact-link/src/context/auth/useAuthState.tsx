
import React, { useState } from "react",
<<<<<<< HEAD
import type { UserProfile } from "@/types/auth";
=======
import type { UserProfile } from "@/types/auth",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
<<<<<<< HEAD
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
=======
  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
<<<<<<< HEAD
  }
}
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
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
