import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        // Mock authentication check
        const token = localStorage.getItem('auth_token');
        if (token) {
          // In a real app, validate the token with your backend
          setAuthState({
            isAuthenticated: true,
            user: {
              id: '1',
              email: 'user@example.com',
              name: 'Demo User',
            },
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setAuthState({
          isAuthenticated: false,
          user: null,
          isLoading: false,
          error: 'Authentication check failed',
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Mock login - in a real app, call your authentication API
      if (email && password) {
        const token = 'mock_token_' + Date.now();
        localStorage.setItem('auth_token', token);
        
        setAuthState({
          isAuthenticated: true,
          user: {
            id: '1',
            email,
            name: 'Demo User',
          },
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Login failed',
      });
    }
  };

  const logout = async () => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      localStorage.removeItem('auth_token');
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Logout failed',
      }));
    }
  };

  const register = async (email: string, password: string, name?: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Mock registration - in a real app, call your registration API
      if (email && password) {
        const token = 'mock_token_' + Date.now();
        localStorage.setItem('auth_token', token);
        
        setAuthState({
          isAuthenticated: true,
          user: {
            id: '1',
            email,
            name: name || 'New User',
          },
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error('Invalid registration data');
      }
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Registration failed',
      });
    }
  };

  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        register,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
