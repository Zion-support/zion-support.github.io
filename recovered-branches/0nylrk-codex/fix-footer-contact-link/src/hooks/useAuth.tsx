>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { create_context, useContext, useState, useEffect, ReactNode } from './react';
import { supabase } from '@/integrations / supabase / client';
import { AuthContext } from '@/context / auth / AuthContext';
import type { UserDetails as AuthUserDetails } from "@/types / auth";
// Define types for our context;
export interface UserDetails {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  id?: string;
  name?: string;
  email?: string;
  user_type?: string;
  display_name?: string;
  avatar_url?: string;
  headline?: string;
  profile_complete?: boolean;
  role?: string;

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======  user: UserDetails | null
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
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null),


  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
// Custom hook to use the auth context
export function useAuth(): AuthContextType {;
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      displayName: userData?.name || "New User",;
      name: userData?.name || "New User",;
      userType: userData?.userType,;
      profileComplete: false;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
    }
    return { error: null }
  };
  const loginWithGoogle = async () => {;
    console && console.log("Google login requested");
    // Mock implementation;
    setUser({ ;
      id: "google-user-id", ;
      email: "google@example && example.com", ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  },;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      displayName: "Twitter User",;
      name: "Twitter User",;
      profileComplete: true;
    });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (err) {
      console.error ('Web3 login failed', err);
    }
  }
==============

=======  },;
  const loginWithWeb3 = async () => {;
    // // // console.log("Web3 login requested"),;
    const ethereum = (window as any).ethereum,;
    if (!ethereum) {;
      console.warn("No wallet detected"),;
      return;
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    try {;
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];
      await ethereum && ethereum.request({;
        method: 'personal_sign',;
        params: [address, address];
      });
  // Check for existing session on mount;
  useEffect(() => {;
    // Mock loading state and then set a null user to simulate no session;    setIsLoading(true);
    setTimeout(() => {;
      setUser(null);
      setIsLoading(false);
    }, 100);
  }, []);


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    isLoading;
    signIn;
    signOut;
    signUp;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Add aliases for compatibility;
    login: signIn,;
    logout: signOut,;
    signup: signUp,;=======
    resetPassword;
    updateProfile;
    loginWithGoogle;
    loginWithFacebook;
    loginWithTwitter;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
  return context;
}
;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;