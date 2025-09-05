
<<<<<<< HEAD
import { useState } from "react",;
import { Link, Navigate } from "react-router-dom",;
import { useForm, type UseFormReturn } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",;
;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Checkbox } from "@/components/ui/checkbox",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
;
// Form validation schema;
const signupSchema = z;
  .object({;
    displayName:z.string().min(2, "Name must be at least 2 characters"),;
    email:z.string().email("Please enter a valid email"),;
    password:z.string();
      .min(8, "Password must be at least 8 characters");
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter");
      .regex(/[a-z]/, "Password must contain at least one lowercase letter");
      .regex(/[0-9]/, "Password must contain at least one number"),;
    confirmPassword:z.string(),;
    termsAccepted:z.boolean().refine(val => val === true, {;
      message:"You must accept the terms and conditions"})});
  .refine(data => data.password === data.confirmPassword, {;
    message:"Passwords do not match",;
    path:["confirmPassword"]}),;
;
type SignupFormValues = z.infer<typeof signupSchema>,;
;
export default function Signup() {;
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  // Initialize react-hook-form;
  const form = useForm({;
    resolver:zodResolver(signupSchema),;
    defaultValues:{;
      displayName:"",;
      email:"",;
      password:"",;
      confirmPassword:"",;
      termsAccepted:false}}) as UseFormReturn<SignupFormValues>,;
;
  // Form submission handler;
  const onSubmit = async (data:SignupFormValues) => {;
    if (isSubmitting) return, // Prevent multiple submissions;
    ;
    setIsSubmitting(true),;
    try {;
      await signup(data.email, data.password, data.displayName),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />,;
  }
  ;
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />,;
  }
;
  return (;
    <>;
      <Header />;
      <div className="flex min-h-screen bg-zion-blue">;
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">;
          <div className="mx-auto w-full max-w-sm lg:w-96">;
            <div className="text-center mb-10">;
              <h2 className="text-3xl font-bold tracking-tight text-white">;
                Create your account;
              </h2>;
              <p className="mt-2 text-sm text-zion-slate-light">;
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
                  Sign in;
                </Link>;
              </p>;
            </div>;
;
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              <Form {...form}>;
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>;
                  <FormField;
                    control={form.control}
                    name="displayName";
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              placeholder="John Doe";
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              {...field}
                              aria-autocomplete="none";
                              autoComplete="off";
                            />;
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
=======
import { useState } from "react",
import { Link, Navigate } from "react-router-dom",
import { useForm, type UseFormReturn } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",

import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Checkbox } from "@/components/ui/checkbox",import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
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
    message: "Passwords do not match",
    path: ["confirmPassword"]}),const _signupSchema = z
  .object({_displayName: z.string().min(2, _"Name must be at least 2 characters"), _email: z.string().email("Please enter a valid email"), _password: z.string()
      .min(8, _"Password must be at least 8 characters")
      .regex(/[A-Z]/, _"Password must contain at least one uppercase letter")
      .regex(/[a-z]/, _"Password must contain at least one lowercase letter")
      .regex(/[0-9]/, _"Password must contain at least one number"), _confirmPassword: z.string(), _termsAccepted: z.boolean().refine(val => val === true, _{
      message: "You must accept the terms and conditions"})})
  .refine(data => data.password === data.confirmPassword, {_message: "Passwords do not match", _path: ["confirmPassword"]});

type SignupFormValues = z.infer<typeof signupSchema>,

export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false}}) as UseFormReturn<SignupFormValues>,
  // Form submission handler
  const onSubmit = async (data: SignupFormValues) => {
    if (isSubmitting) return, // Prevent multiple submissions
export default function Signup() {_const { signup, _loginWithGoogle, _loginWithFacebook, _loginWithTwitter, _isLoading, _isAuthenticated, _user} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize react-hook-form
  const _form = useForm({_resolver: zodResolver(signupSchema), _defaultValues: {
      displayName: "", _email: "", _password: "", _confirmPassword: "", _termsAccepted: false}}) as UseFormReturn<SignupFormValues>;

  // Form submission handler
  const _onSubmit = async (_data: SignupFormValues) => {_if (isSubmitting) return; // Prevent multiple submissions
    
    setIsSubmitting(true),
    try {
      await signup(data.email, data.password, data.displayName)
    } finally {
      setIsSubmitting(false)
    }
  },

  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />  }
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />  }
      await signup(data.email, _data.password, _data.displayName);} finally {_setIsSubmitting(false);}
  };

  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {_return <Navigate to="/" />;}
  
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {_return <Navigate to="/onboarding" />;}

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
                <Link to=&quot;/login&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>                  Sign in
                </Link>
              </p>
            </div>

            <div className=&quot;bg-zion-blue-dark rounded-lg p-6&quot;>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot; noValidate>
                  <FormField
                    control={form.control}
                    name=&quot;displayName&quot;
                    render={({ field }) => (                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Full Name</FormLabel>
                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              placeholder=&quot;John Doe&quot;
                              className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              aria-autocomplete=&quot;none&quot;
                              autoComplete=&quot;off&quot;                            />
                            <User className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    )}
                  />;
;
                  <FormField;
                    control={form.control}
<<<<<<< HEAD
                    name="email";
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              placeholder="you@example.com";
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              {...field}
                              autoComplete="off";
                              aria-autocomplete="none";
                              type="email";
                            />;
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
=======
                    name=&quot;email&quot;
                    render={({ field }) => (                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Email address</FormLabel>
                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              placeholder=&quot;you@example.com&quot;
                              className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              autoComplete=&quot;off&quot;
                              aria-autocomplete=&quot;none&quot;
                              type=&quot;email&quot;                            />
                            <Mail className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    )}
                  />;
