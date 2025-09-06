import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react'
import { AuthLayout } from '@/layout';
import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus() {

  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam)
    }
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
      return
    }
    setIsResending(true)
    setError('')
    setMessage('')
import { useState, useEffect } from 'react',
import { use_router } from 'next / router',
import { Input } from '@/components / ui / input',
import { Button } from '@/components / ui / button',
import { Alert, AlertDescription } from '@/components / ui / alert',
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout',
import { supabase } from '@/integrations / supabase / client', // Import Supabase client;
import { use_auth } from '@/hooks / use_auth', // Import use_auth to access user state;
import { log_warn, logErrorToProduction } from '@/utils / production_logger',
;
export default /**
 * VerifyStatus - Function description
 */
function VerifyStatus() {
  const router = use_router (),
  const { user: auth_user, is_loading: auth_loading } = use_auth (), // Get user from AuthContext;
  const { email: email_param } = router.query,
  const [email, set_email] = useState (''),
  const [message, set_message] = useState (''),
  const [error, set_error] = useState (''),
  const [is_resending, setIsResending] = useState (false),
  const [isCheckingStatus, setIsCheckingStatus] = useState (false),
  const [lastSentTime, setLastSentTime] = useState < Date | null>(null),
  const [countdown, set_countdown] = useState (0),
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      set_email (email_param);
    }
  }, [email_param]),
  // Countdown timer for resend button;
  useEffect (() => {
    let interval: NodeJS.Timeout,
    // Check condition
if ( {) {
  $2
}
      interval = set_interval (() => {
        set_countdown (prev => prev - 1);
      }, 1000);
    }
    return () => clear_interval (interval);
  }, [countdown]),
  const handleResendEmail = async () => {
    // Check condition
if ( {) {
  $2
}
      set_error ('Please enter your email address'),
      return;
    }
    setIsResending (true),
    set_error (''),
    set_message (''),
    try {
      const response = await fetch ('/api / resend - verification - email', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email });
      }),
      const data = await response.json (),
      // Check condition
if ( {) {
  $2
}
        set_message ('Verification email sent successfully! Please check your inbox.'),
        setLastSentTime (new Date ()),
        set_countdown (60), // 60 second cooldown;
      } else {
        set_error (data.message || 'Failed to resend verification email');
      }
    } catch (err) {
      set_error ('Network error. Please try again.');
    } finally {
      return
    }
    setIsCheckingStatus(true)
    setError('')
    setMessage('')
    try {
      // Attempt to refresh the session to get the latest user status
        // as user might not have a session yet or it might be invalid.
        logWarn('Error during session refresh:', { data: refreshError.message })
      }
      // Get the current user details from Supabase
      const { data: { user }, error: getUserError } = await supabase.auth.getUser()
      if (getUserError) {
        setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`)
        setIsCheckingStatus(false)
        return
      }
      if (user && user.email_confirmed_at) {
        setMessage('Email is verified! Redirecting to login...')
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.
        // But we can also push them to login page directly.
        setTimeout(() => {
          router.push(`/auth/login?email=${encodeURIComponent(email)}`)
        }, 2000)
      } else if (user) {
        setMessage('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.')
        setMessage('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.')
        setError(''), // Clear previous errors
      } else {
        // This case means there's no active user session found by Supabase client.
        // This is expected if they haven't clicked the link from a different browser/device context yet.
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.')
        setError('')
      }
    } catch (err: any) {
      logErrorToProduction('Error checking verification status:', { data: err })
      setError('An unexpected error occurred while checking status. Please try again.')
  return (
    <AuthLayout>;
      <div className="flex min - h-screen items - center justify - center p - 4">;
        <div className="w - full max - w-md space - y-6">;
          {/* Header */}
          {/* Email Input */}
          <div className="space - y-2">;
            <label html_for="email" className="block text - sm font - medium text - gray - 700">;
              Email Address;
            </label>;
            <Input;
              id="email";
              type="email";
              value={email}
              on_change={(e) => set_email (e.target.value)}
              placeholder="Enter your email address";
              className="w - full";
            />;
            {/* Check Status Button */}
              className="w-full"
              variant="outline"
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Checking Status...
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-2" />
                  Check Verification Status
                </>
              className="w-full"
              variant="secondary"
            >
              {isResending ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Sending Email...
                </>
              ) : countdown > 0 ? (
                <>
                  <Clock className="h-4 w-4 mr-2" />
                  Resend in {countdown}s
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  Resend Verification Email
                </>
            <Button;
              on_click={handleCheckStatus}
              disabled={!email || isCheckingStatus}
              className="w - full";
              variant="outline";
            >;
              {isCheckingStatus ? (
                <>;
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  Checking Status...;
                </>) : (
                <>;
                  <Eye className="h - 4 w - 4 mr - 2" />;
                  Check Verification Status;
                </>)}
            </Button>;
            {/* Resend Email Button */}
            <Button;
              on_click={handleResendEmail}
              disabled={!email || is_resending || countdown > 0}
              className="w - full";
              variant="secondary";
            >;
              {is_resending ? (
                <>;
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  Sending Email...;
                </>) : countdown > 0 ? (
                <>;
                  <Clock className="h - 4 w - 4 mr - 2" />;
                  Resend in {countdown}s;
                </>) : (
                <>;
                  <Mail className="h - 4 w - 4 mr - 2" />;
                  Resend Verification Email;
                </>)}
            </Button>;
            {/* Try Login Button */}
            <Button;
              on_click={handleTryLogin}
              disabled={!email}
              className="w-full"
            >
              Try Login
            </Button>
          </div>
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Go Back
            </Button>
          </div>
              variant="ghost"
              className="w-full text-sm"
            >
              Use Different Email Address
            </Button>
            <Button
              variant="ghost"
              className="w-full text-sm"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
              className="w - full";
            >;
              Try Login;
            </Button>;
          </div>;
          {/* Help Text */}
          <div className="text - center text - sm text - gray - 500 space - y-2">;
            <p>;
              Can't find the verification email? Check your spam folder or try a different email address.;
            </p>;
            <Button;
              on_click={handleGoBack}
              variant="ghost";
              size="sm";
              className="text - blue - 600 hover:text - blue - 500";
            >;
              <ArrowLeft className="h - 4 w - 4 mr - 1" />;
              Go Back;
            </Button>;
          </div>;
          {/* Additional Options */}
          <div className="border - t pt - 4 space - y-2">;
            <Button;
              on_click={() => router.push ('/signup')}
              variant="ghost";
              className="w - full text - sm";
            >;
              Use Different Email Address;
            </Button>;
            <Button;
              on_click={() => router.push ('/contact')}
              variant="ghost";
              className="w - full text - sm";
            >;
              Contact Support;
            </Button>;
          </div>;
        </div>;
      </div>;
    </AuthLayout>);
}
