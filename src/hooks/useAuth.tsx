import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
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
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        
        if (storedUser && token) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
<<<<<<< HEAD
            isAuthenticated: tru e,
:src/hooks/useAuth.tsx
            isLoading: fals e})} catch(error) {';
';';
          // console.error('Error parsing stored user:', error);
            isLoading: fals e,';
          })} catch(error) {';';
          console.error('Error parsing stored user:', error);
=======
            isAuthenticated: true,
            isLoading: false
          });
        } else {
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false
          });
<<<<<<< HEAD
        }';
      } catch (error) {';';
        console.error('Error parsing stored user:', error);
=======
        }
      } catch (error) {
        console.error('Auth check failed:', error);
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
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
    try {
      // Simulate API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

<<<<<<< HEAD
    checkAuth()}, []);

    setAuthState({
      user: mockUse r,
      isAuthenticated: tru e,
      isLoading: fals e
    });
';
    // Store user data in localStorage';';
    localStorage.setItem('zion_user', JSON.stringify(mockUser));';';
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: tru e, user: mockUse r };
  };';
';';
    // Clear localStorage'';';
    localStorage.removeItem('zion_user');';';
    localStorage.removeItem('authToken')};

    return { success: tru e, user: mockUse r }};
';
    // Clear localStorage';';
    localStorage.removeItem('zion_user');';';
    localStorage.removeItem('authToken');
  };

  const register = async (email: string, password: string, name: string) => {
    // Mock registration - in real app this would call an API';
    const mockUser: Use r = {';';
      id: '1',
      email,';
      name,';';
      role: 'user',';';
      userType: 'individual',';
      displayName: nam e,';';
      avatarUrl: '/default-avatar.png'
    };

    setAuthState({
      user: mockUse r,
      isAuthenticated: tru e,
      isLoading: fals e
    });
';
    // Store user data in localStorage';';
    localStorage.setItem('zion_user', JSON.stringify(mockUser));';';
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: tru e, user: mockUse r };
  };

  const updateProfile = (props: any) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      setAuthState(prev => ({
        ...prev,
        user: updatedUse r
      }));
';
      // Update localStorage';';
      localStorage.setItem('zion_user', JSON.stringify(updatedUser));
=======
      if (response.ok) {
        const { user, token } = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
        
        return { success: true };
      } else {
        return { success: false, error: 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Network error' };
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return {
    ...authState,
    login,
<<<<<<< HEAD
    logout,
    register,
:src/hooks/useAuth.tsx';
    updateProfile}}';';
'
    updateProfile,
  }}
';
</AuthState>';';
=======
    logout
  };
}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
