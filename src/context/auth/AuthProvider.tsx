import React, { useEffect, PropsWithChildren } from "react";
import { supabase, getFromProfiles } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
import { loginUser, registerUser } from "@/services/authService";
import { safeStorage } from "@/utils/safeStorage";
import { toast } from "@/hooks/use-toast";
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const { user, setUser, isLoading, setIsLoading, onboardingStep, setOnboardingStep, tokens, setTokens } = useAuthState();
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);
	const { login: loginImpl, signup: signupImpl, logout, resetPassword, updateProfile, loginWithGoogle, loginWithFacebook, loginWithTwitter, loginWithWeb3 } = useAuthOperations(setUser, setIsLoading);

	const login = async (email: string, password: string) => {
		const { res, data } = await loginUser(email, password);
		if (res.status === 403 && (data as any)?.code === "EMAIL_NOT_CONFIRMED") {
			toast({ title: "Login Failed", description: (data as any).error || "Email not confirmed. Please check your inbox to verify your email.", variant: "destructive" });
			return { error: (data as any).error || "Email not confirmed. Please check your inbox to verify your email." };
		}
		if (res.status === 400) {
			toast({ title: "Login Failed", description: (data as any)?.error || 'Missing email or password', variant: "destructive" });
			return { error: (data as any)?.error || 'Missing email or password' };
		}
		if (res.status === 401) {
			toast({ title: "Login Failed", description: 'Incorrect email or password', variant: "destructive" });
			return { error: 'Incorrect email or password' };
		}
		if (res.status !== 200) {
			toast({ title: "Login Failed", description: (data as any)?.error || 'An unexpected error occurred during login.', variant: "destructive" });
			return { error: (data as any)?.error || 'Login failed' };
		}
		setTokens({ accessToken: (data as any).accessToken, refreshToken: (data as any).refreshToken });
		const clientLoginResult: any = await loginImpl({ email, password });
		if (clientLoginResult?.error) {
			console.error("Client-side login after server confirmation failed:", clientLoginResult.error);
			return { error: clientLoginResult.error?.message || "Client-side login failed." };
		}
		const params = new URLSearchParams(location.search);
		const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
		navigate(next, { replace: true });
		return { error: null };
	};

	const register = async (name: string, email: string, password: string) => {
		try {
			const { res, data } = await registerUser(name, email, password) as any;
			if (!res.ok || !(data?.token) || !(data?.user)) {
				return { error: data?.message || 'Registration failed' };
			}
			safeStorage.setItem('auth', JSON.stringify({ token: data.token, user: data.user }));
			setTokens({ accessToken: data.token, refreshToken: data.refreshToken || null });
			setUser(data.user);
			return { error: null };
		} catch (err: any) {
			return { error: err?.message || 'Registration failed' };
		}
	};

	const signup = async (email: string, password: string, userData: any) => {
		const result: any = await signupImpl({ email, password, display_name: userData });
		if (!result?.error) {
			const loginResult = await login(email, password);
			if (!(loginResult as any).error) {
				const firstName = (userData?.name || userData || '').split(' ')[0];
				toast({ title: `Welcome, ${firstName}!` });
				const params = new URLSearchParams(location.search);
				const next = params.get('redirectTo') || params.get('next') || '/dashboard';
				navigate(next, { replace: true });
			}
		}
		return result;
	};

	useEffect(() => {
		cleanupAuthState();
		const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
			if (session?.user) {
				try {
					const { data: profile, error } = await getFromProfiles().select('*').eq('id', session.user.id).single();
					if (profile) {
						const mappedUser = mapProfileToUser(session.user, profile);
						setUser(mappedUser);
						if (event === 'SIGNED_IN') {
							handleSignedIn(mappedUser);
							const params = new URLSearchParams(location.search);
							const next = params.get('redirectTo') || params.get('next');
							if ((location as any).state?.pendingAction === 'buyNow' && (location as any).state?.pendingActionArgs) {
								const { id, title, price } = (location as any).state.pendingActionArgs;
								dispatch(addItem({ id, title, price }));
								navigate(location.pathname, { state: {}, replace: true });
								navigate('/checkout', { replace: true });
							} else if (next) {
								navigate(decodeURIComponent(next), { replace: true });
							}
						}
					} else if (error) {
						console.error("Error fetching user profile:", error);
						setUser(null);
					}
				} catch (error) {
					console.error("Error fetching user profile:", error);
					setUser(null);
				}
			} else {
				setUser(false as any);
				if (event === 'SIGNED_OUT') {
					handleSignedOut();
				}
			}
			setIsLoading(false);
		});
		return () => { subscription.unsubscribe(); };
	}, [navigate]);

	const authContextValue = {
		user,
		isLoading,
		isAuthenticated: !!user,
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
		setUser,
		onboardingStep,
		tokens
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;