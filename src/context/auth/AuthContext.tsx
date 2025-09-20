import React from "react;";

export interface User {;
<<<<<<< HEAD
id: string; email: string;
displayName?: string;
avatar?: string;
role?: string;
isEmailVerified?: boolean;
createdAt?: string;
updatedAt?: string};
export interface AuthTokens {;
accessToken: string | null; refreshToken: string | null};
export interface AuthContextType {;
user: User | null; setUser: (user: User | null) => void;,
isLoading: boolean; setIsLoading: (loading: boolean) => void;,
onboardingStep: number; setOnboardingStep: (step: number) => void;,
tokens: AuthTokens; setTokens: (tokens: AuthTokens) => void};
=======
  id: string, email: string,
    displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string,
};
export interface AuthTokens {;
  accessToken: string | null, refreshToken: string | null,
};
export interface AuthContextType {;
  user: User | null, setUser: (user: User | null) => void,
    isLoading: boolean, setIsLoading: (loading: boolean) => void,
    onboardingStep: number, setOnboardingStep: (step: number) => void,
    tokens: AuthTokens, setTokens: (tokens: AuthTokens) => void,
};
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);</AuthContextType | undefined><//AuthContextType | undefined>