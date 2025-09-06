

import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';

import Head from 'next/head';

import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';

} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

import {

} from '@/components/ui/card';
const LoginPage = () => {

import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const LoginPage = () => {;

  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);


  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);

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
      } else {;
        setProactiveResendMessage({;
          type: 'error',;
          text: data && data.message || 'Failed to resend verification email.',;
        });
      }
    } catch (err) {;
      setProactiveResendMessage({;
        type: 'error',;
        text: 'An unexpected error occurred. Please try again.',;


      });
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
        email;
        password});

      if (signInError) {
        logErrorToProduction('Supabase sign-in error:', { data: signInError }),
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
                                                 signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified"
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
        const codeIsEmailNotVerified = (signInError as any).code === 'email_not_verified';

        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
          setIsEmailUnverified(true);
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
  };

  // Auto-redirect to verification status page for unverified users after showing message;
  useEffect(() => {;
    if (isEmailUnverified && verificationEmailSent && email) {;
      const timer = setTimeout(() => {;


        log_info ('LoginPage: Calling supabase.auth.get_session ()'),
        const {
          data: { session },
          error: session_error,
        } = await supabase.auth.get_session ();
        clear_timeout (sessionTimeoutId); // Clear timeout once get_session completes;
        // Check condition
if (return) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          logErrorToProduction ('LoginPage: Error getting session:', {
            data: session_error,
          });
          set_error (session_error as any); // Cast to any if type is too strict;
        } else {
          log_info ('LoginPage: get_session returned, user:', {
            data: session?.user?.id,
          });
          set_user (session?.user ?? null);
        }
      } catch (e) {
        // Check condition
if ( {) {
  $2
}
          logErrorToProduction ('LoginPage: Exception during get_session:', {
            data: e,
          });
          clear_timeout (sessionTimeoutId); // Ensure timeout is cleared on error too        }
      } finally {
        // Check condition
if ( {) {
  $2
}
          setIsCheckingSession (false);
          setSessionChecked (true);
          log_info (
            'LoginPage: Initial session check complete. isCheckingSession: false, session_checked: true');        }
      }
      // Listener for auth state changes;
      log_info ('LoginPage: Setting up onAuthStateChange listener.'),
      const { data: auth_listener } = supabase.auth.onAuthStateChange (
        (event: AuthChangeEvent, session: Session | null) => {
          // Check condition
if (return, ) {
  $2
}
          log_info ('LoginPage: onAuthStateChange event:', {
            event,
            user_id: session?.user?.id,
          });
          set_user (session?.user ?? null);
          // If auth state changes after initial check, ensure session_checked is true;
          // This handles cases like login / logout in another tab.;
          // Check condition
if ( {) {
  $2
}
            setSessionChecked (true);
            log_info (
              'LoginPage: onAuthStateChange updated session_checked to true.'),
          }
        }
      );
;
      return () => {
        // Cleanup for listener;
        log_info ('LoginPage: Unsubscribing from onAuthStateChange.');
        auth_listener?.subscription?.unsubscribe ();
      }    }
;
    const unsubscribe_promise = checkSessionAndListen ();
;
    return () => {
      mounted = false;
      clear_timeout (sessionTimeoutId); // Clear timeout on unmount;
      log_info ('LoginPage: Unmounting, cleaning up auth listener.');
      unsubscribe_promise.then (cleanup => cleanup && cleanup ());
    }
  }, []); // Run only once on mount;
  // Effect for handling redirection AFTER session is checked and user state is updated;
  useEffect (() => {
    log_info (
      `LoginPage: Redirection effect runs. session_checked: ${session_checked}, is_loading: ${is_loading}, user: ${user?.id}, pathname: ${router.pathname}`);
;
    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists;
    // Check condition
if ( {) {
  $2
}
      // Get return_to from query params, decode it if it exists;
      let return_to = '/dashboard'; // Default fallback;
      // Check condition
if ( {) {
  $2
}
        try {
          return_to = decodeURIComponent (router.query.return_to);
        } catch (e) {
          log_warn ('Failed to decode return_to parameter:', {
            data: router.query.return_to,
          });
          return_to = '/dashboard';
        }
      }
      // Prevent redirecting back to auth pages or creating loops;
      const auth_pages = [;
        '/auth / login',
        '/auth / register',
        '/login',
        '/signup',
        '/auth / forgot - password',
      ];
      if (|| return_to.starts_with ('/auth/')) {) {
  $2
}
        return_to = '/dashboard';
      }
      // Ensure return_to is a relative path to prevent open redirect attacks;
      if (|| return_to.includes ('://')) {) {
  $2
}
        return_to = '/dashboard';
      }
      log_info (
        `LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${return_to}`);
      // Add a small delay to ensure session is fully established;
      const redirect_timer = set_timeout (() => {
        // Double - check that we're still logged in before redirecting;
        // Check condition
if ( {) {
  $2
}
          log_info (`LoginPage: Executing delayed redirect to ${return_to}`);
          router.replace (return_to); // Use replace to avoid back button issues;
        }
      }, 100); // Small delay to let session stabilize;
      return () => clear_timeout (redirect_timer);
    }
    // Return undefined for all other cases;
    return undefined;
  }, [user, session_checked, is_loading, router, router.query.return_to]); // Dependencies: user, session_checked, is_loading, router;
  const handleResendVerification = async () => {
    // Check condition
if ( {) {
  $2
}
      set_error ({
        name: 'ValidationError',
        message: 'Please enter your email address first',
      } as AuthError);
      return;
    }
    setIsResendingVerification (true);
    try {
      const response = await fetch ('/api / resend - verification - email', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email }),
      });
