

import Link from 'next/link';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { LoadingSpinner  } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { PasswordStrengthMeter  } from '@/components/PasswordStrengthMeter';
import { AuthButtons  } from '@/components/AuthButtons';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router'; // Changed from react-router-domimport { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'
import { AuthButtons } from '@/components/AuthButtons'

  const [emailVerificationRequired, setEmailVerificationRequired] =
    useState(false)
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),
  const [healthCheckLoading, setHealthCheckLoading] = useState(true),
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null)
  // Check if this is a partner signup
  const isPartnerSignup = router.query.type === 'partner''
  const signupSource = (router.query.source as,  string) |'direct''
import { use_router } from 'next / router'; // Changed from react-router-domimport { use_formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next / link';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { LoadingSpinner } from '@/components / ui / enhanced - loading - states';
import { Alert, AlertDescription } from '@/components / ui / alert';
import { PasswordStrengthMeter } from '@/components / PasswordStrengthMeter';
import { AuthButtons } from '@/components / AuthButtons';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';
import { toast } from '@/hooks / use - toast';
import { AuthLayout } from '@/layout';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
const SignupSchema = Yup.object ({
  name: Yup.string ().required ('Name is required'),'
  email: Yup.string ().email ('Invalid email').required ('Email is required'),'
  password: Yup.string ();
    .min (8, 'Password must be at least 8 characters');,
    .matches (/[A - Z]/, 'Password must include an uppercase letter');,
    .matches (/[a - z]/, 'Password must include a lowercase letter');,
    .matches (/[0 - 9]/, 'Password must include a number');
    .required ('Password is required'),'
  confirm: Yup.string ();
    .one_of ([Yup.ref ('password')], 'Passwords must match');
    .required ('Confirm password is required'),'
  terms: Yup.boolean ().one_of (
    [true],
    'You must accept the terms and conditions'),'
});
export default /**
 * Signup - Function description
 */
function Signup() {
  const router = use_router (); // Changed from navigate;,
  const [loading, set_loading] = useState (false);,
  const [error_message, setErrorMessage] = useState ('');,
  const [success_message, setSuccessMessage] = useState ('');,
  const [emailVerificationRequired, setEmailVerificationRequired] =;
    useState (false);
  const [authServiceAvailable, setAuthServiceAvailable] = useState (true);,
  const [healthCheckLoading, setHealthCheckLoading] = useState (true);,
  const [healthCheckError, setHealthCheckError] = useState < string | null>(null);
  // Check if this is a partner signup;
  const isPartnerSignup = router.query.type === 'partner';
  const signup_source = (router.query.source as,  string) || 'direct';
  const performHealthCheck = async () => {
    setHealthCheckLoading(true)
    setHealthCheckError(null)
    try {

      const res = await axios.get('/api/auth/health')
      setAuthServiceAvailable(res.status === 200)
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues')
      }
    } catch (err: any) {

      ) {
        setHealthCheckError('Network connection issues detected')'
      } else if (err.response?.status === 500) {
        setHealthCheckError(
          'Authentication service is temporarily unavailable''
        )
      logErrorToProduction ('Auth service health check failed', { data: err });
      setAuthServiceAvailable (false);
      // Set a more specific error message based on the error type;
      // Check condition
if (
      ) {) {
  $2
}
        setHealthCheckError ('Network connection issues detected');
      } else // Check condition
if ( {) {
  $2
}
        setHealthCheckError (
          'Authentication service is temporarily unavailable');
      } else {

        setHealthCheckError('Unable to verify authentication service status')

      }
    } finally {
      setHealthCheckLoading(false)
    }
  }


            ? {
                url: err.config.url
                method: err.config.method
              }


          'Signup failed. Please try again.'
        logInfo('Processed error message:', { data: errorMsg })
        if (status === 409) {
          // Handle duplicate email specifically
          setErrorMessage(errorMsg)
          setErrors({ email: errorMsg })
          // Show toast notification
          toast({
            title: 'Signup failed'',
            description: errorMsg,
            variant: 'destructive''
            title: 'Signup failed'
            description: errorMsg
            variant: 'destructive'
          })
        } else if (status === 400) {
          // Handle validation errors (weak password, etc.)
          setErrorMessage(errorMsg)
          // Set the error on password field if it's password-related'
          if (errorMsg.toLowerCase().includes('password')) {'
            setErrors({ password: errorMsg })
            : 'No config','
        });
        const status = err.response?.status;
        // Try both 'error' and 'message' fields for compatibility;
        const error_msg =;
          err.response?.data?.error ||;
          err.response?.data?.message ||;
          'Signup failed. Please try again.';
        log_info ('Processed error message:', { data: error_msg });
        // Check condition
