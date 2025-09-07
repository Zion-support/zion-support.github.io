import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";
<<<<<<< HEAD
export function useAuthOperations(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>

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
=======
import type { UserProfile } from "@/types/auth",
import { toast } from "@/hooks/use-toast",
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils",

import { cleanupAuthState } from "@/utils/authUtils",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function useAuthOperations(

  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,
  setIsLoading: React && React.Dispatch<React && React.SetStateAction<boolean>>

<<<<<<< HEAD
  }, []);
;

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
      // Clean up any stale auth state before login

      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({}
) {}
  // Check for referral code in URL when the hook is first used;
  useEffect(() => {}
    checkUrlForReferralCode()
import { useState, useEffect } from './react';'
import { supabase } from '@/integrations / supabase / client';"
import type { UserProfile } from "@/types / auth";'
import { toast } from '@/hooks / use - toast';'
import { track_referral, checkUrlForReferralCode } from '@/utils / referral_utils';'
import { cleanupAuthState } from '@/utils / auth_utils';
export /**;
 * useAuthOperations - Function description;
 */
function useAuthOperations() {}
  // Check for referral code in URL when the hook is first used;
  useEffect (() => {}
    checkUrlForReferralCode ();
  }, []);
;
<<<<<<< HEAD
    }
=======
  const login = async ({ email, password }: { email: string, password: string }) => {}
>>>>>>> origin/chore/fix-lint-and-merge
    setIsLoading (true);
    try {}
        email;
        password});
<<<<<<< HEAD
      if (error) {
        }
        toast({
      // Clean up any stale auth state before login
}
cleanupAuthState();
        }
=======
      if (error) {}
        toast({}
      // Clean up any stale auth state before login;
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({}
>>>>>>> origin/chore/fix-lint-and-merge
        email;
        password});
      if (error) {}
        toast({}
=======
<<<<<<< HEAD

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
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
=======
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }, []);
;

    checkUrlForReferralCode()
  }, []),


  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {

      
      const { data, error } = await supabase && supabase.auth.signInWithPassword({

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        email;
        password});
      if (error) {
        toast({
<<<<<<< HEAD
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


        return { data: null, error: error.message }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }

      toast ({"
        title: "Login successful!",
        description: `Welcome back, ${email}!`});
;
<<<<<<< HEAD

      }
      return { data, error: null }

=======
      return { data, error: null }
    } catch (error) {
      toast ({
<<<<<<< HEAD
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
=======
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign in. Please check your credentials."});
=======
      toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Login successful!",
        description: `Welcome back, ${email}!`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials."}),

<<<<<<< HEAD
;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return { data: null, error: "Failed to sign in." }
    } finally {}
      setIsLoading (false);
>>>>>>> merged-prs-20250907-203621
    }

<<<<<<< HEAD
=======
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const signup = async ({ email, password, display_name }) => {

    setIsLoading (true);
<<<<<<< HEAD
    try {}
        email;
        password;

          title: "Error during signup"
=======
    try {

      const { data, error } = await supabase.auth.sign_up ({

<<<<<<< HEAD
  }
;
  const signup = async ({ email, password, display_name }) => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase.auth.sign_up ({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        email;
        password;
        options: {
          data: {

<<<<<<< HEAD
            display_name: display_name}}});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
      // Check condition
if ( {) {
  $2
}
        toast ({
<<<<<<< HEAD
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading(false)
    }
  }
  },

  const signup = async ({ email, password, display_name }) => {
<<<<<<< HEAD
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
=======
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
=======

          variant: "destructive";


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            display_name: display_name}}}),

      if (error) {}
        toast({"
          variant: "destructive","
          title: "Error during signup",
<<<<<<< HEAD
          variant: "destructive";
=======

          description: error.message}),
        return { data: null, error: error.message }"
          variant: "destructive","
          title: "Error during signup",

          description: error.message});
<<<<<<< HEAD
        return { data: null, error: error.message }"
=======
        return { data: null, error: error.message }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          title: "Error during signup",
          description: error && error.message});
        return { data: null, error: error && error.message }
      }
      // Add this after successful signup;
      // Check condition;
