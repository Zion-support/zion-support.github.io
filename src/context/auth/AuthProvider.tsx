<<<<<<< HEAD
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  register: (name: string, email: string, password: string) => Promise<{ error: string | null }>;
  signup: (email: string, password: string, userData: any) => Promise<any>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockUser: User = { id: '1', email, name: 'User' };
      setUser(mockUser);
      return { error: null };
    } catch (error) {
      return { error: 'Login failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock registration - replace with actual registration logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockUser: User = { id: '1', email, name };
      setUser(mockUser);
      return { error: null };
    } catch (error) {
      return { error: 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, userData: any) => {
    return register(userData?.name || 'User', email, password);
  };

  const logout = async () => {
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    // Mock password reset
    console.log('Password reset requested for:', email);
  };

  const updateProfile = async (data: any) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  const loginWithGoogle = async () => {
    // Mock Google login
    console.log('Google login requested');
  };

  const loginWithFacebook = async () => {
    // Mock Facebook login
    console.log('Facebook login requested');
  };

  const loginWithTwitter = async () => {
    // Mock Twitter login
    console.log('Twitter login requested');
  };

  const loginWithWeb3 = async () => {
    // Mock Web3 login
    console.log('Web3 login requested');
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export type { AuthContextType, User };
=======
import React, { useEffect, ReactNode } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { useAuthOperations } from '../../hooks/useAuthOperations';
import { AuthContext } from './AuthContext';
import { cleanupAuthState } from '../../utils/auth-utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from './useAuthState';
import { useAuthEventHandlers } from './useAuthEventHandlers';
import { mapProfileToUser } from './profileMapper';
import { loginUser, registerUser } from '@/services/authService';
import { safeStorage } from '@/utils/safeStorage';
import { toast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const { user, setUser, isLoading, setIsLoading, onboardingStep, setOnboardingStep, tokens, setTokens } = useAuthState();
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);
	const { login: loginImpl, signup: signupImpl, logout, resetPassword, updateProfile, loginWithGoogle, loginWithFacebook, loginWithTwitter, loginWithWeb3 } = useAuthOperations(setUser, setIsLoading);

	const login = async (email: string, password: string) => {
		const { res, data } = await loginUser(email, password);
		if (res.status === 403 && (data as any)?.code === 'EMAIL_NOT_CONFIRMED') {
			toast({ title: 'Login Failed', description: (data as any).error || 'Email not confirmed. Please check your inbox to verify your email.', variant: 'destructive' });
			return { error: (data as any).error || 'Email not confirmed. Please check your inbox to verify your email.' };
		}
		if (res.status === 400) {
			toast({ title: 'Login Failed', description: (data as any)?.error || 'Missing email or password', variant: 'destructive' });
			return { error: (data as any)?.error || 'Missing email or password' };
		}
		if (res.status === 401) {
			toast({ title: 'Login Failed', description: 'Incorrect email or password', variant: 'destructive' });
			return { error: 'Incorrect email or password' };
		}
		if (res.status !== 200) {
			toast({ title: 'Login Failed', description: (data as any)?.error || 'An unexpected error occurred during login.', variant: 'destructive' });
			return { error: (data as any)?.error || 'Login failed' };
		}
		setTokens({ accessToken: (data as any).accessToken, refreshToken: (data as any).refreshToken });
		const clientLoginResult = await loginImpl({ email, password } as any);
		if ((clientLoginResult as any)?.error) {
			return { error: (clientLoginResult as any).error?.message || 'Client-side login failed.' };
		}
		const params = new URLSearchParams(location.search);
		const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
		navigate(next, { replace: true });
		return { error: null };
	};

	const register = async (name: string, email: string, password: string) => {
		try {
			const { res, data } = await registerUser(name, email, password);
			if (!res.ok || !(data as any)?.token || !(data as any)?.user) {
				return { error: (data as any)?.message || 'Registration failed' };
			}
			safeStorage.setItem('auth', JSON.stringify({ token: (data as any).token, user: (data as any).user }));
			setTokens({ accessToken: (data as any).token, refreshToken: (data as any).refreshToken || null });
			setUser((data as any).user);
			return { error: null };
		} catch (err: any) {
			return { error: err?.message || 'Registration failed' };
		}
	};

	const signup = async (email: string, password: string, userData: any) => {
		const result = await signupImpl({ email, password, display_name: userData } as any);
		if (!(result as any)?.error) {
			const loginResult = await login(email, password);
			if (!loginResult.error) {
				const firstName = ((userData?.name || userData || '') as string).split(' ')[0];
				toast({ title: `Welcome, ${firstName}!` });
				const params = new URLSearchParams(location.search);
				const next = params.get('redirectTo') || params.get('next') || '/dashboard';
				navigate(next, { replace: true });
			}
		}
		return result as any;
	};

	useEffect(() => {
		cleanupAuthState();
		const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
			if (session?.user) {
				try {
					// Mock profile data since getFromProfiles is not available
					const mockProfile = {
						id: session.user.id,
						email: session.user.email,
						name: session.user.email?.split('@')[0] || 'User',
						avatar_url: null,
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString()
					};
					const mappedUser = mapProfileToUser(session.user, mockProfile);
					setUser(mappedUser as any);
					if (event === 'SIGNED_IN') {
						handleSignedIn(mappedUser as any);
						const params = new URLSearchParams(location.search);
						const next = params.get('redirectTo') || params.get('next');
						if ((location.state as any)?.pendingAction === 'buyNow' && (location.state as any)?.pendingActionArgs) {
							const { id, title, price } = (location.state as any).pendingActionArgs;
							dispatch(addItem({ id, title, price }) as any);
							navigate(location.pathname, { state: {}, replace: true });
							navigate('/checkout', { replace: true });
						} else if (next) {
							navigate(next, { replace: true });
						} else {
							navigate('/dashboard', { replace: true });
						}
					}
				} catch (error) {
					console.error('Error handling auth state change:', error);
				}
			} else {
				setUser(null);
				if (event === 'SIGNED_OUT') {
					handleSignedOut();
					navigate('/');
				}
			}
		});

		return () => subscription.unsubscribe();
	}, [navigate, location.search, location.state, dispatch, handleSignedIn, handleSignedOut, setUser]);

	const value = {
		user,
		isAuthenticated: !!user,
		isLoading,
		onboardingStep,
		tokens,
		login,
		register,
		signup,
		logout,
		resetPassword,
		updateProfile,
		loginWithGoogle,
		loginWithFacebook,
		loginWithTwitter,
		loginWithWeb3,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
