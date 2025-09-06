import { useRouter  } from 'next/router';
import { useEffect, useState, FormEvent  } from 'react';
import Link from 'next/link',
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react'
import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';
import Head from 'next/head';

import { signIn } from 'next-auth/react';
import { supabase } from '@/utils/supabase/client';
  AuthError
  User
  AuthChangeEvent
  Session;
  AuthError,
  User,

  AuthChangeEvent,;
  Session,;
} from '@supabase/supabase-js';
import {;
  logInfo,;
  logWarn,;
  logErrorToProduction,;
} from '@/utils/productionLogger';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  // Using centralized Supabase client (imported at top)
  // Effect for initial session check and auth state changes
  useEffect(() => {
    let mounted = true;
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
          }
        }
      );

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
    

    setIsResendingVerification(true);


    try {;
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
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

      if (signInError) {
        logErrorToProduction('Supabase sign-in error:', { data: signInError }),
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
      setError({
        name: 'ExceptionError'
        message: exceptionMessage
      } as AuthError);
      setIsLoading(false);    }
  }
  // Auto-redirect to verification status page for unverified users after showing message
  useEffect(() => {
    if (isEmailUnverified && verificationEmailSent && email) {
      const timer = setTimeout(() => {
        router.push(`/verify-status?email=${encodeURIComponent(email)}`);
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
    logInfo('LoginPage: Rendering "Checking authentication..."'),
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
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
    );
    return null; // Or a minimal loader/empty div  }
  return (


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
              <div className='space-y-2'>
                <label htmlFor='email' className='text-sm font-medium'>
                  Email
                </label>
                <Input
                <Input
                  id='password'
                  type='password'
                  value={password}
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
                </Link>;
              </p>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
    </>;
  );
};export default LoginPage;
    </>;
  );
};export default LoginPage;

  )
};

export default LoginPage;