if ( {) {
  $2
}
          // Handle duplicate email specifically;
          setErrorMessage (error_msg);
          set_errors ({ email: error_msg });
          // Show toast notification;
          toast ({
            title: 'Signup failed','
            description: error_msg,
            variant: 'destructive','
          });
        } else // Check condition
if ( {) {
  $2
}
          // Handle validation errors (weak password, etc.);
          setErrorMessage (error_msg);
          // Set the error on password field if it's password - related;
          if (.includes ('password')) {) {'
  $2
}
            set_errors ({ password: error_msg });
          } else {
            setErrors({ confirm: errorMsg })
          }


    .min(8, 'Password must be at least 8 characters');
    .matches(/[A-Z]/, 'Password must include an uppercase letter');
    .matches(/[a-z]/, 'Password must include a lowercase letter');
    .matches(/[0-9]/, 'Password must include a number');
    .required('Password is required'),;

  confirm: Yup.string();
    .oneOf([Yup.ref('password')], 'Passwords must match');
    .required('Confirm password is required'),;
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions');
}),;
export default function Signup() {;
  const router = useRouter(), // Changed from navigate;
  const [loading, setLoading] = useState(false),;
  const [errorMessage, setErrorMessage] = useState(''),;
  const [successMessage, setSuccessMessage] = useState(''),;
  const [emailVerificationRequired, setEmailVerificationRequired] = useState(false),;
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),;
  const [healthCheckLoading, setHealthCheckLoading] = useState(true),;
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null),;
  // Check if this is a partner signup;
  const isPartnerSignup = router.query.type === 'partner',;
  const signupSource = router.query.source as string || 'direct',;
  const performHealthCheck = async () => {;
    setHealthCheckLoading(true),;
    setHealthCheckError(null),;
    try {;
      const res = await axios.get('/api/auth/health'),;
      setAuthServiceAvailable(res.status === 200),;
      if (res.status !== 200) {;
        setHealthCheckError('Authentication service is experiencing issues');
      }
    } catch (err: any) {;
      logErrorToProduction('Auth service health check failed', { data: err }),;
      setAuthServiceAvailable(false),;
      // Set a more specific error message based on the error type;
      if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {;
        setHealthCheckError('Network connection issues detected');
      } else if (err.response?.status === 500) {;
        setHealthCheckError('Authentication service is temporarily unavailable');

      } else {;
        setHealthCheckError('Unable to verify authentication service status');
      }
    } finally {;
      setHealthCheckLoading(false);
    }
  },;
  useEffect(() => {;
    performHealthCheck();
  }, []),;
  const formik = useFormik({;
    initialValues: {;,
    initialValues: {;
      name: '',;
      email: '',;
      password: '',;
      confirm: '',;
      terms: false;
    },;
    validationSchema: SignupSchema,;
    onSubmit: async (values, { setErrors }) => {;
      logInfo('Form submission started with:', {;
        name: values.name,;
        email: values.email,;
        hasPassword: !!values.password,;
        isPartnerSignup;
      }),;
      setLoading(true),;
      setErrorMessage(''), // Clear any previous error;
      setSuccessMessage(''), // Clear any previous success message;
      setEmailVerificationRequired(false),;
      try {;
        const requestData = {;
          name: values.name,;
          email: values.email,;
          password: values.password,;


          ...(isPartnerSignup && {;
            userType: 'partner',;
            source: signupSource,;
            metadata: {;
              partnerProgram: true,;

              signupType: 'partner';
            }
          });
        },;
        logInfo('Making API request to /api/auth/register with:', {;
          ...requestData,;
          password: '[REDACTED]';
        }),;
        const res = await axios.post('/api/auth/register', requestData),;
        logInfo('API response received:', {;
          status: res.status,;
          data: res.data;
        }),;
        if (res.status === 201) {;
          const data = res.data,;
          if (data.emailVerificationRequired) {;
            // Email verification is required;
            setEmailVerificationRequired(true),;
            const message = isPartnerSignup;
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, your partner application will be reviewed.';
              : 'Account created! Please check your email to verify your account.',;
            setSuccessMessage(data.message || message),;
            toast({;
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created!',;
              description: isPartnerSignup;
                ? 'Please verify your email. Your partner application will be reviewed after verification.';
                : 'Please check your email to verify your account before logging in.'});

          } else {;
            // Account created and ready to use;
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.';
              : 'Account created successfully!',;

            setSuccessMessage(data.message || message),;

            toast({;
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created successfully!',;
              description: isPartnerSignup;
                ? 'Welcome to the partner program. You can now log in.';
                : 'Welcome to the platform. You can now log in.'}),;
            // Redirect to appropriate page after a short delay;
            setTimeout(() => {;
              router.push(isPartnerSignup ? '/partners' : '/login');
            }, 2000);
          }
        }
      } catch (err:,  any) {;,
        logErrorToProduction('Signup error details:', {;
          message: err.message,;

          response: err.response ? {;

            status: err.response.status,;
            statusText: err.response.statusText,;
            data: err.response.data;
          } : 'No response',;
          request: err.request ? 'Request made but no response' : 'No request',;

          config: err.config ? {;

            url: err.config.url,;
            method: err.config.method;
          } : 'No config';
        }),;
        const status = err.response?.status,;
        // Try both 'error' and 'message' fields for compatibility;
        const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.',;
        logInfo('Processed error message:', { data: errorMsg }),;
        if (status === 409) {;
          // Handle duplicate email specifically;
          setErrorMessage(errorMsg),;
          setErrors({ email: errorMsg }),;
          // Show toast notification;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            variant: 'destructive'});
        } else if (status === 400) {;
          // Handle validation errors (weak password, etc.);
          setErrorMessage(errorMsg),;
          // Set the error on password field if it's password-related;
          if (errorMsg.toLowerCase().includes('password')) {;
            setErrors({ password: errorMsg });
          } else {;
            setErrors({ confirm: errorMsg });
          }
;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            variant: 'destructive'});
        } else {;
          // Handle other errors (network, server, etc.);
          setErrorMessage(errorMsg),;
          setErrors({ confirm: errorMsg }),;
          // Show toast notification for other errors;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            variant: 'destructive'});
        }
      } finally {;
        logInfo('Form submission completed, setting loading to false'),;
        setLoading(false);
      }
    }
  }),;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {;

    e.preventDefault(),;
    formik.setTouched({;
      name: true,;
      email: true,;
      password: true,;
      confirm: true,;

      terms: true,;
    });
    await formik && formik.handleSubmit(e);
  };

    return (
      <AuthLayout>;
        <div className='flex min-h-screen items-center justify-center p-4'>;
          <div className='text-center space-y-4'>;
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto'></div>;
            <p className='text-muted-foreground'>Initializing signup...</p>;
          </div>;
        </div>;
      </AuthLayout>;
    );
  }
  return (
    <AuthLayout>;
      <div className='flex min-h-screen items-center justify-center p-4'>;
        <div className='w-full max-w-sm space-y-4'>;
          {isPartnerSignup && (;
            <div className='text-center mb-6'>;
              <h1 className='text-2xl font-bold text-foreground'>;
                Partner Application;
              </h1>;
              <p className='text-sm text-muted-foreground mt-2'>;
                Join the Zion AI Partner Program and start earning rewards;
              </p>;
            </div>;
          )}

          <form onSubmit={handleFormSubmit} className='space-y-4' noValidate>
            {/* Show Health Check Warning */}
            {healthCheckError && (
              <Alert;
                variant='destructive';
                className='border - yellow - 500 bg - yellow - 50 text - yellow - 900'              >;
                <AlertCircle className='h - 4 w - 4' />;
                <AlertDescription className='flex items - center justify - between'>;


              <Button
                type="button"
                variant="ghost"
                className="w-full text-sm"
                onClick={() => {
                  setEmailVerificationRequired(false),
                  setSuccessMessage('')
                }}
              >;
                Try Different Email;
              </Button>;
            </div>;
          )}
;
          {/* Additional help text when service issues are detected */}
          {healthCheckError && (
            <div className="text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
              <p>⚠️ We detected some authentication service issues.</p>
              <p>If signup fails, please try again in a few minutes or contact support.</p>
            </div>
          )}



