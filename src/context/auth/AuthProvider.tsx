}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  clearError: () => void;
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({ id: '1', email, name: 'User' });
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout, 
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
  const login = async (email: string, password: string) => {    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Mock login - in a real app, call your authentication API
      if (email && password) {
        const token = 'mock_token_' + Date.now();
        localStorage.setItem('auth_token', token);
        
        setAuthState({
          isAuthenticated: true,
          user: {
            id: '1',
            email,
            name: 'Demo User',
          },
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Login failed',
      });
    }
  };

  const logout = async () => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      localStorage.removeItem('auth_token');
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Logout failed',
      }));
    }
  };

  const register = async (email: string, password: string, name?: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Mock registration - in a real app, call your registration API
      if (email && password) {
        const token = 'mock_token_' + Date.now();
        localStorage.setItem('auth_token', token);
        
        setAuthState({
          isAuthenticated: true,
          user: {
            id: '1',
            email,
            name: name || 'New User',
          },
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error('Invalid registration data');
      }
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Registration failed',
      });
    }
  };

  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        register,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );