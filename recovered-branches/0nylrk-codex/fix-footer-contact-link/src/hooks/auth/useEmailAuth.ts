
<<<<<<< HEAD
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { cleanupAuthState } from "@/utils/authUtils",
=======
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {cleanupAuthState} from "@/utils/authUtils";
>>>>>>> main
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
    try {
<<<<<<< HEAD
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
          variant: "destructive"}),
        return { error }
          variant: "destructive"});
        return { error };
      }
;
      return { data }
    } catch (error: any) {
      console.error("Login error:", error),
      toast({
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
=======
      setIsLoading(true);
      // Clean up any stale auth state before login
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email;
        password});

      if (error) {
        toast({
          title: "Login failed";
          description: error.message,
          variant: "destructive"});
        return { error }
      }

      return { data }
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
>>>>>>> main
      return { error }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true),
      // Clean up any stale auth state before signup
      cleanupAuthState(),
=======
  };

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup
      cleanupAuthState();
>>>>>>> main
      
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
<<<<<<< HEAD
        // // // console.log("Sign out before signup failed:", err)
=======
        console.log("Sign out before signup failed:", err)
>>>>>>> main
      }
      
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp({
<<<<<<< HEAD
        email,
        password,
=======
        email;
        password;
>>>>>>> main
        options: {
          // Only store a simple display name in the profile data
          data: {
            display_name: userData?.displayName ?? userData?.name ?? ""
<<<<<<< HEAD
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
          variant: "destructive"});
        return { error };
      }
=======
          }}});

      if (error) {
        toast({
          title: "Signup failed";
          description: error.message,
          variant: "destructive"});
        return { error }
      }
>>>>>>> main

      toast({
        title: "Signup successful",
        description: "Check your email for verification instructions."});
<<<<<<< HEAD
      return { data };
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error };
    } finally {
      setIsLoading(false)
    }
  },
=======
      return { data }
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  };
>>>>>>> main

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true),
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
<<<<<<< HEAD
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
          variant: "destructive"});
        return { error };
      }
=======
        redirectTo: `${window.location.origin}/update-password`});

      if (error) {
        toast({
          title: "Password reset failed";
          description: error.message,
          variant: "destructive"});
        return { error }
      }
>>>>>>> main

      toast({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions."});
<<<<<<< HEAD
      return {};
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error };
=======
      return {}
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error }
>>>>>>> main
    } finally {
      setIsLoading(false)
    }
  };
<<<<<<< HEAD
  return { login, signup, resetPassword }
};
=======

  return { login, signup, resetPassword }
};
>>>>>>> main
