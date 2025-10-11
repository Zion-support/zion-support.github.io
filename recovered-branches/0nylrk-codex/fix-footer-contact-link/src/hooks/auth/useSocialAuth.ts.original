
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "google"});
=======
        provider: "google",
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive",
        });
>>>>>>> origin/auto/autonomy-17186719616
      }
    } catch (error: any) {
      console.error("Google login error:", error);
      toast({
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
    }
  };

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "facebook"});
=======
        provider: "facebook",
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          title: "Facebook login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive",
        });
>>>>>>> origin/auto/autonomy-17186719616
      }
    } catch (error: any) {
      console.error("Facebook login error:", error);
      toast({
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
    }
  };

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "twitter"});
=======
        provider: "twitter",
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          title: "Twitter login failed",
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive",
        });
>>>>>>> origin/auto/autonomy-17186719616
      }
    } catch (error: any) {
      console.error("Twitter login error:", error);
      toast({
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
    }
  };

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter };
};
