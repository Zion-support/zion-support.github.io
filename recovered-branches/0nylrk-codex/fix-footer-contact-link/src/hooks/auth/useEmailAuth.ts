
import { useState } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
import { cleanupAuthState } from &quot;@/utils/authUtils&quot;;

export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before login
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password});

      if (error) {
        toast({
          title: &quot;Login failed&quot;,
          description: error.message,
          variant: &quot;destructive&quot;});
        return { error };
      }

      return { data };
    } catch (error: any) {
      console.error(&quot;Login error:&quot;, error);
      toast({
        title: &quot;Login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before signup
      cleanupAuthState();
      
      // Attempt to sign out any existing session first to prevent conflicts
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        // Continue even if signout fails
        // console.log(&quot;Sign out before signup failed:&quot;, err);
      }
      
      // Create a proper options object
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Only store a simple display name in the profile data
          data: {
            display_name: userData?.displayName ?? userData?.name ?? "&quot;
          }}});

      if (error) {
        toast({
          title: &quot;Signup failed&quot;,
          description: error.message,
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
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`});

      if (error) {
        toast({
          title: &quot;Password reset failed&quot;,
          description: error.message,
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
    } finally {
      setIsLoading(false);
    }
  };

  return { login, signup, resetPassword };
};
