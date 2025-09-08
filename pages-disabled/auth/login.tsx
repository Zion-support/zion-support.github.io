



import Head from 'next/head';

} from '@supabase/supabase-js';
import {};
  logInfo;
  logWarn;
  logErrorToProduction;


import type {;
  AuthError,;
  User,;


  AuthError,
  User,

  AuthChangeEvent,;
  Session,;'
} from '@supabase/supabase-js';
import {;
  logInfo,;
  logWarn,;
  logErrorToProduction,;



} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


} from '@/components/ui/card';
const LoginPage = () => {;



  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;

} from '@/components/ui/card';
const LoginPage = () => {

const LoginPage = () => {



import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';





  const router = useRouter();
  const { t } = useTranslation();'
  const [email, setEmail] = useState('');'
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);



  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);

  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);

    type: 'success' | 'error';

  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),



  // Using centralized Supabase client (imported at top)
  // Effect for initial session check and auth state changes
  useEffect(() => {
    let mounted = true;



          }
        });


      return () => {;
        // Cleanup for listener;

        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();

      ];
      if (authPages && authPages.includes(returnTo) || returnTo && returnTo.startsWith('/auth/')) {;

        returnTo = '/dashboard';
      }

      // Ensure returnTo is a relative path to prevent open redirect attacks;'
      if (returnTo && returnTo.startsWith('http') || returnTo && returnTo.includes('://')) {;'
        returnTo = '/dashboard';
      }

      }, 100); // Small delay to let session stabilize;

      return () => clearTimeout(redirectTimer);
    }

    // Return undefined for all other cases;
    return undefined;
  }, [user, sessionChecked, isLoading, router, router && router.query.returnTo]); // Dependencies: user, sessionChecked, isLoading, router;

  const handleResendVerification = async () => {;
    if (!email) {;
      setError({;'
        name: 'ValidationError',;'
        message: 'Please enter your email address first',;

      } as AuthError);
      return;
    }


        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email }),;



        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })




      });
      if (response && response.ok) {;
        setVerificationEmailSent(true);
        setError(null);
      } else {;
        const data = await response && response.json();
        setError({;'
          name: 'ResendError',;'
          message: data && data.message || 'Failed to resend verification email',;
        } as AuthError);
      }


    setIsProactivelyResending(true);
    setProactiveResendMessage(null);


        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email: proactiveResendEmail }),      });



        method: 'POST',

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: proactiveResendEmail })
      });
      const data = await response.json();
      if (response.ok) {'`
        setProactiveResendMessage({ type: 'success', text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).` })
      } else {'
        setProactiveResendMessage({ type: 'error', text: data.message || 'Failed to resend verification email.' })
      }
    } catch (err) {'
      setProactiveResendMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {}
      setIsProactivelyResending(false)
    }




      const data = await response && response.json();
      if (response && response.ok) {;
        setProactiveResendMessage({;'
          type: 'success',;`
          text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).`,;
        });
      } else {;
        setProactiveResendMessage({;'
          type: 'error',;'
          text: data && data.message || 'Failed to resend verification email.',;
        });
      }
    } catch (err) {;
      setProactiveResendMessage({;'
        type: 'error',;'
        text: 'An unexpected error occurred. Please try again.',;



      });
    } finally {;
      setIsProactivelyResending(false);    }



  };
  const handleLogin = async (e: FormEvent) => {;
    e && e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsEmailUnverified(false);
    setVerificationEmailSent(false),;

    try {;

      logInfo('Attempting Supabase login with email:', { data: email });
      const { data, error: signInError } =;
        await supabase && supabase.auth.signInWithPassword({;
          email,;
          password,;
        });

      if (signInError) {;

        logErrorToProduction('Supabase sign-in error:', { data: signInError });
        // Check if error is related to email verification;
        const messageIncludesEmailNotConfirmed =;'
          signInError && signInError.message?.toLowerCase().includes('email not confirmed') ||;'
          signInError && signInError.message?.toLowerCase().includes('email_not_confirmed') ||;'
          signInError && signInError.message?.toLowerCase().includes('verify') ||;'
          signInError && signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified";'
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.;
        const codeIsEmailNotVerified =;'
          (signInError as any).code === 'email_not_verified';
        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {;
          setIsEmailUnverified(true);
          setError({;'
            name: 'EmailNotVerifiedError',;
            message:;'
              'Please verify your email address before logging in. Check your inbox for a verification link.',;
          } as AuthError);
          setShowProactiveResendForm(false); // Hide proactive form if reactive one is triggered;
          // Auto-resend verification email;
          setTimeout(() => {;
            handleResendVerification();
          }, 1000);
        } else {;
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES;
          let displayMessage =;'
            'Login failed. Please check your credentials and try again.'; // Default user-friendly message;
          if (signInError && signInError.message) {;
            if (;
              signInError && signInError.message;
                .toLowerCase();'
                .includes('invalid login credentials');
            ) {;'
              displayMessage = 'Invalid email or password. Please try again.';
            } else if (;
              signInError && signInError.message;
                .toLowerCase();'
                .includes('network request failed');
            ) {;
              displayMessage =;'
                'Network error. Please check your internet connection and try again.';
            } else if (;'
              signInError && signInError.message.toLowerCase().includes('user disabled');
            ) {;
              displayMessage =;'
                'Your account has been disabled. Please contact support.';
            }
            // Add more specific checks here if needed for other Supabase error messages;
          }


          setError({;'
            name: signInError && signInError.name || 'AuthApiError',;
            message: displayMessage,;


      logInfo('Attempting Supabase login with email:', { data: email }),
      const { data, error: signInError } = await supabase.auth.signInWithPassword({}
        email;
        password});

        returnTo = '/dashboard';
      }


      logInfo(
        `LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`
      );
      // Add a small delay to ensure session is fully established
      const redirectTimer = setTimeout(() => {
        // Double-check that we're still logged in before redirecting
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

  const handleResendVerification = async () => {
    if (!email) {
      setError({
        name: 'ValidationError',
        message: 'Please enter your email address first',
      } as AuthError);
      return;
    }
    setIsResendingVerification(true);
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setVerificationEmailSent(true);
        setError(null);
      } else {
        const data = await response.json();
        setError({
          name: 'ResendError',
          message: data.message || 'Failed to resend verification email',
        } as AuthError);
      }
    } catch (err) {
      setError({
        name: 'NetworkError',
        message: 'Failed to resend verification email. Please try again.',
      } as AuthError);
    } finally {
      setIsResendingVerification(false);    }
  };

  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.preventDefault(),
    if (!proactiveResendEmail) {
      setProactiveResendMessage({
        type: 'error',
        text: 'Please enter your email address.',
      });
      return;    }

    setIsProactivelyResending(true);
    setProactiveResendMessage(null);
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: proactiveResendEmail }),      });

      const data = await response.json();
      if (response.ok) {
        setProactiveResendMessage({
          type: 'success',
          text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).`,
        });
      } else {
        setProactiveResendMessage({
          type: 'error',
          text: data.message || 'Failed to resend verification email.',
        });
      }
    } catch (err) {
      setProactiveResendMessage({
        type: 'error',
        text: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsProactivelyResending(false);    }
  };

          logInfo('LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true');
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
        if (!sessionChecked && event !== "INITIAL_SESSION") {
           setSessionChecked(true),
           logInfo('LoginPage: onAuthStateChange updated sessionChecked to true.')
;
      // Listener for auth state changes;
      logInfo('LoginPage: Setting up onAuthStateChange listener.');
      const { data: authListener } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {;
        if (!mounted) return,;
        logInfo('LoginPage: onAuthStateChange event:', {;
          event,;
          userId: session?.user?.id;
        });
        setUser(session?.user ?? null);
        // If auth state changes after initial check, ensure sessionChecked is true;
        // This handles cases like login/logout in another tab.;
        if (!sessionChecked && event !== "INITIAL_SESSION") {;
           setSessionChecked(true);
           logInfo('LoginPage: onAuthStateChange updated sessionChecked to true.');
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      }),;
      return () => { // Cleanup for listener;
        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    const unsubscribePromise = checkSessionAndListen();
    return () => {;
      mounted = false;
      clearTimeout(sessionTimeoutId), // Clear timeout on unmount;
      logInfo('LoginPage: Unmounting, cleaning up auth listener.');
      unsubscribePromise.then(cleanup => cleanup && cleanup());
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []), // Run only once on mount;
  // Effect for handling redirection AFTER session is checked and user state is updated;
  useEffect(() => {;
    logInfo(`LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${isLoading}, user: ${user?.id}, pathname: ${router.pathname}`);
    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists;
    if (sessionChecked && !isLoading && user) {;
      // Get returnTo from query params, decode it if it exists;
      let returnTo = '/dashboard', // Default fallback;
      if (router.query.returnTo && typeof router.query.returnTo === 'string') {;
        try {
          returnTo = decodeURIComponent(router.query.returnTo);
        } catch (error) {
          logWarn('Failed to decode returnTo parameter:', { data: router.query.returnTo });
          returnTo = '/dashboard';
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      // Prevent redirecting back to auth pages or creating loops;
      const authPages = ['/auth/login/auth/register/login/signup/auth/forgot-password'];
      if (authPages.includes(returnTo) || returnTo.startsWith('/auth/')) {;
        returnTo = '/dashboard';
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      // Ensure returnTo is a relative path to prevent open redirect attacks;
      if (returnTo.startsWith('http') || returnTo.includes('://')) {;
        returnTo = '/dashboard';
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      logInfo(`LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`);
      // Add a small delay to ensure session is fully established;
      const redirectTimer = setTimeout(() => {;
        // Double-check that we're still logged in before redirecting;
        if (user && router.pathname === '/auth/login') {;
          logInfo(`LoginPage: Executing delayed redirect to ${returnTo}`);
          router.replace(returnTo), // Use replace to avoid back button issues;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      }, 100), // Small delay to let session stabilize;
      return () => clearTimeout(redirectTimer);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Return undefined for all other cases;
    return undefined;
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]), // Dependencies: user, sessionChecked, isLoading, router;
  const handleResendVerification = async () => {;
    if (!email) {;
      setError({ name: 'ValidationError', message: 'Please enter your email address first' } as AuthError);
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setIsResendingVerification(true);
    try {
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ email });
      }),;
      if (response.ok) {;
        setVerificationEmailSent(true);
        setError(null);
      } else {;
        const data = await response.json();
        setError({ name: 'ResendError', message: data.message || 'Failed to resend verification email' } as AuthError);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      setError({ name: 'NetworkError', message: 'Failed to resend verification email. Please try again.' } as AuthError);
    } finally {;
      setIsResendingVerification(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  const handleProactiveResendVerification = async (e: FormEvent) => {;
    e.preventDefault();
    if (!proactiveResendEmail) {;
      setProactiveResendMessage({ type: 'error', text: 'Please enter your email address.' });
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setIsProactivelyResending(true);
    setProactiveResendMessage(null);
    try {
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ email: proactiveResendEmail });
      }),;
      const data = await response.json();
      if (response.ok) {;
        setProactiveResendMessage({ type: 'success', text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).` });
      } else {;
        setProactiveResendMessage({ type: 'error', text: data.message || 'Failed to resend verification email.' });
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      setProactiveResendMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {;
      setIsProactivelyResending(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
        // Check if error is related to email verification'
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||'
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||'
                                                 signInError.message?.toLowerCase().includes('verify') ||



      });
      // Check if the caught error is a network error;'
      let exceptionMessage = 'An unexpected error occurred. Please try again.';
      if (;
        catchedError && catchedError.message &&;
        catchedError && catchedError.message;
          .toLowerCase();'
          .includes('networkerror when attempting to fetch resource');
      ) {;
        exceptionMessage =;'
          'Network error. Please check your internet connection and try again.';
      } else if (catchedError && catchedError.message) {;
        exceptionMessage = catchedError && catchedError.message;
      }


          // Auto-resend verification email
          setTimeout(() => {
            handleResendVerification()
          }, 1000)
        } else {
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES
          let displayMessage = 'Login failed. Please check your credentials and try again.', // Default user-friendly message
          if (signInError.message) {

            if (
              signInError.message
                .toLowerCase()
                .includes('invalid login credentials')
            ) {
              displayMessage = 'Invalid email or password. Please try again.';
            } else if (
              signInError.message
                .toLowerCase()
                .includes('network request failed')
            ) {
              displayMessage =
                'Network error. Please check your internet connection and try again.';
            } else if (
              signInError.message.toLowerCase().includes('user disabled')
            ) {
              displayMessage =
                'Your account has been disabled. Please contact support.';
            }
            // Add more specific checks here if needed for other Supabase error messages
          }
          setError({
            name: signInError.name |'AuthApiError'
            message: displayMessage
          } as AuthError);
        }
      } else if (data.user) {
        logInfo('Supabase sign-in successful, user:', { data: data.user });

        } as AuthError);
      }
    } catch (catchedError: any) {
      logErrorToProduction('Exception during Supabase sign-in:', {
        data: catchedError
      });
      // Check if the caught error is a network error
      let exceptionMessage = 'An unexpected error occurred. Please try again.';
      if (
        catchedError.message &&
        catchedError.message
          .toLowerCase()
          .includes('networkerror when attempting to fetch resource')
      ) {
        exceptionMessage =
          'Network error. Please check your internet connection and try again.';
      } else if (catchedError.message) {
        exceptionMessage = catchedError.message;
      }
      setError({
        name: 'ExceptionError'
        message: exceptionMessage
      } as AuthError);
    } finally {

  // Auto-redirect to verification status page for unverified users after showing message
  useEffect(() => {
    if (isEmailUnverified && verificationEmailSent && email) {
      const timer = setTimeout(() => {

              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.'
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.'
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.'

  };

              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.'
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.'
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.'
  };

          let displayMessage = 'Login failed. Please check your credentials and try again.', // Default user-friendly message;
          if (signInError.message) {}
  };

'
              if (signInError.message.toLowerCase().includes('invalid login credentials')) {'
                  displayMessage = 'Invalid email or password. Please try again.''
              } else if (signInError.message.toLowerCase().includes('network request failed')) {'
                  displayMessage = 'Network error. Please check your internet connection and try again.''
              } else if (signInError.message.toLowerCase().includes('user disabled')) {'
                  displayMessage = 'Your account has been disabled. Please contact support.'
  };



              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.'
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.'
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.'
  };
  const handleLogin = async (e: FormEvent) => {;
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsEmailUnverified(false);
    setVerificationEmailSent(false);
    try {
      logInfo('Attempting Supabase login with email:', { data: email });
      const { data, error: signInError } = await supabase.auth.signInWithPassword({;
        email;
        password});
      if (signInError) {;
        logErrorToProduction('Supabase sign-in error:', { data: signInError });
        // Check if error is related to email verification;
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||;
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||;
                                                 signInError.message?.toLowerCase().includes('verify') ||;
                                                 signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified";
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.;
        const codeIsEmailNotVerified = (signInError as any).code === 'email_not_verified';
        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {;
          setIsEmailUnverified(true);
          setError({;
            name: 'EmailNotVerifiedError';
            message: 'Please verify your email address before logging in. Check your inbox for a verification link.';
          } as AuthError);
          setShowProactiveResendForm(false), // Hide proactive form if reactive one is triggered;
          // Auto-resend verification email;
          setTimeout(() => {;
            handleResendVerification();
          }, 1000);
        } else {;
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES;
          let displayMessage = 'Login failed. Please check your credentials and try again.', // Default user-friendly message;
          if (signInError.message) {;
              if (signInError.message.toLowerCase().includes('invalid login credentials')) {;
                  displayMessage = 'Invalid email or password. Please try again.';
              } else if (signInError.message.toLowerCase().includes('network request failed')) {;
                  displayMessage = 'Network error. Please check your internet connection and try again.';
              } else if (signInError.message.toLowerCase().includes('user disabled')) {;
                  displayMessage = 'Your account has been disabled. Please contact support.';
                } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              // Add more specific checks here if needed for other Supabase error messages;
            } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          setError({ name: signInError.name || 'AuthApiError', message: displayMessage } as AuthError);
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } else if (data.user) {;
        logInfo('Supabase sign-in successful, user:', { data: data.user });
        setUser(data.user), // setUser to trigger useEffect for redirection;
        // Redirection is now handled by the useEffect hook;
      } else {;
        // Should not happen if signInError is null and data.user is null;
        logWarn('Supabase sign-in returned no error but no user.');
        setError({ name: 'UnknownAuthError', message: 'Login failed due to an unknown error. Please try again.' } as AuthError);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Exception during Supabase sign-in:', { data: catchedError });
      // Check if the caught error is a network error;
      let exceptionMessage = 'An unexpected error occurred. Please try again.';
      if (catchedError.message && catchedError.message.toLowerCase().includes('networkerror when attempting to fetch resource')) {;
        exceptionMessage = 'Network error. Please check your internet connection and try again.';
      } else if (catchedError.message) {;
        exceptionMessage = catchedError.message;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      setError({ name: 'ExceptionError', message: exceptionMessage } as AuthError);
    } finally {;
      setIsLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  // Auto-redirect to verification status page for unverified users after showing message;
  useEffect(() => {;
    if (isEmailUnverified && verificationEmailSent && email) {;
      const timer = setTimeout(() => {;



      }, 3000);
      return () => clear_timeout (timer);
    }

    return undefined, // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]);

        router.push(`/verify-status?email=${encodeURIComponent(email)}`);
      }, 3000),;
      return () => clearTimeout(timer);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return undefined, // Explicitly return undefined if condition is not met;
  }, [isEmailUnverified, verificationEmailSent, email, router]),




  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {






    logInfo('LoginPage: Rendering "Checking authentication..."');
    return ('
      <div className='min-h-screen flex items-center justify-center'>;'
        <div className='text-center'>;'
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>;'
          <p className='text-gray-600'>Checking authentication...</p>;'
          <p className='text-sm text-gray-500 mt-2'>;
            This should only take a moment;
          </p>;
        </div>;
      </div>;
    );  }



    logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."');
    return ('
      <div className='min-h-screen flex items-center justify-center'>;'
        <div className='text-center'>;'
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>;'
          <h2 className='text-2xl font-bold mb-4'>Already Logged In</h2>;'
          <p className='text-gray-600 mb-4'>Redirecting to your dashboard...</p>;
        </div>;
      </div>;
    );  }




  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {

    logInfo('LoginPage: Rendering "Checking authentication..."'),
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>

          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>
        </div>
      </div>

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


    );
    return null; // Or a minimal loader/empty div  }
  return (





            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account;
            </CardDescription>
          </CardHeader>
          <CardContent>



                <Input
                  id='email'

                  type='email'
                  value={email}
                  onChange={e => setEmail(e && e.target.value)}                  required;



            <form onSubmit={handleLogin} className="space-y-4">

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error.message}</p>
                </div>




                <Input
                  id='password'
                  type='password'
                  value={password}

                  onChange={e => setPassword(e && e.target.value)}                  required;

                  Password
                </label>
                <Input
                  id='password'
                  type='password'
                  value={password}

                type='submit'
                className='w-full'
                disabled={isLoading || isEmailUnverified}
              >
                {isLoading
                  ? 'Signing in...'
                  : isEmailUnverified
                    ? t('auth.email_verification_required')
                    : t('auth.sign_in')}
              </Button>
            </form>
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-600'>
                Don't have an account?{' '}
                <Link
                  href='/auth/register'
                  className='text-blue-600 hover:underline'

                >                  Sign up
                  id="email"
                  type="email"
                  value={email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setEmail(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  required;
                  disabled={isLoading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                />
              </div>

              <div className="space-y-2">

                <label htmlFor="password" className="text-sm font-medium">
                  Password;
                </label>
                <Input"
                  id="password""
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  required


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

                />;

              </div>;

;
  // --- Rendering Logic ---;
  // 1. Primary Loading State: During initial session check;
  // Check condition;
if ( {) {}
  $2;
}'"
    log_info ('LoginPage: Rendering "Checking authentication..."');
    return ('
      <div className='min - h-screen flex items - center justify - center'>;'
        <div className='text - center'>;'
          <div className='animate - spin rounded - full h - 16 w - 16 border - b-2 border - blue - 600 mx - auto mb - 4'></div>;'
          <p className='text - gray - 600'>Checking authentication...</p>;'
          <p className='text - sm text - gray - 500 mt - 2'>;
            This should only take a moment;
          </p>;
        </div>;
      </div>);  }
  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form;
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.;
  // Check condition;
if ( {) {}
  $2;
}'"
    log_info ('LoginPage: Rendering "Already Logged In / Redirecting..."');
    return ('
      <div className='min - h-screen flex items - center justify - center'>;'
        <div className='text - center'>;'
          <div className='animate - spin rounded - full h - 16 w - 16 border - b-2 border - blue - 600 mx - auto mb - 4'></div>;'
          <h2 className='text - 2xl font - bold mb - 4'>Already Logged In</h2>;'
          <p className='text - gray - 600 mb - 4'>Redirecting to your dashboard...</p>;
        </div>;
      </div>);  }
  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (is_loading);
  // This also covers the case where a user was present but a login attempt failed, clearing the user.;
  log_info (`
    `LoginPage: Rendering login form. session_checked: ${session_checked}, user: ${user?.id}, is_loading: ${is_loading}, pathname: ${router.pathname}`);
;
  // Defensive check: If router.pathname is not /auth / login, do not render the login form.;'
  // This is a safeguard against the component's content persisting on other auth routes.;
  // Check condition;
if ( {) {}
  $2;
}
    log_warn (`
      `LoginPage: Current pathname is ${router.pathname}, not /auth / login or /login. Rendering null to prevent incorrect display.`);
    return null; // Or a minimal loader / empty div  }
  return (
    <>;
      <Head>;'`
        <title>{`${t ('auth.sign_in')} - Zion Tech Marketplace`}</title>;
        <meta;'
          name='description';'
          content='Sign in to your Zion Tech Marketplace account';
        />;
      </Head>;'
      <div className='min - h-screen flex items - center justify - center bg - gray - 50 py - 12 px - 4 sm:px - 6 lg:px - 8'>;'
        <Card className='w - full max - w-md'>          <CardHeader>;
            <CardTitle > Sign In</CardTitle>;
            <CardDescription>;
              Enter your email and password to access your account;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;'
            <form on_submit={handle_login} className='space - y-4'>;
              {error && ('
                <div className='p - 3 bg - red - 50 border border - red - 200 rounded - md'>;'
                  <p className='text - sm text - red - 600'>{error.message}</p>;
                </div>)}'
              <div className='space - y-2'>;'
                <label html_for='email' className='text - sm font - medium'>;
                  Email;
                </label>;
                <Input;'
                  id='email';'
                  type='email';
                  value={email}
                  on_change={e => set_email (e.target.value)}                  required;
                  disabled={is_loading}
                />;
              </div>;'
              <div className='space - y-2'>;'
                <label html_for='password' className='text - sm font - medium'>;
                  Password;
                </label>;
                <Input;'
                  id='password';'
                  type='password';
                  value={password}
                  on_change={e => set_password (e.target.value)}                  required;
                  disabled={is_loading}
                />;
              </div>;
              <Button;'
                type='submit';'
                className='w - full';
                disabled={is_loading || isEmailUnverified}
              >;
                {is_loading;'
                  ? 'Signing in...';
                  : isEmailUnverified;'
                    ? t ('auth.email_verification_required');'
                    : t ('auth.sign_in')}
              </Button>;
            </form>;'
            <div className='mt - 6 text - center'>;'
              <p className='text - sm text - gray - 600'>;'
                Don't have an account?{' '}
                <Link;'
                  href='/auth / register';'
                  className='text - blue - 600 hover:underline';
                >                  Sign up;




                </Link>;
              </p>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;




},;
export default LoginPage;







