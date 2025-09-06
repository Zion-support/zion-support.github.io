import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye,} from 'lucide-react';
import {Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye} from 'lucide-react'
ursor/integrate-build-improve-and-re-verify-b76c
import {AuthLayout} from '@/layout';
import {supabase} from '@/integrations/supabase/client', // Import Supabase client
import {useAuth} from '@/hooks/useAuth', // Import useAuth to access user state
import {logWarn, logErrorToProduction} from '@/utils/productionLogger';

export default function VerifyStatus() {

  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(); // Get user from AuthContext
  const { email: emailParam } = router.query;
import {Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye} from 'lucide-react'
import {AuthLayout} from '@/layout';
import {supabase} from '@/integrations/supabase/client', // Import Supabase client
import {useAuth} from '@/hooks/useAuth', // Import useAuth to access user state
import {logWarn, logErrorToProduction} from '@/utils/productionLogger';

export default function VerifyStatus() {

  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext
  const { email: emailParam } = router.query,
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext
  const { email: emailParam } = router.query,
ursor/integrate-build-improve-and-re-verify-b76c
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam);
      setEmail(emailParam)
      setEmail(emailParam)
ursor/integrate-build-improve-and-re-verify-b76c
    }
  }, [emailParam]);

  // Countdown timer for resend button
  useEffect(() => {
    let interval: NodeJS.Timeout,
    let interval: NodeJS.Timeout,
ursor/integrate-build-improve-and-re-verify-b76c
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval);
    let interval: NodeJS.Timeout,
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
    return () => clearInterval(interval)
ursor/integrate-build-improve-and-re-verify-b76c
  }, [countdown]);

  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
      return
      return
ursor/integrate-build-improve-and-re-verify-b76c
    }

    setIsResending(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        body: JSON.stringify({ email })
        body: JSON.stringify({ email })
ursor/integrate-build-improve-and-re-verify-b76c
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          'Verification email sent successfully! Please check your inbox.'
        );
        setMessage('Verification email sent successfully! Please check your inbox.');
ursor/integrate-build-improve-and-re-verify-b76c
        setLastSentTime(new Date());
        setCountdown(60), // 60 second cooldown
      } else {
        setError(data.message || 'Failed to resend verification email')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsResending(false);
        setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());
        setCountdown(60), // 60 second cooldown
      } else {
        setError(data.message || 'Failed to resend verification email')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsResending(false)
      setIsResending(false)
ursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const handleCheckStatus = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
      return
      return
ursor/integrate-build-improve-and-re-verify-b76c
    }

    setIsCheckingStatus(true);
    setError('');
    setMessage('');

    try {
      // Attempt to refresh the session to get the latest user status
      const { error: refreshError } = await supabase.auth.refreshSession();

      const { error: refreshError } = await supabase.auth.refreshSession(),
ursor/integrate-build-improve-and-re-verify-b76c
      if (refreshError) {
        // Don't treat all refresh errors as critical for this check;
        // as user might not have a session yet or it might be invalid.
        logWarn('Error during session refresh:', { data: refreshError.message })
      }

      // Get the current user details from Supabase
      const { data: { user }, error: getUserError } = await supabase.auth.getUser(),
      if (getUserError) {
        setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`),
        setIsCheckingStatus(false);
        return;
      const { error: refreshError } = await supabase.auth.refreshSession(),
      if (refreshError) {
        // Don't treat all refresh errors as critical for this check;
        // as user might not have a session yet or it might be invalid.
        logWarn('Error during session refresh:', { data: refreshError.message })
      }

      // Get the current user details from Supabase
      const { data: { user }, error: getUserError } = await supabase.auth.getUser(),
      if (getUserError) {
        setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`),
        setIsCheckingStatus(false);
        return
        return
ursor/integrate-build-improve-and-re-verify-b76c
      }

      if (user && user.email_confirmed_at) {
        setMessage('Email is verified! Redirecting to login...');
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.
        // But we can also push them to login page directly.
        setTimeout(() => {
          router.push(`/auth/login?email=${encodeURIComponent(email)}`);
        }, 2000);
          router.push(`/auth/login?email=${encodeURIComponent(email)}`)
        }, 2000)
