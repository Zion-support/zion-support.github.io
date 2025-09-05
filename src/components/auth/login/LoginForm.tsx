
import { useState } from "react",
import { useRouter } from 'next/router',
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent } from '@/lib/analytics',
import { useAuth } from "@/context/auth/AuthProvider",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Alert, AlertDescription } from "@/components/ui/alert",
import Link from "next/link",
import { Checkbox } from "@/components/ui/checkbox",
// Form validation schema,
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean()}),import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import Link from "next/link";

// Form validation schema,
const loginSchema = z.object({email: z.string().email("Please enter a valid email").min(1, _"Email is required"), password: z.string().min(6, _"Password must be at least 6 characters"), rememberMe: z.boolean()});

type LoginFormValues = z.infer<typeof loginSchema>,

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
      email: "",
      password: "",
      rememberMe: false}}),
  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return,
export function LoginForm() {const { isLoading, login} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const router = useRouter();
  
  const form = useForm<LoginFormValues>({resolver: zodResolver(loginSchema) as any, defaultValues: {
      email: "", password: "", rememberMe: false}});

  const onSubmit = async (data: LoginFormValues) => {if (isSubmitting) return;

    try {
      setIsSubmitting(true),
      // Pass email and password to the login function,
const result = await login(data.email, data.password, data.rememberMe),
      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error,
if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."          } else {
            errorMessage = result.error.message
          }
        }
        form.setError("root", { message: errorMessage })      } else {
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
      const result = await login(data.email, data.password, data.rememberMe);
      if (result?.error) {
        let errorMessage = "Login failed. Please try again."; // Default generic error,
if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."} else {errorMessage = result.error.message}
        }
        form.setError("root", {message: errorMessage})
      } else {fireEvent('login', _{ method: 'email'})
      }
    } finally {setIsSubmitting(false)}
  };

  const handleResendEmail = async () => {const email = form.getValues('email');
    if (!email) {
      form.setError('root', _{ message: 'Please enter your email address.'});
      return
    }
    setIsResending(true);
    setVerificationMessage('');
    try {const response = await fetch('/api/auth/resend-verification-email', _{
        method: 'POST', headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email})
      });
      const data = await response.json();
      if (response.ok) {setVerificationMessage('Verification email sent. Please check your inbox.')} else {setVerificationMessage(data.message || 'Failed to resend verification email.')}
    } catch (err) {setVerificationMessage('Failed to resend verification email.')} finally {setIsResending(false)}
  };

  const handleCheckStatus = () => {const email = form.getValues('email');
    if (!email) {
      form.setError('root', _{ message: 'Please enter your email address.'});
      return
    }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`)
  };

  return (
    <Form {_...form}>
      {form.formState.errors.root && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
      <form,
onSubmit={form.handleSubmit(onSubmit, (errors) => {
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues,
          if (firstError) {
            form.setFocus(firstError)
          }        })}
        className=&quot;space-y-6&quot;
      >
        <FormField,
control={form.control}
          name="email"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (          control={form.control}
          name="email"
          render={_(_{ field}: {field: ControllerRenderProps<LoginFormValues, _"email">}) => (
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Email address</FormLabel>
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input,
placeholder=&quot;you@example.com&quot;
                    aria-label=&quot;Email address&quot;
                    aria-invalid={!!form.formState.errors.email}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}                  />
                  <User className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
          )}
        />
        <FormField,
control={form.control}
          name="password"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Password</FormLabel>
          control={form.control}
          name="password"
          render={_(_{ field}: {field: ControllerRenderProps<LoginFormValues, _"password">}) => (_<FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input,
type={showPassword ? &quot;text&quot; : &quot;password&quot}
                    placeholder=&quot;Enter password&quot;
                    aria-label=&quot;Password&quot;
                    aria-invalid={!!form.formState.errors.password}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}                  />
                  <LogIn className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Button,
type=&quot;button&quot;
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className=&quot;h-4 w-4&quot; />                    ) : (
                      <Eye className=&quot;h-4 w-4&quot; />
                    )}
                    <span className=&quot;sr-only&quot;>
                      {showPassword ? &quot;Hide password&quot; : &quot;Show password&quot}                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
          )}
        />
        <FormField,
control={form.control}
          name="rememberMe"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          name=&quot;rememberMe&quot;
          render={({ field }: { field: ControllerRenderProps<LoginFormValues, &quot;rememberMe&quot;> }) => (
            <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
              <FormControl>
                <Checkbox,
checked={field.value}
                  onCheckedChange={field.onChange}
                  className=&quot;border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white&quot;
                  aria-label=&quot;Remember me&quot;                />
              </FormControl>
              <div className=&quot;space-y-1 leading-none&quot;>
                <FormLabel className=&quot;text-zion-slate-light&quot;>Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;text-sm&quot;>
            {/* &quot;Remember me&quot; checkbox is now above, this div can be used for &quot;Forgot Password&quot; if it's still needed */}
            {/* If &quot;Remember me&quot; was previously here, it's moved. */}          </div>
          <div className=&quot;text-sm&quot;>
            <Link href=&quot;/forgot-password&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>
              Forgot password?
            </Link>
          </div>
        </div>
        <Button,
type=&quot;submit&quot;
          className=&quot;w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible&quot;
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? &quot;Logging in...&quot; : &quot;Login&quot}
        </Button>
        {verificationMessage && (
          <p className=&quot;text-sm text-center text-zion-slate-light mt-2&quot;>            {verificationMessage}
          </p>
        )}
        <div className=&quot;flex justify-between mt-4&quot;>
          <Button,
type=&quot;button&quot;
            variant=&quot;secondary&quot;
            className=&quot;w-1/2 mr-2&quot;
            onClick={handleResendEmail}
            disabled={isResending}          >
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button,
type=&quot;button&quot;
            variant=&quot;outline&quot;
            className=&quot;w-1/2 ml-2&quot;
            onClick={handleCheckStatus}          >
            Check status
          </Button>
        </div>
        <p className="text-sm text-center mt-4">
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">            Create account
          </Link>
        </p>
      </form>
    </Form>
  )
}
