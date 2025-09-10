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

export const useAuthState = (): [User | null, React.Dispatch<React.SetStateAction<User | null>>] => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [tokens, setTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null,
  });

  useEffect(() => {
    // Initialize auth state from localStorage
    const savedUser = localStorage.getItem('user');
    const savedTokens = localStorage.getItem('tokens');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    if (savedTokens) {
      setTokens(JSON.parse(savedTokens));
    }
    
    setIsLoading(false);
  }, []);

  return [user, setUser];
};