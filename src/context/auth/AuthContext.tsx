import React, { createContext, useContext } from 'react.ts';

interface User {


  id: anystring;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;


}

interface AuthTokens {


  accessToken: string | null;
  refreshToken: string | null;


}

interface AuthContextType {


  user: User | null;
  isLoading: boolean;
  onboardingStep: number;
  tokens: AuthTokens;
login: (email: string, password: string)   => Promise<any>;
  register: (name: string, email: string, password: string)   => Promise<any>;
  signup: (email: string, password: string, userData: any)   => Promise<any>;
  logout: ()   => Promise<any>;
  resetPassword: (email: string)   => Promise<any>;
  updateProfile: (updates: Partial<User>)   => Promise<any>;
  loginWithGoogle: ()   => Promise<any>;
  loginWithFacebook: ()   => Promise<any>;
  loginWithTwitter: ()   => Promise<any>;
  loginWithWeb3: ()   => Promise<any>;

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
export type { User, AuthTokens, AuthContextType };