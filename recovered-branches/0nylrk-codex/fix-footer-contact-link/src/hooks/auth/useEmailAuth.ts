<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {cleanupAuthState} from "@/utils/authUtils";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

import {cleanupAuthState} from "@/utils/authUtils";
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
<<<<<<< HEAD
<<<<<<< HEAD
import { cleanupAuthState } from "@/utils/authUtils",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { cleanupAuthState } from "@/utils/authUtils",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
// Clean up any stale auth state before login

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      const { data, error } = await supabase && supabase.auth.signInWithPassword({

<<<<<<< HEAD
=======

import { useState } from "react","
import { supabase } from "@/integrations/supabase/client",";
import { toast } from "@/hooks/use-toast";"
import type { UserProfile } from "@/types/auth";
"
import {cleanupAuthState} from "@/utils/authUtils";"
import { toast } from "@/hooks/use-toast","
import type { UserProfile } from "@/types/auth","
import { cleanupAuthState } from "@/utils/authUtils",

export const useEmailAuth = (;
  setUser: (user: UserProfile | null) => void;
  setIsLoading: (loading: boolean) => void;
) => {}
  const login = async ({ email, password }: { email: string, password: string }) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        email;
        password});
      if (error) {}
        toast({}
"
          title: "Login failed";

          description: error && error.message,

          description: error && error.message,
"
          variant: "destructive"});

    try {}
      setIsLoading(true),

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        password});
      if (error) {
        toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { cleanupAuthState } from "@/utils/authUtils",        email;
        password});
      if (error) {
        toast({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          title: "Login failed";

          description: error && error.message,

          description: error && error.message,
          variant: "destructive"});

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

          title: "Login failed";
          variant: "destructive"});
=======
"
          title: "Login failed";"
          variant: "destructive"});

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      cleanupAuthState(),

      const { data, error } = await supabase.auth.signInWithPassword({}
        email,
        password}),

      if (error) {}
        toast({"
          title: "Login failed",
          description: error.message,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          variant: "destructive"}),
          variant: "destructive"});
          variant: "destructive"}),
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          variant: "destructive"});
          variant: "destructive"}),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          variant: "destructive"});
          variant: "destructive"}),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        return { error }
      }
      return { data }
} catch (error: any) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Login error:", error),
      toast({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      console.error ("Login error:", error);
      toast ({

        title: "Login failed";

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"});
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
=======
    } catch (error: any) {}
"
      console.error ("Login error:", error);
      toast ({}
"
        title: "Login failed";
"
        description: error && error.message || "An unexpected error occurred",

"
        variant: "destructive"});"
        title: "Login failed","
        description: error.message || "An unexpected error occurred","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"}),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return { error }
    } finally {}
      setIsLoading (false);
    }

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup

      // Attempt to sign out any existing session first to prevent conflicts
      try {
=======
  const signup = async (email: string, password: string, userData?: any) => {}
    try {}
      setIsLoading(true);
      // Clean up any stale auth state before signup;
      // Attempt to sign out any existing session first to prevent conflicts;
      try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        await supabase && supabase.auth.signOut({ scope: 'global' })
      } catch (err) {}
        // Continue even if signout fails;
        options: {}
          // Only store a simple display name in the profile data;
data: {
display_name: userData?.displayName ?? userData?.name ?? ""
          }}}),

      if (error) {}
        toast({"
          title: "Signup failed",
description: error.message,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          variant: "destructive"}),
        return { error }
      }
;
toast({;
        title: "Signup successful",,
  description: "Check your email for verification instructions."}),;
      return { data }
    } catch (error: any) {;"
      console.error("Signup error:", error),;
toast({;
        title: "Signup failed",,
  description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
<<<<<<< HEAD
<<<<<<< HEAD
        email;
        password;
      const { data, error } = await supabase && supabase.auth.signUp({
;
  const signup = async (email: string, password: string, user_data?: any) => {
    try {
=======
      toast({;"
        title: "Signup failed",;"
        description: error.message || "An unexpected error occurred",;"
        variant: "destructive"}),;
      return { error }

;
  const signup = async (email: string, password: string, user_data?: any) => {}
    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading (true);
      // Clean up any stale auth state before signup;
      cleanupAuthState ();
;
      // Attempt to sign out any existing session first to prevent conflicts;
      try {'
        await supabase.auth.sign_out ({ scope: 'global' });
      } catch (err) {}
        // Continue even if signout fails;"
        console.log ("Sign out before signup failed:", err);
      }
      // Create a proper options object;
const { data, error } = await supabase.auth.sign_up ({
        email;
        password;
        options: {}
          // Only store a simple display name in the profile data;
data: {

;
      // Check condition;
if ( {) {}
  $2;
}
toast ({

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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        toast ({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive"});
        return { error };
      }

      toast({"
        title: "Signup successful""
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {"
      console && console.error("Signup error:", error);
toast({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      toast ({
=======
        title: "Signup failed";      toast ({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      toast ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title: "Signup successful",
=======
      toast({}
      toast ({"
        title: "Signup successful","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {"
      console.error ("Signup error:", error);
toast ({

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
description: error && error.message || "An unexpected error occurred",          variant: "destructive"});
        title: "Signup failed";
"
        variant: "destructive"});
      return { error }
    } finally {}
      setIsLoading (false);
    }
  }
"
          variant: "destructive"});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return { error }
      }"
        title: "Signup failed";"
        variant: "destructive"});
      return { error }
    } finally {}
      setIsLoading (false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error };
      return { error }
      return { error };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
=======
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(false)
    }
  },

const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {

=======
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive"}),
        return { error }
      }
;
toast({;"
        title: "Password reset email sent",;"
        description: "Check your email for password reset instructions."}),;
      return {}
    } catch (error: any) {;"
      console.error("Password reset error:", error),;
      toast({;"
        title: "Password reset failed",;"
        description: error.message || "An unexpected error occurred",;"
        variant: "destructive"}),;
      return { error }
<<<<<<< HEAD
=======
  description: error.message
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

=======

          title: "Password reset failed";
          description: error && error.message,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive"});
        return { error }
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive"});
        return { error };
      }

      toast({"
        title: "Password reset email sent""
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {"
      console && console.error("Password reset error:", error);
<<<<<<< HEAD
      toast({
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      toast ({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {"
      console.error ("Password reset error:", error);
      toast ({}
"
        variant: "destructive"});
      return { error };
      return { error }
      return { error };
    } finally {}
      setIsLoading (false);
    }

"
        title: "Password reset failed","
        description: error.message || "An unexpected error occurred","
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

        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
      setIsLoading(false)
    }
  };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return { login, signup, resetPassword }
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { useState } from "react",;
=======
      toast({import { useState } from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      toast({import { useState } from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    } finally {
      setIsLoading(false)
    }
  };

  return { login, signup, resetPassword }
};
  return { login, signup, resetPassword }
};

import { useState } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
=======
"
import { useState } from "react",;"
import { supabase } from "@/integrations/supabase/client",;"
import { toast } from "@/hooks/use-toast",;"
import type { UserProfile } from "@/types/auth",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

    } finally {}
      setIsLoading(false)
    }
  };

  return { login, signup, resetPassword }
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
