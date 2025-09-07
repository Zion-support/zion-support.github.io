<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
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
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LogIn, User, Eye, EyeOff } from 'lucide-react';
import { fireEvent } from '@/lib/analytics';
import { useAuth } from '@/context/auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,;
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

import { useState } from "react";
import { useRouter  } from 'next/router';
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
=======
import { useForm, ControllerRenderProps } from "react-hook-form","
import { zodResolver } from "@hookform/resolvers/zod",";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from 'lucide-react'';
import { fireEvent  } from '@/lib/analytics';"
import { useAuth } from "@/context/auth/AuthProvider",
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx

<<<<<<< HEAD
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
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
import {
=======
';
import { useState } from 'react';'
import { use_router } from 'next / router';'
import { use_form, ControllerRenderProps } from 'react - hook - form';'
import { zod_resolver } from '@hookform / resolvers / zod';'
import { z } from 'zod';'
import { LogIn, User, Eye, EyeOff } from 'lucide-react';'
import { fire_event } from '@/lib / analytics';'
import { use_auth } from '@/context / auth / AuthProvider';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { useState  } from './react';'
import { use_form, ControllerRenderProps  } from './react - hook - form';'
import { zod_resolver  } from '@hookform / resolvers / zod';'
import { z  } from './zod';'
import { use_auth  } from '@/context / auth / AuthProvider';'
import { Button  } from '@/components / ui / button';'
import { Input  } from '@/components / ui / input';
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
  FormMessage,
} from '@/components / ui / form';
import { Alert, AlertDescription } from '@/components / ui / alert';
import Link from 'next/link';
=======
  FormMessage,';
} from '@/components / ui / form';'
import { Alert, AlertDescription } from '@/components / ui / alert';'
import Link from 'next / link';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Button } from "@/components/ui/button",
=======
"
import { Button } from "@/components/ui/button","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
import { Input } from "@/components/ui/input",
import {}
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
  const form = useForm<LoginFormValues>({
=======
  const form = useForm<LoginFormValues>({
=======
  const form = useForm<LoginFormValues>({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
      if (result?.error) {;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx

        let errorMessage = 'Login failed. Please try again.'; // Default generic error
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        if (result?.error && result?.error?.message) {
          if (
=======
      if (result?.error) {;'
        let errorMessage = 'Login failed. Please try again.'; // Default generic error;
        if (result?.error && result?.error?.message) {}
          if ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
            result.error.message.toLowerCase().includes('email not confirmed')
          ) {}
            errorMessage ='
              'Your email is not confirmed. Please check your inbox for a confirmation link.'
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  FormMessage} from "@/components/ui/form",
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
  FormMessage} from "@/components/ui/form",
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Alert, AlertDescription } from "@/components/ui/alert",
import Link from "next/link",
import { Checkbox } from "@/components/ui/checkbox",
// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
=======
"
  FormMessage} from "@/components/ui/form","
import { Alert, AlertDescription } from "@/components/ui/alert","
import Link from "next/link","
import { Checkbox } from "@/components/ui/checkbox",;
// Form validation schema;
const loginSchema = z.object({"
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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
  
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
  const form = useForm<LoginFormValues>({
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
    resolver: zodResolver(loginSchema) as any,
    defaultValues: {

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    resolver: zodResolver(loginSchema) as any
    defaultValues: {


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
      email: "",
=======
  const form = useForm<LoginFormValues>({};
    resolver: zodResolver(loginSchema) as any;
    defaultValues: {}
"
      email: "","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
      password: "",
      rememberMe: false}}),

  const onSubmit = async (data: LoginFormValues) => {}
    if (isSubmitting) return,

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
    try {
      setIsSubmitting(true),
      // Pass email and password to the login function
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const result = await login(data.email, data.password, data.rememberMe),
      if (result?.error) {
        let errorMessage = "Login failed. Please try again.", // Default generic error
        if (result?.error && result?.error?.message) {
          if (result.error.message.toLowerCase().includes("email not confirmed")) {
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link."
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      const result = await login(data.email, data.password, data.rememberMe),


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
          } else {
            errorMessage = result.error.message
          }
        }
<<<<<<< HEAD
=======

      const response = await fetch ('/api / auth / resend - verification - email', {
        method: 'POST',
=======

    try {}
      setIsSubmitting(true)
      // Pass email and password to the login function;
      const result = await login(data.email, data.password, data.rememberMe),

          } else {}
            error_message = result.error.message;
          }
        }
'
      const response = await fetch ('/api / auth / resend - verification - email', {'
        method: 'POST','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
import {;
=======
    resolver: zodResolver(loginSchema) as any
    defaultValues: {import {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
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
=======
  FormMessage,;
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
=======
  FormMessage,;'
} from '@/components/ui/form';'
import { Alert, AlertDescription } from '@/components/ui/alert';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
import Link from 'next/link';
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

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
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
=======
export function LoginForm() { return null; }
  const { isLoading, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);'
  const [verificationMessage, setVerificationMessage] = useState('');
  const router = useRouter();

  const form = useForm<LoginFormValues>({;
    resolver: zodResolver(loginSchema) as any,;
    defaultValues: {;'
      email: '',;'
      password: '',;
      rememberMe: false,;
    },;
  });

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
  const onSubmit = async (data: LoginFormValues) => {;
    if (isSubmitting) return,;
    try {;
      setIsSubmitting(true),;
      // Pass email and password to the login function;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
      const result = await login(data.email, data.password, data.rememberMe),;
      if (result?.error) {;
        let errorMessage = "Login failed. Please try again.", // Default generic error;
        if (result?.error && result?.error?.message) {;
          if (result.error.message.toLowerCase().includes("email not confirmed")) {;
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link.";
=======
      const result = await login(data && data.email, data && data.password, data && data.rememberMe);
      if (result?.error) {;'
        let errorMessage = 'Login failed. Please try again.'; // Default generic error;
        if (result?.error && result?.error?.message) {;
          if (;'
            result && result.error.message && message.toLowerCase().includes('email not confirmed');
          ) {;
            errorMessage =;'
              'Your email is not confirmed. Please check your inbox for a confirmation link.';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
          } else {;
            errorMessage = result.error.message;
          }
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
        }
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
        form.setError("root", { message: errorMessage });
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        form && form.setError('root', { message: errorMessage });

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
      } else {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        }'
        form && form.setError('root', { message: errorMessage });
      } else {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
        fireEvent('login', { method: 'email' });
      }
    } finally {;
      setIsSubmitting(false);
    }
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
  },;
=======
  };

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
  const handleResendEmail = async () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message: 'Please enter your email address.' }),;
      return;
    }
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
    setIsResending(true),;
    setVerificationMessage(''),;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    setIsResending(true);
    setVerificationMessage('');

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
    try {;
      const response = await fetch('/api/auth/resend-verification-email', {;
        method: 'POST',;
=======
  const handleResendEmail = async () => {;'
    const email = form && form.getValues('email');
    if (!email) {;'
      form && form.setError('root', { message: 'Please enter your email address.' });
      return;
    }
    setIsResending(true);'
    setVerificationMessage('');
    try {;'
      const response = await fetch('/api/auth/resend-verification-email', {;'
        method: 'POST',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
        headers: { 'Content-Type': 'application/json' },;
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        body: JSON.stringify({ email });
      }),;
      const data = await response.json(),;
      if (response.ok) {;
        setVerificationMessage('Verification email sent. Please check your inbox.');
      } else {;
        setVerificationMessage(data.message || 'Failed to resend verification email.');
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        body: JSON && JSON.stringify({ email }),;
      });
      const data = await response && response.json();
      if (response && response.ok) {;
        setVerificationMessage(;'
          'Verification email sent. Please check your inbox.';
        );
      } else {;
        setVerificationMessage(;'
          data && data.message || 'Failed to resend verification email.';
        );

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
      }
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (err) {;
=======
    } catch (err) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
      setVerificationMessage('Failed to resend verification email.');
    } finally {;
      setIsResending(false);
    }
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
  },;
=======
  };

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
  const handleCheckStatus = () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message: 'Please enter your email address.' }),;
      return;
    }
<<<<<<< HEAD
    router.push(`/verify-status?email=${encodeURIComponent(email)}`)
  },
=======
  const handleCheckStatus = () => {;'
    const email = form && form.getValues('email');
    if (!email) {;'
      form && form.setError('root', { message: 'Please enter your email address.' });
      return;
    }`
    router && router.push(`/verify-status?email=${encodeURIComponent(email)}`);
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx

<<<<<<< HEAD
=======
=======
    router && router.push(`/verify-status?email=${encodeURIComponent(email)}`)
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

        onSubmit={form && form.handleSubmit(onSubmit, errors => {;
          const firstError = Object && Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {;
            form && form.setFocus(firstError);

          }        })}'
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
          render={({
            field
          }: {

<<<<<<< HEAD


<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
          render={({}
            field;
          }: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
  return (
    <Form {...form}>
      {form.formState.errors.root && ("
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
      <form;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        onSubmit={form.handleSubmit(onSubmit, (errors) => {;
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {;
            form.setFocus(firstError);
          }
        })}"
=======

            form.setFocus(firstError);
          }
        })}
        className="space-y-6""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
        className="space-y-6"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
        <FormField;
          control={form.control}"
          name="email""
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (
            <FormItem>"
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
              <FormControl>
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
                <div className="relative">
                  <Input
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
        <FormField
          control={form.control}
          name="email""
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => ("
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>"
              <FormControl>
                <div className='relative'>'
                <div className="relative">
                  <Input
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                <div className='relative'>
=======

              <FormControl>'
                <div className='relative'>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                  <Input;'
                    placeholder='you@example.com';'
                    aria - label='Email address';
                    aria - invalid={!!form.form_state.errors.email}'
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}
                  />;'
=======
  return (
    <Form {...form}>

        <Alert variant="destructive" className="mb-4">"

          <AlertDescription>{form.formState.errors.root.message}
      <form;)
        onSubmit={form.handleSubmit(onSubmit, (errors) => {;
          control={form.control}"
          name="email"""
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => ("

            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address"
              <FormControl>
                <div className='relative'>
</div>
            field: ControllerRenderProps<LoginFormValues, 'email'>;
)
          }) => (            <FormItem>;

              <FormLabel className='text-zion-slate-light'>;

            field: ControllerRenderProps < LoginFormValues, 'email'>;')

              <FormLabel className='text - zion - slate - light'>;

              ;
              <FormControl>;

                <div className='relative'>;
pr-12325
                  <Input;
                    placeholder='you@example.com';
                    aria - label='Email address';
                    aria - invalid={!!form.form_state.errors.email}
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}'
                  />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                  <User className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                </div>;
              </FormControl>;'
              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}'
          name='password';
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

          render={({}
            field;
          }: {}
'
=======
          render={({
            field
          }: {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
            field: ControllerRenderProps<LoginFormValues, 'password'>;
          }) => (            <FormItem>;'
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>;
              <FormControl>;'
                <div className='relative'>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                  <Input
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
=======
                  <Input'
                    type={showPassword ? 'text' : 'password'}'
                    placeholder='Enter password''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <Input
                    type={showPassword ? 'text' : 'password'}'
                    placeholder='Enter password''
                    aria-label='Password''
                    aria-invalid={!!form && form.formState.errors && errors.password}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}'
                  />;
                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;
                  <Button
                    type='button''
                    variant='ghost''
                    size='sm''
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan'',
                    onClick={() => setShowPassword(!showPassword)}                  >;
                    placeholder="you@example.com""
                    aria-label="Email address""
                    aria-invalid={!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple""
                    {...field}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />"
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                    placeholder="you@example.com"
=======
"
                    placeholder="you@example.com""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
                    aria-label="Email address"
                    aria-invalid={!!form.formState.errors.email}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {...field}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                  />
=======
                  />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>"
              <FormMessage className="text-red-400" />
            </FormItem>
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
=======
                  />
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
=======
                  />'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />

                </div>
              </FormControl>'
              <FormMessage className='text-red-400' />
            </FormItem>
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />'
                </div>
              </FormControl>
              <FormMessage className='text-red-400' />'
            </FormItem>
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
          )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        />;
        <FormField;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
          control={form.control}"
          name="password""
=======
          control={form.control}
          name="password""
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => ("
            <FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>"
              <FormControl>
                <div className="relative">"
                  <Input
                    type={showPassword ? "text" : "password"}"
                    placeholder="Enter password""
                    aria-label="Password""
                    aria-invalid={!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple""
                    {...field}
                  />
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"
                  <Button
                    type="button""
                    variant="ghost""
                    size="sm""
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"",
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />"
                    ) : (
                      <Eye className="h-4 w-4" />"
                    )}
                    <span className="sr-only">"
                      {showPassword ? "Hide password" : "Show password"}"
          name="password"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
              </FormControl>"
=======
              </FormControl>
              <FormMessage className="text-red-400" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
              <FormMessage className="text-red-400" />
            </FormItem>"
          name="password";"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (;
            <FormItem>;"
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;"
                <div className="relative">;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                  <Input;"
                    type={showPassword ? "text" : "password"}"
                    placeholder="Enter password";"
=======
                  <Input;
                    type={showPassword ? "text" : "password"}"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                    aria-label="Password";
                    aria-invalid={!!form.formState.errors.password}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";
                    {...field}
                  />;"
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                  <Button;"
                    type="button";"
                    variant="ghost";"
                    size="sm";"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
=======
                  <Button;
                    type="button";
                    variant="ghost";
                    size="sm";
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                    onClick={() => setShowPassword(!showPassword)}
                  >;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                    {showPassword ? (;
                      <EyeOff className="h-4 w-4" />;
                    ) : (;
                      <Eye className="h-4 w-4" />;
                    )}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                    <span className="sr-only">;
                      {showPassword ? "Hide password" : "Show password"}
=======
                    {showPassword ? (;'
                      <EyeOff className='h-4 w-4' />;
                    ) : (;'
                      <Eye className='h-4 w-4' />;
                    )}'
                    <span className='sr-only'>;'
=======
                    <span className='sr-only'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                      {showPassword ? 'Hide password' : 'Show password'}'
            field: ControllerRenderProps < LoginFormValues, 'password'>;
          }) => (            <FormItem>;'
              <FormLabel className='text - zion - slate - light'>Password</FormLabel>;
              <FormControl>;'
                <div className='relative'>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                  <Input;'
                    type={show_password ? 'text' : 'password'}'
                    placeholder='Enter password';'
                    aria - label='Password';
                    aria - invalid={!!form.form_state.errors.password}'
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}
                  />;'
                  <LogIn className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                  <Button;'
                    type='button';'
                    variant='ghost';'
                    size='sm';'
                    className='absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan';
                    on_click={() => setShowPassword (!show_password)}                  >;
                    {show_password ? ('
                      <EyeOff className='h - 4 w - 4' />) : ('
                      <Eye className='h - 4 w - 4' />)}'
                    <span className='sr - only'>;'
                      {show_password ? 'Hide password' : 'Show password'}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
=======
                  <Input;

              <FormMessage className='text-red-400' />

          name="password"")"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => ("

              <FormLabel className="text-zion-slate-light">Password"
                <div className="relative">"
                    type={showPassword ? "text" : "password"}""
                    placeholder="Enter password"""
                    aria-label="Password""
                    aria-invalid={!!form.formState.errors.password}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple""
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"

                  <Button;"
                    type="button"""
                    variant="ghost"""
                    size="sm"""
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"")
                    onClick={() => setShowPassword(!showPassword)}
                      <EyeOff className="h-4 w-4" />"
                      <Eye className="h-4 w-4" />"
                    <span className="sr-only">"
</span>

          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (;"

              <FormLabel className="text-zion-slate-light">Password;"
                    placeholder="Enter password";""
                    aria-label="Password";"
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                    type="button";""
                    variant="ghost";""
                    size="sm";""
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";")
                      <EyeOff className='h-4 w-4' />;

                      <Eye className='h-4 w-4' />;

                    <span className='sr-only'>;
            field: ControllerRenderProps < LoginFormValues, 'password'>;

              <FormLabel className='text - zion - slate - light'>Password;

pr-12325
                    type={show_password ? 'text' : 'password'}
                    placeholder='Enter password';
                    aria - label='Password';
                    aria - invalid={!!form.form_state.errors.password}
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}'
                  />;
                  <LogIn className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                  <Button;
                    type='button';
                    variant='ghost';
                    size='sm';
                    className='absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan';',
                    on_click={() => setShowPassword (!show_password)}                  >;
                    {show_password ? (
                      <EyeOff className='h - 4 w - 4' />) : ('
                      <Eye className='h - 4 w - 4' />)}'
                    <span className='sr - only'>;
                      {show_password ? 'Hide password' : 'Show password'}'
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
                    onClick={() => setShowPassword(!showPassword)}
                  >;
                    {showPassword ? (;
                      <EyeOff className="h-4 w-4" />;
                    ) : (;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" : "Show password"}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
        />;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name="rememberMe"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
=======
=======

=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

              <FormControl>
=======
              <FormControl>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;'
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                <Checkbox
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <FormControl>
<<<<<<< HEAD
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
=======
                <Checkbox;
                  checked={field.value}
                  onCheckedChange={field.onChange}
"
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
                  aria-label="Remember me"
                />


<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
              <FormControl>
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
              </FormControl>
=======
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}              </FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <div className="space-y-1 leading-none">
=======
              </FormControl>"
              <div className="space-y-1 leading-none">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>
              </div>
            </FormItem>
          )}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
=======
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange},
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"",
                  aria-label="Remember me""
                />
              </FormControl>
              <div className="space-y-1 leading-none">"
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>"
              </div>
            </FormItem>
          )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
            {/* If "Remember me" was previously here, it's moved. */}
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        />;
        <div className='flex items-center justify-between'>;
          <div className='text-sm'>;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
=======
        />;'
        <div className='flex items-center justify-between'>;'
          <div className='text-sm'>;'"
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
            {/* If "Remember me" was previously here, it's moved. */}
'
=======
            {/* If "Remember me" was previously here, it's moved. */}
        />;
        <div className='flex items-center justify-between'>;
          <div className='text-sm'>;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}'
            {/* If "Remember me" was previously here, it's moved. */}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
            field: ControllerRenderProps < LoginFormValues, 'remember_me'>;
          }) => ('
            <FormItem className='flex flex - row items - start space - x-3 space - y-0'>;
              <FormControl>;
                <Checkbox;
                  checked={field.value}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                  onCheckedChange={field.on_change}'
                  className='border - zion - blue - light data-[state = checked]:bg - zion - purple data-[state = checked]:text - white';'
=======
                  onCheckedChange={field.on_change},
                  className='border - zion - blue - light data-[state = checked]:bg - zion - purple data-[state = checked]:text - white';,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                  aria - label='Remember me'                />;
              </FormControl>;'
              <div className='space - y-1 leading - none'>;'
                <FormLabel className='text - zion - slate - light'>;
                  Remember me;
                </FormLabel>;
              </div>;
            </FormItem>)}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
        />;'
        <div className='flex items - center justify - between'>;'
          <div className='text - sm'>;'"
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}'"
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;'
          <div className='text - sm'>;
            <Link;'
              href='/forgot - password';'
              className='font - medium text - zion - cyan hover:text - zion - cyan - light';
            >;

=======
        />;
        <div className='flex items - center justify - between'>;
          <div className='text - sm'>;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}'
            {/* If "Remember me" was previously here, it's moved. */}'
          </div>;
          <div className='text - sm'>;
            <Link ;

                  <LogIn className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;

                    type='button';
                    variant='ghost';
                    size='sm';
                    className='absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan';')
                    on_click={() => setShowPassword (!show_password)}                  >;

                      <EyeOff className='h - 4 w - 4' />) : (
                      <Eye className='h - 4 w - 4' />)}

                    <span className='sr - only'>;
                    </span>;



            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;

            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;


                <Checkbox;
                  checked={field.value}
                  onCheckedChange={field.onChange}

                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"""
                  aria-label="Remember me""



              <div className="space-y-1 leading-none">"
</div>"
                <FormLabel className="text-zion-slate-light">Remember me"
        <div className='flex items-center justify-between'>;
          <div className='text-sm'>;
            field: ControllerRenderProps < LoginFormValues, 'remember_me'>;
          }) => (
            <FormItem className='flex flex - row items - start space - x-3 space - y-0'>;


                  onCheckedChange={field.on_change}
                  className='border - zion - blue - light data-[state = checked]:bg - zion - purple data-[state = checked]:text - white';
                  aria - label='Remember me'                />;

              <div className='space - y-1 leading - none'>;

              </div>;)
        <div className='flex items - center justify - between'>;
          <div className='text - sm'>;
pr-12325
            <Link;
              href='/forgot - password';
              className='font - medium text - zion - cyan hover:text - zion - cyan - light';' />;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
              Forgot password?;
            </Link>;
          </div>;
        </div>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

          disabled={isLoading || isSubmitting}>;'
          {isLoading || isSubmitting ? 'Logging in...' : 'Login'}
=======
          disabled={isLoading || isSubmitting}>;
          {isLoading || isSubmitting ? 'Logging in...' : 'Login'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
        </Button>;
        {verificationMessage && (;'
          <p className='text-sm text-center text-zion-slate-light mt-2'>;
            {verificationMessage}
          </p>;
        )}'
        <div className='flex justify-between mt-4'>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
          <Button'
            type='button''
            variant='secondary''
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
            disabled={isResending}>;'
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>;
          <Button'
            type='button''
            variant='outline''
            className='w-1/2 ml-2'
=======
          <Button
            type='button''
            variant='secondary''
            className='w-1/2 mr-2''
            onClick={handleResendEmail}
            disabled={isResending}>;
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}'
          </Button>;
          <Button
            type='button''
            variant='outline''
            className='w-1/2 ml-2''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
            onClick={handleCheckStatus}>;
            Check status;
          </Button>;
        </div>;'
        <p className='text-sm text-center mt-4'>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
          <Link'
            href='/signup'

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
          <Link href='/signup''
          </div />
          <div className="text-sm">"
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light" />",
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
        />;
        <FormField;
          control={form.control}
          name="rememberMe"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
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
          )}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
          </div>
=======
            {/* If "Remember me" was previously here, it's moved. */}          </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="text-sm">
=======
          </div>"
          <div className="text-sm">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot password?
            </Link>
          </div>
        </div>
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
        <Button
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
          type="submit""
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible"",
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? "Logging in..." : "Login"}"
        </Button>
        {verificationMessage && (
          <p className="text-sm text-center text-zion-slate-light mt-2">"
          <Button
            type='button'
            variant='secondary'
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
          <Button
            type='button'
            variant='outline'
            className='w-1/2 ml-2'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          type="submit"
=======
        <Button;
"
          type="submit""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
                  onCheckedChange={field.onChange}"
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white";"
=======
                  onCheckedChange={field.onChange},
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white";,
                  onCheckedChange={field.onChange}
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
                  aria-label="Remember me";
                />;
              </FormControl>;"
              <div className="space-y-1 leading-none">;"
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>;
              </div>;
            </FormItem>;
          )}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
        />;
        <div className="flex items-center justify-between">;
=======
        />
        <div className='flex items-center justify-between'>'
          <div className='text-sm'>'
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}'
            {/* If "Remember me" was previously here, it's moved. */}'
          </div>;
          <div className="text-sm">;
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light" />;",
        />;
        <div className="flex items-center justify-between">;
          <div className="text-sm">;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
          <div className="text-sm">;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
=======
        />'
        <div className='flex items-center justify-between'>'
          <div className='text-sm'>'"
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;"
          <div className="text-sm">;"
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
              Forgot password?;
            </Link>;
          </div>;
        </div>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
        <Button;"
          type="submit";"
=======
        <Button;
          type="submit";
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";",
          disabled={isLoading || isSubmitting}
        >;
          {isLoading || isSubmitting ? "Logging in..." : "Login"}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";
          disabled={isLoading || isSubmitting}
        >;"
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>;
        {verificationMessage && (;"
          <p className="text-sm text-center text-zion-slate-light mt-2">;
            {verificationMessage}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
          </p>;
        )}
        <div className="flex justify-between mt-4">"
          <Button
            type="button""
            variant="secondary""
            className="w-1/2 mr-2""
            onClick={handleResendEmail}
            disabled={isResending}
          >;
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}'
          </Button>
          <Button
            type="button""
            variant="outline""
            className="w-1/2 ml-2""
          </p>;
        )}
        <div className="flex justify-between mt-4">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <Button
            type='button'
            variant='secondary'
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
          <Button
            type='button'
            variant='outline'
            className='w-1/2 ml-2'            Check status
=======

<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
            Check status
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          </p>
        )}"
        <div className="flex justify-between mt-4">
          <Button"
            type="button""
            variant="secondary""
            className="w-1/2 mr-2"
            onClick={handleResendEmail}
            disabled={isResending}
          >;'
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button"
            type="button""
            variant="outline""
            className="w-1/2 ml-2"
            onClick={handleCheckStatus}
          >
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx


            Check status;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
          </Button>
        </div>"
        <p className="text-sm text-center mt-4">"
=======
            Check status
          </Button>
        </div>
        <p className="text-sm text-center mt-4">"
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light" />",
        <p className="text-sm text-center mt-4">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">
            Create account;
          </Link>
        </p>
      </form>
    </Form>
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx


return;

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
}setIsResending (true);'
setVerificationMessage ('')
try {'
  const response = await fetch ('/api/auth/resend-verification-email', {'
  method: 'POST'
headers: {'
=======
'
=======
  )
return;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
}setIsResending (true);''
setVerificationMessage ('')'
try {''
  const response = await fetch ('/api/auth/resend-verification-email', {''
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
  method: 'POST''
headers: {''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
  'Content-Type': 'application/json'
}
body: JSON.stringify ({}
  email;
})
})
const data = await response.json ()'
=======
  method: 'POST'',
headers: {''
  'Content-Type': 'application/json''
}
body: JSON.stringify ({,
  email
})
})
const data = await response.json ()
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
if (response.ok) {''
  setVerificationMessage ('Verification email sent. Please check your inbox.')'
}else {''
  setVerificationMessage (data.message |'Failed to resend verification email.')'
}catch (err) {''
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
  setVerificationMessage ('Failed to resend verification email.')
}finally {}
  setIsResending (false)
}'
=======
  setVerificationMessage ('Failed to resend verification email.')'
}finally {
  setIsResending (false)
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
const handleCheckStatus = () => {''
  const email = form.getValues ('email')'
if (!email) {''
  form.setError ('root', {''
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
  message: 'Please enter your email address.'
})

<<<<<<< HEAD

return;

<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx

<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
}router.push (`/verify-status?email=$ {
  encodeURIComponent (email)
=======
`
}router.push (`/verify-status?email=$ {}
  encodeURIComponent (email)`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
}`)
}
}> {"
  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message;
}</AlertDescription> </Alert>)
}<form"
=======
  message: 'Please enter your email address.''
})
return;
}router.push (`/verify-status?email=$ {`
  encodeURIComponent (email)
}`)`
}
}> {
  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message"
}</AlertDescription> </Alert>)
}<form
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
}) ""
}className="space-y-6" > <FormField text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) ""
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) ""
}</span> </Button> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ""
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me</FormLabel> </div> </FormItem>) ""
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password? </Link> </div> </div> <Button {}
  verificationMessage"
}</p>) "'"
}<div className=" flex justify-between mt-4" > <Button > {''
  isResending ? 'Sending...': 'Resend / Verify e-mail'
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>)
}'"}
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
=======
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>)'"
}'"}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
            className='font-medium text-zion-cyan hover:text-zion-cyan-light'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            className='font-medium text-zion-cyan hover:text-zion-cyan-light'>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light" /> Forgot password? </Link> </div> </div> <Button {",
  verificationMessage
}</p>) ""
}<div className=" flex justify-between mt-4" > <Button > {''
  isResending ? 'Sending...': 'Resend / Verify e-mail''
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>)
}'"}"
            className='font-medium text-zion-cyan hover:text-zion-cyan-light'>;',
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
            Create account;
          </Link>;
        </p>;
      </form>;
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
    </Form>;
  );
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
}
=======


        <Button;'
          type='submit';'
          className='w - full inline - flex items - center justify - center px - 4 py - 2 border border - transparent rounded - md shadow - sm text - base font - medium text - white bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - zion - purple - light visible';
          disabled={is_loading || is_submitting}        >;'
          {is_loading || is_submitting ? 'Logging in...' : 'Login'}
