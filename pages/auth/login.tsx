<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';

import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type {;
  AuthError,;
  User,;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  AuthError,
  User,

  AuthChangeEvent,;
  Session,;
} from '@supabase/supabase-js';
import {;
  logInfo,;
  logWarn,;
  logErrorToProduction,;
<<<<<<< HEAD
<<<<<<< HEAD
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
  AuthError,
  User,
  AuthChangeEvent,;
  Session,;
} from '@supabase/supabase-js';
import {
  logInfo,
  logWarn,;
  logErrorToProduction,;
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
<<<<<<< HEAD
<<<<<<< HEAD
=======

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;

<<<<<<< HEAD
} from '@/components/ui/card';
const LoginPage = () => {;

<<<<<<< HEAD
} from '@/components/ui/card';
const LoginPage = () => {;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react'
import Head from 'next/head';
import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from '@/components/ui/card';
const LoginPage = () => {
import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
<<<<<<< HEAD

<<<<<<< HEAD
const LoginPage = () => {;


const LoginPage = () => {
const LoginPage = () => {;
=======
=======
const LoginPage = () => {;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const LoginPage = () => {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false), // For login form submission;
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true), // For initial session check;
  const [sessionChecked, setSessionChecked] = useState(false), // New state: true after initial getSession completes;
  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);


  // States for the new proactive resend form;

  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);


    type: 'success' | 'error';

  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),

<<<<<<< HEAD
  // States for the new proactive resend form;
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);
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
    type: 'success' | 'error';
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),
=======


  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // States for the new proactive resend form
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);
<<<<<<< HEAD
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{
    type: 'success' | 'error';
    text: string
  } | null>(null);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


    type: 'success' | 'error';

  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Using centralized Supabase client (imported at top)
  // Effect for initial session check and auth state changes
  useEffect(() => {
    let mounted = true;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    logInfo('LoginPage: Initial session check effect runs.')
    const sessionTimeoutId = setTimeout(() => {
      if (mounted) {
        logWarn('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false); // Allow form to render if timeout
        setSessionChecked(true); // Mark check as complete even on timeout      }
    }, 5000);
    const checkSessionAndListen = async () => {
      if (!mounted) return;
      setIsCheckingSession(true);
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
          });
          clearTimeout(sessionTimeoutId); // Ensure timeout is cleared on error too        }
      } finally {
        if (mounted) {
          setIsCheckingSession(false);
          setSessionChecked(true);
          logInfo(
            'LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true'
          );        }
      }
      // Listener for auth state changes
      logInfo('LoginPage: Setting up onAuthStateChange listener.')
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event: AuthChangeEvent, session: Session | null) => {
          if (!mounted) return
          logInfo('LoginPage: onAuthStateChange event:', {
            event
            userId: session?.user?.id
          });
          setUser(session?.user ?? null);
          // If auth state changes after initial check, ensure sessionChecked is true
          // This handles cases like login/logout in another tab.
          if (!sessionChecked && event !== 'INITIAL_SESSION') {
            setSessionChecked(true);
            logInfo(
              'LoginPage: onAuthStateChange updated sessionChecked to true.'
            )
          }
        }
      );
      return () => {
        // Cleanup for listener
        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();
      };    }
    const unsubscribePromise = checkSessionAndListen();
    return () => {
      mounted = false;
      clearTimeout(sessionTimeoutId); // Clear timeout on unmount
      logInfo('LoginPage: Unmounting, cleaning up auth listener.');
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
          });
          returnTo = '/dashboard';
        }
      }
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
        name: 'ValidationError'
        message: 'Please enter your email address first'
      } as AuthError);
      return;
    }
    setIsResendingVerification(true);
    try {
      const response = await fetch('/api/resend-verification-email', {
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
      } as AuthError);
    } finally {
      setIsResendingVerification(false);    }
  }
  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.preventDefault()
    if (!proactiveResendEmail) {
      setProactiveResendMessage({
        type: 'error'
        text: 'Please enter your email address.'
      });
      return;    }
    setIsProactivelyResending(true);
    setProactiveResendMessage(null);
    try {
      const response = await fetch('/api/resend-verification-email', {
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
      });
    } finally {
      setIsProactivelyResending(false);    }
  }
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsEmailUnverified(false);
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
  // States for the new proactive resend form;
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),;
<<<<<<< HEAD
=======

    text: string,;
  } | null>(null);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Using centralized Supabase client (imported at top);
  // Effect for initial session check and auth state changes;
  useEffect(() => {;
    let mounted = true;
    logInfo('LoginPage: Initial session check effect runs.');
    const sessionTimeoutId = setTimeout(() => {;
      if (mounted) {;
<<<<<<< HEAD
        logWarn('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false), // Allow form to render if timeout;
        setSessionChecked(true), // Mark check as complete even on timeout;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }, 5000),;
    const checkSessionAndListen = async () => {;
      if (!mounted) return;
      setIsCheckingSession(true);
      try {
        logInfo('LoginPage: Calling supabase.auth.getSession()');
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        clearTimeout(sessionTimeoutId), // Clear timeout once getSession completes;
        if (!mounted) return,;
        if (sessionError) {;
          logErrorToProduction('LoginPage: Error getting session:', { data: sessionError });
          setError(sessionError as any), // Cast to any if type is too strict;
        } else {;
          logInfo('LoginPage: getSession returned, user:', { data: session?.user?.id });
          setUser(session?.user ?? null);
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
        if (mounted) {;
          logErrorToProduction('LoginPage: Exception during getSession:', { data:  e });
          clearTimeout(sessionTimeoutId), // Ensure timeout is cleared on error too;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
  // Using centralized Supabase client (imported at top);

  // Effect for initial session check and auth state changes;
  useEffect(() => {;
    let mounted = true;
    logInfo('LoginPage: Initial session check effect runs.'),;

    const sessionTimeoutId = setTimeout(() => {;
      if (mounted) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        logWarn('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false); // Allow form to render if timeout;
        setSessionChecked(true); // Mark check as complete even on timeout      }
    }, 5000);


    const checkSessionAndListen = async () => {;

      if (!mounted) return;
      setIsCheckingSession(true);


          });
          clearTimeout(sessionTimeoutId); // Ensure timeout is cleared on error too        }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } finally {;
        if (mounted) {;
          setIsCheckingSession(false);
          setSessionChecked(true);
<<<<<<< HEAD
<<<<<<< HEAD
          logInfo(
            'LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true'
          );        }
      }

      // Listener for auth state changes
      logInfo('LoginPage: Setting up onAuthStateChange listener.'),
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event: AuthChangeEvent, session: Session | null) => {
          if (!mounted) return,
          logInfo('LoginPage: onAuthStateChange event:', {
            event,
            userId: session?.user?.id,
          });
          setUser(session?.user ?? null);
          // If auth state changes after initial check, ensure sessionChecked is true
          // This handles cases like login/logout in another tab.
          if (!sessionChecked && event !== 'INITIAL_SESSION') {
            setSessionChecked(true);
            logInfo(
              'LoginPage: onAuthStateChange updated sessionChecked to true.'
            ),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          logInfo(;
            'LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true';
          );        }
      }


      // Listener for auth state changes;
      logInfo('LoginPage: Setting up onAuthStateChange listener.'),;
      const { data: authListener } = supabase && supabase.auth.onAuthStateChange(;
        (event: AuthChangeEvent, session: Session | null) => {;
          if (!mounted) return,;
          logInfo('LoginPage: onAuthStateChange event:', {;
            event,;
            userId: session?.user?.id,;

          });
          setUser(session?.user ?? null);
          // If auth state changes after initial check, ensure sessionChecked is true;
          // This handles cases like login/logout in another tab.;
          if (!sessionChecked && event !== 'INITIAL_SESSION') {;
            setSessionChecked(true);

            logInfo(;
              'LoginPage: onAuthStateChange updated sessionChecked to true.';
            ),;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        }
      );

<<<<<<< HEAD
<<<<<<< HEAD
      
      return () => {
        // Cleanup for listener
        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();
      };    };

    const unsubscribePromise = checkSessionAndListen();

    return () => {
      mounted = false;
      clearTimeout(sessionTimeoutId); // Clear timeout on unmount
      logInfo('LoginPage: Unmounting, cleaning up auth listener.');
      unsubscribePromise.then(cleanup => cleanup && cleanup());
    };
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
            data: router.query.returnTo,
          });
          returnTo = '/dashboard';
        }
      }

      // Prevent redirecting back to auth pages or creating loops
      const authPages = [
        '/auth/login',
        '/auth/register',
        '/login',
        '/signup',
        '/auth/forgot-password',
      ];
      if (authPages.includes(returnTo) || returnTo.startsWith('/auth/')) {
        returnTo = '/dashboard';
      }

      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {
setIsResendingVerification(true);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return () => {;
        // Cleanup for listener;

        logInfo('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();

      };    }
    const unsubscribePromise = checkSessionAndListen();


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

      } as AuthError);
      return;
    }

=======
      
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {
<<<<<<< HEAD
<<<<<<< HEAD
        returnTo = '/dashboard'
      }
logInfo(`LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`),
      // Add a small delay to ensure session is fully established
      const redirectTimer = setTimeout(() => {
        // Double-check that we're still logged in before redirecting
      
      // Add a small delay to ensure session is fully established
      const _redirectTimer = setTimeout__(() => {_// Double-check that we're still logged in before redirecting

=======
        returnTo = '/dashboard'
      }
      
      logInfo(`LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`),
      // Add a small delay to ensure session is fully established
      const redirectTimer = setTimeout(() => {
        // Double-check that we're still logged in before redirecting
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (user && router.pathname === '/auth/login') {
          logInfo(`LoginPage: Executing delayed redirect to ${returnTo}`),
          router.replace(returnTo), // Use replace to avoid back button issues
        }
      }, 100), // Small delay to let session stabilize
<<<<<<< HEAD
return () => clearTimeout(redirectTimer)
    }
    // Return undefined for all other cases
    return undefined
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]), // Dependencies: user, sessionChecked, isLoading, router
=======
      
      return () => clearTimeout(redirectTimer)
    }
    
    // Return undefined for all other cases
    return undefined
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]), // Dependencies: user, sessionChecked, isLoading, router

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleResendVerification = async () => {
    if (!email) {
      setError({ name: 'ValidationError', message: 'Please enter your email address first' } as AuthError),
      return
    }
    

    setIsResendingVerification(true);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email }),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })

