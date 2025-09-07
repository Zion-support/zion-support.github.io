<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout',;
<<<<<<< HEAD
=======
=======
import {
  Mail,
  AlertCircle,
  CheckCircle,
  Clock,
  RefreshCw,
  ArrowLeft,
  Eye,;
} from 'lucide-react';
import { AuthLayout } from '@/layout';
import { supabase } from '@/integrations/supabase/client'; // Import Supabase client
import { useAuth } from '@/hooks/useAuth'; // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';

export default function VerifyStatus() {
  const router = useRouter();
  const { user: authUser, isLoading: authLoading } = useAuth(); // Get user from AuthContext
  const { email: emailParam } = router.query;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { supabase } from '@/integrations/supabase/client', // Import Supabase client
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state
import { logWarn, logErrorToProduction } from '@/utils/productionLogger',;
;
export default function VerifyStatus() {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const router = useRouter(),
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext
  const { email: emailParam } = router.query,
  const [email, setEmail] = useState(''),
  const [message, setMessage] = useState(''),
=======

import { useState, useEffect } from 'react',;'
import { useRouter } from 'next/router',;'
import { Input } from '@/components/ui/input',;'
import { Button } from '@/components/ui/button',;'
import { Alert, AlertDescription } from '@/components/ui/alert',;'
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';'
import { AuthLayout } from '@/layout',;'
import { supabase } from '@/integrations/supabase/client', // Import Supabase client'
import { useAuth } from '@/hooks/useAuth', // Import useAuth to access user state';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger',;
;
export default function VerifyStatus() {}
  const router = useRouter(),;
  const { user: authUser, isLoading: authLoading } = useAuth(), // Get user from AuthContext;
  const { email: emailParam } = router.query,'
  const [email, setEmail] = useState(''),'
  const [message, setMessage] = useState(''),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [error, setError] = useState(''),
  const [isResending, setIsResending] = useState(false),
  const [isCheckingStatus, setIsCheckingStatus] = useState(false),
  const [lastSentTime, setLastSentTime] = useState<Date | null>(null),
  const [countdown, setCountdown] = useState(0),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  useEffect(() => {
    if (typeof emailParam === 'string') {
=======
  useEffect(() => {'
    if (typeof emailParam === 'string') {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setEmail(emailParam)
    }

<<<<<<< HEAD
  // Countdown timer for resend button
  useEffect(() => {
    let interval: NodeJS.Timeout,
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)

=======
  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address'),
      return
    }

    setIsResending(true),
    setError(''),
    setMessage(''),

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
    return () => clearInterval(interval)
  }, [countdown]),

  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address'),
      return
    }
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    setIsResending(true),
    setError(''),
    setMessage(''),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout';

=======
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam)
=======
  const router = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    }
  }, [emailParam]),

  // Countdown timer for resend button
  useEffect(() => {
<<<<<<< HEAD
    let interval: NodeJS.Timeout,
=======
let interval: NodeJS.Timeout;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
<<<<<<< HEAD
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout';
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    setIsResending(true),'
    setError(''),'
    setMessage(''),

'
import { useState, useEffect } from 'react';'
import { useRouter } from 'next/router';'
import { Input } from '@/components/ui/input';'
import { Button } from '@/components/ui/button';'
import { Alert, AlertDescription } from '@/components/ui/alert';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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


<<<<<<< HEAD
      return
<<<<<<< HEAD
=======
=======
    return () => clearInterval(interval);
  }, [countdown]);

  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address');
