import React, { createContext, useContext } from 'react';

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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };
export type { User, AuthContextType };