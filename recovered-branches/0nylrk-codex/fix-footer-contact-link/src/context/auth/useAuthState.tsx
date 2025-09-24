
import React{ useState } from "react";
import type { UserProfile } from "@/types/auth";

/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
  const [usersetUser] = useState<UserProfile | null>(null);
  const [isLoadingsetIsLoading] = useState<boolean>(true);
  const [onboardingStepsetOnboardingStep] = useState<string | null>(null);
  
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
  };
}
