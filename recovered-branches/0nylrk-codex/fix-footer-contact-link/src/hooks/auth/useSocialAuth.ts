
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "google",
      });
=======
        provider: "google"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive",
        });
=======
          variant: "destructive"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      }
    } catch (error: any) {
      console.error("Google login error:", error);
      toast({
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
<<<<<<< HEAD
        variant: "destructive",
      });
=======
        variant: "destructive"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    }
  };

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "facebook",
      });
=======
        provider: "facebook"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

      if (error) {
        toast({
          title: "Facebook login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive",
        });
=======
          variant: "destructive"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      }
    } catch (error: any) {
      console.error("Facebook login error:", error);
      toast({
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
<<<<<<< HEAD
        variant: "destructive",
      });
=======
        variant: "destructive"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    }
  };

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "twitter",
      });
=======
        provider: "twitter"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

      if (error) {
        toast({
          title: "Twitter login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive",
        });
=======
          variant: "destructive"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      }
    } catch (error: any) {
      console.error("Twitter login error:", error);
      toast({
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
<<<<<<< HEAD
        variant: "destructive",
      });
=======
        variant: "destructive"});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    }
  };

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter };
};
