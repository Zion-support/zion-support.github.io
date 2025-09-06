
=======

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from "@/context/auth/AuthProvider"
import { AlertCircle } from 'lucide-react'import { useRouter } from 'next/router'

import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert",
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import {logErrorToProduction} from '@/utils/productionLogger';
export function SignUpForm() {

  const router = useRouter()
  const { signUp, login, loginWithGoogle } = useAuth()
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  const [is_loading, setIsLoading] = useState (false);
  const [signup_mode, setSignupMode] = useState (true);
  const [error, set_error] = useState ("");
  const [field_errors, setFieldErrors] = useState<{ email?: string, password?: string, name?: string }>({});
  const [showVerificationMessage, setShowVerificationMessage] = useState (false);
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
    set_error ("");    setFieldErrors (prev => ({ ...prev, [name]: "" }));
  }
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    set_error (""),
    setFieldErrors ({});
    setIsLoading (true);

    const errors: { email?: string, password?: string, name?: string } = {}
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a - z])(?=.*[A - Z])(?=.*\d).{8}$/;
    if () {) {
  $2
}
      errors.name = 'Full name is required';


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
  


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""}),


    }





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsLoading(false)
      return;
    }
    try {
      setShowVerificationMessage(false), // Reset verification message
      if (signupMode) {
        const result = await signUp(formData.email, formData.password, {
          name: formData.name})
        if (result?.error) {
          throw new Error(result.error as any), // Cast to any if type is AuthError

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
    } catch (err: any) {
      logErrorToProduction('Signup/Login error:', { data: err })
      setError(err.message |'An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium text-center">
        {signupMode ? "Create your account" : "Welcome back"}
      </h2>
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

=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
<<<<<<< HEAD

      {/* Verification Message */}
      {showVerificationMessage && (
        <Alert className="mb-4 border-blue-500 bg-blue-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Please check your email and click the verification link before signing in.
          </AlertDescription>
        </Alert>
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
              placeholder="Enter your full name"
            />
            {fieldErrors.name && (
              <p className="text-red-500 text-sm">{fieldErrors.name}</p>
            )}
          </div>
        )}
=======
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
            value = {formData.password,}
            onChange = {handleInputChange,}
            required
            aria-invalid = {!!fieldErrors.password,}
            value={formData.password}
            onChange={handleInputChange}
            required;
            aria-invalid={!!fieldErrors.password}
<<<<<<< HEAD

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
        </Button>
      </form>
      
<<<<<<< HEAD
