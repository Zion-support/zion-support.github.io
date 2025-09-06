<<<<<<< HEAD

import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/auth";
import {toast} from "@/hooks/use-toast";
import {trackReferral, checkUrlForReferralCode} from "@/utils/referralUtils";
import {cleanupAuthState} from "@/utils/authUtils";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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


  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
      // Clean up any stale auth state before login
<<<<<<< HEAD

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
=======
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
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
        email;
        password});
      if (error) {
        toast({

      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
        email;
        password});
      if (error) {
        toast({
      }

      toast ({
        title: "Login successful!",
        description: `Welcome back, ${email}!`});
;

      }
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign in. Please check your credentials."});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const signup = async ({ email, password, display_name }) => {
    setIsLoading (true);
    try {
        email;
        password;
        options: {
          data: {
<<<<<<< HEAD

=======
          variant: "destructive";
          title: "Error during signup"
            display_name: display_name}}}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Error during signup",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",
<<<<<<< HEAD
          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          description: error.message});
        return { data: null, error: error.message }
          title: "Error during signup",
          description: error && error.message});
        return { data: null, error: error && error.message }
      }

      // Add this after successful signup;
      // Check condition
if ( {) {
  $2
}
        // Track referral if there was a referral code;
        await track_referral (data.user.id, email);
      }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          variant: "destructive";
      }
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign up. Please try again."});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const logout = async () => {
    setIsLoading (true);
    try {
=======
      const { error } = await supabase.auth.signOut(),


      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          description: error.message})

      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!"
          description: "You have been successfully logged out."})
      }
    } catch (error) {
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
<<<<<<< HEAD

        return { data: null, error: error.message }
      }
      toast({

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message}),
        return { data: null, error: error.message }
      }
      toast({
        title: "Password reset email sent!"
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
;

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
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
      }
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to send reset password email. Please try again."});
<<<<<<< HEAD
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
=======
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading (false);
    }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {

      if (!profileData || !profileData && profileData.id) {

        throw new Error("Profile data or user ID is missing.")
      }
      const { error } = await supabase
        .from("profiles")
        .update({
<<<<<<< HEAD

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
=======
          variant: "destructive";
          title: "Failed to update profile"
          description: error.message});
        return { error: error.message }
          variant: "destructive",
          title: "Failed to update profile",
          description: error.message});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          return { ...prevUser, ...profileData }
      // Optimistically update the local user state;
      set_user ((prev_user) => {
        // Check condition
if ( {) {
  $2
}
          return { ...prev_user, ...profile_data }
        }
      }
        }
        return prev_user;
      });
<<<<<<< HEAD
      toast({
        title: "Profile updated!"
        description: "Your profile has been successfully updated."});
      }),

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."}),



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        variant: "destructive";
        title: "Profile update failed"
        description: "There was an issue updating your profile. Please try again."});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD

      }
    } finally {
      setIsLoading (false);
    }
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const loginWithGoogle = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD

=======
        provider: "google"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

  }
  const loginWithGoogle = async () => {
    setIsLoading (true);
    try {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  };
  },


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
      }
    } finally {
      setIsLoading (false);
    }
  const loginWithTwitter = async () => {
    setIsLoading (true);
    try {
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
  };
  },

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const loginWithTwitter = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({

<<<<<<< HEAD
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
=======
      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    } finally {
      setIsLoading (false);
    }
  }
  },
  };
  },

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const loginWithWeb3 = async () => {
    setIsLoading (true);
    try {
=======
  }
  const loginWithWeb3 = async () => {
    setIsLoading (true);
    try {
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")
      }
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } catch (error: any) {
      toast ({
        variant: 'destructive';
    } finally {
      setIsLoading (false);
    }
  }
  return {
    login;
    signup;
    logout;
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
