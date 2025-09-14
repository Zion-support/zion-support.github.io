import React, { createContext, useContext } from 'react';

export interface User {
    id: string;
    email: string;
    name?: string;
    avatar_url?: string;
    role?: string;
    created_at?: string;
    updated_at?: string;
}

export interface AuthTokens {
    accessToken: string | null;
    refreshToken: string | null;
}

export interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    onboardingStep: number;
    tokens: AuthTokens;
    login: (email: string, password: string) => Promise<{ error: string | null }>;
    register: (name: string, email: string, password: string) => Promise<{ error: string | null }>;
    signup: (email: string, password: string, userData: any) => Promise<any>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    updateProfile: (updates: Partial<User>) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    loginWithFacebook: () => Promise<void>;
    loginWithTwitter: () => Promise<void>;
    loginWithWeb3: () => Promise<void>;
=======
interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  onboardingStep: number;
  setOnboardingStep: (step: number) => void;
  tokens: any;
  setTokens: (tokens: any) => void;
  login: (email: string, password: string) => Promise<any>;
  register: (name: string, email: string, password: string) => Promise<any>;
  signup: (email: string, password: string, userData: any) => Promise<any>;
  logout: () => void;
  resetPassword: (email: string) => Promise<any>;
  updateProfile: (data: any) => Promise<any>;
  loginWithGoogle: () => Promise<any>;
  loginWithFacebook: () => Promise<any>;
  loginWithTwitter: () => Promise<any>;
  loginWithWeb3: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthContext };
=======
export { AuthContext };
