<<<<<<< HEAD
import { useState, useEffect } from 'react';

interface User {
  id: string;
=======
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser, logoutUser, checkAuthStatus, selectUser, selectIsAuthenticated, selectIsLoading } from '@/store/authSlice';

interface User {
  id: number;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = () => {
      const storedUser = localStorage.getItem('zion_user');
      const token = localStorage.getItem('authToken');

      if (storedUser && token) {
        try {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          console.error('Error parsing stored user:', error);
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, you would make an API call to your backend
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'user',
      userType: 'creator',
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    localStorage.setItem('authToken', 'dummy-token');
    localStorage.setItem('zion_user', JSON.stringify(mockUser));

    return mockUser;
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken');
  };

  const register = async (email: string, password: string, name: string) => {
    // Implement actual registration logic here
    const mockUser: User = {
      id: '1',
      email,
      name,
      role: 'user'
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'dummy-token');

    return mockUser;
  };
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
<<<<<<< HEAD
    register,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    isAdmin: authState.user?.role === 'admin'
  };
}
=======
    checkAuth
  };
}

export default useAuth;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
