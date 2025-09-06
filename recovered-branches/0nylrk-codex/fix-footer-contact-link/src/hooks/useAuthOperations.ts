<<<<<<< HEAD

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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export function useAuthOperations(

  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,
  setIsLoading: React && React.Dispatch<React && React.SetStateAction<boolean>>

) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode();
  }, []);
    checkUrlForReferralCode()
  }, []),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
      // Clean up any stale auth state before login
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
=======
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode()
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }, []);
;
  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        email;
        password});
      if (error) {
        toast({
          variant: "destructive";
<<<<<<< HEAD
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
        return { data: null, error: error.message }
=======
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      toast({
        title: "Login successful!"
        description: `Welcome back, ${email}!`});
;

=======
      }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign in. Please check your credentials."});
<<<<<<< HEAD
        title: "Login successful!",
        description: `Welcome back, ${email}!`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials."}),
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
  },

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const signup = async ({ email, password, display_name }) => {
    setIsLoading (true);
    try {
        email;
        password;
        options: {
          data: {
            display_name: display_name}}});
<<<<<<< HEAD
      if (error) {
        toast({
          variant: "destructive";
          title: "Error during signup"
            display_name: display_name}}}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Error during signup",
<<<<<<< HEAD
          description: error.message}),
        return { data: null, error: error.message }
          variant: "destructive",
          title: "Error during signup",
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
      toast({
        title: "Signup successful!"
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
;

=======
          variant: "destructive";
      }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return { data, error: null }
    } catch (error) {
      toast ({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign up. Please try again."});
<<<<<<< HEAD


      toast({
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign up. Please try again."}),
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
  },

  const logout = async () => {
    setIsLoading (true);
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
  const logout = async () => {
    setIsLoading (true);
    try {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!"
          description: "You have been successfully logged out."})
      }
    } catch (error) {
      console && console.error("Logout failed:", error);
      toast({
<<<<<<< HEAD
        variant: "destructive";
        title: "Logout failed"
        variant: "destructive",
        title: "Logout failed",
        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
    }
  }
  },

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
        redirectTo: `${window.location.origin}/update-password`}),


      if (error) {
        toast({
=======
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
          description: error.message}),
        return { data: null, error: error.message }
      }
      toast({
        title: "Password reset email sent!"
        description: `Please check your email (${email}) for instructions on how to reset your password.`});
;

=======
        variant: "destructive";
        title: "Logout failed"
        description: "There was an issue logging you out. Please try again."})
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }
  }
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error && error.message});
        return { data: null, error: error && error.message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
  },

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {

      if (!profileData || !profileData && profileData.id) {

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        throw new Error("Profile data or user ID is missing.")
      }
      const { error } = await supabase
        .from("profiles")
        .update({
<<<<<<< HEAD
          display_name: profileData.displayName;
          user_type: profileData.userType;
          profile_complete: profileData.profileComplete;
          bio: profileData.bio;
          avatar_url: profileData.avatarUrl
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
          headline: profileData.headline})
        .eq("id", profileData.id),


          headline: profileData.headline})
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
<<<<<<< HEAD
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
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

      return { error: null }
    } catch (error) {
      console && console.error("Profile update failed:", error);
      toast({
        variant: "destructive";
        title: "Profile update failed"
        description: "There was an issue updating your profile. Please try again."});
        variant: "destructive",
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again."}),
=======
          variant: "destructive";
          title: "Failed to update profile",
          description: error && error.message});
        return { error: error && error.message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
        }
        return prev_user;
      });
        variant: "destructive";
        title: "Profile update failed"
        description: "There was an issue updating your profile. Please try again."});
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  }
  },

  const loginWithGoogle = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
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
        provider: "google"}),

      if (error) {
        toast({
          variant: "destructive",
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

=======


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  }
  const loginWithGoogle = async () => {
    setIsLoading (true);
    try {
=======
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
  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  },
=======

;

=======
  }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const loginWithTwitter = async () => {
    setIsLoading (true);
    try {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======

  },
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  };
  },
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      }
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  },
  };
  },
=======

;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
  }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
<<<<<<< HEAD
}
}
;
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
