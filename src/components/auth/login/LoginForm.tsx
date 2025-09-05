
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useRouter } from 'next/router',
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent } from '@/lib/analytics',
import { useAuth } from "@/context/auth/AuthProvider",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
import { useState } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { useForm, ControllerRenderProps } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent } from '@/lib/analytics';
import { useAuth } from &quot;@/context/auth/AuthProvider&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import { Alert, AlertDescription } from "@/components/ui/alert",
import Link from "next/link",
import { Checkbox } from "@/components/ui/checkbox",
// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean()}),
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Alert, AlertDescription } from &quot;@/components/ui/alert&quot;;
import Link from &quot;next/link&quot;;

import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
// Form validation schema
const loginSchema = z.object({
  email: z.string().email(&quot;Please enter a valid email&quot;).min(1, &quot;Email is required&quot;),
  password: z.string().min(6, &quot;Password must be at least 6 characters&quot;),
  rememberMe: z.boolean()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
import Link from "next/link";

// Form validation schema
const _loginSchema = z.object({_email: z.string().email("Please enter a valid email").min(1, _"Email is required"), _password: z.string().min(6, _"Password must be at least 6 characters"), _rememberMe: z.boolean()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13


type LoginFormValues = z.infer<typeof loginSchema>,

<<<<<<< HEAD
export function LoginForm() {
  const { isLoading, login } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isResending, setIsResending] = useState(false),
  const [verificationMessage, setVerificationMessage] = useState(''),
  const router = useRouter(),
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema) as any,
    defaultValues: {
<<<<<<< HEAD
      email: "",
      password: "",
      rememberMe: false}}),
=======
      email: "&quot;,
      password: "&quot;,
      rememberMe: false}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return,
