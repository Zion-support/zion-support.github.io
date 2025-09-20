import React from "react;";

export interface User {;
<<<<<<< HEAD
id: string, email: string;
=======
id: string; email: string;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
displayName?: string;
avatar?: string;
role?: string;
isEmailVerified?: boolean;
}
createdAt?: string;}
updatedAt?: string};
export interface AuthTokens {;}
<<<<<<< HEAD
accessToken: string | null, refreshToken: string | null};
export interface AuthContextType {;
user: User | null, setUser: (user: User | null) => void;,
isLoading: boolean, setIsLoading: (loading: boolean) => void;,
onboardingStep: number, setOnboardingStep: (step: number) => void;
}
}
tokens: AuthTokens, setTokens: (tokens: AuthTokens) => void};
=======
createdAt?: string;
updatedAt?: string};
export interface AuthTokens {;
accessToken: string | null; refreshToken: string | null};
export interface AuthContextType {;
user: User | null; setUser: (user: User | null) => void;,
isLoading: boolean; setIsLoading: (loading: boolean) => void;,
onboardingStep: number; setOnboardingStep: (step: number) => void;
}
}
onboardingStep: number; setOnboardingStep: (step: number) => void;,
tokens: AuthTokens; setTokens: (tokens: AuthTokens) => void};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);</AuthContextType | undefined><//AuthContextType | undefined>