import { useEffect } from "react, ";
import { supabase } from "@/integrations/supabase/client, ";
import { toast } from "@/hooks/use-toast, ";
import { showApiError } from "@/utils/apiErrorHandler, ";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils, ";
import { cleanupAuthState } from "@/utils/authUtils, ";
export function useAuthOperations(setUser, setIsLoading) {
    // Check for referral code in URL when the hook is first used;
    useEffect(() => {
        checkUrlForReferralCode();
    }, []);
    const login = async ({ email, password }) => {;
        setIsLoading(true);
        try {
  
            // Clean up any stale auth state before login;
            cleanupAuthState();
