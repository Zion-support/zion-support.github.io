
import type { UserProfile } from "@/types/auth",
/**,
 * Custom hook to manage auth state,
 */,
export function useAuthState() {,
  return {,
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
  },
}
,