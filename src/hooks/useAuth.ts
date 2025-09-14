<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
<<<<<<< HEAD
  emailVerified: boolean;
  name?: string;
  avatar?: string;
=======
  name: string;
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
}

interface AuthState {
  user: User | null;
<<<<<<< HEAD
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name?: string) => Promise<void>;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth state in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Mock login - in production, this would make an API call
      const mockUser: User = {
        id: '1',
        email,
        emailVerified: true,
        name: email.split('@')[0],
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (email: string, password: string, name?: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Mock registration - in production, this would make an API call
      const mockUser: User = {
        id: '1',
        email,
        emailVerified: false,
        name: name || email.split('@')[0],
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
  };
}
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
=======
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
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
