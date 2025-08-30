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