import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout',;

import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger',;
;
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

      setEmail(emailParam)
    }

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus() {

  const router = useRouter()
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext

  const { email: emailParam } = router.query,

    }
    return () => clearInterval(interval)
  }, [countdown]),

  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address'),
      return
    }

    }
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
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());

        setCountdown(60), // 60 second cooldown
      } else {
        setError(data.message |'Failed to resend verification email')

  // Countdown timer for resend button;
  useEffect(() => {}
    let interval: NodeJS.Timeout,
    if (countdown > 0) {}
      interval = setInterval(() => {}
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [countdown]),

  const handleResendEmail = async () => {}
    if (!email) {'
      setError('Please enter your email address'),
      return;
    }

    }
  }, [emailParam]),

  // Countdown timer for resend button
  useEffect(() => {

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }

'
import { supabase } from '@/integrations/supabase/client', // Import Supabase client'
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus() {}
  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext;
  const { email: emailParam } = router.query,
'
import { supabase } from '@/integrations/supabase/client', // Import Supabase client;'
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state;'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus(req, res) {}
  try {};
  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext;
  const { email: emailParam } = router.query;
'
  const [email, setEmail] = useState('');'
  const [message, setMessage] = useState('');'
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(0);

    if (countdown > 0) {}
      interval = setInterval(() => {}
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)

    }
    setIsResending(true)'
    setError('')'
    setMessage('')

    }
    return () => clearInterval(interval)
  }, [countdown]),

  const handleResendEmail = async () => {}
    if (!email) {'
      setError('Please enter your email address'),
      return;
    }

      }
    } catch (err) {
      set_error ('Network error. Please try again.');
    } finally {

    setIsResending(true),'
    setError(''),'
    setMessage(''),

'
import { useState, useEffect } from 'react';'
import { useRouter } from 'next/router';'
import { Input } from '@/components/ui/input';'
import { Button } from '@/components/ui/button';'
import { Alert, AlertDescription } from '@/components/ui/alert';

'
import { supabase } from '@/integrations/supabase/client', // Import Supabase client'
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus() {}
  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext;
  const { email: emailParam } = router.query,'
import { supabase } from '@/integrations/supabase/client', // Import Supabase client;'
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state;'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus(req, res) {}
  try {};
  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext;
  const { email: emailParam } = router.query;
'
  const [email, setEmail] = useState('');'
  const [message, setMessage] = useState('');'
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(0);

    if (countdown > 0) {}
      interval = setInterval(() => {}
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)

      return;
    }
    setIsResending(true)'
    setError('')'
    setMessage('')

      }
    } catch (err) {'
      set_error ('Network error. Please try again.');
    } finally {}
      setIsResending (false);

    }

      return

    }
    setIsCheckingStatus(true)'
    setError('')'
    setMessage('')

        // as user might not have a session yet or it might be invalid.

        logWarn('Error during session refresh:', { data: refreshError.message })
      }
      // Get the current user details from Supabase;
      const { data: { user }, error: getUserError } = await supabase.auth.getUser()
      if (getUserError) {}
        setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`)
        setIsCheckingStatus(false)

        // as user might not have a session yet or it might be invalid.
        logWarn('Error during session refresh:', {
          data: refreshError.message,
        });
      }

      // Get the current user details from Supabase
      const {
        data: { user },
        error: getUserError,
      } = await supabase.auth.getUser();

      if (getUserError) {
        setError(
          `Failed to get user status: ${getUserError.message}. Please try logging in directly.`
        );
        setIsCheckingStatus(false);
        return;

      }
      if (user && user.email_confirmed_at) {'
        setMessage('Email is verified! Redirecting to login...')
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.
        // But we can also push them to login page directly.

          router.push(`/auth/login?email=${encodeURIComponent(email)}`)
        }, 2000)
      } else if (user) {'
        setMessage('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.')'
        setMessage('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.')'
        setError(''), // Clear previous errors;
      } else {'
        // This case means there's no active user session found by Supabase client.'
        // This is expected if they haven't clicked the link from a different browser/device context yet.'
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.')'
        setError('')
      }
    } catch (err: any) {'
      logErrorToProduction('Error checking verification status:', { data: err })'
      setError('An unexpected error occurred while checking status. Please try again.')

    try {
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;

        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ email });
      }),;
      const data = await response.json();
      if (response.ok) {;'
        setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());
        setCountdown(60), // 60 second cooldown;
      } else {;'
        setError(data.message || 'Failed to resend verification email');

    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }

}'
      set_error ('Please enter your email address'),
      return;
    }

          {/* Header */}

          {/* Header */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">

              <Mail className="h-6 w-6 text-blue-600" />
            </div>"
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>"
            <p className="text-sm text-gray-600 mt-2">
              Check and manage your email verification status;
            </p>
          </div>

          {/* Success Message */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">

              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          {error && ("
            <Alert variant="destructive">"
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>

          )  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Email Input */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"

              Email Address;
            </label>
            <Input"
              id="email""
              type="email"

              value={email}
              on_change={(e) => set_email (e.target.value)}"
              placeholder="Enter your email address";"
              className="w - full";
            />;

              Email Address
            </label>
            <Input
              id='email'
              type='email'
              value={email}

    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setEmail(e.target.value)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

            {email && (
"
              <p className="text - xs text - gray - 500">;'
                We'll check the verification status for this email address;
              </p>)}
          </div>;

          {/* Status Info */}

            />
            {email && (
              <p className='text-xs text-gray-500'>
                We'll check the verification status for this email address
              </p>
            )}
          </div>
          {/* Status Info */}

            )  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          {/* Status Info */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

          {email && (
            <div className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Verification Status</h3>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">

                <p>• Check your email inbox for a verification link</p>
                <p>• Click the link in the email to verify your account</p>
                <p>• Return here or try logging in after verification</p>
              </div>
              {lastSentTime && (

                  Last email sent: {lastSentTime.toLocaleTimeString()}
                </p>
              )}
            </div>
          )}

          {email && (

                  Last email sent: {lastSentTime.toLocaleTimeString()}
                </p>
              )}
            </div>
          )}
          {/* Action Buttons */}

              disabled={!email |isCheckingStatus}
              disabled={!email || isCheckingStatus}

                  Last email sent: {lastSentTime.toLocaleTimeString()  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
                </p>;
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Action Buttons */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
          <div className="space-y-3">
            {/* Check Status Button */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <Button;
              onClick={handleCheckStatus  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              disabled={!email || isCheckingStatus  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

              className="w-full"

              variant="outline"
            >
              {isCheckingStatus ? (
                <>"
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />

            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className='h-4 w-4 mr-2 animate-spin' />

                  Checking Status...
                </>
              ) : (

                  Check Verification Status
                </>

              disabled={!email || isResending || countdown > 0}

              )  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
            </Button>;
            {/* Resend Email Button */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <Button;
              onClick={handleResendEmail  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              disabled={!email || isResending || countdown > 0  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

              className="w-full"

              variant="secondary"
            >
              {isResending ? (
                <>"
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />

            >
              {isResending ? (
                <>
                  <RefreshCw className='h-4 w-4 mr-2 animate-spin' />

                  Sending Email...
                </>
              ) : countdown > 0 ? (

                  Resend in {countdown}s
                </>
              ) : (
                <>

              on_click={handleCheckStatus}
              disabled={!email || isCheckingStatus}"
              className="w - full";"
              variant="outline";
            >;
              {isCheckingStatus ? (
                <>;"
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  Checking Status...;
                </>) : (
                <>;"
                  <Eye className="h - 4 w - 4 mr - 2" />;
                  Check Verification Status;
                </>)}
            </Button>;
            {/* Resend Email Button */}
            <Button;
              on_click={handleResendEmail}
              disabled={!email || is_resending || countdown > 0}"
              className="w - full";"
              variant="secondary";
            >;
              {is_resending ? (
                <>;"
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  Sending Email...;
                </>) : countdown > 0 ? (
                <>;"
                  <Clock className="h - 4 w - 4 mr - 2" />;
                  Resend in {countdown}s;
                </>) : (
                <>;"
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
              Try Login;
            </Button>
          </div>

          {/* Help Text */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>'
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>

              variant="ghost"
              size="sm"

              className="text-blue-600 hover:text-blue-500"
            >"
              <ArrowLeft className="h-4 w-4 mr-1" />

            <p>
              Can't find the verification email? Check your spam folder or try a
              different email address.
            </p>
            <Button

            >
              <ArrowLeft className='h-4 w-4 mr-1' />

              Go Back
            </Button>
          </div>

              variant="ghost"

              className="w-full text-sm"

            >
              Use Different Email Address;
            </Button>

              variant="ghost"

              className="w-full text-sm"

            >
              Contact Support;
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>

};

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}