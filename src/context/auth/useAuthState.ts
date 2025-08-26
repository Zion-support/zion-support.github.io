import { useState } from 'react';
import { User, AuthTokens } from './AuthContext';

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null
  });

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