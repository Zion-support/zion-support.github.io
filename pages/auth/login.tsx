import Link from 'next/link';
import Head from 'next/head';
import type {_AuthError, _User, _AuthChangeEvent, _Session} from '@supabase/supabase-js';

const _LoginPage = () => {_const _router = useRouter();
  const { t} = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState(false); // For login form submission
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true); // For initial session check
  const [sessionChecked, setSessionChecked] = useState(false); // New state: true after initial getSession completes
  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);

  // States for the new proactive resend form
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{_type: 'success' | 'error'; text: string} | null>(null);

  // Using centralized Supabase client (imported at top)

  // Effect for initial session check and auth state changes
  useEffect__(() => {_let _mounted = true;
    logInfo('LoginPage: Initial session check effect runs.');

    const _sessionTimeoutId = setTimeout__(() => {
      if (mounted) {
        logWarn('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false); // Allow form to render if timeout
        setSessionChecked(true); // Mark check as complete even on timeout}
    }, 5000);

    const _checkSessionAndListen = async () => {_if (!mounted) return;

      setIsCheckingSession(true);
      try {
        logInfo('LoginPage: Calling supabase.auth.getSession()');
        const { data: { session}, error: sessionError } = await supabase.auth.getSession();
        clearTimeout(sessionTimeoutId); // Clear timeout once getSession completes
        if (!mounted) return;

        if (sessionError) {_logErrorToProduction('LoginPage: Error getting session:', _{ data: sessionError});
          setError(sessionError as any); // Cast to any if type is too strict
        } else {_logInfo('LoginPage: getSession returned, _user:', _{ data: session?.user?.id});
          setUser(session?.user ?? null);
        }
      } catch (e) {_if (mounted) {
          logErrorToProduction('LoginPage: Exception during getSession:', _{ data:  e});
          clearTimeout(sessionTimeoutId); // Ensure timeout is cleared on error too
        }
      } finally {_if (mounted) {
          setIsCheckingSession(false);
          setSessionChecked(true);
          logInfo('LoginPage: Initial session check complete. isCheckingSession: false, _sessionChecked: true');}
      }

      // Listener for auth state changes
      logInfo('LoginPage: Setting up onAuthStateChange listener.');
      const {_data: authListener} = supabase.auth.onAuthStateChange(_(event: AuthChangeEvent, _session: Session | null) => {_if (!mounted) return;
        logInfo('LoginPage: onAuthStateChange event:', _{ 
          event, _userId: session?.user?.id});
        setUser(session?.user ?? null);
        // If auth state changes after initial check, ensure sessionChecked is true
        // This handles cases like login/logout in another tab.
        if (!sessionChecked && event !== "INITIAL_SESSION") {_setSessionChecked(true);
           logInfo('LoginPage: onAuthStateChange updated sessionChecked to true.');}
      });
      
      return () => {_// Cleanup for listener
        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();};
    };

    const _unsubscribePromise = checkSessionAndListen();

    return () => {_mounted = false;
      clearTimeout(sessionTimeoutId); // Clear timeout on unmount
      logInfo('LoginPage: Unmounting, _cleaning up auth listener.');
      unsubscribePromise.then(cleanup => cleanup && cleanup());};
  }, []); // Run only once on mount

  // Effect for handling redirection AFTER session is checked and user state is updated
  useEffect__(() => {_logInfo(`LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${_isLoading}, user: ${_user?.id}, pathname: ${_router.pathname}`);
    
    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists
    if (sessionChecked && !isLoading && user) {_// Get returnTo from query params, _decode it if it exists
      let _returnTo = '/dashboard'; // Default fallback
      
      if (router.query.returnTo && typeof router.query.returnTo === 'string') {
        try {
          returnTo = decodeURIComponent(router.query.returnTo);} catch (e) {_logWarn('Failed to decode returnTo parameter:', _{ data: router.query.returnTo});
          returnTo = '/dashboard';
        }
      }
      
      // Prevent redirecting back to auth pages or creating loops
      const _authPages = ['/auth/login', '/auth/register', '/login', '/signup', '/auth/forgot-password'];
      if (authPages.includes(returnTo) || returnTo.startsWith('/auth/')) {_returnTo = '/dashboard';}
      
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {_returnTo = '/dashboard';}
      
      logInfo(`LoginPage: Conditions met for redirect. Current path: ${_router.pathname}, Target: ${_returnTo}`);
      
      // Add a small delay to ensure session is fully established
      const _redirectTimer = setTimeout__(() => {_// Double-check that we're still logged in before redirecting
        if (user && router.pathname === '/auth/login') {
          logInfo(`LoginPage: Executing delayed redirect to ${returnTo}`);
          router.replace(returnTo); // Use replace to avoid back button issues
        }
      }, 100); // Small delay to let session stabilize
      
      return () => clearTimeout(redirectTimer);
    }
    
    // Return undefined for all other cases
    return undefined;
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]); // Dependencies: user, sessionChecked, isLoading, router

  const _handleResendVerification = async () => {_if (!email) {
      setError({ name: 'ValidationError', _message: 'Please enter your email address first'} as AuthError);
      return;
    }
    
    setIsResendingVerification(true);
    try {_const _response = await fetch('/api/resend-verification-email', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_email})
      });
      
      if (response.ok) {_setVerificationEmailSent(true);
        setError(null);} else {_const _data = await response.json();
        setError({ name: 'ResendError', _message: data.message || 'Failed to resend verification email'} as AuthError);
      }
    } catch (err) {_setError({ name: 'NetworkError', _message: 'Failed to resend verification email. Please try again.'} as AuthError);
    } finally {_setIsResendingVerification(false);}
  };

  const _handleProactiveResendVerification = async (_e: FormEvent) => {_e.preventDefault();
    if (!proactiveResendEmail) {
      setProactiveResendMessage({ type: 'error', _text: 'Please enter your email address.'});
      return;
    }

    setIsProactivelyResending(true);
    setProactiveResendMessage(null);
    try {_const _response = await fetch('/api/resend-verification-email', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_email: proactiveResendEmail})
      });

      const _data = await response.json();
      if (response.ok) {_setProactiveResendMessage({ type: 'success', _text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).` });
      } else {_setProactiveResendMessage({ type: 'error', _text: data.message || 'Failed to resend verification email.'});
      }
    } catch (err) {_setProactiveResendMessage({ type: 'error', _text: 'An unexpected error occurred. Please try again.'});
    } finally {_setIsProactivelyResending(false);}
  };

  const _handleLogin = async (_e: FormEvent) => {_e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsEmailUnverified(false);
    setVerificationEmailSent(false);
    
    try {
      logInfo('Attempting Supabase login with email:', _{ data: email});
      const {_data, _error: signInError} = await supabase.auth.signInWithPassword({_email, _password});

      if (signInError) {_logErrorToProduction('Supabase sign-in error:', _{ data: signInError});
        
        // Check if error is related to email verification
        const _messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
                                                 signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified"
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
        const _codeIsEmailNotVerified = (signInError as any).code === 'email_not_verified';

        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {_setIsEmailUnverified(true);
          setError({ 
            name: 'EmailNotVerifiedError', _message: 'Please verify your email address before logging in. Check your inbox for a verification link.'} as AuthError);
          setShowProactiveResendForm(false); // Hide proactive form if reactive one is triggered
          
          // Auto-resend verification email
          setTimeout__(() => {_handleResendVerification();}, 1000);
        } else {_// MODIFIED SECTION FOR BETTER ERROR MESSAGES
          let _displayMessage = 'Login failed. Please check your credentials and try again.'; // Default user-friendly message
          if (signInError.message) {
              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.';} else if (signInError.message.toLowerCase().includes('network request failed')) {_displayMessage = 'Network error. Please check your internet connection and try again.';} else if (signInError.message.toLowerCase().includes('user disabled')) {_displayMessage = 'Your account has been disabled. Please contact support.';}
              // Add more specific checks here if needed for other Supabase error messages
          }
          setError({_name: signInError.name || 'AuthApiError', _message: displayMessage} as AuthError);
        }
      } else if (data.user) {_logInfo('Supabase sign-in successful, _user:', _{ data: data.user});
        setUser(data.user); // setUser to trigger useEffect for redirection
        // Redirection is now handled by the useEffect hook
      } else {_// Should not happen if signInError is null and data.user is null
        logWarn('Supabase sign-in returned no error but no user.');
        setError({ name: 'UnknownAuthError', _message: 'Login failed due to an unknown error. Please try again.'} as AuthError);
      }
    } catch (catchedError: unknown) {_logErrorToProduction('Exception during Supabase sign-in:', _{ data: catchedError});
      // Check if the caught error is a network error
      let _exceptionMessage = 'An unexpected error occurred. Please try again.';
      if (catchedError.message && catchedError.message.toLowerCase().includes('networkerror when attempting to fetch resource')) {_exceptionMessage = 'Network error. Please check your internet connection and try again.';} else if (catchedError.message) {_exceptionMessage = catchedError.message;}
      setError({_name: 'ExceptionError', _message: exceptionMessage} as AuthError);
    } finally {_setIsLoading(false);}
  };

  // Auto-redirect to verification status page for unverified users after showing message
  useEffect__(() => {_if (isEmailUnverified && verificationEmailSent && email) {
      const _timer = setTimeout__(() => {
        router.push(`/verify-status?email=${encodeURIComponent(email)}`);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined; // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]);

  // --- Rendering Logic ---

  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {_logInfo('LoginPage: Rendering "Checking authentication..."');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>
        </div>
      </div>
    );}

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {_logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-4">Already Logged In</h2>
          <p className="text-gray-600 mb-4">Redirecting to your dashboard...</p>
        </div>
      </div>
    );}

  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  logInfo(`LoginPage: Rendering login form. sessionChecked: ${_sessionChecked}, user: ${_user?.id}, isLoading: ${_isLoading}, pathname: ${_router.pathname}`);

  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {_logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`);
    return null; // Or a minimal loader/empty div
  }

  return (
    <>
      <Head>
        <title>{_`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={_handleLogin} className="space-y-4">
              {_error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error.message}</p>
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={_email}
                  onChange={_(_e) => setEmail(e.target.value)}
                  required
                  disabled={_isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={_password}
                  onChange={_(_e) => setPassword(e.target.value)}
                  required
                  disabled={_isLoading}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={_isLoading || isEmailUnverified}>
                {_isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{_' '}
                <Link href="/auth/register" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
