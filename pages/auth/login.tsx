<<<<<<< HEAD
import { useRouter } from 'next/router',
import { useEffect, useState, FormEvent } from 'react',
import Link from 'next/link',
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react'
import Head from 'next/head',
import { signIn } from 'next-auth/react',
import { supabase } from '@/utils/supabase/client',
import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js',
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger',
import { useTranslation } from 'react-i18next',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',

const LoginPage = () => {
  const router = useRouter(),
  const { t } = useTranslation(),
  const [email, setEmail] = useState(''),
  const [password, setPassword] = useState(''),
  const [error, setError] = useState<AuthError | null>(null),
  const [isLoading, setIsLoading] = useState(false), // For login form submission
  const [user, setUser] = useState<User | null>(null),
  const [isCheckingSession, setIsCheckingSession] = useState(true), // For initial session check
  const [sessionChecked, setSessionChecked] = useState(false), // New state: true after initial getSession completes
  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false),
  const [isEmailUnverified, setIsEmailUnverified] = useState(false),
  const [verificationEmailSent, setVerificationEmailSent] = useState(false),
  const [isResendingVerification, setIsResendingVerification] = useState(false),

  // States for the new proactive resend form
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false),
  const [proactiveResendEmail, setProactiveResendEmail] = useState(''),
  const [isProactivelyResending, setIsProactivelyResending] = useState(false),
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Using centralized Supabase client (imported at top)

  // Effect for initial session check and auth state changes
