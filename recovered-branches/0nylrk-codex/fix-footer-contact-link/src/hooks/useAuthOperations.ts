
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/auth";
import {toast} from "@/hooks/use-toast";
import {trackReferral, checkUrlForReferralCode} from "@/utils/referralUtils";
import {cleanupAuthState} from "@/utils/authUtils";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";
<<<<<<< HEAD
=======
=======
import type { UserProfile } from "@/types/auth",
import { toast } from "@/hooks/use-toast",
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils",
import { cleanupAuthState } from "@/utils/authUtils",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export function useAuthOperations(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>

  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode()
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import type { UserProfile } from "@/types / auth";
import { toast } from '@/hooks / use - toast';
import { track_referral, checkUrlForReferralCode } from '@/utils / referral_utils';
import { cleanupAuthState } from '@/utils / auth_utils';
export /**
 * useAuthOperations - Function description
 */
function useAuthOperations() {
  // Check for referral code in URL when the hook is first used;
  useEffect (() => {
    checkUrlForReferralCode ();
  }, []);
;
  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
        email;
        password});
      if (error) {
        toast({
      // Clean up any stale auth state before login;
      cleanupAuthState ();
;
      const { data, error } = await supabase.auth.signInWithPassword ({
        email;
        password});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
        return { data: null, error: error.message }
      }
      toast({
        title: "Login successful!"
        description: `Welcome back, ${email}!`});
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign in. Please check your credentials."});
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading (false);
    }
  }
  const signup = async ({ email, password, display_name }) => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase && supabase.auth.signUp({
        email;
        password;
        options: {
          data: {
            display_name: display_name}}});
      if (error) {
        toast({
<<<<<<< HEAD
          variant: "destructive";
          title: "Error during signup"
=======
          variant: "destructive",
          title: "Error during signup",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          description: error.message});
        return { data: null, error: error.message }
      }
      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data && data.user.id, email)
      }
      toast({
        title: "Signup successful!"
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign up. Please try again."});
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading (false);
    }
  }
  const logout = async () => {
    setIsLoading (true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!"
          description: "You have been successfully logged out."})
      }
    } catch (error) {
      console && console.error("Logout failed:", error);
      toast({
        variant: "destructive";
        title: "Logout failed"
        description: "There was an issue logging you out. Please try again."})
      const { error } = await supabase.auth.sign_out ();
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message});
      } else {
        set_user (null), // Clear the user state upon successful logout;
        toast ({
          title: "Logout successful!",
          description: "You have been successfully logged out."});
      }
    } catch (error) {
      console.error ("Logout failed:", error);
      toast ({
        variant: "destructive";
        title: "Logout failed",
        description: "There was an issue logging you out. Please try again."});
    } finally {
      setIsLoading (false);
    }
  }
  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
        return { data: null, error: error.message }
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
      }
      toast({
        title: "Password reset email sent!"
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to send reset password email. Please try again."});
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading (false);
    }
  }
  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {
      if (!profileData |!profileData.id) {
        throw new Error("Profile data or user ID is missing.")
      }
      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: profileData.displayName;
          user_type: profileData.userType;
          profile_complete: profileData.profileComplete;
          bio: profileData.bio;
          avatar_url: profileData.avatarUrl
          headline: profileData.headline})
        .eq("id", profileData.id);
      if (error) {
        toast({
          variant: "destructive";
          title: "Failed to update profile"
          description: error.message});
        return { error: error.message }
          variant: "destructive";
          title: "Failed to update profile",
          description: error && error.message});
        return { error: error && error.message }
      }
<<<<<<< HEAD
      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
=======


          variant: "destructive",
          title: "Failed to update profile",
          description: error.message});
<<<<<<< HEAD
        return { error: error.message };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
        return { error: error.message }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
<<<<<<< HEAD
=======
=======
        return { error: error.message };
      }
;
      // Optimistically update the local user state;
      setUser((prevUser) => {;
        if (prevUser) {;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          return { ...prevUser, ...profileData }
        }
        return prev_user;
      });
      toast({
        title: "Profile updated!"
        description: "Your profile has been successfully updated."});
      return { error: null }
    } catch (error) {
      console && console.error("Profile update failed:", error);
      toast({
        variant: "destructive";
        title: "Profile update failed"
        description: "There was an issue updating your profile. Please try again."});
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading (false);
    }
  }
  const loginWithGoogle = async () => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase && supabase.auth.signInWithOAuth({
        provider: "google"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
      const { data, error } = await supabase.auth.signInWithOAuth ({
        provider: "google"});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message});
      }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
=======

;

=======

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      }
    } finally {
      setIsLoading(false)
    }
  };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase && supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
      const { data, error } = await supabase.auth.signInWithOAuth ({
        provider: "facebook"});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      const { data, error } = await supabase.auth.signInWithOAuth({

        provider: "facebook"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  }
  const loginWithTwitter = async () => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase && supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      const { data, error } = await supabase.auth.signInWithOAuth ({
        provider: "twitter"});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  },
=======
  };
=======
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },
=======
  };
=======
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const loginWithWeb3 = async () => {
    setIsLoading (true);
    try {
      const ethereum = (window as any).ethereum;
      // Check condition
if ( {) {
  $2
}
        throw new Error ("Web3 wallet not found");
      }
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign'
        params: [address, address]
      });
      // Fix: Create a proper UserProfile object
      setUser({
        id: address;
        displayName: address;
        profileComplete: true
        email: '', // Add required fields
        userType: 'talent', // Default user type
        createdAt: new Date().toISOString()
        updatedAt: new Date().toISOString()
      } as UserProfile);
      toast({ title: 'Wallet connected', description: address })
      const accounts = await ethereum.request ({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request ({
        method: 'personal_sign',
        params: [address, address];
      });
;
      // Fix: Create a proper UserProfile object;
      set_user ({
        id: address;
        display_name: address;
        profile_complete: true,
        email: '', // Add required fields;
        user_type: 'talent', // Default user type;
        created_at: new Date ().toISOString (),
        updated_at: new Date ().toISOString ();
      } as UserProfile);
;
      toast ({ title: 'Wallet connected', description: address });
    } catch (error: any) {
      toast ({
        variant: 'destructive';
        title: 'Web3 login failed'
        description: error?.message |'Unable to connect wallet'
      })
    } finally {
      setIsLoading (false);
    }
  }
  return {
    login;
    signup;
    logout;
    reset_password;
    update_profile;
    loginWithGoogle;
<<<<<<< HEAD
=======
=======

  },
=======
  };
=======
  },

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
}