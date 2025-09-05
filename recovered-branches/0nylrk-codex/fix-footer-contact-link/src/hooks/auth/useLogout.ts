
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { cleanupAuthState } from &quot;@/utils/authUtils&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
      cleanupAuthState(),
      
      // Sign out
      await supabase.auth.signOut({ scope: 'global' }),
      
      // Update state
      setUser(null)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error during logout:", error)
=======
      console.error(&quot;Error during logout:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  };
  return { logout }
};