return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
    } catch (err) {
      set_error ('Network error. Please try again.');
    } finally {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return
=======
      return
=======
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
setMessage(
          'Verification email sent successfully! Please check your inbox.'
        );
        setLastSentTime(new Date());
        setCountdown(60); // 60 second cooldown
      } else {
        setError(data.message || 'Failed to resend verification email');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsResending(false);
    }
  }
  const handleCheckStatus = async () => {
    if (!email) {
      setError('Please enter your email address');
return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
    setIsCheckingStatus(true)'
    setError('')'
    setMessage('')
<<<<<<< HEAD
    try {
      // Attempt to refresh the session to get the latest user status
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        // as user might not have a session yet or it might be invalid.
=======
    try {}
      // Attempt to refresh the session to get the latest user status;
        // as user might not have a session yet or it might be invalid.'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        logWarn('Error during session refresh:', { data: refreshError.message })
      }
      // Get the current user details from Supabase;
      const { data: { user }, error: getUserError } = await supabase.auth.getUser()
      if (getUserError) {}
        setError(`Failed to get user status: ${getUserError.message}. Please try logging in directly.`)
        setIsCheckingStatus(false)
<<<<<<< HEAD
        return
=======
const { error: refreshError } = await supabase.auth.refreshSession();

      if (refreshError) {
        // Don't treat all refresh errors as critical for this check,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
      if (user && user.email_confirmed_at) {'
        setMessage('Email is verified! Redirecting to login...')
        // The onAuthStateChange listener in AuthProvider should ideally handle redirection.
        // But we can also push them to login page directly.
<<<<<<< HEAD
        setTimeout(() => {
<<<<<<< HEAD
=======
        setTimeout(() => {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
  },
  const handleCheckStatus = async () => {
    // Check condition
if ( {) {
  $2
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
router.push(`/auth/login?email=${encodeURIComponent(email)}`);
        }, 2000);
      } else if (user) {
        setMessage(
          'Email is not yet verified. Please check your inbox for the verification link and click it. If you have already clicked it, try logging in.'
        );
        setMessage(
          'Email is not yet verified. Please check your inbox for the verification link. If you have just clicked it, please wait a few moments and try again, or attempt to log in.'
        );
        setError(''); // Clear previous errors
      } else {
        // This case means there's no active user session found by Supabase client.
        // This is expected if they haven't clicked the link from a different browser/device context yet.
        setMessage(
          'No active session found. Please click the verification link in your email. If you have just done so, please wait a few moments and try again, or attempt to log in.'
        );
        setError('');
      }
    } catch (err: any) {
<<<<<<< HEAD
      logErrorToProduction('Error checking verification status:', { data: err })
      setError('An unexpected error occurred while checking status. Please try again.')
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {;
=======
  useEffect(() => {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (typeof emailParam === 'string') {;
      setEmail(emailParam);
      } catch (error) {}
    console.error("Error:", error);"
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
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return () => clearInterval(interval);
  }, [countdown]),;
  const handleResendEmail = async () => {;
    if (!email) {;'
      setError('Please enter your email address');
      return;
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setIsResending(true);'
    setError('');'
    setMessage('');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    try {
      const response = await fetch('/api/resend-verification-email', {;
        method: 'POST',;
=======
    try {'
      const response = await fetch('/api/resend-verification-email', {;'
        method: 'POST',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
        } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
=======
        } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }

}'
      set_error ('Please enter your email address'),
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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


  return (
    <AuthLayout>;
      <div className="flex min - h-screen items - center justify - center p - 4">;
        <div className="w - full max - w-md space - y-6">;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
      logErrorToProduction('Error checking verification status:', {
        data: err,
      });
      setError(
        'An unexpected error occurred while checking status. Please try again.'
      );
    } finally {
      setIsCheckingStatus(false);
    }
  }
  const handleTryLogin = () => {
router.push(`/auth/login?email=${encodeURIComponent(email)}`);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <AuthLayout>
<div className='flex min-h-screen items-center justify-center p-4'>
        <div className='w-full max-w-md space-y-6'>
          {/* Header */}
          <div className='text-center'>
            <div className='mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
              <Mail className='h-6 w-6 text-blue-600' />
            </div>
            <h1 className='text-2xl font-bold text-gray-900'>
              Email Verification
            </h1>
            <p className='text-sm text-gray-600 mt-2'>
  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {/* Header */}


          {/* Header */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
=======
}"
          <div className="text-center">"
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Mail className="h-6 w-6 text-blue-600" />
            </div>"
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>"
            <p className="text-sm text-gray-600 mt-2">
              Check and manage your email verification status;
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {/* Success Message */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
=======

          {/* Success Message */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


          {message && ("
            <Alert className="border-green-500 bg-green-50 text-green-900">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          {error && ("
            <Alert variant="destructive">"
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
<<<<<<< HEAD
=======
          {message && (
<Alert className='border-green-500 bg-green-50 text-green-900'>
              <CheckCircle className='h-4 w-4' />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          {error && (
<Alert variant='destructive'>
              <AlertCircle className='h-4 w-4' />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          )  } catch (error) {
    console.error("Error:", error);
=======
          )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Email Input */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
<<<<<<< HEAD

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

  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">

          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
            <p className="text-sm text-gray-600 mt-2">
              Check and manage your email verification status
            </p>
          </div>

          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
              value={email}
=======

=======
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

          {/* Email Input */}
          <div className="space - y-2">;
            <label html_for="email" className="block text - sm font - medium text - gray - 700">;
=======

"
          <div className="space-y-2">"
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
=======
          )}
          {/* Email Input */}
<div className='space-y-2'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              Email Address
            </label>
            <Input
              id='email'
              type='email'
              value={email}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              value={email  } catch (error) {
    console.error("Error:", error);
=======


              value={email  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setEmail(e.target.value)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              placeholder="Enter your email address"
              className="w-full"
            />
            {email && (
              <p className="text-xs text-gray-500">

                We'll check the verification status for this email address
              </p>
<<<<<<< HEAD
=======
            )}
          </div>
          {/* Status Info */}
=======
=======
"
              placeholder="Enter your email address""
              className="w-full"
            />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

            {email && (
"
              <p className="text - xs text - gray - 500">;'
                We'll check the verification status for this email address;
              </p>)}
          </div>;

          {/* Status Info */}

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              placeholder="Enter your email address"
              className="w-full"
=======
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className='w-full'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            />
            {email && (
              <p className='text-xs text-gray-500'>
                We'll check the verification status for this email address
              </p>
            )}
          </div>
          {/* Status Info */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            )  } catch (error) {
    console.error("Error:", error);
=======


            )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          {/* Status Info */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          {email && (
=======
          {email && (
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

            <div className="bg - blue - 50 dark:bg - slate - 800 border border - blue - 200 dark:border - slate - 700 rounded - lg p - 4">;
              <h3 className="text - sm font - medium text - slate - 900 dark:text - slate - 100 mb - 2">Verification Status</h3>;
=======



          {email && (
"
            <div className="bg - blue - 50 dark:bg - slate - 800 border border - blue - 200 dark:border - slate - 700 rounded - lg p - 4">;"
              <h3 className="text - sm font - medium text - slate - 900 dark:text - slate - 100 mb - 2">Verification Status</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className="text - sm text - slate - 700 dark:text - slate - 300 space - y-1">;
                <p>• Check your email inbox for a verification link</p>;
                <p>• Click the link in the email to verify your account</p>;
                <p>• Return here or try logging in after verification</p>;
              </div>;
<<<<<<< HEAD
              {lastSentTime && (
<<<<<<< HEAD
<<<<<<< HEAD
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
=======
=======
<div className='bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-lg p-4'>
              <h3 className='text-sm font-medium text-slate-900 dark:text-slate-100 mb-2'>
                Verification Status
              </h3>
              <div className='text-sm text-slate-700 dark:text-slate-300 space-y-1'>
                <p>• Check your email inbox for a verification link</p>
                <p>• Click the link in the email to verify your account</p>
                <p>• Return here or try logging in after verification</p>
              </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              {lastSentTime && (
<p className='text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center'>
                  <Clock className='h-3 w-3 mr-1' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Last email sent: {lastSentTime.toLocaleTimeString()}
                </p>
              )}
            </div>
          )}
          {/* Action Buttons */}
<<<<<<< HEAD
          <div className="space-y-3">
            {/* Check Status Button */}
<<<<<<< HEAD
            <Button
              onClick={handleCheckStatus}
              disabled={!email |isCheckingStatus}
              disabled={!email || isCheckingStatus}
=======
=======
<div className='space-y-3'>
            {/* Check Status Button */}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              disabled={!email |isCheckingStatus}
              disabled={!email || isCheckingStatus}


<<<<<<< HEAD
=======

            {/* Check Status Button */}


=======

              disabled={!email || isCheckingStatus}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Last email sent: {lastSentTime.toLocaleTimeString()  } catch (error) {
    console.error("Error:", error);
=======

                  Last email sent: {lastSentTime.toLocaleTimeString()  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className="w-full"
=======


"
              className="w-full""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              variant="outline"
            >
              {isCheckingStatus ? (
                <>"
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
              className="w-full"
              variant="outline"
=======
            <Button
              onClick={handleCheckStatus}
              disabled={!email || isCheckingStatus}
className='w-full'
              variant='outline'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className='h-4 w-4 mr-2 animate-spin' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Checking Status...
                </>
              ) : (
<<<<<<< HEAD
                <>
<<<<<<< HEAD
                  <Eye className="h-4 w-4 mr-2" />
=======
<Eye className='h-4 w-4 mr-2' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Check Verification Status
                </>
<<<<<<< HEAD
              disabled={!email |isResending |countdown > 0}
              disabled={!email || isResending || countdown > 0}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <>"
                  <Eye className="h-4 w-4 mr-2" />
                  Check Verification Status;
                </>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



              disabled={!email || isResending || countdown > 0}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              )  } catch (error) {
    console.error("Error:", error);
=======

              )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className="w-full"
=======


"
              className="w-full""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              variant="secondary"
            >
              {isResending ? (
                <>"
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
=======
              className="w-full"
              variant="secondary"
=======
              )}
            </Button>
            {/* Resend Email Button */}
            <Button
              onClick={handleResendEmail}
              disabled={!email || isResending || countdown > 0}
className='w-full'
              variant='secondary'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              {isResending ? (
                <>
                  <RefreshCw className='h-4 w-4 mr-2 animate-spin' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Sending Email...
                </>
              ) : countdown > 0 ? (
<<<<<<< HEAD
                <>
<<<<<<< HEAD

=======
<Clock className='h-4 w-4 mr-2' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Resend in {countdown}s
                </>
              ) : (
                <>
<<<<<<< HEAD
<<<<<<< HEAD

                  Resend Verification Email
                </>
=======
<<<<<<< HEAD
=======
                  <Mail className="h-4 w-4 mr-2" />
                  Resend Verification Email
                </>

            <Button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <>"
                  <Clock className="h-4 w-4 mr-2" />
                  Resend in {countdown}s;
                </>
              ) : (
                <>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

=======
<Mail className='h-4 w-4 mr-2' />
                  Resend Verification Email
                </>
              )}
            </Button>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {/* Try Login Button */}
            <Button;
              on_click={handleTryLogin}
              disabled={!email}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="w-full"
=======
className='w-full'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            >
              Try Login;
            </Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {/* Help Text */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          {/* Help Text */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>'
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
<<<<<<< HEAD
            <Button
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


              onClick={handleGoBack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              variant="ghost"
              size="sm"
=======
            <Button;
"
              variant="ghost""
              size="sm""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="text-blue-600 hover:text-blue-500"
            >"
              <ArrowLeft className="h-4 w-4 mr-1" />
<<<<<<< HEAD
=======
          <div className="text-center text-sm text-gray-500 space-y-2">
=======
          {/* Help Text */}
<div className='text-center text-sm text-gray-500 space-y-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            <p>
              Can't find the verification email? Check your spam folder or try a
              different email address.
            </p>
            <Button
<<<<<<< HEAD
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
=======
              onClick={handleGoBack}
              variant='ghost'
              size='sm'
              className='text-blue-600 hover:text-blue-500'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <ArrowLeft className='h-4 w-4 mr-1' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              Go Back
            </Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              variant="ghost"
=======
              Go Back;
            </Button>
          </div>

"
              variant="ghost""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="w-full text-sm"
=======
              variant="ghost"
              className="w-full text-sm"
=======
          {/* Additional Options */}
<div className='border-t pt-4 space-y-2'>
            <Button
              onClick={() => router.push('/signup')}
              variant='ghost'
              className='w-full text-sm'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            >
              Use Different Email Address;
            </Button>
<<<<<<< HEAD
            <Button
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


              onClick={() => router.push('/contact')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              variant="ghost"
=======
            <Button;
"
              variant="ghost""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="w-full text-sm"
=======
              variant="ghost"
              className="w-full text-sm"
=======
              onClick={() => router.push('/contact')}
variant='ghost'
              className='w-full text-sm'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            >
              Contact Support;
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
<<<<<<< HEAD
  )
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


};

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

};

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
;
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