=======
        <Button;
          type='submit';
          className='w - full inline - flex items - center justify - center px - 4 py - 2 border border - transparent rounded - md shadow - sm text - base font - medium text - white bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - zion - purple - light visible';',
          disabled={is_loading || is_submitting}        >;
          {is_loading || is_submitting ? 'Logging in...' : 'Login'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
        </Button>;
        {verification_message && ('
          <p className='text - sm text - center text - zion - slate - light mt - 2'>;
            {verification_message}
          </p>)}'
        <div className='flex justify - between mt - 4'>;
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
          <Button;'
            type='button';'
            variant='secondary';'
            className='w - 1/2 mr - 2';
            on_click={handleResendEmail}
            disabled={is_resending}          >;'
            {is_resending ? 'Sending...' : 'Resend / Verify e - mail'}
=======
          <Button;
            type='button';
          <p className='text-sm text-center text-zion-slate-light mt-2'>;
</p>
          </p>;
        <div className='flex justify-between mt-4'>;
            variant='secondary
            className='w-1/2 mr-2
            onClick={handleResendEmail}
            disabled={isResending}>;

            variant='outline
            className='w-1/2 ml-2
            onClick={handleCheckStatus}>;

        <p className='text-sm text-center mt-4'>;
            href='/signup

          <div className="text-sm">"
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">"

          type="submit"""
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible""
          disabled={isLoading || isSubmitting}
        >

          <p className="text-sm text-center text-zion-slate-light mt-2">"
</p>"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (;"
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"


                  onCheckedChange={field.onChange}"
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white";""
                  aria-label="Remember me";"

              ;"
              <div className="space-y-1 leading-none">;"
                <FormLabel className="text-zion-slate-light">Remember me;"
        <div className='flex items-center justify-between'>
          <div className='text-sm'>
          <div className="text-sm">;"
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;"

          type="submit";""
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";"

          <p className="text-sm text-center text-zion-slate-light mt-2">;"
        <div className="flex justify-between mt-4">"
            variant="secondary"""
            className="w-1/2 mr-2""
            disabled={isResending}

            variant="outline"""
            className="w-1/2 ml-2""
            onClick={handleCheckStatus}

        <p className="text-sm text-center mt-4">"
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">"

  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message;"
} )
}<form;"
}) """
}className="space-y-6" > <FormField text-zion-slate-light">Email address <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div>  <FormMessage className=" text-red-400"/> ) ""
</form>"
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) ""
}</span>  </div>  <FormMessage className="text-red-400" /> ) ""
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me </div> ) ""
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password?  </div> </div> <Button {"
  // TODO: Implement
  verificationMessage;"
}</p>) """
}<div className=" flex justify-between mt-4" > <Button > {
} <Button > Check status  </div> Create account  </p> </form> )
      </form>;
          type='submit';
          className='w - full inline - flex items - center justify - center px - 4 py - 2 border border - transparent rounded - md shadow - sm text - base font - medium text - white bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - zion - purple - light visible';
          disabled={is_loading || is_submitting}        >;

          <p className='text - sm text - center text - zion - slate - light mt - 2'>;
          </p>)}
        <div className='flex justify - between mt - 4'>;
