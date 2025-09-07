



import React, { useState } from "react",""
import type { UserProfile } from "@/types/auth";""
import type { UserProfile } from "@/types/auth","
/**
 * Custom hook to manage auth state;
 */
export function useAuthState() {

  const [user, setUser] = useState<UserProfile | null>(null),
</UserProfile>
  const [isLoading, setIsLoading] = useState<boolean>(true),
</boolean>
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),
</string>
  const [user, set_user] = useState < UserProfile | null>(null);
  const [is_loading, setIsLoading] = useState < boolean>(true);
  const [onboarding_step, setOnboardingStep] = useState < string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null),;
</UserProfile>
  const [isLoading, setIsLoading] = useState<boolean>(true),;
</boolean>
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),;
</string>"

