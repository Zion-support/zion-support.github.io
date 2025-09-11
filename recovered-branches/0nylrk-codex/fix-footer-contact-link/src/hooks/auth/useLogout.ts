



import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      await supabase && supabase.auth.signOut({ scope: 'global' });
      

      // Update state
      setUser(null)
    } catch (error) {
      console && console.error("Error during logout:", error)
    }
  }
  return { logout }
}

      cleanupAuthState(),
      

      cleanupAuthState(),
      
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)

    }
  };


    }
  };

=======
==============
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    }

  };
};

};
<<<<<<< HEAD
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