if ( {) {}
  $2;
}
        // Track referral if there was a referral code;
        await track_referral (data.user.id, email);
      }
<<<<<<< HEAD

=======
      toast ({
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
;
      return { data, error: null }
    } catch (error) {
      toast ({
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign up. Please try again."});

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error && error.message})
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading(false)
    }
  }
  },

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return { data: null, error: "Failed to sign up." }
    } finally {}
      setIsLoading (false);
    }

      if (error) {
        toast({
          variant: "destructive";

          title: "Oh no! Something went wrong.",

          description: error.message})

<<<<<<< HEAD
      } else {}
        setUser(null), // Clear the user state upon successful logout;
        toast({"
          title: "Logout successful!""
          description: "You have been successfully logged out."})
      }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!"
          description: "You have been successfully logged out."})
      }
    } catch (error) {
<<<<<<< HEAD
        variant: "destructive";
        title: "Logout failed"
        description: "There was an issue logging you out. Please try again."})
=======
      console && console.error("Logout failed:", error);
      toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

        variant: "destructive",
        title: "Logout failed",

<<<<<<< HEAD
      console.error("Logout failed:", error),
      toast({
        variant: "destructive";
        title: "Logout failed"
        variant: "destructive",
        title: "Logout failed",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
>>>>>>> merged-prs-20250907-203621
    }

  },

<<<<<<< HEAD
  const logout = async () => {
    setIsLoading($2);
    try {
      const { error } = await supabase.auth.signOut($2);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {

<<<<<<< HEAD
=======
        redirectTo: `${window.location.origin}/update-password`}),


      const { data, error } = await supabase && supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window && window.location.origin}/update-password`});
      if (error) {
        toast({
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          variant: "destructive";

          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
          description: error.message}),
        return { data: null, error: error.message }
      }
      toast({"
        title: "Password reset email sent!"`
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
;
"
        variant: "destructive";"
        title: "Logout failed""
        description: "There was an issue logging you out. Please try again."})
      const { error } = await supabase.auth.sign_out ();
;
      // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          variant: "destructive";"
          title: "Oh no! Something went wrong.",
          description: error.message});
      } else {}
        set_user (null), // Clear the user state upon successful logout;
        toast ({"
          title: "Logout successful!","
          description: "You have been successfully logged out."});
      }
    } catch (error) {"
      console.error ("Logout failed:", error);
      toast ({"
        variant: "destructive";"
        title: "Logout failed","
        description: "There was an issue logging you out. Please try again."});
    } finally {}
      setIsLoading (false);
    }
  }"
          variant: "destructive";"
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
      }
      return { data, error: null }
=======
          description: error && error.message});
        return { data: null, error: error && error.message }
      }
      toast ({
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
;
      return { data, error: null }
    } catch (error) {
      toast ({
<<<<<<< HEAD
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
        redirectTo: `${window.location.origin}/update-password`}),
=======
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to send reset password email. Please try again."});
=======
          description: error.message}),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> merged-prs-20250907-203621
      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
<<<<<<< HEAD
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
          display_name: profileData.displayName;
          user_type: profileData.userType;
          profile_complete: profileData.profileComplete;
          bio: profileData.bio;
          avatar_url: profileData.avatarUrl
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
=======
          description: error.message}),
        return { data: null, error: error.message }
      }
      toast({
<<<<<<< HEAD
        title: "Password reset email sent!"
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to send reset password email. Please try again."});
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again."}),
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading (false);
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      return { data: null, error: "Failed to send reset password email." }
    } finally {}
      setIsLoading (false);
    }
  },

  const updateProfile = async (profileData: Partial<UserProfile>) => {}
    setIsLoading(true)
<<<<<<< HEAD
    try {}
      if (!profileData || !profileData && profileData.id) {}
"
=======
    try {

      if (!profileData || !profileData && profileData.id) {

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        throw new Error("Profile data or user ID is missing.")
      }
      const { error } = await supabase"
        .from("profiles")

<<<<<<< HEAD
          title: "Failed to update profile"
          description: error.message});
        return { error: error.message }"
          variant: "destructive","
          title: "Failed to update profile",
          description: error.message});

      }
      // Optimistically update the local user state;
      setUser((prevUser) => {}
        if (prevUser) {}
        return { error: error.message };
      }
