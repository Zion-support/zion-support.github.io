
import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
<<<<<<< HEAD
export const useLogout = null;
=======
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState()
      // Sign out
      await supabase.auth.signOut({ scope: 'global' });
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }
  return { logout }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
