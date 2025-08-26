import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
  avatar?: string;
}
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

  // Mock auth functions for now - these would connect to Supabase in a real implementation
  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign in attempted with:", email);
    // Mock successful sign-in
    setUser({
      id: "mock-user-id", 
      email, 
      displayName: "Mock User", 
      name: "Mock User",
      avatarUrl: "",
      profileComplete: true,
      role: "enterprise_admin",
      permissions: ["billing_access", "admin_access", "team_management"],
      companyId: "company-123"
    });
    // Subscribe user to push notifications after login
    try {
      await subscribeToPush();
    } catch (err) {
      console.error('Push subscription error', err);
    }
    return { error: null };
  };

  const signOut = async () => {
    // This would be replaced with actual Supabase auth
    console.log("Sign out attempted");
    setUser(null);
  };

  const signUp = async (name: string, email: string, password: string) => {
    console.log("Sign up attempted with:", email, name);
    // Mock successful sign-up
    setUser({
      id: "mock-user-id",
      email,
      displayName: name || "New User",
      name: name || "New User",
      profileComplete: false
    });
    return { error: null };
  };

  const resetPassword = async (email: string) => {
    // Mock implementation
    console.log("Password reset requested for:", email);
    return { error: null };
  };

  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
    console.log("Profile update requested with:", data);
    if (user) {
      setUser({ ...user, ...data });
    }
    return { error: null };
  };

  const loginWithGoogle = async () => {
    console.log("Google login requested");
    // Mock implementation
    setUser({ 
      id: "google-user-id", 
      email: "google@example.com", 
      displayName: "Google User",
      name: "Google User",
      profileComplete: true
    });
  };

  const loginWithFacebook = async () => {
    console.log("Facebook login requested");
    // Mock implementation
    setUser({ 
      id: "facebook-user-id", 
      email: "facebook@example.com", 
      displayName: "Facebook User", 
      name: "Facebook User",
      profileComplete: true
    });
  };

  const loginWithTwitter = async () => {
    console.log("Twitter login requested");
    // Mock implementation
    setUser({
      id: "twitter-user-id",
      email: "twitter@example.com",
      displayName: "Twitter User",
      name: "Twitter User",
      profileComplete: true
    });
  };

  const loginWithWeb3 = async () => {
    console.log("Web3 login requested");
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      console.warn("No wallet detected");
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      setUser({
        id: address,
        displayName: address,
        profileComplete: true
      });
    } catch (err) {
      console.error('Web3 login failed', err);
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    // Mock loading state and then set a null user to simulate no session
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 100);
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
    signUp,
    // Add aliases for compatibility
    login: signIn,
    logout: signOut,
    signup: signUp,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    setUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // In a real app, you would validate the token with your backend
          const userData = localStorage.getItem('userData');
          if (userData) {
            setUser(JSON.parse(userData));
          }
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
    try {
      setLoading(true);
      // In a real app, you would make an API call to your backend
      // For now, we'll simulate a successful login
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'user'
      };
      // Store user data and token
      localStorage.setItem('authToken', 'mock-token');
      localStorage.setItem('userData', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const register = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      // In a real app, you would make an API call to your backend
      // For now, we'll simulate a successful registration
      const mockUser: User = {
        id: '1',
        email,
        name,
        role: 'user'
      };
      // Store user data and token
      localStorage.setItem('authToken', 'mock-token');
      localStorage.setItem('userData', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    try {
      // Clear stored data
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };
  const updateProfile = async (data: Partial<User>) => {
    try {
      if (!user) throw new Error('No user logged in');
      const updatedUser = { ...user, ...data };
      // Update stored user data
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      console.error('Profile update failed:', error);
      throw error;
    }
  };
  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};