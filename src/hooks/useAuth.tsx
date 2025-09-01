
interface User {

  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
:src/hooks/useAuth.tsx
  avatarUrl?: string}
  avatarUrl?: string}

interface AuthState {

  user: User | null;
  isAuthenticated: boolean;
:src/hooks/useAuth.tsx
  isLoading: boolean;
  isLoading: boolean}

}
;
export function useAuth(...args: unknown[]): unknown {
  const [authState, setAuthState] = useState<AuthState>({

    user: null,
    isAuthenticated: false,
    isLoading: true});

  useEffect(: unknown {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
:src/hooks/useAuth.tsx
    
      
      if (storedUser && token) {

        try {
          
          setAuthState({

            user,
            isAuthenticated: true,
:src/hooks/useAuth.tsx
            isLoading: false})} catch (error) {

          // console.error('Error parsing stored user:', error);
            isLoading: false,
          })} catch (error) {
          console.error('Error parsing stored user:', error);
          setAuthState({

            user: null,
            isAuthenticated: false,
:src/hooks/useAuth.tsx
            isLoading: false})}
            isLoading: false,
          })}
      } else {

        setAuthState({

          user: null,
          isAuthenticated: false,
:src/hooks/useAuth.tsx
          isLoading: false})}
    };

    checkAuth()}, []);

  
          isLoading: false,
        })}
    };

    checkAuth()}, []);

  
    setAuthState({

      user: mockUser,
      isAuthenticated: true,
      isLoading: false});

    // Store user data in localStorage'
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken',mock-jwt-token');

:src/hooks/useAuth.tsx
    return { success: true, user: mockUser }};

  
    // Clear localStorage'
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};

  
    return { success: true, user: mockUser }};

  
    // Clear localStorage
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};

  
    setAuthState({

      user: mockUser,
      isAuthenticated: true,
      isLoading: false});

    // Store user data in localStorage'
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken',mock-jwt-token');

    return { success: true, user: mockUser }};

:src/hooks/useAuth.tsx
  
      setAuthState(prev => ({

:src/hooks/useAuth.tsx
        ...prev,
        user: updatedUser}));

      // Update localStorage'
      localStorage.setItem('zion_user', JSON.stringify(updatedUser))}
      // Update localStorage
      localStorage.setItem('zion_user', JSON.stringify(updatedUser))}
  };

  return {

    ...authState,
    login,
    logout,
    register,
:src/hooks/useAuth.tsx
    updateProfile}}
<<<<<<< HEAD
=======
'
    updateProfile,
  }}
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
