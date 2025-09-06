<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",
import { supabase } from "@/integrations/supabase/client",
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
import React, { create_context, useContext, useState, useEffect, ReactNode } from './react';
import { supabase } from '@/integrations / supabase / client';
import { AuthContext } from '@/context / auth / AuthContext';
import type { UserDetails as AuthUserDetails } from "@/types / auth";
// Define types for our context;
export interface UserDetails {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
  id?: string;
  name?: string;
  email?: string;
  user_type?: string;
  display_name?: string;
  avatar_url?: string;
  headline?: string;
  profile_complete?: boolean;
  role?: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {supabase} from "@/integrations/supabase/client";
import {AuthContext} from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
// Define types for our context
export interface UserDetails {;
  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
  permissions?: string[];
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
// Define types for our context
export interface UserDetails {
  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
  permissions?: string[],
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string
}
export interface AuthContextType {
=======
import { AuthContext } from "@/context/auth/AuthContext",
import type { UserDetails as AuthUserDetails } from "@/types/auth",
// Define types for our context
export interface UserDetails {
  id?: string,
  name?: string,
  email?: string,
  userType?: string,
  displayName?: string,
  avatarUrl?: string,
  headline?: string,
  profileComplete?: boolean,
  role?: string,
  permissions?: string[],
  companyId?: string,
  bio?: string,
  createdAt?: string,
  updatedAt?: string
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { AuthContext } from "@/context/auth/AuthContext",;
import type { UserDetails as AuthUserDetails } from "@/types/auth",;
// Define types for our context;
export interface UserDetails {;
  id?: string,;
  name?: string,;
  email?: string,;
  userType?: string,;
  displayName?: string,;
  avatarUrl?: string,;
  headline?: string,;
  profileComplete?: boolean,;
  role?: string,;
  permissions?: string[],;
  companyId?: string,;
  bio?: string,;
  createdAt?: string,;
  updatedAt?: string;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export interface AuthContextType {;
  user: UserDetails | null,;
  isAuthenticated: boolean,;
  isLoading: boolean,;
  signIn: (email: string, password: string) => Promise<{ error: any }>,;
  signOut: () => Promise<void>,;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
  // Aliases for compatibility with other components;
  login: (email: string, password: string) => Promise<{ error: any }>,;
  logout: () => Promise<void>,;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
  resetPassword: (email: string) => Promise<{ error: any }>,;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>,;
  loginWithGoogle: () => Promise<void>,;
  loginWithFacebook: () => Promise<void>,;
  loginWithTwitter: () => Promise<void>,;
  loginWithWeb3: () => Promise<void>;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  user: UserDetails | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>
  // Aliases for compatibility with other components
  login: (email: string, password: string) => Promise<{ error: any }>
  logout: () => Promise<void>
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>
  resetPassword: (email: string) => Promise<{ error: any }>
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>
  loginWithGoogle: () => Promise<void>
  loginWithFacebook: () => Promise<void>
  loginWithTwitter: () => Promise<void>

  loginWithWeb3: () => Promise<void>
}
// Create a provider component
<<<<<<< HEAD
<<<<<<< HEAD

=======


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function AuthProvider({ children }: { children: ReactNode }) {;
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
=======
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null),
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
=======
  const [isLoading, setIsLoading] = useState(true),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Mock auth functions for now - these would connect to Supabase in a real implementation

  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
<<<<<<< HEAD
    console.log("Sign in attempted with:", email);
    // Mock successful sign-in

<<<<<<< HEAD
      companyId: "company-123"
    }),
    return { error: null }

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
export interface AuthContextType {;
  user: UserDetails | null,;
  isAuthenticated: boolean,;
  isLoading: boolean,;
  signIn: (email: string, password: string) => Promise<{ error: any }>,;
  signOut: () => Promise<void>,;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
  // Aliases for compatibility with other components;
  login: (email: string, password: string) => Promise<{ error: any }>,;
  logout: () => Promise<void>,;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,;
  resetPassword: (email: string) => Promise<{ error: any }>,;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>,;
  loginWithGoogle: () => Promise<void>,;
  loginWithFacebook: () => Promise<void>,;
  loginWithTwitter: () => Promise<void>,;
  loginWithWeb3: () => Promise<void>;
}
// Create a provider component;
export function AuthProvider(): any ({ children }: { children: ReactNode }) {;
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Mock auth functions for now - these would connect to Supabase in a real implementation;
  const signIn = async (email: string, password: string) => {;
    // This would be replaced with actual Supabase auth;
    console && console.log("Sign in attempted with:", email);
    // Mock successful sign-in;
    setUser({ ;
      id: "mock-user-id", ;
      email, ;
      displayName: "Mock User", ;
      name: "Mock User",;
      avatarUrl: "",;
      profileComplete: true,;
      role: "enterprise_admin",;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
      permissions: ["billing_access", "admin_access", "team_management"];
      companyId: "company-123";
    });
    return { error: null }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx


=======
    // // // console.log("Sign in attempted with:", email),
    // Mock successful sign-in
<<<<<<< HEAD
    setUser({
      id: "mock-user-id"
      email
      displayName: "Mock User"
      name: "Mock User"
      avatarUrl: ""
      profileComplete: true
      role: "enterprise_admin"
      permissions: ["billing_access", "admin_access", "team_management"];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setUser({ 
      id: "mock-user-id", 
      email, 
      displayName: "Mock User", 
      name: "Mock User",
      avatarUrl: "",
      profileComplete: true,
      role: "enterprise_admin",
      permissions: ["billing_access", "admin_access", "team_management"],
<<<<<<< HEAD

      companyId: "company-123"
    }),
    return { error: null }

  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const signOut = async () => {
    // This would be replaced with actual Supabase auth
    console.log("Sign out attempted");
    setUser(null)
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign up attempted with:", email, userData);
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      companyId: "company-123"
    }),
    return { error: null }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const signOut = async () => {
    // This would be replaced with actual Supabase auth
    // // // console.log("Sign out attempted"),
    setUser(null)
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    // // // console.log("Sign up attempted with:", email, userData),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Mock successful sign-up
    setUser({
      id: "mock-user-id"
      email
      displayName: userData?.name |"New User"
      name: userData?.name |"New User"
      userType: userData?.userType
      profileComplete: false
<<<<<<< HEAD
    });
    return { error: null }
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const resetPassword = async (email: string) => {
    // Mock implementation
    console.log("Password reset requested for:", email);
    return { error: null }
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
    console.log("Profile update requested with:", data);
=======
    }),
    return { error: null }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const resetPassword = async (email: string) => {
    // Mock implementation
    // // // console.log("Password reset requested for:", email),
    return { error: null }
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
    // // // console.log("Profile update requested with:", data),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (user) {
      setUser({ ...user, ...data })
    }
    return { error: null }
<<<<<<< HEAD
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const loginWithGoogle = async () => {
    console.log("Google login requested");
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const loginWithGoogle = async () => {
    // // // console.log("Google login requested"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Mock implementation
    setUser({
      id: "google-user-id"
      email: "google@example.com"
      displayName: "Google User"
      name: "Google User"
      profileComplete: true
    })
<<<<<<< HEAD
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const loginWithFacebook = async () => {
    console.log("Facebook login requested");
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const loginWithFacebook = async () => {
    // // // console.log("Facebook login requested"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Mock implementation
    setUser({
      id: "facebook-user-id"
      email: "facebook@example.com"
      displayName: "Facebook User"
      name: "Facebook User"
      profileComplete: true
    })
<<<<<<< HEAD
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const loginWithTwitter = async () => {
    console.log("Twitter login requested");
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const loginWithTwitter = async () => {
    // // // console.log("Twitter login requested"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Mock implementation
    setUser({
      id: "twitter-user-id"
      email: "twitter@example.com"
      displayName: "Twitter User"
      name: "Twitter User"
      profileComplete: true
    })
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
  };
  const signOut = async () => {;
    // This would be replaced with actual Supabase auth;
    console && console.log("Sign out attempted");
    setUser(null);
  };
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;
    console && console.log("Sign up attempted with:", email, userData);
    // Mock successful sign-up;
    setUser({ ;
      id: "mock-user-id", ;
      email, ;
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const loginWithWeb3 = async () => {
    // // // console.log("Web3 login requested"),
    const ethereum = (window as any).ethereum,
    if (!ethereum) {
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
      console.warn("No wallet detected");
      return
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign'
        params: [address, address]
      });
      setUser({
        id: address
        displayName: address
        profileComplete: true
      })
    } catch (err) {
      console.error('Web3 login failed', err)
    }
  }
  // Check for existing session on mount
  useEffect(() => {
    // Mock loading state and then set a null user to simulate no session
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false)
    }, 100)
  }, []);
  const value = {
    user;
    isAuthenticated: !!user
    isLoading;
    signIn;
    signOut;
    signUp;
    // Add aliases for compatibility
    login: signIn
    logout: signOut
    signup: signUp
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
<<<<<<< HEAD
// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Custom hook to use the auth context
export function useAuth(): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      console.warn("No wallet detected"),
      return
;
// Create a provider component;
export function AuthProvider({ children }: { children: ReactNode }) {;
  const [user, setUser] = useState<UserDetails | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  // Mock auth functions for now - these would connect to Supabase in a real implementation;
  const signIn = async (email: string, password: string) => {;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign in attempted with:", email),;
    // Mock successful sign-in;
    setUser({;
      id: "mock-user-id",;
      email,;
      displayName: "Mock User",;
      name: "Mock User",;
      avatarUrl: "",;
      profileComplete: true,;
      role: "enterprise_admin",;
      permissions: ["billing_access", "admin_access", "team_management"],;
      companyId: "company-123";
    }),;
    return { error: null }
  },;
  const signOut = async () => {;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign out attempted"),;
    setUser(null);
  },;
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign up attempted with:", email, userData),;
    // Mock successful sign-up;
    setUser({;
      id: "mock-user-id",;
      email,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      displayName: userData?.name || "New User",;
      name: userData?.name || "New User",;
      userType: userData?.userType,;
      profileComplete: false;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
    });
    return { error: null }
  };
  const resetPassword = async (email: string) => {;
    // Mock implementation;
    console && console.log("Password reset requested for:", email);
    return { error: null }
  };
  const updateProfile = async (data: Partial<UserDetails>) => {;
    // Mock implementation;
    console && console.log("Profile update requested with:", data);
    if (user) {;
      setUser({ ...user, ...data });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
  permissions?: string[];
  company_id?: string;
  bio?: string;
  created_at?: string;
  updated_at?: string;
}
export interface AuthContextType {
  user: UserDetails | null,
  is_authenticated: boolean,
  is_loading: boolean,
  sign_in: (email: string, password: string) => Promise<{ error: any }>,
  sign_out: () => Promise < void>,
  sign_up: (email: string, password: string, user_data?: Partial < UserDetails>) => Promise<{ error: any }>,
  // Aliases for compatibility with other components;
  login: (email: string, password: string) => Promise<{ error: any }>,
  logout: () => Promise < void>,
  signup: (email: string, password: string, user_data?: Partial < UserDetails>) => Promise<{ error: any }>,
  reset_password: (email: string) => Promise<{ error: any }>,
  update_profile: (data: Partial < UserDetails>) => Promise<{ error: any }>,
  loginWithGoogle: () => Promise < void>,
  loginWithFacebook: () => Promise < void>,
  loginWithTwitter: () => Promise < void>,
  loginWithWeb3: () => Promise < void>;
}
// Create a provider component;
export /**
 * AuthProvider - Function description
 */
function AuthProvider() {
  const [user, set_user] = useState < UserDetails | null>(null);
  const [is_loading, setIsLoading] = useState (true);
;
  // Mock auth functions for now - these would connect to Supabase in a real implementation;
  const sign_in = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth;
    console.log ("Sign in attempted with:", email);
    // Mock successful sign - in;
    set_user ({
      id: "mock - user - id",
      email,
      display_name: "Mock User",
      name: "Mock User",
      avatar_url: "",
      profile_complete: true,
      role: "enterprise_admin",
      permissions: ["billing_access", "admin_access", "team_management"];
      company_id: "company - 123";
    });
    return { error: null }
  }
;
  const sign_out = async () => {
    // This would be replaced with actual Supabase auth;
    console.log ("Sign out attempted");
    set_user (null);
  }
;
  const sign_up = async (email: string, password: string, user_data?: Partial < UserDetails>) => {
    // This would be replaced with actual Supabase auth;
    console.log ("Sign up attempted with:", email, user_data);
    // Mock successful sign - up;
    set_user ({
      id: "mock - user - id",
      email,
      display_name: user_data?.name || "New User",
      name: user_data?.name || "New User",
      user_type: user_data?.user_type,
      profile_complete: false;
    });
    return { error: null }
  }
;
  const reset_password = async (email: string) => {
    // Mock implementation;
    console.log ("Password reset requested for:", email);
    return { error: null }
  }
;
  const update_profile = async (data: Partial < UserDetails>) => {
    // Mock implementation;
    console.log ("Profile update requested with:", data);
    // Check condition
if ( {) {
  $2
}
      set_user ({ ...user, ...data });
    }
    return { error: null }
  }
;
  const loginWithGoogle = async () => {
    console.log ("Google login requested");
    // Mock implementation;
    set_user ({
      id: "google - user - id",
      email: "google@example.com",
      display_name: "Google User",
      name: "Google User",
      profile_complete: true;
    });
  }
;
  const loginWithFacebook = async () => {
    console.log ("Facebook login requested");
    // Mock implementation;
    set_user ({
      id: "facebook - user - id",
      email: "facebook@example.com",
      display_name: "Facebook User",
      name: "Facebook User",
      profile_complete: true;
    });
  }
;
  const loginWithTwitter = async () => {
    console.log ("Twitter login requested");
    // Mock implementation;
    set_user ({
      id: "twitter - user - id",
      email: "twitter@example.com",
      display_name: "Twitter User",
      name: "Twitter User",
      profile_complete: true;
    });
  }
;
  const loginWithWeb3 = async () => {
    console.log ("Web3 login requested");
    const ethereum = (window as any).ethereum;
    // Check condition
if ( {) {
  $2
}
      console.warn ("No wallet detected");
      return;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
    }
    return { error: null }
  };
  const loginWithGoogle = async () => {;
    console && console.log("Google login requested");
    // Mock implementation;
    setUser({ ;
      id: "google-user-id", ;
      email: "google@example && example.com", ;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }),;
    return { error: null }
  },;
  const resetPassword = async (email: string) => {;
    // Mock implementation;
    // // // console.log("Password reset requested for:", email),;
    return { error: null }
  },;
  const updateProfile = async (data: Partial<UserDetails>) => {;
    // Mock implementation;
    // // // console.log("Profile update requested with:", data),;
    if (user) {;
      setUser({ ...user, ...data });
    }
    return { error: null }
  },;
  const loginWithGoogle = async () => {;
    // // // console.log("Google login requested"),;
    // Mock implementation;
    setUser({;
      id: "google-user-id",;
      email: "google@example.com",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      displayName: "Google User",;
      name: "Google User",;
      profileComplete: true;
    });
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

  },;
========
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
=======
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const loginWithFacebook = async () => {;
    // // // console.log("Facebook login requested"),;
    // Mock implementation;
    setUser({;
      id: "facebook-user-id",;
      email: "facebook@example.com",;
      displayName: "Facebook User",;
      name: "Facebook User",;
      profileComplete: true;
    });
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
  },;
========
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
=======
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const loginWithTwitter = async () => {;
    // // // console.log("Twitter login requested"),;
    // Mock implementation;
    setUser({;
      id: "twitter-user-id",;
      email: "twitter@example.com",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      displayName: "Twitter User",;
      name: "Twitter User",;
      profileComplete: true;
    });
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
  };
  const loginWithWeb3 = async () => {;
    console && console.log("Web3 login requested");
    const ethereum = (window as any).ethereum;
    if (!ethereum) {;
      console && console.warn("No wallet detected");
      return;
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
      const accounts = await ethereum.request ({ method: 'eth_requestAccounts' }),
      const address = accounts[0];
      await ethereum.request ({
        method: 'personal_sign',
        params: [address, address];
      });
      set_user ({
        id: address,
        display_name: address,
        profile_complete: true;
      });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
    } catch (err) {
      console.error ('Web3 login failed', err);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  const loginWithWeb3 = async () => {;
    // // // console.log("Web3 login requested"),;
    const ethereum = (window as any).ethereum,;
    if (!ethereum) {;
      console.warn("No wallet detected"),;
      return;
    }
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
    try {;
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];
      await ethereum && ethereum.request({;
        method: 'personal_sign',;
        params: [address, address];
      });
=======
    try {;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0],;
      await ethereum.request({;
        method: 'personal_sign',;
        params: [address, address];
      }),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setUser({;
        id: address,;
        displayName: address,;
        profileComplete: true;
      });
    } catch (err) {;
<<<<<<< HEAD
      console && console.error('Web3 login failed', err);
    }
  };
  // Check for existing session on mount;
  useEffect(() => {;
    // Mock loading state and then set a null user to simulate no session;
    setIsLoading(true);
    setTimeout(() => {;
      setUser(null);
      setIsLoading(false);
    }, 100);
  }, []);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx


  const value = {;
    user;
    isAuthenticated: !!user,;

========
  const value = {;
    user;
    isAuthenticated: !!user,;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
    isLoading;
    signIn;
    signOut;
    signUp;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
    // Add aliases for compatibility;
    login: signIn,;
    logout: signOut,;
    signup: signUp,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
;
  // Check for existing session on mount;
  useEffect (() => {
    // Mock loading state and then set a null user to simulate no session;
    setIsLoading (true);
    set_timeout (() => {
      set_user (null);
      setIsLoading (false);
    }, 100);
  }, []);
;
  const value = {
    user;
    is_authenticated: !!user,
    is_loading;
    sign_in;
    sign_out;
    sign_up;
    // Add aliases for compatibility;
    login: sign_in,
    logout: sign_out,
    signup: sign_up,
    reset_password;
    update_profile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
    loginWithWeb3;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
  }
;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
    loginWithWeb3;
  };
  return <AuthContext && AuthContext.Provider value={value}>{children}</AuthContext && AuthContext.Provider>;
}
// Custom hook to use the auth context;
export function useAuth(): any (): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {;
    throw new Error("useAuth must be used within an AuthProvider");

  }
  return context;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
<<<<<<< HEAD
;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
// Custom hook to use the auth context;
export function use_auth (): AuthContextType {
  const context = useContext (AuthContext);
  // Check condition
if ( {) {
  $2
}
    throw new Error ("use_auth must be used within an AuthProvider");
  }
  return context;
=======
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { AuthContext } from "@/context/auth/AuthContext",;
import type { UserDetails as AuthUserDetails } from "@/types/auth",;
;
// Define types for our context;
export interface UserDetails {;
  id?:string,;
  name?:string,;
  email?:string,;
  userType?:string,;
  displayName?:string,;
  avatarUrl?:string,;
  headline?:string,;
  profileComplete?:boolean,;
  role?:string,;
  permissions?:string[],;
  companyId?:string,;
  bio?:string,;
  createdAt?:string,;
  updatedAt?:string,;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
export interface AuthContextType {;
  user:UserDetails | null,;
  isAuthenticated:boolean,;
  isLoading:boolean,;
  signIn:(email:string, password:string) => Promise<{ error:any }>,;
  signOut:() => Promise<void>,;
  signUp:(email:string, password:string, userData?:Partial<UserDetails>) => Promise<{ error:any }>,;
  // Aliases for compatibility with other components;
  login:(email:string, password:string) => Promise<{ error:any }>,;
  logout:() => Promise<void>,;
  signup:(email:string, password:string, userData?:Partial<UserDetails>) => Promise<{ error:any }>,;
  resetPassword:(email:string) => Promise<{ error:any }>,;
  updateProfile:(data:Partial<UserDetails>) => Promise<{ error:any }>,;
  loginWithGoogle:() => Promise<void>,;
  loginWithFacebook:() => Promise<void>,;
  loginWithTwitter:() => Promise<void>,;
  loginWithWeb3:() => Promise<void>;
}
;
// Create a provider component;
export function AuthProvider({ children } { children:ReactNode }) {;
  const [user, setUser] = useState<UserDetails | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
;
  // Mock auth functions for now - these would connect to Supabase in a real implementation;
  const signIn = async (email:string, password:string) => {;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign in attempted with:", email),;
    // Mock successful sign-in;
    setUser({ ;
      id:"mock-user-id", ;
      email, ;
      displayName:"Mock User", ;
      name:"Mock User",;
      avatarUrl:"",;
      profileComplete:true,;
      role:"enterprise_admin",;
      permissions:["billing_access", "admin_access", "team_management"],;
      companyId:"company-123";
    }),;
    return { error:null },;
  },;
;
  const signOut = async () => {;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign out attempted"),;
    setUser(null),;
  },;
;
  const signUp = async (email:string, password:string, userData?:Partial<UserDetails>) => {;
    // This would be replaced with actual Supabase auth;
    // // // console.log("Sign up attempted with:", email, userData),;
    // Mock successful sign-up;
    setUser({ ;
      id:"mock-user-id", ;
      email, ;
      displayName:userData?.name || "New User",;
      name:userData?.name || "New User",;
      userType:userData?.userType,;
      profileComplete:false;
    }),;
    return { error:null },;
  },;
;
  const resetPassword = async (email:string) => {;
    // Mock implementation;
    // // // console.log("Password reset requested for:", email),;
    return { error:null },;
  },;
;
  const updateProfile = async (data:Partial<UserDetails>) => {;
    // Mock implementation;
    // // // console.log("Profile update requested with:", data),;
    if (user) {;
      setUser({ ...user, ...data }),;
    }
    return { error:null },;
  },;
;
  const loginWithGoogle = async () => {;
    // // // console.log("Google login requested"),;
    // Mock implementation;
    setUser({ ;
      id:"google-user-id", ;
      email:"google@example.com", ;
      displayName:"Google User",;
      name:"Google User",;
      profileComplete:true;
    }),;
  },;
;
  const loginWithFacebook = async () => {;
    // // // console.log("Facebook login requested"),;
    // Mock implementation;
    setUser({ ;
      id:"facebook-user-id", ;
      email:"facebook@example.com", ;
      displayName:"Facebook User", ;
      name:"Facebook User",;
      profileComplete:true;
    }),;
  },;
;
  const loginWithTwitter = async () => {;
    // // // console.log("Twitter login requested"),;
    // Mock implementation;
    setUser({;
      id:"twitter-user-id",;
      email:"twitter@example.com",;
      displayName:"Twitter User",;
      name:"Twitter User",;
      profileComplete:true;
    }),;
  },;
;
  const loginWithWeb3 = async () => {;
    // // // console.log("Web3 login requested"),;
    const ethereum = (window as any).ethereum,;
    if (!ethereum) {;
      console.warn("No wallet detected"),;
      return,;
    }
    try {;
      const accounts = await ethereum.request({ method:'eth_requestAccounts' }),;
      const address = accounts[0],;
      await ethereum.request({;
        method:'personal_sign',;
        params:[address, address];
      }),;
      setUser({;
        id:address,;
        displayName:address,;
        profileComplete:true;
      }),;
    } catch (err) {;
      console.error('Web3 login failed', err),;
    }
  },;
;
=======
      console.error('Web3 login failed', err);
    }
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Check for existing session on mount;
  useEffect(() => {;
    // Mock loading state and then set a null user to simulate no session;
    setIsLoading(true),;
    setTimeout(() => {;
      setUser(null),;
<<<<<<< HEAD
      setIsLoading(false),;
    }, 100),;
  }, []),;
;
  const value = {;
    user,;
    isAuthenticated:!!user,;
=======
      setIsLoading(false);
    }, 100);
  }, []),;
  const value = {;
    user,;
    isAuthenticated: !!user,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    isLoading,;
    signIn,;
    signOut,;
    signUp,;
    // Add aliases for compatibility;
<<<<<<< HEAD
    login:signIn,;
    logout:signOut,;
    signup:signUp,;
=======
    login: signIn,;
    logout: signOut,;
    signup: signUp,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3;
<<<<<<< HEAD
  },;
;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>,;
}
;
// Custom hook to use the auth context;
export function useAuth():AuthContextType {;
  const context = useContext(AuthContext),;
  if (context === undefined) {;
    throw new Error("useAuth must be used within an AuthProvider"),;
  }
  return context,;   //This would be replaced with actual Supabase auth //Mock successful sign-in setUser ({
  id: "mock-user-id";
email;
displayName: "Mock User";
name: "Mock User";
avatarUrl: "";
profileComplete: true;
//Mock successful sign-up setUser ({
  id: " mock-user-id";
email;
displayName: userData?.name || " New User";
name: userData?.name || " New User";
userType: userData?.userType;
profileComplete: false 
});
return {
  error: null 
}
};
const resetPassword = async (email: string) => {
  //Mock implementation if (user) {
  setUser ({
  ...user, ...data 
}) 
}return {
  error: null 
}
};
const loginWithGoogle = async () => {
  //Mock implementation setUser ({
  id: " google-user-id";
email: " google@example.com";
displayName: " Google User";
name: " Google User";
profileComplete: true 
}) 
};
const loginWithFacebook = async () => {
  //Mock implementation setUser ({
  id: " facebook-user-id";
email: " facebook@example.com";
displayName: " Facebook User";
name: " Facebook User";
profileComplete: true 
}) 
};
const loginWithTwitter = async () => {
  //Mock implementation setUser ({
  id: " twitter-user-id";
email: " twitter@example.com";
displayName: " Twitter User";
name: " Twitter User";
profileComplete: true 
}) 
};
const loginWithWeb3 = async () => {
  
}try {
  const accounts = await ethereum.request ({
  method: 'eth requestAccounts' 
});
const address = accounts[0];
await ethereum.request ({
  method: 'personal sign';
params: [address, address] 
});
setUser ({
  id: address;
displayName: address;
profileComplete: true 
}) 
}catch (err) {
  console.error ('Web3 login failed', err) 
}
};
//Check for existing session on mount useEffect ( () => {
  //Mock loading state and then set a null user to simulate no session setIsLoading (true);
setTimeout ( () => {
  setUser (null);
setIsLoading (false) 
}, 100) 
}, []);
const value = {
  user;
isAuthenticated: !!user;
isLoading;
signIn;
signOut;
signUp;
//Add aliases for compatibility login: signIn;
logout: signOut;
signup: signUp;
resetPassword;
updateProfile;
loginWithGoogle;
loginWithFacebook;
loginWithTwitter;
loginWithWeb3 
};
return <AuthContext.Provider value= {
  value 
}> {
  children 
}</AuthContext.Provider> 
}// Custom hook to use the auth context export function useAuth () : AuthContextType {
  const context = useContext (AuthContext);
if (context === undefined) {
  
}return context;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.tsx
=======
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext),
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
;
// Custom hook to use the auth context;
export function useAuth(): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {;
    throw new Error("useAuth must be used within an AuthProvider");
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  return context;
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
