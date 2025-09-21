"use client",
import React, { useState } from "react",
import { useRouter } from 'next/router',
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from 'lucide-react',
import { fireEvent } from '@/lib/analytics',
import { useAuth } from "@/context/auth/AuthProvider",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Checkbox } from "@/components/ui/checkbox",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { useToast } from "@/hooks/use-toast",
import Link from "next/link",
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address");
  password: z.string().min(6, "Password must be at least 6 characters");
  rememberMe: z.boolean().optional(););

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    setVerificationMessage("");

    try {
      await login(data.email, data.password);
      fireEvent('login', { method: 'email' }),
      router.push('/dashboard'); catch (error: any) {
      if (error.message?.includes('verification')) {
        setVerificationMessage('Please verify your email before logging in.'); else {
        form.setError('root', {
          message: error.message || 'Login failed. Please try again.',
        });
    } finally {
      setIsSubmitting(false);
  };

  const handleResendEmail = async () => {
    const email = form.getValues('email');
    if (!email) {
      form.setError('root', {
        message: 'Please enter your email address.',
      });
      return, }

    setIsResending(true);
    setVerificationMessage('');

    try {
      const response = await fetch('/api/auth/resend-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        };
        body: JSON.stringify({ email }););

      const data = await response.json();

      if (response.ok) {
        setVerificationMessage('Verification email sent. Please check your inbox.');
        toast({
          title: "Email Sent",
          description: "Verification email has been sent to your inbox.",
        }); else {
        setVerificationMessage(data.message || 'Failed to resend verification email.');
    } catch (err) {
      setVerificationMessage('Failed to resend verification email.'); finally {
      setIsResending(false);
  };

  const handleCheckStatus = () => {
    const email = form.getValues('email');
    if (!email) {
      form.setError('root', {
        message: 'Please enter your email address.',
      });
      return, }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`);;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Login</h3>
      
      {form.formState.errors.root && (
        <Alert  className="mb-4">
          <AlertDescription>
            {form.formState.errors.root.message}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-zion-slate-light">
            Email address
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              aria-invalid={!!form.formState.errors.email}
              className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
              {...form.register('email')}
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
          </div>
          {form.formState.errors.email && (
            <p className="text-red-400 text-sm">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-zion-slate-light">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              aria-label="Password"
              aria-invalid={!!form.formState.errors.password}
              className="bg-zion-blue pl-10 pr-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
              {...form.register('password')}
            />
            <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
            <Button
              type="button"
              
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
                {showPassword ? 'Hide password' : 'Show password'}
              </span>
            </Button>
          </div>
          {form.formState.errors.password && (
            <p className="text-red-400 text-sm">{form.formState.errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="rememberMe"
            checked={form.watch('rememberMe')}
            onCheckedChange={(checked) => form.setValue('rememberMe', checked as boolean)}
            className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
          />
          <Label htmlFor="rememberMe" className="text-zion-slate-light">
            Remember me
          </Label>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* Space for future forgot password link */}
          </div>
          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-zion-cyan hover:text-zion-cyan-light"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light"
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? 'Logging in...' : 'Login'}
        </Button>

        {verificationMessage && (
          <p className="text-sm text-center text-zion-slate-light mt-2">
            {verificationMessage}
          </p>
        )}

        <div className="flex justify-between mt-4">
          <Button
            type="button"
            
            className="w-1/2 mr-2"
            onClick={handleResendEmail}
            disabled={isResending}
          >
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button
            type="button"
            
            className="w-1/2 ml-2"
            onClick={handleCheckStatus}
          >
            Check status
          </Button>
        </div>

        <p className="text-sm text-center mt-4">
          <Link
            href="/signup"
            className="font-medium text-zion-cyan hover:text-zion-cyan-light"
          >
            Create account
          </Link>
        </p>
      </form>
    </div>
  );;

export default LoginForm;