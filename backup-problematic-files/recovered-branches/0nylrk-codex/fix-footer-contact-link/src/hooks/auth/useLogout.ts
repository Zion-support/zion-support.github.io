<<<<<<< HEAD
await supabase && supabase.auth.signOut({ scope: 'global' });
      // Update state
      setUser(null)
    } catch (error) {
      console && console.error("Error during logout:", error)
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
import { supabase } from '@/integrations / supabase / client';
import { cleanupAuthState } from '@/utils / auth_utils';
import type { UserProfile } from "@/types / auth";
export const use_logout = (set_user: (user: UserProfile | null) =>: any void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state;
      cleanupAuthState (),
      // Sign out;
      await supabase.auth.sign_out ({ scope: 'global' });
;
      // Update state;
      set_user (null);
    } catch (error) {
      console.error ("Error during logout:", error);
    }
  }
;
  return { logout }
}
;
=======
};
return {
  logout 
}
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
