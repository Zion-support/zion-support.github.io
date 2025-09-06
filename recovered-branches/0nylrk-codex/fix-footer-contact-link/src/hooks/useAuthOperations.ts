
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
    checkUrlForReferralCode()
  }, []),

  const login = async ({ email, password }: { email: string, password: string}) => {
    setIsLoading($2);
    try {
      // Clean up any stale auth state before login
      cleanupAuthState($2);
      const { data, error } = await supabase.auth.signInWithPassword($2);
      if (error) {
        toast($2);
        return { data: null, error: error.message }
      }

      toast($2);
      return { data, error: null}
    } catch (error) {
      toast($2);
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading(false)
    }
  },

  const signup = async ({ email, password, display_name }) => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase.auth.signUp($2);
      if (error) {
        toast($2);
        return { data: null, error: error.message }
      }

      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data.user.id, email)
      }

      toast($2);
      return { data, error: null}
    } catch (error) {
      toast($2);
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading(false)
    }
  },

  const logout = async () => {
    setIsLoading($2);
    try {
      const { error } = await supabase.auth.signOut($2);
      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!",
          description: "You have been successfully logged out."})
      }
    } catch (error) {
      console.error($2);
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
    }
  },

  const resetPassword = async (email: string) => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail($2);
      if (error) {
        toast($2);
        return { data: null, error: error.message }
      }

      toast({
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`}),

      return { data, error: null}
    } catch (error) {
      toast($2);
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading(false)
    }
  },

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading($2);
    try {
      if (!profileData || !profileData.id) {
        throw new Error("Profile data or user ID is missing.")
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
          headline: profileData.headline})
        .eq($2);
      if (error) {
        toast($2);
        return { error: error.message }
      }

      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
          return { ...prevUser, ...profileData }
        }
        return prevUser
      }),

      toast($2);
      return { error: null}
    } catch (error) {
      console.error($2);
      toast($2);
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithGoogle = async () => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth($2);
      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithFacebook = async () => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth($2);
      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithTwitter = async () => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth($2);
      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  },

  const loginWithWeb3 = async () => {
    setIsLoading($2);
    try {
      const ethereum = $2;
      if (!ethereum) {
        throw new Error("Web3 wallet not found")
      }
      const accounts = await ethereum.request($2);
      const address = $2;
      await ethereum.request($2);
      // Fix: Create a proper UserProfile object
      setUser({
        id: address,
        displayName: address,
        profileComplete: true,
        email: '', // Add required fields
        userType: 'talent', // Default user type
        createdAt: new Date().toISOString($2);
        updatedAt: new Date().toISOString()
      } as UserProfile),
      
      toast({ title: 'Wallet connected', description: address})
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Web3 login failed',
        description: error ?.message || 'Unable to connect wallet'
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
}
