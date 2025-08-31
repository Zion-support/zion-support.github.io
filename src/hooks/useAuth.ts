<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

=======
import React, { useState } from 'react';
import { useState, useEffect } from 'react';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
<<<<<<< HEAD
  avatarUrl?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
=======
  avatarUrl?: string}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean}
export function useAuth(...args[]):  {
  const [authState, setAuthState] = useState<any>({
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
<<<<<<< HEAD

  useEffect(() => {
=======
  useEffect(()  => {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = () => {
      const storedUser = localStorage.getItem('zion_user');
      const token = localStorage.getItem('authToken');
      if (storedUser && token) {
        try {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
<<<<<<< HEAD
          });
        } catch (error) {
=======
          // // // // // // // console.error('Error parsing stored user:', error);
=======
          })} catch (error) {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          console.error('Error parsing stored user:', error);
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
<<<<<<< HEAD
          });
        }
=======
          })}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
<<<<<<< HEAD
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
=======
        })}
    };
    checkAuth()}, []);
  const login = async (email: string, _password: string)  => {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    // In a real app, you would make an API call to your backend
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'user',
      userType: 'creator',
    };
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
<<<<<<< HEAD

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: true, user: mockUser };
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });

    // Clear localStorage
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken');
  };

  const register = async (email: string, password: string, name: string) => {
    // In a real app, you would make an API call to your backend
=======
    localStorage.setItem('authToken', 'dummy-token');
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    return mockUser;
  };
  const logout = () => {;
    setAuthState({;
      user: null,;
      isAuthenticated: false,;
      isLoading: false,;
    });
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};
  const register = async (email: string, password: string, name: string)  => {
    // Implement actual registration logic here
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
      userType: 'creator',
    };
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
<<<<<<< HEAD

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
        user: updatedUser,
      }));

      // Update localStorage
      localStorage.setItem('zion_user', JSON.stringify(updatedUser));
    }
=======
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'dummy-token');
    return mockUser;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  };
  return {
    ...authState,
    login,
    logout,
    register,
<<<<<<< HEAD
    updateProfile,
=======
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    isAdmin: authState.user?.role = == 'admin';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  };
}
