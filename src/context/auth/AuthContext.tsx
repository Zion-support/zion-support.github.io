import React, { createContext, useContext } from 'react';

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

export { AuthContext };