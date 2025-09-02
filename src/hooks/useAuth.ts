import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser, logoutUser, checkAuthStatus, selectUser, selectIsAuthenticated, selectIsLoading } from '@/store/authSlice';

interface User {
  id: number;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);

  const login = useCallback(async (credentials: { email: string; password: string }) => {
    try {
      const result = await dispatch(loginUser(credentials)).unwrap();
      return { success: true, user: result.user };
    } catch (error) {
      return { success: false, error: error as string };
    }
  }, [dispatch]);

  const signup = useCallback(async (userData: { email: string; password: string; name: string }) => {
    try {
      const result = await dispatch(signupUser(userData)).unwrap();
      return { success: true, user: result.user };
    } catch (error) {
      return { success: false, error: error as string };
    }
  }, [dispatch]);

  const logout = useCallback(async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      return { success: true };
    } catch (error) {
      return { success: false, error: error as string };
    }
  }, [dispatch]);

  const checkAuth = useCallback(async () => {
    try {
      await dispatch(checkAuthStatus()).unwrap();
      return { success: true };
    } catch (error) {
      return { success: false, error: error as string };
    }
  }, [dispatch]);

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    checkAuth
  };
}

export default useAuth;
