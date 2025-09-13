import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
}

<<<<<<< HEAD
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

<<<<<<< HEAD
=======
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
=======
export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738

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
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    const mockUser: User = {
      id: '1',
      email,
      name: 'User',
      role: 'user'
    };
    
<<<<<<< HEAD
    setUser(mockUser);
=======
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zion_user');
  };

  const register = async (email: string, password: string, name: string) => {
    // Implement actual registration logic here
    const mockUser: User = {
      id: '1',
      email,
      name,
      role: 'user'
    };
    
    setUser(mockUser);
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    return mockUser;
  };

  return {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };
<<<<<<< HEAD
}
=======
};
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
