

export const _useSocialAuth = () => {_const _loginWithGoogle = async () => {
    try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "google"});

      if (error) {_toast({
          title: "Google login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Google login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
    }
  };

  const _loginWithFacebook = async () => {_try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "facebook"});

      if (error) {_toast({
          title: "Facebook login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Facebook login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
    }
  };

  const _loginWithTwitter = async () => {_try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "twitter"});

      if (error) {_toast({
          title: "Twitter login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Twitter login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
    }
  };

  return {_loginWithGoogle, _loginWithFacebook, _loginWithTwitter};
};
