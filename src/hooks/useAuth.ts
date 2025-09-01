
interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
  avatarUrl?: string}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    
      
      if (storedUser && token) {
        try {
          
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          })} catch (error) {
          console.error('Error parsing stored user:', error);
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          })}
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        })}
    };

    checkAuth()}, []);

  
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: true, user: mockUser }};

  
    // Clear localStorage
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};

  
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');

    return { success: true, user: mockUser }};

  
      setAuthState(prev => ({
        ...prev,
        user: updatedUser,
      }));

      // Update localStorage
      localStorage.setItem('zion_user', JSON.stringify(updatedUser))}
  };

  return {
    ...authState,
    login,
    logout,
    register,
    updateProfile,
  }}
