
<<<<<<< HEAD
import React{ useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import type { UserProfile } from "@/types/auth";

/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
<<<<<<< HEAD
  const [usersetUser] = useState<UserProfile | null>(null);
  const [isLoadingsetIsLoading] = useState<boolean>(true);
  const [onboardingStepsetOnboardingStep] = useState<string | null>(null);
=======
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
>>>>>>> origin/auto/autonomy-17186719616
  
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
  };
}
