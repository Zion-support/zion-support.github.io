
import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState()
      // Sign out
<<<<<<< HEAD
      await supabase.auth.signOut({ scope: 'global' });
=======
      await supabase && supabase.auth.signOut({ scope: 'global' });
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      // Update state
      setUser(null)
    } catch (error) {
      console && console.error("Error during logout:", error)
    }
  }
  return { logout }
}

