<<<<<<< HEAD
=======
<<<<<<< HEAD




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {cleanupAuthState} from "@/utils/authUtils";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

import {cleanupAuthState} from "@/utils/authUtils";
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { cleanupAuthState } from "@/utils/authUtils",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD

      
      const { data, error } = await supabase && supabase.auth.signInWithPassword({

<<<<<<< HEAD
=======
const { data, error } = await supabase && supabase.auth.signInWithPassword({
    try {;
      setIsLoading(true);
    try {
      setIsLoading(true),
      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        email;
        password});
      if (error) {
        toast({
<<<<<<< HEAD
          title: "Login failed";
          variant: "destructive"});
=======
<<<<<<< HEAD
<<<<<<< HEAD
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

          description: error && error.message,

=======
          description: error && error.message,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          variant: "destructive"});

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

<<<<<<< HEAD
=======
          title: "Login failed";
          description: error.message
          variant: "destructive"});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          title: "Login failed";
          variant: "destructive"});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"});
          variant: "destructive"}),
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          variant: "destructive"});
          variant: "destructive"}),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

        return { error }
      }
      return { data }
    } catch (error: any) {
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      console.error ("Login error:", error);
      toast ({

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        title: "Login failed";

        description: error && error.message || "An unexpected error occurred",

<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.error ("Login error:", error);
      toast ({
        title: "Login failed";
        description: error && error.message || "An unexpected error occurred",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant: "destructive"});
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
    } finally {
      setIsLoading (false);
    }
  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase && supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        options: {
          // Only store a simple display name in the profile data;
          data: {
          }}}),

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
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
=======
<<<<<<< HEAD
      const { data, error } = await supabase && supabase.auth.signUp({
<<<<<<< HEAD
=======
=======
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
  const signup = async (email: string, password: string, user_data?: any) => {
    try {
      setIsLoading (true);
      // Clean up any stale auth state before signup;
      cleanupAuthState ();
;
      // Attempt to sign out any existing session first to prevent conflicts;
      try {
        await supabase.auth.sign_out ({ scope: 'global' });
      } catch (err) {
        // Continue even if signout fails;
        console.log ("Sign out before signup failed:", err);
      }
      // Create a proper options object;
      const { data, error } = await supabase.auth.sign_up ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        email;
        password;
        options: {
          // Only store a simple display name in the profile data;
          data: {
<<<<<<< HEAD

=======
            display_name: user_data?.display_name ?? user_data?.name ?? "";
          }}});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      // Check condition
if ( {) {
  $2
}
        toast ({
<<<<<<< HEAD

          title: "Signup failed";

          description: error && error.message,

          variant: "destructive"});
        return { error }
      }

            display_name: userData?.displayName ?? userData?.name ?? ""

          }}}),

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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
<<<<<<< HEAD
        title: "Signup failed";
=======
<<<<<<< HEAD

=======
          title: "Signup failed";
          description: error && error.message,
          variant: "destructive"});
        return { error }
      }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast ({
        title: "Signup successful",
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {
      console.error ("Signup error:", error);
      toast ({
<<<<<<< HEAD

        title: "Signup failed";

        description: error && error.message || "An unexpected error occurred",

=======
        title: "Signup failed";
        description: error && error.message || "An unexpected error occurred",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        title: "Signup failed";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      return { error }
      return { error };

        email;
        password;
        options: {
          // Only store a simple display name in the profile data;
          data: {
            display_name: user_data?.display_name ?? user_data?.name ?? "";
          }}});
          title: "Signup failed";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          variant: "destructive"});
        return { error }
      }
        title: "Signup failed";
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error };
      return { error }
      return { error };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {
      setIsLoading(false)
    }
  },

<<<<<<< HEAD
=======
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          title: "Password reset failed";
          description: error.message
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const resetPassword = async (email: string) => {
    try {

      setIsLoading(true),
      const { error } = await supabase && supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window && window.location.origin}/update-password`});

      if (error) {
        toast({
=======
;
  const reset_password = async (email: string) => {
    try {
      setIsLoading (true),
      const { error } = await supabase.auth.resetPasswordForEmail (email, {
        redirect_to: `${window.location.origin}/update - password`});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          title: "Password reset failed";
          description: error && error.message,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          variant: "destructive"});
        return { error }
      }

<<<<<<< HEAD

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast ({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {
      console.error ("Password reset error:", error);
      toast ({
<<<<<<< HEAD

        title: "Password reset failed";

        description: error && error.message || "An unexpected error occurred",

=======
        title: "Password reset failed";
        description: error && error.message || "An unexpected error occurred",
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          variant: "destructive"});
        return { error }
      }
        title: "Password reset failed";
<<<<<<< HEAD
        variant: "destructive"});
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant: "destructive"});
      return { error };
      return { error }
      return { error };
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  }
;
  return { login, signup, reset_password }
}
;

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

          variant: "destructive"});
        return { error };
      }
      toast({
        title: "Password reset email sent"
        description: "Check your email for password reset instructions."});
      return {};
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed";
        description: error.message |"An unexpected error occurred"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  }
<<<<<<< HEAD

;
  return { login, signup, reset_password }
}
;

=======
=======
  return { login, signup, resetPassword }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
<<<<<<< HEAD

=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      return { error };
      return { error }
      return { error };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {
      setIsLoading(false)
    }
  };

<<<<<<< HEAD

  return { login, signup, resetPassword }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return { login, signup, resetPassword }
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { useState } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
import { cleanupAuthState } from "@/utils/authUtils",;
;
export const useEmailAuth = (;
  setUser:(user:UserProfile | null) => void,;
  setIsLoading:(loading:boolean) => void;
) => {;
  const login = async ({ email, password } { email:string, password:string }) => {;
    try {;
      setIsLoading(true),;
      // Clean up any stale auth state before login;
      cleanupAuthState(),;
      ;
      const { data, error } = await supabase.auth.signInWithPassword({;
        email,;
        password}),;
;
      return { error }
      return { error };

    } finally {
      setIsLoading(false)
    }
  };

  return { login, signup, resetPassword }
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
