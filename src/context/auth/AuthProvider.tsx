import React, { useEffect } from "react";
import { supabase, getFromProfiles } from "../../integrations/supabase/client";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/integrations/firebase/client';
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
import { loginUser, registerUser } from "@/services/authService";
import { safeStorage } from "@/utils/safeStorage";
import { toast } from "@/hooks/use-toast"; // Import toast
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    user, setUser,
    isLoading, setIsLoading,
    onboardingStep, setOnboardingStep,
    tokens, setTokens
  } = useAuthState();
  
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);

  const {
    login: loginImpl,
    signup: signupImpl,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  } = useAuthOperations(setUser, setIsLoading);

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    const { res, data } = await loginUser(email, password); // Calls /api/auth/login

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
      const message = data?.code === 'WRONG_PASSWORD' ? 'Incorrect password' : (data?.error || 'Invalid credentials');
      toast({ title: 'Login Failed', description: message, variant: 'destructive' });
      return { error: message };
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
      console.error("Client-side login after server confirmation failed:", clientLoginResult.error);
      // It's possible the server token is valid but client Supabase has an issue.
      // For now, treat as a login failure and let user retry.
      // Potentially clear tokens if this state is problematic: await logout();
      return { error: (clientLoginResult.error as any)?.message || "Client-side login failed." };
    }
    const params = new URLSearchParams(location.search);
    const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
    navigate(next, { replace: true });

    return { error: null }; // Successful login
  };

  // Register via backend and persist auth info
  const register = async (name: string, email: string, password: string) => {
    try {
      const { res, data } = await registerUser(name, email, password);
      if (!res.ok || !data?.token || !data?.user) {
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

  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: string, password: string, userData?: any) => {
    const result = await signupImpl({ email, password, display_name: userData });

    if (!result?.error) {
      const loginResult = await login(email, password);
      if (!loginResult.error) {
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
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
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
                const next = params.get('next');
                if (next) {
                  navigate(next, { replace: true });
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
          setUser(false);
          
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut();
          }
        }
        setIsLoading(false);
      }
    );

    // Firebase auth state listener
    const unsubscribeFirebase = onAuthStateChanged(auth, (fbUser) => {
      setUser(fbUser ? (fbUser as any) : null);
      setIsLoading(false);
    });

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false);
      }
    }).catch(error => {
      console.error("Error during initial Supabase getSession:", error);
      setUser(null); // Explicitly set user to null on error
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
      unsubscribeFirebase();
    };
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