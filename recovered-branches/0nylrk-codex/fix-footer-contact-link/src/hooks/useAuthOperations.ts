<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";

=======
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import type { UserProfile } from "@/types/auth";"
import { toast } from "@/hooks/use-toast";"
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";"
import { cleanupAuthState } from "@/utils/authUtils";"
import type { UserProfile } from "@/types/auth","
import { toast } from "@/hooks/use-toast","
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils","
import { cleanupAuthState } from "@/utils/authUtils","
export function useAuthOperations() {
  // Check for referral code in URL when the hook is first used
}
useEffect(() => {
    }
    checkUrlForReferralCode();
  }, []);
    checkUrlForReferralCode()
  }, []),
  const login = async ({ email, password }: { "email": string, "password": string }) => {
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
import type { UserProfile } from "@/types/auth",
import { toast } from "@/hooks/use-toast",
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils",

import { cleanupAuthState } from "@/utils/authUtils",


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function useAuthOperations(

  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,
  setIsLoading: React && React.Dispatch<React && React.SetStateAction<boolean>>

<<<<<<< HEAD

  const login = async ({ email, password }: { email: string, password: string }) => {}

    setIsLoading (true);
    try {}
        email;
        password});

      if (error) {}
        toast({}
      // Clean up any stale auth state before login;
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({}

        email;
        password});
      if (error) {}
        toast({}

=======

  }, []);
;

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
      // Clean up any stale auth state before login
}
cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
) {
  // Check for referral code in URL when the hook is first used
}
useEffect(() => {
    }
    checkUrlForReferralCode()
import { useState, useEffect } from './react';'
import { supabase } from '@/integrations / supabase / client';'
import type { UserProfile } from "@/types / auth";"
import { toast } from '@/hooks / use - toast';'
import { track_referral, checkUrlForReferralCode } from '@/utils / referral_utils';'


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
    checkUrlForReferralCode();
  }, []);
    checkUrlForReferralCode()
  }, []),

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading (true);
    try {
      // Clean up any stale auth state before login
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
function useAuthOperations() {}
  // Check for referral code in URL when the hook is first used;
  useEffect (() => {}
    checkUrlForReferralCode ();

  }, []);
;

  const login = async ({ email, password }: { email: string, password: string }) => {}
    setIsLoading (true);
    try {}
        email;
        password});
      if (error) {
        }
        toast({
      // Clean up any stale auth state before login
}
cleanupAuthState();
        }
        email;
        password});
      if (error) {}
        toast({}
        email;
        password});
      if (error) {
        }
        toast({
      }
          variant: "destructive";

      // Clean up any stale auth state before login

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }

      toast ({"
        title: "Login successful!",
        description: `Welcome back, ${email}!`});
;

<<<<<<< HEAD
      return { data, error: null }
    } catch (error) {
      toast ({

      return { data: null, error: "Failed to sign in." }
    } finally {}
      setIsLoading (false);

    }


;

=======
      return { data: null, error: "Failed to sign in." }
    } finally {}
      setIsLoading (false);
    }

  },
>>>>>>> origin/cursor/delete-old-data-records-6bba


  const signup = async ({ email, password, display_name }) => {

    setIsLoading (true);
<<<<<<< HEAD

    try {

      const { data, error } = await supabase.auth.sign_up ({


=======
    try {}
        email;
        password;

          title: "Error during signup"
        email;
        password;
        options: {
          data: {

            display_name: display_name}}});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading(false)
    }
  }
  },

  const signup = async ({ email, password, display_name }) => {
    }
    setIsLoading (true);
    try {
        }
        email;
        password;
        "options": {
          }
          "data": {
          }
          "variant": "destructive";"
          "title": "Error during signup""
            "display_name": display_name}}),
      if (error) {
        }
        toast({

>>>>>>> origin/cursor/delete-old-data-records-6bba
            display_name: display_name}}}),

      if (error) {}
        toast({"
          variant: "destructive","
          title: "Error during signup",
<<<<<<< HEAD

          description: error.message});

<<<<<<< HEAD
=======
        return { data: null, error: error.message }"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          title: "Error during signup",
          description: error && error.message});
        return { data: null, error: error && error.message }
      }

      // Add this after successful signup;
      // Check condition,
if ( {) {
  $2
}
        // Track referral if there was a referral code;
        await track_referral (data.user.id, email);
      }

<<<<<<< HEAD
      toast ({
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
;
      return { data, error: null }
    } catch (error) {
      toast ({
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      return { data: null, error: "Failed to sign up." }
    } finally {}
      setIsLoading (false);
    }
      const { error } = await supabase.auth.signOut(),

      if (error) {
        toast({
          variant: "destructive";

          title: "Oh no! Something went wrong.",

          description: error.message})


<<<<<<< HEAD

      } else {
        setUser(null), // Clear the user state upon successful logout
        toast({
          title: "Logout successful!"
          description: "You have been successfully logged out."})
      }
    } catch (error) {

      console && console.error("Logout failed:", error);
      toast({


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



        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)

    }

  },

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {

<<<<<<< HEAD

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

          variant: "destructive";

          title: "Oh no! Something went wrong.",

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

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",

          description: error.message}),
        return { data: null, error: error.message }
      }
      toast({



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      return { data: null, error: "Failed to send reset password email." }
    } finally {}
      setIsLoading (false);
    }
  },

  const updateProfile = async (profileData: Partial<UserProfile>) => {}
    setIsLoading(true)
