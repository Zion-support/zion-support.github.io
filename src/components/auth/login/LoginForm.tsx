
import { useState } from "react";
import { useRouter  } from 'next/router';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

import { useState } from "react",
import { useRouter } from 'next/router',
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

  const form = useForm<LoginFormValues>({
      const result = await login(data.email, data.password, data.rememberMe)
          if (
            result.error.message.toLowerCase().includes('email not confirmed')
          ) {
            errorMessage =
              'Your email is not confirmed. Please check your inbox for a confirmation link.'
      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."

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
          name='email'
          render={({
            field
          }: {
            field: ControllerRenderProps<LoginFormValues, 'email'>
          }) => (            <FormItem>
              <FormLabel className='text-zion-slate-light'>
                Email address
              </FormLabel>
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
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
                <Checkbox
          </Button>;
          <Button;
            type="button";
            variant="outline";
            className="w-1/2 ml-2";
            onClick={handleCheckStatus}
          >;
            Check status;
          </Button>;
        </div>;
        <p className="text-sm text-center mt-4">;
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
}
;
