
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";
export function useAuthOperations(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode()
  }, []);

  const login = null;
    loginWithWeb3}
}
;