
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
      }
    } catch (error: any) {
      console.error("Google login error:", error);
      toast({
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
    }
  };

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

      if (error) {
        toast({
          title: "Facebook login failed",
          description: error.message,
      }
    } catch (error: any) {
      console.error("Facebook login error:", error);
      toast({
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
    }
  };

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

      if (error) {
        toast({
          title: "Twitter login failed",
          description: error.message,
      }
    } catch (error: any) {
      console.error("Twitter login error:", error);
      toast({
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
    }
  };

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter };
};
