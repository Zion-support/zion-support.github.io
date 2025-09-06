<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState, useEffect } from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2197

interface User {
  id: string;
  email: string;
  name: string;
}

<<<<<<< HEAD
export const useAuth = () => {
=======
export function useAuth() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2197
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    // Simulate auth check
    setLoading(false);
  }, []);

  return {
    user,
    loading,
    login: (email: string, password: string) => {
      // Simulate login
      setUser({ id: "1", email, name: "User" });
    },
    logout: () => {
      setUser(null);
    },
  };
};
=======
    // Simulate checking for existing auth
    const checkAuth = async () => {
      try {
        // In a real app, this would check for a valid token
        const token = localStorage.getItem('auth_token');
        if (token) {
          // Simulate user data
          setUser({
            id: '1',
            email: 'user@example.com',
            name: 'John Doe'
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: '1',
        email,
        name: 'John Doe'
      };
      
      setUser(userData);
      localStorage.setItem('auth_token', 'fake_token');
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2197
