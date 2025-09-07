import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';
/**
 * Custom hook for auth event handling
 */
}

export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigate = useNavigate($2);
  const handleSignedIn = (mappedUser: UserProfile) => {
    toast($2);
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser)
      }
    }, 0),

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && navigate) {
      setOnboardingStep($2);
      toast($2);
      navigate('/onboarding')
    }
  },

  const handleSignedOut = $2;
      description: "You have been successfully logged out",
      variant: "default"})
  },

  return {
    handleSignedIn,
    handleSignedOut
  }
}
