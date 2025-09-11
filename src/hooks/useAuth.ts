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

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('zion_user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false
          });
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false
          });
        }
      } catch (error) {
        console.error('Error parsing stored user:', error);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual authentication logic
    const mockUser: User = {
      id: '1',
      email,
      name: 'Mock User',
      role: 'user'
    };
    
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });
    
    localStorage.setItem('authToken', 'dummy-token');
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    
    return mockUser;
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
    
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken');
  };

  const register = async (email: string, password: string, name: string) => {
    // Mock registration - replace with actual registration logic
    const mockUser: User = {
      id: '1',
      email,
      name,
      role: 'user'
    };
    
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });
    
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'dummy-token');
    
    return mockUser;
  };

  return {
    user: authState.user,
    loading: authState.isLoading,
    login,
    logout,
    register,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    isAdmin: authState.user?.role === 'admin'
  };
}