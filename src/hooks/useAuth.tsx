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
      // Check if user is logged in (e.g., check localStorage, cookies, etc.)
      const storedUser = localStorage.getItem('zion_user');
      const token = localStorage.getItem('authToken');
      
      if (storedUser && token) {
        try {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error) {
          console.error('Error parsing stored user:', error);
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false
          });
        }
      } else {
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
    // Mock login for now
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'user',
      userType: 'business',
      displayName: 'John',
      avatarUrl: undefined
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: true, user: mockUser };
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken');
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });

    return { success: true };
  };

  const register = async (email: string, password: string, name: string) => {
    // Mock registration for now
    const mockUser: User = {
      id: '1',
      email,
      name,
      role: 'user',
      userType: 'business',
      displayName: name.split(' ')[0],
      avatarUrl: undefined
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: true, user: mockUser };
  };

  return {
    ...authState,
    login,
    logout,
    register
  };
}
