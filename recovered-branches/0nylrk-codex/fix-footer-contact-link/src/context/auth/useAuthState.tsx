
import React, {_useState} from "react";
import type {_UserProfile} from "@/types/auth";

/**
 * Custom hook to manage auth state
 */
export function useAuthState() {_const [user, _setUser] = useState<UserProfile | null>(null);
  const [isLoading, _setIsLoading] = useState<boolean>(true);
  const [onboardingStep, _setOnboardingStep] = useState<string | null>(null);
  
  return {
    user, _setUser, _isLoading, _setIsLoading, _onboardingStep, _setOnboardingStep};
}
