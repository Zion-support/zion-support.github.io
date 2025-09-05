
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import type { UserProfile } from "@/types/auth",
=======
import React, { useState } from &quot;react&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
=======
import React, {_useState} from "react";
import type {_UserProfile} from "@/types/auth";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
/**
 * Custom hook to manage auth state
 */
<<<<<<< HEAD
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
  }
=======
export function useAuthState() {_const [user, _setUser] = useState<UserProfile | null>(null);
  const [isLoading, _setIsLoading] = useState<boolean>(true);
  const [onboardingStep, _setOnboardingStep] = useState<string | null>(null);
  
  return {
    user, _setUser, _isLoading, _setIsLoading, _onboardingStep, _setOnboardingStep};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
