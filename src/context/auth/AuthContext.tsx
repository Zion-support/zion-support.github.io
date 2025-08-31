<<<<<<< HEAD
import React, { createContext, useContext } from 'react';

=======
import React, { createContext, useContext } from 'react.ts';
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
interface User {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string;
}

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

=======
  updatedAt?: string}
interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  onboardingStep: number;
  tokens: AuthTokens;
<<<<<<< HEAD
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
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

=======
login: (email: string, password: string)  => Promise<any>;
  register: (name: string, email: string, password: string)  => Promise<any>;
  signup: (email: string, password: string, userData)  => Promise<any>;
  logout: ()  => Promise<any>;
  resetPassword: (email: string)  => Promise<any>;
  updateProfile: (updates: Partial<User>)  => Promise<any>;
  loginWithGoogle: ()  => Promise<any>;
  loginWithFacebook: ()  => Promise<any>;
  loginWithTwitter: ()  => Promise<any>;
  loginWithWeb3: ()  => Promise<any>}
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {;
  const context = useContext(AuthContext);
  if (context = == null) {;
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
export { AuthContext };
export type { User, AuthTokens, AuthContextType };