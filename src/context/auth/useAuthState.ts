import { useState } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<Tokens | null>(null);

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