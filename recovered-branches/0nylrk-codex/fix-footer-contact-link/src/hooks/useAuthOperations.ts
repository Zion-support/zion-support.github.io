
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";

export function useAuthOperations(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode();
  }, []);

  const login = async ({ email, password }: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      // Clean up any stale auth state before login
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
<<<<<<< HEAD
        password});
=======
        password,
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
        return { data: null, error: error.message };
      }

      toast({
        title: "Login successful!",
<<<<<<< HEAD
        description: `Welcome back, ${email}!`});
=======
        description: `Welcome back, ${email}!`,
      });
>>>>>>> origin/auto/autonomy-17186719616

      return { data, error: null };
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
<<<<<<< HEAD
        description: "Failed to sign in. Please check your credentials."});
=======
        description: "Failed to sign in. Please check your credentials.",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return { data: null, error: "Failed to sign in." };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
<<<<<<< HEAD
            display_name: display_name}}});
=======
            display_name: display_name,
          },
        },
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          variant: "destructive",
          title: "Error during signup",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
        return { data: null, error: error.message };
      }

      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data.user.id, email);
      }

      toast({
        title: "Signup successful!",
<<<<<<< HEAD
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
=======
        description: `Welcome, ${display_name}! Please check your email to verify your account.`,
      });
>>>>>>> origin/auto/autonomy-17186719616

      return { data, error: null };
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
<<<<<<< HEAD
        description: "Failed to sign up. Please try again."});
=======
        description: "Failed to sign up. Please try again.",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return { data: null, error: "Failed to sign up." };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
      } else {
        setUser(null); // Clear the user state upon successful logout
        toast({
          title: "Logout successful!",
<<<<<<< HEAD
          description: "You have been successfully logged out."});
=======
          description: "You have been successfully logged out.",
        });
>>>>>>> origin/auto/autonomy-17186719616
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        variant: "destructive",
        title: "Logout failed",
<<<<<<< HEAD
        description: "There was an issue logging you out. Please try again."});
=======
        description: "There was an issue logging you out. Please try again.",
      });
>>>>>>> origin/auto/autonomy-17186719616
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
<<<<<<< HEAD
        redirectTo: `${window.location.origin}/update-password`});
=======
        redirectTo: `${window.location.origin}/update-password`,
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
        return { data: null, error: error.message };
      }

      toast({
        title: "Password reset email sent!",
<<<<<<< HEAD
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
=======
        description: `Please check your email (${email}) for instructions on how to reset your password.`,
      });
>>>>>>> origin/auto/autonomy-17186719616

      return { data, error: null };
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
<<<<<<< HEAD
        description: "Failed to send reset password email. Please try again."});
=======
        description: "Failed to send reset password email. Please try again.",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return { data: null, error: "Failed to send reset password email." };
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true);
    try {
      if (!profileData || !profileData.id) {
        throw new Error("Profile data or user ID is missing.");
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
<<<<<<< HEAD
          headline: profileData.headline})
=======
          headline: profileData.headline,
        })
>>>>>>> origin/auto/autonomy-17186719616
        .eq("id", profileData.id);

      if (error) {
        toast({
          variant: "destructive",
          title: "Failed to update profile",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
        return { error: error.message };
      }

      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
          return { ...prevUser, ...profileData };
        }
        return prevUser;
      });

      toast({
        title: "Profile updated!",
<<<<<<< HEAD
        description: "Your profile has been successfully updated."});
=======
        description: "Your profile has been successfully updated.",
      });
>>>>>>> origin/auto/autonomy-17186719616

      return { error: null };
    } catch (error) {
      console.error("Profile update failed:", error);
      toast({
        variant: "destructive",
        title: "Profile update failed",
<<<<<<< HEAD
        description: "There was an issue updating your profile. Please try again."});
=======
        description: "There was an issue updating your profile. Please try again.",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return { error: "Failed to update profile." };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "google"});
=======
        provider: "google",
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "facebook"});
=======
        provider: "facebook",
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithTwitter = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "twitter"});
=======
        provider: "twitter",
      });
>>>>>>> origin/auto/autonomy-17186719616

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
          description: error.message});
=======
          description: error.message,
        });
>>>>>>> origin/auto/autonomy-17186719616
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithWeb3 = async () => {
    setIsLoading(true);
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        throw new Error("Web3 wallet not found");
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      
      // Fix: Create a proper UserProfile object
      setUser({
        id: address,
        displayName: address,
        profileComplete: true,
        email: '', // Add required fields
        userType: 'talent', // Default user type
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      } as UserProfile);
      
      toast({ title: 'Wallet connected', description: address });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
<<<<<<< HEAD
    loginWithWeb3};
=======
    loginWithWeb3,
  };
>>>>>>> origin/auto/autonomy-17186719616
}
