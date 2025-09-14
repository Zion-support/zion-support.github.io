import { useState, useEffect } from 'react';

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

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = () => {
      const storedUser = localStorage.getItem('zion_user');
      if (storedUser) {
        try {
          setAuthState({
            user: JSON.parse(storedUser),
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          console.error('Error parsing stored user:', error);
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    const mockUser: User = {
      id: '1',
      email,
      name: 'User',
      role: 'user'
    };
    
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
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
    return mockUser;
  };

  return {
    user: authState.user,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    login,
    logout,
    register,
    isAdmin: authState.user?.role === 'admin'
  };
};