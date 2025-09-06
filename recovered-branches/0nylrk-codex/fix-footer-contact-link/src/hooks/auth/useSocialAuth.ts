<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        toast({
          title: 'Google login failed',
          description: error.message,
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('Google login error:', error);
      toast({
        title: 'Google login failed',
        description: error.message || 'An unexpected error occurred',
        variant: 'destructive',
      });
    }
  };

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });

      if (error) {
        toast({
          title: 'Facebook login failed',
          description: error.message,
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('Facebook login error:', error);
      toast({
        title: 'Facebook login failed',
        description: error.message || 'An unexpected error occurred',
        variant: 'destructive',
      });
    }
  };

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
      });

      if (error) {
        toast({
          title: 'Twitter login failed',
          description: error.message,
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('Twitter login error:', error);
      toast({
        title: 'Twitter login failed',
        description: error.message || 'An unexpected error occurred',
        variant: 'destructive',
      });
    }
  };

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter };
=======
 export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
  try {
  const {
  error 
}= await supabase.auth.signInWithOAuth ({
  if (error) {
  toast ({
  title: "Google login failed";
description: error.message;
}
};
if (error) {
  toast ({
  title: "Facebook login failed";
description: error.message;
}
};
if (error) {
  toast ({
  title: "Twitter login failed";
description: error.message;
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
