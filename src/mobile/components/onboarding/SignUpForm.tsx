<<<<<<< HEAD


import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from "@/context/auth/AuthProvider";
import { AlertCircle } from 'lucide-react'import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from "@/context/auth/AuthProvider";
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from "@/context/auth/AuthProvider"
import { AlertCircle } from 'lucide-react'import { useRouter } from 'next/router'

import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import {logErrorToProduction} from '@/utils/productionLogger';
export function SignUpForm() {;

<<<<<<< HEAD

;
import { use_router } from 'next / router';
import Link from 'next / link';
import { use_auth  } from '@/context / auth / AuthProvider';
import { AlertCircle } from 'lucide-react'import { use_router } from 'next / router';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription  } from '@/components / ui / alert';
import { PasswordStrengthMeter  } from '@/components / PasswordStrengthMeter';
import {logErrorToProduction} from '@/utils / production_logger';
export /**
 * SignUpForm - Function description
 */
function SignUpForm() {
  const router = use_router ();
  const { sign_up, login, loginWithGoogle } = use_auth ();
  const [form_data, setFormData] = useState ({
    email: "",
    password: "",
    name: ""}),
  const [is_loading, setIsLoading] = useState (false);
  const [signup_mode, setSignupMode] = useState (true);
  const [error, set_error] = useState ("");
  const [field_errors, setFieldErrors] = useState<{ email?: string, password?: string, name?: string }>({});
  const [showVerificationMessage, setShowVerificationMessage] = useState (false);
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
    set_error ("");    setFieldErrors (prev => ({ ...prev, [name]: "" }));
=======
  const router = useRouter()
  const { signUp, login, loginWithGoogle } = useAuth()
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    email: ""
    password: ""
    name: ""})
  const [isLoading, setIsLoading] = useState(false)
  const [signupMode, setSignupMode] = useState(true)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<{ email?: string, password?: string, name?: string }>({})
  const [showVerificationMessage, setShowVerificationMessage] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError("");    setFieldErrors(prev => ({ ...prev, [name]: "" }))
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    set_error (""),
    setFieldErrors ({});
    setIsLoading (true);

    const errors: { email?: string, password?: string, name?: string } = {}
<<<<<<< HEAD
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a - z])(?=.*[A - Z])(?=.*\d).{8}$/;
    if () {) {
  $2
}
      errors.name = 'Full name is required';
=======


=======
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/
    if (signupMode && !formData.name.trim()) {
      errors.name = 'Full name is required'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import React, { useState } from "react",
import { Label } from "@/components/ui/label",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { LoadingSpinner } from "@/components/ui/enhanced-loading-states",
import { useRouter } from 'next/router',
import Link from 'next/link',
import { useAuth } from "@/context/auth/AuthProvider",
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert",
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter",
import {logErrorToProduction} from '@/utils/productionLogger',
export function SignUpForm() {

  const router = useRouter(),
  const { signUp, login, loginWithGoogle } = useAuth(),
  
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""}),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false)
  const [signupMode, setSignupMode] = useState(true)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<{ email?: string, password?: string, name?: string }>({})
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");    setFieldErrors(prev => ({ ...prev, [name]: "" }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(""),
    setFieldErrors({})
    setIsLoading(true)
    const errors: { email?: string, password?: string, name?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/
    if (signupMode && !formData.name.trim()) {
      errors.name = 'Full name is required'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [isLoading, setIsLoading] = useState(false),
  const [signupMode, setSignupMode] = useState(true),
  const [error, setError] = useState(""),
  const [fieldErrors, setFieldErrors] = useState<{ email?: string, password?: string, name?: string }>({}),
  const [showVerificationMessage, setShowVerificationMessage] = useState(false),
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value })),
    setError(""),
    setFieldErrors(prev => ({ ...prev, [name]: "" }))
  },
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setError(""),
    setFieldErrors({}),
    setIsLoading(true),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }





