
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: &quot;google&quot;});

      if (error) {
        toast({
          title: &quot;Google login failed&quot;,
          description: error.message,
          variant: &quot;destructive&quot;});
      }
    } catch (error: any) {
      console.error(&quot;Google login error:&quot;, error);
      toast({
        title: &quot;Google login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
    }
  };

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: &quot;facebook&quot;});

      if (error) {
        toast({
          title: &quot;Facebook login failed&quot;,
          description: error.message,
          variant: &quot;destructive&quot;});
      }
    } catch (error: any) {
      console.error(&quot;Facebook login error:&quot;, error);
      toast({
        title: &quot;Facebook login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
    }
  };

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: &quot;twitter&quot;});

      if (error) {
        toast({
          title: &quot;Twitter login failed&quot;,
          description: error.message,
          variant: &quot;destructive&quot;});
      }
    } catch (error: any) {
      console.error(&quot;Twitter login error:&quot;, error);
      toast({
        title: &quot;Twitter login failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
    }
  };

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter };
};
