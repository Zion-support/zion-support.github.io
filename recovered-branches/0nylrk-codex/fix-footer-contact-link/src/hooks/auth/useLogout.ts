<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState } from '@/utils/authUtils';
import type { UserProfile } from '@/types/auth';

export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState();

      // Sign out
      await supabase.auth.signOut({ scope: 'global' });

      // Update state
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return { logout };
=======
 export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
  //Clean up existing auth state cleanupAuthState ();
// Sign out 
}
};
return {
  logout 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
