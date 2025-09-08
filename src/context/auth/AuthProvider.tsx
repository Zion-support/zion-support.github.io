import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name?: string) => Promise<void>;
  isLoading: boolean;
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
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    // Check for existing session on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        if (token) {
          // In a real app, you would validate the token with your backend
          const userData = JSON.parse(localStorage.getItem('user-data') || '{}');
          setUser(userData);
          await new Promise(resolve => setTimeout(resolve, 0)); // Add await to fix async warning
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-data');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, you would make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 100)); // Add await to fix async warning
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
      };

      const mockToken = 'mock-jwt-token';
      
      localStorage.setItem('auth-token', mockToken);
      localStorage.setItem('user-data', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name?: string) => {
    setIsLoading(true);
    try {
      // In a real app, you would make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 100)); // Add await to fix async warning
      const mockUser: User = {
        id: '1',
        email,
        name: name || email.split('@')[0],
      };

      const mockToken = 'mock-jwt-token';
      
      localStorage.setItem('auth-token', mockToken);
      localStorage.setItem('user-data', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-data');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        register,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};