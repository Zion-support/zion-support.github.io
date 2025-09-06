
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
=======
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
>>>>>>> main
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "google"}),

      if (error) {
        toast({
          title: "Google login failed",
=======
        provider: "google"});

      if (error) {
        toast({
          title: "Google login failed";
>>>>>>> main
          description: error.message,
          variant: "destructive"})
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Google login error:", error),
      toast({
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  },
=======
      console.error("Google login error:", error);
      toast({
        title: "Google login failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  };
>>>>>>> main

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "facebook"}),

      if (error) {
        toast({
          title: "Facebook login failed",
=======
        provider: "facebook"});

      if (error) {
        toast({
          title: "Facebook login failed";
>>>>>>> main
          description: error.message,
          variant: "destructive"})
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Facebook login error:", error),
      toast({
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  },
=======
      console.error("Facebook login error:", error);
      toast({
        title: "Facebook login failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  };
>>>>>>> main

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "twitter"}),

      if (error) {
        toast({
          title: "Twitter login failed",
=======
        provider: "twitter"});

      if (error) {
        toast({
          title: "Twitter login failed";
>>>>>>> main
          description: error.message,
          variant: "destructive"})
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Twitter login error:", error),
      toast({
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
export const useSocialAuth = () => {;
  const loginWithGoogle = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"}),;
      if (error) {;
        toast({;
          title: "Google login failed",;
          description: error.message,;
          variant: "destructive"});
      }
    } catch (error: any) {;
      console.error("Google login error:", error),;
      toast({;
        title: "Google login failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"});
    }
  },;
  const loginWithFacebook = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "facebook"}),;
      if (error) {;
        toast({;
          title: "Facebook login failed",;
          description: error.message,;
          variant: "destructive"});
      }
    } catch (error: any) {;
      console.error("Facebook login error:", error),;
      toast({;
        title: "Facebook login failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"});
    }
  },;
  const loginWithTwitter = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "twitter"}),;
      if (error) {;
        toast({;
          title: "Twitter login failed",;
          description: error.message,;
          variant: "destructive"});
      }
    } catch (error: any) {;
      console.error("Twitter login error:", error),;
      toast({;
        title: "Twitter login failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"});
    }
  };
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
=======
      console.error("Twitter login error:", error);
      toast({
        title: "Twitter login failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  };

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> main
