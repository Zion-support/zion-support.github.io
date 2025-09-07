import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
origin/cursor/automate-test-improve-and-merge-code-2533
import Link from 'next/link';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { LoadingSpinner  } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { PasswordStrengthMeter  } from '@/components/PasswordStrengthMeter';
import { AuthButtons  } from '@/components/AuthButtons';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react'

import { toast } from '@/hooks/use-toast'
import { AuthLayout } from '@/layout'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
const SignupSchema = Yup.object({
  name: Yup.string().required('Name is required')
  email: Yup.string().email('Invalid email').required('Email is required')
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must include an uppercase letter')
    .matches(/[a-z]/, 'Password must include a lowercase letter')
    .matches(/[0-9]/, 'Password must include a number')
    .required('Password is required')
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
  terms: Yup.boolean().oneOf(
    [true]
    'You must accept the terms and conditions'
  const router = useRouter(); // Changed from navigate
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [emailVerificationRequired, setEmailVerificationRequired] =
    useState(false)
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true)
  const [healthCheckLoading, setHealthCheckLoading] = useState(true)
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null)
  // Check if this is a partner signup
  const isPartnerSignup = router.query.type === 'partner'
  const signupSource = (router.query.source as string) |'direct'
  const performHealthCheck = async () => {
    setHealthCheckLoading (true);
    setHealthCheckError (null);
    try {
      const res = await axios.get ('/api / auth / health');
      setAuthServiceAvailable (res.status === 200);
      // Check condition
if ( {) {
  $2
}
        setHealthCheckError ('Authentication service is experiencing issues');
      }
    } catch (err: any) {
      logErrorToProduction('Auth service health check failed', { data: err })
      setAuthServiceAvailable(false)
      // Set a more specific error message based on the error type
      ) {
        setHealthCheckError('Network connection issues detected')
      } else if (err.response?.status === 500) {
        setHealthCheckError(
          'Authentication service is temporarily unavailable'
        )
      } else {
        setHealthCheckError ('Unable to verify authentication service status');
      }
    } finally {
      setHealthCheckLoading (false);
    }
  }
            ? {
                url: err.config.url
                method: err.config.method
              }
            : 'No config'
        })
        const status = err.response?.status
        // Try both 'error' and 'message' fields for compatibility
          'Signup failed. Please try again.'
        logInfo('Processed error message:', { data: errorMsg })
        if (status === 409) {
          // Handle duplicate email specifically
          setErrorMessage(errorMsg)
          setErrors({ email: errorMsg })
          // Show toast notification
          toast({
            title: 'Signup failed'
            description: errorMsg
            variant: 'destructive'
          })
        } else if (status === 400) {
          // Handle validation errors (weak password, etc.)
          setErrorMessage(errorMsg)
          // Set the error on password field if it's password-related
          if (errorMsg.toLowerCase().includes('password')) {
            setErrors({ password: errorMsg })
          } else {
            set_errors ({ confirm: error_msg });
          }
        }
      } finally {
        log_info ('Form submission completed, setting loading to false');
        set_loading (false);
      }
