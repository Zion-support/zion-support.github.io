<<<<<<< HEAD
import { useState } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
=======
import { useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  display_name?: string;
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  created_at?: string;
  updated_at?: string;
}

<<<<<<< HEAD
export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<{ accessToken: string | null; refreshToken: string | null }>({
=======
export interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface OnboardingStep {
  current: number;
  total: number;
  completed: boolean;
}

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>({
    current: 1,
    total: 3,
    completed: false
  });
  const [tokens, setTokens] = useState<Tokens>({
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
    accessToken: null,
    refreshToken: null
  });

<<<<<<< HEAD
=======
  // Initialize auth state from localStorage/sessionStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const storedAuth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
        const storedTokens = localStorage.getItem('tokens') || sessionStorage.getItem('tokens');
        
        if (storedAuth) {
          const authData = JSON.parse(storedAuth);
          setUser(authData.user || null);
        }
        
        if (storedTokens) {
          const tokenData = JSON.parse(storedTokens);
          setTokens(tokenData);
        }
      }
    } catch (error) {
      console.error('Error initializing auth state:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep,
    tokens,
    setTokens
  };
};