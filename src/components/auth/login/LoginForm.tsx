import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent  } from '@/lib/analytics';
import { useAuth } from "@/context/auth/AuthProvider",

import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { auth } from "@/services/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOverlay } from "@/components/LoadingOverlay";

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
    resolver: zodResolver(loginSchema) as any
    defaultValues: {
      email: ''
      password: ''
      rememberMe: false
    }
  })
  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return
    try {
      setIsSubmitting(true)
      // Pass email and password to the login function
      const result = await login(data.email, data.password, data.rememberMe)
      if (result?.error) {        let errorMessage = 'Login failed. Please try again.'; // Default generic error
        if (result?.error && result?.error?.message) {
          if (
            result.error.message.toLowerCase().includes('email not confirmed')
          ) {
            errorMessage =
              'Your email is not confirmed. Please check your inbox for a confirmation link.'
} from '@/components/ui/form'
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';// Form validation schema
const loginSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email')
    .min(1, 'Email is required')
  password: z.string().min(6, 'Password must be at least 6 characters')
  rememberMe: z.boolean()
})
type LoginFormValues = z.infer<typeof loginSchema>
export function LoginForm() {
  const { isLoading, login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [verificationMessage, setVerificationMessage] = useState('')
  const router = useRouter()  FormMessage} from "@/components/ui/form",
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
  const { isLoading, login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginFormValues) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const res = await auth.login(data.email, data.password);
      if (res.status === 200) {
        navigate('/dashboard');
      } else if (res.status >= 400 && res.status < 500) {
        toast.error(res.data?.error || 'Invalid credentials');
      }

      await login(data.email, data.password);

      const next = searchParams.get('next') || '/';
      if (next === '/checkout') {
        const intended = sessionStorage.getItem('intendedProduct');
        sessionStorage.removeItem('intendedProduct');
        if (intended) {
          navigate(`/checkout?product=${intended}`);
        } else {
          navigate('/checkout');
        }
      } else {
        navigate(next);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendEmail = async () => {;
    const email = form && form.getValues('email');
    if (!email) {;
      form && form.setError('root', { message: 'Please enter your email address.' });
      return;
    }
    setIsResending(true);
    setVerificationMessage('');
    try {;
      const response = await fetch('/api/auth/resend-verification-email', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
    } catch (err) {;
      setVerificationMessage('Failed to resend verification email.');
    } finally {;
      setIsResending(false);
    }
  };

  const handleCheckStatus = () => {;
    const email = form && form.getValues('email');
    if (!email) {;
      form && form.setError('root', { message: 'Please enter your email address.' });
      return;
    }
    router && router.push(`/verify-status?email=${encodeURIComponent(email)}`)
};

        onSubmit={form && form.handleSubmit(onSubmit, errors => {;
          const firstError = Object && Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {;
            form && form.setFocus(firstError);

          }        })}
        className='space-y-6';
      >;
        <FormField
          control={form && form.control}
          name='email'
      {form.form_state.errors.root && (
        <Alert variant='destructive' className='mb - 4'>;
          <AlertDescription>;
            {form.form_state.errors.root.message}
          </AlertDescription>;
        </Alert>)}
      <form;
        on_submit={form.handle_submit (on_submit, errors => {
          const first_error = Object.keys (errors)[0] as keyof LoginFormValues;
          // Check condition
if ( {) {
  $2
}
            form.set_focus (first_error);
          }        })}
        className='space - y-6';
      >;
        <FormField;
          control={form.control}
          name='email';
          render={({
            field
          }: {

  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>

              <FormControl>
                <div className="relative">
                  <Input
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>

        className="space-y-6";
      >;
        <FormField;
          control={form.control}
          name="email";
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    placeholder="you@example.com";
                    aria-label="Email address";
                    aria-invalid={!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";
                    {...field}
                  />
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />

                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>
        />;
        <FormField;
          control={form.control}
          name="password"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    aria-label="Password"
                    aria-invalid={!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {...field}
                  />
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          name="password";
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password";
                    aria-label="Password";
                    aria-invalid={!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";
                    {...field}
                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  <Button;
                    type="button";
                    variant="ghost";
                    size="sm";
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
                    onClick={() => setShowPassword(!showPassword)}
                  >;
                    {showPassword ? (;
                      <EyeOff className='h-4 w-4' />;
                    ) : (;
                      <Eye className='h-4 w-4' />;
                    )}
                    <span className='sr-only'>;
                      {showPassword ? 'Hide password' : 'Show password'}
            field: ControllerRenderProps < LoginFormValues, 'password'>;
          }) => (            <FormItem>;
              <FormLabel className='text - zion - slate - light'>Password</FormLabel>;
              <FormControl>;
                <div className='relative'>;
                  <Input;
                    type={show_password ? 'text' : 'password'}
                    placeholder='Enter password';
                    aria - label='Password';
                    aria - invalid={!!form.form_state.errors.password}
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}
                  />;
                  <LogIn className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                  <Button;
                    type='button';
                    variant='ghost';
                    size='sm';
                    className='absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan';
                    on_click={() => setShowPassword (!show_password)}                  >;
                    {show_password ? (
                      <EyeOff className='h - 4 w - 4' />) : (
                      <Eye className='h - 4 w - 4' />)}
                    <span className='sr - only'>;
                      {show_password ? 'Hide password' : 'Show password'}
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;

              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}

              <FormControl>
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}          </div>
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot password?
            </Link>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
      <LoadingOverlay visible={isLoading || isSubmitting} />
    </Form>
  );
}
