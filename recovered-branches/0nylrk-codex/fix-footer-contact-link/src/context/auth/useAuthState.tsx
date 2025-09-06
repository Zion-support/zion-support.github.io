
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth";
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
<<<<<<< HEAD
  return {
=======

  return {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    user;
    setUser;
    isLoading;
    setIsLoading;
    onboardingStep;
    setOnboardingStep;
  }
}