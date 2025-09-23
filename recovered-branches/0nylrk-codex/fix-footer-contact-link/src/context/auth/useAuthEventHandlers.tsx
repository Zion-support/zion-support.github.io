
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for auth event handling
 */
export function useAuthEventHandlers(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigate = useNavigate();

  const handleSignedIn = (mappedUser: UserProfile) => {
    toast({
      title: "Welcome back!",
      description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,
