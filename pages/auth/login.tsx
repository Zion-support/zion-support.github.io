<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useEffect, useState, FormEvent  } from 'react';
import Link from 'next/link',
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react'
import Head from 'next/head';

import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';
<<<<<<< HEAD
import type {
  AuthError
  User
  AuthChangeEvent
  Session;
} from '@supabase/supabase-js';
import {
  logInfo
  logWarn
  logErrorToProduction;
=======
import type {;
  AuthError,;
  User,;
  AuthChangeEvent,;
  Session,;
} from '@supabase/supabase-js';
import {;
  logInfo,;
  logWarn,;
  logErrorToProduction,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
=======
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from '@/components/ui/card';
const LoginPage = () => {;
=======
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react'
import Head from 'next/head';
import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';
import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LoginPage = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false); // For login form submission;
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true); // For initial session check;
  const [sessionChecked, setSessionChecked] = useState(false); // New state: true after initial getSession completes  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
=======
  const [isLoading, setIsLoading] = useState(false), // For login form submission
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true), // For initial session check
  const [sessionChecked, setSessionChecked] = useState(false), // New state: true after initial getSession completes
  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);
<<<<<<< HEAD
  // States for the new proactive resend form
=======

  // States for the new proactive resend form;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);
<<<<<<< HEAD
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{;
=======
import {use_router} from 'next / router';
import {useEffect, useState, FormEvent} from 'react';
import Link from 'next / link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';
import Head from 'next / head';
import { sign_in } from 'next - auth / react';
import { supabase } from '@/utils / supabase / client';
import type {
  AuthError,
  User,
  AuthChangeEvent,
  Session,
} from '@supabase / supabase - js';
import {
  log_info,
  log_warn,
  logErrorToProduction,
} from '@/utils / production_logger';
import { use_translation } from 'react - i18next';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
const LoginPage = () =>: any {
  const router = use_router ();
  const { t } = use_translation ();
  const [email, set_email] = useState ('');
  const [password, set_password] = useState ('');
  const [error, set_error] = useState < AuthError | null>(null);
  const [is_loading, setIsLoading] = useState (false); // For login form submission;
  const [user, set_user] = useState < User | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState (true); // For initial session check;
  const [session_checked, setSessionChecked] = useState (false); // New state: true after initial get_session completes  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState (false);
  const [isEmailUnverified, setIsEmailUnverified] = useState (false);
  const [verificationEmailSent, setVerificationEmailSent] = useState (false);
  const [isResendingVerification, setIsResendingVerification] = useState (false);
;
  // States for the new proactive resend form;
  const [showProactiveResendForm, setShowProactiveResendForm] = useState (false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState ('');
  const [isProactivelyResending, setIsProactivelyResending] = useState (false);
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    type: 'success' | 'error';
<<<<<<< HEAD
    text: string
  } | null>(null);
<<<<<<< HEAD
=======
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  // Using centralized Supabase client (imported at top)
  // Effect for initial session check and auth state changes
  useEffect(() => {
    let mounted = true;
<<<<<<< HEAD
    logInfo('LoginPage: Initial session check effect runs.')
    const sessionTimeoutId = setTimeout(() => {
      if (mounted) {
=======
    text: string,;
  } | null>(null);
  // Using centralized Supabase client (imported at top);

  // Effect for initial session check and auth state changes;
  useEffect(() => {;
    let mounted = true;
    logInfo('LoginPage: Initial session check effect runs.'),;

    const sessionTimeoutId = setTimeout(() => {;
      if (mounted) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        logWarn('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false); // Allow form to render if timeout;
        setSessionChecked(true); // Mark check as complete even on timeout      }
    }, 5000);
<<<<<<< HEAD
    const checkSessionAndListen = async () => {
=======

    const checkSessionAndListen = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (!mounted) return;
      setIsCheckingSession(true);
<<<<<<< HEAD
      try {
        logInfo('LoginPage: Calling supabase.auth.getSession()')
        const {
          data: { session }
          error: sessionError
        } = await supabase.auth.getSession();
        clearTimeout(sessionTimeoutId); // Clear timeout once getSession completes
        if (!mounted) return;
        if (sessionError) {
          logErrorToProduction('LoginPage: Error getting session:', {
            data: sessionError
          });
          setError(sessionError as any); // Cast to any if type is too strict
        } else {
          logInfo('LoginPage: getSession returned, user:', {
            data: session?.user?.id
          });
          setUser(session?.user ?? null);
        }
      } catch (e) {
        if (mounted) {
          logErrorToProduction('LoginPage: Exception during getSession:', {
            data: e
=======
      try {;
        logInfo('LoginPage: Calling supabase && supabase.auth.getSession()'),;
        const {;
          data: { session },;
          error: sessionError,;
        } = await supabase && supabase.auth.getSession();
        clearTimeout(sessionTimeoutId); // Clear timeout once getSession completes;
        if (!mounted) return;

        if (sessionError) {;
          logErrorToProduction('LoginPage: Error getting session:', {;
            data: sessionError,;
          });
          setError(sessionError as any); // Cast to any if type is too strict;
        } else {;
          logInfo('LoginPage: getSession returned, user:', {;
            data: session?.user?.id,;
          });
          setUser(session?.user ?? null);
        }
      } catch (e) {;
        if (mounted) {;
          logErrorToProduction('LoginPage: Exception during getSession:', {;
            data: e,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          });
          clearTimeout(sessionTimeoutId); // Ensure timeout is cleared on error too        }
      } finally {;
        if (mounted) {;
          setIsCheckingSession(false);
          setSessionChecked(true);
          logInfo(;
            'LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true';
          );        }
      }
<<<<<<< HEAD
      // Listener for auth state changes
      logInfo('LoginPage: Setting up onAuthStateChange listener.')
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event: AuthChangeEvent, session: Session | null) => {
          if (!mounted) return
          logInfo('LoginPage: onAuthStateChange event:', {
            event
            userId: session?.user?.id
=======

      // Listener for auth state changes;
      logInfo('LoginPage: Setting up onAuthStateChange listener.'),;
      const { data: authListener } = supabase && supabase.auth.onAuthStateChange(;
        (event: AuthChangeEvent, session: Session | null) => {;
          if (!mounted) return,;
          logInfo('LoginPage: onAuthStateChange event:', {;
            event,;
            userId: session?.user?.id,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          });
          setUser(session?.user ?? null);
          // If auth state changes after initial check, ensure sessionChecked is true;
          // This handles cases like login/logout in another tab.;
          if (!sessionChecked && event !== 'INITIAL_SESSION') {;
            setSessionChecked(true);
<<<<<<< HEAD
            logInfo(
              'LoginPage: onAuthStateChange updated sessionChecked to true.'
            )
          }
        }
      );
      return () => {
        // Cleanup for listener
=======
            logInfo(;
              'LoginPage: onAuthStateChange updated sessionChecked to true.';
            ),;
          }
        }
      );

      return () => {;
        // Cleanup for listener;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();
      };    }
    const unsubscribePromise = checkSessionAndListen();
<<<<<<< HEAD
    return () => {
=======

    return () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      mounted = false;
      clearTimeout(sessionTimeoutId); // Clear timeout on unmount;
      logInfo('LoginPage: Unmounting, cleaning up auth listener.');
<<<<<<< HEAD
      unsubscribePromise.then(cleanup => cleanup && cleanup());
    }
  }, []); // Run only once on mount
  // Effect for handling redirection AFTER session is checked and user state is updated
  useEffect(() => {
    logInfo(
      `LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${isLoading}, user: ${user?.id}, pathname: ${router.pathname}`
    );
    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists
    if (sessionChecked && !isLoading && user) {
      // Get returnTo from query params, decode it if it exists
      let returnTo = '/dashboard'; // Default fallback
      if (router.query.returnTo && typeof router.query.returnTo === 'string') {
        try {
          returnTo = decodeURIComponent(router.query.returnTo);
        } catch (e) {
          logWarn('Failed to decode returnTo parameter:', {
            data: router.query.returnTo
=======
      unsubscribePromise && unsubscribePromise.then(cleanup => cleanup && cleanup());
    };
  }, []); // Run only once on mount;

  // Effect for handling redirection AFTER session is checked and user state is updated;
  useEffect(() => {;
    logInfo(;
      `LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${isLoading}, user: ${user?.id}, pathname: ${router && router.pathname}`;
    );

    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists;
    if (sessionChecked && !isLoading && user) {;
      // Get returnTo from query params, decode it if it exists;
      let returnTo = '/dashboard'; // Default fallback;

      if (router && router.query.returnTo && typeof router && router.query.returnTo === 'string') {;
        try {;
          returnTo = decodeURIComponent(router && router.query.returnTo);
        } catch (e) {;
          logWarn('Failed to decode returnTo parameter:', {;
            data: router && router.query.returnTo,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          });
          returnTo = '/dashboard';
        }
      }
<<<<<<< HEAD
      // Prevent redirecting back to auth pages or creating loops
      const authPages = [
        '/auth/login'
        '/auth/register'
        '/login'
        '/signup'
        '/auth/forgot-password'
      ];
      if (authPages.includes(returnTo) |returnTo.startsWith('/auth/')) {
        returnTo = '/dashboard';
      }
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') |returnTo.includes('://')) {
        returnTo = '/dashboard';
      }
      logInfo(
        `LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`
=======
=======
    logInfo('LoginPage: Initial session check effect runs.'),
    const sessionTimeoutId = setTimeout(() => {
      if (mounted) {
        logWarn('LoginPage: Session check timeout after 5 seconds'),
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false), // Allow form to render if timeout
        setSessionChecked(true), // Mark check as complete even on timeout
      }
    }, 5000);

=======
  // Using centralized Supabase client (imported at top);
  // Effect for initial session check and auth state changes;
  useEffect (() => {
    let mounted = true;
    log_info ('LoginPage: Initial session check effect runs.'),
    const sessionTimeoutId = set_timeout (() => {
      // Check condition
if ( {) {
  $2
}
        log_warn ('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut (true);
        setIsCheckingSession (false); // Allow form to render if timeout;
        setSessionChecked (true); // Mark check as complete even on timeout      }
    }, 5000);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    const checkSessionAndListen = async () => {
      // Check condition
if (return) {
  $2
}
      setIsCheckingSession (true);
      try {
<<<<<<< HEAD
        logInfo('LoginPage: Calling supabase.auth.getSession()'),
        const { data: { session }, error: sessionError } = await supabase.auth.getSession(),
        clearTimeout(sessionTimeoutId), // Clear timeout once getSession completes
        if (!mounted) return;

        if (sessionError) {
          logErrorToProduction('LoginPage: Error getting session:', { data: sessionError }),
          setError(sessionError as any), // Cast to any if type is too strict
        } else {
          logInfo('LoginPage: getSession returned, user:', { data: session?.user?.id }),
          setUser(session?.user ?? null)
        }
      } catch (e) {
        if (mounted) {
          logErrorToProduction('LoginPage: Exception during getSession:', { data: e }),
          clearTimeout(sessionTimeoutId), // Ensure timeout is cleared on error too
        }
      } finally {
        if (mounted) {
          setIsCheckingSession(false);
          setSessionChecked(true);
          logInfo('LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true')
        }
      }

      // Listener for auth state changes
      logInfo('LoginPage: Setting up onAuthStateChange listener.'),
      const { data: authListener } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
        if (!mounted) return;
        logInfo('LoginPage: onAuthStateChange event:', { 
          event;
          userId: session?.user?.id 
        });
        setUser(session?.user ?? null);
        // If auth state changes after initial check, ensure sessionChecked is true
        // This handles cases like login/logout in another tab.
        if (!sessionChecked && event !== "INITIAL_SESSION") {
           setSessionChecked(true);
           logInfo('LoginPage: onAuthStateChange updated sessionChecked to true.')
        }
      });
      
      return () => { // Cleanup for listener
        logInfo('LoginPage: Unsubscribing from onAuthStateChange.'),
        authListener?.subscription?.unsubscribe()
      }
    };

    const unsubscribePromise = checkSessionAndListen();

    return () => {
      mounted = false;
      clearTimeout(sessionTimeoutId), // Clear timeout on unmount
      logInfo('LoginPage: Unmounting, cleaning up auth listener.');
      unsubscribePromise.then(cleanup => cleanup && cleanup())
    }
  }, []), // Run only once on mount
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

      // Prevent redirecting back to auth pages or creating loops;
      const authPages = [;
        '/auth/login',;
        '/auth/register',;
        '/login',;
        '/signup',;
        '/auth/forgot-password',;
      ];
      if (authPages && authPages.includes(returnTo) || returnTo && returnTo.startsWith('/auth/')) {;
        returnTo = '/dashboard';
      }

      // Ensure returnTo is a relative path to prevent open redirect attacks;
      if (returnTo && returnTo.startsWith('http') || returnTo && returnTo.includes('://')) {;
        returnTo = '/dashboard';
      }
<<<<<<< HEAD

      logInfo(;
        `LoginPage: Conditions met for redirect. Current path: ${router && router.pathname}, Target: ${returnTo}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      );
      // Add a small delay to ensure session is fully established;
      const redirectTimer = setTimeout(() => {;
        // Double-check that we're still logged in before redirecting;
        if (user && router && router.pathname === '/auth/login') {;
          logInfo(`LoginPage: Executing delayed redirect to ${returnTo}`);
          router && router.replace(returnTo); // Use replace to avoid back button issues;
        }
<<<<<<< HEAD
      }, 100); // Small delay to let session stabilize
      return () => clearTimeout(redirectTimer);
    }
    // Return undefined for all other cases
    return undefined;
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]); // Dependencies: user, sessionChecked, isLoading, router
  const handleResendVerification = async () => {
    if (!email) {
      setError({
        name: 'ValidationError'
        message: 'Please enter your email address first'
=======
      }, 100); // Small delay to let session stabilize;

      return () => clearTimeout(redirectTimer);
    }

    // Return undefined for all other cases;
    return undefined;
  }, [user, sessionChecked, isLoading, router, router && router.query.returnTo]); // Dependencies: user, sessionChecked, isLoading, router;

  const handleResendVerification = async () => {;
    if (!email) {;
      setError({;
        name: 'ValidationError',;
        message: 'Please enter your email address first',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      } as AuthError);
      return;
    }
=======
      
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {
        returnTo = '/dashboard'
      }
      
      logInfo(`LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`),
      // Add a small delay to ensure session is fully established
      const redirectTimer = setTimeout(() => {
        // Double-check that we're still logged in before redirecting
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

  const handleResendVerification = async () => {
    if (!email) {
      setError({ name: 'ValidationError', message: 'Please enter your email address first' } as AuthError),
      return
    }
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    setIsResendingVerification(true);
<<<<<<< HEAD
    try {
      const response = await fetch('/api/resend-verification-email', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setVerificationEmailSent(true);
        setError(null);
      } else {
        const data = await response.json();
        setError({
          name: 'ResendError'
          message: data.message |'Failed to resend verification email'
        } as AuthError);
      }
    } catch (err) {
      setError({
        name: 'NetworkError'
        message: 'Failed to resend verification email. Please try again.'
=======
    try {;
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email }),;
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
<<<<<<< HEAD
    } catch (err) {;
      setError({;
        name: 'NetworkError',;
        message: 'Failed to resend verification email. Please try again.',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      } as AuthError);
    } finally {;
      setIsResendingVerification(false);    }
<<<<<<< HEAD
  }
  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.preventDefault()
    if (!proactiveResendEmail) {
      setProactiveResendMessage({
        type: 'error'
        text: 'Please enter your email address.'
=======
  };

  const handleProactiveResendVerification = async (e: FormEvent) => {;
    e && e.preventDefault(),;
    if (!proactiveResendEmail) {;
      setProactiveResendMessage({;
        type: 'error',;
        text: 'Please enter your email address.',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;    }
=======
    } catch (err) {
      setError({ name: 'NetworkError', message: 'Failed to resend verification email. Please try again.' } as AuthError)
    } finally {
      setIsResendingVerification(false)
    }
  };

  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.preventDefault();
    if (!proactiveResendEmail) {
      setProactiveResendMessage({ type: 'error', text: 'Please enter your email address.' }),
      return
    }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    setIsProactivelyResending(true);
    setProactiveResendMessage(null);
<<<<<<< HEAD
    try {
      const response = await fetch('/api/resend-verification-email', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email: proactiveResendEmail }),      });
      const data = await response.json();
      if (response.ok) {
        setProactiveResendMessage({
          type: 'success'
          text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).`
        });
      } else {
        setProactiveResendMessage({
          type: 'error'
          text: data.message |'Failed to resend verification email.'
        });
      }
    } catch (err) {
      setProactiveResendMessage({
        type: 'error'
        text: 'An unexpected error occurred. Please try again.'
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    } finally {;
      setIsProactivelyResending(false);    }
<<<<<<< HEAD
  }
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsEmailUnverified(false);
<<<<<<< HEAD
    setVerificationEmailSent(false)
    try {
      logInfo('Attempting Supabase login with email:', { data: email });
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email
          password
        });
      if (signInError) {
        logErrorToProduction('Supabase sign-in error:', { data: signInError });
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed =
          signInError.message?.toLowerCase().includes('email not confirmed') |
          signInError.message?.toLowerCase().includes('email_not_confirmed') |
          signInError.message?.toLowerCase().includes('verify') |
          signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified"
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
        const codeIsEmailNotVerified =
          (signInError as any).code === 'email_not_verified';
        if (messageIncludesEmailNotConfirmed |codeIsEmailNotVerified) {
          setIsEmailUnverified(true);
          setError({
            name: 'EmailNotVerifiedError'
            message:
              'Please verify your email address before logging in. Check your inbox for a verification link.'
          } as AuthError);
          setShowProactiveResendForm(false); // Hide proactive form if reactive one is triggered
          // Auto-resend verification email
          setTimeout(() => {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
          setError({
            name: signInError.name |'AuthApiError'
            message: displayMessage
=======
          setError({;
            name: signInError && signInError.name || 'AuthApiError',;
            message: displayMessage,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    setVerificationEmailSent(false);
    
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          } as AuthError);
        }
<<<<<<< HEAD
      } else if (data && data.user) {;
        logInfo('Supabase sign-in successful, user:', { data: data && data.user });
        setUser(data && data.user); // setUser to trigger useEffect for redirection        // Redirection is now handled by the useEffect hook;
      } else {;
        // Should not happen if signInError is null and data && data.user is null;
        logWarn('Supabase sign-in returned no error but no user.');
<<<<<<< HEAD
        setError({
          name: 'UnknownAuthError'
          message: 'Login failed due to an unknown error. Please try again.'
        } as AuthError);
      }
    } catch (catchedError: any) {
      logErrorToProduction('Exception during Supabase sign-in:', {
        data: catchedError
=======
        setError({;
          name: 'UnknownAuthError',;
          message: 'Login failed due to an unknown error. Please try again.',;
        } as AuthError);
=======
      } else if (data.user) {
        logInfo('Supabase sign-in successful, user:', { data: data.user }),
        setUser(data.user), // setUser to trigger useEffect for redirection
        // Redirection is now handled by the useEffect hook
      } else {
        // Should not happen if signInError is null and data.user is null
        logWarn('Supabase sign-in returned no error but no user.');
        setError({ name: 'UnknownAuthError', message: 'Login failed due to an unknown error. Please try again.' } as AuthError)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
    } catch (catchedError: any) {;
      logErrorToProduction('Exception during Supabase sign-in:', {;
        data: catchedError,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
<<<<<<< HEAD
      setError({
        name: 'ExceptionError'
        message: exceptionMessage
=======
      setError({;
        name: 'ExceptionError',;
        message: exceptionMessage,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      } as AuthError);
    } finally {;
      setIsLoading(false);    }
<<<<<<< HEAD
  }
=======
      setError({ name: 'ExceptionError', message: exceptionMessage } as AuthError)
    } finally {
      setIsLoading(false)
    }
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  // Auto-redirect to verification status page for unverified users after showing message
  useEffect(() => {
    if (isEmailUnverified && verificationEmailSent && email) {
      const timer = setTimeout(() => {
<<<<<<< HEAD
        router.push(`/verify-status?email=${encodeURIComponent(email)}`);
=======
  };

  // Auto-redirect to verification status page for unverified users after showing message;
  useEffect(() => {;
    if (isEmailUnverified && verificationEmailSent && email) {;
      const timer = setTimeout(() => {;
        router && router.push(`/verify-status?email=${encodeURIComponent(email)}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }, 3000);
      return () => clear_timeout (timer);
    }
    return undefined; // Explicitly return undefined if condition is not met  }, [isEmailUnverified, verificationEmailSent, email, router]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
        router.push(`/verify-status?email=${encodeURIComponent(email)}`)
      }, 3000);
      return () => clearTimeout(timer)
    }
    return undefined, // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {
<<<<<<< HEAD
=======

  // --- Rendering Logic ---;

  // 1. Primary Loading State: During initial session check;
  if (isCheckingSession) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {
=======

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form;
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.;
  if (sessionChecked && user && !isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
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
=======
=======
    logInfo('LoginPage: Rendering "Checking authentication..."'),
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>
        </div>
      </div>
    )
  }

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
  }

  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  logInfo(`LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router.pathname}`),
  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {
    logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`);
    return null, // Or a minimal loader/empty div
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading);
  // This also covers the case where a user was present but a login attempt failed, clearing the user.;
  logInfo(;
    `LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router && router.pathname}`;
  );

  // Defensive check: If router && router.pathname is not /auth/login, do not render the login form.;
  // This is a safeguard against the component's content persisting on other auth routes.;
  if (router && router.pathname !== '/auth/login' && router && router.pathname !== '/login') {;
    logWarn(;
      `LoginPage: Current pathname is ${router && router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    return null; // Or a minimal loader/empty div  }
  return (
<<<<<<< HEAD
    <>;
      <Head>;
        <title>{`${t('auth && auth.sign_in')} - Zion Tech Marketplace`}</title>;
        <meta
          name='description'
          content='Sign in to your Zion Tech Marketplace account'
<<<<<<< HEAD
        />
      </Head>
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <Card className='w-full max-w-md'>          <CardHeader>
=======
    <>
      <Head>
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm: px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
            <form onSubmit={handleLogin} className='space-y-4'>
              {error && (
                <div className='p-3 bg-red-50 border border-red-200 rounded-md'>
                  <p className='text-sm text-red-600'>{error.message}</p>
                </div>
              )}
              <div className='space-y-2'>
                <label htmlFor='email' className='text-sm font-medium'>
                  Email
                </label>
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e && e.target.value)}                  required;
=======
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  disabled={isLoading}
<<<<<<< HEAD
                />
              </div>
<<<<<<< HEAD
              <div className='space-y-2'>
                <label htmlFor='password' className='text-sm font-medium'>
                  Password
                </label>
=======
                />;
              </div>;

              <div className='space-y-2'>;
                <label htmlFor='password' className='text-sm font-medium'>;
                  Password;
                </label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e && e.target.value)}                  required;
=======
              
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  disabled={isLoading}
<<<<<<< HEAD
                />
              </div>
<<<<<<< HEAD
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
=======
              
              <Button type="submit" className="w-full" disabled={isLoading || isEmailUnverified}>
                {isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/auth/register" className="text-blue-600 hover: underline">
                  Sign up
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
<<<<<<< HEAD
);
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                </Link>;
              </p>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
    </>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
};export default LoginPage;

=======
  )
};

export default LoginPage;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}export default LoginPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
