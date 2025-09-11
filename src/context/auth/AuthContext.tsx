import React, { createContext } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role?: string;
  onboardingStep?: number;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  onboardingStep: number;
  setOnboardingStep: (step: number) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
