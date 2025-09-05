

import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Form validation schema
const _loginSchema = z.object({_email: z.string().email("Please enter a valid email").min(1, _"Email is required"), _password: z.string().min(6, _"Password must be at least 6 characters")});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {_const { login, _isLoading} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const _form = useForm<LoginFormValues>({_resolver: zodResolver(loginSchema), _defaultValues: {
      email: "", _password: ""}});

  const _onSubmit = async (_data: LoginFormValues) => {_if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      await login(data.email, _data.password);} finally {_setIsSubmitting(false);}
  };

  return (
    <Form {_...form}>
      <form 
        onSubmit={_form.handleSubmit(onSubmit)} 
        className="space-y-6"
        autoComplete="off" // Disable browser autofill
      >
        <FormField
          control={_form.control}
          name="email"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="you@example.com"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                    {_...field}
                    autoComplete="off" // Disable browser autofill
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
          render={_(_{ field}) => (_<FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={_showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                    {_...field}
                    autoComplete="off" // Disable browser autofill
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

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          disabled={_isLoading || isSubmitting}
        >
          {_isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
