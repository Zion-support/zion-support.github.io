


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state

      cleanupAuthState(),
      

      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }

  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { logout }

};

