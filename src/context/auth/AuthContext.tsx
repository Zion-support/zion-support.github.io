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
refreshToken: anyanyanyanyanyanyanyanyanyanystring | null;









}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface AuthContextType {











  user: User | null;
  isLoading: boolean;
  onboardingStep: number;
  tokens: AuthTokens;
<<<<<<< HEAD
login: (email: string, password: string)           => Promise<any>;
  register: anyanyanyanyanyanyanyanyany(name: string, email: string, password: string)           => Promise<any>;
  signup: anyanyanyanyanyanyanyanyany(email: string, password: string, userData: )           => Promise<any>;
  logout: anyanyanyanyanyanyanyanyanyany()           => Promise<any>;
  resetPassword: anyanyanyanyanyanyanyanyanyany(email: string)           => Promise<any>;
  updateProfile: anyanyanyanyanyanyanyanyanyany(updates: Partial<User>)           => Promise<any>;
  loginWithGoogle: anyanyanyanyanyanyanyanyanyany()           => Promise<any>;
  loginWithFacebook: anyanyanyanyanyanyanyanyanyany()           => Promise<any>;
  loginWithTwitter: anyanyanyanyanyanyanyanyanyany()           => Promise<any>;
  loginWithWeb3: anyanyanyanyanyanyanyanyanyany()           => Promise<any>;
=======
login: anyanyanyanyanyanyanyanyanyany(email: string, password: string)            => Promise<any>;
  register: anyanyanyanyanyanyanyanyanyany(name: string, email: string, password: string)            => Promise<any>;
  signup: anyanyanyanyanyanyanyanyanyany(email: string, password: string, userData)            => Promise<any>;
  logout: anyanyanyanyanyanyanyanyanyany()            => Promise<any>;
  resetPassword: anyanyanyanyanyanyanyanyanyany(email: string)            => Promise<any>;
  updateProfile: anyanyanyanyanyanyanyanyanyany(updates: Partial<User>)            => Promise<any>;
  loginWithGoogle: anyanyanyanyanyanyanyanyanyany()            => Promise<any>;
  loginWithFacebook: anyanyanyanyanyanyanyanyanyany()            => Promise<any>;
  loginWithTwitter: anyanyanyanyanyanyanyanyanyany()            => Promise<any>;
loginWithWeb3: anyanyanyanyanyanyanyanyanyany()            => Promise<any>;








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