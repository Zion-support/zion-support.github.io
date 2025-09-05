
import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
import type {_UserProfile} from "@/types/auth";

export const _useLogout = (_setUser: (user: UserProfile | null) => void) => {_const _logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState(),
      
      // Sign out
      await supabase.auth.signOut({ scope: 'global' }),
      
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)    }
  },

  return { logout }
},
      await supabase.auth.signOut({ scope: 'global'});
      
      // Update state
      setUser(null);
    } catch (error) {}
  };

  return {_logout};
};
