
<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";
import {cleanupAuthState} from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
=======
import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState(),
      
<<<<<<< HEAD
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' });
=======
      // Sign out
      await supabase.auth.signOut({ scope: 'global' }),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)
<<<<<<< HEAD
    }
  };

=======
import { supabase } from "@/integrations/supabase/client",;
import { cleanupAuthState } from "@/utils/authUtils",;
import type { UserProfile } from "@/types/auth",;
export const useLogout = (setUser: (user: UserProfile | null) => void) => {;
  const logout = async () => {;
    try {;
      // Clean up existing auth state;
      cleanupAuthState(),;
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' }),;
      // Update state;
      setUser(null);
    } catch (error) {;
      console.error("Error during logout:", error);
    }
  };
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return { logout }
};
