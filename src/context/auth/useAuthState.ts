import { useState } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<Tokens>({ accessToken: null, refreshToken: null });

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep,
    tokens,
    setTokens,
  };
};