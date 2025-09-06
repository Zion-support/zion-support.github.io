



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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {

      
      const { data, error } = await supabase && supabase.auth.signInWithPassword({

<<<<<<< HEAD
const { data, error } = await supabase && supabase.auth.signInWithPassword({
    try {;
      setIsLoading(true);
    try {
      setIsLoading(true),
      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        email;
        password});
      if (error) {
        toast({
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          description: error && error.message,
          variant: "destructive"});

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

<<<<<<< HEAD
          title: "Login failed";
          description: error.message
          variant: "destructive"});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        return { error }
      }
      return { data }
    } catch (error: any) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      console.error ("Login error:", error);
      toast ({

        title: "Login failed";

        description: error && error.message || "An unexpected error occurred",

      console.error ("Login error:", error);
      toast ({
        title: "Login failed";
        description: error && error.message || "An unexpected error occurred",
        variant: "destructive"});
      console.error("Login error:", error),
      toast({

        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),

      return { error }
    } finally {
      setIsLoading (false);
    }


  },



  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup


      cleanupAuthState(),
      


      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase && supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        console && console.log("Sign out before signup failed:", err)
      }
      // Create a proper options object
          variant: "destructive"}),
          variant: "destructive"});
          variant: "destructive"}),
        return { error }
          variant: "destructive"});
        return { error };
      }
      return { data }
    } catch (error: any) {
      console.error("Login error:", error),
      toast({
        title: "Login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
    } finally {
      setIsLoading(false)
    }
  }
  },

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true),
      // Clean up any stale auth state before signup
      cleanupAuthState();
      cleanupAuthState(),
      
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        // // // console.log("Sign out before signup failed:", err)
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
      const { data, error } = await supabase && supabase.auth.signUp({
  }
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
        email;
        password;
        options: {
          // Only store a simple display name in the profile data;
          data: {
            display_name: user_data?.display_name ?? user_data?.name ?? "";
          }}});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Signup failed";
          description: error && error.message,
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
          variant: "destructive"});
        return { error };
      }
      toast({
        title: "Signup successful"
        description: "Check your email for verification instructions."});
      return { data };
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  }
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error };
      return { error }
      return { error };
=======


        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {
      setIsLoading(false)
    }
  },

<<<<<<< HEAD
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

          title: "Password reset failed";
          description: error && error.message,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          variant: "destructive"});
        return { error }
      }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
          title: "Password reset failed";
          description: error && error.message,
          variant: "destructive"});
        return { error }
      }

=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  return { login, signup, reset_password }
}
;

<<<<<<< HEAD
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
  return { login, signup, resetPassword }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
<<<<<<< HEAD
      return { error };
      return { error }
      return { error };
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {
      setIsLoading(false)
    }
  };
<<<<<<< HEAD

  return { login, signup, resetPassword }
};

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
      if (error) {;
        toast({;
          title:"Login failed",;
          description:error.message,;
          variant:"destructive"}),;
        return { error },;
      }
;
      return { data },;
    } catch (error:any) {;
      console.error("Login error:", error),;
      toast({;
        title:"Login failed",;
        description:error.message || "An unexpected error occurred",;
        variant:"destructive"}),;
      return { error },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const signup = async (email:string, password:string, userData?:any) => {;
    try {;
      setIsLoading(true),;
      // Clean up any stale auth state before signup;
      cleanupAuthState(),;
      ;
      // Attempt to sign out any existing session first to prevent conflicts;
      try {;
        await supabase.auth.signOut({ scope:'global' }),;
      } catch (err) {;
        // Continue even if signout fails;
        // // // console.log("Sign out before signup failed:", err),;
      }
      ;
      // Create a proper options object;
      const { data, error } = await supabase.auth.signUp({;
        email,;
        password,;
        options:{;
          // Only store a simple display name in the profile data;
          data:{;
            display_name:userData?.displayName ?? userData?.name ?? "";
          }}}),;
;
      if (error) {;
        toast({;
          title:"Signup failed",;
          description:error.message,;
          variant:"destructive"}),;
        return { error },;
      }
;
      toast({;
        title:"Signup successful",;
        description:"Check your email for verification instructions."}),;
      return { data },;
    } catch (error:any) {;
      console.error("Signup error:", error),;
      toast({;
        title:"Signup failed",;
        description:error.message || "An unexpected error occurred",;
        variant:"destructive"}),;
      return { error },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const resetPassword = async (email:string) => {;
    try {;
      setIsLoading(true),;
      const { error } = await supabase.auth.resetPasswordForEmail(email, {;
        redirectTo:`${window.location.origin}/update-password`}),;
;
      if (error) {;
        toast({;
          title:"Password reset failed",;
          description:error.message,;
          variant:"destructive"}),;
        return { error },;
      }
;
      toast({;
        title:"Password reset email sent",;
        description:"Check your email for password reset instructions."}),;
      return {},;
    } catch (error:any) {;
      console.error("Password reset error:", error),;
      toast({;
        title:"Password reset failed",;
        description:error.message || "An unexpected error occurred",;
        variant:"destructive"}),;
      return { error },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return { login, signup, resetPassword },;
},; export const useEmailAuth = (setUser: (user: UserProfile | null) => void;
setIsLoading: (loading: boolean) => void) => {
  const login = async ({
  email, password 
}: {
  email: string, password: string 
}) => {
  try {
  setIsLoading (true);
}return {
  data 
}
}catch (error: any) {
  
}finally {
  setIsLoading (false) 
}
};
const signup = async (email: string, password: string, userData?: any) => {
  try {
  setIsLoading (true);
//Attempt to sign out any existing session first to prevent conflicts try {
  
}data, error 
}= await supabase.auth.signUp ({
  email, password, options: {
  //Only store a simple display name in the profile data data: {
  if (error) {
  toast ({
  title: "Signup failed";
description: error.message;
}finally {
  setIsLoading (false) 
}
};
const resetPassword = async (email: string) => {
  try {
  setIsLoading (true);
const {
  error 
}= await supabase.auth.resetPasswordForEmail (email, {
  redirectTo: `$ {
  window.location.origin 
}/update-password` 
});
if (error) {
  toast ({
  title: "Password reset failed";
description: error.message;
}finally {
  setIsLoading (false) 
}
};
return {
  login, signup, resetPassword 
}
};

  return { login, signup, resetPassword }
};
=======


  return { login, signup, resetPassword }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
