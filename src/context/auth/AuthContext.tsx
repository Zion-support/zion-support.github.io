import React, { createContext, useContext } from 'react.ts';
interface User {
<<<<<<< HEAD
=======















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string}
interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null}
interface AuthContextType {
=======
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
refreshToken: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring | null;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface AuthContextType {















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  user: User | null;
  isLoading: boolean;
  onboardingStep: number;
  tokens: AuthTokens;
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
login: (email: string, password: string)               => Promise<any>;
  register: anyanyanyanyanyanyanyanyanyanyanyanyany(name: string, email: string, password: string)               => Promise<any>;
  signup: anyanyanyanyanyanyanyanyanyanyanyanyany(email: string, password: string, userData: )               => Promise<any>;
  logout: anyanyanyanyanyanyanyanyanyanyanyanyanyany()               => Promise<any>;
  resetPassword: anyanyanyanyanyanyanyanyanyanyanyanyanyany(email: string)               => Promise<any>;
  updateProfile: anyanyanyanyanyanyanyanyanyanyanyanyanyany(updates: Partial<User>)               => Promise<any>;
  loginWithGoogle: anyanyanyanyanyanyanyanyanyanyanyanyanyany()               => Promise<any>;
  loginWithFacebook: anyanyanyanyanyanyanyanyanyanyanyanyanyany()               => Promise<any>;
  loginWithTwitter: anyanyanyanyanyanyanyanyanyanyanyanyanyany()               => Promise<any>;
  loginWithWeb3: anyanyanyanyanyanyanyanyanyanyanyanyanyany()               => Promise<any>;
=======
login: anyanyanyanyanyanyanyanyanyanyanyanyanyany(email: string, password: string)                => Promise<any>;
  register: anyanyanyanyanyanyanyanyanyanyanyanyanyany(name: string, email: string, password: string)                => Promise<any>;
  signup: anyanyanyanyanyanyanyanyanyanyanyanyanyany(email: string, password: string, userData)                => Promise<any>;
  logout: anyanyanyanyanyanyanyanyanyanyanyanyanyany()                => Promise<any>;
  resetPassword: anyanyanyanyanyanyanyanyanyanyanyanyanyany(email: string)                => Promise<any>;
  updateProfile: anyanyanyanyanyanyanyanyanyanyanyanyanyany(updates: Partial<User>)                => Promise<any>;
  loginWithGoogle: anyanyanyanyanyanyanyanyanyanyanyanyanyany()                => Promise<any>;
  loginWithFacebook: anyanyanyanyanyanyanyanyanyanyanyanyanyany()                => Promise<any>;
  loginWithTwitter: anyanyanyanyanyanyanyanyanyanyanyanyanyany()                => Promise<any>;
loginWithWeb3: anyanyanyanyanyanyanyanyanyanyanyanyanyany()                => Promise<any>;












}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {;
  const context = useContext(AuthContext);
  if (context = == null) {;
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
export { AuthContext };
export type { User, AuthTokens, AuthContextType };