

import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';

import Head from 'next/head';

import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';

} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

} from '@/components/ui/card';
const LoginPage = () => {

import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);

  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);

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

  // Auto-redirect to verification status page for unverified users after showing message;
  useEffect(() => {;
    if (isEmailUnverified && verificationEmailSent && email) {;
      const timer = setTimeout(() => {;

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

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {
    logInfo('LoginPage: Rendering "Already Logged In / Redirecting..."'),

      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-4">Already Logged In</h2>
          <p className="text-gray-600 mb-4">Redirecting to your dashboard...</p>

  );
  // Defensive check: If router && router.pathname is not /auth/login, do not render the login form.;
  // This is a safeguard against the component's content persisting on other auth routes.;
  if (router && router.pathname !== '/auth/login' && router && router.pathname !== '/login') {;
    logWarn(;
      `LoginPage: Current pathname is ${router && router.pathname}, not /auth/login or /login. Rendering null to prevent incorrect display.`;
    );
    return null; // Or a minimal loader/empty div  }

  return (
    <>
      <Head>
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>

            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
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
                  disabled={isLoading}
                />;
              </div>;
              <div className='space-y-2'>;
                <label htmlFor='password' className='text-sm font-medium'>;
                  Password;
                </label>;
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e && e.target.value)}                  required;
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

                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>

                </Link>;
              </p>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
