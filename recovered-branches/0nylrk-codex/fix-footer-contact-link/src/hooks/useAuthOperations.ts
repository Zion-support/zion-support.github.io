
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import type { UserProfile } from "@/types/auth",
import { toast } from "@/hooks/use-toast",
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils",
import { cleanupAuthState } from "@/utils/authUtils",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { trackReferral, checkUrlForReferralCode } from &quot;@/utils/referralUtils&quot;;
import { cleanupAuthState } from &quot;@/utils/authUtils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useAuthOperations(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode()
  }, []),

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading(true),
=======
import type {_UserProfile} from "@/types/auth";

export function useAuthOperations(_setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>, _setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) {_// Check for referral code in window.URL when the hook is first used
  useEffect__(() => {
    checkUrlForReferralCode();}, []);

  const _login = async (_{_email, _password}: {_email: string; password: string}) => {_setIsLoading(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    try {
      // Clean up any stale auth state before login
      cleanupAuthState(),
      
<<<<<<< HEAD
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
<<<<<<< HEAD
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
        return { data: null, error: error.message }
      }

      toast({
        title: "Login successful!",
        description: `Welcome back, ${email}!`}),
=======
          variant: &quot;destructive&quot;,
          title: &quot;Oh no! Something went wrong.&quot;,
          description: error.message});
        return { data: null, error: error.message };
      }

      toast({
        title: &quot;Login successful!&quot;,
        description: `Welcome back, ${email}!`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      return { data, error: null }
    } catch (error) {
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials."}),
      return { data: null, error: "Failed to sign in." }
=======
        variant: &quot;destructive&quot;,
        title: &quot;Oh no! Something went wrong.&quot;,
        description: &quot;Failed to sign in. Please check your credentials.&quot;});
      return { data: null, error: &quot;Failed to sign in.&quot; };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true),
