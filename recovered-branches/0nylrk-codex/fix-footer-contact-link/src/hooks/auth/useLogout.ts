
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

=======
import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState()
      // Sign out
<<<<<<< HEAD
      await supabase.auth.signOut({ scope: 'global' });
=======
      await supabase.auth.signOut({ scope: 'global' }),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)
<<<<<<< HEAD
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
  }
  return { logout }
<<<<<<< HEAD
}

=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
