import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'partner';
  avatar?: string;
  company?: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills?: string[];
  experience?: number;
  hourlyRate?: number;
  rating?: number;
  reviewCount?: number;
  isVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  role?: 'user' | 'admin' | 'partner';
  company?: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills?: string[];
  experience?: number;
  hourlyRate?: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in a real app this would come from your API
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'user',
        avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face`,
        company: 'Tech Corp',
        phone: '+1 555 123 4567',
        location: 'Middletown, DE',
        bio: 'Passionate technology professional with expertise in software development and IT solutions.',
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'],
        experience: 5,
        hourlyRate: 75,
        rating: 4.8,
        reviewCount: 127,
        isVerified: true,
        createdAt: new Date('2023-01-15'),
        updatedAt: new Date(),
      };

      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Invalid email or password. Please try again.',
      }));
      throw error;
    }
  };

  const logout = (): void => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const register = async (userData: RegisterData): Promise<void> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
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
