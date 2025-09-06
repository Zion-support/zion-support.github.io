

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
=======
  FormMessage,
} from '@/components / ui / form';
import { Alert, AlertDescription } from '@/components / ui / alert';
import Link from 'next / link';
import { Checkbox } from '@/components / ui / checkbox';// Form validation schema;
const login_schema = z.object ({
  email: z;
    .string ();
    .email ('Please enter a valid email');
    .min (1, 'Email is required'),
  password: z.string ().min (6, 'Password must be at least 6 characters'),
  remember_me: z.boolean (),
});
type LoginFormValues = z.infer < typeof login_schema>;
export /**
 * LoginForm - Function description
 */
function LoginForm() {
  const { is_loading, login } = use_auth ();
  const [show_password, setShowPassword] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
  const [is_resending, setIsResending] = useState (false);
  const [verification_message, setVerificationMessage] = useState ('');
  const router = use_router ();
  const form = use_form < LoginFormValues>({
    resolver: zod_resolver (login_schema) as any,
    default_values: {
      email: '',
      password: '',
      remember_me: false,
    },
  });
  const on_submit = async (data: LoginFormValues) => {
    // Check condition
if (return) {
  $2
}
    try {
      setIsSubmitting (true),
      // Pass email and password to the login function;
      const result = await login (data.email, data.password, data.remember_me);
      // Check condition
if ( {) {
  $2
}
        let error_message = 'Login failed. Please try again.'; // Default generic error;
        // Check condition
if ( {) {
  $2
}
          if (.includes ('email not confirmed')) {
  $2
}

          ) {
            error_message =;
              'Your email is not confirmed. Please check your inbox for a confirmation link.';

import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema) as any,
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true),
      // Pass email and password to the login function
      const result = await login(data.email, data.password, data.rememberMe);
      if (result?.error) {;
        let errorMessage = 'Login failed. Please try again.'; // Default generic error
        if (result?.error && result?.error?.message) {
          if (
            result.error.message.toLowerCase().includes('email not confirmed')
          ) {
            errorMessage =
              'Your email is not confirmed. Please check your inbox for a confirmation link.'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

    try {
      setIsSubmitting(true)
      // Pass email and password to the login function

      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {

          } else {
            error_message = result.error.message;
          }
        }

  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}

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

                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>

                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>

              <FormControl>
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
                <Checkbox

                  checked={field.value}
                  onCheckedChange={field.onChange}

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

}setIsResending (true);'
setVerificationMessage ('')
try {'
  const response = await fetch ('/api/auth/resend-verification-email', {'
  method: 'POST'
headers: {'
  'Content-Type': 'application/json'
}
body: JSON.stringify ({
  email
})
})
const data = await response.json ()
if (response.ok) {'
  setVerificationMessage ('Verification email sent. Please check your inbox.')
}else {'
  setVerificationMessage (data.message |'Failed to resend verification email.')
}catch (err) {'
  setVerificationMessage ('Failed to resend verification email.')
}finally {
  setIsResending (false)
}
const handleCheckStatus = () => {'
  const email = form.getValues ('email')
if (!email) {'
  form.setError ('root', {'
  message: 'Please enter your email address.'
})

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
