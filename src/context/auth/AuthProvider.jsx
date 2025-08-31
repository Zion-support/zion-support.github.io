import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from '@/hooks/use-toast';
import { safeStorage } from '@/utils/safeStorage';
import { useEmailAuth } from './useEmailAuth';
import { registerUser, loginUser } from '@/services/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState({ accessToken: null, refreshToken: null });
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const location = typeof window !== 'undefined' ? window.location : { search: '' };
    const { login: loginImpl, signup: signupImpl } = useEmailAuth();

    useEffect(() => {
        // Check for existing auth data on mount
        const authData = safeStorage.getItem('auth');
        if (authData) {
            try {
                const { token, user: savedUser } = JSON.parse(authData);
                if (token && savedUser) {
                    setTokens({ accessToken: token, refreshToken: null });
                    setUser(savedUser);
                }
            } catch (error) {
                console.error('Error parsing auth data:', error);
                safeStorage.removeItem('auth');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
<<<<<<< HEAD
        try {
            setLoading(true);
            const { res, data } = await loginUser(email, password);

            // Check for specific "Email not confirmed" error first
            if (res.status === 403 && data?.code === "EMAIL_NOT_CONFIRMED") {
                toast({
                    title: "Login Failed",
                    description: data.error || "Email not confirmed. Please check your inbox to verify your email.",
                    variant: "destructive",
                });
                return { error: data.error || "Email not confirmed. Please check your inbox to verify your email." };
            }

            // Handle other errors from the API call
            if (res.status === 400) { // Bad request (e.g. missing fields)
                toast({ title: "Login Failed", description: data?.error || 'Missing email or password', variant: "destructive" });
                return { error: data?.error || 'Missing email or password' };
            }

            if (res.status === 401) { // Unauthorized (invalid credentials)
                toast({ title: "Login Failed", description: 'Incorrect email or password', variant: "destructive" });
                return { error: 'Incorrect email or password' };
            }

            // Catch-all for other non-200 statuses from loginUser
            if (res.status !== 200) {
                toast({ title: "Login Failed", description: data?.error || 'An unexpected error occurred during login.', variant: "destructive" });
                return { error: data?.error || 'Login failed' };
            }

            // At this point, loginUser call was successful (200 OK)
            setTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });

            // Now, attempt client-side Supabase sign-in to synchronize auth state
            // loginImpl is useEmailAuth.login which calls supabase.auth.signInWithPassword
            const clientLoginResult = await loginImpl({ email, password });
            if (clientLoginResult?.error) {
                // useEmailAuth.login already shows a toast on error.
                // We just need to return the error to the caller of AuthProvider.login
                // It's possible the server token is valid but client Supabase has an issue.
                // For now, treat as a login failure and let user retry.
                // Potentially clear tokens if this state is problematic: await logout();
                return { error: clientLoginResult.error?.message || "Client-side login failed." };
            }

            const params = new URLSearchParams(location.search);
            const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
            router(next, { replace: true });
            return { error: null }; // Successful login
        } catch (error) {
            console.error('Login error:', error);
            return { error: error?.message || 'Login failed' };
        } finally {
            setLoading(false);
        }
=======
        const { res, data } = await loginUser(email, password); // Calls /api/auth/login
        // Check for specific "Email not confirmed" error first
        if (res.status === 403 && data?.code === "EMAIL_NOT_CONFIRMED") {
            toast({
                title: "Login Failed",
                description: data.error || "Email not confirmed. Please check your inbox to verify your email.",
                variant: "destructive",
            });
            return { error: data.error || "Email not confirmed. Please check your inbox to verify your email." }}
        // Handle other errors from the API call
        if (res.status === 400) { // Bad request (e.g. missing fields)
            toast({ title: "Login Failed", description: data?.error || 'Missing email or password', variant: "destructive" });
            return { error: data?.error || 'Missing email or password' }}
        if (res.status === 401) { // Unauthorized (invalid credentials)
            toast({ title: "Login Failed", description: 'Incorrect email or password', variant: "destructive" });
            return { error: 'Incorrect email or password' }}
        // Catch-all for other non-200 statuses from loginUser
        if (res.status !== 200) {
            toast({ title: "Login Failed", description: data?.error || 'An unexpected error occurred during login.', variant: "destructive" });
            return { error: data?.error || 'Login failed' }}
        // At this point, loginUser call was successful (200 OK)
        setTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });
        // Now, attempt client-side Supabase sign-in to synchronize auth state
        // loginImpl is useEmailAuth.login which calls supabase.auth.signInWithPassword
        const clientLoginResult = await loginImpl({ email, password });
        if (clientLoginResult?.error) {
            // useEmailAuth.login already shows a toast on error.
            // We just need to return the error to the caller of AuthProvider.login
            // // // // // // // console.error("Client-side login after server confirmation failed:", clientLoginResult.error);
            // It's possible the server token is valid but client Supabase has an issue.
            // For now, treat as a login failure and let user retry.
            // Potentially clear tokens if this state is problematic: await logout();
            return { error: clientLoginResult.error?.message || "Client-side login failed." }}
        const params = new URLSearchParams(location.search);
        const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
        router(next, { replace: true });
        return { error: null }; // Successful login
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    };

    // Register via backend and persist auth info
    const register = async (name, email, password) => {
        try {
            const { res, data } = await registerUser(name, email, password);
            if (!res.ok || !data?.token || !data?.user) {
<<<<<<< HEAD
                return { error: data?.message || 'Registration failed' };
            }

            safeStorage.setItem('auth', JSON.stringify({ token: data.token, user: data.user }));
            setTokens({ accessToken: data.token, refreshToken: data.refreshToken || null });
            setUser(data.user);
            return { error: null };
        } catch (err) {
            return { error: err?.message || 'Registration failed' };
        }
=======
                return { error: data?.message || 'Registration failed' }}
            safeStorage.setItem('auth', JSON.stringify({ token: data.token, user: data.user }));
            setTokens({ accessToken: data.token, refreshToken: data.refreshToken || null });
            setUser(data.user);
            return { error: null }}
        catch (err) {
            return { error: err?.message || 'Registration failed' }}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    };

    // Wrapper for signup to match the AuthContextType interface
    const signup = async (email, password, userData) => {
        const result = await signupImpl({ email, password, display_name: userData });
        if (!result?.error) {
            const loginResult = await login(email, password);
            if (!loginResult.error) {
                const firstName = (userData?.name || userData || '').split(' ')[0];
                toast({ title: `Welcome, ${firstName}!` });
                const params = new URLSearchParams(location.search);
<<<<<<< HEAD
                const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
                router(next, { replace: true });
            }
            return loginResult;
        }
        return result;
    };

    const logout = async () => {
        try {
            await signupImpl.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setUser(null);
            setTokens({ accessToken: null, refreshToken: null });
            safeStorage.removeItem('auth');
            router('/');
        }
    };

    const value = {
        user,
        loading,
=======
                const next = params.get('redirectTo') || params.get('next') || '/dashboard';
                router(next, { replace: true });
            }
        }
        return result};
    useEffect(() => {
        // Clean up  potential stale auth state before setting up listeners
        cleanupAuthState();
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user) {
                try {
                    const { data: profile, error } = await getFromProfiles()
                        .select('*')
                        .eq('id', session.user.id)
                        .single();
                    if (profile) {
                        const mappedUser = mapProfileToUser(session.user, profile);
                        setUser(mappedUser);
                        // Show welcome toast when user logs in
                        if (event === 'SIGNED_IN') {
                            handleSignedIn(mappedUser);
                            const params = new URLSearchParams(location.search);
                            const next = params.get('redirectTo') || params.get('next');
                            // --- BEGIN MODIFICATION ---
                            if (location.state?.pendingAction === 'buyNow' && location.state?.pendingActionArgs) {
                                const { id, title, price } = location.state.pendingActionArgs;
                                dispatch(addItem({ id, title, price }));
                                // Clear pending action from state first
                                router(location.pathname, { state: {}, replace: true });
                                // Navigate to checkout
                                router('/checkout', { replace: true });
                            }
                            else if (next) {
                                router(decodeURIComponent(next), { replace: true });
                            }
                            // --- END MODIFICATION ---
                    else if (error) {
                        // // // // // // // console.error("Error fetching user profile:", error);
                        setUser(null);
                catch (error) {
                    // // // // // // // console.error("Error fetching user profile:", error);
                    setUser(null);
                        console.error("Error fetching user profile:", error);
                        setUser(null)}
                }
                catch (error) {
                    console.error("Error fetching user profile:", error);
                    setUser(null)}
            }
            else {
                setUser(false);
                // Show logout toast when user logs out
                if (event === 'SIGNED_OUT') {
                    handleSignedOut()}
            }
            setIsLoading(false)});
        return () => {
            subscription.unsubscribe()}}, [navigate]);
    const authContextValue = {
  user,
        isLoading,
        isAuthenticated: !!user,
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
        login,
        logout,
        register,
        signup,
<<<<<<< HEAD
        tokens
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
=======
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
    return (<AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>)};
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
