




import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",








  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


const signupSchema = z;
  .object({;"
    displayName: z.string().min(2, "Name must be at least 2 characters"),;"
    email: z.string().email("Please enter a valid email"),;
    password: z.string();"

import { Footer } from '@/components / Footer';
// Form validation schema;
const signup_schema = z;
  .object ({"
    display_name: z.string ().min (2, "Name must be at least 2 characters");"
    email: z.string ().email ("Please enter a valid email"),
    password: z.string ();"
      .min (8, "Password must be at least 8 characters");"
      .regex (/[A - Z]/, "Password must contain at least one uppercase letter");"
      .regex (/[a - z]/, "Password must contain at least one lowercase letter");"
      .regex (/[0 - 9]/, "Password must contain at least one number");
    confirm_password: z.string (),
    terms_accepted: z.boolean ().refine (val => val === true, {"
      message: "You must accept the terms and conditions"})});
  .refine (data => data.password === data.confirm_password, {"
    message: "Passwords do not match","
    path: ["confirm_password"]}),
type SignupFormValues = z.infer < typeof signup_schema>;
;
export default /**;
 * Signup - Function description;
 */
function Signup() {}
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, is_loading, is_authenticated, user } = use_auth ();
  const [show_password, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  // Initialize react - hook - form;
  const form = use_form ({}
    resolver: zod_resolver (signup_schema),
    default_values: {"
      display_name: "","
      email: "","
      password: "","
      confirm_password: "",
      terms_accepted: false}}) as UseFormReturn < SignupFormValues>,
  // Form submission handler;
  const on_submit = async (data: SignupFormValues) => {}
    // Check condition;
if (return, // Prevent multiple submissions) {}
  $2;
}
    setIsSubmitting (true);
    try {}
      await signup (data.email, data.password, data.display_name);
    } finally {}
      setIsSubmitting (false);
    }
  }
;
  // Redirect if user is already logged in and has completed profile;
  // Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/" />;
  }'
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  // Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/onboarding" />;

  }
  return (
    <>;

                    )}
                  <FormField;
                    control={form && form.control}"
                    name="email"
                    render={({ field }) => (;
                      <FormItem>;"
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
                        <FormControl>;"
                          <div className="relative">;
                            <Input"
                              placeholder="you@example && example.com"

            <div className="bg-zion-blue-dark rounded-lg p-6">;
              <Form {...form}>;
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>;
                  <FormField;
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="John Doe"
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}

// Form validation schema;
const signupSchema = z;
  .object({;
    displayName: z.string().min(2, "Name must be at least 2 characters"),;
    email: z.string().email("Please enter a valid email"),;
    password: z.string();
    confirmPassword: z.string(),;
    termsAccepted: z.boolean().refine(val => val === true, {;
      message: "You must accept the terms and conditions"})});
  .refine(data => data.password === data.confirmPassword, {;
    message: "Passwords do not match",;
    path: ["confirmPassword"]}),;
type SignupFormValues = z.infer<typeof signupSchema>,;



  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;

                              placeholder="you@example && example.com"

                        </FormControl>;"
                        <FormMessage className="text-red-400" />;


                    render={({ field }) => (;
                      <FormItem>;"
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>;
                        <FormControl>;"
                          <div className="relative">;


                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"

                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                              {...field}"
                              autoComplete="new-password"


                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••";
                              className="bg - zion - blue pl - 10 text - white border - zion - blue - light focus:border - zion - purple";
                              {...field}

                              auto_complete="new - password";
                            />;
                            <Lock className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                            <Button;
                              type="button";
                              variant="ghost";
                              size="sm";
                              className="absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan";
                              on_click={() => setShowConfirmPassword (!showConfirmPassword)}


                  <FormField
                    control={form && form.control}
                    name="termsAccepted"
                    render={({ field }) => (;
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                        <FormControl>;
                          <Checkbox
                            checked={field && field.value}
                            onCheckedChange={field && field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
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

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled={isLoading || isSubmitting}>;
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>;
                </form>;
              </Form>;

              <div className="mt-6">;
                <div className="relative">;
                  <div className="absolute inset-0 flex items-center">;
                    <div className="w-full border-t border-zion-blue-light" />;
                  </div>;
                  <div className="relative flex justify-center text-sm">;
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;
                  </div>;
                </div>;

                <div className="mt-6 grid grid-cols-3 gap-3">;



                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"

                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Google</span>;
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">;
                    onClick={() => loginWithGoogle()}

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

}
;