;
      // Optimistically update the local user state;
      setUser((prevUser) => {;
        if (prevUser) {;

          return { ...prevUser, ...profileData }
=======
<<<<<<< HEAD
          display_name: profileData.displayName;
          user_type: profileData.userType;
          profile_complete: profileData.profileComplete;
          bio: profileData.bio;
          avatar_url: profileData.avatarUrl
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
<<<<<<< HEAD
=======


          headline: profileData.headline})
        .eq("id", profileData.id);
      if (error) {
        toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          display_name: profileData && profileData.displayName;
          user_type: profileData && profileData.userType;
          profile_complete: profileData && profileData.profileComplete;
          bio: profileData && profileData.bio;
          avatar_url: profileData && profileData.avatarUrl,
          headline: profileData && profileData.headline})
        .eq("id", profileData && profileData.id);
      if (error) {
        toast({
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
          variant: "destructive";
          title: "Failed to update profile",
          description: error && error.message});
        return { error: error && error.message }
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Optimistically update the local user state;
      set_user ((prev_user) => {}
        // Check condition;
if ( {) {}
  $2;
}
          return { ...prev_user, ...profile_data }
        }
<<<<<<< HEAD
=======
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
      });
      toast({
        title: "Profile updated!"
        description: "Your profile has been successfully updated."});
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."}),

<<<<<<< HEAD
        return prev_user;
      });
=======


      return { error: null }
    } catch (error) {
      console && console.error("Profile update failed:", error);
      toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      return { error: null }
    } catch (error) {
      console.error("Profile update failed:", error),
      toast({
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
        }
        return prev_user;

      return { error: "Failed to update profile." }
    } finally {}
      setIsLoading (false);
    }
<<<<<<< HEAD
=======
  }

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const loginWithGoogle = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "google"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
>>>>>>> merged-prs-20250907-203621
          description: error.message})
      }
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
=======
    }
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        provider: "google"}),

      if (error) {}
        toast({"
          variant: "destructive","
          title: "Oh no! Something went wrong.",
          description: error.message})
<<<<<<< HEAD
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
=======

        return prevUser;
      }),;

      return { error: null }
    } catch (error) {;"
      console.error("Profile update failed:", error),;

      return { error: "Failed to update profile." }
    } finally {;
      setIsLoading(false);
    }
  },;
  const loginWithGoogle = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.auth.signInWithOAuth({;"
        provider: "google"}),;
      if (error) {;

      }
    } finally {;
      setIsLoading(false);
>>>>>>> merged-prs-20250907-203621
    }
  },

  const loginWithFacebook = async () => {
<<<<<<< HEAD
    setIsLoading($2);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth($2);
=======
    setIsLoading (true);
    try {
<<<<<<< HEAD
      }
        }
        "provider": "facebook"});"
>>>>>>> merged-prs-20250907-203621
      if (error) {
        toast({
<<<<<<< HEAD
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
=======
          }
          "variant": "destructive";"
          "title": "Oh no! Something went wrong.""
          "description": error.message})
        "provider": "facebook"}),"
      if (error) {
        }
        toast({
}
"variant": "destructive",;"
          "title": "Oh no! Something went wrong.","
          "description": error.message})
=======
      const { data, error } = await supabase.auth.signInWithOAuth({

>>>>>>> origin/chore/fix-lint-and-merge
  },;
  const loginWithFacebook = async () => {;
    setIsLoading(true),;
    try {;
<<<<<<< HEAD
      }
        }
        "provider": "facebook"}),;"
=======
      const { data, error } = await supabase.auth.signInWithOAuth({;
        provider: "facebook"}),;
>>>>>>> origin/chore/fix-lint-and-merge
      if (error) {;
        toast({;
<<<<<<< HEAD
          }
          "variant": "destructive",;"
          "title": "Oh no! Something went wrong.",,"
  "description": error.message});
  }
    }
    setIsLoading (true);
    try {
      }
      const { data, error } = await supabase.auth.signInWithOAuth ({
        }
        "provider": "google"});"
;
      // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "variant": "destructive";"
          "title": "Oh no! Something went wrong.","
          "description": error.message});
