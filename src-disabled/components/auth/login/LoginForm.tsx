<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
<<<<<<< HEAD
import { useState } from "react";
import { useRouter  } from 'next/router';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent  } from '@/lib/analytics';
import { useAuth } from "@/context/auth/AuthProvider",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LogIn, User, Eye, EyeOff } from 'lucide-react';
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
import { fireEvent } from '@/lib/analytics';
import { useAuth } from '@/context/auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
=======
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
<<<<<<< HEAD

import { useState } from "react";
import { useRouter  } from 'next/router';
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent } from '@/lib/analytics'
import { useAuth } from '@/context/auth/AuthProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from "react"
import { useForm, ControllerRenderProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuth } from "@/context/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
  FormMessage,;
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

import { useState } from "react";
import { useRouter  } from 'next/router';

import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",

import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from 'lucide-react'';
import { fireEvent  } from '@/lib/analytics';"
import { useAuth } from "@/context/auth/AuthProvider",


=======
ursor/fix-website-loading-errors-and-merge-6662
import { useForm, ControllerRenderProps } from "react-hook-form",

import { useState } from "react",
import { useRouter } from 'next/router',
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from 'lucide-react'
import { fireEvent  } from '@/lib/analytics';
import { useAuth } from "@/context/auth/AuthProvider",
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {

  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
<<<<<<< HEAD
  FormMessage,
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
  const router = useRouter()
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
  
    resolver: zodResolver(loginSchema) as any
    defaultValues: {
  
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  FormMessage,
} from '@/components / ui / form';
import { Alert, AlertDescription } from '@/components / ui / alert';
import Link from 'next / link';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
import { Checkbox } from '@/components / ui / checkbox';// Form validation schema;
const login_schema = z.object ({}
  email: z;
    .string ();'
    .email ('Please enter a valid email');'
    .min (1, 'Email is required'),'
  password: z.string ().min (6, 'Password must be at least 6 characters'),
  remember_me: z.boolean (),
});
type LoginFormValues = z.infer < typeof login_schema>;
export /**;
 * LoginForm - Function description;
 */
function LoginForm() {}
  const { is_loading, login } = use_auth ();
  const [show_password, setShowPassword] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
  const [is_resending, setIsResending] = useState (false);'
  const [verification_message, setVerificationMessage] = useState ('');
  const router = use_router ();
  const form = use_form < LoginFormValues>({}
    resolver: zod_resolver (login_schema) as any,
    default_values: {'
      email: '','
      password: '',
      remember_me: false,
    },
  });
  const on_submit = async (data: LoginFormValues) => {}
    // Check condition;
if (return) {}
  $2;
}
    try {}
      setIsSubmitting (true),
      // Pass email and password to the login function;
      const result = await login (data.email, data.password, data.remember_me);
      // Check condition;
if ( {) {}
  $2;
}'
        let error_message = 'Login failed. Please try again.'; // Default generic error;
        // Check condition;
if ( {) {}
  $2;
}'
          if (.includes ('email not confirmed')) {}
  $2;
}

          ) {}
            error_message =;'
              'Your email is not confirmed. Please check your inbox for a confirmation link.';
"
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input",

import {}
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

    resolver: zodResolver(loginSchema) as any,
    defaultValues: {'
      email: '','
      password: '',
      rememberMe: false,
    },
  })
  const onSubmit = async (data: LoginFormValues) => {};
    if (isSubmitting) return;
    try {}
      setIsSubmitting(true),
      // Pass email and password to the login function;
      const result = await login(data.email, data.password, data.rememberMe);

            result.error.message.toLowerCase().includes('email not confirmed')
          ) {}
            errorMessage ='
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

export function LoginForm() {}
  const { isLoading, login } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isResending, setIsResending] = useState(false),'
  const [verificationMessage, setVerificationMessage] = useState(''),
  const router = useRouter(),

      email: "",

      password: "",
      rememberMe: false}}),

  const onSubmit = async (data: LoginFormValues) => {}
    if (isSubmitting) return,

