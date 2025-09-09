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

export const useAuthState = (): [
  {
    user: User | null;
    isLoading: boolean;
    onboardingStep: number;
    tokens: AuthTokens;
  },
  React.Dispatch<React.SetStateAction<any>>
] => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null
  });

  useEffect(() => {
    // Initialize auth state from localStorage or API
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedTokens = localStorage.getItem('tokens');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        
        if (storedTokens) {
          setTokens(JSON.parse(storedTokens));
        }
      } catch (error) {
        console.error('Error initializing auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return [
    {
      user,
      isLoading,
      onboardingStep,
      tokens
    },
    setUser
  ];
};