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

export const useAuthEventHandlers = () => {
  const handleSignIn = useCallback((user: User) => {
    console.log('User signed in:', user);
  }, []);

  const handleSignOut = useCallback(() => {
    console.log('User signed out');
  }, []);

  return {
    handleSignIn,
    handleSignOut
  };
};