>>>>>>> merged-prs-20250907-203621
      }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },

  const loginWithTwitter = async () => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth($2);
=======
  }
      }
    } finally {
      }
      setIsLoading (false);
    }
  const loginWithTwitter = async () => {
    }
    setIsLoading (true);
    try {
      }
        }
        "provider": "twitter"});"
;
      // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "variant": "destructive";"
          "title": "Oh no! Something went wrong.","
          "description": error.message})
};
  },
    }
    setIsLoading(true),
    try {
      }
      }
>>>>>>> merged-prs-20250907-203621
      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
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
        id: address;
        displayName: address;
        profileComplete: true
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
=======
=======
          variant: "destructive",;
          title: "Oh no! Something went wrong.",
          description: error.message});

  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {

      const { data, error } = await supabase.auth.signInWithOAuth({

<<<<<<< HEAD
        provider: "facebook"});
      if (error) {}
        toast({"
          variant: "destructive";"
          title: "Oh no! Something went wrong."
          description: error.message})"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        provider: "facebook"}),

      if (error) {}
        toast({"
          variant: "destructive","
          title: "Oh no! Something went wrong.",
          description: error.message})
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },;
  const loginWithFacebook = async () => {;
    setIsLoading(true),;
    try {;
<<<<<<< HEAD
      const { data, error } = await supabase.auth.signInWithOAuth({;"
        provider: "facebook"}),;
      if (error) {;

          title: "Oh no! Something went wrong.",
          description: error.message});

>>>>>>> origin/chore/fix-lint-and-merge
  }
  const loginWithGoogle = async () => {}
    setIsLoading (true);
    try {}
      const { data, error } = await supabase.auth.signInWithOAuth ({"
        provider: "google"});
;
      // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          variant: "destructive";"
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
      }
    } finally {
      setIsLoading (false);
>>>>>>> merged-prs-20250907-203621
    }

;

  const loginWithTwitter = async () => {
    setIsLoading (true);
    try {

          title: "Oh no! Something went wrong.",
          description: error && error.message})

  }
;
  const loginWithTwitter = async () => {
    setIsLoading (true);
    try {
          title: "Oh no! Something went wrong.",
          description: error && error.message})
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

  },
  };
  },

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        provider: "twitter"}),

      if (error) {
        toast({
          variant: "destructive",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          title: "Oh no! Something went wrong.",
          description: error.message});

      }
    } finally {}
      setIsLoading (false);
    }
<<<<<<< HEAD

  };
  },

      }
    } finally {}
      setIsLoading (false);
    }
  }
  },
  };
  },
=======
;

  }
;
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

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet';
      });
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    } catch (error: any) {
      toast ({

<<<<<<< HEAD
        variant: 'destructive';
    } finally {}
      setIsLoading (false);
    }
  }
  return {}
    login;
    signup;
    logout;
    loginWithGoogle;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {
    login;
    signup;
    logout;
<<<<<<< HEAD
=======
    reset_password;
    update_profile;
    loginWithGoogle;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },
  };
  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {

      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")

<<<<<<< HEAD
    resetPassword;
    updateProfile;
    loginWithGoogle;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },;
  const loginWithWeb3 = async () => {;
    setIsLoading(true),;
    try {;
<<<<<<< HEAD
      }
      if (!ethereum) {;
        }
        throw new Error("Web3 wallet not found");"
      }
      const accounts = await ethereum.request({ "method": 'eth_requestAccounts' }),;'
=======
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;"
        throw new Error("Web3 wallet not found");
      }'
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),;
>>>>>>> origin/chore/fix-lint-and-merge
      const address = accounts[0],;
      await ethereum.request({;'
        method: 'personal_sign',;
        params: [address, address];
      }),;
      // Fix: Create a proper UserProfile object;
      setUser({;
        id: address,;
        displayName: address,;
        profileComplete: true,;'
        email: '', // Add required fields;'
        userType: 'talent', // Default user type;
        createdAt: new Date().toISOString(),;
        updatedAt: new Date().toISOString();
      } as UserProfile),;'
      toast({ title: 'Wallet connected', description: address });
    } catch (error: any) {;

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
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
<<<<<<< HEAD
}
}
;
=======


}
;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
