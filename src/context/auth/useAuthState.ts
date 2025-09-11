import { useState, useEffect } from 'react';

interface User {
  id: string;
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

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null
  });

  useEffect(() => {
    // Check for existing auth state on mount
    const checkAuthState = async () => {
      try {
        if (typeof window !== 'undefined') {
          const auth = localStorage.getItem('auth') || sessionStorage.getItem('auth');
          if (auth) {
            const parsed = JSON.parse(auth);
            if (parsed.user && parsed.token) {
              setUser(parsed.user);
              setTokens({
                accessToken: parsed.token,
                refreshToken: parsed.refreshToken || null
              });
            }
          }
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthState();
  }, []);

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