ursor/integrate-build-improve-and-re-verify-b76c
      } else if (user) {
        setMessage('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.');
        setMessage('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.');
        setError(''), // Clear previous errors
      } else {
        // This case means there's no active user session found by Supabase client.
        // This is expected if they haven't clicked the link from a different browser/device context yet.
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.');
        setError('')
      }
    } catch (err: any) {
      logErrorToProduction('Error checking verification status:', { data: err }),
      setError('An unexpected error occurred while checking status. Please try again.')
    } finally {
      setIsCheckingStatus(false);
          router.push(`/auth/login?email=${encodeURIComponent(email)}`)
        }, 2000)
      } else if (user) {
        setMessage('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.');
        setMessage('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.');
        setError(''), // Clear previous errors
      } else {
        // This case means there's no active user session found by Supabase client.
        // This is expected if they haven't clicked the link from a different browser/device context yet.
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.');
        setError('')
      }
    } catch (err: any) {
      logErrorToProduction('Error checking verification status:', { data: err }),
      setError('An unexpected error occurred while checking status. Please try again.')
    } finally {
      setIsCheckingStatus(false)
      setIsCheckingStatus(false)
ursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const handleTryLogin = () => {
    router.push(`/auth/login?email=${encodeURIComponent(email)}`);
  };

  const handleGoBack = () => {
    router.back();
    router.push(`/auth/login?email=${encodeURIComponent(email)}`)
  };

  const handleGoBack = () => {
    router.back()
    router.push(`/auth/login?email=${encodeURIComponent(email)}`)
  };

  const handleGoBack = () => {
    router.back()
ursor/integrate-build-improve-and-re-verify-b76c
  };

  return (
    <AuthLayout>
      <div className='flex min-h-screen items-center justify-center p-4'>
        <div className='w-full max-w-md space-y-6'>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
ursor/integrate-build-improve-and-re-verify-b76c
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className='text-2xl font-bold text-gray-900'>
              Email Verification
            </h1>
            <p className='text-sm text-gray-600 mt-2'>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
            <p className="text-sm text-gray-600 mt-2">
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
            <p className="text-sm text-gray-600 mt-2">
ursor/integrate-build-improve-and-re-verify-b76c
              Check and manage your email verification status
            </p>
          </div>

          {/* Success Message */}
          {message && (
            <Alert className='border-green-500 bg-green-50 text-green-900'>
              <CheckCircle className='h-4 w-4' />
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
ursor/integrate-build-improve-and-re-verify-b76c
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {error && (
            <Alert variant='destructive'>
              <AlertCircle className='h-4 w-4' />
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
ursor/integrate-build-improve-and-re-verify-b76c
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Email Input */}
          <div className='space-y-2'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
ursor/integrate-build-improve-and-re-verify-b76c
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full"
            />
            {email && (
              <p className='text-xs text-gray-500'>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full"
            />
            {email && (
              <p className="text-xs text-gray-500">
              <p className="text-xs text-gray-500">
ursor/integrate-build-improve-and-re-verify-b76c
                We'll check the verification status for this email address
              </p>
            )}
          </div>

          {/* Status Info */}
          {email && (
            <div className='bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4'>
              <h3 className='text-sm font-medium text-slate-900 dark:text-slate-100 mb-2'>
                Verification Status
              </h3>
              <div className='text-sm text-slate-700 dark:text-slate-300 space-y-1'>
            <div className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Verification Status</h3>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <div className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Verification Status</h3>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
ursor/integrate-build-improve-and-re-verify-b76c
                <p>• Check your email inbox for a verification link</p>
                <p>• Click the link in the email to verify your account</p>
                <p>• Return here or try logging in after verification</p>
              </div>
              {lastSentTime && (
                <p className='text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center'>
                  <Clock className='h-3 w-3 mr-1' />
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
ursor/integrate-build-improve-and-re-verify-b76c
                  Last email sent: {lastSentTime.toLocaleTimeString()}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className='space-y-3'>
          <div className="space-y-3">
          <div className="space-y-3">
ursor/integrate-build-improve-and-re-verify-b76c
            {/* Check Status Button */}
            <Button
              onClick={handleCheckStatus}
              disabled={!email || isCheckingStatus}
              className='w-full'
              variant='outline'
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className='h-4 w-4 mr-2 animate-spin' />
              className="w-full"
              variant="outline"
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              className="w-full"
              variant="outline"
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
ursor/integrate-build-improve-and-re-verify-b76c
                  Checking Status...
                </>
              ) : (
                <>
                  <Eye className='h-4 w-4 mr-2' />
                  <Eye className="h-4 w-4 mr-2" />
                  <Eye className="h-4 w-4 mr-2" />
ursor/integrate-build-improve-and-re-verify-b76c
                  Check Verification Status
                </>
              )}
            </Button>

            {/* Resend Email Button */}
            <Button
              onClick={handleResendEmail}
              disabled={!email || isResending || countdown > 0}
              className='w-full'
              variant='secondary'
            >
              {isResending ? (
                <>
                  <RefreshCw className='h-4 w-4 mr-2 animate-spin' />
              className="w-full"
              variant="secondary"
            >
              {isResending ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              className="w-full"
              variant="secondary"
            >
              {isResending ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
ursor/integrate-build-improve-and-re-verify-b76c
                  Sending Email...
                </>
              ) : countdown > 0 ? (
                <>
                  <Clock className='h-4 w-4 mr-2' />
                  <Clock className="h-4 w-4 mr-2" />
                  <Clock className="h-4 w-4 mr-2" />
ursor/integrate-build-improve-and-re-verify-b76c
                  Resend in {countdown}s
                </>
              ) : (
                <>
                  <Mail className='h-4 w-4 mr-2' />
                  <Mail className="h-4 w-4 mr-2" />
                  <Mail className="h-4 w-4 mr-2" />
ursor/integrate-build-improve-and-re-verify-b76c
                  Resend Verification Email
                </>
              )}
            </Button>

            {/* Try Login Button */}
            <Button
              onClick={handleTryLogin}
              disabled={!email}
              className='w-full'
              className="w-full"
              className="w-full"
ursor/integrate-build-improve-and-re-verify-b76c
            >
              Try Login
            </Button>
          </div>

          {/* Help Text */}
          <div className='text-center text-sm text-gray-500 space-y-2'>
          <div className="text-center text-sm text-gray-500 space-y-2">
ursor/integrate-build-improve-and-re-verify-b76c
            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button
              onClick={handleGoBack}
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className='h-4 w-4 mr-1' />
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button
              onClick={handleGoBack}
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <ArrowLeft className="h-4 w-4 mr-1" />
ursor/integrate-build-improve-and-re-verify-b76c
              Go Back
            </Button>
          </div>

          {/* Additional Options */}
          <div className='border-t pt-4 space-y-2'>
            <Button
              onClick={() => router.push('/signup')}
              variant='ghost'
              className='w-full text-sm'
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={() => router.push('/signup')}
              variant="ghost"
              className="w-full text-sm"
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={() => router.push('/signup')}
              variant="ghost"
              className="w-full text-sm"
ursor/integrate-build-improve-and-re-verify-b76c
            >
              Use Different Email Address
            </Button>
            <Button
              onClick={() => router.push('/contact')}
              variant='ghost'
              className='w-full text-sm'
              variant="ghost"
              className="w-full text-sm"
              variant="ghost"
              className="w-full text-sm"
ursor/integrate-build-improve-and-re-verify-b76c
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
