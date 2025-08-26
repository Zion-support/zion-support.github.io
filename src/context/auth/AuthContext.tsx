import React, { createContext, useContext } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  register: (name: string, email: string, password: string) => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updateProfile: (updates: Partial<User>) => Promise<{ error: string | null }>;
  loginWithGoogle: () => Promise<{ error: string | null }>;
  loginWithFacebook: () => Promise<{ error: string | null }>;
  loginWithTwitter: () => Promise<{ error: string | null }>;
  loginWithWeb3: () => Promise<{ error: string | null }>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};