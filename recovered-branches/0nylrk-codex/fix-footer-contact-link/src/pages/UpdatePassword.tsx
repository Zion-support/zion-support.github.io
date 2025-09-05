

import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Form validation schema
const _updatePasswordSchema = z
  .object({_password: z
      .string()
      .min(8, _"Password must be at least 8 characters")
      .max(64, _"Password must be less than 64 characters"), _confirmPassword: z.string()})
  .refine(_(data) => data.password === data.confirmPassword, {_message: "Passwords do not match", _path: ["confirmPassword"]});

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;

export default function UpdatePassword() {_const [isLoading, _setIsLoading] = useState(false);
  const [accessToken, _setAccessToken] = useState<string | null>(null);
  const [error, _setError] = useState<string | null>(null);
  const [success, _setSuccess] = useState(false);
  const _navigate = useNavigate();
  const _location = useLocation();

  // Initialize react-hook-form
  const _form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema), _defaultValues: {
      password: "", _confirmPassword: ""}});

  useEffect__(() => {_// Extract access token from window.URL hash
    const _hashParams = new URLSearchParams(location.hash.substring(1));
    const _token = hashParams.get("access_token");
    
    if (token) {
      setAccessToken(token);} else {_setError("No access token found. Please request a new password reset link.");}

    // Clean up auth state to prevent issues
    cleanupAuthState();
  }, [location]);

  // Form submission handler
  const _onSubmit = async (_data: UpdatePasswordFormValues) => {_if (!accessToken) {
      setError("No access token found. Please request a new password reset link.");
      return;}

    setIsLoading(true);
    try {_// Set the session with the access token
      await supabase.auth.setSession({
        access_token: accessToken, _refresh_token: ''});

      // Update the password
      const {_error} = await supabase.auth.updateUser({_password: data.password});

      if (error) {_toast({
          title: "Password update failed", _description: error.message, _variant: "destructive"});
        setError(error.message);
        return;
      }

      // Show success message and clean up auth state
      setSuccess(true);
      toast({_title: "Password updated successfully", _description: "You can now log in with your new password."});

      // Clean auth state and redirect after a delay
      cleanupAuthState();
      setTimeout__(() => {_navigate("/login");}, 3000);
    } catch (error: unknown) {_toast({
        title: "Password update failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
      setError(error.message || "An unexpected error occurred");
    } finally {_setIsLoading(false);}
  };

  return (_<>
      <Header />
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Update your password
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Enter your new password below.
              </p>
            </div>

            <div className="bg-zion-blue-dark rounded-lg p-6">
              {_error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">
                  <p className="text-sm">{error}</p>
                  <Button 
                    className="mt-3 text-xs"
                    variant="outline"
                    onClick={_() => navigate('/forgot-password')}
                  >
                    Request new reset link
                  </Button>
                </div>
              )}

              {_success ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">
                    <LockKeyhole className="h-6 w-6 text-zion-purple" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Password updated</h3>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    Your password has been successfully updated.
                  </p>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    Redirecting you to login...
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={_form.control}
                      name="password"
                      render={_(_{ field}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">New Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              placeholder="••••••••"
                              disabled={_isLoading}
                              {_...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={_form.control}
                      name="confirmPassword"
                      render={_(_{ field}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              placeholder="••••••••"
                              disabled={_isLoading}
                              {_...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={_isLoading || !accessToken}
                    >
                      {_isLoading ? "Updating..." : "Update Password"}
                    </Button>

                    <div className="text-center">
                      <Button
                        variant="link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0"
                        onClick={_() => navigate("/login")}
                        type="button"
                      >
                        Back to login
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3>
                <p className="text-lg text-white/80">
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.
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
