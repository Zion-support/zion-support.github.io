

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function useAuthOperations(

  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,
  setIsLoading: React && React.Dispatch<React && React.SetStateAction<boolean>>

<<<<<<< HEAD
=======

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
export function useAuthOperations(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>

  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {

<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }, []);
;

    checkUrlForReferralCode()
  }, []),


  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {

      
      const { data, error } = await supabase && supabase.auth.signInWithPassword({

<<<<<<< HEAD
=======
      const { data, error } = await supabase && supabase.auth.signInWithPassword({
    checkUrlForReferralCode();
  }, []);
    checkUrlForReferralCode()
  }, []),

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading(true),
    try {
      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        email;
        password});
      if (error) {
        toast({
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          variant: "destructive";

      // Clean up any stale auth state before login

=======
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
<<<<<<< HEAD


        return { data: null, error: error.message }
=======
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }

      toast ({
        title: "Login successful!",
        description: `Welcome back, ${email}!`});
;
<<<<<<< HEAD

      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign in. Please check your credentials."});
=======
      toast({

=======
      return { data, error: null }
    } catch (error) {
      toast ({
        return { data: null, error: error.message }
      }
      toast({
        title: "Login successful!"
        description: `Welcome back, ${email}!`});
      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign in. Please check your credentials."});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Login successful!",
        description: `Welcome back, ${email}!`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials."}),

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading (false);
    }

;

=======
=======
;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const signup = async ({ email, password, display_name }) => {
    setIsLoading (true);
    try {

      const { data, error } = await supabase.auth.sign_up ({

<<<<<<< HEAD
=======
  }
;
  const signup = async ({ email, password, display_name }) => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase.auth.sign_up ({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        email;
        password;
        options: {
          data: {

<<<<<<< HEAD
=======
            display_name: display_name}}});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      // Check condition
if ( {) {
  $2
}
        toast ({
<<<<<<< HEAD

          variant: "destructive";


=======
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading(false)
    }
  }
  },

  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: display_name}}});
      if (error) {
        toast({
          variant: "destructive";
          title: "Error during signup"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            display_name: display_name}}}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Error during signup",
<<<<<<< HEAD


          description: error.message});
        return { data: null, error: error.message }
=======
=======
          variant: "destructive";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          title: "Error during signup",
          description: error && error.message});
        return { data: null, error: error && error.message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Add this after successful signup;
      // Check condition
if ( {) {
  $2
}
        // Track referral if there was a referral code;
        await track_referral (data.user.id, email);
      }
      toast ({
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
;
<<<<<<< HEAD

      return { data, error: null }
    } catch (error) {
      toast ({
=======
      return { data, error: null }
    } catch (error) {
      toast ({
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
      toast({
        title: "Signup successful!"
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
      return { data, error: null }
    } catch (error) {
      toast({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign up. Please try again."});

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast({
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign up. Please try again."}),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading (false);
    }

;

=======

  },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const logout = async () => {
    setIsLoading (true);
    try {

      const { error } = await supabase && supabase.auth.signOut();
=======

      const { error } = await supabase.auth.signOut(),


=======

;


  },


  const logout = async () => {
    setIsLoading (true);
    try {

      const { error } = await supabase && supabase.auth.signOut();

      const { error } = await supabase.auth.signOut(),


  }
;
  const logout = async () => {
    setIsLoading (true);
    try {
      const { error } = await supabase && supabase.auth.signOut();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
=======
          description: error && error.message})
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading(false)
    }
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const logout = async () => {
    setIsLoading(true),
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
      const { error } = await supabase.auth.signOut(),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
        variant: "destructive";
        title: "Logout failed"
        description: "There was an issue logging you out. Please try again."})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD

      const { data, error } = await supabase && supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window && window.location.origin}/update-password`});
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        variant: "destructive",
        title: "Logout failed",

<<<<<<< HEAD
=======
      console.error("Logout failed:", error),
      toast({
        variant: "destructive";
        title: "Logout failed"
        variant: "destructive",
        title: "Logout failed",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
    }

  },


<<<<<<< HEAD
=======
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {

        redirectTo: `${window.location.origin}/update-password`}),


<<<<<<< HEAD
      if (error) {
        toast({
=======
=======
      const { data, error } = await supabase && supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window && window.location.origin}/update-password`});
      if (error) {
        toast({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
  const reset_password = async (email: string) => {
    setIsLoading (true),
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail (email, {
        redirect_to: `${window.location.origin}/update - password`});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          variant: "destructive";
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD

=======
          description: error && error.message});
        return { data: null, error: error && error.message }
      }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast ({
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
;
<<<<<<< HEAD

      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to send reset password email. Please try again."});
=======
          description: error.message}),
=======
      return { data, error: null }
    } catch (error) {
      toast ({
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
        redirectTo: `${window.location.origin}/update-password`}),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
        return { data: null, error: error.message }
      }
      toast({
<<<<<<< HEAD

=======
        title: "Password reset email sent!"
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to send reset password email. Please try again."});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again."}),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading (false);
    }
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  },



  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {

      if (!profileData || !profileData && profileData.id) {

<<<<<<< HEAD
=======
  }
      if (!profileData || !profileData && profileData.id) {
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading(false)
    }
  }
  },

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {
      if (!profileData |!profileData.id) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        throw new Error("Profile data or user ID is missing.")
      }
      const { error } = await supabase
        .from("profiles")
        .update({

<<<<<<< HEAD

=======
          display_name: profileData.displayName;
          user_type: profileData.userType;
          profile_complete: profileData.profileComplete;
          bio: profileData.bio;
          avatar_url: profileData.avatarUrl
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
<<<<<<< HEAD


          headline: profileData.headline})
        .eq("id", profileData.id);
      if (error) {
        toast({

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          display_name: profileData && profileData.displayName;
          user_type: profileData && profileData.userType;
          profile_complete: profileData && profileData.profileComplete;
          bio: profileData && profileData.bio;
          avatar_url: profileData && profileData.avatarUrl,
          headline: profileData && profileData.headline})
        .eq("id", profileData && profileData.id);

      if (error) {
        toast({
=======
;
  const update_profile = async (profile_data: Partial < UserProfile>) => {
    setIsLoading (true),
    try {
      // Check condition
if ( {) {
  $2
}
        throw new Error ("Profile data or user ID is missing.");
      }
      const { error } = await supabase;
        .from ("profiles");
        .update ({
          display_name: profile_data.display_name;
          user_type: profile_data.user_type;
          profile_complete: profile_data.profile_complete;
          bio: profile_data.bio;
          avatar_url: profile_data.avatar_url,
          headline: profile_data.headline});
        .eq ("id", profile_data.id);
;
      // Check condition
if ( {) {
  $2
}
        toast ({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          variant: "destructive";
          title: "Failed to update profile",
          description: error && error.message});
        return { error: error && error.message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
<<<<<<< HEAD


          variant: "destructive",
          title: "Failed to update profile",
          description: error.message});


          return { ...prevUser, ...profileData }
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Optimistically update the local user state;
      set_user ((prev_user) => {
        // Check condition
if ( {) {
  $2
}
          return { ...prev_user, ...profile_data }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
<<<<<<< HEAD
=======
          headline: profileData.headline})
        .eq("id", profileData.id),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      if (error) {
        toast({
          variant: "destructive",
          title: "Failed to update profile",
          description: error.message}),
        return { error: error.message }
        .eq("id", profileData.id);
      if (error) {
        toast({
          variant: "destructive";
          title: "Failed to update profile"
          description: error.message});
        return { error: error.message }
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
<<<<<<< HEAD

=======
      });
      toast({
        title: "Profile updated!"
        description: "Your profile has been successfully updated."});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }),

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."}),

<<<<<<< HEAD


      return { error: null }
    } catch (error) {
      console && console.error("Profile update failed:", error);
      toast({

=======
        return prev_user;
      });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      toast ({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."});
;
      return { error: null }
    } catch (error) {
      console.error ("Profile update failed:", error);
      toast ({
<<<<<<< HEAD

        variant: "destructive";
        title: "Profile update failed"
        description: "There was an issue updating your profile. Please try again."});
=======

        variant: "destructive",
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again."}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading (false);
    }

;

  const loginWithGoogle = async () => {
    setIsLoading (true);
    try {

          title: "Oh no! Something went wrong.",
          description: error && error.message})

=======
=======
      return { error: null }
    } catch (error) {
      console.error("Profile update failed:", error),
      toast({

;

  const loginWithGoogle = async () => {
    setIsLoading (true);
    try {

          title: "Oh no! Something went wrong.",
          description: error && error.message})

  }
;
  const loginWithGoogle = async () => {
    setIsLoading (true);
    try {
          title: "Oh no! Something went wrong.",
          description: error && error.message})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD

;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },


<<<<<<< HEAD
=======
        variant: "destructive";
        title: "Profile update failed"
        description: "There was an issue updating your profile. Please try again."});
        variant: "destructive",
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again."}),
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading(false)
    }
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const loginWithGoogle = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD

=======
        provider: "google"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        provider: "google"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
<<<<<<< HEAD


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {

          title: "Oh no! Something went wrong.",
          description: error && error.message})

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      const { data, error } = await supabase.auth.signInWithOAuth({

=======
      }
    } finally {
      setIsLoading(false)
    }
  };
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

        provider: "google"}),

  const loginWithFacebook = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        provider: "facebook"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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

          title: "Oh no! Something went wrong.",
          description: error && error.message})

;
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {
          title: "Oh no! Something went wrong.",
          description: error && error.message})
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
      const { data, error } = await supabase.auth.signInWithOAuth({

        provider: "facebook"}),
      }
    } finally {
      setIsLoading(false)
    }
  }
  },
  };
  },

  const loginWithTwitter = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
        provider: "twitter"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }
    } finally {
      setIsLoading (false);
    }

