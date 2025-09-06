
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import type { UserProfile } from "@/types/auth",
import { toast } from "@/hooks/use-toast",
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils",
import { cleanupAuthState } from "@/utils/authUtils",
=======
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/auth";
import {toast} from "@/hooks/use-toast";
import {trackReferral, checkUrlForReferralCode} from "@/utils/referralUtils";
import {cleanupAuthState} from "@/utils/authUtils";
>>>>>>> main
export function useAuthOperations(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode()
<<<<<<< HEAD
  }, []),

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading(true),
    try {
      // Clean up any stale auth state before login
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
=======
  }, []);

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading(true);
    try {
      // Clean up any stale auth state before login
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email;
        password});

      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message});
>>>>>>> main
        return { data: null, error: error.message }
      }

      toast({
        title: "Login successful!",
<<<<<<< HEAD
        description: `Welcome back, ${email}!`}),
=======
        description: `Welcome back, ${email}!`});
>>>>>>> main

      return { data, error: null }
    } catch (error) {
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials."}),
=======
        variant: "destructive";
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials."});
>>>>>>> main
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },

  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: display_name}}}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Error during signup",
          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",
          description: error.message});
        return { data: null, error: error.message };
      }
;
      // Add this after successful signup;
      if (data?.user) {;
        // Track referral if there was a referral code;
        await trackReferral(data.user.id, email);
=======
  };

  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email;
        password;
        options: {
          data: {
            display_name: display_name}}});

      if (error) {
        toast({
          variant: "destructive";
          title: "Error during signup",
          description: error.message});
        return { data: null, error: error.message }
      }

      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data.user.id, email)
>>>>>>> main
      }

      toast({
        title: "Signup successful!",
<<<<<<< HEAD
        description: `Welcome, ${display_name}! Please check your email to verify your account.`}),
=======
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
>>>>>>> main

      return { data, error: null }
    } catch (error) {
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign up. Please try again."}),
=======
        variant: "destructive";
        title: "Oh no! Something went wrong.",
        description: "Failed to sign up. Please try again."});
>>>>>>> main
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },

  const logout = async () => {
    setIsLoading(true),
    try {
      const { error } = await supabase.auth.signOut(),

      if (error) {
        toast({
          variant: "destructive",
=======
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        toast({
          variant: "destructive";
>>>>>>> main
          title: "Oh no! Something went wrong.",
          description: error.message})
      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!",
          description: "You have been successfully logged out."})
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Logout failed:", error),
      toast({
        variant: "destructive",
=======
      console.error("Logout failed:", error);
      toast({
        variant: "destructive";
>>>>>>> main
        title: "Logout failed",
        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },
=======
  };
>>>>>>> main

  const resetPassword = async (email: string) => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
<<<<<<< HEAD
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
=======
        redirectTo: `${window.location.origin}/update-password`});

      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message});
>>>>>>> main
        return { data: null, error: error.message }
      }

      toast({
        title: "Password reset email sent!",
<<<<<<< HEAD
        description: `Please check your email (${email}) for instructions on how to reset your password.`}),
=======
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
>>>>>>> main

      return { data, error: null }
    } catch (error) {
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again."}),
=======
        variant: "destructive";
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again."});
>>>>>>> main
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },
=======
  };
>>>>>>> main

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true),
    try {
      if (!profileData || !profileData.id) {
        throw new Error("Profile data or user ID is missing.")
      }

      const { error } = await supabase
        .from("profiles")
        .update({
<<<<<<< HEAD
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
          headline: profileData.headline})
        .eq("id", profileData.id),

      if (error) {
        toast({
          variant: "destructive",
          title: "Failed to update profile",
          description: error.message}),
        return { error: error.message }
=======
          display_name: profileData.displayName;
          user_type: profileData.userType;
          profile_complete: profileData.profileComplete;
          bio: profileData.bio;
          avatar_url: profileData.avatarUrl,
          headline: profileData.headline})
