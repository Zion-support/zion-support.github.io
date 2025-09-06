

<<<<<<< HEAD


import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {cleanupAuthState} from "@/utils/authUtils";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

import {cleanupAuthState} from "@/utils/authUtils";
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
<<<<<<< HEAD
import { cleanupAuthState } from "@/utils/authUtils",
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {

      
      const { data, error } = await supabase && supabase.auth.signInWithPassword({

        email;
=======
import { cleanupAuthState } from "@/utils/authUtils",        email;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        password});
      if (error) {
        toast({
          title: "Login failed";
<<<<<<< HEAD

          description: error && error.message,

          description: error && error.message,
=======
          variant: "destructive"});          title: "Login failed",
  description: error && error.message,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"});

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

<<<<<<< HEAD
          title: "Login failed";
=======
          title: "Login failed",
  description: error.message
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"});
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
<<<<<<< HEAD

=======
          variant: "destructive"});
          variant: "destructive"}),
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        return { error }
      }
      return { data }
    } catch (error: any) {

      console.error ("Login error:", error);
      toast ({
<<<<<<< HEAD

        title: "Login failed";

        description: error && error.message || "An unexpected error occurred",

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title: "Signup successful",;
        description: "Check your email for verification instructions."}),;
=======
        title: "Signup successful",,
  description: "Check your email for verification instructions."}),;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return { data }
    } catch (error: any) {;
      console.error("Signup error:", error),;
      toast({;
<<<<<<< HEAD
        title: "Signup failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
      const { data, error } = await supabase && supabase.auth.signUp({
;
=======
        title: "Signup failed",,
  description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
      const { data, error } = await supabase && supabase.auth.signUp({
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
        email;
        password;
        options: {
          // Only store a simple display name in the profile data;
          data: {
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
      // Check condition
if ( {) {
  $2
}
        toast ({

<<<<<<< HEAD
          title: "Signup failed";

          description: error && error.message,
=======
          title: "Signup failed",
  description: error && error.message,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

          variant: "destructive"});
        return { error }
      }

            display_name: userData?.displayName ?? userData?.name ?? ""

          }}}),

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

      toast ({
=======
        title: "Signup failed";      toast ({
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        title: "Signup successful",
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {
      console.error ("Signup error:", error);
      toast ({

<<<<<<< HEAD
        title: "Signup failed";

        description: error && error.message || "An unexpected error occurred",

        title: "Signup failed";
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }


        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

          variant: "destructive"});
=======
        title: "Signup failed",
  description: error && error.message || "An unexpected error occurred",          variant: "destructive"});
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        return { error }
      }
        title: "Signup failed";
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  }
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error };
      return { error }
      return { error };
    } finally {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      setIsLoading(false)
    }
  },

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

=======
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          title: "Password reset failed",
  description: error.message
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const resetPassword = async (email: string) => {
    try {

      setIsLoading(true),
      const { error } = await supabase && supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window && window.location.origin}/update-password`});

      if (error) {
        toast({
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

          title: "Password reset failed";
          description: error && error.message,
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"});
        return { error }
      }

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
<<<<<<< HEAD

=======
          variant: "destructive"}),
        return { error }
      }
;
      toast({;
        title: "Password reset email sent",,
  description: "Check your email for password reset instructions."}),;
      return {}
    } catch (error: any) {;
      console.error("Password reset error:", error),;
      toast({;
        title: "Password reset failed",,
  description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"});
        return { error };
      }

      toast({
        title: "Password reset email sent"
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {
      console && console.error("Password reset error:", error);
<<<<<<< HEAD
      toast({

      toast ({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {
      console.error ("Password reset error:", error);
      toast ({

        title: "Password reset failed";

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"});
      return { error };
      return { error }
      return { error };
    } finally {
      setIsLoading (false);
    }
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
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  }

;
  return { login, signup, reset_password }
}
;


        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

    } finally {
      setIsLoading(false)
    }
  };


  return { login, signup, resetPassword }
};
  return { login, signup, resetPassword }
};

import { useState } from "react",;
=======
      toast({import { useState } from "react",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