<<<<<<< HEAD
  useEffect(() => {
    let mounted = true,
    logInfo('LoginPage: Initial session check effect runs.'),
=======
  useEffect__(() => {_let _mounted = true;
    logInfo('LoginPage: Initial session check effect runs.');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _sessionTimeoutId = setTimeout__(() => {
      if (mounted) {
<<<<<<< HEAD
        logWarn('LoginPage: Session check timeout after 5 seconds'),
        setSessionCheckTimedOut(true),
        setIsCheckingSession(false), // Allow form to render if timeout
        setSessionChecked(true), // Mark check as complete even on timeout
      }
    }, 5000),

    const checkSessionAndListen = async () => {
      if (!mounted) return,
=======
        logWarn('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false); // Allow form to render if timeout
        setSessionChecked(true); // Mark check as complete even on timeout}
    }, 5000);

    const _checkSessionAndListen = async () => {_if (!mounted) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      setIsCheckingSession(true),
      try {
<<<<<<< HEAD
        logInfo('LoginPage: Calling supabase.auth.getSession()'),
        const { data: { session }, error: sessionError } = await supabase.auth.getSession(),
        clearTimeout(sessionTimeoutId), // Clear timeout once getSession completes
        if (!mounted) return,

        if (sessionError) {
          logErrorToProduction('LoginPage: Error getting session:', { data: sessionError }),
          setError(sessionError as any), // Cast to any if type is too strict
        } else {
          logInfo('LoginPage: getSession returned, user:', { data: session?.user?.id }),
          setUser(session?.user ?? null)
        }
      } catch (e) {
        if (mounted) {
          logErrorToProduction('LoginPage: Exception during getSession:', { data:  e }),
          clearTimeout(sessionTimeoutId), // Ensure timeout is cleared on error too
        }
      } finally {
        if (mounted) {
          setIsCheckingSession(false),
          setSessionChecked(true),
          logInfo('LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true')
        }
      }

      // Listener for auth state changes
      logInfo('LoginPage: Setting up onAuthStateChange listener.'),
      const { data: authListener } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
        if (!mounted) return,
        logInfo('LoginPage: onAuthStateChange event:', { 
          event, 
          userId: session?.user?.id 
        }),
        setUser(session?.user ?? null),
        // If auth state changes after initial check, ensure sessionChecked is true
        // This handles cases like login/logout in another tab.
<<<<<<< HEAD
        if (!sessionChecked && event !== "INITIAL_SESSION") {
           setSessionChecked(true),
           logInfo('LoginPage: onAuthStateChange updated sessionChecked to true.')
=======
        if (!sessionChecked && event !== &quot;INITIAL_SESSION&quot;) {
           setSessionChecked(true);
           logInfo('LoginPage: onAuthStateChange updated sessionChecked to true.');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
      }),
      
      return () => { // Cleanup for listener
        logInfo('LoginPage: Unsubscribing from onAuthStateChange.'),
        authListener?.subscription?.unsubscribe()
      }
    },

    const unsubscribePromise = checkSessionAndListen(),

    return () => {
      mounted = false,
      clearTimeout(sessionTimeoutId), // Clear timeout on unmount
      logInfo('LoginPage: Unmounting, cleaning up auth listener.'),
      unsubscribePromise.then(cleanup => cleanup && cleanup())
    }
  }, []), // Run only once on mount

  // Effect for handling redirection AFTER session is checked and user state is updated
  useEffect(() => {
    logInfo(`LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${isLoading}, user: ${user?.id}, pathname: ${router.pathname}`),
    
    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists
    if (sessionChecked && !isLoading && user) {
      // Get returnTo from query params, decode it if it exists
      let returnTo = '/dashboard', // Default fallback
      
      if (router.query.returnTo && typeof router.query.returnTo === 'string') {
        try {
          returnTo = decodeURIComponent(router.query.returnTo)
        } catch (e) {
          logWarn('Failed to decode returnTo parameter:', { data: router.query.returnTo }),
          returnTo = '/dashboard'
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      }
      
      // Prevent redirecting back to auth pages or creating loops
<<<<<<< HEAD
      const authPages = ['/auth/login/auth/register/login/signup/auth/forgot-password'],
      if (authPages.includes(returnTo) || returnTo.startsWith('/auth/')) {
        returnTo = '/dashboard'
      }
      
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {
        returnTo = '/dashboard'
      }
      
      logInfo(`LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`),
=======
      const _authPages = ['/auth/login', '/auth/register', '/login', '/signup', '/auth/forgot-password'];
      if (authPages.includes(returnTo) || returnTo.startsWith('/auth/')) {_returnTo = '/dashboard';}
      
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {_returnTo = '/dashboard';}
      
      logInfo(`LoginPage: Conditions met for redirect. Current path: ${_router.pathname}, Target: ${_returnTo}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Add a small delay to ensure session is fully established
      const _redirectTimer = setTimeout__(() => {_// Double-check that we're still logged in before redirecting
        if (user && router.pathname === '/auth/login') {
          logInfo(`LoginPage: Executing delayed redirect to ${returnTo}`),
          router.replace(returnTo), // Use replace to avoid back button issues
        }
      }, 100), // Small delay to let session stabilize
      
      return () => clearTimeout(redirectTimer)
    }
    
    // Return undefined for all other cases
    return undefined
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]), // Dependencies: user, sessionChecked, isLoading, router

<<<<<<< HEAD
  const handleResendVerification = async () => {
    if (!email) {
      setError({ name: 'ValidationError', message: 'Please enter your email address first' } as AuthError),
      return
    }
    
    setIsResendingVerification(true),
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }),
      
      if (response.ok) {
        setVerificationEmailSent(true),
        setError(null)
      } else {
        const data = await response.json(),
        setError({ name: 'ResendError', message: data.message || 'Failed to resend verification email' } as AuthError)
      }
    } catch (err) {
      setError({ name: 'NetworkError', message: 'Failed to resend verification email. Please try again.' } as AuthError)
    } finally {
      setIsResendingVerification(false)
    }
  },

  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.preventDefault(),
    if (!proactiveResendEmail) {
      setProactiveResendMessage({ type: 'error', text: 'Please enter your email address.' }),
      return
    }

    setIsProactivelyResending(true),
    setProactiveResendMessage(null),
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: proactiveResendEmail })
      }),

      const data = await response.json(),
      if (response.ok) {
        setProactiveResendMessage({ type: 'success', text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).` })
      } else {
        setProactiveResendMessage({ type: 'error', text: data.message || 'Failed to resend verification email.' })
      }
    } catch (err) {
      setProactiveResendMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsProactivelyResending(false)
    }
  },

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault(),
    setIsLoading(true),
    setError(null),
    setIsEmailUnverified(false),
    setVerificationEmailSent(false),
    
    try {
      logInfo('Attempting Supabase login with email:', { data: email }),
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (signInError) {
        logErrorToProduction('Supabase sign-in error:', { data: signInError }),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Check if error is related to email verification
        const _messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
<<<<<<< HEAD
                                                 signInError.message?.toLowerCase().includes('confirm'),
        // As per issue description, check for a specific error code "email_not_verified"
=======
                                                 signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code &quot;email_not_verified&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
<<<<<<< HEAD
        const codeIsEmailNotVerified = (signInError as any).code === 'email_not_verified',

        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
          setIsEmailUnverified(true),
          setError({ 
            name: 'EmailNotVerifiedError', 
            message: 'Please verify your email address before logging in. Check your inbox for a verification link.' 
          } as AuthError),
          setShowProactiveResendForm(false), // Hide proactive form if reactive one is triggered
          
          // Auto-resend verification email
          setTimeout(() => {
            handleResendVerification()
          }, 1000)
        } else {
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES
          let displayMessage = 'Login failed. Please check your credentials and try again.', // Default user-friendly message
          if (signInError.message) {
              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.'
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.'
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.'
              }
              // Add more specific checks here if needed for other Supabase error messages
          }
          setError({ name: signInError.name || 'AuthApiError', message: displayMessage } as AuthError)
        }
      } else if (data.user) {
        logInfo('Supabase sign-in successful, user:', { data: data.user }),
        setUser(data.user), // setUser to trigger useEffect for redirection
        // Redirection is now handled by the useEffect hook
      } else {
        // Should not happen if signInError is null and data.user is null
        logWarn('Supabase sign-in returned no error but no user.'),
        setError({ name: 'UnknownAuthError', message: 'Login failed due to an unknown error. Please try again.' } as AuthError)
      }
    } catch (catchedError: any) {
      logErrorToProduction('Exception during Supabase sign-in:', { data: catchedError }),
      // Check if the caught error is a network error
      let exceptionMessage = 'An unexpected error occurred. Please try again.',
      if (catchedError.message && catchedError.message.toLowerCase().includes('networkerror when attempting to fetch resource')) {
        exceptionMessage = 'Network error. Please check your internet connection and try again.'
      } else if (catchedError.message) {
        exceptionMessage = catchedError.message
      }
      setError({ name: 'ExceptionError', message: exceptionMessage } as AuthError)
    } finally {
      setIsLoading(false)
    }
  },

  // Auto-redirect to verification status page for unverified users after showing message
  useEffect(() => {
    if (isEmailUnverified && verificationEmailSent && email) {
      const timer = setTimeout(() => {
        router.push(`/verify-status?email=${encodeURIComponent(email)}`)
      }, 3000),
      return () => clearTimeout(timer)
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return undefined, // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]),

  // --- Rendering Logic ---

  // 1. Primary Loading State: During initial session check
<<<<<<< HEAD
  if (isCheckingSession) {
<<<<<<< HEAD
    logInfo('LoginPage: Rendering "Checking authentication..."'),
=======
    logInfo('LoginPage: Rendering &quot;Checking authentication...&quot;');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  if (isCheckingSession) {_logInfo('LoginPage: Rendering "Checking authentication..."');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4&quot;></div>
          <p className=&quot;text-gray-600&quot;>Checking authentication...</p>
          <p className=&quot;text-sm text-gray-500 mt-2&quot;>This should only take a moment</p>
        </div>
      </div>
<<<<<<< HEAD
    )
  }

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {
<<<<<<< HEAD
    logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."'),
=======
    logInfo('LoginPage: Rendering &quot;Already Logged In / Redirecting...&quot;');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    );}

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {_logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4&quot;></div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Already Logged In</h2>
          <p className=&quot;text-gray-600 mb-4&quot;>Redirecting to your dashboard...</p>
        </div>
      </div>
<<<<<<< HEAD
    )
  }

  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  logInfo(`LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router.pathname}`),

  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {
    logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`),
    return null, // Or a minimal loader/empty div
=======
    );}

  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  logInfo(`LoginPage: Rendering login form. sessionChecked: ${_sessionChecked}, user: ${_user?.id}, isLoading: ${_isLoading}, pathname: ${_router.pathname}`);

  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {_logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`);
    return null; // Or a minimal loader/empty div
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
        <meta name=&quot;description&quot; content=&quot;Sign in to your Zion Tech Marketplace account&quot; />
=======
        <title>{_`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>
      
      <div className=&quot;min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8&quot;>
        <Card className=&quot;w-full max-w-md&quot;>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
            <form onSubmit={handleLogin} className=&quot;space-y-4&quot;>
              {error && (
                <div className=&quot;p-3 bg-red-50 border border-red-200 rounded-md&quot;>
                  <p className=&quot;text-sm text-red-600&quot;>{error.message}</p>
=======
            <form onSubmit={_handleLogin} className="space-y-4">
              {_error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error.message}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              )}
              
              <div className=&quot;space-y-2&quot;>
                <label htmlFor=&quot;email&quot; className=&quot;text-sm font-medium&quot;>
                  Email
                </label>
                <Input
<<<<<<< HEAD
                  id=&quot;email&quot;
                  type=&quot;email&quot;
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
=======
                  id="email"
                  type="email"
                  value={_email}
                  onChange={_(_e) => setEmail(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  required
                  disabled={_isLoading}
                />
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <label htmlFor=&quot;password&quot; className=&quot;text-sm font-medium&quot;>
                  Password
                </label>
                <Input
<<<<<<< HEAD
                  id=&quot;password&quot;
                  type=&quot;password&quot;
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
=======
                  id="password"
                  type="password"
                  value={_password}
                  onChange={_(_e) => setPassword(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  required
                  disabled={_isLoading}
                />
              </div>
              
<<<<<<< HEAD
              <Button type=&quot;submit&quot; className=&quot;w-full&quot; disabled={isLoading || isEmailUnverified}>
                {isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')}
              </Button>
            </form>
            
            <div className=&quot;mt-6 text-center&quot;>
              <p className=&quot;text-sm text-gray-600&quot;>
                Don't have an account?{' '}
<<<<<<< HEAD
                <Link href="/auth/register" className="text-blue-600 hover: underline">
=======
                <Link href=&quot;/auth/register&quot; className=&quot;text-blue-600 hover:underline&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
              <Button type="submit" className="w-full" disabled={_isLoading || isEmailUnverified}>
                {_isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{_' '}
                <Link href="/auth/register" className="text-blue-600 hover:underline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
},

export default LoginPage,
