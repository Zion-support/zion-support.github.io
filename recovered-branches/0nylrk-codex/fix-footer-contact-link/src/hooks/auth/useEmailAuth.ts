
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import type { UserProfile } from "@/types/auth",
import { cleanupAuthState } from "@/utils/authUtils",
=======
import { useState } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
import { cleanupAuthState } from &quot;@/utils/authUtils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string, password: string }) => {
    try {
      setIsLoading(true),
      // Clean up any stale auth state before login
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          title: &quot;Login failed&quot;,
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"}),
=======
import { useState } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import type { UserProfile } from "@/types/auth",;
import { cleanupAuthState } from "@/utils/authUtils",;
export const useEmailAuth = (;
  setUser: (user: UserProfile | null) => void,;
  setIsLoading: (loading: boolean) => void;
) => {;
  const login = async ({ email, password }: { email: string, password: string }) => {;
    try {;
      setIsLoading(true),;
      // Clean up any stale auth state before login;
      cleanupAuthState(),;
      const { data, error } = await supabase.auth.signInWithPassword({;
        email,;
        password}),;
      if (error) {;
        toast({;
          title: "Login failed",;
          description: error.message,;
          variant: "destructive"}),;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        return { error }
=======
          variant: &quot;destructive&quot;});
        return { error };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
;
      return { data }
<<<<<<< HEAD
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Login error:", error),
      toast({
        title: "Login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      return { error }
=======
      console.error(&quot;Login error:&quot;, error);
      toast({
        title: &quot;Login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
      return { error };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true),
      // Clean up any stale auth state before signup
      cleanupAuthState(),
      
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' })
      } catch (err) {
        // Continue even if signout fails
<<<<<<< HEAD
        // // // console.log("Sign out before signup failed:", err)
=======
        // console.log(&quot;Sign out before signup failed:&quot;, err);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Only store a simple display name in the profile data
          data: {
<<<<<<< HEAD
            display_name: userData?.displayName ?? userData?.name ?? ""
          }}}),
=======
            display_name: userData?.displayName ?? userData?.name ?? "&quot;
          }}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      if (error) {
        toast({
          title: &quot;Signup failed&quot;,
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"}),
=======
    } catch (error: any) {;
      console.error("Login error:", error),;
      toast({;
        title: "Login failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      return { error }
    } finally {;
      setIsLoading(false);
    }
  },;
  const signup = async (email: string, password: string, userData?: any) => {;
    try {;
      setIsLoading(true),;
      // Clean up any stale auth state before signup;
      cleanupAuthState(),;
      // Attempt to sign out any existing session first to prevent conflicts;
      try {;
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {;
        // Continue even if signout fails;
        // // // console.log("Sign out before signup failed:", err);
      }
;
      // Create a proper options object;
      const { data, error } = await supabase.auth.signUp({;
        email,;
        password,;
        options: {;
          // Only store a simple display name in the profile data;
          data: {;
            display_name: userData?.displayName ?? userData?.name ?? "";
          }}}),;
      if (error) {;
        toast({;
          title: "Signup failed",;
          description: error.message,;
          variant: "destructive"}),;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
          variant: &quot;destructive&quot;});
        return { error };
      }

      toast({
        title: &quot;Signup successful&quot;,
        description: &quot;Check your email for verification instructions.&quot;});
      return { data };
    } catch (error: any) {
      console.error(&quot;Signup error:&quot;, error);
      toast({
        title: &quot;Signup failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
      return { error };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
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
<<<<<<< HEAD
          variant: "destructive"}),
=======
    } finally {;
      setIsLoading(false);
    }
  },;
  const resetPassword = async (email: string) => {;
    try {;
      setIsLoading(true),;
      const { error } = await supabase.auth.resetPasswordForEmail(email, {;
        redirectTo: `${window.location.origin}/update-password`}),;
      if (error) {;
        toast({;
          title: "Password reset failed",;
          description: error.message,;
          variant: "destructive"}),;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
          variant: &quot;destructive&quot;});
        return { error };
      }

      toast({
        title: &quot;Password reset email sent&quot;,
        description: &quot;Check your email for password reset instructions.&quot;});
      return {};
    } catch (error: any) {
      console.error(&quot;Password reset error:&quot;, error);
      toast({
        title: &quot;Password reset failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive"});
      return { error };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
=======
    } finally {;
      setIsLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  };
  return { login, signup, resetPassword }
};