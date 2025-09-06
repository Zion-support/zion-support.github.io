

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
=======
  FormMessage,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  FormMessage} from "@/components/ui/form",
import { Alert, AlertDescription } from "@/components/ui/alert",
import Link from "next/link",
import { Checkbox } from "@/components/ui/checkbox",
// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean()}),


type LoginFormValues = z.infer<typeof loginSchema>,

export function LoginForm() {
  const { isLoading, login } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isResending, setIsResending] = useState(false),
  const [verificationMessage, setVerificationMessage] = useState(''),
  const router = useRouter(),
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema) as any
    defaultValues: {
      email: ''
      password: ''
      rememberMe: false
    }
  })
  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return
      email: "",
      password: "",
      rememberMe: false}}),

  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return,
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

    try {
      setIsSubmitting(true)
      // Pass email and password to the login function

      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          } else {
            error_message = result.error.message;
          }
        }

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit, errors => {
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues

=======
          if (firstError) {
            form.setFocus(firstError)
          }        })}
        className='space-y-6'
      >
        <FormField
          control={form.control}
          name='email'
          render={({
            field
          }: {
            field: ControllerRenderProps<LoginFormValues, 'email'>
          }) => (            <FormItem>
              <FormLabel className='text-zion-slate-light'>
                Email address
              </FormLabel>
      <form;
        onSubmit={form.handleSubmit(onSubmit, (errors) => {;
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {;
            form.setFocus(firstError);
          }
        })}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
              <FormControl>
                <div className='relative'>
            field: ControllerRenderProps<LoginFormValues, 'email'>;
          }) => (            <FormItem>;
              <FormLabel className='text-zion-slate-light'>;
            field: ControllerRenderProps < LoginFormValues, 'email'>;
          }) => (            <FormItem>;
              <FormLabel className='text - zion - slate - light'>;
                Email address;
              </FormLabel>;
              <FormControl>;
                <div className='relative'>;

                  <Input;
                    placeholder='you@example.com';
                    aria - label='Email address';
                    aria - invalid={!!form.form_state.errors.email}
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}
                  />;
                  <User className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                </div>;
              </FormControl>;
              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name='password';

          render={({
            field
          }: {

            field: ControllerRenderProps<LoginFormValues, 'password'>;
          }) => (            <FormItem>;
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>;
              <FormControl>;
                <div className='relative'>;

                  <Input
              <FormControl>
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
                <Checkbox

                  checked={field.value}
                  onCheckedChange={field.onChange}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />;
        <div className='flex items-center justify-between'>;
          <div className='text-sm'>;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}

            field: ControllerRenderProps < LoginFormValues, 'remember_me'>;
          }) => (
            <FormItem className='flex flex - row items - start space - x-3 space - y-0'>;
              <FormControl>;
                <Checkbox;
                  checked={field.value}
                  onCheckedChange={field.on_change}
                  className='border - zion - blue - light data-[state = checked]:bg - zion - purple data-[state = checked]:text - white';
                  aria - label='Remember me'                />;
              </FormControl>;
              <div className='space - y-1 leading - none'>;
                <FormLabel className='text - zion - slate - light'>;
                  Remember me;
                </FormLabel>;
              </div>;
            </FormItem>)}
        />;
        <div className='flex items - center justify - between'>;
          <div className='text - sm'>;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;
          <div className='text - sm'>;
            <Link;
              href='/forgot - password';
              className='font - medium text - zion - cyan hover:text - zion - cyan - light';
            >;

              Forgot password?;
            </Link>;
          </div>;
        </div>;

          disabled={isLoading || isSubmitting}>;
          {isLoading || isSubmitting ? 'Logging in...' : 'Login'}
        </Button>;
        {verificationMessage && (;
          <p className='text-sm text-center text-zion-slate-light mt-2'>;

            {verificationMessage}
          </p>;
        )}
        <div className='flex justify-between mt-4'>;
          <Button
            type='button'
            variant='secondary'
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
            disabled={isResending}>;
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>;
          <Button
            type='button'
            variant='outline'
            className='w-1/2 ml-2'
            onClick={handleCheckStatus}>;
            Check status;
          </Button>;
        </div>;
        <p className='text-sm text-center mt-4'>;
          <Link
            href='/signup'

          </div>
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot password?
            </Link>
          </div>
        </div>
        <Button

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            Check status
          </Button>
        </div>
        <p className="text-sm text-center mt-4">
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">
            Create account
          </Link>
        </p>
      </form>
    </Form>
  )
}else {
  fireEvent ('login', {'
  method: 'email'
})
}finally {
  setIsSubmitting (false)
}
const handleResendEmail = async () => {'
  const email = form.getValues ('email')
if (!email) {'
  form.setError ('root', {'
  message: 'Please enter your email address.'
})
return
return;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
}router.push (`/verify-status?email=$ {
  encodeURIComponent (email)
}`)
}
}> {
  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message
}</AlertDescription> </Alert>)
}<form
}) "
}className="space-y-6" > <FormField text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) "
}</span> </Button> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me</FormLabel> </div> </FormItem>) "
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password? </Link> </div> </div> <Button {
  verificationMessage
}</p>) "
}<div className=" flex justify-between mt-4" > <Button > {'
  isResending ? 'Sending...': 'Resend / Verify e-mail'
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>)
}'"}
<<<<<<< HEAD
