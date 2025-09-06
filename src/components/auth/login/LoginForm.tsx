import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

// Form validation schema
const loginSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email')
    .min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { isLoading, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema) as any,
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

    try {
      setIsSubmitting(true);
      // Pass email and password to the login function
      const result = await login(data.email, data.password, data.rememberMe);
      if (result?.error) {
        let errorMessage = 'Login failed. Please try again.'; // Default generic error
        if (result?.error && result?.error?.message) {
          if (
            result.error.message.toLowerCase().includes('email not confirmed')
          ) {
            errorMessage =
              'Your email is not confirmed. Please check your inbox for a confirmation link.';
          } else {
            errorMessage = result.error.message;
          }
        }
        form.setError('root', { message: errorMessage });
      } else {
        fireEvent('login', { method: 'email' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendEmail = async () => {
    const email = form.getValues('email');
    if (!email) {
      form.setError('root', { message: 'Please enter your email address.' });
      return;
    }
    setIsResending(true);
    setVerificationMessage('');
    try {
      const response = await fetch('/api/auth/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setVerificationMessage(
          'Verification email sent. Please check your inbox.'
        );
      } else {
        setVerificationMessage(
          data.message || 'Failed to resend verification email.'
        );
      }
    } catch (err) {
      setVerificationMessage('Failed to resend verification email.');
    } finally {
      setIsResending(false);
    }
  };

  const handleCheckStatus = () => {
    const email = form.getValues('email');
    if (!email) {
      form.setError('root', { message: 'Please enter your email address.' });
      return;
    }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`);
  };

  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant='destructive' className='mb-4'>
          <AlertDescription>
            {form.formState.errors.root.message}
          </AlertDescription>
        </Alert>
      )}
      <form

        })}
        className='space-y-6'
      >
        <FormField

            <FormItem>
              <FormLabel className='text-zion-slate-light'>
                Email address
              </FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input

                    {...field}
                  />
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>
          )}
        />
        <FormField

            <FormItem>
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input

                    {...field}
                  />
                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                  <Button

                  >
                    {showPassword ? (
                      <EyeOff className='h-4 w-4' />
                    ) : (
                      <Eye className='h-4 w-4' />
                    )}
                    <span className='sr-only'>
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>
          )}
        />
        <FormField

                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel className='text-zion-slate-light'>
                  Remember me
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className='flex items-center justify-between'>
          <div className='text-sm'>
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
          </div>
          <div className='text-sm'>
            <Link
              href='/forgot-password'
              className='font-medium text-zion-cyan hover:text-zion-cyan-light'
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <Button

        >
          {isLoading || isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
        {verificationMessage && (
          <p className='text-sm text-center text-zion-slate-light mt-2'>
            {verificationMessage}
          </p>
        )}
        <div className='flex justify-between mt-4'>
          <Button

          >
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button

          >
            Check status
          </Button>
        </div>
        <p className='text-sm text-center mt-4'>
          <Link
            href='/signup'
            className='font-medium text-zion-cyan hover:text-zion-cyan-light'
          >
            Create account
          </Link>
        </p>
      </form>
    </Form>
  );

}else {;
  fireEvent ('login', {';
  method: 'email' ;
}) ;

}finally {;
  setIsSubmitting (false) ;

};
const handleResendEmail = async () => {';
  const email = form.getValues ('email');
if (!email) {';
  form.setError ('root', {';
  message: 'Please enter your email address.' ;
});
return ;
}setIsResending (true);';
setVerificationMessage ('');
try {';
  const response = await fetch ('/api/auth/resend-verification-email', {';
  method: 'POST';
headers: {';
  'Content-Type': 'application/json' ;
};
body: JSON.stringify ({;
  email ;
}) ;
});
const data = await response.json ();
if (response.ok) {';
  setVerificationMessage ('Verification email sent. Please check your inbox.') ;
}else {';
  setVerificationMessage (data.message || 'Failed to resend verification email.') ;

}catch (err) {';
  setVerificationMessage ('Failed to resend verification email.') ;
}finally {;
  setIsResending (false) ;

};
const handleCheckStatus = () => {';
  const email = form.getValues ('email');
if (!email) {';
  form.setError ('root', {';
  message: 'Please enter your email address.' ;
});
return ;
}router.push (`/verify-status?email=$ {;
  encodeURIComponent (email) ;
}`) ;
};

}> {;
  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message ;
}</AlertDescription> </Alert>) ;
}<form ;
}) ";
}className="space-y-6" > <FormField text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) ";
}</span> </Button> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me</FormLabel> </div> </FormItem>) ";
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password? </Link> </div> </div> <Button {;
  verificationMessage ;
}</p>) ";
}<div className=" flex justify-between mt-4" > <Button > {';
  isResending ? 'Sending...': 'Resend / Verify e-mail' ;
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>) ;
}'"