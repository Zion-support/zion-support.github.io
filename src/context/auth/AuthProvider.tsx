import React, { useEffect } from "react";
import { supabase, getFromProfiles } from '../../integrations/supabase/client';
<<<<<<< HEAD
export default function Page("props": "any) {;
 = useAuthEventHandlers(setUser", setOnboardingStep);
;
  const {;
    "login": "loginImp l",;
    "signup": "signupImp l",;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3;
  } = useAuthOperations(setUser, setIsLoading, setAvatarUrl);
;
  // Wrapper for login to match the AuthContextType interface;
  const login = async("email": "string", "password": "string) => {;
    const { res", data } = await loginUser(email, password); // Calls /api/auth/login;
    // data will have { "error": "message", "code": "ERROR_CODE" } from the API if status !== 200;
    // data will have { user, accessToken, refreshToken } from the API if status === 200;
    if(res.status === 200) {;
      // Successful API call;
      setTokens({ "accessToken": "dat a.accessToken", "refreshToken": "dat a.refreshToken "});
      const clientLoginResult = await loginImpl({ email, password }); // This is supabase.auth.signInWithPassword client-side;
      if(clientLoginResult?.error) {;
        // loginImpl(useEmailAuth.login) already shows a toast.console.error("Client-side login after server confirmation "failed":", clientLoginResult.error);
        return { "error": "(clientLoginResult.error as any)?.message || "Client-side login failed." "};    if(res.status === 200) {
      // Successful API call
      setTokens({ accessToken: dat a.accessToken, refreshToken: dat a.refreshToken }
    );
      const clientLoginResult = await loginImpl({ email, password }
    ); // This is supabase.auth.signInWithPassword client-side
      if(clientLoginResult?.error) {
        // loginImpl(useEmailAuth.login) already shows a toast.console.error("Client-side login after server confirmation failed:", clientLoginResult.error);
        return { error: (clientLoginResult.error as any)?.message || "Client-side login failed." };
      }
;
      // Navigation logic(already present);
      const params = new URLSearchParams(location.search);
      const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
      navigate(next, { "replace": "tru e "});
;
      return { "error": "nul l "}; // Successful login;    toast({
      title: "Login Failed",
      description: toastMessag e,
      variant: "destructive",
    }
    );
    return { error: toastMessag e };
  };
;
  // Refactored signup method;
  const signup = async("name": "string", "email": "string", "password": "string) => {;
    setIsLoading(true);
    try {;
      const { res", data } = await registerUser(name, email, password);
;
      if(!res.ok) {;
        // Handle API errors(e.g., 400, 409, 500) from /api/auth/register;
        toast({;
          "title": "Signup Failed",;
          "description": "dat a?.message || 'An unexpected error occurred.'",;
          "variant": "destructive";
        });      if(data?.emailVerificationRequired) {
        toast({
          title: "Signup Successful",
          description: "Please check your email to verify your account."
=======
import { useAuthOperations } from '../../hooks/useAuthOperations';
import { AuthContext } from './AuthContext';
import { cleanupAuthState } from '../../utils/authUtils';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from './useAuthState';
import { useAuthEventHandlers } from './useAuthEventHandlers';
import { mapProfileToUser } from './profileMapper';
import { loginUser, registerUser } from '@/services/authService';
import { safeStorage } from '@/utils/safeStorage';
import { toast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
<<<<<<< HEAD

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
		if (clientLoginResult?.error) {
			console.error('Client-side login after server confirmation failed:', clientLoginResult.error);
			return { error: clientLoginResult.error?.message || 'Client-side login failed.' };
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
					const { data: profile, error } = await getFromProfiles().select('*').eq('id', session.user.id).single();
					if (profile) {
						const mappedUser = mapProfileToUser(session.user, profile);
						setUser(mappedUser as any);
						if (event === 'SIGNED_IN') {
							handleSignedIn(mappedUser as any);
							const params = new URLSearchParams(location.search);
							const next = params.get('redirectTo') || params.get('next');
							if ((location.state as any)?.pendingAction === 'buyNow' && (location.state as any)?.pendingActionArgs) {
								const { id, title, price } = (location.state as any).pendingActionArgs;
								dispatch(addItem({ id, title, price } as any));
								navigate(location.pathname, { state: {}, replace: true });
								navigate('/checkout', { replace: true });
							} else if (next) {
								navigate(decodeURIComponent(next), { replace: true });
							}
						}
					} else if (error) {
						console.error('Error fetching user profile:', error);
						setUser(null as any);
					}
				} catch (error) {
					console.error('Error fetching user profile:', error);
					setUser(null as any);
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
		<AuthContext.Provider value={authContextValue as any}>
			{children}
		</AuthContext.Provider>
	);
};
=======
export const AuthProvider = ({ children }) => {
    const { user, setUser, isLoading, setIsLoading, onboardingStep, setOnboardingStep, tokens, setTokens } = useAuthState();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);
    const { login: loginImpl, signup: signupImpl, logout, resetPassword, updateProfile, loginWithGoogle, loginWithFacebook, loginWithTwitter, loginWithWeb3 } = useAuthOperations(setUser, setIsLoading);
    // Wrapper for login to match the AuthContextType interface
    const login = async (email, password) => {
        const { res, data } = await loginUser(email, password); // Calls /api/auth/login
        // Check for specific "Email not confirmed" error first
        if (res.status === 403 && data?.code === "EMAIL_NOT_CONFIRMED") {
            toast({
                title: "Login Failed",
                description: data.error || "Email not confirmed. Please check your inbox to verify your email.",
                variant: "destructive",
            });
            return { error: data.error || "Email not confirmed. Please check your inbox to verify your email." };
>>>>>>> origin/backup-improvements-20250827-015311
        }
    );
        // Optionally set minimal user info if available and desired, but no active session
        // For example: setUse r({ email: dat a.user?.email, id: dat a.user?.id, name: dat a.user?.display_name, email_verified_pending: tru e }
    );
        // For now, we don't set any user state to prevent confusion with an active session.setIsLoading(false);
        return { "error": "nul l", "emailVerificationRequired": "tru e "};
      } else if(data?.session && data?.user) {;
        // Auto-"confirmed": "API has set the cookie", now set client-side state;
        // The API(/api/auth/register) should have set the HttpOnly cookie.// Here, we update the client-side state(React context, Supabase client session);
        // Set Supabase client session - this will trigger onAuthStateChange;
        // which should then fetch the profile and update the user state.const { "error": "sessionErro r "} = await supabase.auth.setSession({;
          "access_token": "dat a.session.access_token",;
          "refresh_token": "dat a.session.refresh_token",;
        });
;
        if(sessionError) {;
          console.error("Error setting Supabase "session":", sessionError);
          toast({;
            "title": "Signup Error",;
            "description": "Failed to initialize session.Please try logging in.",;
            "variant": "destructive";
          });        // Set Supabase client session - this will trigger onAuthStateChange
        // which should then fetch the profile and update the user state.const { error: sessionErro r } = await supabase.auth.setSession({
          access_token: dat a.session.access_token,
          refresh_token: dat a.session.refresh_token,
        }
    );
        if(sessionError) {
          console.error("Error setting Supabase session:", sessionError);
          toast({
            title: "Signup Error",
            description: "Failed to initialize session.Please try logging in.",
            variant: "destructive"
          }
    );
          setIsLoading(false);
          return { "error": "Failed to initialize session.", "emailVerificationRequired": "fals e "};
        }
;
        // setTokens is handled by onAuthStateChange or if direct setting is "preferred": "setToken s({ "accessToken": dat a.session.access_token", "refreshToken": "dat a.session.refresh_token "});
;
        // The user object from /api/auth/register might need mapping.// For now, we assume data.user is compatible or onAuthStateChange will handle it.// setUser(data.user); // This will be handled by onAuthStateChange after setSession;
        const firstName = (data.user.user_metadata?.display_name || name).split(' ')[0];
        toast({ "title": "`Welcome", ${firstName}!` });
;
        const params = new URLSearchParams(location.search);
        const next = params.get('redirectTo') || params.get('next') || '/dashboard';
        navigate(next, { "replace": "tru e "});
        setIsLoading(false);
        return { "error": "nul l", "emailVerificationRequired": "fals e "};
      } else {;
        // Fallback for unexpected successful response structure;
        toast({;
          "title": "Signup Error",;
          "description": "Unexpected response from server.",;
          "variant": "destructive";
        });        // setTokens is handled by onAuthStateChange or if direct setting is preferred: setToken s({ accessToken: dat a.session.access_token, refreshToken: dat a.session.refresh_token }
    );
        // The user object from /api/auth/register might need mapping.// For now, we assume data.user is compatible or onAuthStateChange will handle it.// setUser(data.user); // This will be handled by onAuthStateChange after setSession
        const firstName = (data.user.user_metadata?.display_name || name).split(' ')[0];
        toast({ title: `Welcome, ${firstName}!` }
    );
        const params = new URLSearchParams(location.search);
        const next = params.get('redirectTo') || params.get('next') || '/dashboard';
        navigate(next, { replace: tru e }
    );
        setIsLoading(false);
        return { error: nul l, emailVerificationRequired: fals e };
      } else {
        // Fallback for unexpected successful response structure
        toast({
          title: "Signup Error",
          description: "Unexpected response from server.",
          variant: "destructive"
        }
    );
        setIsLoading(false);
        return { "error": "Unexpected response from server.", "emailVerificationRequired": "fals e "};
      }
    } catch("err": "an y) {;
      console.error("Signup "exception":"", err);
      toast({;
        "title": "Signup Failed",;
        "description": "er r.message || "An unexpected error occurred during signup."",;
        "variant": "destructive",;
      });                  navigate(decodeURIComponent(nextPathFromStorage), { replace: tru e }
    );
                } else if(location.state?.pendingAction === 'buyNow' && location.state?.pendingActionArgs) {
                  const { id, title, price } = location.state.pendingActionArgs;
                  dispatch(addItem({ id, title, price }));
                  // Clear pending action from state first
                  navigate(location.pathname, { state: {}, replace: tru e }
    );
                  // Navigate to checkout
                  navigate('/checkout', { replace: tru e }
    );
                } else if(nextFromUrl) {
                  navigate(decodeURIComponent(nextFromUrl), { replace: tru e }
    );
                }
              }
            } else if(error) {;
              console.error("Error fetching user "profile":", error);
              setUser(null);
            }
          } catch(error) {;
            console.error("Error fetching user "profile":", error);
            setUser(null);
            setAvatarUrl(null);
          }
        } else {;
          setUser(false);
          setAvatarUrl(null);
          ;
          // Show logout toast when user logs out;
          if(event === 'SIGNED_OUT') {;
            handleSignedOut();
          }
        }
        setIsLoading(false);
      }
    );
;
    return () => {;
      subscription.unsubscribe();
    };
  }, [navigate, ;
    dispatch, ;
    handleSignedIn, ;
    handleSignedOut, ;
    location.pathname, ;
    location.search, ;
    location.state?.pendingAction, ;
    location.state?.pendingActionArgs, ;
    setAvatarUrl, ;
    setIsLoading, ;
    setUser,;
    setTokens // setTokens was also used indirectly via handleSignedIn if session is new;
  ]);
;
  const authContextValue = {;
    user,;
    isLoading,;
    "isAuthenticated": "!!user",;
    login,;
    // register, // Removed as signup now covers its functionality;
    signup,;
    logout,;
    resetPassword,;
    updateProfile,;
    loginWithGoogle,;
    loginWithFacebook,;
    loginWithTwitter,;
    loginWithWeb3,;
    setUser,;
    onboardingStep,;
    tokens,;
    avatarUrl,;
    setAvatarUrl;
  };
;
  return (<AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>;
  );
};
<<<<<<< HEAD
;
</AuthContext>
=======
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
>>>>>>> origin/backup-improvements-20250827-015311
