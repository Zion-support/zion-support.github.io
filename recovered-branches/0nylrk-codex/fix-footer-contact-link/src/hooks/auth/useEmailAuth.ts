
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import { cleanupAuthState } from "@/utils/authUtils";
export const useEmailAuth = (,
  setUser: (user: UserProfile | null) => void;
  setIsLoading: (loading: boolean) => void,
) => {,
  const login = async ({ email, password }: { email: string, password: string ,}) => {,
    try {,
      setIsLoading(true);
      // Clean up any stale auth state before login,
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({,
        email;
      if (error) {,
        toast({,
          title: "Login failed";
          description: error.message;
        return { error };
      }
,
      return { data };
    } catch (error: any) {,
      console.error("Login error:", error);
      toast({,
        title: "Login failed";
        description: error.message || "An unexpected error occurred";
      return { error };
    } finally {,
      setIsLoading(false);
    }
  };
  const signup = async (email: string, password: string, userData?: any) => {,
    try {,
      setIsLoading(true);
      // Clean up any stale auth state before signup,
      cleanupAuthState();
      // Attempt to sign out any existing session first to prevent conflicts,
      try {,
        await supabase.auth.signOut({ scope: 'global' ,});
      } catch (err) {,
        // Continue even if signout fails,
        console.log("Sign out before signup failed:", err);
      }
,
      // Create a proper options object,
      const { data, error } = await supabase.auth.signUp({,
        email;
        password;
        options: {,
          // Only store a simple display name in the profile data,
          data: {,
            display_name: userData?.displayName ?? userData?.name ?? "",
      if (error) {,
        toast({,
          title: "Signup failed";
          description: error.message;
        return { error };
      }
,
      toast({,
        title: "Signup successful";
      return { data };
    } catch (error: any) {,
      console.error("Signup error:", error);
      toast({,
        title: "Signup failed";
        description: error.message || "An unexpected error occurred";
      return { error };
    } finally {,
      setIsLoading(false);
    }
  };
  const resetPassword = async (email: string) => {,
    try {,
      setIsLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {,
      if (error) {,
        toast({,
          title: "Password reset failed";
          description: error.message;
        return { error };
      }
,
      toast({,
        title: "Password reset email sent";
      return {};
    } catch (error: any) {,
      console.error("Password reset error:", error);
      toast({,
        title: "Password reset failed";
        description: error.message || "An unexpected error occurred";
      return { error };
    } finally {,
      setIsLoading(false);
    }
  };
  return { login, signup, resetPassword };
};
}}}}}}}}}}}}})))))))))))