;

  const loginWithTwitter = async () => {
    setIsLoading (true);
    try {

          title: "Oh no! Something went wrong.",
          description: error && error.message})

<<<<<<< HEAD
=======
=======
  }
;
  const loginWithTwitter = async () => {
    setIsLoading (true);
    try {
          title: "Oh no! Something went wrong.",
          description: error && error.message})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },
  };
  },

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const loginWithTwitter = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        provider: "twitter"}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD

;

=======
;

  }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

      await ethereum && ethereum.request({
        method: 'personal_sign',

=======
      await ethereum && ethereum.request({
        method: 'personal_sign',
      }
    } finally {
      setIsLoading(false)
    }
  }
  },
  };
  },

  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (error: any) {
      toast ({
        variant: 'destructive';

        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet';
      });

=======
        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet';
      });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD

;

=======
;
    } catch (error: any) {
      toast({
        variant: 'destructive';
        title: 'Web3 login failed'
        description: error?.message |'Unable to connect wallet'
      })
    } finally {
      setIsLoading(false)
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return {
    login;
    signup;
    logout;
<<<<<<< HEAD
    reset_password;
    update_profile;
    loginWithGoogle;
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },
  };
  },


  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")

<<<<<<< HEAD
=======
    resetPassword;
    updateProfile;
    loginWithGoogle;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}

