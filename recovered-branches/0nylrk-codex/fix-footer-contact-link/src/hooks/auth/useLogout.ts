import { supabase } from "@/integrations/supabase/client";
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
      (cleanupAuthState(),
        // Sign out
        await supabase.auth.signOut({ scope: "global" }));

      // Update state
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { logout };
};
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  };


<<<<<<< HEAD


  return { logout }

}




=======
  return { logout }
},
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
