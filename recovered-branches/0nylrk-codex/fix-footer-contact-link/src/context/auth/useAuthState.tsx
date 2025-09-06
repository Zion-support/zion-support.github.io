

import React, { useState } from "react",

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

  }
}
;
