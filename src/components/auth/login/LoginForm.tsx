
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent  } from '@/lib/analytics';
import { useAuth } from "@/context/auth/AuthProvider",

import { useState } from 'react';
import { use_router } from 'next / router';
import { use_form, ControllerRenderProps } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { LogIn, User, Eye, EyeOff } from 'lucide-react';
import { fire_event } from '@/lib / analytics';
import { use_auth } from '@/context / auth / AuthProvider';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { useState  } from './react';
import { use_form, ControllerRenderProps  } from './react - hook - form';
import { zod_resolver  } from '@hookform / resolvers / zod';
import { z  } from './zod';
import { use_auth  } from '@/context / auth / AuthProvider';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

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
          }
        }
        form.setError('root', { message: errorMessage })
      } else {
        setVerificationMessage (
          data.message || 'Failed to resend verification email.');

      }
    } catch (err) {
      setVerificationMessage ('Failed to resend verification email.');
    } finally {
      setIsResending (false);
    }
  }
  const handleCheckStatus = () =>: any {
    const email = form.get_values ('email');
    // Check condition
if ( {) {
  $2
}
      form.set_error ('root', { message: 'Please enter your email address.' });
      return;
    }
    router.push (`/verify - status?email=${encodeURIComponent (email)}`);
  }

        form.setError("root", { message: errorMessage })
      } else {
        fireEvent('login', { method: 'email' })
import { useState } from "react",;
import { useRouter } from 'next/router',;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { LogIn, User, Eye, EyeOff } from 'lucide-react';
import { fireEvent } from '@/lib/analytics',;
import { useAuth } from "@/context/auth/AuthProvider",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

import { Checkbox } from '@/components/ui/checkbox';// Form validation schema;
const loginSchema = z && z.object({;
  email: z;
    .string();
    .email('Please enter a valid email');
    .min(1, 'Email is required'),;
  password: z && z.string().min(6, 'Password must be at least 6 characters'),;
  rememberMe: z && z.boolean(),;
});

type LoginFormValues = z && z.infer<typeof loginSchema>;

export function LoginForm() {;
  const { isLoading, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const router = useRouter();

  const form = useForm<LoginFormValues>({;
    resolver: zodResolver(loginSchema) as any,;
    defaultValues: {;
      email: '',;
      password: '',;
      rememberMe: false,;
    },;
  });

  const onSubmit = async (data: LoginFormValues) => {;
    if (isSubmitting) return;
    try {;
      setIsSubmitting(true),;
      // Pass email and password to the login function;
      const result = await login(data && data.email, data && data.password, data && data.rememberMe);
      if (result?.error) {;
        let errorMessage = 'Login failed. Please try again.'; // Default generic error;
        if (result?.error && result?.error?.message) {;
          if (;
            result && result.error.message && message.toLowerCase().includes('email not confirmed');
          ) {;
            errorMessage =;
              'Your email is not confirmed. Please check your inbox for a confirmation link.';
          } else {;
            errorMessage = result && result.error.message;
          }
        }
        form.setError("root", { message: errorMessage })
      } else {
        fireEvent('login', { method: 'email' })
import { useState } from "react",;
import { useRouter } from 'next/router',;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { LogIn, User, Eye, EyeOff } from 'lucide-react';
import { fireEvent } from '@/lib/analytics',;
import { useAuth } from "@/context/auth/AuthProvider",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;

      } else {;
        fireEvent('login', { method: 'email' });
      }
    } finally {;
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
        body: JSON && JSON.stringify({ email }),;
      });
      const data = await response && response.json();
      if (response && response.ok) {;
        setVerificationMessage(;
          'Verification email sent. Please check your inbox.';
        );
      } else {;
        setVerificationMessage(;
          data && data.message || 'Failed to resend verification email.';
        );

      }
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
    router && router.push(`/verify-status?email=${encodeURIComponent(email)}`);
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
  },;
  const handleCheckStatus = () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message: 'Please enter your email address.' }),;
      return;
    }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`)
  },

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
            field: ControllerRenderProps<LoginFormValues, 'password'>;
          }) => (            <FormItem>;
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>;
              <FormControl>;
                <div className='relative'>;
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}
                  />;
                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;
                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan'
                    onClick={() => setShowPassword(!showPassword)}                  >;

                    placeholder="you@example.com"
                    aria-label="Email address"
                    aria-invalid={!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {...field}

                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({
            field
          }: {
            field: ControllerRenderProps<LoginFormValues, 'password'>
          }) => (            <FormItem>
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
                    aria-label='Password'
                    aria-invalid={!!form.formState.errors.password}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}
                  />
                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan'
                    onClick={() => setShowPassword(!showPassword)}                  >
                    {showPassword ? (
                      <EyeOff className='h-4 w-4' />
                    ) : (
                      <Eye className='h-4 w-4' />
                    )}
                    <span className='sr-only'>
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </Button>
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
          )}
        />
        <FormField
          control={form.control}
          name='rememberMe'
          render={({
            field
          }: {
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>
          }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>

          )}
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
                <Checkbox

                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
                  aria-label="Remember me"
                />

              </FormControl>

              <div className="space-y-1 leading-none">
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>
              </div>
            </FormItem>
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

