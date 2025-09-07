import {supabase} from "@/integrations/supabase/client";
import {cleanupAuthState} from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

import { supabase } from "@/integrations/supabase/client",
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";

import { cleanupAuthState } from "@/utils/authUtils",

export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state
<<<<<<< HEAD
=======

import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth";
export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state

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
      console && console.error("Error during logout:", error)
    }
  }
  return { logout }
}
<<<<<<< HEAD
import { supabase } from '@/integrations / supabase / client';'
import { cleanupAuthState } from '@/utils / auth_utils';'
import type { UserProfile } from "@/types / auth";"
export const use_logout = ("set_user": ("user": UserProfile | null) =>: any void) => {
  }
    }
=======

import { supabase } from '@/integrations / supabase / client';
import { cleanupAuthState } from '@/utils / auth_utils';
import type { UserProfile } from "@/types / auth";
export const use_logout = (set_user: (user: UserProfile | null) =>: any void) => {
  const logout = async () => {
>>>>>>> origin/chore/fix-lint-and-merge
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
      cleanupAuthState()
      cleanupAuthState(),
      
      // Sign out;
      await supabase.auth.signOut({ scope: 'global' });
      // Sign out
      await supabase.auth.signOut({ scope: 'global' });
      await supabase.auth.signOut({ scope: 'global' }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Update state
      setUser(null)
    } catch (error) {
<<<<<<< HEAD
      }
      console.error("Error during "logout":", error)"
    }
  };
import { supabase } from "@/integrations/supabase/client";"
import type { UserProfile } from "@/types/auth",;"
export const useLogout = ("setUser": ("user": UserProfile | null) => void) => {;
  }
=======
      console.error("Error during logout:", error)

import { supabase } from "@/integrations/supabase/client",;
import { cleanupAuthState } from "@/utils/authUtils",;
import type { UserProfile } from "@/types/auth",;
export const useLogout = (setUser: (user: UserProfile | null) => void) => {;
>>>>>>> origin/chore/fix-lint-and-merge
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

  };

  return { logout }
}

};