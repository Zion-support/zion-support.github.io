import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Return a default auth state for development
    return {
      user: null,
      isAuthenticated: false,
      login: async () => {},
      logout: async () => {},
      isLoading: false,
    };
  }
  return context;
};