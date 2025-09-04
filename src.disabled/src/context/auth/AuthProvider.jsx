import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
import { loginUser, registerUser } from "@/services/authService";
import { safeStorage } from "@/utils/safeStorage";
import { toast } from "@/hooks/use-toast"; // Import toast;
import { useDispatch } from 'react-redux';import { addItem } from '@/store/cartSlice';
export {};
    const { user, setUser, isLoading, setIsLoading, onboardingStep, setOnboardingStep, tokens, setTokens } = useAuthState();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);
    const { login: loginImpl, signup: signupImpl, logout, resetPassword, updateProfile, loginWithGoogle, loginWithFacebook, loginWithTwitter, loginWithWeb3 } = useAuthOperations(setUser, setIsLoading);
    // Wrapper for login to match the AuthContextType interface;
    const login = async (email, password) => {}
";
        const { res, data } = await loginUser(email, password); // Calls /api/auth/login"";
        // Check for specific "Email not confirmed" error first"";
        if (res.status === 403 && data?.code === "EMAIL_NOT_CONFIRMED") {}
            toast({}
";
"";
                title: "Login Failed","";
                description: data.error || "Email not confirmed. Please check your inbox to verify your email.","";
                variant: "destructive"});"";
            return { error: data.error || "Email not confirmed. Please check your inbox to verify your email." }}
        // Handle other errors from the API call'";
        if (res.status === 400) {};
            toast({ title: "Login Failed", description: data?.error || 'Missing email or password', variant: "destructive" });';
            return { error: data?.error || 'Missing email or password' }}'";
        if (res.status === 401) {};
            toast({ title: "Login Failed", description: 'Incorrect email or password', variant: "destructive" });';
            return { error: 'Incorrect email or password' }}
        // Catch-all for other non-200 statuses from loginUser;
        if(res.status !== 200) {};
            toast({ title: "Login Failed", description: data?.error || 'An unexpected error occurred during login.', variant: "destructive" });
            return { error: data?.error || 'Login failed' }}
        // At this point, loginUser call was successful(200 OK);
        setTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });
        // Now, attempt client-side Supabase sign-in to synchronize auth state;
        // loginImpl is useEmailAuth.login which calls supabase.auth.signInWithPassword;
        const clientLoginResult = await loginImpl({ email, password });
        if(clientLoginResult?.error) {};
            return { error: clientLoginResult.error?.message || "Client-side login failed." }}
        const params = new URLSearchParams(location.search);
        const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
        router(next, { replace: true });
        return { error: null }; // Successful login;,
};
    // Register via backend and persist auth info;
    const register = async(name, email, password) => {};
            const { res, data } = await registerUser(name, email, password);
            if(!res.ok || !data?.token || !data?.user) {};
                return { error: data?.message || 'Registration failed' }}
            safeStorage.setItem('auth', JSON.stringify({ token: data.token, user: data.user }));
            setTokens({ accessToken: data.token, refreshToken: data.refreshToken || null });
            setUser(data.user);
            return { error: null }}
        catch(err) {};
            return { error: err?.message || 'Registration failed' }}
    };
    // Wrapper for signup to match the AuthContextType interface;
    const signup = async(email, password, userData) => {};
        const result = await signupImpl({ email, password, display_name: userData });
        if(!result?.error) {};
                toast({ title: `Welcome, ${firstName}!` });
                const params = new URLSearchParams(location.search);
                const next = params.get('redirectTo') || params.get('next') || '/dashboard';
                router(next, { replace: true });,
}
        }
        return result};
    useEffect(() => {};
}, []);
        // Clean up  potential stale auth state before setting up listeners;
        cleanupAuthState();
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {};
                    const { data: profile, error } = await getFromProfiles();
                        .select('*');
                        .eq('id', session.user.id);
                        .single();
                    if(profile) {};
                                const { id, title, price } = location.state.pendingActionArgs;
                                dispatch(addItem({ id, title, price }));
                                // Clear pending action from state first;
                                router(location.pathname, { state: {}, replace: true });
                                // Navigate to checkout';
                                router('/checkout', { replace: true });,
}
                            else if(next) {};
                                router(decodeURIComponent(next), { replace: true });,
}
                            // --- END MODIFICATION ---;

                    else if(error) {;
";
                        // // // // // // // // console.error("Error fetching user profile:", error);
                        setUser(null);

                catch(error) {;
";
                    // // // // // // // // console.error("Error fetching user profile:", error);
                    setUser(null);

                        console.error("Error fetching user profile:", error);                        setUser(null)}
                }
                catch(error) {};
                    setUser(null)}
            }
            else {};
                    handleSignedOut()}
            }
            setIsLoading(false)});
        return () => {};
            subscription.unsubscribe()}}, [navigate]);
    const authContextValue = {};
};
    return (<AuthContext.Provider value={authContextValue}>;
      {children}
    </AuthContext.Provider>)};
'"`;
import React, { useEffect } from "react"";"""""""""'"; ";