=======
      const { data, _error} = await supabase.auth.signInWithPassword({_email, _password});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
        return {_data: null, _error: error.message};
      }

      toast({_title: "Login successful!", _description: `Welcome back, _${email}!`});

      return {_data, _error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Oh no! Something went wrong.", _description: "Failed to sign in. Please check your credentials."});
      return {_data: null, _error: "Failed to sign in."};
    } finally {_setIsLoading(false);}
  };

  const _signup = async (_{_email, _password, _display_name}) => {_setIsLoading(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    try {
      const { data, _error} = await supabase.auth.signUp({_email, _password, _options: {
          data: {
            display_name: display_name}}}),

<<<<<<< HEAD
      if (error) {
        toast({
<<<<<<< HEAD
          variant: "destructive",
          title: "Error during signup",
          description: error.message}),
        return { data: null, error: error.message }
=======
          variant: &quot;destructive&quot;,
          title: &quot;Error during signup&quot;,
          description: error.message});
        return { data: null, error: error.message };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data.user.id, email)
      }

      toast({
<<<<<<< HEAD
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`}),
=======
        title: &quot;Signup successful!&quot;,
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      return { data, error: null }
    } catch (error) {
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign up. Please try again."}),
      return { data: null, error: "Failed to sign up." }
=======
        variant: &quot;destructive&quot;,
        title: &quot;Oh no! Something went wrong.&quot;,
        description: &quot;Failed to sign up. Please try again.&quot;});
      return { data: null, error: &quot;Failed to sign up.&quot; };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const logout = async () => {
    setIsLoading(true),
    try {
      const { error } = await supabase.auth.signOut(),
=======
      if (error) {_toast({
          variant: "destructive", _title: "Error during signup", _description: error.message});
        return {_data: null, _error: error.message};
      }

      // Add this after successful signup
      if (data?.user) {_// Track referral if there was a referral code
        await trackReferral(data.user.id, _email);}

      toast({_title: "Signup successful!", _description: `Welcome, _${display_name}! Please check your email to verify your account.`});

      return {_data, _error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Oh no! Something went wrong.", _description: "Failed to sign up. Please try again."});
      return {_data: null, _error: "Failed to sign up."};
    } finally {_setIsLoading(false);}
  };

  const _logout = async () => {_setIsLoading(true);
    try {
      const { error} = await supabase.auth.signOut();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      } else {_setUser(null); // Clear the user state upon successful logout
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
=======
          variant: &quot;destructive&quot;,
          title: &quot;Oh no! Something went wrong.&quot;,
          description: error.message});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
<<<<<<< HEAD
          title: "Logout successful!",
          description: "You have been successfully logged out."})
      }
    } catch (error) {
      console.error("Logout failed:", error),
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: "There was an issue logging you out. Please try again."})
=======
          title: &quot;Logout successful!&quot;,
          description: &quot;You have been successfully logged out.&quot;});
      }
    } catch (error) {
      console.error(&quot;Logout failed:&quot;, error);
      toast({
        variant: &quot;destructive&quot;,
        title: &quot;Logout failed&quot;,
        description: &quot;There was an issue logging you out. Please try again.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const resetPassword = async (email: string) => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
<<<<<<< HEAD
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
        return { data: null, error: error.message }
      }

      toast({
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`}),
=======
          variant: &quot;destructive&quot;,
          title: &quot;Oh no! Something went wrong.&quot;,
          description: error.message});
        return { data: null, error: error.message };
      }

      toast({
        title: &quot;Password reset email sent!&quot;,
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      return { data, error: null }
    } catch (error) {
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again."}),
      return { data: null, error: "Failed to send reset password email." }
=======
        variant: &quot;destructive&quot;,
        title: &quot;Oh no! Something went wrong.&quot;,
        description: &quot;Failed to send reset password email. Please try again.&quot;});
      return { data: null, error: &quot;Failed to send reset password email.&quot; };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true),
    try {
      if (!profileData || !profileData.id) {
<<<<<<< HEAD
        throw new Error("Profile data or user ID is missing.")
=======
        throw new Error(&quot;Profile data or user ID is missing.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      const { error } = await supabase
        .from(&quot;profiles&quot;)
        .update({
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
          headline: profileData.headline})
<<<<<<< HEAD
        .eq("id", profileData.id),

      if (error) {
        toast({
          variant: "destructive",
          title: "Failed to update profile",
          description: error.message}),
        return { error: error.message }
=======
        .eq(&quot;id&quot;, profileData.id);

      if (error) {
        toast({
          variant: &quot;destructive&quot;,
          title: &quot;Failed to update profile&quot;,
          description: error.message});
        return { error: error.message };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
          return { ...prevUser, ...profileData }
=======
          title: "Logout successful!", _description: "You have been successfully logged out."});
      }
    } catch (error) {_toast({
        variant: "destructive", _title: "Logout failed", _description: "There was an issue logging you out. Please try again."});
    } finally {_setIsLoading(false);}
  };

  const _resetPassword = async (_email: string) => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.resetPasswordForEmail(email, {_redirectTo: `${window.location.origin}/update-password`});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
        return {_data: null, _error: error.message};
      }

      toast({_title: "Password reset email sent!", _description: `Please check your email (${email}) for instructions on how to reset your password.`});

      return {_data, _error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Oh no! Something went wrong.", _description: "Failed to send reset password email. Please try again."});
      return {_data: null, _error: "Failed to send reset password email."};
    } finally {_setIsLoading(false);}
  };

  const _updateProfile = async (_profileData: Partial<UserProfile>) => {_setIsLoading(true);
    try {
      if (!profileData || !profileData.id) {
        throw new Error("Profile data or user ID is missing.");}

      const {_error} = await supabase
        .from("profiles")
        .update({_display_name: profileData.displayName, _user_type: profileData.userType, _profile_complete: profileData.profileComplete, _bio: profileData.bio, _avatar_url: profileData.avatarUrl, _headline: profileData.headline})
        .eq("id", profileData.id);

      if (error) {_toast({
          variant: "destructive", _title: "Failed to update profile", _description: error.message});
        return {_error: error.message};
      }

      // Optimistically update the local user state
      setUser(_(prevUser) => {_if (prevUser) {
          return { ...prevUser, _...profileData};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        return prevUser
      }),

<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Profile updated!",
        description: "Your profile has been successfully updated."}),
=======
        title: &quot;Profile updated!&quot;,
        description: &quot;Your profile has been successfully updated.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      return { error: null }
    } catch (error) {
<<<<<<< HEAD
      console.error("Profile update failed:", error),
      toast({
        variant: "destructive",
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again."}),
      return { error: "Failed to update profile." }
=======
      console.error(&quot;Profile update failed:&quot;, error);
      toast({
        variant: &quot;destructive&quot;,
        title: &quot;Profile update failed&quot;,
        description: &quot;There was an issue updating your profile. Please try again.&quot;});
      return { error: &quot;Failed to update profile.&quot; };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithGoogle = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "google"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
=======
        provider: &quot;google&quot;});

      if (error) {
        toast({
          variant: &quot;destructive&quot;,
          title: &quot;Oh no! Something went wrong.&quot;,
          description: error.message});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithFacebook = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "facebook"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
=======
        provider: &quot;facebook&quot;});

      if (error) {
        toast({
          variant: &quot;destructive&quot;,
          title: &quot;Oh no! Something went wrong.&quot;,
          description: error.message});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithTwitter = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "twitter"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
=======
        provider: &quot;twitter&quot;});

      if (error) {
        toast({
          variant: &quot;destructive&quot;,
          title: &quot;Oh no! Something went wrong.&quot;,
          description: error.message});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
<<<<<<< HEAD
        throw new Error("Web3 wallet not found")
=======
        throw new Error(&quot;Web3 wallet not found&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0],
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      }),
      
      // Fix: Create a proper UserProfile object
      setUser({
        id: address,
        displayName: address,
        profileComplete: true,
        email: '', // Add required fields
        userType: 'talent', // Default user type
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      } as UserProfile),
      
      toast({ title: 'Wallet connected', description: address })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet'
      })
    } finally {
      setIsLoading(false)
    }
  },

  return {
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3}
=======
      toast({_title: "Profile updated!", _description: "Your profile has been successfully updated."});

      return {_error: null};
    } catch (error) {_toast({
        variant: "destructive", _title: "Profile update failed", _description: "There was an issue updating your profile. Please try again."});
      return {_error: "Failed to update profile."};
    } finally {_setIsLoading(false);}
  };

  const _loginWithGoogle = async () => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.signInWithOAuth({_provider: "google"});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      }
    } finally {_setIsLoading(false);}
  };

  const _loginWithFacebook = async () => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.signInWithOAuth({_provider: "facebook"});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      }
    } finally {_setIsLoading(false);}
  };

  const _loginWithTwitter = async () => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase.auth.signInWithOAuth({_provider: "twitter"});

      if (error) {_toast({
          variant: "destructive", _title: "Oh no! Something went wrong.", _description: error.message});
      }
    } finally {_setIsLoading(false);}
  };

  const _loginWithWeb3 = async () => {_setIsLoading(true);
    try {
      const _ethereum = (window as any).ethereum;
      if (!ethereum) {
        throw new Error("Web3 wallet not found");}
      const _accounts = await ethereum.request({_method: 'eth_requestAccounts'});
      const _address = accounts[0];
      await ethereum.request({_method: 'personal_sign', _params: [address, _address]});
      
      // Fix: Create a proper UserProfile object
      setUser({_id: address, _displayName: address, _profileComplete: true, _email: '', _// Add required fields
        userType: 'talent', _// Default user type
        createdAt: new Date().toISOString(), _updatedAt: new Date().toISOString()} as UserProfile);
      
      toast({_title: 'Wallet connected', _description: address});
    } catch (error: unknown) {_toast({
        variant: 'destructive', _title: 'Web3 login failed', _description: error?.message || 'Unable to connect wallet'});
    } finally {_setIsLoading(false);}
  };

  return {_login, _signup, _logout, _resetPassword, _updateProfile, _loginWithGoogle, _loginWithFacebook, _loginWithTwitter, _loginWithWeb3};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
