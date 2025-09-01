import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
import { subscribeToPush } from "@/utils/pushSubscription";

interface User {

  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
:src/hooks/useAuth.tsx
  avatarUrl?: string}
  avatarUrl?: string}

interface AuthState {

  user: User | null;
  isAuthenticated: boolean;
:src/hooks/useAuth.tsx
  isLoading: boolean;
  isLoading: boolean}

}
;
export function useAuth(...args: unknown[]): unknown {
  const [authState, setAuthState] = useState<AuthState>({

    user: null,
    isAuthenticated: false,
    isLoading: true});

  // Mock auth functions for now - these would connect to Supabase in a real implementation
  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign in attempted with:", email);
    // Mock successful sign-in
    setUser({
      id: "mock-user-id", 
      email, 
      displayName: "Mock User", 
      name: "Mock User",
      avatarUrl: "",
      profileComplete: true,
      role: "enterprise_admin",
      permissions: ["billing_access", "admin_access", "team_management"],
      companyId: "company-123"
    });
    // Subscribe user to push notifications after login
    try {
      await subscribeToPush();
    } catch (err) {
      console.error('Push subscription error', err);
    }
    return { error: null };
  };

  return {

    ...authState,
    login,
    logout,
    register,
:src/hooks/useAuth.tsx
    updateProfile}}
<<<<<<< HEAD
=======
'
    updateProfile,
  }}
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
