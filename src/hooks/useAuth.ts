import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  userType: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const register = async (userData: RegisterData): Promise<void> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
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
      
      // Mock user data - in a real app this would come from your API
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: userData.email,
        name: userData.name,
        role: userData.role || 'user',
        avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face`,
        company: userData.company,
        phone: userData.phone,
        location: userData.location,
        bio: userData.bio,
        skills: userData.skills || [],
        experience: userData.experience || 0,
        hourlyRate: userData.hourlyRate || 0,
        rating: 0,
        reviewCount: 0,
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Registration failed. Please try again.',
      }));
      throw error;
    }
  };

  const updateProfile = async (userData: Partial<User>): Promise<void> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      if (!authState.user) {
        throw new Error('No user logged in');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser: User = {
        ...authState.user,
        ...userData,
        updatedAt: new Date(),
      };

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      setAuthState(prev => ({
        ...prev,
        user: updatedUser,
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Profile update failed. Please try again.',
      }));
      throw error;
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would send a password reset email
      console.log(`Password reset email sent to ${email}`);
      
      setAuthState(prev => ({ ...prev, isLoading: false, error: null }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Password reset failed. Please try again.',
      }));
      throw error;
    }
  };

  const clearError = (): void => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    register,
    updateProfile,
    resetPassword,
    clearError,
  };

  return value;
}
