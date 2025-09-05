
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { cleanupAuthState } from &quot;@/utils/authUtils&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;

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
      console.error(&quot;Error during logout:&quot;, error);
    }
  };

  return { logout };
};
