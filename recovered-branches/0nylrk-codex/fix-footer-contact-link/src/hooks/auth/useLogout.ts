

import { supabase } from "@/integrations/supabase/client",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state

      // Sign out
=======

      cleanupAuthState(),
      
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)

    }

  return { logout }
    }

  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { logout }

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
