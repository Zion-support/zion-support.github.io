import React, { createContext, useContext, useState, useEffect, ReactNode } from "react",
import { supabase } from "@/integrations/supabase/client",
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
  user: UserDetails | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>,
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,
  // Aliases for compatibility with other components
  login: (email: string, password: string) => Promise<{ error: any }>,
  logout: () => Promise<void>;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>,
  resetPassword: (email: string) => Promise<{ error: any }>,
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>,
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>
}

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null),
  const [isLoading, setIsLoading] = useState(true);
  // Mock auth functions for now - these would connect to Supabase in a real implementation
  const signIn = null;
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
;