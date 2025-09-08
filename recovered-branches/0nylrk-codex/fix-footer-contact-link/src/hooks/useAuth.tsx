



  permissions?: string[],
}
export interface AuthContextType {
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

  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>
  // Aliases for compatibility with other components;

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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null),




      permissions: ["billing_access", "admin_access", "team_management"];

      companyId: "company-123";
    });
    return { error: null }








      userType: userData?.userType
      profileComplete: false
  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
    console.log("Profile update requested with:", data);

    if (user) {


    console.log("Google login requested");








    });
  };
  },;











  return <AuthContext && AuthContext.Provider value={value}>{children}</AuthContext && AuthContext.Provider>;
}