;
                  <FormField;
                    control={form.control}
<<<<<<< HEAD
                    name="password";
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              type={showPassword ? "text" :"password"}
                              placeholder="••••••••";
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple";
                              {...field}
                              autoComplete="new-password";
                            />;
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            <Button;
                              type="button";
                              variant="ghost";
                              size="sm";
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
                              onClick={() => setShowPassword(!showPassword)}
                            >;
                              {showPassword ? (;
                                <EyeOff className="h-4 w-4" />;
                              ) :(;
                                <Eye className="h-4 w-4" />;
                              )}
                              <span className="sr-only">;
                                {showPassword ? "Hide password" :"Show password"}
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
=======
                    name=&quot;password&quot;
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Password</FormLabel>                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                              placeholder=&quot;••••••••&quot;
                              className=&quot;bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              autoComplete=&quot;new-password&quot;                            />
                            <Lock className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                            <Button
                              type=&quot;button&quot;
                              variant=&quot;ghost&quot;
                              size=&quot;sm&quot;
                              className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className=&quot;h-4 w-4&quot; />                              ) : (
                                <Eye className=&quot;h-4 w-4&quot; />
                              )}
                              <span className=&quot;sr-only&quot;>
                                {showPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    )}
                  />;
;
                  <FormField;
                    control={form.control}
<<<<<<< HEAD
                    name="confirmPassword";
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              type={showConfirmPassword ? "text" :"password"}
                              placeholder="••••••••";
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple";
                              {...field}
                              autoComplete="new-password";
                            />;
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            <Button;
                              type="button";
                              variant="ghost";
                              size="sm";
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >;
                              {showConfirmPassword ? (;
                                <EyeOff className="h-4 w-4" />;
                              ) :(;
                                <Eye className="h-4 w-4" />;
                              )}
                              <span className="sr-only">;
                                {showConfirmPassword ? "Hide password" :"Show password"}
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
=======
                    name=&quot;confirmPassword&quot;
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Confirm Password</FormLabel>                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <Input
                              type={showConfirmPassword ? &quot;text&quot; : &quot;password&quot;}
                              placeholder=&quot;••••••••&quot;
                              className=&quot;bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple&quot;
                              {...field}
                              autoComplete=&quot;new-password&quot;                            />
                            <Lock className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                            <Button
                              type=&quot;button&quot;
                              variant=&quot;ghost&quot;
                              size=&quot;sm&quot;
                              className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className=&quot;h-4 w-4&quot; />                              ) : (
                                <Eye className=&quot;h-4 w-4&quot; />
                              )}
                              <span className=&quot;sr-only&quot;>
                                {showConfirmPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    )}
                  />;
;
                  <FormField;
                    control={form.control}
<<<<<<< HEAD
                    name="termsAccepted";
                    render={({ field }) => (;
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                        <FormControl>;
                          <Checkbox;
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
                          />;
                        </FormControl>;
                        <div className="space-y-1 leading-none">;
                          <FormLabel className="text-sm text-zion-slate-light">;
                            I agree to the{" "}
                            <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light">;
                              Terms of Service;
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">;
                              Privacy Policy;
                            </a>;
                          </FormLabel>;
                          <FormMessage className="text-red-400" />;
                        </div>;
                      </FormItem>;
                    )}
                  />;
;
                  <Button;
                    type="submit";
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                    disabled={isLoading || isSubmitting}
                  >;
                    {isLoading ? "Creating Account..." :"Create Account"}
                  </Button>;
                </form>;
              </Form>;
;
              <div className="mt-6">;
                <div className="relative">;
                  <div className="absolute inset-0 flex items-center">;
                    <div className="w-full border-t border-zion-blue-light" />;
                  </div>;
                  <div className="relative flex justify-center text-sm">;
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;
                  </div>;
                </div>;
;
                <div className="mt-6 grid grid-cols-3 gap-3">;
                  <Button;
                    type="button";
                    variant="outline";
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
                    onClick={() => loginWithGoogle()}
                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Google</span>;
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">;
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />;
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />;
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />;
                      <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />;
                    </svg>;
                  </Button>;
                  <Button;
                    type="button";
                    variant="outline";
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
                    onClick={() => loginWithFacebook()}
                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Facebook</span>;
                    <Facebook className="h-5 w-5" />;
                  </Button>;
                  <Button;
                    type="button";
                    variant="outline";
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
                    onClick={() => loginWithTwitter()}
                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Twitter</span>;
                    <Twitter className="h-5 w-5" />;
                  </Button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
        <div className="hidden lg:block relative w-0 flex-1">;
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80">;
            <div className="flex flex-col justify-center items-center h-full px-8">;
              <div className="max-w-md text-center">;
                <h3 className="text-3xl font-bold text-white mb-4">Join the Future of AI Marketplace</h3>;
                <p className="text-lg text-white/80">;
                  Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  ),;
=======
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
                            <a href=&quot;/privacy&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light&quot;>                              Privacy Policy
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
                    {isLoading ? &quot;Creating Account...&quot; : &quot;Create Account&quot;}                  </Button>
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
                    disabled={isLoading || isSubmitting}                  >
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
                    disabled={isLoading || isSubmitting}                  >
                    <span className=&quot;sr-only&quot;>Sign in with Facebook</span>
                    <Facebook className=&quot;h-5 w-5&quot; />
                  </Button>
                  <Button
                    type=&quot;button&quot;
                    variant=&quot;outline&quot;
                    className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
                    onClick={() => loginWithTwitter()}
                    disabled={isLoading || isSubmitting}                  >
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
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
