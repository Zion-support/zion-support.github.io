import { supabase } from "@/integrations/supabase/client, ";
import { toast } from "@/hooks/use-toast, ";
import { cleanupAuthState } from "@/utils/authUtils, ";
export const useEmailAuth = (setUser, setIsLoading) => {
    const login = async ({ email, password }) => {
        try {
  
  ;
  ;
  ;
            setIsLoading(true);
            // Clean up any stale auth state before login;
            cleanupAuthState();
