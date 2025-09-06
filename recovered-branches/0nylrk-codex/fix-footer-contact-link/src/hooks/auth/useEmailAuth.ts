
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

import {cleanupAuthState} from "@/utils/authUtils";
=======
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { cleanupAuthState } from "@/utils/authUtils",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
<<<<<<< HEAD
<<<<<<< HEAD

      // Clean up any stale auth state before login

=======

      
      const { data, error } = await supabase && supabase.auth.signInWithPassword({

========
const { data, error } = await supabase && supabase.auth.signInWithPassword({
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
=======
    try {;
      setIsLoading(true);
=======
    try {
      setIsLoading(true),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      // Clean up any stale auth state before login
<<<<<<< HEAD
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        email;
        password});
      if (error) {
        toast({
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

          description: error && error.message,

========
          description: error && error.message,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
          variant: "destructive"});
=======

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

=======
          title: "Login failed";
          description: error.message
          variant: "destructive"});
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        return { error }
      }
      return { data }
    } catch (error: any) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
<<<<<<< HEAD
      console.error("Login error:", error),
      toast({

=======

      console.error ("Login error:", error);
      toast ({

        title: "Login failed";

        description: error && error.message || "An unexpected error occurred",

========
      console.error ("Login error:", error);
      toast ({
        title: "Login failed";
        description: error && error.message || "An unexpected error occurred",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
        variant: "destructive"});
=======
      console.error("Login error:", error),
      toast({

        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return { error }
    } finally {
      setIsLoading (false);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup

<<<<<<< HEAD
=======

      cleanupAuthState(),
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase && supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        console && console.log("Sign out before signup failed:", err)
      }
      // Create a proper options object
<<<<<<< HEAD
=======
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
        return { error }
          variant: "destructive"});
        return { error };
      }
      return { data }
    } catch (error: any) {
      console.error("Login error:", error),
      toast({
<<<<<<< HEAD
        title: "Login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
=======
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return { error }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true),
      // Clean up any stale auth state before signup
<<<<<<< HEAD
      cleanupAuthState();
=======
      cleanupAuthState(),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        // // // console.log("Sign out before signup failed:", err)
      }
      // Create a proper options object
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Only store a simple display name in the profile data
          data: {
            display_name: userData?.displayName ?? userData?.name ?? ""
<<<<<<< HEAD

=======
<<<<<<< HEAD
          }}});
      if (error) {
        toast({
          title: "Signup failed";
          description: error.message
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      const { data, error } = await supabase && supabase.auth.signUp({
=======
========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

========
            display_name: user_data?.display_name ?? user_data?.name ?? "";
          }}});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
;
      // Check condition
if ( {) {
  $2
}
        toast ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
=======
========
          title: "Signup failed";
          description: error && error.message,
          variant: "destructive"});
        return { error }
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
      toast ({
        title: "Signup successful",
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {
      console.error ("Signup error:", error);
      toast ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

        title: "Signup failed";

        description: error && error.message || "An unexpected error occurred",

========
        title: "Signup failed";
        description: error && error.message || "An unexpected error occurred",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts


        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
        title: "Signup failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
  }
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } finally {
      setIsLoading(false)
    }
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
<<<<<<< HEAD

=======
<<<<<<< HEAD
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          title: "Password reset failed";
          description: error.message
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const resetPassword = async (email: string) => {
    try {

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
          title: "Password reset failed";
          description: error && error.message,
          variant: "destructive"});
        return { error }
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts


        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
      toast ({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {
      console.error ("Password reset error:", error);
      toast ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

        title: "Password reset failed";

        description: error && error.message || "An unexpected error occurred",

========
        title: "Password reset failed";
        description: error && error.message || "An unexpected error occurred",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
;
  return { login, signup, reset_password }
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts

=======

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } finally {
      setIsLoading(false)
    }
  };
<<<<<<< HEAD

<<<<<<< HEAD
  return { login, signup, resetPassword }
};

=======

  return { login, signup, resetPassword }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/auth/useEmailAuth.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { login, signup, resetPassword }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
