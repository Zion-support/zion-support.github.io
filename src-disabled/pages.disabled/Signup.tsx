

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


      const res = await axios.get('/api/auth/health')
      setAuthServiceAvailable(res.status === 200)
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues')
      }
    } catch (err: any) {


        setHealthCheckError('Unable to verify authentication service status')








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


            setSuccessMessage(data.message || message),;


          response: err.response ? {;


          config: err.config ? {;


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {;



          <form onSubmit={handleFormSubmit} className='space-y-4' noValidate>
            {/* Show Health Check Warning */}
            {healthCheckError && (
              <Alert;
                variant='destructive';
                className='border - yellow - 500 bg - yellow - 50 text - yellow - 900'              >;
                <AlertCircle className='h - 4 w - 4' />;
                <AlertDescription className='flex items - center justify - between'>;





