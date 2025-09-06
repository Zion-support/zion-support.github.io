

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",

export function useAuthOperations(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>

  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading(true),
    try {
      // Clean up any stale auth state before login

        return { data: null, error: error.message }
      }
      toast({

      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading(false)
    }

  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {

          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",

          description: error.message});
        return { data: null, error: error.message };
      }
      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data.user.id, email)
      }

      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading(false)
    }

  const logout = async () => {
    setIsLoading(true),
    try {

          description: error.message})
      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!"
          description: "You have been successfully logged out."})
      }
    } catch (error) {
      console.error("Logout failed:", error),
      toast({

        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
    }

  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {

        return { data: null, error: error.message }
      }
      toast({

      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading(false)
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

          headline: profileData.headline})
        .eq("id", profileData.id),

      if (error) {
        toast({
          variant: "destructive",
          title: "Failed to update profile",
          description: error.message}),
        return { error: error.message }
        .eq("id", profileData.id);
      if (error) {
        toast({

          return { ...prevUser, ...profileData }
        }
        return prevUser

      return { error: null }
    } catch (error) {
      console.error("Profile update failed:", error),
      toast({

      return { error: "Failed to update profile." }
    } finally {
      setIsLoading(false)
    }

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

  const loginWithFacebook = async () => {
    setIsLoading(true),
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

      }
    } finally {
      setIsLoading(false)
    }

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

      }
    } finally {
      setIsLoading(false)
    }

  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")

    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