import { useState, useEffect } from 'react',;
import { useRouter } from 'next/router', // Changed from react-router-dom;
import { useFormik } from 'formik',;
import * as Yup from 'yup',;
import axios from 'axios',;
import Link from 'next/link',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter',;
import { AuthButtons } from '@/components/AuthButtons',;
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast',;
import { AuthLayout } from '@/layout',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
const SignupSchema = Yup.object({;
  name: Yup.string().required('Name is required'),;
  email: Yup.string().email('Invalid email').required('Email is required'),;
  password: Yup.string();
    .min(8, 'Password must be at least 8 characters');
    .matches(/[A-Z]/, 'Password must include an uppercase letter');
    .matches(/[a-z]/, 'Password must include a lowercase letter');
    .matches(/[0-9]/, 'Password must include a number');
    .required('Password is required'),;
      } else {;
        setHealthCheckError('Unable to verify authentication service status');
      }
    } finally {;
      setHealthCheckLoading(false);
    }
  const formik = useFormik({;
    initialValues: {;
      name: '',;
      email: '',;
      password: '',;
      confirm: '',;
    },;
    validationSchema: SignupSchema,;
    onSubmit: async (values, { setErrors }) => {;
      logInfo('Form submission started with:', {;
          ...(isPartnerSignup && {;
            userType: 'partner',;
            source: signupSource,;
            metadata: {;
              partnerProgram: true,;
          } else {;
            // Account created and ready to use;
            const message = isPartnerSignup;
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.';
          // Show toast notification;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
            setErrors({ password: errorMsg });
          } else {;
            setErrors({ confirm: errorMsg });
          }
          // Show toast notification for other errors;
          toast({;
            title: 'Signup failed',;
            description: errorMsg,;
      name: true,;
      email: true,;
      password: true,;
      confirm: true,;
  // Show loading state only during initial health check
  if (healthCheckLoading) {
    return (
      <AuthLayout>
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-muted-foreground">Initializing signup...</p>
          </div>
        </div>
      </AuthLayout>
    )
  }
  return (
    <AuthLayout>;
      <div className='flex min - h-screen items - center justify - center p - 4'>;
        <div className='w - full max - w-sm space - y-4'>;
          {isPartnerSignup && (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() =>
                  router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`)
                }
              >
                Check Verification Status
              </Button>
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
import { toast  } from '@/hooks/use-toast';
import { AuthLayout  } from '@/layout';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
const SignupSchema = null;
                  setSuccessMessage('')
                }}
              >
                Try Different Email
              </Button>
            </div>
          )}
          
origin/cursor/automate-test-improve-and-merge-code-2533
          {/* Additional help text when service issues are detected */}
          {healthCheckError && (
            <div className="text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
              <p>⚠️ We detected some authentication service issues.</p>
              <p>If signup fails, please try again in a few minutes or contact support.</p>
            </div>
          )}
          </form>
          {!emailVerificationRequired && (
            <div className='mt-6'>
              <AuthButtons providers={['google', 'github']} />
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          )}

          </form>;
          {!emailVerificationRequired && (;
            <div className='mt-6'>;
              <AuthButtons providers={['google', 'github']} />;
            </div>;
          )}
        </div>;
      </div>;
    </AuthLayout>;
  );

}) ;
};
toast ({';
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created!',  description: isPartnerSignup ? 'Please verify your email. Your partner application will be reviewed after verification.'? 'Partner application submitted successfully! You can now log in and your application will be reviewed.': 'Account created successfully!';
setSuccessMessage (data && data.message || message);
toast ({';
  title: isPartnerSignup ? 'Partner application submitted!': 'Account created successfully!', description: isPartnerSignup ? 'Welcome to the partner program. You can now log in.': 'Welcome to the platform. You can now log in.' ;
});
//Redirect to appropriate page after a short delay ;

}catch (err: unknown) {';
  logErrorToProduction ('Signup error details:', {;
  message: err && err.message, response: err && err.response ? {;
  status: err && err.response.status,  statusText: err && err.response.statusText, data: err && err.response.data ';
}: 'No response';';
request: err && err.request ? 'Request made but no response': 'No request';

});
}return undefined;
}, [emailVerificationRequired, formik && formik.values.email, router]);
//Show loading state only during initial health check if (healthCheckLoading) {;
  return (<AuthLayout> <div className="flex min-h-screen items-center justify-center p-4" > <div className="text-center space-y-4" > <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" ></div> <p className="text-muted-foreground" >Initializing signup...</p> </div> </div> </AuthLayout> Join the Zion AI Partner Program and start earning rewards </p> </div>) ;
}> {';
  healthCheckLoading ? 'Checking...': 'Retry' ;
}</Button> </AlertDescription> </Alert>) ;
}<AlertDescription> {;
  errorMessage ;
}</AlertDescription> </Alert>) ;
}<AlertDescription> Before you can log in, please click the verification link in the email we sent to <strong> {;
  formik && formik.values.email ;
}</strong>. </AlertDescription> </Alert>) ";

}<div> <label htmlFor="name" className="block text-sm font-medium" > Full Name </label> <Input) "
}</div> <div> <label htmlFor="email" className="block text-sm font-medium" > Email address </label> <Input) "
}</div> <div> <label htmlFor="password" className="block text-sm font-medium" > Password </label> <Input) "
}</div> <div> <label htmlFor="confirm" className="block text-sm font-medium" > Confirm Password </label> <Input) "
      displayName: ",
      email: ",
      password: ",
      confirmPassword: ",
      termsAccepted: false,,
},,;
}) as UseFormReturn<SignupFormValues>;
  // Form submission handler;
  const onSubmit = async (data: SignupFormValues) => {;
          </form>
          {!emailVerificationRequired && (
            <div className="mt-6">
              <AuthButtons providers={["google", "github"]} />
            </div>
          )}
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true)
    try {
      const { res, data: resData } = await register(
        data.displayName
        data.email
        data.password
      )
      // Handle duplicate email error from API
      if (res.status === 409 && resData?.code === 'EMAIL_EXISTS') {
        form.setError('email', { message: resData.message })
}
      // Check for successful response
      if (res.ok && resData.token && resData.user) {
        // Successful registration
        safeStorage.setItem('authToken', resData.token)
        setUser(resData.user)
        setTokens({ accessToken: resData.token, refreshToken: resData.refreshToken |null })
      // Handle email verification required case
      if (resData?.emailVerificationRequired) {
        setShowVerificationMessage(true)
        // Do not proceed to set session or navigate
} else if (resData?.session) {
        // Set the session directly if verification is not required
        const { error: sessionError } = await supabase.auth.setSession(resData.session)
        if (sessionError) {
          console.error("Error setting session:", sessionError)

  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, ,
} from '@/components / ui / form';
// Form validation schema;
const signup_schema = z;
  .object ({
    display_name: z.string ().min (2, "Name must be at least 2 characters"),
    email: z.string ().email ("Please enter a valid email"),
    password: z.string ();
      .min (8, "Password must be at least 8 characters");
      .regex (/[A - Z]/, "Password must contain at least one uppercase letter");
      .regex (/[a - z]/, "Password must contain at least one lowercase letter");
      .regex (/[0 - 9]/, "Password must contain at least one number"),
    confirm_password: z.string (),
    terms_accepted: z.boolean ().refine (val => val === true, {
      message: "You must accept the terms and conditions", ,
}), ,
});
  .refine (data => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"], ,
});
type SignupFormValues = z.infer < typeof signup_schema>;
export default /**
 * Signup - Function description
 */
function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, is_loading, is_authenticated, user } = use_auth ();
  const navigate = use_navigate ();
  const [show_password, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  // Track confirm password locally to prevent it from clearing on blur;
  const [confirmPasswordValue, setConfirmPasswordValue] = useState ("");
  const password_value = form.watch ("password");
  const [is_submitting, setIsSubmitting] = useState (false);
  // Initialize react - hook - form;
  const form = use_form ({
    resolver: zod_resolver (signup_schema),
    default_values: {
      display_name: ",
      email: ",
      password: ",
      confirm_password: ",
      terms_accepted: false, ,
}, ,
}) as UseFormReturn < SignupFormValues>;
  // Form submission handler;
  const on_submit = async (data: SignupFormValues) => {
    // Check condition
if (return) {
  $2
} // Prevent multiple submissions;
    setIsSubmitting (true);
    try {
      const { res, data: res_data } = await register (
        data.display_name,
        data.email,
        data.password);
      // Handle duplicate email error from API;
      // Check condition
if ( {) {
  $2

          form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." })
          toast.error(sessionError.message || "Failed to set session. Please try logging in.")
          return;
}
        form.set_error ('email', { message: res_data.message });
        toast.error ('Email already registered – please login.');
        return;
}
      // Check for successful response;
      // Check condition
if ( {) {
  $2
}
        // Successful registration;
        safe_storage.set_item ('auth_token', res_data.token);
        set_user (res_data.user);
        set_tokens ({ access_token: res_data.token, refresh_token: res_data.refresh_token || null });
      // Handle email verification required case;
      // Check condition
if ( {) {
  $2
}
        setShowVerificationMessage (true);
        // Do not proceed to set session or navigate;
} else // Check condition
if ( {) {
  $2
}
        // Set the session directly if verification is not required;
        const { error: session_error } = await supabase.auth.set_session (res_data.session);
        // Check condition
if ( {) {
  $2
}
          console.error ("Error setting session:", session_error);
          form.set_error ("root", { message: session_error.message || "Failed to set session. Please try logging in." });
          toast.error (session_error.message || "Failed to set session. Please try logging in.");
          form.setError("root", { message: sessionError.message |"Failed to set session. Please try logging in." })
          toast.error(sessionError.message |"Failed to set session. Please try logging in.")
          return
          form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." })
          toast.error(sessionError.message || "Failed to set session. Please try logging in.")
          return;
}
} else {
        // This case might indicate an unexpected response from the API;
        console.error ("Registration response did not include session or emailVerificationRequired flag.", res_data);
        form.set_error ("root", { message: "Registration complete, but an unexpected issue occurred. Please try logging in." });
        toast.error ("Registration complete, but an unexpected issue occurred. Please try logging in manually.");
        // Potentially navigate to login or show a more specific error;
        return;
}
}
      }
      // Toast and navigation are handled above if session is present;
      // If emailVerificationRequired, no toast / navigation here, message is shown;
} catch (err: any) {
      const message = err.message ?? "Registration failed";
      form.set_error ("root", { message });
      toast.error (message);
} finally {
      setIsSubmitting (false) }
  }
}
  }
  // Redirect if user is already logged in and has completed profile;
  // Check condition
if ( {) {
  $2
}
}
  }
  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
}
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
}
        </div>;
      </div>;
    </AuthLayout>;
  );
}
;
}</div> <div className="flex items-center space-x-2" > <input)
}{"
  !emailVerificationRequired ? (<Button type="submit" disabled= {
  loading
}> {'"
  loading ? (<> <LoadingSpinner size="sm" className="mr-2" /> Creating Account... </>) : (healthCheckError ? 'Try Creating Account': 'Create Account')
}</Button> > Go to Login </Button> <Button router.push (`/verify-status?email=$ {
  encodeURIComponent (formik.values.email)
}`)
}> Check Verification Status </Button> <Button > Try Different Email </Button> </div>)
}<p>⚠️ We detected some authentication service issues.</p> <p>If signup fails, please try again in a few minutes or contact support.</p> </div>)
}</form> </div>)
}</div> </div> </AuthLayout>)
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
