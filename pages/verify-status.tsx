import { useState, useEffect } from 'react',
import { useRouter } from 'next/router',
import { Input } from '@/components/ui/input',
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription } from '@/components/ui/alert',
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react'
import { AuthLayout } from '@/layout',
import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger',

export default function VerifyStatus() {

  const router = useRouter(),
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext
  const { email: emailParam } = router.query,
  const [email, setEmail] = useState(''),
  const [message, setMessage] = useState(''),
  const [error, setError] = useState(''),
  const [isResending, setIsResending] = useState(false),
  const [isCheckingStatus, setIsCheckingStatus] = useState(false),
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null),
  const [countdown, setCountdown] = useState(0),

  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam)
    }
  }, [emailParam]),

  // Countdown timer for resend button
  useEffect(() => {
    let interval: NodeJS.Timeout,
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)    }
    return () => clearInterval(interval)
  }, [countdown]),

  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address'),
      return
    }
    setIsResending(true),
    setError(''),
    setMessage(''),

    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }),

      const data = await response.json(),

      if (response.ok) {
        setMessage('Verification email sent successfully! Please check your inbox.'),
        setLastSentTime(new Date()),
        setCountdown(60), // 60 second cooldown
      } else {
        setError(data.message || 'Failed to resend verification email')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsResending(false)
    }
  },

  const handleCheckStatus = async () => {
    if (!email) {
      setError('Please enter your email address'),
      return
    }
    setIsCheckingStatus(true),
    setError(''),
    setMessage(''),

    try {
      // Attempt to refresh the session to get the latest user status
      const { error: refreshError } = await supabase.auth.refreshSession(),

      if (refreshError) {
        // Don't treat all refresh errors as critical for this check,
        // as user might not have a session yet or it might be invalid.
        logWarn('Error during session refresh:', { data: refreshError.message })
      }

      // Get the current user details from Supabase
      const { data: { user }, error: getUserError } = await supabase.auth.getUser(),

      if (getUserError) {
        setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`),
        setIsCheckingStatus(false),
        return
      }

      if (user && user.email_confirmed_at) {
        setMessage('Email is verified! Redirecting to login...'),
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.
        // But we can also push them to login page directly.
        setTimeout(() => {
          router.push(`/auth/login?email=${encodeURIComponent(email)}`)
        }, 2000)
      } else if (user) {
        setMessage('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.'),
        setMessage('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.'),
        setError(''), // Clear previous errors
      } else {
        // This case means there's no active user session found by Supabase client.
        // This is expected if they haven't clicked the link from a different browser/device context yet.
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.'),
        setError('')
      }
    } catch (err: any) {
      logErrorToProduction('Error checking verification status:', { data: err }),
      setError('An unexpected error occurred while checking status. Please try again.')
    } finally {
      setIsCheckingStatus(false)
    }
  },

  const handleTryLogin = () => {
    router.push(`/auth/login?email=${encodeURIComponent(email)}`)
  },

  const handleGoBack = () => {
    router.back()
  },

  return (
    <AuthLayout>
      <div className=&quot;flex min-h-screen items-center justify-center p-4&quot;>
        <div className=&quot;w-full max-w-md space-y-6&quot;>
          {/* Header */}
          <div className=&quot;text-center&quot;>
            <div className=&quot;mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4&quot;>
              <Mail className=&quot;h-6 w-6 text-blue-600&quot; />            </div>
            <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>Email Verification</h1>
            <p className=&quot;text-sm text-gray-600 mt-2&quot;>
              Check and manage your email verification status
            </p>
          </div>

          {/* Success Message */}
          {message && (
            <Alert className=&quot;border-green-500 bg-green-50 text-green-900&quot;>
              <CheckCircle className=&quot;h-4 w-4&quot; />              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {error && (
            <Alert variant=&quot;destructive&quot;>
              <AlertCircle className=&quot;h-4 w-4&quot; />              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Email Input */}
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-gray-700&quot;>
              Email Address
            </label>
            <Input
              id=&quot;email&quot;
              type=&quot;email&quot;
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=&quot;Enter your email address&quot;
              className=&quot;w-full&quot;
            />
            {email && (
              <p className=&quot;text-xs text-gray-500&quot;>                We'll check the verification status for this email address
              </p>
            )}
          </div>

          {/* Status Info */}
          {email && (
            <div className=&quot;bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4&quot;>
              <h3 className=&quot;text-sm font-medium text-slate-900 dark:text-slate-100 mb-2&quot;>Verification Status</h3>
              <div className=&quot;text-sm text-slate-700 dark:text-slate-300 space-y-1&quot;>                <p>• Check your email inbox for a verification link</p>
                <p>• Click the link in the email to verify your account</p>
                <p>• Return here or try logging in after verification</p>
              </div>
              {lastSentTime && (
                <p className=&quot;text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center&quot;>
                  <Clock className=&quot;h-3 w-3 mr-1&quot; />
                  Last email sent: {lastSentTime.toLocaleTimeString()}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className=&quot;space-y-3&quot;>
            {/* Check Status Button */}
            <Button
              onClick={handleCheckStatus}
              disabled={!email || isCheckingStatus}
              className=&quot;w-full&quot;
              variant=&quot;outline&quot;            >
              {_isCheckingStatus ? (
                <>
                  <RefreshCw className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
                  Checking Status...
                </>
              ) : (
                <>
                  <Eye className=&quot;h-4 w-4 mr-2&quot; />
                  Check Verification Status
                </>
              )}
            </Button>

            {_/* Resend Email Button */}
            <Button
              onClick={handleResendEmail}
              disabled={!email || isResending || countdown > 0}
              className=&quot;w-full&quot;
              variant=&quot;secondary&quot;            >
              {_isResending ? (
                <>
                  <RefreshCw className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
                  Sending Email...
                </>
              ) : countdown > 0 ? (
                <>
                  <Clock className=&quot;h-4 w-4 mr-2&quot; />
                  Resend in {countdown}s
                </>
              ) : (
                <>
                  <Mail className=&quot;h-4 w-4 mr-2&quot; />
                  Resend Verification Email
                </>
              )}
            </Button>

            {_/* Try Login Button */}
            <Button
              onClick={handleTryLogin}
              disabled={!email}
              className=&quot;w-full&quot;            >
              Try Login
            </Button>
          </div>

          {/* Help Text */}
          <div className=&quot;text-center text-sm text-gray-500 space-y-2&quot;>            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button
              onClick={handleGoBack}
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              className=&quot;text-blue-600 hover:text-blue-500&quot;            >
              <ArrowLeft className=&quot;h-4 w-4 mr-1&quot; />
              Go Back
            </Button>
          </div>

          {/* Additional Options */}
          <div className=&quot;border-t pt-4 space-y-2&quot;>
            <Button
              onClick={() => router.push('/signup')}
              variant=&quot;ghost&quot;
              className=&quot;w-full text-sm&quot;            >
              Use Different Email Address
            </Button>
            <Button
              onClick={() => router.push('/contact')}
              variant=&quot;ghost&quot;
              className=&quot;w-full text-sm&quot;            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
