import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      try {
        // This would typically check for a token or make an API call
        const token = localStorage.getItem('authToken');
        if (token) {
          // Mock user data
          setAuthState({
            user: {
              id: '1',
              email: 'user@example.com',
              name: 'John Doe',
            },
            loading: false,
            isAuthenticated: true,
          });
        } else {
          setAuthState({
            user: null,
            loading: false,
            isAuthenticated: false,
          });
        }
      } catch (error) {
        setAuthState({
          user: null,
          loading: false,
          isAuthenticated: false,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock login logic
      const user = {
        id: '1',
        email,
        name: 'John Doe',
      };
      
      localStorage.setItem('authToken', 'mock-token');
      setAuthState({
        user,
        loading: false,
        isAuthenticated: true,
      });
      
      return { success: true, user };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthState({
      user: null,
      loading: false,
      isAuthenticated: false,
    });
  };

  return {
    ...authState,
    login,
    logout,
  };
};