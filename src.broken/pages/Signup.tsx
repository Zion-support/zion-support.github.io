import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import { AuthButtons } from '@/components/AuthButtons';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react'
import { toast } from '@/hooks/use-toast';
import { AuthLayout } from '@/layout';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


const SignupSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must include an uppercase letter')
    .matches(/[a-z]/, 'Password must include a lowercase letter')
    .matches(/[0-9]/, 'Password must include a number')
    .required('Password is required'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

export default function Signup() {
  const router = useRouter(); // Changed from navigate
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailVerificationRequired, setEmailVerificationRequired] = useState(false);
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);
  const [healthCheckLoading, setHealthCheckLoading] = useState(true);
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null);
  
  // Check if this is a partner signup
  const isPartnerSignup = router.query.type === 'partner';
  const signupSource = router.query.source as string || 'direct';

  const performHealthCheck = async () => {
    setHealthCheckLoading(true);
    setHealthCheckError(null);
    try {
      const res = await axios.get('/api/auth/health');
      setAuthServiceAvailable(res.status === 200);
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues');
      }
    } catch (err: any) {
      logErrorToProduction('Auth service health check failed', { data: err });
      setAuthServiceAvailable(false);
      // Set a more specific error message based on the error type
      if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {
        setHealthCheckError('Network connection issues detected');
      } else if (err.response?.status === 500) {
        setHealthCheckError('Authentication service is temporarily unavailable');
      } else {
        setHealthCheckError('Unable to verify authentication service status');
      }
    } finally {
      setHealthCheckLoading(false);
    }
  };

  const validateForm = () => {
    if(!formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.company ||
      !formData.password ||
      !formData.confirmPassword) {
      setError('Please fill in all required fields') ;
      return false;
    }
    if(!/\S+@\S+\.\S+/.test (formData.email) ) {
      setError('Please enter a valid email address') ;
      return false;
    }
    if(formData.password.length < 8) {
      setError('Password must be at least 8 characters long') ;
      return false;
    }
    if(formData.password !== formData.confirmPassword) {
      setError('Passwords do not match') ;
      return false;
    }
    if(!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions') ;
      return false;
    }
    return true;
  };

