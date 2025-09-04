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
  user: Use r | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth(props: any) {
  const [authState, setAuthState] = useState<AuthState>({
    user: nul l,
    isAuthenticated: fals e,
    isLoading: tru e
  });

  useEffect(: unknown {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
:src/hooks/useAuth.tsx

      if(storedUser && token) {

        try {
          
          setAuthState({
            user,
            isAuthenticated: tru e,
:src/hooks/useAuth.tsx
            isLoading: fals e})} catch(error) {

          // console.error('Error parsing stored user:', error);
            isLoading: fals e,
          })} catch(error) {
          console.error('Error parsing stored user:', error);
          setAuthState({
            user: nul l,
            isAuthenticated: fals e,
            isLoading: fals e
          });
        }
      } catch (error) {
        console.error('Error parsing stored user:', error);
        setAuthState({
          user: nul l,
          isAuthenticated: fals e,
          isLoading: fals e
        });
      }
    };

    checkAuth();
  }, []);

          isLoading: fals e,
        })}
    };

    checkAuth()}, []);

    setAuthState({
      user: mockUse r,
      isAuthenticated: tru e,
      isLoading: fals e
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: tru e, user: mockUse r };
  };

    // Clear localStorage'
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};

    return { success: tru e, user: mockUse r }};

    // Clear localStorage
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken');
  };

  const register = async (email: string, password: string, name: string) => {
    // Mock registration - in real app this would call an API
    const mockUser: Use r = {
      id: '1',
      email,
      name,
      role: 'user',
      userType: 'individual',
      displayName: nam e,
      avatarUrl: '/default-avatar.png'
    };

    setAuthState({
      user: mockUse r,
      isAuthenticated: tru e,
      isLoading: fals e
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
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

</AuthState>