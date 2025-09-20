import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = () => {
      const storedUser = localStorage.getItem('zion_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Error parsing stored user:', error);
        }
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Mock login - replace with actual API call
      const mockUser = {
        id: '1',
        email,
        name: 'User',
        role: 'user',
      };
      setUser(mockUser);
      localStorage.setItem('zion_user', JSON.stringify(mockUser));
      return mockUser;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zion_user');
  };

  const register = async (email, password, name) => {
    setIsLoading(true);
    try {
      // Mock registration - replace with actual API call
      const mockUser = {
        id: '1',
        email,
        name,
        role: 'user',
      };
      setUser(mockUser);
      localStorage.setItem('zion_user', JSON.stringify(mockUser));
      return mockUser;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  };
}