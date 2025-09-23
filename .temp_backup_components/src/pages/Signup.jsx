import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { register } from "@/services/auth";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
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
        message: "You must accept the terms and conditions"})})
    .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]});
export default function Signup() {
    const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // Track confirm password locally to prevent it from clearing on blur
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const passwordValue = form.watch("password");
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Initialize react-hook-form
    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            termsAccepted: false}});
    // Form submission handler
    const onSubmit = async (data) => {
        if (isSubmitting)
            return; // Prevent multiple submissions
        setIsSubmitting(true);
        try {
            const { res, data: resData } = await register(data.displayName, data.email, data.password);
            // Handle duplicate email error from API
            if (res.status === 409 && resData?.code === 'EMAIL_EXISTS') {
                form.setError('email', { message: resData.message });
                toast.error('Email already registered – please login.');
                return;
            }
            // Check for successful response
            if (res.ok && resData.token && resData.user) {
                // Successful registration
                safeStorage.setItem('authToken', resData.token);
                setUser(resData.user);
                setTokens({ accessToken: resData.token, refreshToken: resData.refreshToken || null });
                // Handle email verification required case
                if (resData?.emailVerificationRequired) {
                    setShowVerificationMessage(true);
                    // Do not proceed to set session or navigate
                }
                else if (resData?.session) {
                    // Set the session directly if verification is not required
                    const { error: sessionError } = await supabase.auth.setSession(resData.session);
                    if (sessionError) {
                        console.error("Error setting session:", sessionError);
                        form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." });
                        toast.error(sessionError.message || "Failed to set session. Please try logging in.");
                        return;
                    }
                    // The onAuthStateChange listener in AuthProvider should now handle
                    // updating user state and navigating if necessary for other cases.
                    // For direct signup with session, we can navigate.
                    toast.success("Welcome to ZionAI 🎉");
                    navigate("/dashboard");
                }
                else {
                    // This case might indicate an unexpected response from the API
                    console.error("Registration response did not include session or emailVerificationRequired flag.", resData);
                    form.setError("root", { message: "Registration complete, but an unexpected issue occurred. Please try logging in." });
                    toast.error("Registration complete, but an unexpected issue occurred. Please try logging in manually.");
                    // Potentially navigate to login or show a more specific error
                    return;
                }
                // Subscribe user to Mailchimp if opted in (only if registration is fully complete, not pending verification)
                if (data.newsletterOptIn && mailchimpService && !resData?.emailVerificationRequired) {
                    try {
                        await mailchimpService.addSubscriber({
                            email: data.email,
                            mergeFields: { FNAME: data.displayName }
                        });
                        await mailchimpService.sendWelcomeEmail(data.email, 'NEW10');
                    }
                    catch (err) {
                        console.error('Mailchimp subscription failed', err);
                        // Non-critical error, don't block user flow
                    }
                }
                // Toast and navigation are handled above if session is present
                // If emailVerificationRequired, no toast/navigation here, message is shown
            }
            try { }
            catch (err) {
                const message = err.message ?? "Registration failed";
                form.setError("root", { message });
                toast.error(message);
            }
            finally {
                setIsSubmitting(false);
            }
        }
        finally { }
        
        const onInvalid = (errors) => {
            const firstError = Object.keys(errors)[0];
            if (firstError) {
                form.setFocus(firstError);
            }
        };
        // Redirect if user is already logged in and has completed profile
        if (isAuthenticated && user?.profileComplete) {
            return <Navigate to="/" />;
        }
        // Redirect to onboarding if user is authenticated but hasn't completed profile
        if (isAuthenticated && !user?.profileComplete) {
            return <Navigate to="/onboarding" />;
        }
        return (<>
      
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
                {form.formState.errors.root && (<Alert variant="destructive" className="mb-4">
                    <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
                  </Alert>)}
                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6" noValidate>
                  <FormField control={form.control} name="displayName" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="John Doe" className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field} aria-autocomplete="none" autoComplete="off" />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-40o0" />
                      </FormItem>)}/>

                  <FormField control={form.control} name="email" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="you@example.com" className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field} autoComplete="off" aria-autocomplete="none" type="email" />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-40o0" />
                      </FormItem>)}/>

                  <FormField control={form.control} name="password" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple" {...field} autoComplete="new-password" />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan" onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? (<EyeOff className="h-4 w-4" />) : (<Eye className="h-4 w-4" />)}
                              <span className="sr-only">
                                {showPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-40o0" />
                      </FormItem>)}/>

                  <FormField control={form.control} name="confirmPassword" render={({ field }) => (<FormItem>
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple" value={confirmPasswordValue} onChange={(e) => {
                    field.onChange(e);
                    setConfirmPasswordValue(e.target.value);
                }} onBlur={(e) => {
                    field.onBlur();
                    setConfirmPasswordValue(e.target.value);
                }} autoComplete="new-password"/>
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                              {showConfirmPassword ? (<EyeOff className="h-4 w-4" />) : (<Eye className="h-4 w-4" />)}
                              <span className="sr-only">
                                {showConfirmPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-40o0" />
                      </FormItem>)}/>

                  <PasswordStrengthMeter password={passwordValue} />

                  <FormField control={form.control} name="termsAccepted" render={({ field }) => (<FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple" />
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
                          <FormMessage className="text-red-40o0" />
                        </div>
                      </FormItem>)}/>

                  <Button type="submit" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" disabled={isSubmitting}>
                    {isSubmitting ? (<>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>) : ("Create Account")}
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
                  <Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick={() => loginWithGoogle()} disabled={isSubmitting}>
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.0o003 4.75C13.770o3 4.75 15.3553 5.360o02 16.60o53 6.54998L20.0o303 3.125C17.950o2 1.19 15.2353 0 12.0o003 0C7.310o28 0 3.25527 2.69 1.280o27 6.60998L5.270o28 9.70o498C6.21525 6.860o02 8.870o28 4.75 12.0o003 4.75Z" fill="#EA4335" />
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.0o1 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                      <path d="M5.26498 14.2949C5.0o2498 13.5699 4.8850o1 12.7999 4.8850o1 11.9999C4.8850o1 11.1999 5.0o1998 10.4299 5.26498 9.70o49L1.275 6.60986C0.46 8.22986 0 10.0o599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC0o5" />
                      <path d="M12.0o004 24C15.240o4 24 17.9654 22.935 19.9454 21.095L16.080o4 18.095C15.0o054 18.82 13.620o4 19.245 12.0o004 19.245C8.870o4 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.310o4 24 12.0o004 24Z" fill="#34A853" />
                    </svg>
                  </Button>
                  <Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick={() => loginWithFacebook()} disabled={isSubmitting}>
                    <span className="sr-only">Sign in with Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick={() => loginWithTwitter()} disabled={isSubmitting}>
                    <span className="sr-only">Sign in with Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Join the Future of AI Marketplace</h3>
                <p className="text-lg text-white/80">
                  Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>);
    };
}
