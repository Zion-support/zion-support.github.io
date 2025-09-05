
export default function VerifyStatus() {_const _router = useRouter();
  const { user: authUser, _isLoading: authLoading} = useAuth(); // Get user from AuthContext
  const {_email: emailParam} = router.query;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(0);

  useEffect__(() => {_if (typeof emailParam === 'string') {
      setEmail(emailParam);}
  }, [emailParam]);

  // Countdown timer for resend button
  useEffect__(() => {_let interval: NodeJS.Timeout;
    if (countdown > 0) {
      interval = setInterval__(() => {
        setCountdown(prev => prev - 1);}, 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const _handleResendEmail = async () => {_if (!email) {
      setError('Please enter your email address');
      return;}

    setIsResending(true);
    setError('');
    setMessage('');

    try {_const _response = await fetch('/api/resend-verification-email', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_email})
      });

      const _data = await response.json();

      if (response.ok) {_setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());
        setCountdown(60); // 60 second cooldown} else {_setError(data.message || 'Failed to resend verification email');}
    } catch (err) {_setError('Network error. Please try again.');} finally {_setIsResending(false);}
  };

  const _handleCheckStatus = async () => {_if (!email) {
      setError('Please enter your email address');
      return;}

    setIsCheckingStatus(true);
    setError('');
    setMessage('');

    try {_// Attempt to refresh the session to get the latest user status
      const { error: refreshError} = await supabase.auth.refreshSession();

      if (refreshError) {_// Don't treat all refresh errors as critical for this check, _// as user might not have a session yet or it might be invalid.
        logWarn('Error during session refresh:', _{ data: refreshError.message});
      }

      // Get the current user details from Supabase
      const {_data: { user}, error: getUserError } = await supabase.auth.getUser();

      if (getUserError) {_setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`);
        setIsCheckingStatus(false);
        return;
      }

      if (user && user.email_confirmed_at) {_setMessage('Email is verified! Redirecting to login...');
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.
        // But we can also push them to login page directly.
        setTimeout__(() => {
          router.push(`/auth/login?email=${encodeURIComponent(email)}`);
        }, 2000);
      } else if (user) {_setMessage('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, _try logging in.');
        setMessage('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, _please wait a few moments and try again, _or attempt to log in.');
        setError(''); // Clear previous errors} else {_// This case means there's no active user session found by Supabase client.
        // This is expected if they haven't clicked the link from a different browser/device context yet.
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, _please wait a few moments and try again, _or attempt to log in.');
        setError('');}
    } catch (err: unknown) {_logErrorToProduction('Error checking verification status:', _{ data: err});
      setError('An unexpected error occurred while checking status. Please try again.');
    } finally {_setIsCheckingStatus(false);}
  };

  const _handleTryLogin = () => {_router.push(`/auth/login?email=${encodeURIComponent(email)}`);
  };

  const _handleGoBack = () => {_router.back();};

  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {_/* Header */}
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
            <p className="text-sm text-gray-600 mt-2">
              Check and manage your email verification status
            </p>
          </div>

          {_/* Success Message */}
          {_message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          {_/* Error Message */}
          {_error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {_/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={_email}
              onChange={_(_e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full"
            />
            {_email && (
              <p className="text-xs text-gray-500">
                We'll check the verification status for this email address
              </p>
            )}
          </div>

          {_/* Status Info */}
          {_email && (
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

          {_/* Action Buttons */}
          <div className="space-y-3">
            {_/* Check Status Button */}
            <Button
              onClick={_handleCheckStatus}
              disabled={_!email || isCheckingStatus}
              className="w-full"
              variant="outline"
            >
              {_isCheckingStatus ? (
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

            {_/* Resend Email Button */}
            <Button
              onClick={_handleResendEmail}
              disabled={_!email || isResending || countdown > 0}
              className="w-full"
              variant="secondary"
            >
              {_isResending ? (
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

            {_/* Try Login Button */}
            <Button
              onClick={_handleTryLogin}
              disabled={_!email}
              className="w-full"
            >
              Try Login
            </Button>
          </div>

          {_/* Help Text */}
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button
              onClick={_handleGoBack}
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Go Back
            </Button>
          </div>

          {_/* Additional Options */}
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={_() => router.push('/signup')}
              variant="ghost"
              className="w-full text-sm"
            >
              Use Different Email Address
            </Button>
            <Button
              onClick={_() => router.push('/contact')}
              variant="ghost"
              className="w-full text-sm"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
