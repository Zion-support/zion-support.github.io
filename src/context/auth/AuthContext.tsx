import React, { createContext, useContext } from 'react.ts';

interface User {
  id: string;
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
login: (email: string, password: string)  => Promise<>;
  register: (name: string, email: string, password: string)  => Promise<>;
  signup: (email: string, password: string, userData: )  => Promise<>;
  logout: ()  => Promise<>;
  resetPassword: (email: string)  => Promise<>;
  updateProfile: (updates: Partial<User>)  => Promise<>;
  loginWithGoogle: ()  => Promise<>;
  loginWithFacebook: ()  => Promise<>;
  loginWithTwitter: ()  => Promise<>;
  loginWithWeb3: ()  => Promise<>;
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