=======

}
;



import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import type { UserProfile } from "@/types/auth",;
import { toast } from "@/hooks/use-toast",;
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils",;
import { cleanupAuthState } from "@/utils/authUtils",;
;
export function useAuthOperations(;
  setUser:React.Dispatch<React.SetStateAction<UserProfile | null>>,;
  setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
) {;
  // Check for referral code in URL when the hook is first used;
  useEffect(() => {;
    checkUrlForReferralCode();
  }, []),;
;
  const login = async ({ email, password } { email:string, password:string }) => {;
    setIsLoading(true),;
    try {;
      // Clean up any stale auth state before login;
      cleanupAuthState(),;
      ;
      const { data, error } = await supabase.auth.signInWithPassword({;
        email,;
        password}),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Oh no! Something went wrong.",;
          description:error.message}),;
        return { data:null, error:error.message },;
      }
;
      toast({;
        title:"Login successful!",;
        description:`Welcome back, ${email}!`}),;
;
      return { data, error:null },;
    } catch (error) {;
      toast({;
        variant:"destructive",;
        title:"Oh no! Something went wrong.",;
        description:"Failed to sign in. Please check your credentials."}),;
      return { data:null, error:"Failed to sign in." },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const signup = async ({ email, password, display_name }) => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signUp({;
        email,;
        password,;
        options:{;
          data:{;
            display_name:display_name}}}),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Error during signup",;
          description:error.message}),;
        return { data:null, error:error.message },;
      }
