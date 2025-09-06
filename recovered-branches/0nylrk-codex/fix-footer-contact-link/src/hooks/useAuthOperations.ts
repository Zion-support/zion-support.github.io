
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/auth";
import {toast} from "@/hooks/use-toast";
import {trackReferral, checkUrlForReferralCode} from "@/utils/referralUtils";
import {cleanupAuthState} from "@/utils/authUtils";
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";
import type { UserProfile } from "@/types/auth",
import { toast } from "@/hooks/use-toast",
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils",
import { cleanupAuthState } from "@/utils/authUtils",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function useAuthOperations(

  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,
  setIsLoading: React && React.Dispatch<React && React.SetStateAction<boolean>>

) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
=======

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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
      // Clean up any stale auth state before login

          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
      toast({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading (false);
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const signup = async ({ email, password, display_name }) => {
    setIsLoading (true);
    try {

      const { data, error } = await supabase.auth.sign_up ({

        email;
        password;
        options: {
          data: {

          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",
          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          description: error.message});
        return { data: null, error: error.message }
=======
          title: "Error during signup",
          description: error && error.message});
        return { data: null, error: error && error.message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }

      // Add this after successful signup;
      // Check condition
if ( {) {
  $2
}
        // Track referral if there was a referral code;
        await track_referral (data.user.id, email);
      }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading (false);
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const logout = async () => {
    setIsLoading (true);
    try {

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

        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
    }
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {

        return { data: null, error: error.message }
      }
      toast({

          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message}),
        return { data: null, error: error.message }
      }
      toast({
        title: "Password reset email sent!"
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
;

      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to send reset password email. Please try again."});
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again."}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {

      if (!profileData || !profileData && profileData.id) {

        throw new Error("Profile data or user ID is missing.")
      }
      const { error } = await supabase
        .from("profiles")
        .update({

          headline: profileData.headline})
        .eq("id", profileData.id),


          headline: profileData.headline})
        .eq("id", profileData.id);
      if (error) {
        toast({

          return { ...prevUser, ...profileData }
        }
        return prevUser

      }


          variant: "destructive",
          title: "Failed to update profile",
          description: error.message});
        return { error: error.message };
        return { error: error.message }
      }
      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
        return { error: error.message };
      }
;
      // Optimistically update the local user state;
      setUser((prevUser) => {;
        if (prevUser) {;
          return { ...prevUser, ...profileData }
        }
        return prevUser
      });
      toast({
        title: "Profile updated!"
        description: "Your profile has been successfully updated."});
      }),

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."}),



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading (false);
    }

      }
    } finally {
      setIsLoading (false);
    }
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const loginWithGoogle = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
    } finally {
      setIsLoading (false);
    }
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  };
  },

<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const loginWithTwitter = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
    } finally {
      setIsLoading (false);
    }
  }
  },
  };
  },

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const loginWithWeb3 = async () => {
    setIsLoading (true);
    try {
    } catch (error: any) {
      toast ({
        variant: 'destructive';

        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet';
      });

    } finally {
      setIsLoading (false);
    }
  }

;

  return {
    login;
    signup;
    logout;
    reset_password;
    update_profile;
    loginWithGoogle;

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
<<<<<<< HEAD
