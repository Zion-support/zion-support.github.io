



<<<<<<< HEAD
<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";
import {cleanupAuthState} from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

import { cleanupAuthState } from "@/utils/authUtils",
import type { UserProfile } from "@/types/auth",
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      await supabase && supabase.auth.signOut({ scope: 'global' });
      

      // Update state
      setUser(null)
    } catch (error) {
      console && console.error("Error during logout:", error)
    }
  }
  return { logout }
}

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

      cleanupAuthState(),
      

<<<<<<< HEAD
      cleanupAuthState()
      cleanupAuthState(),
      
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' });
      // Sign out
      await supabase.auth.signOut({ scope: 'global' });
      await supabase.auth.signOut({ scope: 'global' }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

      cleanupAuthState(),
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)

    }
  };


<<<<<<< HEAD
<<<<<<< HEAD
    }
  };

    }
  };

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return { logout }

};

<<<<<<< HEAD
    }
  }
  };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return { logout }
}

};
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
