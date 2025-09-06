import { useRouter  } from 'next/router';
import { useEffect, useState, FormEvent  } from 'react';
import Link from 'next/link',
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react'
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import {useRouter} from 'next/router';
import {useEffect, useState, FormEvent} from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';

import Head from 'next/head';

import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';
  AuthError,
  User,

  AuthChangeEvent,;
  Session,;
} from '@supabase/supabase-js';
import {;
  logInfo,;
  logWarn,;
  logErrorToProduction,;
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from '@/components/ui/card';
const LoginPage = () => {

  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
} from '@/components/ui/card';
const LoginPage = () => {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);

  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);

  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);


    type: 'success' | 'error';

  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Using centralized Supabase client (imported at top)
  // Effect for initial session check and auth state changes
  useEffect(() => {
    let mounted = true;

        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();

      };    }
    const unsubscribePromise = checkSessionAndListen();

          });
          returnTo = '/dashboard';
        }
      }

      }

      // Listener for auth state changes
      logInfo('LoginPage: Setting up onAuthStateChange listener.'),

      }

      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {


      const data = await response && response.json();
      if (response && response.ok) {;
        setProactiveResendMessage({;
          type: 'success',;
          text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).`,;
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
        const messageIncludesEmailNotConfirmed =;
          signInError && signInError.message?.toLowerCase().includes('email not confirmed') ||;
          signInError && signInError.message?.toLowerCase().includes('email_not_confirmed') ||;
          signInError && signInError.message?.toLowerCase().includes('verify') ||;
          signInError && signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified";
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.;
        const codeIsEmailNotVerified =;
          (signInError as any).code === 'email_not_verified';
        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {;
          setIsEmailUnverified(true);
          setError({;
            name: 'EmailNotVerifiedError',;
            message:;
              'Please verify your email address before logging in. Check your inbox for a verification link.',;
          } as AuthError);
          setShowProactiveResendForm(false); // Hide proactive form if reactive one is triggered;
          // Auto-resend verification email;
          setTimeout(() => {;
            handleResendVerification();
          }, 1000);
        } else {;
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES;
          let displayMessage =;
            'Login failed. Please check your credentials and try again.'; // Default user-friendly message;
          if (signInError && signInError.message) {;
            if (;
              signInError && signInError.message;
                .toLowerCase();
                .includes('invalid login credentials');
            ) {;
              displayMessage = 'Invalid email or password. Please try again.';
            } else if (;
              signInError && signInError.message;
                .toLowerCase();
                .includes('network request failed');
            ) {;
              displayMessage =;
                'Network error. Please check your internet connection and try again.';
            } else if (;
              signInError && signInError.message.toLowerCase().includes('user disabled');
            ) {;
              displayMessage =;
                'Your account has been disabled. Please contact support.';
            }
            // Add more specific checks here if needed for other Supabase error messages;
          }

          setError({;
            name: signInError && signInError.name || 'AuthApiError',;
            message: displayMessage,;

    try {
      logInfo('Attempting Supabase login with email:', { data: email }),
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email;
        password});
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

=======
          logInfo(`LoginPage: Executing delayed redirect to ${returnTo}`),
          router.replace(returnTo), // Use replace to avoid back button issues
        }
      }, 100), // Small delay to let session stabilize
      
      return () => clearTimeout(redirectTimer)
    }
    
    // Return undefined for all other cases
    return undefined
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]), // Dependencies: user, sessionChecked, isLoading, router

  const handleResendVerification = async () => {
    if (!email) {
      setError({ name: 'ValidationError', message: 'Please enter your email address first' } as AuthError),
      return
    }
    

    setIsResendingVerification(true);


    try {;
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email }),;

=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      });

      if (response && response.ok) {;
        setVerificationEmailSent(true);
        setError(null);
      } else {;
        const data = await response && response.json();
        setError({;
          name: 'ResendError',;
          message: data && data.message || 'Failed to resend verification email',;
        } as AuthError);
      }


    setIsProactivelyResending(true);
    setProactiveResendMessage(null);


    try {;
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email: proactiveResendEmail }),      });

=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: proactiveResendEmail })
      });

      const data = await response.json();
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
  };

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

            handleResendVerification();
          }, 1000);
        } else {;
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES;
          let displayMessage =;
            'Login failed. Please check your credentials and try again.'; // Default user-friendly message;
          if (signInError && signInError.message) {;
            if (;
              signInError && signInError.message;
                .toLowerCase();
                .includes('invalid login credentials');
            ) {;
              displayMessage = 'Invalid email or password. Please try again.';
            } else if (;
              signInError && signInError.message;
                .toLowerCase();
                .includes('network request failed');
            ) {;
              displayMessage =;
                'Network error. Please check your internet connection and try again.';
            } else if (;
              signInError && signInError.message.toLowerCase().includes('user disabled');
            ) {;
              displayMessage =;
                'Your account has been disabled. Please contact support.';
            }
            // Add more specific checks here if needed for other Supabase error messages;
          }

          setError({;
            name: signInError && signInError.name || 'AuthApiError',;
            message: displayMessage,;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    try {
      logInfo('Attempting Supabase login with email:', { data: email }),
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password}),

      if (signInError) {
        logErrorToProduction('Supabase sign-in error:', { data: signInError }),
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||

          // Auto-resend verification email
          setTimeout(() => {
            handleResendVerification()
          }, 1000)
        } else {
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES
          let displayMessage = 'Login failed. Please check your credentials and try again.', // Default user-friendly message
          if (signInError.message) {

  // Auto-redirect to verification status page for unverified users after showing message
  useEffect(() => {
    if (isEmailUnverified && verificationEmailSent && email) {
      const timer = setTimeout(() => {
      });
      // Check if the caught error is a network error;
      let exceptionMessage = 'An unexpected error occurred. Please try again.';
      if (;
        catchedError && catchedError.message &&;
        catchedError && catchedError.message;
          .toLowerCase();
          .includes('networkerror when attempting to fetch resource');
      ) {;
        exceptionMessage =;
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
        setUser(data.user); // setUser to trigger useEffect for redirection        // Redirection is now handled by the useEffect hook
      } else {
        // Should not happen if signInError is null and data.user is null
        logWarn('Supabase sign-in returned no error but no user.');
        setError({
          name: 'UnknownAuthError'
          message: 'Login failed due to an unknown error. Please try again.'
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
      setIsLoading(false);    }
  }
  // Auto-redirect to verification status page for unverified users after showing message
  useEffect(() => {
    if (isEmailUnverified && verificationEmailSent && email) {
      const timer = setTimeout(() => {
        router.push(`/verify-status?email=${encodeURIComponent(email)}`);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined; // Explicitly return undefined if condition is not met  }, [isEmailUnverified, verificationEmailSent, email, router]);

              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.'
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.'
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.'
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  // Auto-redirect to verification status page for unverified users after showing message;
  useEffect(() => {;
    if (isEmailUnverified && verificationEmailSent && email) {;
      const timer = setTimeout(() => {;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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


=======
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
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {

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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    logInfo('LoginPage: Rendering "Checking authentication..."'),
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {
    logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."'),
=======
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-4">Already Logged In</h2>
          <p className="text-gray-600 mb-4">Redirecting to your dashboard...</p>
        </div>
      </div>
    );  }
  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  logInfo(
    `LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router.pathname}`
  );
  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {
    logWarn(
      `LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`
    );
    return null; // Or a minimal loader/empty div  }

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
  if (router && router.pathname !== '/auth/login' && router && router.pathname !== '/login') {;
    logWarn(;
      `LoginPage: Current pathname is ${router && router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`;
    );
    return null; // Or a minimal loader/empty div  }

=======
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {;
    logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`);
    return null, // Or a minimal loader/empty div;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <>
      <Head>
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
<<<<<<< HEAD

  return (
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>

=======

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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e && e.target.value)}                  required;

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}                  required
                  disabled={isLoading}
                />
              </div>
              <Button
                type='submit'
                className='w-full'
                disabled={isLoading |isEmailUnverified}
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
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}                  required
                  disabled={isLoading}
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='password' className='text-sm font-medium'>
                  Password
                </label>
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}                  required
                  disabled={isLoading}
                />
              </div>
              <Button
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
                  value={password  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setPassword(e.target.value)  } catch (error) {
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
              <Button type="submit" className="w-full" disabled={isLoading || isEmailUnverified}>
                {isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/auth/register" className="text-blue-600 hover: underline">
                  Sign up
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
);
};export default LoginPage;

  )
},
export default LoginPage,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

=======
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                </Link>;
              </p>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
},;
export default LoginPage;
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
