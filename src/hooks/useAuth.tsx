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

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('zion_user');
        const token = localStorage.getItem('authToken');
        
        if (storedUser && token) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false
          });
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false
          });
        }
      } catch (error) {
        console.error('Error parsing stored user:', error);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in real app this would call an API
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'user',
      userType: 'individual',
      displayName: 'John Doe',
      avatarUrl: '/default-avatar.png'
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: true, user: mockUser };
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });

    // Clear localStorage
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken');
  };

  const register = async (email: string, password: string, name: string) => {
    // Mock registration - in real app this would call an API
    const mockUser: User = {
      id: '1',
      email,
      name,
      role: 'user',
      userType: 'individual',
      displayName: name,
      avatarUrl: '/default-avatar.png'
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: true, user: mockUser };
  };

  const updateProfile = (updates: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      setAuthState(prev => ({
        ...prev,
        user: updatedUser
      }));

      // Update localStorage
      localStorage.setItem('zion_user', JSON.stringify(updatedUser));
    }
  };

  return {
    ...authState,
    login,
    logout,
    register,
    updateProfile
  };
}