;
      // Check condition
if ( {) {
  $2
}
        setVerificationEmailSent (true);
        set_error (null);
      } else {
        const data = await response.json ();
        set_error ({
          name: 'ResendError',
          message: data.message || 'Failed to resend verification email',
        } as AuthError);
      }
    } catch (err) {
      set_error ({
        name: 'NetworkError',
        message: 'Failed to resend verification email. Please try again.',
      } as AuthError);
    } finally {
      setIsResendingVerification (false);    }
  }
;
  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.prevent_default (),
    // Check condition
if ( {) {
  $2
}
      setProactiveResendMessage ({
        type: 'error',
        text: 'Please enter your email address.',
      });
      return;    }
    setIsProactivelyResending (true);
    setProactiveResendMessage (null);
    try {
      const response = await fetch ('/api / resend - verification - email', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email: proactiveResendEmail }),      });
;
      const data = await response.json ();
      // Check condition
if ( {) {
  $2
}
        setProactiveResendMessage ({
          type: 'success',
          text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).`,
        });
      } else {
        setProactiveResendMessage ({
          type: 'error',
          text: data.message || 'Failed to resend verification email.',
        });
      }
    } catch (err) {
      setProactiveResendMessage ({
        type: 'error',
        text: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsProactivelyResending (false);    }
  }
;
  const handle_login = async (e: FormEvent) => {
    e.prevent_default ();
    setIsLoading (true);
    set_error (null);
    setIsEmailUnverified (false);
    setVerificationEmailSent (false),
    try {
      log_info ('Attempting Supabase login with email:', { data: email });
      const { data, error: signInError } =;
        await supabase.auth.signInWithPassword ({
          email,
          password,
        });
;
      // Check condition
if ( {) {
  $2
}
        logErrorToProduction ('Supabase sign - in error:', { data: signInError });
;
        // Check if error is related to email verification;
        const messageIncludesEmailNotConfirmed =;
          signInError.message?.toLowerCase ().includes ('email not confirmed') ||;
          signInError.message?.toLowerCase ().includes ('email_not_confirmed') ||;
          signInError.message?.toLowerCase ().includes ('verify') ||;
          signInError.message?.toLowerCase ().includes ('confirm');
        // As per issue description, check for a specific error code "email_not_verified";
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.;
        const codeIsEmailNotVerified =;
          (signInError as any).code === 'email_not_verified';
;
        // Check condition
if ( {) {
  $2
}
          setIsEmailUnverified (true);
          set_error ({
            name: 'EmailNotVerifiedError',
            message:;
              'Please verify your email address before logging in. Check your inbox for a verification link.',
          } as AuthError);
          setShowProactiveResendForm (false); // Hide proactive form if reactive one is triggered;
          // Auto - resend verification email;
          set_timeout (() => {
            handleResendVerification ();
          }, 1000);
        } else {
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES;
          let display_message =;
            'Login failed. Please check your credentials and try again.'; // Default user - friendly message;
          // Check condition
if ( {) {
  $2
}
            if (
                .includes ('invalid login credentials')) {
  $2
}
            ) {
              display_message = 'Invalid email or password. Please try again.';
            } else if (
                .includes ('network request failed')) {
  $2
}
            ) {
              display_message =;
                'Network error. Please check your internet connection and try again.';
            } else if (.includes ('user disabled')) {
  $2
}
            ) {
              display_message =;
                'Your account has been disabled. Please contact support.';
            }
            // Add more specific checks here if needed for other Supabase error messages;
          }
          set_error ({
            name: signInError.name || 'AuthApiError',
            message: display_message,
          } as AuthError);
        }
      } else // Check condition
if ( {) {
  $2
}
        log_info ('Supabase sign - in successful, user:', { data: data.user });
        set_user (data.user); // set_user to trigger useEffect for redirection        // Redirection is now handled by the useEffect hook;
      } else {
        // Should not happen if signInError is null and data.user is null;
        log_warn ('Supabase sign - in returned no error but no user.');
        set_error ({
          name: 'UnknownAuthError',
          message: 'Login failed due to an unknown error. Please try again.',
        } as AuthError);
      }
    } catch (catched_error: any) {
      logErrorToProduction ('Exception during Supabase sign - in:', {
        data: catched_error,
      });
      // Check if the caught error is a network error;
      let exception_message = 'An unexpected error occurred. Please try again.';
      if (
          .includes ('networkerror when attempting to fetch resource')) {
  $2
}
      ) {
        exception_message =;
          'Network error. Please check your internet connection and try again.';
      } else // Check condition
if ( {) {
  $2
}
        exception_message = catched_error.message;
      }
      set_error ({
        name: 'ExceptionError',
        message: exception_message,
      } as AuthError);
    } finally {
      setIsLoading (false);    }
  }
;
  // Auto - redirect to verification status page for unverified users after showing message;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const timer = set_timeout (() => {
        router.push (`/verify - status?email=${encodeURIComponent (email)}`);
      }, 3000);
      return () => clear_timeout (timer);
    }
    return undefined; // Explicitly return undefined if condition is not met  }, [isEmailUnverified, verificationEmailSent, email, router]);

        router.push(`/verify-status?email=${encodeURIComponent(email)}`)
      }, 3000);
      return () => clearTimeout(timer)
    }
    return undefined, // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]);


        router.push(`/verify-status?email=${encodeURIComponent(email)}`);
      }, 3000),;
      return () => clearTimeout(timer);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return undefined, // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]),

  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {



  // --- Rendering Logic ---;

  // 1. Primary Loading State: During initial session check;
  if (isCheckingSession) {;
    logInfo('LoginPage: Rendering "Checking authentication..."');
    return (
      <div className='min-h-screen flex items-center justify-center'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>;
          <p className='text-gray-600'>Checking authentication...</p>;
          <p className='text-sm text-gray-500 mt-2'>;
            This should only take a moment;
          </p>;
        </div>;
      </div>;
    );  }


  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form;
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.;
  if (sessionChecked && user && !isLoading) {;

    logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."');
    return (
      <div className='min-h-screen flex items-center justify-center'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>;
          <h2 className='text-2xl font-bold mb-4'>Already Logged In</h2>;
          <p className='text-gray-600 mb-4'>Redirecting to your dashboard...</p>;
        </div>;
      </div>;
    );  }

  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {
    logWarn(
      `LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`
    logInfo('LoginPage: Rendering "Checking authentication..."'),
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>
        </div>
      </div>

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {
    logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."'),
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-4">Already Logged In</h2>
          <p className="text-gray-600 mb-4">Redirecting to your dashboard...</p>
        </div>
      </div>

    )
    return undefined, // Explicitly return undefined if condition is not met;
  }, [isEmailUnverified, verificationEmailSent, email, router]),;
  // --- Rendering Logic ---;
  // 1. Primary Loading State: During initial session check;
  if (isCheckingSession) {;
    logInfo('LoginPage: Rendering "Checking authentication..."');
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>;
          <p className="text-gray-600">Checking authentication...</p>;
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>;
        </div>;
      </div>;
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form;
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.;
  if (sessionChecked && user && !isLoading) {;
    logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."');
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>;
          <h2 className="text-2xl font-bold mb-4">Already Logged In</h2>;
          <p className="text-gray-600 mb-4">Redirecting to your dashboard...</p>;
        </div>;
      </div>;
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading);
  // This also covers the case where a user was present but a login attempt failed, clearing the user.;
  logInfo(`LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router.pathname}`);
  // Defensive check: If router.pathname is not /auth/login, do not render the login form.;
  // This is a safeguard against the component's content persisting on other auth routes.;

  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {;
    logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`);
    return null, // Or a minimal loader/empty div;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  return (
    <>
      <Head>
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
      </Head>

            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>


        />;
      </Head>;

      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>;
        <Card className='w-full max-w-md'>          <CardHeader>;
            <CardTitle>Sign In</CardTitle>;
            <CardDescription>;
              Enter your email and password to access your account;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <form onSubmit={handleLogin} className='space-y-4'>;
              {error && (;
                <div className='p-3 bg-red-50 border border-red-200 rounded-md'>;
                  <p className='text-sm text-red-600'>{error && error.message}</p>;
                </div>;
              )}

              <div className='space-y-2'>;
                <label htmlFor='email' className='text-sm font-medium'>;
                  Email;
                </label>;


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
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required

                  disabled={isLoading}

              
              <Button type="submit" className="w-full" disabled={isLoading || isEmailUnverified}>
                {isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/auth/register" className="text-blue-600 hover: underline">
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
                />;
              </div>;

              <Button
                type='submit'
                className='w-full'
                disabled={isLoading || isEmailUnverified}>;
                {isLoading;
                  ? 'Signing in...';
                  : isEmailUnverified;
                    ? t('auth && auth.email_verification_required');
                    : t('auth && auth.sign_in')}
              </Button>;
            </form>;

            <div className='mt-6 text-center'>;
              <p className='text-sm text-gray-600'>;
                Don't have an account?{' '}
                <Link
                  href='/auth/register'
                  className='text-blue-600 hover:underline'>                  Sign up;

;
  // --- Rendering Logic ---;
  // 1. Primary Loading State: During initial session check;
  // Check condition
if ( {) {
  $2
}
    log_info ('LoginPage: Rendering "Checking authentication..."');
    return (
      <div className='min - h-screen flex items - center justify - center'>;
        <div className='text - center'>;
          <div className='animate - spin rounded - full h - 16 w - 16 border - b-2 border - blue - 600 mx - auto mb - 4'></div>;
          <p className='text - gray - 600'>Checking authentication...</p>;
          <p className='text - sm text - gray - 500 mt - 2'>;
            This should only take a moment;
          </p>;
        </div>;
      </div>);  }
  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form;
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.;
  // Check condition
if ( {) {
  $2
}
    log_info ('LoginPage: Rendering "Already Logged In / Redirecting..."');
    return (
      <div className='min - h-screen flex items - center justify - center'>;
        <div className='text - center'>;
          <div className='animate - spin rounded - full h - 16 w - 16 border - b-2 border - blue - 600 mx - auto mb - 4'></div>;
          <h2 className='text - 2xl font - bold mb - 4'>Already Logged In</h2>;
          <p className='text - gray - 600 mb - 4'>Redirecting to your dashboard...</p>;
        </div>;
      </div>);  }
  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (is_loading);
  // This also covers the case where a user was present but a login attempt failed, clearing the user.;
  log_info (
    `LoginPage: Rendering login form. session_checked: ${session_checked}, user: ${user?.id}, is_loading: ${is_loading}, pathname: ${router.pathname}`);
;
  // Defensive check: If router.pathname is not /auth / login, do not render the login form.;
  // This is a safeguard against the component's content persisting on other auth routes.;
  // Check condition
if ( {) {
  $2
}
    log_warn (
      `LoginPage: Current pathname is ${router.pathname}, not /auth / login or /login. Rendering null to prevent incorrect display.`);
    return null; // Or a minimal loader / empty div  }
  return (
    <>;
      <Head>;
        <title>{`${t ('auth.sign_in')} - Zion Tech Marketplace`}</title>;
        <meta;
          name='description';
          content='Sign in to your Zion Tech Marketplace account';
        />;
      </Head>;
      <div className='min - h-screen flex items - center justify - center bg - gray - 50 py - 12 px - 4 sm:px - 6 lg:px - 8'>;
        <Card className='w - full max - w-md'>          <CardHeader>;
            <CardTitle > Sign In</CardTitle>;
            <CardDescription>;
              Enter your email and password to access your account;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <form on_submit={handle_login} className='space - y-4'>;
              {error && (
                <div className='p - 3 bg - red - 50 border border - red - 200 rounded - md'>;
                  <p className='text - sm text - red - 600'>{error.message}</p>;
                </div>)}
              <div className='space - y-2'>;
                <label html_for='email' className='text - sm font - medium'>;
                  Email;
                </label>;
                <Input;
                  id='email';
                  type='email';
                  value={email}
                  on_change={e => set_email (e.target.value)}                  required;
                  disabled={is_loading}
                />;
              </div>;
              <div className='space - y-2'>;
                <label html_for='password' className='text - sm font - medium'>;
                  Password;
                </label>;
                <Input;
                  id='password';
                  type='password';
                  value={password}
                  on_change={e => set_password (e.target.value)}                  required;
                  disabled={is_loading}
                />;
              </div>;
              <Button;
                type='submit';
                className='w - full';
                disabled={is_loading || isEmailUnverified}
              >;
                {is_loading;
                  ? 'Signing in...';
                  : isEmailUnverified;
                    ? t ('auth.email_verification_required');
                    : t ('auth.sign_in')}
              </Button>;
            </form>;
            <div className='mt - 6 text - center'>;
              <p className='text - sm text - gray - 600'>;
                Don't have an account?{' '}
                <Link;
                  href='/auth / register';
                  className='text - blue - 600 hover:underline';
                >                  Sign up;

  )
};

export default LoginPage;
    </>);
}export default LoginPage;
;
},;
export default LoginPage;

