import React, { useEffect } from "react",
import { supabase, getFromProfiles } from "../../integrations/supabase/client",
import { useAuthOperations } from "../../hooks/useAuthOperations",
import { AuthContext } from "./AuthContext",
import { cleanupAuthState } from "../../utils/authUtils",
import { useNavigate, useLocation } from 'react-router-dom',
import { useAuthState } from "./useAuthState",
import { useAuthEventHandlers } from "./useAuthEventHandlers",
import { mapProfileToUser } from "./profileMapper",
import { loginUser, registerUser } from "@/services/authService",
import { safeStorage, safeSessionStorage } from "@/utils/safeStorage",
import { UserDetails } from "@/types/auth",
import { toast } from "@/hooks/use-toast", // Import toast
import { useDispatch } from 'react-redux',
import type { AppDispatch } from '@/store',
import { addItem } from '@/store/cartSlice',
import productionLogger, { logInfo, logWarn, logError, logDev } from '@/utils/productionLogger', // Import default export


const LOGIN_TIMEOUT_MS = 15000, // 15 seconds timeout

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    user, setUser,
    isLoading, setIsLoading,
    onboardingStep, setOnboardingStep
  } = useAuthState(),
  
  const navigate = useNavigate(),
  const location = useLocation(),
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep),

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
  } = useAuthOperations(setUser, setIsLoading, setAvatarUrl),

  // Wrapper for login to match the AuthContextType interface
  const login = async (
    email: string,
    password: string,
    rememberMe = false
  ) => {
    setIsLoading(true), // Set loading true at the start of login attempt
    try {
      // Production/Supabase mode - attempt to sign in with Supabase
      const { error: supabaseError } = await supabase.auth.signInWithPassword({
        email,
        password
      }),

      if (supabaseError) {
        logError("AuthProvider: Supabase authentication failed", supabaseError),
        
        // Provide specific error messages based on error code
        let errorMessage = "Authentication failed. Please try again.",
        let toastTitle = "Authentication Error",
        
        if (supabaseError.message || (supabaseError as any).code) { // Check code as well
          const messageIncludesEmailNotConfirmed = supabaseError.message?.toLowerCase().includes("email not confirmed") ||
                                                 supabaseError.message?.toLowerCase().includes("email address is not confirmed"),
          const codeIsEmailNotVerified = (supabaseError as any).code === 'email_not_verified',

          if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
            errorMessage = "Your email address needs to be verified. Please check your inbox for a verification link and click it to activate your account.",
            toastTitle = "Email Verification Required",
          } else if (supabaseError.message?.toLowerCase().includes("invalid login credentials") ||
                     supabaseError.message?.toLowerCase().includes("invalid credentials")) {
            errorMessage = "Invalid email or password. Please check your credentials and try again.",
            toastTitle = "Invalid Credentials",
          } else if (supabaseError.message?.toLowerCase().includes("too many requests")) {
            errorMessage = "Too many login attempts. Please wait a moment before trying again.",
            toastTitle = "Rate Limited",
          } else {
            errorMessage = supabaseError.message || "An unknown authentication error occurred.",
          }
        }
        
        // Show specific toast based on error type
        toast({
          title: toastTitle,
          description: errorMessage,
          variant: "destructive"
        }),
        
        setIsLoading(false),
        return { error: errorMessage },
      }

              logDev('AuthProvider: Supabase authentication successful'),
      // The onAuthStateChange event should now trigger automatically
      return { error: null }, // Successful login
    } catch (error: any) {
      logError('[AuthProvider] login function error:', { data: error }),
      
      // Handle unexpected errors with a fallback message
      const errorMessage = error.message || "An unexpected error occurred during login. Please try again.",
      
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive"
      }),
      
      setIsLoading(false),
      return { error: errorMessage },
    }
  },

  // Refactored signup method
  const signup = async(name: string, email: string, password: string) => {
    setIsLoading(true),
    try {
      const { res, data } = await registerUser(name, email, password),

      if(!res.ok) {
        // Handle API errors(e.g., 400, 409, 500) from /api/auth/register
        toast({
          title: "Signup Failed",
          description: data?.message || 'An unexpected error occurred.',
          variant: "destructive"
        }),
        setIsLoading(false),
        return { error: data?.message || 'Signup failed', emailVerificationRequired: false },
      }

      if(data?.emailVerificationRequired) {
        toast({
          title: "Signup Successful",
          description: "Please check your email to verify your account."
        }),
        // Optionally set minimal user info if available and desired, but no active session
        // For example: setUser({ email: data.user?.email, id: data.user?.id, name: data.user?.display_name, email_verified_pending: true }),
        // For now, we don't set any user state to prevent confusion with an active session.setIsLoading(false),
        return { error: null, emailVerificationRequired: true },
      } else if(data?.session && data?.user) {
        // Auto-confirmed: API has set the cookie, now set client-side state
        // The API(/api/auth/register) should have set the HttpOnly cookie.// Here, we update the client-side state(React context, Supabase client session)

        // Set Supabase client session - this will trigger onAuthStateChange
        // which should then fetch the profile and update the user state.const { error: sessionError } = await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token
        }),

        if(sessionError) {
          console.error("Error setting Supabase session:", sessionError),
          toast({
            title: "Signup Error",
            description: "Failed to initialize session.Please try logging in.",
            variant: "destructive"
          }),
          setIsLoading(false),
          return { error: "Failed to initialize session.", emailVerificationRequired: false },
        }

        // setTokens is handled by onAuthStateChange or if direct setting is preferred:
        setTokens({ accessToken: data.session.access_token, refreshToken: data.session.refresh_token }),

        // The user object from /api/auth/register might need mapping.// For now, we assume data.user is compatible or onAuthStateChange will handle it.// setUser(data.user), // This will be handled by onAuthStateChange after setSession

        const firstName = (data.user.user_metadata?.display_name || name).split(' ')[0],
        toast({ title: `Welcome, ${firstName}!` }),

        const params = new URLSearchParams(location.search),
        const next = params.get('redirectTo') || params.get('next') || '/dashboard',
        navigate(next, { replace: true }),
        setIsLoading(false),
        return { error: null, emailVerificationRequired: false },
      } else {
        // Fallback for unexpected successful response structure
        toast({
          title: "Signup Error",
          description: "Unexpected response from server.",
          variant: "destructive"
        }),
        setIsLoading(false),
        return { error: "Unexpected response from server.", emailVerificationRequired: false },
      }
    } catch(err: any) {
      console.error("Signup exception:", err),
      toast({
        title: "Signup Failed",
        description: err.message || "An unexpected error occurred during signup.",
        variant: "destructive"
      }),
      setIsLoading(false),
      return { error: err.message || "Signup failed", emailVerificationRequired: false },
    }
  },

  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState(),
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if(session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
              .single(),

    if (!isSupabaseConfigured) {
      logWarn('[AuthProvider] Supabase not configured - skipping auth state listener'),
      setIsLoading(false),
      return,
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      // Inside the onAuthStateChange callback
      async (event: any, session: any) => {
        if (process.env.NODE_ENV === 'development') {
            logDev('AuthProvider: onAuthStateChange entered', { isLoading, event, sessionExists: !!session }),
        }

        // Only set isLoading true if we are expecting a significant state change or async operation
        // For example, when a user is signing in, or we are actively fetching a profile.
        // Avoid setting it true for every single event if not necessary.

        try {
            // If a session and user exist AND the event indicates a successful login or session refresh
            if (session?.user && (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED')) {
                setIsLoading(true), // Set loading before starting async profile fetch
                if (process.env.NODE_ENV === 'development') {
                    logInfo('[AuthProvider DEBUG] Session and user found, and event is appropriate. User ID:', { data: { userId: session.user.id, event: event } }),
                }

                try {
                    if (process.env.NODE_ENV === 'development') {
                        logInfo('[AuthProvider DEBUG] Attempting to fetch profile for user ID:', { data: session.user.id }),
                    }
                    
                    const { data: profile, error: profileError } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', session.user.id)
                        .single(),

                    if (process.env.NODE_ENV === 'development') {
                        logInfo('[AuthProvider DEBUG] Raw profile data:', { data: JSON.stringify(profile, null, 2) }),
                        logInfo('[AuthProvider DEBUG] Profile fetch error (if any):', { data: JSON.stringify(profileError, null, 2) }),
                    }

                    if (profileError) {
                        logError('[AuthProvider DEBUG] Error fetching user profile:', { data: profileError }),
                        let shouldSignOut = false,
                        // Check for common indicators of auth failure in Supabase errors
                        // Supabase errors might have a __isAuthError boolean, or specific messages/status codes.
                        // Adjust these checks based on actual Supabase error object structure.
                        const message = profileError.message?.toLowerCase() || "",
                        const status = (profileError as any).status, // Supabase errors might not always have a 'status' directly

                        if (message.includes('jwt') || message.includes('unauthorized') || message.includes('invalid token') || status === 401) {
                            shouldSignOut = true,
                            logWarn(`[AuthProvider] Profile fetch failed with auth-like error for user ${session.user.id} (event: ${event}). Message: ${profileError.message}. Attempting sign out.`),
                        } else {
                             logWarn(`[AuthProvider] Profile fetch failed for user ${session.user.id} (event: ${event}). Message: ${profileError.message}. Not treated as auth error for immediate signout.`),
                        }

                        // Only show toast if it's a genuine signed-in event, not for passive token refreshes if profile is missing
                        if (event === 'SIGNED_IN' && !shouldSignOut) { // Avoid double toasting if signout will occur
                            toast({
                                title: "Profile Load Error",
                                description: `Login successful, but failed to load your profile. ${profileError.message}`,
                                variant: "destructive"
                            }),
                        }

                        setUser(null),
                        setAvatarUrl(null),

                        if (shouldSignOut) {
                            // This will trigger onAuthStateChange with 'SIGNED_OUT' event, which handles full cleanup.
                            await supabase.auth.signOut(),
                        }
                    } else if (profile) {
                        logInfo('[AuthProvider DEBUG] Profile data fetched successfully.'),
                        let mappedUser,
                        try {
                            logInfo('[AuthProvider DEBUG] Mapping profile to user. session.user:', { data: { sessionUser: JSON.stringify(session.user, null, 2), profile: JSON.stringify(profile, null, 2) } }),
                            mappedUser = mapProfileToUser(session.user, profile),
                            logInfo('[AuthProvider DEBUG] Mapped user data:', { data: JSON.stringify(mappedUser, null, 2) }),
                        } catch (mappingError) {
                            logError('[AuthProvider DEBUG] Error mapping profile to user:', { data: mappingError }),
                            mappedUser = null,
                        }

                        if (mappedUser) {
                            setUser(mappedUser),
                            setAvatarUrl(mappedUser.avatarUrl || null),
                            productionLogger.setUserId(mappedUser.id), // Set User ID for logger
                            logInfo('[AuthProvider DEBUG] User state updated in context and logger.', { userId: mappedUser.id }),

                            // Call handleSignedIn for SIGNED_IN event to trigger redirection etc.
                            if (event === 'SIGNED_IN') {
                                 logInfo('[AuthProvider DEBUG] Event is SIGNED_IN. Calling handleSignedIn.'),
                                 logInfo('[AuthProvider DEBUG] User object being passed to handleSignedIn:', { data: JSON.stringify(mappedUser, null, 2) }),
                                 handleSignedIn(mappedUser), // This often handles redirection

                                // Redirection logic
                                try {
                                    const queryStringAuthChange = router.asPath.includes('?') ? router.asPath.substring(router.asPath.indexOf('?')) : '',
                                    const paramsAuthChange = new URLSearchParams(queryStringAuthChange),
                                    const nextFromUrl = paramsAuthChange.get('redirectTo') || paramsAuthChange.get('next'),
                                    const nextPathFromStorage = safeStorage.getItem('nextPath'),
                                    let redirectTo = '/dashboard', // Default

                                    if (nextPathFromStorage) {
                                      redirectTo = decodeURIComponent(nextPathFromStorage),
                                      safeStorage.removeItem('nextPath'),
                                      logInfo('[AuthProvider DEBUG] Redirecting to (from storage):', { data: redirectTo }),
                                    } else if (nextFromUrl) {
                                      redirectTo = decodeURIComponent(nextFromUrl),
                                      logInfo('[AuthProvider DEBUG] Redirecting to (from URL params):', { data: redirectTo }),
                                    } else {
                                      logInfo('[AuthProvider DEBUG] Redirecting to default dashboard.'),
                                    }
                                    logInfo('[AuthProvider DEBUG] Attempting to redirect to:', { data: redirectTo }),
                                    router.replace(redirectTo),
                                  } catch (redirectError) {
                                    logError('[AuthProvider DEBUG] Error during redirection:', { data: redirectError }),
                                  }
                            }
                        } else {
                            logError("[AuthProvider DEBUG] Mapped user is null. Not updating user state. Mapping failed or profile was insufficient."),
                             if (event === 'SIGNED_IN') { // Only toast if it was an active sign-in attempt
                                toast({
                                    title: "User Data Error",
                                    description: "Failed to process user information after login. Please contact support.",
                                    variant: "destructive"
                                }),
                             }
                             setUser(null),
                             setAvatarUrl(null),
                        }
                    } else { // Profile is null, but no error
                        logWarn('[AuthProvider DEBUG] Profile not found for user (no error, but profile is null):', { data: session.user.id }),
                        if (event === 'SIGNED_IN') { // Only toast if it was an active sign-in attempt
                            toast({
                                title: "Profile Not Found",
                                description: "Login successful, but your profile could not be found. Please contact support.",
                                variant: "destructive"
                            }),
                        }
                        setUser(null),
                        setAvatarUrl(null),
                    }
                } catch (profileMapError) {
                    // This catch block is for errors specifically within the profile fetching/user mapping phase
                    logError('[AuthProvider DEBUG] Critical error in profile fetching/user mapping phase:', { data: profileMapError }),
                     if (event === 'SIGNED_IN') {
                        toast({
                            title: "User Initialization Error",
                            description: "A critical error occurred while setting up your user account. Please try logging out and in again.",
                            variant: "destructive"
                        }),
                    }
                    setUser(null),
                    setAvatarUrl(null),
                    // Potentially call cleanupAuthState() or handleSignedOut() if appropriate
                } finally {
                    logInfo('[AuthProvider DEBUG] onAuthStateChange profile fetch: Entering finally block. Current isLoading:', { data: isLoading }),
                    setIsLoading(false), // Stop loading after profile fetch attempt
                    logInfo('[AuthProvider DEBUG] onAuthStateChange profile fetch: setIsLoading(false) called. New isLoading:', { data: isLoading }),
                }
            } else if (event === 'SIGNED_OUT') {
                if (process.env.NODE_ENV === 'development') {
                    logInfo('[AuthProvider DEBUG] Event is SIGNED_OUT. Clearing user state and calling handleSignedOut.'),
                }
                setIsLoading(true), // Briefly set loading true while clearing state
                setUser(null),
                setAvatarUrl(null),
                setTokens(null), // Clear tokens
                productionLogger.setUserId(null), // Clear User ID from logger
                cleanupAuthState(), // Utility to clear local/session storage
                logInfo('[AuthProvider DEBUG] onAuthStateChange: Calling handleSignedOut for SIGNED_OUT event. Cleared logger userID.'),
                handleSignedOut(),
                setIsLoading(false),
                logInfo('[AuthProvider DEBUG] onAuthStateChange SIGNED_OUT: setIsLoading(false) called. New isLoading:', { data: isLoading }),
            } else {
                // Handles cases like:
                // - No session initially (e.g., anonymous user on first load)
                // - Events like PASSWORD_RECOVERY, USER_DELETED etc. that don't imply an active session for profile fetch
                // - Or if session.user is null even if session object exists.
                if (process.env.NODE_ENV === 'development') {
                    logInfo('[AuthProvider DEBUG] No active session for profile fetch or event is not SIGNED_IN/TOKEN_REFRESHED/USER_UPDATED. Event:', { data: { event: event, sessionUserPresent: !!session?.user } }),
                }
                // If user is not null, it means there was a user, but now the session is not one for active profile loading.
                // This could happen if a token refresh fails and Supabase reverts to no user, or an initial check.
                if (user !== null) { // Only update state if it's currently non-null, to avoid unnecessary re-renders
                  setUser(null),
                  setAvatarUrl(null),
                  setTokens(null),
                  productionLogger.setUserId(null), // Ensure logger userID is cleared if user becomes null
                }
                // Ensure isLoading is false if no action is taken or if we fall through here.
                // This is crucial for anonymous users on initial load.
                if (isLoading) { // Only set if it's currently true
                    setIsLoading(false),
                    logInfo('[AuthProvider DEBUG] onAuthStateChange fallback: setIsLoading(false) called. New isLoading:', { data: isLoading }),
                }
              }
            } else if(error) {
              console.error("Error fetching user profile:", error),
              setUser(null),
            }
          } catch(error) {
            console.error("Error fetching user profile:", error),
            setUser(null),
            setAvatarUrl(null),
          }
        } else {
          setUser(false),
          setAvatarUrl(null),
          
          // Show logout toast when user logs out
          if(event === 'SIGNED_OUT') {
            handleSignedOut(),
          }
        }
        setIsLoading(false),
      }
    ),

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false),
      }
    }).catch(error => {
      console.error("Error during initial Supabase getSession:", error),
      setUser(null), // Explicitly set user to null on error
      setIsLoading(false),
    }),

    return () => {
      subscription.unsubscribe(),
    },
  }, [navigate, 
    dispatch, 
    handleSignedIn, 
    handleSignedOut, 
    location.pathname, 
    location.search, 
    location.state?.pendingAction, 
    location.state?.pendingActionArgs, 
    setAvatarUrl, 
    setIsLoading, 
    setUser,
    setTokens // setTokens was also used indirectly via handleSignedIn if session is new
  ]),

  const authContextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    // register, // Removed as signup now covers its functionality
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    onboardingStep
  },

  return (<AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  ),
},