<<<<<<< HEAD
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      });
=======
      });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  };
  const handleProactiveResendVerification = async (e: FormEvent) => {;
    e && e.preventDefault(),;
    if (!proactiveResendEmail) {;
      setProactiveResendMessage({;
        type: 'error',;
        text: 'Please enter your email address.',;
      });
      return;    }
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
setIsProactivelyResending(true);
    setProactiveResendMessage(null);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    setIsProactivelyResending(true);
    setProactiveResendMessage(null);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email: proactiveResendEmail }),      });
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: proactiveResendEmail })
      });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
  };

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      setIsProactivelyResending(false);    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      });
    } finally {;
      setIsProactivelyResending(false);    }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
          setError({;
            name: signInError && signInError.name || 'AuthApiError',;
            message: displayMessage,;
    setVerificationEmailSent(false);
=======

          setError({;
            name: signInError && signInError.name || 'AuthApiError',;
            message: displayMessage,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      logInfo('Attempting Supabase login with email:', { data: email }),
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
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

          setError({;
            name: signInError && signInError.name || 'AuthApiError',;
            message: displayMessage,;

    try {
      logInfo('Attempting Supabase login with email:', { data: email }),
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email;
        password});

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (signInError) {
        logErrorToProduction('Supabase sign-in error:', { data: signInError }),
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
<<<<<<< HEAD
<<<<<<< HEAD


            message: 'Please verify your email address before logging in. Check your inbox for a verification link.' 
          } as AuthError);
        }
        setError({;
          name: 'UnknownAuthError',;
          message: 'Login failed due to an unknown error. Please try again.',;
        } as AuthError);
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
        const codeIsEmailNotVerified = (signInError as any).code === 'email_not_verified'

        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
          setIsEmailUnverified(true),
          setError({ 
            name: 'EmailNotVerifiedError',
            message: 'Please verify your email address before logging in. Check your inbox for a verification link.' 
          } as AuthError),
          setShowProactiveResendForm(false), // Hide proactive form if reactive one is triggered
          
                                                 signInError.message?.toLowerCase().includes('confirm'),
        // As per issue description, check for a specific error code "email_not_verified"
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
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
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                                 signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified"
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
        const codeIsEmailNotVerified = (signInError as any).code === 'email_not_verified';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
          setIsEmailUnverified(true);
          setError({ 
            name: 'EmailNotVerifiedError',
<<<<<<< HEAD


      }
    } catch (catchedError: any) {;
      logErrorToProduction('Exception during Supabase sign-in:', {;
        data: catchedError,;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.'
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.'
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.'
  };
      setError({;
        name: 'ExceptionError',;
        message: exceptionMessage,;
      } as AuthError);
    } finally {;
      setIsLoading(false);    }
      setError({ name: 'ExceptionError', message: exceptionMessage } as AuthError)
    } finally {
      setIsLoading(false)
    }
};
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

=======


=======
            message: 'Please verify your email address before logging in. Check your inbox for a verification link.'
          } as AuthError),
          setShowProactiveResendForm(false), // Hide proactive form if reactive one is triggered
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          // Auto-resend verification email
          setTimeout(() => {
            handleResendVerification()
          }, 1000)
        } else {
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES
          let displayMessage = 'Login failed. Please check your credentials and try again.', // Default user-friendly message
          if (signInError.message) {



=======
              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.'
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.'
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.'
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  };

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Auto-redirect to verification status page for unverified users after showing message;
  useEffect(() => {;
    if (isEmailUnverified && verificationEmailSent && email) {;
      const timer = setTimeout(() => {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }, 3000);
      return () => clear_timeout (timer);
    }
    return undefined; // Explicitly return undefined if condition is not met  }, [isEmailUnverified, verificationEmailSent, email, router]);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        router.push(`/verify-status?email=${encodeURIComponent(email)}`)
      }, 3000);
      return () => clearTimeout(timer)
    }
    return undefined, // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]);
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {



<<<<<<< HEAD
<<<<<<< HEAD
  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {
  // --- Rendering Logic ---;
  // 1. Primary Loading State: During initial session check;
  if (isCheckingSession) {;
=======
  // --- Rendering Logic ---;
  // 1. Primary Loading State: During initial session check;
  if (isCheckingSession) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // --- Rendering Logic ---;

  // 1. Primary Loading State: During initial session check;
  if (isCheckingSession) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form;
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.;
  if (sessionChecked && user && !isLoading) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form;
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.;
  if (sessionChecked && user && !isLoading) {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {
    logWarn(
      `LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`
=======
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // --- Rendering Logic ---
  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    logInfo('LoginPage: Rendering "Checking authentication..."'),
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    );  }
    )
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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


// 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  logInfo(`LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router.pathname}`),
  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {
    logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`);
    return null, // Or a minimal loader/empty div
  }
  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading);
  // This also covers the case where a user was present but a login attempt failed, clearing the user.;
  logInfo(;
    `LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router && router.pathname}`;
        </div>
      </div>
    );  }
  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  logInfo(
    `LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}, pathname: ${router.pathname}`
  );
  // Defensive check: If router && router.pathname is not /auth/login, do not render the login form.;
  // This is a safeguard against the component's content persisting on other auth routes.;
  if (router && router.pathname !== '/auth/login' && router && router.pathname !== '/login') {;
    logWarn(;
      `LoginPage: Current pathname is ${router && router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Defensive check: If router && router.pathname is not /auth/login, do not render the login form.;
  // This is a safeguard against the component's content persisting on other auth routes.;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {;
    logWarn(`LoginPage: Current pathname is ${router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`);
    return null, // Or a minimal loader/empty div;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <>
      <Head>
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  return (
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    return null; // Or a minimal loader/empty div  }
  return (


<<<<<<< HEAD
<<<<<<< HEAD
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm: px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
      </Head>
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <Card className='w-full max-w-md'>          <CardHeader>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        />;
      </Head>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='space-y-2'>;
                <label htmlFor='email' className='text-sm font-medium'>;
                  Email;
                </label>;


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e && e.target.value)}                  required;

=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error.message}</p>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}
              <div className='space-y-2'>
                <label htmlFor='email' className='text-sm font-medium'>
                  Email
                </label>
                <Input
<<<<<<< HEAD
                  id='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e && e.target.value)}                  required;
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error.message}</p>
                </div>
              )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
