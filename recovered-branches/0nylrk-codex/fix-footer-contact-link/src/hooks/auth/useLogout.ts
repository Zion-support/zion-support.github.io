

import { supabase } from "@/integrations/supabase/client",

export const useLogout = (setUser: (user: UserProfile | null) => void) => {
  const logout = async () => {
    try {
      // Clean up existing auth state

      // Sign out

      // Update state
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)

    }

  return { logout }