<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
<<<<<<< HEAD
    try {
      setIsSubmitting(true)
      // Pass email and password to the login function
      const result = await login(data.email, data.password, data.rememberMe)
      const result = await login(data.email, data.password, data.rememberMe),
      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {
          if (
            result.error.message.toLowerCase().includes('email not confirmed')
          ) {
            errorMessage =
              'Your email is not confirmed. Please check your inbox for a confirmation link.'
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."
      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."
            errorMessage = result.error.message
          }
        }
        form.setError('root', { message: errorMessage })
          } else {
            error_message = result.error.message;
          }
        }
        form.set_error ('root', { message: error_message });
      } else {
        fire_event ('login', { method: 'email' });
      }
    } finally {
      setIsSubmitting (false);
    }
  }
  const handleResendEmail = async () => {
    const email = form.get_values ('email');
    // Check condition
if ( {) {
  $2
}
      form.set_error ('root', { message: 'Please enter your email address.' });
      return;
    }
    setIsResending (true);
    setVerificationMessage ('');
    try {
      const response = await fetch ('/api / auth / resend - verification - email', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email }),
      });
      const data = await response.json ();
      // Check condition
if ( {) {
  $2
}
        setVerificationMessage (
          'Verification email sent. Please check your inbox.');
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
          } else {
            errorMessage = result.error.message
          }
        }
        form.setError('root', { message: errorMessage })
      } else {
        fireEvent('login', { method: 'email' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleResendEmail = async () => {
    const email = form.getValues('email')
    if (!email) {
      form.setError('root', { message: 'Please enter your email address.' })
      return;
    }
    setIsResending(true)
    setVerificationMessage('')
    try {
      const response = await fetch('/api/auth/resend-verification-email', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email })
      })
      const data = await response.json()
      if (response.ok) {
        setVerificationMessage(
          'Verification email sent. Please check your inbox.'
        )
      } else {
        setVerificationMessage(
          data.message |'Failed to resend verification email.'
        )
      }
    } catch (err) {
      setVerificationMessage('Failed to resend verification email.')
    } finally {
      setIsResending(false)
    }
  }
  const handleCheckStatus = () => {
    const email = form.getValues('email')
    if (!email) {
      form.setError('root', { message: 'Please enter your email address.' })
      return;
    }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`)
  }

=======

    try {
      setIsSubmitting(true)
      // Pass email and password to the login function

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
      const result = await login(data.email, data.password, data.rememberMe),
      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."

          } else {
            errorMessage = result.error.message
          }
        }

        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email }),
      });
      const data = await response.json ();
      // Check condition;
if ( {) {}
  $2;
}
        setVerificationMessage ('
          'Verification email sent. Please check your inbox.');
      } else {}
        setVerificationMessage ('
          data.message || 'Failed to resend verification email.');

      }
    } catch (err) {'
      setVerificationMessage ('Failed to resend verification email.');
    } finally {}
      setIsResending (false);
    }
  }
  const handleCheckStatus = () =>: any {'
    const email = form.get_values ('email');
    // Check condition;
if ( {) {}
  $2;
}'
      form.set_error ('root', { message: 'Please enter your email address.' });
      return;
    }
    router.push (`/verify - status?email=${encodeURIComponent (email)}`);
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        form.setError("root", { message: errorMessage })
      } else {'
        fireEvent('login', { method: 'email' })"
import { useState } from "react",;'
import { useRouter } from 'next/router',;"
import { useForm, ControllerRenderProps } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { z } from "zod",;'
import { LogIn, User, Eye, EyeOff } from 'lucide-react';'
import { fireEvent } from '@/lib/analytics',;"
import { useAuth } from "@/context/auth/AuthProvider",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;

import {;

  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import Link from "next/link",;
import { Checkbox } from "@/components/ui/checkbox",;
// Form validation schema;
const loginSchema = z.object({;
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),;
  password: z.string().min(6, "Password must be at least 6 characters"),;
  rememberMe: z.boolean()}),;
type LoginFormValues = z.infer<typeof loginSchema>,;
export function LoginForm() {;
  const { isLoading, login } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isResending, setIsResending] = useState(false),;
  const [verificationMessage, setVerificationMessage] = useState(''),;
  const router = useRouter(),;
  const form = useForm<LoginFormValues>({;
    resolver: zodResolver(loginSchema) as any,;
    defaultValues: {;
      email: "",;
      password: "",;
      rememberMe: false}}),;
  const onSubmit = async (data: LoginFormValues) => {;
    if (isSubmitting) return,;
    try {;
      setIsSubmitting(true),;
      // Pass email and password to the login function;
      const result = await login(data.email, data.password, data.rememberMe),;
      if (result?.error) {;
        let errorMessage = "Login failed. Please try again.", // Default generic error;
        if (result?.error && result?.error?.message) {;
          if (result.error.message.toLowerCase().includes("email not confirmed")) {;
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link.";
          } else {;
            errorMessage = result.error.message;
          }
        }
        form.setError("root", { message: errorMessage });
=======
  FormMessage,;
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

'
import { Checkbox } from '@/components/ui/checkbox';// Form validation schema;
const loginSchema = z && z.object({;
  email: z;
    .string();'
    .email('Please enter a valid email');'
    .min(1, 'Email is required'),;'
  password: z && z.string().min(6, 'Password must be at least 6 characters'),;
  rememberMe: z && z.boolean(),;
});

type LoginFormValues = z && z.infer<typeof loginSchema>;

  const onSubmit = async (data: LoginFormValues) => {;
    if (isSubmitting) return,;
    try {;
      setIsSubmitting(true),;
      // Pass email and password to the login function;

          } else {;
            errorMessage = result.error.message;
          }
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
        }
        form && form.setError('root', { message: errorMessage });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
      } else {;

        fireEvent('login', { method: 'email' });
      }
    } finally {;
      setIsSubmitting(false);
    }
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
<<<<<<< HEAD
  },;
  const handleResendEmail = async () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message: 'Please enter your email address.' }),;
      return;
    }
    setIsResending(true),;
    setVerificationMessage(''),;
=======
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

  const handleResendEmail = async () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message: 'Please enter your email address.' }),;
      return;
    }
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
    setIsResending(true);
    setVerificationMessage('');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
    try {;
      const response = await fetch('/api/auth/resend-verification-email', {;
        method: 'POST',;

        headers: { 'Content-Type': 'application/json' },;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
<<<<<<< HEAD
        body: JSON.stringify({ email });
      }),;
      const data = await response.json(),;
      if (response.ok) {;
        setVerificationMessage('Verification email sent. Please check your inbox.');
      } else {;
        setVerificationMessage(data.message || 'Failed to resend verification email.');
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
      }

    } catch (err) {;

      setVerificationMessage('Failed to resend verification email.');
    } finally {;
      setIsResending(false);
    }
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
<<<<<<< HEAD
  return (
    <Form {...form}>;
=======
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

  const handleCheckStatus = () => {;
    if (!email) {;
      form.setError('root', { message: 'Please enter your email address.' }),;
      return;
    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        onSubmit={form && form.handleSubmit(onSubmit, errors => {;
          const firstError = Object && Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {;
            form && form.setFocus(firstError);
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

          }        })}'
=======
          }        })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
        className='space-y-6';
      >;
        <FormField;
          control={form && form.control}'
          name='email'
      {form.form_state.errors.root && ('
        <Alert variant='destructive' className='mb - 4'>;
          <AlertDescription>;
            {form.form_state.errors.root.message}
          </AlertDescription>;
        </Alert>)}
      <form;
        on_submit={form.handle_submit (on_submit, errors => {}
          const first_error = Object.keys (errors)[0] as keyof LoginFormValues;
          // Check condition;
if ( {) {}
  $2;
}
            form.set_focus (first_error);
          }        })}'
        className='space - y-6';
      >;
        <FormField;
          control={form.control}'
          name='email';
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
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

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
  return (
    <Form {...form}>
      {form.formState.errors.root && ("
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <form;

        onSubmit={form.handleSubmit(onSubmit, (errors) => {;
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {;
            form.setFocus(firstError);
          }
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
        })}"

        className="space-y-6"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import { Alert, AlertDescription } from "@/components/ui/alert",;
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
// Form validation schema
const loginSchema = null;
          if (firstError) {
            form.setFocus(firstError)
          }        })}
        className='space-y-6'
origin/cursor/automate-test-improve-and-merge-code-2533
      >
=======
        })}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
<<<<<<< HEAD
                    placeholder='you@example.com'
                    aria-label='Email address'
                    aria-invalid={!!form.formState.errors.email}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

                <div className='relative'>

            field: ControllerRenderProps<LoginFormValues, 'email'>;
          }) => (            <FormItem>;'
              <FormLabel className='text-zion-slate-light'>;'
            field: ControllerRenderProps < LoginFormValues, 'email'>;
          }) => (            <FormItem>;'
              <FormLabel className='text - zion - slate - light'>;
                Email address;
              </FormLabel>;
              <FormControl>;'
                <div className='relative'>;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
                  <Input;
                    placeholder='you@example.com';
                    aria - label='Email address';
                    aria - invalid={!!form.form_state.errors.email}
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}
                  />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
                  <User className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                </div>;
              </FormControl>;'
              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}'
          name='password';
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
          render={({
            field
          }: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
            field: ControllerRenderProps<LoginFormValues, 'password'>;
          }) => (            <FormItem>;'
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>;
              <FormControl>;'
                <div className='relative'>;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
                    aria-label='Password'
                    aria-invalid={!!form && form.formState.errors && errors.password}'
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}
                  />;'
                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;
                  <Button'
                    type='button''
                    variant='ghost''
                    size='sm''
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan'
                    onClick={() => setShowPassword(!showPassword)}                  >;

                    placeholder="you@example.com"

                    aria-label="Email address"
                    aria-invalid={!!form.formState.errors.email}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {...field}
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>"
              <FormMessage className="text-red-400" />
            </FormItem>
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        className="space-y-6";
      >;
        <FormField;
          control={form.control}"
          name="email";"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (;
            <FormItem>;"
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
              <FormControl>;"
                <div className="relative">;
                  <Input;"
                    placeholder="you@example.com";"
                    aria-label="Email address";
                    aria-invalid={!!form.formState.errors.email}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";

                  <User className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;

                </div>;
              <FormMessage className='text - red - 400' />;
          name='password';

            field: ControllerRenderProps<LoginFormValues, 'password'>;

              <FormLabel className='text-zion-slate-light'>Password;

                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password
                    aria-label='Password
                    aria-invalid={!!form && form.formState.errors && errors.password}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}

                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;

                  <Button;
                    type='button
                    variant='ghost
                    size='sm
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan)
                    onClick={() => setShowPassword(!showPassword)}                  >;

                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"

              <FormMessage className="text-red-400" />"

          name="email";""
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (;"

            <FormItem>;
              <FormLabel className="text-zion-slate-light">Email address;"
                <div className="relative">;"
                  <Input;"
                    placeholder="you@example.com";""
                    aria-label="Email address";"
                    aria-invalid={!!form.formState.errors.email}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";"
pr-12325
                    {...field}

                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
<<<<<<< HEAD
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

                </div>
              </FormControl>'
              <FormMessage className='text-red-400' />
            </FormItem>

=======

                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          )}

        />;
        <FormField;

          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (
            <FormItem>"
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>"
                <div className="relative">
                  <Input"
                    type={showPassword ? "text" : "password"}"
                    placeholder="Enter password""
                    aria-label="Password"
                    aria-invalid={!!form.formState.errors.password}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {...field}
                  />"
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Button"
                    type="button""
                    variant="ghost""
                    size="sm""
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? ("
                      <EyeOff className="h-4 w-4" />
                    ) : ("
                      <Eye className="h-4 w-4" />
                    )}"
                    <span className="sr-only">"
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>

              <FormMessage className="text-red-400" />
            </FormItem>"
          name="password";"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (;
            <FormItem>;"
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;"
                <div className="relative">;

                    aria-label="Password";
                    aria-invalid={!!form.formState.errors.password}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";
                    {...field}
                  />;"
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;

                    onClick={() => setShowPassword(!showPassword)}
                  >;

                      {showPassword ? 'Hide password' : 'Show password'}'
            field: ControllerRenderProps < LoginFormValues, 'password'>;
          }) => (            <FormItem>;'
              <FormLabel className='text - zion - slate - light'>Password</FormLabel>;
              <FormControl>;'
                <div className='relative'>;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
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
<<<<<<< HEAD

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
  FormMessage} from "@/components/ui/form",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import Link from "next/link",;
;
import { Checkbox } from "@/components/ui/checkbox",;
// Form validation schema;
const loginSchema = z.object({;
  email:z.string().email("Please enter a valid email").min(1, "Email is required"),;
  password:z.string().min(6, "Password must be at least 6 characters"),;
  rememberMe:z.boolean()}),;
type LoginFormValues = z.infer<typeof loginSchema>,;
;
export function LoginForm() {;
  const { isLoading, login } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isResending, setIsResending] = useState(false),;
  const [verificationMessage, setVerificationMessage] = useState(''),;
  const router = useRouter(),;
  ;
  const form = useForm<LoginFormValues>({;
    resolver:zodResolver(loginSchema) as any,;
    defaultValues:{;
      email:"",;
      password:"",;
      rememberMe:false}}),;
;
  const onSubmit = async (data:LoginFormValues) => {;
    if (isSubmitting) return,;
;
    try {;
      setIsSubmitting(true),;
      // Pass email and password to the login function;
      const result = await login(data.email, data.password, data.rememberMe),;
      if (result?.error) {;
        let errorMessage = "Login failed. Please try again.", // Default generic error;
        if (result?.error && result?.error?.message) {;
          if (result.error.message.toLowerCase().includes("email not confirmed")) {;
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link.",;
          } else {;
            errorMessage = result.error.message,;
          }
        }
        form.setError("root", { message:errorMessage }),;
      } else {;
        fireEvent('login', { method:'email' }),;
      }
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  const handleResendEmail = async () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message:'Please enter your email address.' }),;
      return,;
    }
    setIsResending(true),;
    setVerificationMessage(''),;
    try {;
      const response = await fetch('/api/auth/resend-verification-email', {;
        method:'POST',;
        headers:{ 'Content-Type':'application/json' },;
        body:JSON.stringify({ email });
      }),;
      const data = await response.json(),;
      if (response.ok) {;
        setVerificationMessage('Verification email sent. Please check your inbox.'),;
      } else {;
        setVerificationMessage(data.message || 'Failed to resend verification email.'),;
      }
    } catch (err) {;
      setVerificationMessage('Failed to resend verification email.'),;
    } finally {;
      setIsResending(false),;
    }
  },;
;
  const handleCheckStatus = () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message:'Please enter your email address.' }),;
      return,;
    }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`),;
  },;
