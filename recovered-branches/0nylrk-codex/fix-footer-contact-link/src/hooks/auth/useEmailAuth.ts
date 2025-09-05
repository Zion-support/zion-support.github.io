
<<<<<<< HEAD
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
},;
=======
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { cleanupAuthState } from "@/utils/authUtils",export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
    try {
      setIsLoading(true),
import type {_UserProfile} from "@/types/auth";

export const _useEmailAuth = (_setUser: (user: UserProfile | null) => void,
  setIsLoading: (_loading: boolean) => void
) => {_const _login = async (_{ email, _password}: {_email: string; password: string}) => {_try {
      setIsLoading(true);
      // Clean up any stale auth state before login
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          title: &quot;Login failed&quot;,
          description: error.message,
          variant: "destructive"}),
        return { error }      }

      return { data }
    } catch (error: any) {
      console.error("Login error:", error),
      toast({
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }    } finally {
      setIsLoading(false)
    }
  },

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true),
      const { data, _error} = await supabase.auth.signInWithPassword({_email, _password});

      if (error) {_toast({
          title: "Login failed", _description: error.message, _variant: "destructive"});
        return {_error};
      }

      return {_data};
    } catch (error: unknown) {_toast({
        title: "Login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
      return {_error};
    } finally {_setIsLoading(false);}
  };

  const _signup = async (_email: string, _password: string, _userData?: unknown) => {_try {
      setIsLoading(true);
      // Clean up any stale auth state before signup
      cleanupAuthState(),
      
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
        // // // console.log("Sign out before signup failed:", err)      }
        await supabase.auth.signOut({ scope: 'global'});
      } catch (err) {_// Continue even if signout fails}
      
      // Create a proper options object
      const {_data, _error} = await supabase.auth.signUp({_email, _password, _options: {
          // Only store a simple display name in the profile data
          data: {
            display_name: userData?.displayName ?? userData?.name ?? ""
          }}}),
      if (error) {
        toast({
          title: &quot;Signup failed&quot;,
          description: error.message,
          variant: "destructive"}),
        return { error }
      }

      toast({
        title: "Signup successful",
        description: "Check your email for verification instructions."}),
      return { data }
    } catch (error: any) {
      console.error("Signup error:", error),
      toast({
        title: "Signup failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }    } finally {
      setIsLoading(false)
    }
  },

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true),
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          title: &quot;Password reset failed&quot;,
          description: error.message,
          variant: "destructive"}),
        return { error }
      }

      toast({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions."}),
      return {}
    } catch (error: any) {
      console.error("Password reset error:", error),
      toast({
        title: "Password reset failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }    } finally {
      setIsLoading(false)
    }
  },

  return { login, signup, resetPassword }
},
            display_name: userData?.displayName ?? userData?.name ?? ""}}});

      if (error) {_toast({
          title: "Signup failed", _description: error.message, _variant: "destructive"});
        return {_error};
      }

      toast({_title: "Signup successful", _description: "Check your email for verification instructions."});
      return {_data};
    } catch (error: unknown) {_toast({
        title: "Signup failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
      return {_error};
    } finally {_setIsLoading(false);}
  };

  const _resetPassword = async (_email: string) => {_try {
      setIsLoading(true);
      const { error} = await supabase.auth.resetPasswordForEmail(email, {_redirectTo: `${window.location.origin}/update-password`});

      if (error) {_toast({
          title: "Password reset failed", _description: error.message, _variant: "destructive"});
        return {_error};
      }

      toast({_title: "Password reset email sent", _description: "Check your email for password reset instructions."});
      return {};
    } catch (error: unknown) {_toast({
        title: "Password reset failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
      return {_error};
    } finally {_setIsLoading(false);}
  };

  return {_login, _signup, _resetPassword};
};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
