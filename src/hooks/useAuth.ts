import { useState, useEffect, useCallback } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role?: string;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  refreshToken: () => Promise<void>;
  clearError: () => void;
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  error: null,
};

export function useAuth(): AuthContextType {
  const [state, setState] = useState<AuthState>(initialState);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const userData = localStorage.getItem('user_data');

        if (token && userData) {
          const user = JSON.parse(userData);
          setState({
            user,
            isLoading: false,
            isAuthenticated: true,
            error: null,
          });
        } else {
          setState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
            error: null,
          });
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
          error: 'Failed to initialize authentication',
        });
      }
    };

    initializeAuth();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'user',
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const token = 'mock-jwt-token';

      // Store in localStorage
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(user));

      setState({
        user,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Login failed. Please check your credentials.',
      }));
    }
  }, []);

  const register = useCallback(async (email: string, password: string, name?: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data
      const user: User = {
        id: '1',
        email,
        name: name || email.split('@')[0],
        role: 'user',
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const token = 'mock-jwt-token';

      // Store in localStorage
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(user));

      setState({
        user,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Registration failed. Please try again.',
      }));
    }
  }, []);

  const logout = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      // Clear localStorage
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');

      setState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: null,
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Logout failed. Please try again.',
      }));
    }
  }, []);

  const updateUser = useCallback(async (userData: Partial<User>) => {
    if (!state.user) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const updatedUser = { ...state.user, ...userData, updatedAt: new Date().toISOString() };

      // Update localStorage
      localStorage.setItem('user_data', JSON.stringify(updatedUser));

      setState(prev => ({
        ...prev,
        user: updatedUser,
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to update user data.',
      }));
    }
  }, [state.user]);

  const refreshToken = useCallback(async () => {
    if (!state.isAuthenticated) return;

    try {
      // Simulate token refresh
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In a real app, you would validate the token and get a new one
      console.log('Token refreshed');
    } catch (error) {
      console.error('Token refresh failed:', error);
      // If refresh fails, logout the user
      await logout();
    }
  }, [state.isAuthenticated, logout]);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    login,
    register,
    logout,
    updateUser,
    refreshToken,
    clearError,
  };
}