<<<<<<< HEAD
import { useState } from "react","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast";"
import type { UserProfile } from "@/types/auth";"
import {cleanupAuthState} from "@/utils/authUtils";"
import { toast } from "@/hooks/use-toast","
import type { UserProfile } from "@/types/auth","
import { cleanupAuthState } from "@/utils/authUtils",        email;"
        password});
      if (error) {
        }
        toast({
          }
          "title": "Login failed";"
"variant": "destructive"});          "title": "Login failed",;"
  "description": error && error.message,
          "variant": "destructive"});"
    try {
      }
      setIsLoading(true),
      // Clean up any stale auth state before login;
    "title": "Login failed","
  "description": error.message,
"variant": "destructive"});"
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        }
        email,
        password}),
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import {cleanupAuthState} from "@/utils/authUtils";
<<<<<<< HEAD

import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",

export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {

      const { data, error } = await supabase && supabase.auth.signInWithPassword({

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

        password});
      if (error) {
        toast({

          title: "Login failed";

          description: error && error.message,

          description: error && error.message,
          variant: "destructive"});

    try {
      setIsLoading(true),

      // Clean up any stale auth state before login

          title: "Login failed";
          variant: "destructive"});

      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({}
        email,
        password}),

      if (error) {}
        toast({"
          title: "Login failed",
          description: error.message,

        return { error }
      }
      return { data }

      console.error ("Login error:", error);
      toast ({

        title: "Login failed";

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"});
        title: "Login failed",
        description: error.message || "An unexpected error occurred",

        variant: "destructive"}),

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

        await supabase && supabase.auth.signOut({ scope: 'global' })
      } catch (err) {}
        // Continue even if signout fails;
        options: {}
          // Only store a simple display name in the profile data;

          }}}),

      if (error) {}
        toast({"
          title: "Signup failed",

          variant: "destructive"}),
        return { error }
      }
;

      return { data }
    } catch (error: any) {;"
      console.error("Signup error:", error),;

      const { data, error } = await supabase && supabase.auth.signUp({
;
  const signup = async (email: string, password: string, user_data?: any) => {
    try {

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

        email;
        password;
        options: {}
          // Only store a simple display name in the profile data;

;
      // Check condition;
if ( {) {}
  $2;
}

          variant: "destructive"});
        return { error };
      }

      toast({"
        title: "Signup successful""
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {"
      console && console.error("Signup error:", error);

      toast ({

        title: "Signup successful",

        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {"
      console.error ("Signup error:", error);

        title: "Signup failed";
"
        variant: "destructive"});
      return { error }
    } finally {}
      setIsLoading (false);
    }
  }

        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
      return { error };
      return { error }
      return { error };

      setIsLoading(false)
    }
  },

          variant: "destructive"}),
        return { error }
      }
;

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

          variant: "destructive"});
        return { error }
      }

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

          variant: "destructive"});
        return { error };
      }

      toast({"
        title: "Password reset email sent""
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {"
      console && console.error("Password reset error:", error);

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

=======
>>>>>>> origin/resolved-merge-conflicts

      if (error) {
        }
        toast({
          }
          "title": "Login failed","
          "description": error.message,
          "variant": "destructive"});"
"variant": "destructive"}),;"
        return { error }
      }
      return { data }
    } catch ("error": any) {
      }
      console.error ("Login "error":", error);"
      toast ({
        }
        "variant": "destructive"});"
        "title": "Login failed","
        "description": error.message || "An unexpected error occurred","
"variant": "destructive"}),;"
      return { error }
    } finally {
      }
      setIsLoading (false);
    }
  const signup = async ("email": string, "password": string, userData?: any) => {
    }
    try {
      }
      setIsLoading(true);
      // Clean up any stale auth state before signup
      // Attempt to sign out any existing session first to prevent conflicts,
try {
        }
        await supabase && supabase.auth.signOut({ "scope": 'global' })'
      } catch (err) {
        // Continue even if signout fails
}
"options": {
          // Only store a simple display name in the profile data;
          }
          "data": {
          }}),

      if (error) {
        }
        toast({
          }
          "title": "Signup failed","
          "description": error.message,
"variant": "destructive"}),;"
        return { error }
      }
