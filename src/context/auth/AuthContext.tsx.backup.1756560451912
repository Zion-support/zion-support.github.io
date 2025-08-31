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
updatedAt?: string;










}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface AuthTokens {












  accessToken: string | null;
<<<<<<< HEAD
  refreshToken: string | null;
=======
refreshToken: anyanyanyanyanyanyanyanyanyanyanystring | null;










}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface AuthContextType {












  user: User | null;
  isLoading: boolean;
  onboardingStep: number;
  tokens: AuthTokens;
<<<<<<< HEAD
login: (email: string, password: string)            => Promise<any>;
  register: anyanyanyanyanyanyanyanyanyany(name: string, email: string, password: string)            => Promise<any>;
  signup: anyanyanyanyanyanyanyanyanyany(email: string, password: string, userData: )            => Promise<any>;
  logout: anyanyanyanyanyanyanyanyanyanyany()            => Promise<any>;
  resetPassword: anyanyanyanyanyanyanyanyanyanyany(email: string)            => Promise<any>;
  updateProfile: anyanyanyanyanyanyanyanyanyanyany(updates: Partial<User>)            => Promise<any>;
  loginWithGoogle: anyanyanyanyanyanyanyanyanyanyany()            => Promise<any>;
  loginWithFacebook: anyanyanyanyanyanyanyanyanyanyany()            => Promise<any>;
  loginWithTwitter: anyanyanyanyanyanyanyanyanyanyany()            => Promise<any>;
  loginWithWeb3: anyanyanyanyanyanyanyanyanyanyany()            => Promise<any>;
=======
login: anyanyanyanyanyanyanyanyanyanyany(email: string, password: string)             => Promise<any>;
  register: anyanyanyanyanyanyanyanyanyanyany(name: string, email: string, password: string)             => Promise<any>;
  signup: anyanyanyanyanyanyanyanyanyanyany(email: string, password: string, userData)             => Promise<any>;
  logout: anyanyanyanyanyanyanyanyanyanyany()             => Promise<any>;
  resetPassword: anyanyanyanyanyanyanyanyanyanyany(email: string)             => Promise<any>;
  updateProfile: anyanyanyanyanyanyanyanyanyanyany(updates: Partial<User>)             => Promise<any>;
  loginWithGoogle: anyanyanyanyanyanyanyanyanyanyany()             => Promise<any>;
  loginWithFacebook: anyanyanyanyanyanyanyanyanyanyany()             => Promise<any>;
  loginWithTwitter: anyanyanyanyanyanyanyanyanyanyany()             => Promise<any>;
loginWithWeb3: anyanyanyanyanyanyanyanyanyanyany()             => Promise<any>;









}
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