=======
    if (signupMode && !formData.name.trim()) {
      errors.name = 'Full name is required'
import React, { useState } from "react",;
import { Label } from "@/components/ui/label",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { LoadingSpinner } from "@/components/ui/enhanced-loading-states",;
import { useRouter } from 'next/router',;
import Link from 'next/link',;
import { useAuth } from "@/context/auth/AuthProvider",;
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter",;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function SignUpForm() {;
  const router = useRouter(),;
  const { signUp, login, loginWithGoogle } = useAuth(),;
  const [formData, setFormData] = useState({;
    email: "",;
    password: "",;
    name: ""}),;
  const [isLoading, setIsLoading] = useState(false),;
  const [signupMode, setSignupMode] = useState(true),;
  const [error, setError] = useState(""),;
  const [fieldErrors, setFieldErrors] = useState<{ email?: string, password?: string, name?: string }>({}),;
  const [showVerificationMessage, setShowVerificationMessage] = useState(false),;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]: value })),;
    setError(""),;
    setFieldErrors(prev => ({ ...prev, [name]: "" }));
  },;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setError(""),;
    setFieldErrors({}),;
    setIsLoading(true),;
    const errors: { email?: string, password?: string, name?: string } = {},;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/,;
    if (signupMode && !formData.name.trim()) {;
      errors.name = 'Full name is required';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (!strongPasswordRegex.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters and include uppercase, lowercase, and a number.'
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsLoading(false)
      return
    }
    try {
      setShowVerificationMessage(false), // Reset verification message
      if (signupMode) {
        const result = await signUp(formData.email, formData.password, {
          name: formData.name})
        if (result?.error) {
          throw new Error(result.error as any), // Cast to any if type is AuthError
<<<<<<< HEAD



=======
<<<<<<< HEAD
        }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
;
    if (Object.keys(errors).length > 0) {;
      setFieldErrors(errors),;
      setIsLoading(false),;
      return;
    }
;
    try {;
      setShowVerificationMessage(false), // Reset verification message;
      if (signupMode) {;
        const result = await signUp(formData.email, formData.password, {;
          name: formData.name}),;
        if (result?.error) {;
          throw new Error(result.error as any), // Cast to any if type is AuthError;
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        if (result?.emailVerificationRequired) {
          setShowVerificationMessage(true)
=======
    if () {) {
  $2
}
      errors.email = 'Email is required';
    } else if () {) {
  $2
}
      errors.email = 'Invalid email address';
    }
    // Check condition
if ( {) {
  $2
}
      errors.password = 'Password is required';
    } else if () {) {
  $2
}
      errors.password = 'Password must be at least 8 characters and include uppercase, lowercase, and a number.';
    }
    // Check condition
if (.length > 0) {) {
  $2
}
      setFieldErrors (errors);
      setIsLoading (false);
      return;
    }
    try {
      setShowVerificationMessage (false), // Reset verification message;
      // Check condition
if ( {) {
  $2
}
        const result = await sign_up (form_data.email, form_data.password, {
          name: form_data.name}),
        // Check condition
if ( {) {
  $2
}
          throw new Error (result.error as any), // Cast to any if type is AuthError;
        }
        // Check condition
if ( {) {
  $2
}
          setShowVerificationMessage (true);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        } else {

          // Only navigate if email verification is not required
          router.push("/mobile")

;
        if (result?.emailVerificationRequired) {;
          setShowVerificationMessage(true);
        } else {;
          // Only navigate if email verification is not required;
          router.push("/mobile");
        }
      } else {;
        const { error } = await login(formData.email, formData.password),;
        if (error) {;
          throw new Error(error);
        }
        
        router.push("/mobile")
;
        router.push("/mobile");
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      }
    } catch (err: any) {
      logErrorToProduction('Signup/Login error:', { data: err })
      setError(err.message |'An unexpected error occurred. Please try again.')
=======
        router.push ("/mobile");
      }
    } catch (err: any) {
      logErrorToProduction ('Signup / Login error:', { data: err }),
      set_error (err.message || 'An unexpected error occurred. Please try again.');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD

  const router = useRouter();
  const { signUp, login, loginWithGoogle } = useAuth();

  const [formData, setFormData] = useState({;
    email: "",;
    password: "",;
    name: ""}),;
  const [isLoading, setIsLoading] = useState(false);
  const [signupMode, setSignupMode] = useState(true);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ email?: string, password?: string, name?: string }>({});
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");    setFieldErrors(prev => ({ ...prev, [name]: "" }));
=======


=======

=======
  }
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  };

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError(""),;
    setFieldErrors({});
    setIsLoading(true);
    const errors: { email?: string, password?: string, name?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/;

    if (signupMode && !formData && formData.name.trim()) {;
      errors && errors.name = 'Full name is required';
    }

    if (!formData && formData.email.trim()) {;
      errors && errors.email = 'Email is required';
    } else if (!emailRegex && emailRegex.test(formData && formData.email)) {;
      errors && errors.email = 'Invalid email address';
    }

    if (!formData && formData.password) {;
      errors && errors.password = 'Password is required';
    } else if (!strongPasswordRegex && strongPasswordRegex.test(formData && formData.password)) {;
      errors && errors.password = 'Password must be at least 8 characters and include uppercase, lowercase, and a number.';
    }

    if (Object && Object.keys(errors).length > 0) {;
      setFieldErrors(errors);
      setIsLoading(false);
      return;
    }

    try {;
      setShowVerificationMessage(false), // Reset verification message;
      if (signupMode) {;
        const result = await signUp(formData && formData.email, formData && formData.password, {;
          name: formData && formData.name}),;
        if (result?.error) {;
          throw new Error(result && result.error as any), // Cast to any if type is AuthError;
        }

        if (result?.emailVerificationRequired) {;
          setShowVerificationMessage(true);
        } else {;
          // Only navigate if email verification is not required;
          router && router.push("/mobile");
        };
      } else {;
        const { error } = await login(formData && formData.email, formData && formData.password);

        if (error) {;
          throw new Error(error);
        }

        router && router.push("/mobile");
      }
    } catch (err: any) {;
      logErrorToProduction('Signup/Login error:', { data: err }),;
      setError(err && err.message || 'An unexpected error occurred. Please try again.');
    } finally {;
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {;
    try {;
      await loginWithGoogle();
    } catch (err: any) {;
      setError(err && err.message);
    }

  },
  
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (


      
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full py-6 relative"
          onClick = {handleGoogleLogin,}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </Button>
<<<<<<< HEAD


        <Button 
          variant="outline" 


=======
<<<<<<< HEAD
        <Button
          variant="outline"
=======
        <Button 
          variant="outline" 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          className="w-full py-6 relative"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-5.8-4.85-10.5-10.826-10.5-6.02 0-10.93 4.7-10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v-7.318h-2.696v-3.041h2.696V9.898c0-2.586 1.581-4.016 4.003-4.016 1.159 0 2.37.204 2.37.204v2.543h-1.334c-1.316 0-1.727.8-1.727 1.622v1.95h2.938l-.47 3.04h-2.468v7.318C20.125 21.648 24 17.307 24 12.073z" fill="#1877F2" />
          </svg>
          Continue with Facebook
        </Button>
      </div>
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-border"></div>
        <span className="mx-2 text-xs text-muted-foreground">OR</span>
        <div className="flex-grow border-t border-border"></div>
      </div>

      </h2>;

      <div className="space-y-2">;
        <Button
          variant="outline" 
          className="w-full py-6 relative"
          onClick = {handleGoogleLogin,}>;
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www && www.w3.org/2000/svg">;
            <path d="M22 && M22.56 12 && 12.25c0-.78-.07-1 && 1.53-.2-2 && 2.25H12v4.26h5 && 26h5.92c-.26 1 && 1.37-1 && 1.04 2 && 2.53-2 && 2.21 3 && 3.31v2.77h3 && 77h3.57c2.08-1 && 1.92 3 && 3.28-4 && 4.74 3 && 3.28-8 && 8.09z" fill="#4285F4" />;
            <path d="M12 23c2 && 23c2.97 0 5 && 5.46-.98 7 && 7.28-2 && 2.66l-3 && 3.57-2 && 2.77c-.98 && 98.66-2 && 2.23 1 && 1.06-3 && 3.71 1 && 1.06-2 && 2.86 0-5 && 5.29-1 && 1.93-6 && 6.16-4 && 4.53H2.18v2 && 18v2.84C3.99 20 && 20.53 7 && 7.7 23 12 23z" fill="#34A853" />;
            <path d="M5 && M5.84 14 && 14.09c-.22-.66-.35-1 && 1.36-.35-2 && 2.09s.13-1 && 1.43.35-2 && 2.09V7.07H2 && 07H2.18C1.43 8 && 8.55 1 10 && 10.22 1 12s && 12s.43 3 && 3.45 1 && 1.18 4 && 4.93l2.85-2 && 2.22.81-.62z" fill="#FBBC05" />;
            <path d="M12 5 && 5.38c1.62 0 3 && 3.06.56 4 && 4.21 1 && 1.64l3.15-3 && 3.15C17.45 2 && 2.09 14 && 14.97 1 12 1 7 && 7.7 1 3 && 3.99 3 && 3.47 2 && 2.18 7 && 7.07l3.66 2 && 2.84c.87-2 && 2.6 3 && 3.3-4 && 4.53 6 && 6.16-4 && 4.53z" fill="#EA4335" />;
          </svg>;
          Continue with Google;
        </Button>;

        <Button
          variant="outline" 
          className="w-full py-6 relative">;
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www && www.w3.org/2000/svg">;
            <path d="M24 12 && 12.073c0-5 && 5.8-4 && 4.85-10 && 10.5-10 && 10.826-10 && 10.5-6 && 6.02 0-10 && 10.93 4 && 4.7-10 && 10.93 10 && 10.5 0 5 && 5.234 3 && 3.875 9 && 9.575 8 && 8.95 10 && 10.359v-7 && 7.318h-2 && 2.696v-3 && 3.041h2.696V9 && 696V9.898c0-2 && 2.586 1 && 1.581-4 && 4.016 4 && 4.003-4 && 4.016 1 && 1.159 0 2 && 2.37.204 2 && 2.37.204v2 && 204v2.543h-1 && 1.334c-1 && 1.316 0-1 && 1.727.8-1 && 1.727 1 && 1.622v1.95h2 && 95h2.938l-.47 3 && 3.04h-2 && 2.468v7.318C20 && 318C20.125 21 && 21.648 24 17 && 17.307 24 12 && 12.073z" fill="#1877F2" />;
=======
    <div className="space - y-4 px - 4">;
      <h2 className="text - xl font - medium text - center">;
        {signup_mode ? "Create your account" : "Welcome back"}
      </h2>;
      <div className="space - y-2">;
        <Button;
          variant="outline";
          className="w - full py - 6 relative";
          on_click = {handleGoogleLogin, }
        >;
          <svg view_box="0 0 24 24" className="h - 5 w - 5 mr - 2" xmlns="http://www.w3.org / 2000 / svg">;
            <path d="M22.56 12.25c0-.78-.07 - 1.53-.2 - 2.25H12v4.26h5.92c-.26 1.37 - 1.04 2.53 - 2.21 3.31v2.77h3.57c2.08 - 1.92 3.28 - 4.74 3.28 - 8.09z" fill="#4285F4" />;
            <path d="M12 23c2.97 0 5.46-.98 7.28 - 2.66l - 3.57 - 2.77c-.98.66 - 2.23 1.06 - 3.71 1.06 - 2.86 0 - 5.29 - 1.93 - 6.16 - 4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />;
            <path d="M5.84 14.09c-.22-.66-.35 - 1.36-.35 - 2.09s.13 - 1.43.35 - 2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85 - 2.22.81-.62z" fill="#FBBC05" />;
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15 - 3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87 - 2.6 3.3 - 4.53 6.16 - 4.53z" fill="#EA4335" />;
          </svg>;
          Continue with Google;
        </Button>;
        <Button;
          variant="outline";
          className="w - full py - 6 relative";
        >;
          <svg view_box="0 0 24 24" className="h - 5 w - 5 mr - 2" xmlns="http://www.w3.org / 2000 / svg">;
            <path d="M24 12.073c0 - 5.8 - 4.85 - 10.5 - 10.826 - 10.5 - 6.02 0 - 10.93 4.7 - 10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v - 7.318h - 2.696v - 3.041h2.696V9.898c0 - 2.586 1.581 - 4.016 4.003 - 4.016 1.159 0 2.37.204 2.37.204v2.543h - 1.334c - 1.316 0 - 1.727.8 - 1.727 1.622v1.95h2.938l-.47 3.04h - 2.468v7.318C20.125 21.648 24 17.307 24 12.073z" fill="#1877F2" />;

          </svg>;
          Continue with Facebook;
        </Button>;
      </div>;


      
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Verification Message */}
      {showVerificationMessage && (
        <Alert className="mb-4 border-blue-500 bg-blue-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Please check your email and click the verification link before signing in.
          </AlertDescription>
        </Alert>
<<<<<<< HEAD
=======
=======
;
      {/* Verification Message */}
      {showVerificationMessage && (;
        <Alert className="mb-4 border-blue-500 bg-blue-50">;
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>;
            Please check your email and click the verification link before signing in.;
          </AlertDescription>;
        </Alert>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      )}

      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <form onSubmit={handleSubmit} className="space-y-4">
        {signupMode && (
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
=======

      <form onSubmit={handleSubmit} className="space-y-4">;
        {signupMode && (;
          <div className="space-y-2">;
            <Label htmlFor="name">Full name</Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Input
              id="name"
              name="name"


              value={formData.name}
              onChange={handleInputChange}
              required;
              aria-invalid={!!fieldErrors.name}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              placeholder="Enter your full name"
            />
            {fieldErrors.name && (
              <p className="text-red-500 text-sm">{fieldErrors.name}</p>
            )}
          </div>
        )}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              placeholder="Enter your full name"
            />;
            {fieldErrors && fieldErrors.name && (;
              <p className="text-red-500 text-sm">{fieldErrors && fieldErrors.name}</p>;
            )}
          </div>;
        )}





        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
=======

        <div className="space-y-2">;
          <Label htmlFor="email">Email address</Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Input
            id="email"
            name="email"
            type="email"


            value={formData.email}
            onChange={handleInputChange}
            required;
            aria-invalid={!!fieldErrors.email}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            placeholder="Enter your email"
          />;
          {fieldErrors && fieldErrors.email && (;
            <p className="text-red-500 text-sm">{fieldErrors && fieldErrors.email}</p>;
          )}

        </div>;

        <div className="space-y-2">;
          <Label htmlFor="password">Password</Label>;

          <Input
            id="password"
            name="password"
            type="password"


            value={formData.password}
            onChange={handleInputChange}
            required;
            aria-invalid={!!fieldErrors.password}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            placeholder="Create a password"
          />;
          <PasswordStrengthMeter password={formData && formData.password} />;
          {fieldErrors && fieldErrors.password && (;
            <p className="text-red-500 text-sm">{fieldErrors && fieldErrors.password}</p>;
          )}

        </div>;


=======

        
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <Button
          type="submit"
          className="w-full py-6"
          disabled = {isLoading,}>;
          {isLoading ? (;
            <>;
              <LoadingSpinner size="sm" className="mr-2" />;
              Please wait...;
            </>;
          ) : (;
            signupMode ? "Create Account" : "Sign In";
          )}


      
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      <p className="text-center text-sm">
        {signupMode
          ? "Already have an account? "
          : "Don't have an account? "
=======
      <div className="relative flex items - center">;
        <div className="flex - grow border - t border - border"></div>;
        <span className="mx - 2 text - xs text - muted - foreground">OR</span>;
        <div className="flex - grow border - t border - border"></div>;
      </div>;
      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="mb - 4">;
          <AlertCircle className="h - 4 w - 4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>)}
      {/* Verification Message */}
      {showVerificationMessage && (
        <Alert className="mb - 4 border - blue - 500 bg - blue - 50">;
          <AlertCircle className="h - 4 w - 4" />;
          <AlertDescription>;
            Please check your email and click the verification link before signing in.;
          </AlertDescription>;
        </Alert>)}
      <form on_submit={handle_submit} className="space - y-4">;
        {signup_mode && (
          <div className="space - y-2">;
            <Label html_for="name">Full name</Label>;
            <Input;
              id="name";
              name="name";
              value = {form_data.name, }
              on_change = {handleInputChange, }
              required;
              aria - invalid = {!!field_errors.name, }
              placeholder="Enter your full name";
            />;
            {field_errors.name && (
              <p className="text - red - 500 text - sm">{field_errors.name}</p>)}
          </div>)}
        <div className="space - y-2">;
          <Label html_for="email">Email address</Label>;
          <Input;
            id="email";
            name="email";
            type="email";
            value = {form_data.email, }
            on_change = {handleInputChange, }
            required;
            aria - invalid = {!!field_errors.email, }
            placeholder="Enter your email";
          />;
          {field_errors.email && (
            <p className="text - red - 500 text - sm">{field_errors.email}</p>)}
        </div>;
        <div className="space - y-2">;
          <Label html_for="password">Password</Label>;
          <Input;
            id="password";
            name="password";
            type="password";
            value = {form_data.password, }
            on_change = {handleInputChange, }
            required;
            aria - invalid = {!!field_errors.password, }
            placeholder="Create a password";
          />;
          <PasswordStrengthMeter password={form_data.password} />;
          {field_errors.password && (
            <p className="text - red - 500 text - sm">{field_errors.password}</p>)}
        </div>;
        <Button;
          type="submit";
          className="w - full py - 6";
          disabled = {is_loading, }
        >;
          {is_loading ? (
            <>;
              <LoadingSpinner size="sm" className="mr - 2" />;
              Please wait...;
            </>) : (
            signup_mode ? "Create Account" : "Sign In")}
        </Button>;
      </form>;
      <p className="text - center text - sm">;
        {signup_mode;
          ? "Already have an account? ";
          : "Don't have an account? ";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }

        </Button>;
      </form>;

      <p className="text-center text-sm">;
        {signupMode;
          ? "Already have an account? ";
          : "Don't have an account? ";
        }
        <Link
          href="/login"
          className="p-0 h-auto text-zion-cyan hover: text-zion-cyan-light cursor-pointer">;
=======

        <Link;
          href="/login";
          className="p-0 h-auto text-zion-cyan hover: text-zion-cyan-light cursor-pointer";
        >;

          Sign In;
        </Link>;
      </p>;
    </div>;
  );


=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  error;
}= await login (form_data.email, form_data.password);
// Check condition
if ( {) {
  $2
}
  throw new Error (error);
}</h2> <div className="space - y-2" > <Button > <svg view_box="0 0 24 24" className="h - 5 w - 5 mr - 2" xmlns="http://www.w3.org / 2000 / svg" > <path d="M22.56 12.25c0-.78-.07 - 1.53-.2 - 2.25H12v4.26h5.92c-.26 1.37 - 1.04 2.53 - 2.21 3.31v2.77h3.57c2.08 - 1.92 3.28 - 4.74 3.28 - 8.09z" fill="#4285F4" /> <path d="M12 23c2.97 0 5.46-.98 7.28 - 2.66l - 3.57 - 2.77c-.98.66 - 2.23 1.06 - 3.71 1.06 - 2.86 0 - 5.29 - 1.93 - 6.16 - 4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /> <path d="M5.84 14.09c-.22-.66-.35 - 1.36-.35 - 2.09s.13 - 1.43.35 - 2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85 - 2.22.81-.62z" fill="#FBBC05" /> <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15 - 3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87 - 2.6 3.3 - 4.53 6.16 - 4.53z" fill="#EA4335" /> </svg> Continue with Google </Button> <Button variant="outline" className="w - full py - 6 relative" > <svg view_box="0 0 24 24" className="h - 5 w - 5 mr - 2" xmlns="http://www.w3.org / 2000 / svg" > <path d="M24 12.073c0 - 5.8 - 4.85 - 10.5 - 10.826 - 10.5 - 6.02 0 - 10.93 4.7 - 10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v - 7.318h - 2.696v - 3.041h2.696V9.898c0 - 2.586 1.581 - 4.016 4.003 - 4.016 1.159 0 2.37.204 2.37.204v2.543h - 1.334c - 1.316 0 - 1.727.8 - 1.727 1.622v1.95h2.938l-.47 3.04h - 2.468v7.318C20.125 21.648 24 17.307 24 12.073z" fill="#1877F2" /> </svg> Continue with Facebook </Button> </div> <div className="relative flex items - center"> <div className="flex - grow border - t border - border"></div> <span className="mx - 2 text - xs text - muted - foreground">OR</span> <div className="flex - grow border - t border - border" ></div> </div> <AlertCircle className="h - 4 w - 4" /> <AlertDescription> {
  error;
}</AlertDescription> </Alert>);
}{
  /* Verification Message */;
}{";
  showVerificationMessage && (<Alert className="mb - 4 border - blue - 500 bg - blue - 50"> <AlertCircle className="h - 4 w - 4" /> <AlertDescription> Please check your email and click the verification link before signing in. </AlertDescription> </Alert>) ";
}<Input id="name" name="name" value= {
  form_data.name;
}on_change= {
  handleInputChange;
}required /> {";
  field_errors.name && (<p className="text - red - 500 text - sm"> {
  field_errors.name;
}</p>);
}</div>) ";
}<div className="space - y-2" > <Label html_for="email" >Email address</Label> <Input /> {";
  field_errors.email && (<p className="text - red - 500 text - sm"> {
  field_errors.email;
}</p>) ";
}</div> <div className="space - y-2" > <Label html_for="password" >Password</Label> <Input);
}</div> <Button > {";
  is_loading ? (<> <LoadingSpinner size="sm" className="mr - 2" /> Please wait... </>) : (signup_mode ? "Create Account" : "Sign In") ";
}</Button> </form> <Link href="/login" className="p - 0 h - auto text - zion - cyan hover: text - zion - cyan - light cursor - pointer" > Sign In </Link> </p> </div>);
}"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