;
  return (;
    <Form {...form}>;
      {form.formState.errors.root && (;
        <Alert variant="destructive" className="mb-4">;
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>;
        </Alert>;
      )}
      <form;
        onSubmit={form.handleSubmit(onSubmit, (errors) => {;
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues,;
          if (firstError) {;
            form.setFocus(firstError),;
          }
        })}
        className="space-y-6";
      >;
        <FormField;
          control={form.control}
          name="email";
          render={({ field } { field:ControllerRenderProps<LoginFormValues "email"> }) => (;
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
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
        />;
        <FormField;
          control={form.control}
          name="password";
          render={({ field } { field:ControllerRenderProps<LoginFormValues "password"> }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    type={showPassword ? "text" :"password"}
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
                      <EyeOff className="h-4 w-4" />;
                    ) :(;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" :"Show password"}
                    {showPassword ? (;
                      <EyeOff className="h-4 w-4" />;
                    ) : (;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" : "Show password"}
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;
          name='remember_me';
          render={({
            field
          }: {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;

              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}

            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;'
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;

                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"

                  aria-label="Remember me"
                />

              <FormControl>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

              </FormControl>

=======
                <Checkbox

                  checked={field.value}
                  onCheckedChange={field.onChange}
<<<<<<< HEAD
                  className='border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white'
                  aria-label='Remember me'                />
=======

                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
                  aria-label="Remember me"
                />


              </FormControl>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
              <div className="space-y-1 leading-none">

                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>
              </div>
            </FormItem>
                <Checkbox
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}
                  className='border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white'
                  aria-label='Remember me'                />;
              </FormControl>;
              <div className='space-y-1 leading-none'>;
                <FormLabel className='text-zion-slate-light'>;
                  Remember me;
                </FormLabel>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}

            {/* If "Remember me" was previously here, it's moved. */}
'

=======
        />;
        <FormField;
          control={form.control}
          </div>;
          <div className='text-sm'>;
            <Link
              href='/forgot-password'
              className='font-medium text-zion-cyan hover:text-zion-cyan-light'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
            field: ControllerRenderProps < LoginFormValues, 'remember_me'>;
          }) => ('
            <FormItem className='flex flex - row items - start space - x-3 space - y-0'>;
              <FormControl>;
                <Checkbox;
                  checked={field.value}

                  aria - label='Remember me'                />;
              </FormControl>;'
              <div className='space - y-1 leading - none'>;'
                <FormLabel className='text - zion - slate - light'>;
                  Remember me;
                </FormLabel>;
              </div>;
            </FormItem>)}
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
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
        <div className="flex items-center justify-between">;
          <div className="text-sm">;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;
          <div className="text-sm">;
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
              Forgot password?;
            </Link>;
          </div>;
        </div>;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

        </Button>;
        {verificationMessage && (;'
          <p className='text-sm text-center text-zion-slate-light mt-2'>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
            {verificationMessage}
          </p>;
        )}'
        <div className='flex justify-between mt-4'>;

            onClick={handleCheckStatus}>;
            Check status;
          </Button>;
        </div>;'
        <p className='text-sm text-center mt-4'>;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
          <Link
            href='/signup'
<<<<<<< HEAD
          name="rememberMe"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
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
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>

          <div className="text-sm">

            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot password?
            </Link>
          </div>
        </div>
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
        <Button
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          type="submit"

          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible"
          disabled={isLoading || isSubmitting}
        >"
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
        {verificationMessage && ("
          <p className="text-sm text-center text-zion-slate-light mt-2">"
          name="rememberMe";"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (;"
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
              <FormControl>;
                <Checkbox;
                  checked={field.value}

                  aria-label="Remember me";
                />;
              </FormControl>;"
              <div className="space-y-1 leading-none">;"
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>;
              </div>;
            </FormItem>;
          )}

          <div className="text-sm">;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}

            {/* If "Remember me" was previously here, it's moved. */}
          </div>;"
          <div className="text-sm">;"
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
              Forgot password?;
            </Link>;
          </div>;
        </div>;

          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";
          disabled={isLoading || isSubmitting}
        >;"
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>;
        {verificationMessage && (;"
          <p className="text-sm text-center text-zion-slate-light mt-2">;
            {verificationMessage}

          <Button
            type='button'
            variant='secondary'
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
          <Button
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
            type='button'
            variant='outline'
            className='w-1/2 ml-2'            Check status
=======
            type="button"
            variant="outline"
            className="w-1/2 ml-2"
            onClick={handleCheckStatus}
          >
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
return
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
=======


return;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}setIsResending (true);'
setVerificationMessage ('')
try {'
  const response = await fetch ('/api/auth/resend-verification-email', {'
  method: 'POST'
headers: {'
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======
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
<<<<<<< HEAD
return
return
return;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx

}setIsResending (true);''
setVerificationMessage ('')'
try {''
  const response = await fetch ('/api/auth/resend-verification-email', {''

if (response.ok) {''
  setVerificationMessage ('Verification email sent. Please check your inbox.')'
}else {''
  setVerificationMessage (data.message |'Failed to resend verification email.')'
}catch (err) {''

const handleCheckStatus = () => {''
  const email = form.getValues ('email')'
if (!email) {''
  form.setError ('root', {''

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}router.push (`/verify-status?email=$ {
  encodeURIComponent (email)

}`)
}
}> {"
  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message;
}</AlertDescription> </Alert>)
}<form"

}) ""
}className="space-y-6" > <FormField text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) ""
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) ""
}</span> </Button> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ""
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me</FormLabel> </div> </FormItem>) ""

            className='font-medium text-zion-cyan hover:text-zion-cyan-light'>;
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx

=======
<<<<<<< HEAD
        <Button;
          type="submit";
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";
          disabled={isLoading || isSubmitting}
        >;
          {isLoading || isSubmitting ? "Logging in..." :"Login"}
        </Button>;
        {verificationMessage && (;
          <p className="text-sm text-center text-zion-slate-light mt-2">;
            {verificationMessage}
          </p>;
        )}
        <div className="flex justify-between mt-4">;
          <Button;
            type="button";
            variant="secondary";
            className="w-1/2 mr-2";
            onClick={handleResendEmail}
            disabled={isResending}
          >;
            {isResending ? 'Sending...' :'Resend / Verify e-mail'}
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
          <Link href="/signup" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
            Create account;
          </Link>;
        </p>;
      </form>;

    </Form>;
<<<<<<< HEAD
  ); import {;
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
const onSubmit = async (data: LoginFormValues) => {;
  if (isSubmitting) return;
setIsSubmitting (true);
//Pass email and password to the login function ;
}else {;
  errorMessage = result.error.message ;
}
}
}else {;
  fireEvent ('login', {';
  method: 'email' ;
}) ;
}
}finally {;
  setIsSubmitting (false) ;
}
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
}
}catch (err) {';
  setVerificationMessage ('Failed to resend verification email.') ;
}finally {;
  setIsResending (false) ;
}
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
return (<Form {;
  ...form ;
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
=======
  );

<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button;
          type='submit';
          className='w - full inline - flex items - center justify - center px - 4 py - 2 border border - transparent rounded - md shadow - sm text - base font - medium text - white bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - zion - purple - light visible';
          disabled={is_loading || is_submitting}        >;
          {is_loading || is_submitting ? 'Logging in...' : 'Login'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
        </Button>;
        {verification_message && ('
          <p className='text - sm text - center text - zion - slate - light mt - 2'>;
            {verification_message}
          </p>)}'
        <div className='flex justify - between mt - 4'>;

          </Button>;
          <Button;'
            type='button';'
            variant='outline';'
            className='w - 1/2 ml - 2';
            on_click={handleCheckStatus}          >;
            Check status;
          </Button>;
        </div>;'
        <p className='text - sm text - center mt - 4'>;

            Create account;
          </Link>;
        </p>;
      </form>;
    </Form>);
}else {'
  fire_event ('login', {';'
  method: 'email';
});
}finally {}
  setIsSubmitting (false);
}'
const handleResendEmail = async () => {';'

  email;
});
});

  setVerificationMessage ('Failed to resend verification email.');
}finally {}
  setIsResending (false);
}'
const handleCheckStatus = () =>: any {';'

}
}> {"
  form.form_state.errors.root && (<Alert variant="destructive" className="mb - 4" > form.form_state.errors.root.message;
}</AlertDescription> </Alert>);

  );

}else {;
  fireEvent ('login', {';
  method: 'email' ;
});

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
});
});
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
<<<<<<< HEAD:src-disabled/components/auth/login/LoginForm.tsx
}<div className=" flex justify-between mt-4" > <Button > {';
  isResending ? 'Sending...': 'Resend / Verify e-mail' ;
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>) ;
}'"
=======
}<div className=" flex justify - between mt - 4" > <Button > {';
  is_resending ? 'Sending...': 'Resend / Verify e - mail';
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>);
}'"}
}'"
  );
}
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/LoginForm.tsx
