import React, { createContext, useContext } from 'react.ts';

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
=======
  updatedAt?: string}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface AuthTokens {

  accessToken: string | null;
<<<<<<< HEAD
  refreshToken: string | null;
=======
  refreshToken: string | null}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {;
  const context = useContext(AuthContext);
<<<<<<< HEAD
  if (context = == null) {;
    throw new Error('useAuth must be used within an AuthProvider')};
  return context};
=======
  if (context = == null) {;
    throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export { AuthContext };
export type { User, AuthTokens, AuthContextType };}}}}