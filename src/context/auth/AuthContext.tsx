import React, { createContext, useContext } from 'react';

<<<<<<< HEAD
interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  signup: (email: string, password: string, userData: any) => Promise<any>;
  register: (name: string, email: string, password: string) => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updateProfile: (updates: Partial<User>) => Promise<{ error: string | null }>;
  loginWithGoogle: () => Promise<{ error: string | null }>;
  loginWithFacebook: () => Promise<{ error: string | null }>;
  loginWithTwitter: () => Promise<{ error: string | null }>;
  loginWithWeb3: () => Promise<{ error: string | null }>;
  onboardingStep: number;
  setOnboardingStep: (step: number) => void;
  tokens: { accessToken: string | null; refreshToken: string | null };
  setTokens: (tokens: { accessToken: string | null; refreshToken: string | null }) => void;
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

<<<<<<< HEAD
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };
export type { User, AuthContextType };
=======
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthContext };
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
