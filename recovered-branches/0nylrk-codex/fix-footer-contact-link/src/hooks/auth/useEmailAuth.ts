<<<<<<< HEAD

<<<<<<< HEAD
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {cleanupAuthState} from "@/utils/authUtils";
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

import {cleanupAuthState} from "@/utils/authUtils";
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { cleanupAuthState } from "@/utils/authUtils",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
    try {;
      setIsLoading(true);
    try {
      setIsLoading(true),
      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        email;
        password});
      if (error) {
        toast({
=======
import { useState } from './react';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import type { UserProfile } from "@/types / auth";
import { cleanupAuthState } from '@/utils / auth_utils';
export const useEmailAuth = (
  set_user: (user: UserProfile | null) =>: any void,
  setIsLoading: (loading: boolean) => void) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
    try {
      setIsLoading (true);
      // Clean up any stale auth state before login;
      cleanupAuthState ();
;
      const { data, error } = await supabase.auth.signInWithPassword ({
        email;
        password});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          title: "Login failed";
          variant: "destructive"});
<<<<<<< HEAD
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"}),
          variant: "destructive"});
          variant: "destructive"}),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        return { error }
      }
      return { data }
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Login error:", error),
      toast({
        title: "Login failed";

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"});
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
  },

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup
      cleanupAuthState();
      cleanupAuthState(),
      
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase && supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        console && console.log("Sign out before signup failed:", err)
      }
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Only store a simple display name in the profile data
          data: {
            display_name: userData?.displayName ?? userData?.name ?? ""
          }}});
      if (error) {
        toast({
          title: "Signup failed";
          description: error.message
          }}}),

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"}),
        return { error }
      }
;
      toast({;
        title: "Signup successful",;
        description: "Check your email for verification instructions."}),;
      return { data }
    } catch (error: any) {;
      console.error("Signup error:", error),;
      toast({;
        title: "Signup failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          variant: "destructive"});
        return { error };
      }

      toast({
        title: "Signup successful"
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {
      console && console.error("Signup error:", error);
      toast({
        title: "Signup failed";

        description: error && error.message || "An unexpected error occurred",

=======
        title: "Login failed";
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
<<<<<<< HEAD
      return { error };
      return { error }
      return { error };
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
        email;
        password;
        options: {
          // Only store a simple display name in the profile data;
          data: {
            display_name: user_data?.display_name ?? user_data?.name ?? "";
          }}});
          title: "Signup failed";
          variant: "destructive"});
        return { error }
      }
        title: "Signup failed";
        variant: "destructive"});
      return { error }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  },

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          title: "Password reset failed";
          description: error.message
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"}),
        return { error }
      }
;
      toast({;
        title: "Password reset email sent",;
        description: "Check your email for password reset instructions."}),;
      return {}
    } catch (error: any) {;
      console.error("Password reset error:", error),;
      toast({;
        title: "Password reset failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          variant: "destructive"});
        return { error };
      }

      toast({
        title: "Password reset email sent"
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {
      console && console.error("Password reset error:", error);
      toast({
=======
  }
          title: "Password reset failed";
          description: error && error.message,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          variant: "destructive"});
        return { error }
      }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        title: "Password reset failed";
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD

;
  return { login, signup, reset_password }
}
;

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
<<<<<<< HEAD
      return { error };
      return { error }
      return { error };
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    } finally {
      setIsLoading(false)
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  return { login, signup, resetPassword }
};
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
