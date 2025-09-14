import React, { createContext, useContext } from 'react';

export interface User {
    id: string;
    email: string;
    name?: string;
    avatar_url?: string;
    role?: string;
    created_at?: string;
    updated_at?: string;
}

export interface AuthTokens {
    accessToken: string | null;
    refreshToken: string | null;
}

export interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    onboardingStep: number;
    tokens: AuthTokens;
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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthContext };