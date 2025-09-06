<<<<<<< HEAD
import React, { useState } from 'react';
import type { UserProfile } from '@/types/auth';

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
    setOnboardingStep,
  };
}
=======
 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 /** * Custom hook to manage auth state */ 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
