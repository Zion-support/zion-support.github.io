<<<<<<< HEAD
<<<<<<< HEAD


=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout',;
=======
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react'
import { AuthLayout } from '@/layout';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger',;
;
export default function VerifyStatus() {
<<<<<<< HEAD

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
      }, 1000)
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

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
<<<<<<< HEAD
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout';

=======


import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus() {

  const router = useRouter()
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext

  const { email: emailParam } = router.query,
=======
import { supabase } from '@/integrations/supabase/client', // Import Supabase client;
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state;
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus(req, res) {
  try {
  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext;
  const { email: emailParam } = router.query;

=======
  const router = useRouter()
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext
  const { email: emailParam } = router.query,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(0);
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
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

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam)
    }
<<<<<<< HEAD
}, [emailParam])
=======
  }, [emailParam]),

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  // Countdown timer for resend button
  useEffect(() => {
    let interval: NodeJS.Timeout,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
<<<<<<< HEAD
    }
    return () => clearInterval(interval)


=======
<<<<<<< HEAD
}
    return () => clearInterval(interval)
  }, [countdown]);
  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return
    }
    setIsResending(true)
    setError('')
    setMessage('')
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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

<<<<<<< HEAD
    try {
      const response = await fetch('/api/resend-verification-email', {
<<<<<<< HEAD

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());

=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
});
      const data = await response.json();
      if (response.ok) {
        setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setCountdown(60), // 60 second cooldown
      } else {
        setError(data.message |'Failed to resend verification email')
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
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout';
<<<<<<< HEAD

import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus() {

  const router = useRouter()
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext
  const { email: emailParam } = router.query
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isResending, setIsResending] = useState(false)
  const [isCheckingStatus, setIsCheckingStatus] = useState(false)
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null)
  const [countdown, setCountdown] = useState(0)
  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam)
    }
  }, [emailParam])
  // Countdown timer for resend button
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [countdown])
  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address')
      return
    }
    setIsResending(true)
    setError('')
    setMessage('')
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email })
      })
      const data = await response.json()
      if (response.ok) {
        setMessage('Verification email sent successfully! Please check your inbox.')
        setLastSentTime(new Date())
        setCountdown(60), // 60 second cooldown
      } else {
        setError(data.message |'Failed to resend verification email')
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
    } catch (err) {
      set_error ('Network error. Please try again.');
    } finally {

      setIsResending (false);

    }
<<<<<<< HEAD


=======
<<<<<<< HEAD
      setError('Please enter your email address');
