import React, { createContext, useContext, useState, useEffect, ReactNode } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { AuthContext } from &quot;@/context/auth/AuthContext&quot;;
import type { UserDetails as AuthUserDetails } from &quot;@/types/auth&quot;;

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
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  // Aliases for compatibility with other components
  login: (email: string, password: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
}

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock auth functions for now - these would connect to Supabase in a real implementation
  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
    // console.log(&quot;Sign in attempted with:&quot;, email);
    // Mock successful sign-in
    setUser({ 
      id: &quot;mock-user-id&quot;, 
      email, 
      displayName: &quot;Mock User&quot;, 
      name: &quot;Mock User&quot;,
      avatarUrl: "&quot;,
      profileComplete: true,
      role: &quot;enterprise_admin&quot;,
      permissions: [&quot;billing_access&quot;, &quot;admin_access&quot;, &quot;team_management&quot;],
      companyId: &quot;company-123&quot;
    });
    return { error: null };
  };

  const signOut = async () => {
    // This would be replaced with actual Supabase auth
    // console.log(&quot;Sign out attempted&quot;);
    setUser(null);
  };

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    // console.log(&quot;Sign up attempted with:&quot;, email, userData);
    // Mock successful sign-up
    setUser({ 
      id: &quot;mock-user-id&quot;, 
      email, 
      displayName: userData?.name || &quot;New User&quot;,
      name: userData?.name || &quot;New User&quot;,
      userType: userData?.userType,
      profileComplete: false
    });
    return { error: null };
  };

  const resetPassword = async (email: string) => {
    // Mock implementation
    // console.log(&quot;Password reset requested for:&quot;, email);
    return { error: null };
  };

  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
    // console.log(&quot;Profile update requested with:&quot;, data);
    if (user) {
      setUser({ ...user, ...data });
    }
    return { error: null };
  };

  const loginWithGoogle = async () => {
    // console.log(&quot;Google login requested&quot;);
    // Mock implementation
    setUser({ 
      id: &quot;google-user-id&quot;, 
      email: &quot;google@example.com&quot;, 
      displayName: &quot;Google User&quot;,
      name: &quot;Google User&quot;,
      profileComplete: true
    });
  };

  const loginWithFacebook = async () => {
    // console.log(&quot;Facebook login requested&quot;);
    // Mock implementation
    setUser({ 
      id: &quot;facebook-user-id&quot;, 
      email: &quot;facebook@example.com&quot;, 
      displayName: &quot;Facebook User&quot;, 
      name: &quot;Facebook User&quot;,
      profileComplete: true
    });
  };

  const loginWithTwitter = async () => {
    // console.log(&quot;Twitter login requested&quot;);
    // Mock implementation
    setUser({
      id: &quot;twitter-user-id&quot;,
      email: &quot;twitter@example.com&quot;,
      displayName: &quot;Twitter User&quot;,
      name: &quot;Twitter User&quot;,
      profileComplete: true
    });
  };

  const loginWithWeb3 = async () => {
    // console.log(&quot;Web3 login requested&quot;);
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      console.warn(&quot;No wallet detected&quot;);
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      setUser({
        id: address,
        displayName: address,
        profileComplete: true
      });
    } catch (err) {
      console.error('Web3 login failed', err);
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    // Mock loading state and then set a null user to simulate no session
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 100);
  }, []);

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
    throw new Error(&quot;useAuth must be used within an AuthProvider");
  }
  return context;
}