;
      toast({;
        }
        "title": "Signup successful",,"
  "description": "Check your email for verification instructions."}),;"
      return { data }
    } catch ("error": any) {;
      }
      console.error("Signup "error":", error),;"
      toast({;
        }
        "title": "Signup failed",,"
  "description": error.message || "An unexpected error occurred",;"
        "variant": "destructive"}),;"
      return { error }
      const { data, error } = await supabase && supabase.auth.signUp({
  }
  const signup = async ("email": string, "password": string, user_data?: any) => {
    }
    try {
      }
      setIsLoading (true);
      // Clean up any stale auth state before signup;
      cleanupAuthState ();
;
      // Attempt to sign out any existing session first to prevent conflicts;
      try {
        }
        await supabase.auth.sign_out ({ "scope": 'global' });'
      } catch (err) {
        // Continue even if signout fails;
        }
        console.log ("Sign out before signup "failed":", err);"
      }
      // Create a proper options object;
      const { data, error } = await supabase.auth.sign_up ({
        }
        email;
        password;
        "options": {
          // Only store a simple display name in the profile data;
          }
          "data": {
;
      // Check condition
}
if ( {) {
  $2
}
        toast ({
          }
          "title": "Signup failed","
  "description": error && error.message,
          "variant": "destructive"});"
        return { error }
      }
            "display_name": userData?.displayName ?? userData?.name ?? """
          }}),

      if (error) {
        }
        toast({
          }
          "title": "Signup failed","
          "description": error.message,
          "variant": "destructive"});"
        return { error };
      }

      toast({
        }
        "title": "title","
    "description": "Check your email for verification instructions."});"
      return { data }
    } catch ("error": any) {
      }
      console && console.error("Signup "error":", error);"
      toast({
        }
        "title": "Signup failed";      toast ({"
        }
        "title": "Signup successful","
        "description": "Check your email for verification instructions."});"
      return { data }
    } catch ("error": any) {
      }
      console.error ("Signup "error":", error);"
      toast ({
        }
        "title": "Signup failed","
  "description": error && error.message || "An unexpected error occurred",          "variant": "destructive"});"
        return { error }
      }
        "title": "Signup failed";"
        "variant": "destructive"});"
      return { error }
    } finally {
      }
      setIsLoading (false);
    }
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

<<<<<<< HEAD
=======
      toast({"
        title: "Signup successful""
        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {"
      console && console.error("Signup error:", error);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast ({

        title: "Signup successful",

        description: "Check your email for verification instructions."});
      return { data }
    } catch (error: any) {"
      console.error ("Signup error:", error);
<<<<<<< HEAD

        title: "Signup failed";
"
=======
      toast ({
<<<<<<< HEAD
        title: "Signup failed";
        description: error && error.message || "An unexpected error occurred",
=======

        title: "Signup failed";

        description: error && error.message || "An unexpected error occurred",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"});
      return { error }
    } finally {}
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
          variant: "destructive"});
        return { error };
>>>>>>> merged-prs-20250907-203621
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
      return { error };
      return { error }
      return { error };

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsLoading(false)
    }
  },

<<<<<<< HEAD
          variant: "destructive"}),
        return { error }
      }
;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

          variant: "destructive"});
        return { error }
      }

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

          variant: "destructive"});
        return { error };
      }

      toast({"
        title: "Password reset email sent""
        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {"
      console && console.error("Password reset error:", error);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast ({
        title: "Password reset email sent",

        description: "Check your email for password reset instructions."});
      return {}
    } catch (error: any) {"
      console.error ("Password reset error:", error);
<<<<<<< HEAD
      toast ({}
"
        variant: "destructive"});
      return { error };
      return { error }
      return { error };
    } finally {}
      setIsLoading (false);
    }
=======
      toast ({
<<<<<<< HEAD
        title: "Password reset failed";
        description: error && error.message || "An unexpected error occurred",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
        title: "Password reset failed","
        description: error.message || "An unexpected error occurred","
        variant: "destructive"});

      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed";
        description: error.message |"An unexpected error occurred"

<<<<<<< HEAD
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },
  const resetPassword = async ("email": string) => {
    }
    try {
      }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive"});
      return { error }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
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
<<<<<<< HEAD
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp($2);
      if (error) {
        toast($2);
        return { error }
      }

      toast($2);
>>>>>>> origin/resolved-merge-conflicts
      return { data }
    } catch (error: any) {
      console.error($2);
      toast($2);
      return { error }
    } finally {
<<<<<<< HEAD
      setIsLoading(false)
    }
  },
  const resetPassword = async ("email": string) => {
    }
    try {
      }
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        }
        "redirectTo": `${window.location.origin}/update-password`});`      if (error) {
        }
        toast({
          }
          "title": "Password reset failed","
  "description": error.message,
const resetPassword = async ("email": string) => {
    }
    try {
      }
      setIsLoading(true),
      const { error } = await supabase && supabase.auth.resetPasswordForEmail(email, {
        }
        "redirectTo": `${window && window.location.origin}/update-password`});`      if (error) {
        }
        toast({
;
  }
<<<<<<< HEAD
  const reset_password = async ("email": string) => {
    }
    try {
      }
      setIsLoading (true),
      const { error } = await supabase.auth.resetPasswordForEmail (email, {
        }
        "redirect_to": `${window.location.origin}/update - password`});`;
      // Check condition,
if ( {) {
  $2
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
  return { login, signup, reset_password }
>>>>>>> origin/resolved-merge-conflicts
}
        toast ({
          }
          "variant": "destructive"});"
        return { error }
      }
        "redirectTo": `${window.location.origin}/update-password`}),`
      if (error) {
        }
        toast({
          }
          "title": "Password reset failed","
          "description": error.message,
"variant": "destructive"}),;"
        return { error }
      }
;
<<<<<<< HEAD
      toast({;
        }
        "title": "Password reset email sent",,"
  "description": "Check your email for password reset instructions."}),;"
      return {}
    } catch ("error": any) {;
      }
      console.error("Password reset "error":", error),;"
      toast({;
        }
        "title": "Password reset failed",,"
  "description": error.message || "An unexpected error occurred",;"
        "variant": "destructive"}),;"
      return { error }
          "variant": "destructive"});"
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});

<<<<<<< HEAD
=======
          variant: "destructive"});
>>>>>>> origin/resolved-merge-conflicts
        return { error };
      }

      toast({
        }
        "title": "Password reset email sent""
        "description": "Check your email for password reset instructions."});"
      return {}
    } catch ("error": any) {
      }
      console && console.error("Password reset "error":", error);"
      toast({import { useState } from "react";"
import { supabase } from "@/integrations/supabase/client";"
import { toast } from "@/hooks/use-toast",;"
import type { UserProfile } from "@/types/auth",;"
import { cleanupAuthState } from "@/utils/authUtils",;"
;
export const useEmailAuth = (;
  "setUser":("user":UserProfile | null) => void,;
  "setIsLoading":("loading":boolean) => void;
) => {;
  }
  const login = async ({ email, password } { "email":string, "password":string }) => {;
    }
    try {;
      }
      setIsLoading(true),;
      // Clean up any stale auth state before login;
      cleanupAuthState(),;
      ;
      const { data, error } = await supabase.auth.signInWithPassword({;
        }
        email,;
        password}),;
;
      return { error }
      return { error };

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    } finally {
      }
      setIsLoading(false)
    }
  };

import { useState } from "react",;

import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;

=======
<<<<<<< HEAD

  return { login, signup, resetPassword }
<<<<<<< HEAD
};
=======
};

import { useState } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { cleanupAuthState } from "@/utils/authUtils",;
;
export const useEmailAuth = (;
  setUser:(user:UserProfile | null) => void,;
  setIsLoading:(loading:boolean) => void;
) => {;
  const login = async ({ email, password } { email:string, password:string }) => {;
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
},
=======
<<<<<<< HEAD
};
=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
