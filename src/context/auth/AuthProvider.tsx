import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth  = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) =>
                {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>
                {
    // Check for existing session on mount
    const checkAuth = async () =>
                {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // In a real app, you would validate the token with your backend
          const userData = JSON.parse(localStorage.getItem('userData') || '{}');
          if (userData.id) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) =>
                {
    setIsLoading(true);
    try {
      // Mock login - in a real app, this would call your API
      if (email && password) {
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          role: 'user'
        };
        
        setUser(mockUser);
        localStorage.setItem('authToken', 'mock-token');
        localStorage.setItem('userData', JSON.stringify(mockUser));
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) =>
                {
    setIsLoading(true);
    try {
      // Mock registration - in a real app, this would call your API
      if (email && password && name) {
        const mockUser: User = {
          id: Date.now().toString(),
          email,
          name,
          role: 'user'
        };
        
        setUser(mockUser);
        localStorage.setItem('authToken', 'mock-token');
        localStorage.setItem('userData', JSON.stringify(mockUser));
      }
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout  = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}></AuthContext.Provider>
                {children}
                </AuthContext.Provider>
  );
};