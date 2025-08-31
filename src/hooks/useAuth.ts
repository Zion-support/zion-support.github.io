import { useState, useEffect } from 'react';
import { safeStorage } from '@/utils/safeStorage';

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
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = () => {
      const storedUser = safeStorage.getItem('zion_user');
      const token = safeStorage.getItem('authToken');

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

    // Store user data
    safeStorage.setItem('zion_user', JSON.stringify(mockUser));
    safeStorage.setItem('authToken', 'mock-token');

    return mockUser;
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });

    // Clear stored data
    safeStorage.removeItem('zion_user');
    safeStorage.removeItem('authToken');
  };

  const register = async (email: string, password: string, name: string) => {
    // In a real app, you would make an API call to your backend
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
      userType: 'creator',
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    // Store user data
    safeStorage.setItem('zion_user', JSON.stringify(mockUser));
    safeStorage.setItem('authToken', 'mock-token');

    return mockUser;
  };

  const updateProfile = (updates: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      setAuthState({
        ...authState,
        user: updatedUser,
      });

      // Update stored data
      safeStorage.setItem('zion_user', JSON.stringify(updatedUser));
    }
  };

  return {
    user: authState.user,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    login,
    logout,
    register,
    updateProfile,
  };
}
