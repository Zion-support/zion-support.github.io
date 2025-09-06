
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import { cleanupAuthState } from "@/utils/authUtils";
export const useEmailAuth = $2;
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string}) => {
    try {
      setIsLoading($2);
      // Clean up any stale auth state before login
      cleanupAuthState($2);
      const { data, error } = await supabase.auth.signInWithPassword($2);
      if (error) {
        toast($2);
        return { error }
      }

      return { data }
    } catch (error: any) {
      console.error($2);
      toast($2);
      return { error }
    } finally {
      setIsLoading(false)
    }
  },

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading($2);
      // Clean up any stale auth state before signup
      cleanupAuthState($2);
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        console.log("Sign out before signup failed:", err)
      }
      
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp($2);
      if (error) {
        toast($2);
        return { error }
      }

      toast($2);
      return { data }
    } catch (error: any) {
      console.error($2);
      toast($2);
      return { error }
    } finally {
      setIsLoading(false)
    }
  },

  const resetPassword = async (email: string) => {
    try {
      setIsLoading($2);
      const { error } = await supabase.auth.resetPasswordForEmail($2);
      if (error) {
        toast($2);
        return { error }
      }

      toast($2);
      return {}
    } catch (error: any) {
      console.error($2);
      toast($2);
      return { error }
    } finally {
      setIsLoading(false)
    }
  },

  return { login, signup, resetPassword }
},
