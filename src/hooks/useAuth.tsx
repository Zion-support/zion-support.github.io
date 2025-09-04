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

  useEffect(: unknown {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
:src/hooks/useAuth.tsx

      if(storedUser && token) {

        try {
          
          setAuthState({
            user,
            isAuthenticated: true,
:src/hooks/useAuth.tsx
            isLoading: false})} catch(error) {

          // console.error('Error parsing stored user:', error);
            isLoading: false,
          })} catch(error) {
          console.error('Error parsing stored user:', error);
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

          isLoading: false,
        })}
    };

    checkAuth()}, []);

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

    // Clear localStorage'
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};

    return { success: true, user: mockUser }};

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
:src/hooks/useAuth.tsx
    updateProfile}}
'
    updateProfile,
  }}
