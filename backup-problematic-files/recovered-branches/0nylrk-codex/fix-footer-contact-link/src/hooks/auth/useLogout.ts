
import { supabase } from "@/integrations/supabase/client";
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
;
export const useLogout = (setUser:(user:UserProfile | null) => void) => {;
  const logout = async () => {;
    try {;
      // Clean up existing auth state;
      cleanupAuthState();
      ;
      // Sign out;
      await supabase.auth.signOut({ scope:'global' });
      ;
      // Update state;
      setUser(null);
    } catch (error) {;
      console.error("Error during logout:", error);
    }
  };
;
  return { logout };
}; export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
  //Clean up existing auth state cleanupAuthState ();
<<<<<<< HEAD
// Sign out
}
<<<<<<< HEAD

=======
// Sign out 
}
};
return {
  logout 
}
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
