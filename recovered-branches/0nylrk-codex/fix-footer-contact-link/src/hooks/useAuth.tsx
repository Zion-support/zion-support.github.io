

import React, { create_context, useContext, useState, useEffect, ReactNode } from './react';
import { supabase } from '@/integrations / supabase / client';
import { AuthContext } from '@/context / auth / AuthContext';
import type { UserDetails as AuthUserDetails } from "@/types / auth";
// Define types for our context;
export interface UserDetails {


  id?: string;
  name?: string;
  email?: string;
  user_type?: string;
  display_name?: string;
  avatar_url?: string;
  headline?: string;
  profile_complete?: boolean;
  role?: string;

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {supabase} from "@/integrations/supabase/client";
import {AuthContext} from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
// Define types for our context
export interface UserDetails {;

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

export function AuthProvider({ children }: { children: ReactNode }) {;
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null),
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true),



  // Mock auth functions for now - these would connect to Supabase in a real implementation

  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth



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


      permissions: ["billing_access", "admin_access", "team_management"];
      companyId: "company-123";
    });
    return { error: null }

    // // // console.log("Sign in attempted with:", email),
    // Mock successful sign-in
    setUser({
      id: "mock-user-id"
      email
      displayName: "Mock User"
      name: "Mock User"
      avatarUrl: ""
      profileComplete: true
      role: "enterprise_admin"
      permissions: ["billing_access", "admin_access", "team_management"];

    setUser({ 
      id: "mock-user-id", 
      email, 
      displayName: "Mock User", 
      name: "Mock User",
      avatarUrl: "",
      profileComplete: true,
      role: "enterprise_admin",
      permissions: ["billing_access", "admin_access", "team_management"]




  },



  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign up attempted with:", email, userData);


  const resetPassword = async (email: string) => {
    // Mock implementation
    console.log("Password reset requested for:", email);
    return { error: null }
  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
    console.log("Profile update requested with:", data);


    // Mock implementation
    setUser({
      id: "google-user-id"
      email: "google@example.com"
      displayName: "Google User"
      name: "Google User"
      profileComplete: true
    })

  }
  },

  const loginWithFacebook = async () => {
    // // // console.log("Facebook login requested"),


    // Mock implementation
    setUser({
      id: "facebook-user-id"
      email: "facebook@example.com"
      displayName: "Facebook User"
      name: "Facebook User"
      profileComplete: true
    })

  }
  },

  const loginWithTwitter = async () => {
    // // // console.log("Twitter login requested"),


    // Mock implementation
    setUser({
      id: "twitter-user-id"
      email: "twitter@example.com"
      displayName: "Twitter User"
      name: "Twitter User"
      profileComplete: true
    })

  }
  },


  const loginWithWeb3 = async () => {
    // // // console.log("Web3 login requested"),
    const ethereum = (window as any).ethereum,
    if (!ethereum) {



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



      displayName: userData?.name || "New User",;
      name: userData?.name || "New User",;
      userType: userData?.userType,;
      profileComplete: false;


    }
    return { error: null }
  };
  const loginWithGoogle = async () => {;
    console && console.log("Google login requested");
    // Mock implementation;
    setUser({ ;
      id: "google-user-id", ;
      email: "google@example && example.com", ;


      displayName: "Google User",;
      name: "Google User",;
      profileComplete: true;
    });

  };

  },;

  const loginWithFacebook = async () => {;
    console && console.log("Facebook login requested");
    // Mock implementation;
    setUser({ ;
      id: "facebook-user-id", ;
      email: "facebook@example && example.com", ;
      displayName: "Facebook User", ;
      name: "Facebook User",;
      profileComplete: true;
    });

  };

  },;

  const loginWithTwitter = async () => {;
    console && console.log("Twitter login requested");
    // Mock implementation;
    setUser({;
      id: "twitter-user-id",;



      displayName: "Twitter User",;
      name: "Twitter User",;
      profileComplete: true;
    });


    } catch (err) {
      console.error ('Web3 login failed', err);
    }
  }


    isLoading;
    signIn;
    signOut;
    signUp;


    // Add aliases for compatibility;
    login: signIn,;
    logout: signOut,;
    signup: signUp,;



    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;


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



  }
;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


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