<<<<<<< HEAD
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                />;
              </div>;
=======


                />;
              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='space-y-2'>;
                <label htmlFor='password' className='text-sm font-medium'>;
                  Password;
                </label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e && e.target.value)}                  required;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              
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
<<<<<<< HEAD
                  disabled={isLoading}
              <Button type="submit" className="w-full" disabled={isLoading || isEmailUnverified}>
                {isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                disabled={isLoading || isEmailUnverified}
=======
                disabled={isLoading |isEmailUnverified}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                  id="email"
                  type="email"
                  value={email  } catch (error) {
=======
              )  } catch (error) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
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
=======

=======
              
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
<<<<<<< HEAD
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
=======
=======
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  disabled={isLoading}

              
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Button type="submit" className="w-full" disabled={isLoading || isEmailUnverified}>
                {isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <Link href="/auth/register" className="text-blue-600 hover: underline">
                  Sign up

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>


<<<<<<< HEAD

  )
},
export default LoginPage,
                />;
<<<<<<< HEAD
=======
              </div>;
=======
=======


=======
  )
},
export default LoginPage,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                />;
              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='mt-6 text-center'>;
              <p className='text-sm text-gray-600'>;
                Don't have an account?{' '}
                <Link
                  href='/auth/register'
                  className='text-blue-600 hover:underline'>                  Sign up;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
);
};export default LoginPage;

  )
},
export default LoginPage,
                />;
              </div>;
              <Button type="submit" className="w-full" disabled={isLoading || isEmailUnverified}>;
                {isLoading ? 'Signing in...' : isEmailUnverified ? t('auth.email_verification_required') : t('auth.sign_in')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Button>;
            </form>;
            <div className="mt-6 text-center">;
              <p className="text-sm text-gray-600">;
                Don't have an account?{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <Link href="/auth/register" className="text-blue-600 hover: underline">;
                  Sign up;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </Link>;
              </p>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </>);
}export default LoginPage;
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
    </>);
}export default LoginPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},;
export default LoginPage;


<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
},;
export default LoginPage;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