;
      // Add this after successful signup;
      if (data?.user) {;
        // Track referral if there was a referral code;
        await trackReferral(data.user.id, email),;
      }
;
      toast({;
        title:"Signup successful!",;
        description:`Welcome, ${display_name}! Please check your email to verify your account.`}),;
;
      return { data, error:null },;
    } catch (error) {;
      toast({;
        variant:"destructive",;
        title:"Oh no! Something went wrong.",;
        description:"Failed to sign up. Please try again."}),;
      return { data:null, error:"Failed to sign up." },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const logout = async () => {;
    setIsLoading(true),;
    try {;
      const { error } = await supabase.auth.signOut(),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Oh no! Something went wrong.",;
          description:error.message}),;
      } else {;
        setUser(null), // Clear the user state upon successful logout;
        toast({;
          title:"Logout successful!",;
          description:"You have been successfully logged out."}),;
      }
    } catch (error) {;
      console.error("Logout failed:", error),;
      toast({;
        variant:"destructive",;
        title:"Logout failed",;
        description:"There was an issue logging you out. Please try again."}),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const resetPassword = async (email:string) => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {;
        redirectTo:`${window.location.origin}/update-password`}),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Oh no! Something went wrong.",;
          description:error.message}),;
        return { data:null, error:error.message },;
      }
;
      toast({;
        title:"Password reset email sent!",;
        description:`Please check your email (${email}) for instructions on how to reset your password.`}),;
;
      return { data, error:null },;
    } catch (error) {;
      toast({;
        variant:"destructive",;
        title:"Oh no! Something went wrong.",;
        description:"Failed to send reset password email. Please try again."}),;
      return { data:null, error:"Failed to send reset password email." },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const updateProfile = async (profileData:Partial<UserProfile>) => {;
    setIsLoading(true),;
    try {;
      if (!profileData || !profileData.id) {;
        throw new Error("Profile data or user ID is missing.");
      }
;
      const { error } = await supabase;
        .from("profiles");
        .update({;
          display_name:profileData.displayName,;
          user_type:profileData.userType,;
          profile_complete:profileData.profileComplete,;
          bio:profileData.bio,;
          avatar_url:profileData.avatarUrl,;
          headline:profileData.headline});
        .eq("id", profileData.id),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Failed to update profile",;
          description:error.message}),;
        return { error:error.message },;
      }
;
      // Optimistically update the local user state;
      setUser((prevUser) => {;
        if (prevUser) {;
          return { ...prevUser, ...profileData },;
        }
        return prevUser,;
      }),;
;
      toast({;
        title:"Profile updated!",;
        description:"Your profile has been successfully updated."}),;
;
      return { error:null },;
    } catch (error) {;
      console.error("Profile update failed:", error),;
      toast({;
        variant:"destructive",;
        title:"Profile update failed",;
        description:"There was an issue updating your profile. Please try again."}),;
      return { error:"Failed to update profile." },;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const loginWithGoogle = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signInWithOAuth({;
        provider:"google"}),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Oh no! Something went wrong.",;
          description:error.message}),;
      }
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const loginWithFacebook = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signInWithOAuth({;
        provider:"facebook"}),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Oh no! Something went wrong.",;
          description:error.message}),;
      }
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const loginWithTwitter = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signInWithOAuth({;
        provider:"twitter"}),;