import { useAuth } from "@/hooks/useAuth";
import { registerUser } from "@/services/authService";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import { safeStorage } from "@/utils/safeStorage";
import { mailchimpService } from "@/integrations/mailchimp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const signupSchema = z
  .object({
    displayName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine(val => val === true, {
      message: "You must accept the terms and conditions",
    }),
    newsletterOptIn: z.boolean().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = any;

export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
      newsletterOptIn: false,
    },
  });

  // Form submission handler
  const onSubmit = async (data: SignupFormValues) => {
    if (isSubmitting) return; // Prevent multiple submissions
    
    setIsSubmitting(true);
    try {
      const { data: resData } = await registerUser( // `res` variable removed as it wasn't used
        data.displayName,
        data.email,
        data.password
      );

      // The `registerUser` service is expected to handle the response from the API.
      // If the API indicates an email already exists, `registerUser` should throw an error
      // which will be caught by the catch block below.

      if (resData?.emailVerificationRequired) {
        setShowVerificationMessage(true);
        // No navigation or session setting here. User needs to verify their email.
        // Mailchimp subscription should also wait until the email is verified.
      } else {
        // This block means registration was successful and no immediate email verification is required.
        // Supabase might have automatically created a session for the user if email verification is disabled project-wide.
        // The AuthProvider's onAuthStateChange listener is responsible for detecting session changes
        // and updating the application's auth state (user, isAuthenticated, tokens).
        // We should not manually set session, tokens, or headers here.

        toast.success("Account created successfully! Please log in to continue.");

        // Redirect to the login page. If Supabase did auto-log in the user,
        // the useAuth hook (via AuthProvider) will likely redirect from the login page
        // to the appropriate authenticated route (e.g., dashboard or onboarding).
        navigate("/login");

        // Subscribe to Mailchimp if opted in, as the account is considered created.
        // This happens regardless of whether Supabase auto-logged them in or they need to log in manually.
        if (data.newsletterOptIn && mailchimpService) {
          try {
            await mailchimpService.addSubscriber({
              email: data.email,
              mergeFields: { FNAME: data.displayName }
            });
            await mailchimpService.sendWelcomeEmail(data.email, 'NEW10');
          } catch (mailchimpError) {
            console.error('Mailchimp subscription failed:', mailchimpError);
            // This is a non-critical error, so we don't block the user flow
            // or show a user-facing error message for this.
          }
        }
        toast.error(message);
        return;
      }

      if (resData?.token) {
        safeStorage.setItem("token", resData.token);
      }

  // Redirect if user is already logged in.
  // This check runs on component mount and whenever isAuthenticated, user, or showVerificationMessage changes.
  // It allows a user to remain on the signup page if showVerificationMessage is true (waiting for email verification),
  // even if they somehow have an existing session (e.g., from a previous tab).
  if (isAuthenticated && !showVerificationMessage) {
    // If profile is complete, go to home/dashboard. Otherwise, to onboarding.
    if (user && typeof user !== 'boolean' && user.profileComplete) {
      return <Navigate to="/" />;
    } else {
      // User is authenticated but profile is not complete
      return <Navigate to="/onboarding" />;
    }
  }

  return (
    <>
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="bg-zion-blue-dark rounded-lg p-6">
              <Form {...form}>
                {form.formState.errors.root && !showVerificationMessage && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
                  </Alert>
                )}
                {showVerificationMessage && (
                  <Alert variant="default" className="mb-4 bg-blue-50 border-blue-200 text-blue-700">
                    <Mail className="h-5 w-5 mr-2 !text-blue-700" />
                    <AlertDescription>
                      Registration successful! Please check your email to verify your account and complete the process.
                    </AlertDescription>
                  </Alert>
                )}
                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6" noValidate>
                  {/* Removed duplicated/malformed FormField and logic from here, it's handled in the onSubmit above */}
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="John Doe"
                              className="bg-zion-blue pl-10 text-black placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              aria-autocomplete="none"
                              autoComplete="off"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="you@example.com"
                              className="bg-zion-blue pl-10 text-black placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="off"
                              aria-autocomplete="none"
                              type="email"
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="bg-zion-blue pl-10 text-black border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="new-password"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                              <span className="sr-only">
                                {showPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="bg-zion-blue pl-10 text-black border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="new-password"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                              <span className="sr-only">
                                {showConfirmPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <PasswordStrengthMeter password={passwordValue} />

                  <FormField
                    control={form.control}
                    name="newsletterOptIn"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-zion-slate-light">
                            Subscribe to our newsletter
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-zion-slate-light">
                            I agree to the{" "}
                            <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">
                              Privacy Policy
                            </a>
                          </FormLabel>
                          <FormMessage className="text-red-400" />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled={isLoading || isSubmitting}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </Form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zion-blue-light" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithGoogle()}
                    disabled={isLoading || isSubmitting}
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                      <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />
                    </svg>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithFacebook()}
                    disabled={isLoading || isSubmitting}
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithTwitter()}
                    disabled={isLoading || isSubmitting}
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div  className="hidden lg:flex flex - 1 bg-gradient - to - br from - cyan - 500 / 20 via - blue - 500 / 20 to - purple - 500 / 20 relative overflow-hidden">
        <div  className="absolute inset - 0 bg-gradient - to - br from - white / 5 to -white / 10"></div>

        <div  className="relative z - 10 flex items - center justify - center p -12">
          <div  className="text-center max - w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div  className="flex justify - center gap-4 mb-6">
                <div  className="w-16 h-16 bg-gradient - to - br from - cyan - 500 to - blue - 600 rounded-2xl flex items - center justify -center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div  className="w-16 h-16 bg-gradient - to - br from - blue - 500 to - purple - 600 rounded-2xl flex items - center justify -center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div  className="w-16 h-16 bg-gradient - to - br from - purple - 500 to - pink - 600 rounded-2xl flex items - center justify -center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl font - bold text-white mb-6"
            >
              Why Choose Zion Tech Group?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space - y-6 mb-8"
            >
              {benefits.map((benefit, index) => (<motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items - center gap-4 text-left"
                >
                  <div  className="w-12 h-12 bg-gradient - to - br from - cyan - 500 to - blue - 600 rounded-xl flex items - center justify - center flex - shrink -0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font - semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate - 300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>) ) }
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid - cols - 2 gap-6"
            >
              {stats.map((stat, index) => (<motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div  className="text-3xl font - bold text-cyan - 400 mb-1">
                    {stat.number}
                  </div>
                  <div  className="text-slate - 300 text-sm">{stat.label}</div>
                </motion.div>) ) }
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-8 p - 6 bg-white / 10 border border-slate - 600 / 30 rounded-xl backdrop - blur -md"
            >
              <div  className="flex items - center gap-3 mb-3">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font - semibold text-white">
                  Trusted by Industry Leaders
                </h3>
              </div>
              <p className="text-slate - 300 text-sm">
                Join thousands of businesses that trust Zion Tech Group to drive
                their digital transformation and innovation initiatives.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>) ;
};

