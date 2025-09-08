<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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
<<<<<<< HEAD
=======
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  clearError: () => void;
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
<<<<<<< HEAD
  logout: () => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  clearError: () => void;
=======
  logout: () => void;
  loading: boolean;
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

<<<<<<< HEAD
// Remove this since we have useAuth in hooks/useAuth.ts
=======
<<<<<<< HEAD
export const useAuth = (): AuthContextType => {
=======
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({ id: '1', email, name: 'User' });
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout, 
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
>>>>>>> origin/main
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
<<<<<<< HEAD
};
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

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

<<<<<<< HEAD
  const login = async (email: string, _password: string) => {
=======
  const login = async (email: string, password: string) => {
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
};