=======
  }
  const handleCheckStatus = async () => {
    if (!email) {
      setError('Please enter your email address')
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return
    }
    setIsCheckingStatus(true)
    setError('')
    setMessage('')
    try {
      // Attempt to refresh the session to get the latest user status
<<<<<<< HEAD


=======
<<<<<<< HEAD
      const { error: refreshError } = await supabase.auth.refreshSession(),
      if (refreshError) {
        // Don't treat all refresh errors as critical for this check;
=======
      const { error: refreshError } = await supabase.auth.refreshSession()
      if (refreshError) {
        // Don't treat all refresh errors as critical for this check
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  const handleCheckStatus = async () => {
    // Check condition
if ( {) {
  $2
=======
  useEffect(() => {;
    if (typeof emailParam === 'string') {;
      setEmail(emailParam);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [emailParam]),;
  // Countdown timer for resend button;
  useEffect(() => {;
    let interval: NodeJS.Timeout,;
    if (countdown > 0) {;
      interval = setInterval(() => {;
        setCountdown(prev => prev - 1);
      }, 1000);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return () => clearInterval(interval);
  }, [countdown]),;
  const handleResendEmail = async () => {;
    if (!email) {;
      setError('Please enter your email address');
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setIsResending(true);
    setError('');
    setMessage('');

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ email });
      }),;
      const data = await response.json();
      if (response.ok) {;
        setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());
        setCountdown(60), // 60 second cooldown;
      } else {;
        setError(data.message || 'Failed to resend verification email');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
      set_error ('Please enter your email address'),
      return;
    }
    setIsCheckingStatus (true),
    set_error (''),
    set_message (''),
    try {
      // Attempt to refresh the session to get the latest user status;
      const { error: refresh_error } = await supabase.auth.refresh_session (),
      // Check condition
if ( {) {
  $2
}
        // Don't treat all refresh errors as critical for this check,
        // as user might not have a session yet or it might be invalid.;
        log_warn ('Error during session refresh:', { data: refresh_error.message });
      }
      // Get the current user details from Supabase;
      const { data: { user }, error: getUserError } = await supabase.auth.get_user (),
      // Check condition
if ( {) {
  $2
}
        set_error (`Failed to get user status: ${getUserError.message}. Please try logging in directly.`),
        setIsCheckingStatus (false),
        return;
      }
      // Check condition
if ( {) {
  $2
}
        set_message ('Email is verified! Redirecting to login...'),
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.;
        // But we can also push them to login page directly.;
        set_timeout (() => {
          router.push (`/auth / login?email=${encodeURIComponent (email)}`);
        }, 2000);
      } else // Check condition
if ( {) {
  $2
}
        set_message ('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.'),
        set_message ('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.'),
        set_error (''), // Clear previous errors;
      } else {
        // This case means there's no active user session found by Supabase client.;
<<<<<<< HEAD
        // This is expected if they haven't clicked the link from a different browser/device context yet.;
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.');
        setError('');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Error checking verification status:', { data: err });
      setError('An unexpected error occurred while checking status. Please try again.');
    } finally {;
      setIsCheckingStatus(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">

=======
        // This is expected if they haven't clicked the link from a different browser / device context yet.;
        set_message ('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.'),
        set_error ('');
      }
    } catch (err: any) {
      logErrorToProduction ('Error checking verification status:', { data: err }),
      set_error ('An unexpected error occurred while checking status. Please try again.');
    } finally {
      setIsCheckingStatus (false);
    }
<<<<<<< HEAD


=======
  };
  },
  const handleTryLogin = () =>: any {
    router.push (`/auth / login?email=${encodeURIComponent (email)}`);
  },
  const handleGoBack = () =>: any {
    router.back ();
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <AuthLayout>;
      <div className="flex min - h-screen items - center justify - center p - 4">;
        <div className="w - full max - w-md space - y-6">;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          {/* Header */}
<<<<<<< HEAD


          {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
            <p className="text-sm text-gray-600 mt-2">
              Check and manage your email verification status
            </p>
          </div>

<<<<<<< HEAD
=======

          {/* Success Message */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>

<<<<<<< HEAD
=======

          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Error Message */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>

<<<<<<< HEAD
=======

          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Email Input */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="text - center">;
            <div className="mx - auto h - 12 w - 12 bg - blue - 100 rounded - full flex items - center justify - center mb - 4">;
              <Mail className="h - 6 w - 6 text - blue - 600" />;
            </div>;
            <h1 className="text - 2xl font - bold text - gray - 900">Email Verification</h1>;
            <p className="text - sm text - gray - 600 mt - 2">;
              Check and manage your email verification status;
            </p>;
          </div>;
          {/* Success Message */}
          {message && (
            <Alert className="border - green - 500 bg - green - 50 text - green - 900">;
              <CheckCircle className="h - 4 w - 4" />;
              <AlertDescription>{message}</AlertDescription>;
            </Alert>)}
          {/* Error Message */}
          {error && (
            <Alert variant="destructive">;
              <AlertCircle className="h - 4 w - 4" />;
              <AlertDescription>{error}</AlertDescription>;
            </Alert>)}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Email Input */}
          <div className="space - y-2">;
            <label html_for="email" className="block text - sm font - medium text - gray - 700">;
              Email Address;
            </label>;
            <Input;
              id="email";
              type="email";
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              value={email}
              on_change={(e) => set_email (e.target.value)}
              placeholder="Enter your email address";
              className="w - full";
            />;
<<<<<<< HEAD
=======

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              placeholder="Enter your email address"
              className="w-full"
            />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {email && (
=======
            {email && (
              <p className="text - xs text - gray - 500">;
                We'll check the verification status for this email address;
              </p>)}
          </div>;
          {/* Status Info */}
          {email && (
            <div className="bg - blue - 50 dark:bg - slate - 800 border border - blue - 200 dark:border - slate - 700 rounded - lg p - 4">;
              <h3 className="text - sm font - medium text - slate - 900 dark:text - slate - 100 mb - 2">Verification Status</h3>;
              <div className="text - sm text - slate - 700 dark:text - slate - 300 space - y-1">;
                <p>• Check your email inbox for a verification link</p>;
                <p>• Click the link in the email to verify your account</p>;
                <p>• Return here or try logging in after verification</p>;
              </div>;
              {lastSentTime && (
                <p className="text - xs text - slate - 600 dark:text - slate - 400 mt - 2 flex items - center">;
                  <Clock className="h - 3 w - 3 mr - 1" />;
                  Last email sent: {lastSentTime.toLocaleTimeString ()}
                </p>)}
            </div>)}
          {/* Action Buttons */}
          <div className="space - y-3">;
            {/* Check Status Button */}
              disabled={!email || isCheckingStatus}
              className="w-full"
              variant="outline"
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />

    setIsCheckingStatus(true),
    setError(''),
    setMessage(''),

    try {
      // Attempt to refresh the session to get the latest user status
      const { error: refreshError } = await supabase.auth.refreshSession()

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
            </div>
            <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>Email Verification</h1>
            <p className=&quot;text-sm text-gray-600 mt-2&quot;>
              Check and manage your email verification status
            </p>
          </div>

          {/* Success Message */}
          {message && (
            <Alert className=&quot;border-green-500 bg-green-50 text-green-900&quot;>
              <CheckCircle className=&quot;h-4 w-4&quot; />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {error && (
            <Alert variant=&quot;destructive&quot;>
              <AlertCircle className=&quot;h-4 w-4&quot; />
              <AlertDescription>{error}</AlertDescription>
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
              <p className=&quot;text-xs text-gray-500&quot;>
=======
    } finally {
      setIsCheckingStatus(false)
    }
  }
  const handleTryLogin = () => {
    router.push(`/auth/login?email=${encodeURIComponent(email)}`)
  }
  const handleGoBack = () => {
    router.back()
  }

=======
import { supabase } from '@/integrations/supabase/client', // Import Supabase client;
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state;
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
export default function VerifyStatus(req, res) {
  try {
  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext;
  const { email: emailParam } = router.query;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState(0);
  useEffect(() => {;
    if (typeof emailParam === 'string') {;
      setEmail(emailParam);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [emailParam]),;
  // Countdown timer for resend button;
  useEffect(() => {;
    let interval: NodeJS.Timeout,;
    if (countdown > 0) {;
      interval = setInterval(() => {;
        setCountdown(prev => prev - 1);
      }, 1000);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return () => clearInterval(interval);
  }, [countdown]),;
  const handleResendEmail = async () => {;
    if (!email) {;
      setError('Please enter your email address');
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setIsResending(true);
    setError('');
    setMessage('');
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    try {
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ email });
      }),;
      const data = await response.json();
      if (response.ok) {;
        setMessage('Verification email sent successfully! Please check your inbox.');
        setLastSentTime(new Date());
        setCountdown(60), // 60 second cooldown;
      } else {;
        setError(data.message || 'Failed to resend verification email');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {;
      setIsResending(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  const handleCheckStatus = async () => {;
    if (!email) {;
      setError('Please enter your email address');
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setIsCheckingStatus(true);
    setError('');
    setMessage('');
    try {
      // Attempt to refresh the session to get the latest user status;
      const { error: refreshError } = await supabase.auth.refreshSession();
      if (refreshError) {;
        // Don't treat all refresh errors as critical for this check;
        // as user might not have a session yet or it might be invalid.;
        logWarn('Error during session refresh:', { data: refreshError.message });
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      // Get the current user details from Supabase;
      const { data: { user }, error: getUserError } = await supabase.auth.getUser();
      if (getUserError) {;
        setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`);
        setIsCheckingStatus(false);
        return;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      if (user && user.email_confirmed_at) {;
        setMessage('Email is verified! Redirecting to login...');
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.;
        // But we can also push them to login page directly.;
        setTimeout(() => {;
          router.push(`/auth/login?email=${encodeURIComponent(email)}`);
        }, 2000);
      } else if (user) {;
        setMessage('Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.');
        setMessage('Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.');
        setError(''), // Clear previous errors;
      } else {;
        // This case means there's no active user session found by Supabase client.;
        // This is expected if they haven't clicked the link from a different browser/device context yet.;
        setMessage('No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.');
        setError('');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Error checking verification status:', { data: err });
      setError('An unexpected error occurred while checking status. Please try again.');
    } finally {;
      setIsCheckingStatus(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  const handleTryLogin = () => {
    router.push(`/auth/login?email=${encodeURIComponent(email)}`)
  },
  const handleGoBack = () => {
    router.back()
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
<<<<<<< HEAD
          {/* Header */}
=======
          {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
            <p className="text-sm text-gray-600 mt-2">
              Check and manage your email verification status
            </p>
          </div>
<<<<<<< HEAD
          {/* Success Message */}
=======
          {/* Success Message */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
<<<<<<< HEAD
          )}
          {/* Error Message */}
=======
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Error Message */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
<<<<<<< HEAD
          )}
          {/* Email Input */}
=======
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Email Input */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
              value={email}
              onChange={(e) => setEmail(e.target.value)}
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              placeholder="Enter your email address"
              className="w-full"
            />
            {email && (
              <p className="text-xs text-gray-500">
<<<<<<< HEAD
                We'll check the verification status for this email address
              </p>

=======

              <p className="text - xs text - gray - 500">;
                We'll check the verification status for this email address;
              </p>)}
          </div>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                We'll check the verification status for this email address
              </p>
<<<<<<< HEAD
            )}
          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

          {/* Status Info */}
=======

            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          {/* Status Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {email && (
<<<<<<< HEAD

            <div className="bg - blue - 50 dark:bg - slate - 800 border border - blue - 200 dark:border - slate - 700 rounded - lg p - 4">;
              <h3 className="text - sm font - medium text - slate - 900 dark:text - slate - 100 mb - 2">Verification Status</h3>;
              <div className="text - sm text - slate - 700 dark:text - slate - 300 space - y-1">;
                <p>• Check your email inbox for a verification link</p>;
                <p>• Click the link in the email to verify your account</p>;
                <p>• Return here or try logging in after verification</p>;
              </div>;
              {lastSentTime && (
<<<<<<< HEAD
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />

=======

            {/* Check Status Button */}


=======

              disabled={!email || isCheckingStatus}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <div className=&quot;bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4&quot;>
              <h3 className=&quot;text-sm font-medium text-slate-900 dark:text-slate-100 mb-2&quot;>Verification Status</h3>
              <div className=&quot;text-sm text-slate-700 dark:text-slate-300 space-y-1&quot;>
=======
          {/* Status Info */}
=======
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          {/* Status Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {email && (
            <div className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Verification Status</h3>
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <p>• Check your email inbox for a verification link</p>
                <p>• Click the link in the email to verify your account</p>
                <p>• Return here or try logging in after verification</p>
              </div>
              {lastSentTime && (
<<<<<<< HEAD
                <p className=&quot;text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center&quot;>
                  <Clock className=&quot;h-3 w-3 mr-1&quot; />
=======
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  Last email sent: {lastSentTime.toLocaleTimeString()}
                </p>
              )}
            </div>
          )}
<<<<<<< HEAD

          {/* Action Buttons */}
          <div className=&quot;space-y-3&quot;>
            {/* Check Status Button */}
            <Button
              onClick={handleCheckStatus}
              disabled={!email || isCheckingStatus}
              className=&quot;w-full&quot;
              variant=&quot;outline&quot;
            >
              {_isCheckingStatus ? (
                <>
                  <RefreshCw className=&quot;h-4 w-4 mr-2 animate-spin&quot; />

=======
          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Check Status Button */}
            <Button
              onClick={handleCheckStatus}
<<<<<<< HEAD
              disabled={!email |isCheckingStatus}
=======
              disabled={!email || isCheckingStatus}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Last email sent: {lastSentTime.toLocaleTimeString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </p>;
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="space-y-3">
            {/* Check Status Button */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <Button;
              onClick={handleCheckStatus  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              disabled={!email || isCheckingStatus  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="w-full"
              variant="outline"
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Checking Status...
                </>
              ) : (
                <>
<<<<<<< HEAD
                  <Eye className="h-4 w-4 mr-2" />
                  Check Verification Status
                </>

=======
<<<<<<< HEAD
<Eye className="h-4 w-4 mr-2" />
=======
                  <Eye className="h-4 w-4 mr-2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  Check Verification Status
                </>
<<<<<<< HEAD
              )}
            </Button>
<<<<<<< HEAD
{/* Resend Email Button */}
            <Button
              onClick={handleResendEmail}
              disabled={!email || isResending || countdown > 0}
=======
            {/* Resend Email Button */}
            <Button
              onClick={handleResendEmail}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======

=======

              disabled={!email || isResending || countdown > 0}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </Button>;
            {/* Resend Email Button */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <Button;
              onClick={handleResendEmail  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              disabled={!email || isResending || countdown > 0  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                  <Clock className="h-4 w-4 mr-2" />
=======
<<<<<<< HEAD
<Clock className="h-4 w-4 mr-2" />
=======
                  <Clock className="h-4 w-4 mr-2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Resend in {countdown}s
                </>
              ) : (
                <>
<<<<<<< HEAD
                  <Mail className="h-4 w-4 mr-2" />
                  Resend Verification Email
                </>

<<<<<<< HEAD
=======
            <Button;
=======
<<<<<<< HEAD
<Mail className="h-4 w-4 mr-2" />
=======
                  <Mail className="h-4 w-4 mr-2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  Resend Verification Email
                </>
<<<<<<< HEAD
              )}
            </Button>
<<<<<<< HEAD
<Button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Try Login Button */}
            <Button;
              on_click={handleTryLogin}
              disabled={!email}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              className="w-full"
            >
              Try Login
            </Button>
          </div>

<<<<<<< HEAD
=======

          {/* Help Text */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button

<<<<<<< HEAD
=======

              onClick={handleGoBack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Go Back
            </Button>
          </div>

<<<<<<< HEAD
=======

          {/* Additional Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={() => router.push('/signup')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              variant="ghost"
              className="w-full text-sm"
            >
              Use Different Email Address
            </Button>
            <Button

<<<<<<< HEAD
=======

              onClick={() => router.push('/contact')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
=======
}

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </Button>;
            {/* Try Login Button */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <Button;
              onClick={handleTryLogin  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              disabled={!email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className="w-full"
            >
              Try Login
            </Button>
          </div>
<<<<<<< HEAD
          {/* Help Text */}
=======
          {/* Help Text */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button
<<<<<<< HEAD
              onClick={handleGoBack}
=======
              onClick={handleGoBack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Go Back
            </Button>
          </div>
<<<<<<< HEAD
          {/* Additional Options */}
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={() => router.push('/signup')}
=======
          {/* Additional Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={() => router.push('/signup')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              variant="ghost"
              className="w-full text-sm"
            >
              Use Different Email Address
            </Button>
            <Button
<<<<<<< HEAD
              onClick={() => router.push('/contact')}
=======
              onClick={() => router.push('/contact')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
;

=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
