import { useCallback } from 'react';

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

export const useAuthEventHandlers = () => {
  const handleLogin = useCallback((user: User, tokens: AuthTokens) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('tokens');
  }, []);

  const handleTokenRefresh = useCallback((newTokens: AuthTokens) => {
    localStorage.setItem('tokens', JSON.stringify(newTokens));
  }, []);

  return {
    handleLogin,
    handleLogout,
    handleTokenRefresh,
  };
};