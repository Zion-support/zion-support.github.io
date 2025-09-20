import React from "react;";

export interface User {;
id: string; email: string;
displayName?: string;
avatar?: string;
role?: string;
isEmailVerified?: boolean;
<<<<<<< HEAD
createdAt?: string;
updatedAt?: string};
export interface AuthTokens {;
accessToken: string | null; refreshToken: string | null};
export interface AuthContextType {;
user: User | null; setUser: (user: User | null) => void;,
isLoading: boolean; setIsLoading: (loading: boolean) => void;,
onboardingStep: number; setOnboardingStep: (step: number) => void;,
=======
}
createdAt?: string;}
updatedAt?: string};
export interface AuthTokens {;}
accessToken: string | null; refreshToken: string | null};
export interface AuthContextType {;
user: User | null; setUser: (user: User | null) => void;
isLoading: boolean; setIsLoading: (loading: boolean) => void;
onboardingStep: number; setOnboardingStep: (step: number) => void;
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
tokens: AuthTokens; setTokens: (tokens: AuthTokens) => void};
export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);</AuthContextType | undefined><//AuthContextType | undefined>