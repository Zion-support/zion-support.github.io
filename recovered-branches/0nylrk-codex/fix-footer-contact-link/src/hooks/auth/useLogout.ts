<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {supabase} from "@/integrations/supabase/client";
import {cleanupAuthState} from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

import { cleanupAuthState } from "@/utils/authUtils",


<<<<<<< HEAD


=======
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state

import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
>>>>>>> origin/cursor/delete-old-data-records-6bba
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state

<<<<<<< HEAD

=======
      cleanupAuthState(),
      
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' });
      // Sign out
      await supabase.auth.signOut({ scope: 'global' });
      await supabase.auth.signOut({ scope: 'global' }),

      await supabase && supabase.auth.signOut({ scope: 'global' });

      // Update state
      setUser(null)
    } catch (error) {
      await supabase && supabase.auth.signOut({ scope: 'global' });
>>>>>>> origin/cursor/delete-old-data-records-6bba
      
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' });
      // Sign out
      await supabase.auth.signOut({ scope: 'global' });
      await supabase.auth.signOut({ scope: 'global' }),

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


import { supabase } from '@/integrations / supabase / client';
import { cleanupAuthState } from '@/utils / auth_utils';
import type { UserProfile } from "@/types / auth";
export const use_logout = (set_user: (user: UserProfile | null) =>: any void) => {
  const logout = async () => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      cleanupAuthState(),

<<<<<<< HEAD


      // Update state
      setUser(null)
    } catch (error) {

      console.error("Error during logout:", error)

import { supabase } from "@/integrations/supabase/client",;
import { cleanupAuthState } from "@/utils/authUtils",;
import type { UserProfile } from "@/types/auth",;
export const useLogout = (setUser: (user: UserProfile | null) => void) => {;

=======
      // Update state
      setUser(null)
    } catch (error) {
      }
      console.error("Error during "logout":", error)"
    }
  };
import { supabase } from "@/integrations/supabase/client";"
import type { UserProfile } from "@/types/auth",;"
export const useLogout = ("setUser": ("user": UserProfile | null) => void) => {;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const logout = async () => {;
    try {;
      // Clean up existing auth state;
      cleanupAuthState(),;
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' }),;
      // Update state;

      (cleanupAuthState(),
        // Sign out"
        await supabase.auth.signOut({ scope: "global" }));

    }
  };


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      // Update state;      setUser(null);

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
