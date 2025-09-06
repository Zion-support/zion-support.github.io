
<<<<<<< HEAD
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {cleanupAuthState} from "@/utils/authUtils";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

import {cleanupAuthState} from "@/utils/authUtils";
<<<<<<< HEAD
=======
=======
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { cleanupAuthState } from "@/utils/authUtils",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
        email;
        password});
      if (error) {
        toast({
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
          title: "Login failed";
          description: error.message
          variant: "destructive"});
<<<<<<< HEAD
=======
=======

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive"}),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        return { error }
      }
      return { data }
    } catch (error: any) {
      console && console.error("Login error:", error);
      toast({
        title: "Login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup
      cleanupAuthState();
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase && supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        console && console.log("Sign out before signup failed:", err)
      }
      // Create a proper options object
      const { data, error } = await supabase && supabase.auth.signUp({
        email;
        password;
        options: {
          // Only store a simple display name in the profile data;
          data: {
            display_name: user_data?.display_name ?? user_data?.name ?? "";
          }}});
      if (error) {
        toast({
          title: "Signup failed";
          description: error.message
          variant: "destructive"});
        return { error }
      }
<<<<<<< HEAD
=======

            display_name: userData?.displayName ?? userData?.name ?? ""

          }}}),

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          variant: "destructive"});
        return { error };
      }

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      toast({
        title: "Signup successful"
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {
      console && console.error("Signup error:", error);
      toast({
        title: "Signup failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
=======


        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
<<<<<<< HEAD
      return { error };
=======
<<<<<<< HEAD
      return { error }
=======
      return { error };
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } finally {
      setIsLoading(false)
    }
  },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          title: "Password reset failed";
          description: error.message
          title: "Password reset failed";
          description: error && error.message,
          variant: "destructive"});
        return { error }
      }
<<<<<<< HEAD
=======


        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          variant: "destructive"});
        return { error };
      }

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      toast({
        title: "Password reset email sent"
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {
      console && console.error("Password reset error:", error);
      toast({
        title: "Password reset failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
=======

;
  return { login, signup, reset_password }
}
;

=======

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
<<<<<<< HEAD
      return { error };
=======
<<<<<<< HEAD
      return { error }
=======
      return { error };
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } finally {
      setIsLoading(false)
    }
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return { login, signup, resetPassword }
}

