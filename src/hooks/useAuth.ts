import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

function useAuth() {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = async () => {
      setIsLoading(true);
      // Add your authentication logic here
      // For now, we'll just set loading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Add your login logic here
      // For now, we'll simulate a successful login
      const userData: User = {
        id: '1',
        email,
        name: email.split('@')[0]
      };
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Add your registration logic here
      // For now, we'll simulate a successful registration
      const userData: User = {
        id: '1',
        email,
        name
      };
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Registration failed' };
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
    register
  };
}

export default useAuth;