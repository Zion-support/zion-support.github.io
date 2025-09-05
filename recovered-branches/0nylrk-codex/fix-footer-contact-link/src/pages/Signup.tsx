
import { useState } from &quot;react&quot;;
import { Link, Navigate } from &quot;react-router-dom&quot;;
import { useForm, type UseFormReturn } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from &quot;lucide-react&quot;;

import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;

// Form validation schema
const signupSchema = z
  .object({
    displayName: z.string().min(2, &quot;Name must be at least 2 characters&quot;),
    email: z.string().email(&quot;Please enter a valid email&quot;),
    password: z.string()
      .min(8, &quot;Password must be at least 8 characters&quot;)
      .regex(/[A-Z]/, &quot;Password must contain at least one uppercase letter&quot;)
      .regex(/[a-z]/, &quot;Password must contain at least one lowercase letter&quot;)
      .regex(/[0-9]/, &quot;Password must contain at least one number&quot;),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine(val => val === true, {
      message: &quot;You must accept the terms and conditions&quot;})})
  .refine(data => data.password === data.confirmPassword, {
    message: &quot;Passwords do not match&quot;,
    path: [&quot;confirmPassword&quot;]});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      displayName: "&quot;,
      email: "&quot;,
      password: "&quot;,
      confirmPassword: "&quot;,
      termsAccepted: false}}) as UseFormReturn<SignupFormValues>;

  // Form submission handler
  const onSubmit = async (data: SignupFormValues) => {
    if (isSubmitting) return; // Prevent multiple submissions
    
    setIsSubmitting(true);
    try {
      await signup(data.email, data.password, data.displayName);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to=&quot;/&quot; />;
  }
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to=&quot;/onboarding&quot; />;
  }

  return (
    <>
      <Header />
      <div className=&quot;flex min-h-screen bg-zion-blue&quot;>
        <div className=&quot;flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24&quot;>
          <div className=&quot;mx-auto w-full max-w-sm lg:w-96&quot;>
            <div className=&quot;text-center mb-10&quot;>
              <h2 className=&quot;text-3xl font-bold tracking-tight text-white&quot;>
                Create your account
              </h2>
              <p className=&quot;mt-2 text-sm text-zion-slate-light&quot;>
                Already have an account?{&quot; &quot;}
                <Link to=&quot;/login&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>
                  Sign in
                </Link>
              </p>
            </div>

            <div className=&quot;bg-zion-blue-dark rounded-lg p-6&quot;>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot; noValidate>
                  <FormField
                    control={form.control}
                    name=&quot;displayName&quot;
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Full Name</FormLabel>
                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              placeholder=&quot;John Doe&quot;
                              className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              aria-autocomplete=&quot;none&quot;
                              autoComplete=&quot;off&quot;
                            />
                            <User className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name=&quot;email&quot;
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Email address</FormLabel>
                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              placeholder=&quot;you@example.com&quot;
                              className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              autoComplete=&quot;off&quot;
                              aria-autocomplete=&quot;none&quot;
                              type=&quot;email&quot;
                            />
                            <Mail className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name=&quot;password&quot;
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Password</FormLabel>
                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                              placeholder=&quot;••••••••&quot;
                              className=&quot;bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              autoComplete=&quot;new-password&quot;
                            />
                            <Lock className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                            <Button
                              type=&quot;button&quot;
                              variant=&quot;ghost&quot;
                              size=&quot;sm&quot;
                              className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className=&quot;h-4 w-4&quot; />
                              ) : (
                                <Eye className=&quot;h-4 w-4&quot; />
                              )}
                              <span className=&quot;sr-only&quot;>
                                {showPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name=&quot;confirmPassword&quot;
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Confirm Password</FormLabel>
                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              type={showConfirmPassword ? &quot;text&quot; : &quot;password&quot;}
                              placeholder=&quot;••••••••&quot;
                              className=&quot;bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              autoComplete=&quot;new-password&quot;
                            />
                            <Lock className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                            <Button
                              type=&quot;button&quot;
                              variant=&quot;ghost&quot;
                              size=&quot;sm&quot;
                              className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className=&quot;h-4 w-4&quot; />
                              ) : (
                                <Eye className=&quot;h-4 w-4&quot; />
                              )}
                              <span className=&quot;sr-only&quot;>
                                {showConfirmPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name=&quot;termsAccepted&quot;
                    render={({ field }) => (
                      <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className=&quot;data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
                          />
                        </FormControl>
                        <div className=&quot;space-y-1 leading-none&quot;>
                          <FormLabel className=&quot;text-sm text-zion-slate-light&quot;>
                            I agree to the{&quot; &quot;}
                            <a href=&quot;/terms&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light&quot;>
                              Terms of Service
                            </Link>{&quot; &quot;}
                            and{&quot; &quot;}
                            <a href=&quot;/privacy&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light&quot;>
                              Privacy Policy
                            </Link>
                          </FormLabel>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type=&quot;submit&quot;
                    className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                    disabled={isLoading || isSubmitting}
                  >
                    {isLoading ? &quot;Creating Account...&quot; : &quot;Create Account&quot;}
                  </Button>
                </form>
              </Form>

              <div className=&quot;mt-6&quot;>
                <div className=&quot;relative&quot;>
                  <div className=&quot;absolute inset-0 flex items-center&quot;>
                    <div className=&quot;w-full border-t border-zion-blue-light&quot; />
                  </div>
                  <div className=&quot;relative flex justify-center text-sm&quot;>
                    <span className=&quot;px-2 bg-zion-blue-dark text-zion-slate-light&quot;>Or continue with</span>
                  </div>
                </div>

                <div className=&quot;mt-6 grid grid-cols-3 gap-3&quot;>
                  <Button
                    type=&quot;button&quot;
                    variant=&quot;outline&quot;
                    className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
                    onClick={() => loginWithGoogle()}
                    disabled={isLoading || isSubmitting}
                  >
                    <span className=&quot;sr-only&quot;>Sign in with Google</span>
                    <svg className=&quot;h-5 w-5&quot; aria-hidden=&quot;true&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path d=&quot;M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z&quot; fill=&quot;#EA4335&quot; />
                      <path d=&quot;M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z&quot; fill=&quot;#4285F4&quot; />
                      <path d=&quot;M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z&quot; fill=&quot;#FBBC05&quot; />
                      <path d=&quot;M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z&quot; fill=&quot;#34A853&quot; />
                    </svg>
                  </Button>
                  <Button
                    type=&quot;button&quot;
                    variant=&quot;outline&quot;
                    className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
                    onClick={() => loginWithFacebook()}
                    disabled={isLoading || isSubmitting}
                  >
                    <span className=&quot;sr-only&quot;>Sign in with Facebook</span>
                    <Facebook className=&quot;h-5 w-5&quot; />
                  </Button>
                  <Button
                    type=&quot;button&quot;
                    variant=&quot;outline&quot;
                    className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
                    onClick={() => loginWithTwitter()}
                    disabled={isLoading || isSubmitting}
                  >
                    <span className=&quot;sr-only&quot;>Sign in with Twitter</span>
                    <Twitter className=&quot;h-5 w-5&quot; />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=&quot;hidden lg:block relative w-0 flex-1&quot;>
          <div className=&quot;absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80&quot;>
            <div className=&quot;flex flex-col justify-center items-center h-full px-8&quot;>
              <div className=&quot;max-w-md text-center&quot;>
                <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>Join the Future of AI Marketplace</h3>
                <p className=&quot;text-lg text-white/80&quot;>
                  Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
