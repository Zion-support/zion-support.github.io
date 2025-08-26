import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  register: (name: string, email: string, password: string) => Promise<{ error: string | null }>;
  signup: (email: string, password: string, userData: any) => Promise<any>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockUser: User = { id: '1', email, name: 'User' };
      setUser(mockUser);
      return { error: null };
    } catch (error) {
      return { error: 'Login failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock registration - replace with actual registration logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockUser: User = { id: '1', email, name };
      setUser(mockUser);
      return { error: null };
    } catch (error) {
      return { error: 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, userData: any) => {
    return register(userData?.name || 'User', email, password);
  };

  const logout = async () => {
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    // Mock password reset
    console.log('Password reset requested for:', email);
  };

  const updateProfile = async (data: any) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  const loginWithGoogle = async () => {
    // Mock Google login
    console.log('Google login requested');
  };

  const loginWithFacebook = async () => {
    // Mock Facebook login
    console.log('Facebook login requested');
  };

  const loginWithTwitter = async () => {
    // Mock Twitter login
    console.log('Twitter login requested');
  };

  const loginWithWeb3 = async () => {
    // Mock Web3 login
    console.log('Web3 login requested');
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export type { AuthContextType, User };