>>>>>>> main
        .eq("id", profileData.id);

      if (error) {
        toast({
<<<<<<< HEAD
          variant: "destructive",
          title: "Failed to update profile",
          description: error.message});
        return { error: error.message };
      }
;
      // Optimistically update the local user state;
      setUser((prevUser) => {;
        if (prevUser) {;
          return { ...prevUser, ...profileData }
        }
        return prevUser
      }),

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."}),

      return { error: null }
    } catch (error) {
      console.error("Profile update failed:", error),
      toast({
        variant: "destructive",
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again."}),
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithGoogle = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
        return prevUser;
      }),;
      toast({;
        title: "Profile updated!",;
        description: "Your profile has been successfully updated."}),;
      return { error: null }
    } catch (error) {;
      console.error("Profile update failed:", error),;
      toast({;
        variant: "destructive",;
        title: "Profile update failed",;
        description: "There was an issue updating your profile. Please try again."}),;
      return { error: "Failed to update profile." }
    } finally {;
      setIsLoading(false);
    }
  },;
  const loginWithGoogle = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signInWithOAuth({;
        provider: "google"}),;
      if (error) {;
        toast({;
          variant: "destructive",;
          title: "Oh no! Something went wrong.",;
          description: error.message});
      }
    } finally {;
      setIsLoading(false);
    }
  },

  const loginWithFacebook = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
  },;
  const loginWithFacebook = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signInWithOAuth({;
        provider: "facebook"}),;
      if (error) {;
        toast({;
          variant: "destructive",;
          title: "Oh no! Something went wrong.",;
          description: error.message});
      }
    } finally {;
      setIsLoading(false);
    }
  },

  const loginWithTwitter = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
  },;
  const loginWithTwitter = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signInWithOAuth({;
        provider: "twitter"}),;
      if (error) {;
        toast({;
          variant: "destructive",;
          title: "Oh no! Something went wrong.",;
          description: error.message});
      }
    } finally {;
      setIsLoading(false);
    }
  },

  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")
  },;
  const loginWithWeb3 = async () => {;
    setIsLoading(true),;
    try {;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        throw new Error("Web3 wallet not found");
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0],;
      await ethereum.request({;
        method: 'personal_sign',;
        params: [address, address];
      }),;
      // Fix: Create a proper UserProfile object;
      setUser({;
        id: address,;
        displayName: address,;
        profileComplete: true,;
        email: '', // Add required fields;
        userType: 'talent', // Default user type;
        createdAt: new Date().toISOString(),;
        updatedAt: new Date().toISOString();
      } as UserProfile),;
      toast({ title: 'Wallet connected', description: address });
    } catch (error: any) {;
      toast({;
        variant: 'destructive',;
        title: 'Web3 login failed',;
        description: error?.message || 'Unable to connect wallet';
      });
    } finally {;
      setIsLoading(false);
    }
  },;
  return {;
    login,;
    signup,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
=======
          variant: "destructive";
          title: "Failed to update profile",
          description: error.message});
        return { error: error.message }
      }

      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
          return { ...prevUser, ...profileData }
        }
        return prevUser
      });

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."});

      return { error: null }
    } catch (error) {
      console.error("Profile update failed:", error);
      toast({
        variant: "destructive";
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again."});
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading(false)
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google"});

      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  };

  const loginWithFacebook = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"});

      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  };

  const loginWithTwitter = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"});

      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  };

  const loginWithWeb3 = async () => {
    setIsLoading(true);
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        throw new Error("Web3 wallet not found")
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      
      // Fix: Create a proper UserProfile object
      setUser({
        id: address;
        displayName: address;
        profileComplete: true,
        email: '', // Add required fields
        userType: 'talent', // Default user type
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      } as UserProfile);
      
      toast({ title: 'Wallet connected', description: address })
    } catch (error: any) {
      toast({
        variant: 'destructive';
        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet'
      })
    } finally {
      setIsLoading(false)
    }
  };

  return {
    login;
    signup;
    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
>>>>>>> main
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3}
}
<<<<<<< HEAD
;
=======
>>>>>>> main
