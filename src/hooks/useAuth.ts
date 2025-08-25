<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
import { useState, useEffect } from 'react';

interface User {
  id: string;
<<<<<<< HEAD
  email: string;
<<<<<<< HEAD
  name: string;
  role: 'user' | 'admin';
  userType: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin';
=======
  name?: string;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        // In a real app, you would validate the token with your backend
        setAuthState({
          user: {
            id: '1',
            email: 'user@example.com',
            name: 'John Doe',
            role: 'user',
            userType: 'creator',
          },
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };
=======
    // Simulate auth check
    const timer = setTimeout(() => {
      setLoading(false);
      // For now, no user is logged in
      setUser(null);
    }, 1000);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857

    return () => clearTimeout(timer);
  }, []);

<<<<<<< HEAD
  const login = async (email: string, _password: string) => {
    // In a real app, you would make an API call to your backend
    setAuthState({
      user: {
        id: '1',
        email,
        name: 'John Doe',
        role: 'user',
        userType: 'creator',
      },
      isAuthenticated: true,
      isLoading: false,
    });
    localStorage.setItem('authToken', 'dummy-token');
  };
=======
import { useState } from 'react'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  })

  const login = async (email: string, password: string) => {
    setAuthState({ ...authState, isLoading: true })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const user: User = {
        id: '1',
        email,
        name: 'User',
      }
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      })
      
      return { success: true }
    } catch (error) {
      setAuthState({ ...authState, isLoading: false })
      return { success: false, error: 'Login failed' }
    }
  }
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
<<<<<<< HEAD
    });
    localStorage.removeItem('authToken');
  };
=======
    })
  }

  const signup = async (email: string, password: string, name: string) => {
    setAuthState({ ...authState, isLoading: true })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const user: User = {
        id: '1',
        email,
        name,
      }
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      })
      
      return { success: true }
    } catch (error) {
      setAuthState({ ...authState, isLoading: false })
      return { success: false, error: 'Signup failed' }
    }
  }
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  return {
    ...authState,
    login,
    logout,
<<<<<<< HEAD
  };
};
=======
    signup,
  }
}
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
  name?: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  isLoading: boolean;
}

export function useAuth(): AuthContextType {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage or session
    const storedUser = localStorage.getItem('zion_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('zion_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };
      
      setUser(mockUser);
      localStorage.setItem('zion_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      localStorage.removeItem('zion_user');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name,
        email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };
      
      setUser(mockUser);
      localStorage.setItem('zion_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    login,
    logout,
    signup,
    isLoading
  };
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
  const signIn = async (email: string, password: string) => {
    // Simulate sign in
    return { success: true };
  };

  const signOut = async () => {
    setUser(null);
  };

  return {
    user,
    loading,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