;
      if (error) {;
        toast({;
          variant:"destructive",;
          title:"Oh no! Something went wrong.",;
          description:error.message}),;
      }
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const loginWithWeb3 = async () => {;
    setIsLoading(true),;
    try {;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        throw new Error("Web3 wallet not found"),;
      }
      const accounts = await ethereum.request({ method:'eth_requestAccounts' }),;
      const address = accounts[0],;
      await ethereum.request({;
        method:'personal_sign',;
        params:[address, address];
      }),;
      ;
      // Fix:Create a proper UserProfile object;
      setUser({;
        id:address,;
        displayName:address,;
        profileComplete:true,;
        email:'', // Add required fields;
        userType:'talent', // Default user type;
        createdAt:new Date().toISOString(),;
        updatedAt:new Date().toISOString();
      } as UserProfile),;
      ;
      toast({ title:'Wallet connected', description:address }),;
    } catch (error:any) {;
      toast({;
        variant:'destructive',;
        title:'Web3 login failed',;
        description:error?.message || 'Unable to connect wallet';
      }),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return {;
    login,;
    signup,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3},; export function useAuthOperations (setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  //Check for referral code in URL when the hook is first used useEffect ( () => {
  checkUrlForReferralCode () 
}, []);
const login = async ({
  email, password 
}: {
  email: string, password: string 
}) => {
  setIsLoading (true);
//Clean up any stale auth state before login cleanupAuthState ();
return {
  data, error: null 
}
}catch (error) {
  toast ({
  
}finally {
  setIsLoading (false) 
}
};
const signup = async ({
  email, password, display name 
}) => {
  setIsLoading (true);
const {
  data, error 
}= await supabase.auth.signUp ({
  email, password, options: {
  data: {
  display name: display name 
}
}
});
}//Add this after successful signup if (data?.user) {
  //Track referral if there was a referral code await trackReferral (data.user.id, email) 
}toast ({
  return {
  data, error: null 
}
}catch (error) {
  toast ({
  
}finally {
  setIsLoading (false) 
}
};
const logout = async () => {
  setIsLoading (true);
try {
  const {
  error 
}= await supabase.auth.signOut ();
toast ({
  variant: "destructive", title: "Oh no! Something went wrong.", description: error.message 
});
}else {
  setUser (null);
//Clear the user state upon successful logout toast ({
  
}else {
  setUser (null), //Clear the user state upon successful logout toast ({
  
}finally {
  setIsLoading (false) 
}
};
const resetPassword = async (email: string) => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.auth.resetPasswordForEmail (email, {
  redirectTo: `$ {
  window.location.origin 
}/update-password` 
});
if (error) {
  toast ({
  return {
  data, error: null 
}
}catch (error) {
  toast ({
  
}finally {
  setIsLoading (false) 
}
};
const updateProfile = async (profileData: Partial<UserProfile>) => {
  setIsLoading (true);
try {
  if (!profileData || !profileData.id) {
  
}const {
  error 
}= await supabase .from ("profiles") .update ({
  display name: profileData.displayName;
user type: profileData.userType;
profile complete: profileData.profileComplete;
bio: profileData.bio;
avatar url: profileData.avatarUrl;
headline: profileData.headline 
}) 
}//Optimistically update the local user state setUser ( (prevUser) => {
  if (prevUser) {
  return {
  ...prevUser, ...profileData 
}
}return prevUser;
});
return {
  error: null 
}
}catch (error) {
  
}finally {
  setIsLoading (false) 
}
};
const loginWithGoogle = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.auth.signInWithOAuth ({
  
}
}finally {
  setIsLoading (false) 
}
};
const loginWithFacebook = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.auth.signInWithOAuth ({
  
}
}finally {
  setIsLoading (false) 
}
};
const loginWithTwitter = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.auth.signInWithOAuth ({
  
}
}finally {
  setIsLoading (false) 
}
};
const loginWithWeb3 = async () => {
  setIsLoading (true);
try {
  const ethereum = (window as any) .ethereum;
if (!ethereum) {
  
}const accounts = await ethereum.request ({
  method: 'eth requestAccounts' 
});
const address = accounts[0];
await ethereum.request ({
  method: 'personal sign';
params: [address, address] 
});
//Fix: Create a proper UserProfile object setUser ({
  id: address;
displayName: address;
profileComplete: true;
email: '', //Add required fields userType: 'talent', // Default user type createdAt: new Date () .toISOString ();
updatedAt: new Date () .toISOString () 
}as UserProfile);
toast ({
  title: 'Wallet connected', description: address 
}) 
}catch (error: any) {
  toast ({
  variant: 'destructive';
title: 'Web3 login failed';
description: error?.message || 'Unable to connect wallet' 
}) 
}finally {
  setIsLoading (false) 
}
};
return {
  login;
signup;
logout;
resetPassword;
updateProfile;
loginWithGoogle;
loginWithFacebook;
loginWithTwitter;
loginWithWeb3 
}
}
    loginWithFacebook;
    loginWithTwitter;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    loginWithWeb3}
}
}
;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
