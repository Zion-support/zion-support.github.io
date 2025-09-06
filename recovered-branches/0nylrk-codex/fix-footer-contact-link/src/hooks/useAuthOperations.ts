<<<<<<< HEAD
=======
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { UserProfile } from '@/types/auth';
import { toast } from '@/hooks/use-toast';
import { trackReferral, checkUrlForReferralCode } from '@/utils/referralUtils';
import { cleanupAuthState } from '@/utils/authUtils';
}
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

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
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";
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
export function useAuthOperations(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>

  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
<<<<<<< HEAD
    checkUrlForReferralCode();
  }, []);
=======
    checkUrlForReferralCode()
  }, []),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const login = async ({ email, password }: { email: string, password: string }) => {
    setIsLoading(true),
    try {
      // Clean up any stale auth state before login
<<<<<<< HEAD
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({
        email;
        password});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
=======
      cleanupAuthState(),
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        return { data: null, error: error.message }
      }
      toast({
<<<<<<< HEAD
        title: "Login successful!"
        description: `Welcome back, ${email}!`});
      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign in. Please check your credentials."});
=======
        title: "Login successful!",
        description: `Welcome back, ${email}!`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials."}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return { data: null, error: "Failed to sign in." }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
<<<<<<< HEAD
            display_name: display_name}}});
      if (error) {
        toast({
          variant: "destructive";
          title: "Error during signup"
=======
            display_name: display_name}}}),

      if (error) {
        toast({
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
          description: error.message});
        return { data: null, error: error.message };
      }
      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data.user.id, email)
      }
<<<<<<< HEAD
      toast({
        title: "Signup successful!"
        description: `Welcome, ${display_name}! Please check your email to verify your account.`});
      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive";
        title: "Oh no! Something went wrong."
        description: "Failed to sign up. Please try again."});
=======

      toast({
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign up. Please try again."}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return { data: null, error: "Failed to sign up." }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const logout = async () => {
    setIsLoading(true),
    try {
<<<<<<< HEAD
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
=======
      const { error } = await supabase.auth.signOut(),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
        variant: "destructive";
        title: "Logout failed"
=======
        variant: "destructive",
        title: "Logout failed",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        description: "There was an issue logging you out. Please try again."})
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
<<<<<<< HEAD
        redirectTo: `${window.location.origin}/update-password`});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message});
=======
        redirectTo: `${window.location.origin}/update-password`}),

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`}),

      return { data, error: null }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again."}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return { data: null, error: "Failed to send reset password email." }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const updateProfile = async (profileData: Partial<UserProfile>) => {
    setIsLoading(true)
    try {
      if (!profileData |!profileData.id) {
        throw new Error("Profile data or user ID is missing.")
      }
<<<<<<< HEAD
      const { error } = await supabase
        .from("profiles")
=======
}

const { error } = await supabase
        .from('profiles')
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        .update({
<<<<<<< HEAD
          display_name: profileData.displayName;
          user_type: profileData.userType;
          profile_complete: profileData.profileComplete;
          bio: profileData.bio;
          avatar_url: profileData.avatarUrl
=======
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
          variant: "destructive";
          title: "Failed to update profile"
          description: error.message});
        return { error: error.message }
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
          return { ...prevUser, ...profileData }
        }
        return prevUser
<<<<<<< HEAD
      });
      toast({
        title: "Profile updated!"
        description: "Your profile has been successfully updated."});
=======
      }),

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."}),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return { error: null }
    } catch (error) {
      console.error("Profile update failed:", error),
      toast({
<<<<<<< HEAD
        variant: "destructive";
        title: "Profile update failed"
        description: "There was an issue updating your profile. Please try again."});
=======
        variant: "destructive",
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again."}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return { error: "Failed to update profile." }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
          description: error.message})
      }
    } finally {
      setIsLoading(false)
    }
  }
=======
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
  const loginWithFacebook = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "facebook"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
=======
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
      }
    } finally {
      setIsLoading(false)
    }
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const loginWithTwitter = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
        provider: "twitter"});
      if (error) {
        toast({
          variant: "destructive";
          title: "Oh no! Something went wrong."
          description: error.message})
=======
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
      }
    } finally {
      setIsLoading(false)
    }
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const loginWithWeb3 = async () => {
    setIsLoading(true),
    try {
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        throw new Error("Web3 wallet not found")
<<<<<<< HEAD
      }
<<<<<<< HEAD
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
=======
}

const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  return {
<<<<<<< HEAD
    login;
    signup;
    logout;
    resetPassword;
    updateProfile;
    loginWithGoogle;
=======
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
    loginWithFacebook;
    loginWithTwitter;

    loginWithWeb3}
<<<<<<< HEAD
}
=======
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
  };

}catch (error) {
  toast ({
  
}finally {
  setIsLoading (false) 

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

});
}//Add this after successful signup if (data?.user) {
  //Track referral if there was a referral code await trackReferral (data.user.id, email) 
}toast ({
  return {
  data, error: null 

}catch (error) {
  toast ({
  
}finally {
  setIsLoading (false) 

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

}catch (error) {
  toast ({
  
}finally {
  setIsLoading (false) 

};
const updateProfile = async (profileData: Partial<UserProfile>) => {
  setIsLoading (true);
try {
  if (!profileData || !profileData.id) {
  
}
}

const {
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

}return prevUser;
});

};
const loginWithGoogle = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.auth.signInWithOAuth ({
  

}finally {
  setIsLoading (false) 

};
const loginWithFacebook = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.auth.signInWithOAuth ({
  

}finally {
  setIsLoading (false) 

};
const loginWithTwitter = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.auth.signInWithOAuth ({
  

}finally {
  setIsLoading (false) 

};
const loginWithWeb3 = async () => {
  setIsLoading (true);
try {
  const ethereum = (window as any) .ethereum;
if (!ethereum) {
  
}
}

const accounts = await ethereum.request ({
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

};

  login;
signup;
logout;
resetPassword;
updateProfile;
loginWithGoogle;
loginWithFacebook;
loginWithTwitter;
loginWithWeb3 
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
