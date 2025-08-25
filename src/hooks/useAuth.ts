<<<<<<< HEAD
import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  userType: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin';
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

    checkAuth();
  }, []);

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
