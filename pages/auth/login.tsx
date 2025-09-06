
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
=======
import {useRouter} from 'next/router';
import {useEffect, useState, FormEvent} from 'react';
=======
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Head from 'next/head';

import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';

  AuthError,
  User,
  AuthChangeEvent,;
  Session,;
} from '@supabase/supabase-js';
import {
  logInfo,
  logWarn,;
  logErrorToProduction,;

} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;

} from '@/components/ui/card';
const LoginPage = () => {
=======
import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const LoginPage = () => {;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState(false), // For login form submission;
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true), // For initial session check;
  const [sessionChecked, setSessionChecked] = useState(false), // New state: true after initial getSession completes;
  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);

  // States for the new proactive resend form;
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null),;
  // Using centralized Supabase client (imported at top);
  // Effect for initial session check and auth state changes;
  useEffect(() => {;
    let mounted = true;
    logInfo('LoginPage: Initial session check effect runs.');
    const sessionTimeoutId = setTimeout(() => {;
      if (mounted) {;
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
      } finally {;
        if (mounted) {;
          setIsCheckingSession(false);
          setSessionChecked(true);

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
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
        </div>
      </div>



=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <>
      <Head>
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error.message}</p>
                </div>

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

                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>


=======
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
                </Link>;
              </p>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
    </>;
  );
},;
export default LoginPage;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
