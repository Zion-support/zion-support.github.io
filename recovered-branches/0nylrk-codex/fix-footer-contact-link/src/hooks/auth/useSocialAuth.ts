
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "google"}),
=======
        provider: &quot;google&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      if (error) {
        toast({
          title: &quot;Google login failed&quot;,
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
=======
          variant: &quot;destructive&quot;});
      }
    } catch (error: any) {
      console.error(&quot;Google login error:&quot;, error);
      toast({
        title: &quot;Google login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

export const _useSocialAuth = () => {_const _loginWithGoogle = async () => {
    try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "google"});

      if (error) {_toast({
          title: "Google login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Google login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "facebook"}),
=======
        provider: &quot;facebook&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      if (error) {
        toast({
          title: &quot;Facebook login failed&quot;,
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Facebook login error:", error),
      toast({
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
=======
          variant: &quot;destructive&quot;});
      }
    } catch (error: any) {
      console.error(&quot;Facebook login error:&quot;, error);
      toast({
        title: &quot;Facebook login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _loginWithFacebook = async () => {_try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "facebook"});

      if (error) {_toast({
          title: "Facebook login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Facebook login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "twitter"}),
=======
        provider: &quot;twitter&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      if (error) {
        toast({
          title: &quot;Twitter login failed&quot;,
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
=======
          variant: &quot;destructive&quot;});
      }
    } catch (error: any) {
      console.error(&quot;Twitter login error:&quot;, error);
      toast({
        title: &quot;Twitter login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _loginWithTwitter = async () => {_try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "twitter"});

      if (error) {_toast({
          title: "Twitter login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Twitter login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
},
=======
  return {_loginWithGoogle, _loginWithFacebook, _loginWithTwitter};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
