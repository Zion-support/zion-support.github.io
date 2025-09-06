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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    }
  }
=======
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  };
  return { logout }
}

};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
