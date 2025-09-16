import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent  } from '@/lib/analytics';
import { useAuth } from "@/context/auth/AuthProvider",





import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,















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

    try {
      setIsSubmitting(true)
      // Pass email and password to the login function
      const result = await login(data.email, data.password, data.rememberMe)
      const result = await login(data.email, data.password, data.rememberMe),











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
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;

                <Checkbox

                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white'
                  aria-label='Remember me'                />
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
                  aria-label="Remember me"
                />






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
          type='submit'
          className='w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible'
          disabled={isLoading |isSubmitting}        >
          {isLoading |isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
        {verificationMessage && (
          <p className='text-sm text-center text-zion-slate-light mt-2'>
            {verificationMessage}
          </p>
        )}
        <div className='flex justify-between mt-4'>
          <Button
            type='button'
            variant='secondary'
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
            disabled={isResending}          >
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button
            type='button'
            variant='outline'
            className='w-1/2 ml-2'
            onClick={handleCheckStatus}          >
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible"
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
        {verificationMessage && (
          <p className="text-sm text-center text-zion-slate-light mt-2">
          name="rememberMe";
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (;
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
              <FormControl>;
                <Checkbox;
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white";
                  aria-label="Remember me";
                />;
              </FormControl>;
              <div className="space-y-1 leading-none">;
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>;
              </div>;
            </FormItem>;
          )}
        />
        <div className='flex items-center justify-between'>
          <div className='text-sm'>
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;
          <div className="text-sm">;
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
              Forgot password?;
            </Link>;
          </div>;
        </div>;
        <Button;
          type="submit";
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";
          disabled={isLoading || isSubmitting}
        >;
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>;
        {verificationMessage && (;
          <p className="text-sm text-center text-zion-slate-light mt-2">;
            {verificationMessage}
          </p>
        )}
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            variant="secondary"
            className="w-1/2 mr-2"
            onClick={handleResendEmail}
            disabled={isResending}
          >;
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-1/2 ml-2"
            onClick={handleCheckStatus}
          >






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





return;



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





return;



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
            className='font-medium text-zion-cyan hover:text-zion-cyan-light'>;
            Create account;
          </Link>;
        </p>;
      </form>;
    </Form>;
  );


        <Button;
          type='submit';
          className='w - full inline - flex items - center justify - center px - 4 py - 2 border border - transparent rounded - md shadow - sm text - base font - medium text - white bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - zion - purple - light visible';
          disabled={is_loading || is_submitting}        >;
          {is_loading || is_submitting ? 'Logging in...' : 'Login'}
        </Button>;
        {verification_message && (
          <p className='text - sm text - center text - zion - slate - light mt - 2'>;
            {verification_message}
          </p>)}
        <div className='flex justify - between mt - 4'>;
          <Button;
            type='button';
            variant='secondary';
            className='w - 1/2 mr - 2';
            on_click={handleResendEmail}
            disabled={is_resending}          >;
            {is_resending ? 'Sending...' : 'Resend / Verify e - mail'}
          </Button>;
          <Button;
            type='button';
            variant='outline';
            className='w - 1/2 ml - 2';
            on_click={handleCheckStatus}          >;
            Check status;
          </Button>;
        </div>;
        <p className='text - sm text - center mt - 4'>;
          <Link;
            href='/signup';
            className='font - medium text - zion - cyan hover:text - zion - cyan - light';
          >;
            Create account;
          </Link>;
        </p>;
      </form>;
    </Form>);
}else {
  fire_event ('login', {';
  method: 'email';
});
}finally {
  setIsSubmitting (false);

}
const handleResendEmail = async () => {';
  const email = form.get_values ('email');
// Check condition
if ( {') {
  $2
}
  form.set_error ('root', {';
  message: 'Please enter your email address.';
});
return;
}setIsResending (true);';
setVerificationMessage ('');
try {';
  const response = await fetch ('/api / auth / resend - verification - email', {';
  method: 'POST';
headers: {';
  'Content - Type': 'application / json';
}
body: JSON.stringify ({
  email;
});
});
const data = await response.json ();
// Check condition
if ( {') {
  $2
}
  setVerificationMessage ('Verification email sent. Please check your inbox.');
}else {';
  setVerificationMessage (data.message || 'Failed to resend verification email.');
}catch (err) {';
  setVerificationMessage ('Failed to resend verification email.');
}finally {
  setIsResending (false);
}
const handleCheckStatus = () =>: any {';
  const email = form.get_values ('email');
// Check condition
if ( {') {
  $2
}
  form.set_error ('root', {';
  message: 'Please enter your email address.';
});
return;
}router.push (`/verify - status?email=$ {
  encodeURIComponent (email);
}`);
}
}> {
  form.form_state.errors.root && (<Alert variant="destructive" className="mb - 4" > form.form_state.errors.root.message;
}</AlertDescription> </Alert>);
}<form;
}) ";
}className="space - y-6" > <FormField text - zion - slate - light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Button) : (<Eye className="h - 4 w - 4" />) ";
}</span> </Button> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem className="flex flex - row items - start space - x-3 space - y-0"> space - y-1 leading - none"> <FormLabel className=" text - zion - slate - light">Remember me</FormLabel> </div> </FormItem>) ";
}/> </div> <div className=" text - sm"> <Link href=" /forgot - password"className=" font - medium text - zion - cyan hover:text - zion - cyan - light"> Forgot password? </Link> </div> </div> <Button {
  verification_message;
}</p>) ";
}<div className=" flex justify - between mt - 4" > <Button > {';
  is_resending ? 'Sending...': 'Resend / Verify e - mail';
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>);
}'"}
}
;

