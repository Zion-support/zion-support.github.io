import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Mail, AlertCircle, CheckCircle } from 'lucide-react';

export default function VerifyStatus() {
  const router = useRouter();
  const { email: emailParam } = router.query;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam);
    }
  }, [emailParam]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">Verify Your Email</h1>
        {email && (
          <p className="text-center text-sm">
            We sent a verification link to <strong>{email}</strong>.
          </p>
        )}
        {message && (
          <div className="border border-green-500 bg-green-50 text-green-900 p-4 rounded-lg">
            <CheckCircle aria-hidden="true" className="h-4 w-4 inline mr-2" />
            {message}
          </div>
          {/* Success Message */}
          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {/* Email Input */}
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
                We'll check the verification status for this email address
              </p>
            )}
          </div>
          {/* Status Info */}
          {email && (
            <div className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Verification Status</h3>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <p>• Check your email inbox for a verification link</p>
                <p>• Click the link in the email to verify your account</p>
                <p>• Return here or try logging in after verification</p>
              </div>
              {lastSentTime && (
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Last email sent: {lastSentTime.toLocaleTimeString()}
                </p>
              )}
            </div>
          )}
          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Check Status Button */}
            <Button
              onClick={handleCheckStatus}
              disabled={!email |isCheckingStatus}
              className="w-full"
              variant="outline">{isCheckingStatus ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Checking Status...
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-2" />
                  Check Verification Status
                </>
              )}
            </Button>
            {/* Resend Email Button */}
            <Button
              onClick={handleResendEmail}
              disabled={!email |isResending |countdown > 0}
              className="w-full"
              variant="secondary">{isResending ? (
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
              )}
            </Button>
            {/* Try Login Button */}
            <Button
              onClick={handleTryLogin}
              disabled={!email}
              className="w-full"
            >
              Try Login
            </Button>
          </div>
          {/* Help Text */}
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
              Go Back
            </Button>
          </div>
          {/* Additional Options */}
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={() => router.push('/signup')}
              variant="ghost"
              className="w-full text-sm"
            >
              Use Different Email Address
            </Button>
            <Button
              onClick={() => router.push('/contact')}
              variant="ghost"
              className="w-full text-sm"
            >
              Contact Support
            </Button>
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
          />
        </div>
        <button
          type="button"
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          onClick={() => router.push('/register')}
        >
          Use Different Email
        </button>
      </div>
    </div>
  );

export default Verifystatus;