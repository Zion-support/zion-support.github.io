
import React, { useState } from &quot;react&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;

/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
  
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
  };
}
