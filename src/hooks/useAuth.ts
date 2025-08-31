import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser, logoutUser, checkAuthStatus, clearError } from '../store/authSlice';

interface User {
  id: string;
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
  error: string | null;
}

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, error } = useSelector((state: any) => state.auth);

  const login = useCallback(async (credentials: { email: string; password: string }) => {
    try {
      const result = await dispatch(loginUser(credentials)).unwrap();
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message || 'Login failed' };
    }
  }, [dispatch]);

  const signup = useCallback(async (userData: { email: string; password: string; name: string }) => {
    try {
      const result = await dispatch(signupUser(userData)).unwrap();
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message || 'Signup failed' };
    }
  }, [dispatch]);

  const logout = useCallback(async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message || 'Logout failed' };
    }
  }, [dispatch]);

  const checkAuth = useCallback(async () => {
    try {
      const result = await dispatch(checkAuthStatus()).unwrap();
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message || 'Auth check failed' };
    }
  }, [dispatch]);

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    // Check auth status on mount
    checkAuth();
  }, [checkAuth]);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    signup,
    logout,
    checkAuth,
    clearAuthError
  };
}