pr-12325
            variant='secondary';
            className='w - 1/2 mr - 2';
            on_click={handleResendEmail}
            disabled={is_resending}          >;
            {is_resending ? 'Sending...' : 'Resend / Verify e - mail'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
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
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
          <Link;'
            href='/signup';'
            className='font - medium text - zion - cyan hover:text - zion - cyan - light';
          >;
=======
          <Link ;
            href='/signup';
            className='font - medium text - zion - cyan hover:text - zion - cyan - light';' />;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
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
  const email = form.get_values ('email');
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
// Check condition'
if ( {') {}
  $2;
}'
  form.set_error ('root', {';'
  message: 'Please enter your email address.';
});
return;'
}setIsResending (true);';'
setVerificationMessage ('');'
try {';'
  const response = await fetch ('/api / auth / resend - verification - email', {';'
  method: 'POST';'
headers: {';'
  'Content - Type': 'application / json';
}
body: JSON.stringify ({}
=======
// Check condition
if ( {') {'
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
  method: 'POST';',
headers: {';
  'Content - Type': 'application / json';
}
body: JSON.stringify ({,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
  email;
});
});
const data = await response.json ();
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
// Check condition'
if ( {') {}
  $2;
}'
  setVerificationMessage ('Verification email sent. Please check your inbox.');'
}else {';'
  setVerificationMessage (data.message || 'Failed to resend verification email.');'
}catch (err) {';'
=======
// Check condition
if ( {') {'
  $2
}
  setVerificationMessage ('Verification email sent. Please check your inbox.');
}else {';
  setVerificationMessage (data.message || 'Failed to resend verification email.');
}catch (err) {';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
  setVerificationMessage ('Failed to resend verification email.');
}finally {}
  setIsResending (false);
}'
const handleCheckStatus = () =>: any {';'
  const email = form.get_values ('email');
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
// Check condition'
if ( {') {}
  $2;
}'
  form.set_error ('root', {';'
  message: 'Please enter your email address.';
});
return;`
}router.push (`/verify - status?email=$ {}
  encodeURIComponent (email);`
}`);
=======
// Check condition
if ( {') {'
  $2
}
  form.set_error ('root', {';
  message: 'Please enter your email address.';
});
return;
}router.push (`/verify - status?email=$ {`
  encodeURIComponent (email);
}`);`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
}
}> {"
  form.form_state.errors.root && (<Alert variant="destructive" className="mb - 4" > form.form_state.errors.root.message;
}</AlertDescription> </Alert>);
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
}<form;"
}) ";"
}className="space - y-6" > <FormField text - zion - slate - light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Button) : (<Eye className="h - 4 w - 4" />) ";"
}</span> </Button> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";"
}/> <FormField <FormItem className="flex flex - row items - start space - x-3 space - y-0"> space - y-1 leading - none"> <FormLabel className=" text - zion - slate - light">Remember me</FormLabel> </div> </FormItem>) ";"
}/> </div> <div className=" text - sm"> <Link href=" /forgot - password"className=" font - medium text - zion - cyan hover:text - zion - cyan - light"> Forgot password? </Link> </div> </div> <Button {}
  verification_message;"
}</p>) ";'"
}<div className=" flex justify - between mt - 4" > <Button > {';'
  is_resending ? 'Sending...': 'Resend / Verify e - mail';
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>);'"
}'"}
}
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
<<<<<<< HEAD
=======
  )            Create account;
          </Link>;
        </p>;
      </form>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
}<form;
}) ";
}className="space - y-6" > <FormField text - zion - slate - light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Button) : (<Eye className="h - 4 w - 4" />) ";
}</span> </Button> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem className="flex flex - row items - start space - x-3 space - y-0"> space - y-1 leading - none"> <FormLabel className=" text - zion - slate - light">Remember me</FormLabel> </div> </FormItem>) ";
}/> </div> <div className=" text - sm"> <Link href=" /forgot - password"className=" font - medium text - zion - cyan hover:text - zion - cyan - light" /> Forgot password? </Link> </div> </div> <Button {",
  verification_message;
}</p>) ";
}<div className=" flex justify - between mt - 4" > <Button > {';
  is_resending ? 'Sending...': 'Resend / Verify e - mail';
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>);
}'"}"
}
;
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
  );


}else {;
  fireEvent ('login', {';
  method: 'email' ;
}) ;

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
}) ;
});
const data = await response.json ();
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
}'"
<<<<<<< HEAD:src/components/auth/login/LoginForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/auth/login/LoginForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/auth/login/LoginForm.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/auth/login/LoginForm.tsx
=======

            variant='outline';
            className='w - 1/2 ml - 2';
            on_click={handleCheckStatus}          >;

        <p className='text - sm text - center mt - 4'>;
            href='/signup';

    );
  form.form_state.errors.root && (<Alert variant="destructive" className="mb - 4" > form.form_state.errors.root.message;"
} );
}) ";""
}className="space - y-6" > <FormField text - zion - slate - light">Email address <FormControl> <div className=" relative"> <Input /> <User className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> </div>  <FormMessage className=" text - red - 400"/> ) ";"
}/> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Password relative" > <Input /> <LogIn className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Button) : (<Eye className="h - 4 w - 4" />) ";"
}</span>  </div>  <FormMessage className="text - red - 400" /> ) ";"
}/> <FormField <FormItem className="flex flex - row items - start space - x-3 space - y-0"> space - y-1 leading - none"> <FormLabel className=" text - zion - slate - light">Remember me </div> ) ";"
}/> </div> <div className=" text - sm"> <Link href=" /forgot - password"className=" font - medium text - zion - cyan hover:text - zion - cyan - light"> Forgot password?  </div> </div> <Button {"
  // TODO: Implement
  verification_message;"
}</p>) ";""
}<div className=" flex justify - between mt - 4" > <Button > {';
} <Button > Check status  </div> Create account  </p> </form> );
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/auth/login/LoginForm.tsx
