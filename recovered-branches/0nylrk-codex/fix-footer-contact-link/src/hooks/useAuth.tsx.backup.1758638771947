<<<<<<< HEAD
import React{ createContextuseContextuseStateuseEffectReactNode } from "react";
=======
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { supabase } from "@/integrations/supabase/client";
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
  permissions?: string[];
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthContextType {
  user: UserDetails | null;
  isAuthenticated: boolean;
  isLoading: boolean;
<<<<<<< HEAD
  signIn: (email: stringpassword: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signUp: (email: stringpassword: stringuserData?: Partial<UserDetails>) => Promise<{ error: any }>;
  // Aliases for compatibility with other components
  login: (email: stringpassword: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  signup: (email: stringpassword: stringuserData?: Partial<UserDetails>) => Promise<{ error: any }>;
=======
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  // Aliases for compatibility with other components
  login: (email: string, password: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
>>>>>>> origin/auto/autonomy-17186719616
  resetPassword: (email: string) => Promise<{ error: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
}

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
<<<<<<< HEAD
  const [usersetUser] = useState<UserDetails | null>(null);
  const [isLoadingsetIsLoading] = useState(true);

  // Mock auth functions for now - these would connect to Supabase in a real implementation
  const signIn = async (email: stringpassword: string) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign in attempted with:"email);
    // Mock successful sign-in
    setUser({ 
      id: "mock-user-id"
      email
      displayName: "Mock User"
=======
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock auth functions for now - these would connect to Supabase in a real implementation
  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign in attempted with:", email);
    // Mock successful sign-in
    setUser({ 
      id: "mock-user-id", 
      email, 
      displayName: "Mock User", 
>>>>>>> origin/auto/autonomy-17186719616
      name: "Mock User",
      avatarUrl: "",
      profileComplete: true,
      role: "enterprise_admin",
<<<<<<< HEAD
      permissions: ["billing_access"admin_access"team_management"],
=======
      permissions: ["billing_access", "admin_access", "team_management"],
>>>>>>> origin/auto/autonomy-17186719616
      companyId: "company-123"
    });
    return { error: null };
  };

  const signOut = async () => {
    // This would be replaced with actual Supabase auth
    console.log("Sign out attempted");
    setUser(null);
  };

<<<<<<< HEAD
  const signUp = async (email: stringpassword: stringuserData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign up attempted with:"emailuserData);
    // Mock successful sign-up
    setUser({ 
      id: "mock-user-id"
      email
=======
  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign up attempted with:", email, userData);
    // Mock successful sign-up
    setUser({ 
      id: "mock-user-id", 
      email, 
>>>>>>> origin/auto/autonomy-17186719616
      displayName: userData?.name || "New User",
      name: userData?.name || "New User",
      userType: userData?.userType,
      profileComplete: false
    });
    return { error: null };
  };

  const resetPassword = async (email: string) => {
    // Mock implementation
<<<<<<< HEAD
    console.log("Password reset requested for:"email);
=======
    console.log("Password reset requested for:", email);
>>>>>>> origin/auto/autonomy-17186719616
    return { error: null };
  };

  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
<<<<<<< HEAD
    console.log("Profile update requested with:"data);
    if (user) {
      setUser({ ...user...data });
=======
    console.log("Profile update requested with:", data);
    if (user) {
      setUser({ ...user, ...data });
>>>>>>> origin/auto/autonomy-17186719616
    }
    return { error: null };
  };

  const loginWithGoogle = async () => {
    console.log("Google login requested");
    // Mock implementation
    setUser({ 
<<<<<<< HEAD
      id: "google-user-id"
      email: "google@example.com"
=======
      id: "google-user-id", 
      email: "google@example.com", 
>>>>>>> origin/auto/autonomy-17186719616
      displayName: "Google User",
      name: "Google User",
      profileComplete: true
    });
  };

  const loginWithFacebook = async () => {
    console.log("Facebook login requested");
    // Mock implementation
    setUser({ 
<<<<<<< HEAD
      id: "facebook-user-id"
      email: "facebook@example.com"
      displayName: "Facebook User"
=======
      id: "facebook-user-id", 
      email: "facebook@example.com", 
      displayName: "Facebook User", 
>>>>>>> origin/auto/autonomy-17186719616
      name: "Facebook User",
      profileComplete: true
    });
  };

  const loginWithTwitter = async () => {
    console.log("Twitter login requested");
    // Mock implementation
    setUser({
      id: "twitter-user-id",
      email: "twitter@example.com",
      displayName: "Twitter User",
      name: "Twitter User",
      profileComplete: true
    });
  };

  const loginWithWeb3 = async () => {
    console.log("Web3 login requested");
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      console.warn("No wallet detected");
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
<<<<<<< HEAD
        params: [address]
=======
        params: [address, address]
>>>>>>> origin/auto/autonomy-17186719616
      });
      setUser({
        id: address,
        displayName: address,
        profileComplete: true
      });
    } catch (err) {
<<<<<<< HEAD
      console.error('Web3 login failed'err);
=======
      console.error('Web3 login failed', err);
>>>>>>> origin/auto/autonomy-17186719616
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    // Mock loading state and then set a null user to simulate no session
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
<<<<<<< HEAD
    }100);
  }[]);
=======
    }, 100);
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
    signUp,
    // Add aliases for compatibility
    login: signIn,
    logout: signOut,
    signup: signUp,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