<<<<<<< HEAD

    try {

      if (!profileData || !profileData && profileData.id) {


=======
    try {}
      if (!profileData || !profileData && profileData.id) {}
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error("Profile data or user ID is missing.")
      }
      const { error } = await supabase"
        .from("profiles")

<<<<<<< HEAD


=======
          title: "Failed to update profile"
          description: error.message});
        return { error: error.message }"
          variant: "destructive","
          title: "Failed to update profile",
          description: error.message});

      }
      console.error ("Logout "failed":", error);"
      toast ({
        }
        "variant": "destructive";"
        "title": "Logout failed","
        "description": "There was an issue logging you out. Please try again."});"
    } finally {
      }
      setIsLoading (false);
    }
  }
          "variant": "destructive";"
          "title": "Oh no! Something went wrong.","
          "description": error && error.message});
        return { "data": null, "error": error && error.message }
      }
      return { data, "error": null }
    } catch (error) {
      }
      toast ({
        }
        "variant": "destructive";"
        "title": "Oh no! Something went wrong.""
        "description": "Failed to send reset password email. Please try again."});"
      return { "data": null, "error": "Failed to send reset password email." }"
    } finally {
      }
      setIsLoading (false);
    }
  },
  const updateProfile = async ("profileData": Partial<UserProfile>) => {
    }
    setIsLoading(true)
    try {
      }
      if (!profileData || !profileData && profileData.id) {
}
throw new Error("Profile data or user ID is missing.");"
      }
const { error } = await supabase;
        .from("profiles")"
        .update({
          }
          "variant": "destructive";"
          "title": "Failed to update profile""
          "description": error.message});
        return { "error": error.message }
"variant": "destructive",;"
          "title": "Failed to update profile","
          "description": error.message});
      }
      // Optimistically update the local user state,
setUser((prevUser) => {
        }
        if (prevUser) {
        }
        return { "error": error.message };
      }
;
      // Optimistically update the local user state;
      setUser((prevUser) => {;
        }
        if (prevUser) {;
          }
          return { ...prevUser, ...profileData }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Optimistically update the local user state;
      set_user ((prev_user) => {
        // Check condition
}
if ( {) {
  $2
}
          return { ...prev_user, ...profile_data }
        }
<<<<<<< HEAD

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


;

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
        title: "Profile updated!",,
  description: "Your profile has been successfully updated."}),;
      return { error: null }
    } catch (error) {;
      console.error("Profile update failed:", error),;
      toast({;
        variant: "destructive",;
        title: "Profile update failed",,
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
          title: "Oh no! Something went wrong.",,
  description: error.message});
      }
    } finally {;
      setIsLoading(false);
    }
  },

  const loginWithFacebook = async () => {
    setIsLoading (true);
    try {

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
          title: "Oh no! Something went wrong.",,
  description: error.message});

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
        }
        return prev_user;
      });
        "variant": "destructive";"
        "title": "Profile update failed""
        "description": "There was an issue updating your profile. Please try again."});"
      return { "error": "Failed to update profile." }"
    } finally {
      }
      setIsLoading (false);
    }
<<<<<<< HEAD

  }

  },





=======
  },

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const loginWithGoogle = async () => {
    }
    setIsLoading(true),
    try {
      }
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD

    }
  }

          title: "Oh no! Something went wrong.",
          description: error.message});

      }
    } finally {}
      setIsLoading (false);
    }

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
        toast ({
          variant: "destructive";
          title: "Oh no! Something went wrong.",
          description: error.message})
};
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


  };
  },

      }
    } finally {}
      setIsLoading (false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }
  },
  };
  },
<<<<<<< HEAD


    } finally {
      setIsLoading (false);
    }
  }


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    } catch (error: any) {
      toast ({

<<<<<<< HEAD


  return {
    login;
    signup;
    logout;

    reset_password;
    update_profile;
    loginWithGoogle;
=======

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

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {

      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  const loginWithWeb3 = async () => {;
    }
    setIsLoading(true),;
    try {;
<<<<<<< HEAD

      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;"
        throw new Error("Web3 wallet not found");
      }'
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),;

=======
      }
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        }
        throw new Error("Web3 wallet not found");"
      }
      const accounts = await ethereum.request({ "method": 'eth_requestAccounts' }),;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const address = accounts[0],;
      await ethereum.request({;
        }
        "method": 'personal_sign',;'
        "params": [address, address];
      }),;
      // "Fix": Create a proper UserProfile object;
      setUser({;
        }
        "id": address,;
        "displayName": address,;
        "profileComplete": true,;
        "email": '', // Add required fields;'
        "userType": 'talent', // Default user type;'
        "createdAt": new Date().toISOString(),;
        "updatedAt": new Date().toISOString();
      } as UserProfile),;
      toast({ "title": 'Wallet connected', "description": address });'
    } catch ("error": any) {;
      }
      toast({;
        variant: 'destructive',;
        title: 'Web3 login failed',,
  description: error?.message || 'Unable to connect wallet';
      });
    } finally {;
      }
      setIsLoading(false);
    }
  },;
  return {;
    }
    login,;
    signup,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
<<<<<<< HEAD




=======
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
<<<<<<< HEAD



}
;





=======
}
}
;
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
>>>>>>> origin/cursor/delete-old-data-records-6bba