=======
export function LoginForm() {_const { isLoading, _login} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const _router = useRouter();
  
  const _form = useForm<LoginFormValues>({_resolver: zodResolver(loginSchema) as any, _defaultValues: {
      email: "", _password: "", _rememberMe: false}});

  const _onSubmit = async (_data: LoginFormValues) => {_if (isSubmitting) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    try {
      setIsSubmitting(true),
      // Pass email and password to the login function
<<<<<<< HEAD
      const result = await login(data.email, data.password, data.rememberMe),
      if (result?.error) {
<<<<<<< HEAD
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."
=======
        let errorMessage = &quot;Login failed. Please try again.&quot;; // Default generic error
        if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes(&quot;email not confirmed&quot;)) {
            errorMessage = &quot;Your email is not confirmed. Please check your inbox for a confirmation link.&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          } else {
            errorMessage = result.error.message
          }
        }
<<<<<<< HEAD
        form.setError("root", { message: errorMessage })
=======
        form.setError(&quot;root&quot;, { message: errorMessage });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } else {
        fireEvent('login', { method: 'email' })
      }
    } finally {
      setIsSubmitting(false)
    }
  },

  const handleResendEmail = async () => {
    const email = form.getValues('email'),
    if (!email) {
      form.setError('root', { message: 'Please enter your email address.' }),
      return
    }
    setIsResending(true),
    setVerificationMessage(''),
    try {
      const response = await fetch('/api/auth/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }),
      const data = await response.json(),
      if (response.ok) {
        setVerificationMessage('Verification email sent. Please check your inbox.')
      } else {
        setVerificationMessage(data.message || 'Failed to resend verification email.')
      }
    } catch (err) {
      setVerificationMessage('Failed to resend verification email.')
    } finally {
      setIsResending(false)
    }
  },

  const handleCheckStatus = () => {
    const email = form.getValues('email'),
    if (!email) {
      form.setError('root', { message: 'Please enter your email address.' }),
      return
    }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`)
  },

  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant=&quot;destructive&quot; className=&quot;mb-4&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
      <form
<<<<<<< HEAD
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues,
          if (firstError) {
            form.setFocus(firstError)
          }
=======
        onSubmit={_form.handleSubmit(_onSubmit, _(errors) => {
          const _firstError = Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {
            form.setFocus(firstError);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        })}
        className=&quot;space-y-6&quot;
      >
        <FormField
<<<<<<< HEAD
          control={form.control}
<<<<<<< HEAD
          name="email"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (
=======
          name=&quot;email&quot;
          render={({ field }: { field: ControllerRenderProps<LoginFormValues, &quot;email&quot;> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          control={_form.control}
          name="email"
          render={_(_{ field}: {_field: ControllerRenderProps<LoginFormValues, _"email">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Email address</FormLabel>
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
<<<<<<< HEAD
                    placeholder=&quot;you@example.com&quot;
                    aria-label=&quot;Email address&quot;
                    aria-invalid={!!form.formState.errors.email}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
=======
                    placeholder="you@example.com"
                    aria-label="Email address"
                    aria-invalid={_!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <User className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
          )}
        />
        <FormField
<<<<<<< HEAD
          control={form.control}
<<<<<<< HEAD
          name="password"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (
=======
          name=&quot;password&quot;
          render={({ field }: { field: ControllerRenderProps<LoginFormValues, &quot;password&quot;> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Password</FormLabel>
=======
          control={_form.control}
          name="password"
          render={_(_{ field}: {_field: ControllerRenderProps<LoginFormValues, _"password">}) => (_<FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
<<<<<<< HEAD
                    type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                    placeholder=&quot;Enter password&quot;
                    aria-label=&quot;Password&quot;
                    aria-invalid={!!form.formState.errors.password}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
=======
                    type={_showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    aria-label="Password"
                    aria-invalid={_!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <LogIn className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Button
<<<<<<< HEAD
                    type=&quot;button&quot;
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className=&quot;h-4 w-4&quot; />
=======
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                    onClick={_() => setShowPassword(!showPassword)}
                  >
                    {_showPassword ? (
                      <EyeOff className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : (
                      <Eye className=&quot;h-4 w-4&quot; />
                    )}
<<<<<<< HEAD
                    <span className=&quot;sr-only&quot;>
                      {showPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}
=======
                    <span className="sr-only">
                      {_showPassword ? "Hide password" : "Show password"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
          )}
        />
        <FormField
<<<<<<< HEAD
          control={form.control}
<<<<<<< HEAD
          name="rememberMe"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (
=======
          control={_form.control}
          name="rememberMe"
          render={_(_{ field}: {_field: ControllerRenderProps<LoginFormValues, _"rememberMe">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
=======
          name=&quot;rememberMe&quot;
          render={({ field }: { field: ControllerRenderProps<LoginFormValues, &quot;rememberMe&quot;> }) => (
            <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <FormControl>
                <Checkbox
<<<<<<< HEAD
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className=&quot;border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white&quot;
                  aria-label=&quot;Remember me&quot;
=======
                  checked={_field.value}
                  onCheckedChange={_field.onChange}
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
                  aria-label="Remember me"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </FormControl>
              <div className=&quot;space-y-1 leading-none&quot;>
                <FormLabel className=&quot;text-zion-slate-light&quot;>Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
<<<<<<< HEAD
        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;text-sm&quot;>
            {/* &quot;Remember me&quot; checkbox is now above, this div can be used for &quot;Forgot Password&quot; if it's still needed */}
            {/* If &quot;Remember me&quot; was previously here, it's moved. */}
=======
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {_/* "Remember me" checkbox is now above, _this div can be used for "Forgot Password" if it's still needed */}
            {_/* If "Remember me" was previously here, _it's moved. */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <div className=&quot;text-sm&quot;>
            <Link href=&quot;/forgot-password&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>
              Forgot password?
            </Link>
          </div>
        </div>
        <Button
<<<<<<< HEAD
          type=&quot;submit&quot;
          className=&quot;w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible&quot;
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? &quot;Logging in...&quot; : &quot;Login&quot;}
        </Button>
        {verificationMessage && (
          <p className=&quot;text-sm text-center text-zion-slate-light mt-2&quot;>
=======
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible"
          disabled={_isLoading || isSubmitting}
        >
          {_isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
        {_verificationMessage && (
          <p className="text-sm text-center text-zion-slate-light mt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            {verificationMessage}
          </p>
        )}
        <div className=&quot;flex justify-between mt-4&quot;>
          <Button
<<<<<<< HEAD
            type=&quot;button&quot;
            variant=&quot;secondary&quot;
            className=&quot;w-1/2 mr-2&quot;
            onClick={handleResendEmail}
            disabled={isResending}
=======
            type="button"
            variant="secondary"
            className="w-1/2 mr-2"
            onClick={_handleResendEmail}
            disabled={_isResending}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button
<<<<<<< HEAD
            type=&quot;button&quot;
            variant=&quot;outline&quot;
            className=&quot;w-1/2 ml-2&quot;
            onClick={handleCheckStatus}
=======
            type="button"
            variant="outline"
            className="w-1/2 ml-2"
            onClick={_handleCheckStatus}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Check status
          </Button>
        </div>
<<<<<<< HEAD
        <p className="text-sm text-center mt-4">
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">
=======
        <p className=&quot;text-sm text-center mt-4&quot;>
          <Link href=&quot;/signup&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Create account
          </Link>
        </p>
      </form>
    </Form>
  )
}
