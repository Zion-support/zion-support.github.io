







      // Update state
      setUser(null)
    } catch (error) {

      console.error("Error during logout:", error)

import { supabase } from "@/integrations/supabase/client",;
import { cleanupAuthState } from "@/utils/authUtils",;
import type { UserProfile } from "@/types/auth",;
export const useLogout = (setUser: (user: UserProfile | null) => void) => {;






  return { logout }

}




