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
  const router = useRouter($2);
  const { t } = useTranslation($2);
  const [email, setEmail] = useState($2);
  const [password, setPassword] = useState($2);
  const [error, setError] = useState<AuthError | null>(null),
  const [isLoading, setIsLoading] = useState(false), // For login form submission
  const [user, setUser] = useState<User | null>(null),
  const [isCheckingSession, setIsCheckingSession] = useState(true), // For initial session check
  const [sessionChecked, setSessionChecked] = useState(false), // New state: true after initial getSession completes
  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState($2);
  const [isEmailUnverified, setIsEmailUnverified] = useState($2);
  const [verificationEmailSent, setVerificationEmailSent] = useState($2);
  const [isResendingVerification, setIsResendingVerification] = useState($2);
  // States for the new proactive resend form
  const [showProactiveResendForm, setShowProactiveResendForm] = useState($2);
  const [proactiveResendEmail, setProactiveResendEmail] = useState($2);
  const [isProactivelyResending, setIsProactivelyResending] = useState($2);
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error', text: string} | null>(null),

  // Using centralized Supabase client (imported at top)

  // Effect for initial session check and auth state changes
  useEffect(() => {
    let mounted = $2;
    logInfo($2);
    const sessionTimeoutId = setTimeout(() => {
      if (mounted) {
        logWarn($2);
        setSessionCheckTimedOut($2);
        setIsCheckingSession(false), // Allow form to render if timeout
        setSessionChecked(true), // Mark check as complete even on timeout
      }
    }, 5000),

    const checkSessionAndListen = $2;
      setIsCheckingSession($2);
      try {
        logInfo('LoginPage: Calling supabase.auth.getSession()'),
        const { data: { session }, error: sessionError} = await supabase.auth.getSession($2);
        clearTimeout(sessionTimeoutId), // Clear timeout once getSession completes
        if (!mounted) return,

        if (sessionError) {
          logErrorToProduction($2);
          setError(sessionError as any), // Cast to any if type is too strict
        } else {
          logInfo($2);
          setUser(session?.user ?? null)
        }
      } catch (e) {
        if (mounted) {
          logErrorToProduction($2);
          clearTimeout(sessionTimeoutId), // Ensure timeout is cleared on error too
        }
      } finally {
        if (mounted) {
          setIsCheckingSession($2);
          setSessionChecked($2);
          logInfo('LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true')
        }
      }

      // Listener for auth state changes
      logInfo($2);
      const { data: authListener} = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
        if (!mounted) return,
        logInfo($2);
        setUser($2);
        // If auth state changes after initial check, ensure sessionChecked is true
        // This handles cases like login/logout in another tab.
        if (!sessionChecked && event !== "INITIAL_SESSION") {
           setSessionChecked($2);
           logInfo('LoginPage: onAuthStateChange updated sessionChecked to true.')
        }
      }),
      
      return () => { // Cleanup for listener
        logInfo($2);
        authListener?.subscription?.unsubscribe()
      }
    },

    const unsubscribePromise = checkSessionAndListen($2);
    return () => {
      mounted = $2;
      clearTimeout(sessionTimeoutId), // Clear timeout on unmount
      logInfo($2);
      unsubscribePromise.then(cleanup => cleanup && cleanup())
    }
  }, []), // Run only once on mount

  // Effect for handling redirection AFTER session is checked and user state is updated
  useEffect(() => {
    logInfo($2);
    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists
    if (sessionChecked && !isLoading && user) {
      // Get returnTo from query params, decode it if it exists
      let returnTo = '/dashboard', // Default fallback
      
      if (router.query.returnTo && typeof router.query.returnTo === 'string') {
        try {
          returnTo = decodeURIComponent(router.query.returnTo)
        } catch (e) {
          logWarn($2);
          returnTo = $2;
      if (authPages.includes(returnTo) || returnTo.startsWith('/auth/')) {
        returnTo = '/dashboard'
      }
      
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {
        returnTo = '/dashboard'
      }
      
      logInfo($2);
      // Add a small delay to ensure session is fully established
      const redirectTimer = setTimeout(() => {
        // Double-check that we're still logged in before redirecting
        if (user && router.pathname === '/auth/login') {
          logInfo($2);
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
      setError($2);
      return
    }
    
    setIsResendingVerification($2);
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }),
      
      if (response.ok) {
        setVerificationEmailSent($2);
        setError(null)
      } else {
        const data = await response.json($2);
        setError({ name: 'ResendError', message: data.message || 'Failed to resend verification email' } as AuthError)
      }
    } catch (err) {
      setError({ name: 'NetworkError', message: 'Failed to resend verification email. Please try again.' } as AuthError)
    } finally {
      setIsResendingVerification(false)
    }
  },

  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.preventDefault($2);
    if (!proactiveResendEmail) {
      setProactiveResendMessage($2);
      return
    }

    setIsProactivelyResending($2);
    setProactiveResendMessage($2);
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: proactiveResendEmail})
      }),

      const data = await response.json($2);
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
    e.preventDefault($2);
    setIsLoading($2);
    setError($2);
    setIsEmailUnverified($2);
    setVerificationEmailSent($2);
    try {
      logInfo($2);
      const { data, error: signInError} = await supabase.auth.signInWithPassword($2);
      if (signInError) {
        logErrorToProduction($2);
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
                                                 signInError.message?.toLowerCase().includes($2);
        // As per issue description, check for a specific error code "email_not_verified"
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
        const codeIsEmailNotVerified = $2;
        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
          setIsEmailUnverified($2);
          setError($2);
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
          setError({ name: signInError.name || 'AuthApiError', message: displayMessage} as AuthError)
        }
      } else if (data.user) {
        logInfo($2);
        setUser(data.user), // setUser to trigger useEffect for redirection
        // Redirection is now handled by the useEffect hook
      } else {
        // Should not happen if signInError is null and data.user is null
        logWarn($2);
        setError({ name: 'UnknownAuthError', message: 'Login failed due to an unknown error. Please try again.' } as AuthError)
      }
    } catch (catchedError: any) {
      logErrorToProduction($2);
      // Check if the caught error is a network error
      let exceptionMessage = $2;
      if (catchedError.message && catchedError.message.toLowerCase().includes('networkerror when attempting to fetch resource')) {
        exceptionMessage = 'Network error. Please check your internet connection and try again.'
      } else if (catchedError.message) {
        exceptionMessage = catchedError.message
      }
      setError({ name: 'ExceptionError', message: exceptionMessage} as AuthError)
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
    }
    return undefined, // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]),

  // --- Rendering Logic ---

  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {
    logInfo($2);
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
    logInfo($2);
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
  logInfo($2);
  // Defensive check: If router.pathname is not /auth/login, do not render the login form.
  // This is a safeguard against the component's content persisting on other auth routes.
  if (router.pathname !== '/auth/login' && router.pathname !== '/login') {
    logWarn($2);
    return null, // Or a minimal loader/empty div
  }

  return (
    <>
      <Head>
        <title>{`${t('auth.sign_in')} - Zion Tech Marketplace`}</title>
        <meta name = $2;
export default LoginPage,
