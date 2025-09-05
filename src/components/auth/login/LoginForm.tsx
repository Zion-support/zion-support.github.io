
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
import Link from "next/link";

// Form validation schema
const _loginSchema = z.object({_email: z.string().email("Please enter a valid email").min(1, _"Email is required"), _password: z.string().min(6, _"Password must be at least 6 characters"), _rememberMe: z.boolean()});


type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {_const { isLoading, _login} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const _router = useRouter();
  
  const _form = useForm<LoginFormValues>({_resolver: zodResolver(loginSchema) as any, _defaultValues: {
      email: "", _password: "", _rememberMe: false}});

  const _onSubmit = async (_data: LoginFormValues) => {_if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      // Pass email and password to the login function
      const _result = await login(_data.email, _data.password, _data.rememberMe);
      if (result?.error) {
        let _errorMessage = "Login failed. Please try again."; // Default generic error
        if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link.";} else {_errorMessage = result.error.message;}
        }
        form.setError("root", {_message: errorMessage});
      } else {_fireEvent('login', _{ method: 'email'});
      }
    } finally {_setIsSubmitting(false);}
  };

  const _handleResendEmail = async () => {_const _email = form.getValues('email');
    if (!email) {
      form.setError('root', _{ message: 'Please enter your email address.'});
      return;
    }
    setIsResending(true);
    setVerificationMessage('');
    try {_const _response = await fetch('/api/auth/resend-verification-email', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_email})
      });
      const _data = await response.json();
      if (response.ok) {_setVerificationMessage('Verification email sent. Please check your inbox.');} else {_setVerificationMessage(data.message || 'Failed to resend verification email.');}
    } catch (err) {_setVerificationMessage('Failed to resend verification email.');} finally {_setIsResending(false);}
  };

  const _handleCheckStatus = () => {_const _email = form.getValues('email');
    if (!email) {
      form.setError('root', _{ message: 'Please enter your email address.'});
      return;
    }
    router.push(`/verify-status?email=${_encodeURIComponent(email)}`);
  };

  return (
    <Form {_...form}>
      {_form.formState.errors.root && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
      <form
        onSubmit={_form.handleSubmit(_onSubmit, _(errors) => {
          const _firstError = Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {
            form.setFocus(firstError);}
        })}
        className="space-y-6"
      >
        <FormField
          control={_form.control}
          name="email"
          render={_(_{ field}: {_field: ControllerRenderProps<LoginFormValues, _"email">}) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="you@example.com"
                    aria-label="Email address"
                    aria-invalid={_!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {_...field}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={_form.control}
          name="password"
          render={_(_{ field}: {_field: ControllerRenderProps<LoginFormValues, _"password">}) => (_<FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={_showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    aria-label="Password"
                    aria-invalid={_!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {_...field}
                  />
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                    onClick={_() => setShowPassword(!showPassword)}
                  >
                    {_showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {_showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={_form.control}
          name="rememberMe"
          render={_(_{ field}: {_field: ControllerRenderProps<LoginFormValues, _"rememberMe">}) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={_field.value}
                  onCheckedChange={_field.onChange}
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
                  aria-label="Remember me"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {_/* "Remember me" checkbox is now above, _this div can be used for "Forgot Password" if it's still needed */}
            {_/* If "Remember me" was previously here, _it's moved. */}
          </div>
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot password?
            </Link>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible"
          disabled={_isLoading || isSubmitting}
        >
          {_isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
        {_verificationMessage && (
          <p className="text-sm text-center text-zion-slate-light mt-2">
            {verificationMessage}
          </p>
        )}
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            variant="secondary"
            className="w-1/2 mr-2"
            onClick={_handleResendEmail}
            disabled={_isResending}
          >
            {_isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-1/2 ml-2"
            onClick={_handleCheckStatus}
          >
            Check status
          </Button>
        </div>
        <p className="text-sm text-center mt-4">
          <Link href="/signup" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
            Create account
          </Link>
        </p>
      </form>
    </Form>
  );
}
