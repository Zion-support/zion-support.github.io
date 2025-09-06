
=======
import { supabase } from "@/integrations/supabase/client",;
import { cleanupAuthState } from "@/utils/authUtils",;
import type { UserProfile } from "@/types/auth",;
;
export const useLogout = (setUser:(user:UserProfile | null) => void) => {;
  const logout = async () => {;
    try {;
      // Clean up existing auth state;
      cleanupAuthState(),;
      ;
      // Sign out;
      await supabase.auth.signOut({ scope:'global' }),;
      ;
      // Update state;
      setUser(null),;
    } catch (error) {;
      console.error("Error during logout:", error),;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
  },;
;
  return { logout },;
},; export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
  //Clean up existing auth state cleanupAuthState ();
// Sign out
}
<<<<<<< HEAD

