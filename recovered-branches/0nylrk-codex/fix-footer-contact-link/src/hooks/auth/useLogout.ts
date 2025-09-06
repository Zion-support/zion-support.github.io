
<<<<<<< HEAD
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";
import {cleanupAuthState} from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

=======
import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
<<<<<<< HEAD

<<<<<<< HEAD
      // Sign out
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
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
      cleanupAuthState()
=======
      cleanupAuthState(),
      
<<<<<<< HEAD
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Sign out
<<<<<<< HEAD
      await supabase.auth.signOut({ scope: 'global' });
=======
      await supabase.auth.signOut({ scope: 'global' }),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)
<<<<<<< HEAD
<<<<<<< HEAD

=======

    }
  };


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
    }
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

    }

  return { logout }

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }

  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { logout }

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { logout }
<<<<<<< HEAD
}

=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
