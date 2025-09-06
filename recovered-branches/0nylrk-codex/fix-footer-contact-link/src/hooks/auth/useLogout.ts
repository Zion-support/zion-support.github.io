


<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state

<<<<<<< HEAD
      cleanupAuthState()

      // Sign out
      await supabase.auth.signOut({ scope: 'global' });
      await supabase.auth.signOut({ scope: 'global' }),
=======
      await supabase && supabase.auth.signOut({ scope: 'global' });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      


<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

      cleanupAuthState(),
      

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)
<<<<<<< HEAD



=======

    }
  };


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

<<<<<<< HEAD
  }

  };


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  return { logout }
}
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { logout }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

};
