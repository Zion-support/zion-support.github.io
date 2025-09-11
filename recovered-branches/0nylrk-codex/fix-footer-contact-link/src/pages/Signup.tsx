
import {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {useForm, type, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {User, Mail, Lock, Eye, EyeOff, Facebook, Twitter} from "lucide-react";
import { useState } from "react",
import { Link, Navigate } from "react-router-dom",
import { useForm, type UseFormReturn } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";


import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Checkbox } from "@/components/ui/checkbox",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
// Form validation schema
const signupSchema = z
  .object({
    displayName: z.string().min(2, "Name must be at least 2 characters");
    email: z.string().email("Please enter a valid email")
    displayName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number");
    confirmPassword: z.string()
    termsAccepted: z.boolean().refine(val => val === true, {
      message: "You must accept the terms and conditions"})})
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match"
    path: ["confirmPassword"]})
type SignupFormValues = z.infer<typeof signupSchema>;
export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine(val => val === true, {
      message: "You must accept the terms and conditions"})})
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]}),


export default function Signup() {;
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(signupSchema)
    defaultValues: {
      displayName: ""
      email: ""
      password: ""
      confirmPassword: ""
      termsAccepted: false}}) as UseFormReturn<SignupFormValues>
  // Form submission handler
  const onSubmit = async (data: SignupFormValues) => {
    if (isSubmitting) return, // Prevent multiple submissions
    setIsSubmitting(true);
    
    setIsSubmitting(true),
    try {
      await signup(data.email, data.password, data.displayName)
    } finally {
      setIsSubmitting(false)
    }
  }
  },

  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />
  }
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
                  Sign in
                </Link>
              </p>
            </div>
            <div className="bg-zion-blue-dark rounded-lg p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="John Doe"
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              aria-autocomplete="none"
                              autoComplete="off"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
import { useState } from "react",;
import { Link, Navigate } from "react-router-dom",;
import { useForm, type UseFormReturn } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Checkbox } from "@/components/ui/checkbox",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
// Form validation schema;
const signupSchema = z;
  .object({;
    displayName: z.string().min(2, "Name must be at least 2 characters"),;
    email: z.string().email("Please enter a valid email"),;
    password: z.string();
      .min(8, "Password must be at least 8 characters");
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter");
      .regex(/[a-z]/, "Password must contain at least one lowercase letter");
      .regex(/[0-9]/, "Password must contain at least one number"),;
    confirmPassword: z.string(),;
    termsAccepted: z.boolean().refine(val => val === true, {;
      message: "You must accept the terms and conditions"})});
  .refine(data => data.password === data.confirmPassword, {;
    message: "Passwords do not match",;
    path: ["confirmPassword"]}),;
type SignupFormValues = z.infer<typeof signupSchema>,;
export default function Signup() {;
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;

  // Initialize react-hook-form;
  const form = useForm({;
    resolver: zodResolver(signupSchema),;
    defaultValues: {;
      displayName: "",;
      email: "",;
      password: "",;
      confirmPassword: "",;
      termsAccepted: false}}) as UseFormReturn<SignupFormValues>,;

  // Form submission handler;
  const onSubmit = async (data: SignupFormValues) => {;
    if (isSubmitting) return, // Prevent multiple submissions;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setIsSubmitting(true);
    try {;
      await signup(data && data.email, data && data.password, data && data.displayName);
    } finally {;
      setIsSubmitting(false);
    }
  }

  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />;
  }


  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;

=======
import { useState } from './react';
import { Link, Navigate } from './react-router-dom';
import { use_form, type, UseFormReturn } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from './lucide-react';
;
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Checkbox } from '@/components / ui / checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
// Form validation schema;
const signup_schema = z;
  .object ({
    display_name: z.string ().min (2, "Name must be at least 2 characters");
    email: z.string ().email ("Please enter a valid email"),
    password: z.string ();
      .min (8, "Password must be at least 8 characters");
      .regex (/[A - Z]/, "Password must contain at least one uppercase letter");
      .regex (/[a - z]/, "Password must contain at least one lowercase letter");
      .regex (/[0 - 9]/, "Password must contain at least one number");
    confirm_password: z.string (),
    terms_accepted: z.boolean ().refine (val => val === true, {
      message: "You must accept the terms and conditions"})});
  .refine (data => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"]}),
type SignupFormValues = z.infer < typeof signup_schema>;
;
export default /**
 * Signup - Function description
 */
function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, is_loading, is_authenticated, user } = use_auth ();
  const [show_password, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  // Initialize react - hook - form;
  const form = use_form ({
    resolver: zod_resolver (signup_schema),
    default_values: {
      display_name: "",
      email: "",
      password: "",
      confirm_password: "",
      terms_accepted: false}}) as UseFormReturn < SignupFormValues>,
  // Form submission handler;
  const on_submit = async (data: SignupFormValues) => {
    // Check condition
if (return, // Prevent multiple submissions) {
  $2
}
    setIsSubmitting (true);
    try {
      await signup (data.email, data.password, data.display_name);
    } finally {
      setIsSubmitting (false);
    }
  }
;
  // Redirect if user is already logged in and has completed profile;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/" />;
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/onboarding" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  return (
    <>;
      <Header />;

                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
=======
      <div className="flex min - h-screen bg - zion - blue">;
        <div className="flex - 1 flex flex - col justify - center px - 4 py - 12 sm:px - 6 lg:flex - none lg:px - 20 xl:px - 24">;
          <div className="mx - auto w - full max - w-sm lg:w - 96">;
            <div className="text - center mb - 10">;
              <h2 className="text - 3xl font - bold tracking - tight text - white">;
                Create your account;
              </h2>;
              <p className="mt - 2 text - sm text - zion - slate - light">;
                Already have an account?{" "}
                <Link to="/login" className="font - medium text - zion - cyan hover:text - zion - cyan - light">;

                  Sign in;
                </Link>;
              </p>;
            </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    )}

                  />;


                  <FormField
                    control={form && form.control}
                    name="email"
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input
                              placeholder="you@example && example.com"
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="off"
                              aria-autocomplete="none"
                              type="email"
                            />;
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
                    )}

                  />;


                  <FormField
                    control={form && form.control}
                    name="password"
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="new-password"
                            />;
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                              onClick={() => setShowPassword(!showPassword)}
                            >;
                              {showPassword ? (;
                                <EyeOff className="h-4 w-4" />;
                              ) : (;
                                <Eye className="h-4 w-4" />;
                              )}
                              <span className="sr-only">;
                                {showPassword ? "Hide password" : "Show password"}
=======
            <div className="bg - zion - blue - dark rounded - lg p - 6">;
              <Form {...form}>;
                <form on_submit={form.handle_submit (on_submit)} className="space - y-6" no_validate>;
                  <FormField;
                    control={form.control}
                    name="display_name";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel className="text - zion - slate - light">Full Name</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              placeholder="John Doe";
                              className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                              {...field}
                              aria - autocomplete="none";
                              auto_complete="off";
                            />;
                            <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text - red - 400" />;
                      </FormItem>)}
                  />;
                  <FormField;
                    control={form.control}
                    name="email";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel className="text - zion - slate - light">Email address</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              placeholder="you@example.com";
                              className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                              {...field}
                              auto_complete="off";
                              aria - autocomplete="none";
                              type="email";
                            />;
                            <Mail className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text - red - 400" />;
                      </FormItem>)}
                  />;
                  <FormField;
                    control={form.control}
                    name="password";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel className="text - zion - slate - light">Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              type={show_password ? "text" : "password"}
                              placeholder="••••••••";
                              className="bg - zion - blue pl - 10 text - white border - zion - blue - light focus:border - zion - purple";
                              {...field}
                              auto_complete="new - password";
                            />;
                            <Lock className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                            <Button;
                              type="button";
                              variant="ghost";
                              size="sm";
                              className="absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan";
                              on_click={() => setShowPassword (!show_password)}
                            >;
                              {show_password ? (
                                <EyeOff className="h - 4 w - 4" />) : (
                                <Eye className="h - 4 w - 4" />)}
                              <span className="sr - only">;
                                {show_password ? "Hide password" : "Show password"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;

                  />;


                  <FormField
                    control={form && form.control}
                    name="confirmPassword"
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input
=======
                        <FormMessage className="text - red - 400" />;
                      </FormItem>)}
                  />;
                  <FormField;
                    control={form.control}
                    name="confirm_password";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel className="text - zion - slate - light">Confirm Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••";
                              className="bg - zion - blue pl - 10 text - white border - zion - blue - light focus:border - zion - purple";
                              {...field}

                              auto_complete="new - password";
                            />;
                            <Lock className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                            <Button;
                              type="button";
                              variant="ghost";
                              size="sm";
                              className="absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan";
                              on_click={() => setShowConfirmPassword (!showConfirmPassword)}
                            >;
                              {showConfirmPassword ? (
                                <EyeOff className="h - 4 w - 4" />) : (
                                <Eye className="h - 4 w - 4" />)}
                              <span className="sr - only">;

                                {showConfirmPassword ? "Hide password" : "Show password"}
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;

                  />;


                  <FormField
                    control={form && form.control}
                    name="termsAccepted"
                    render={({ field }) => (;
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                        <FormControl>;
                          <Checkbox
                            checked={field && field.value}
                            onCheckedChange={field && field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                          />;
                        </FormControl>;
                        <div className="space-y-1 leading-none">;
                          <FormLabel className="text-sm text-zion-slate-light">;
                            I agree to the{" "}
                            <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light">;
                              Terms of Service;
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">;
                              Privacy Policy;
                            </a>;
                          </FormLabel>;
                          <FormMessage className="text-red-400" />;
                        </div>;
                      </FormItem>;
                    )}

                  />;

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled={isLoading || isSubmitting}>;
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>;
                </form>;
              </Form>;

              <div className="mt-6">;
                <div className="relative">;
                  <div className="absolute inset-0 flex items-center">;
                    <div className="w-full border-t border-zion-blue-light" />;
                  </div>;
                  <div className="relative flex justify-center text-sm">;
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;
                  </div>;
                </div>;

                <div className="mt-6 grid grid-cols-3 gap-3">;

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithGoogle()}

                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Google</span>;
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">;
                      <path d="M12 && M12.0003 4 && 4.75C13.7703 4 && 4.75 15 && 15.3553 5 && 5.36002 16 && 16.6053 6 && 6.54998L20.0303 3 && 3.125C17.9502 1 && 1.19 15 && 15.2353 0 12 && 12.0003 0C7 && 0C7.31028 0 3 && 3.25527 2 && 2.69 1 && 1.28027 6 && 6.60998L5.27028 9 && 9.70498C6.21525 6 && 6.86002 8 && 8.87028 4 && 4.75 12 && 12.0003 4 && 4.75Z" fill="#EA4335" />;
                      <path d="M23 && M23.49 12 && 12.275C23.49 11 && 11.49 23 && 23.415 10 && 10.73 23 && 23.3 10H12V14 && 10H12V14.51H18.47C18 && 47C18.18 15 && 15.99 17 && 17.34 17 && 17.25 16 && 16.08 18 && 18.1L19.945 21 && 21.1C22.2 19 && 19.01 23 && 23.49 15 && 15.92 23 && 23.49 12 && 12.275Z" fill="#4285F4" />;
                      <path d="M5 && M5.26498 14 && 14.2949C5.02498 13 && 13.5699 4 && 4.88501 12 && 12.7999 4 && 4.88501 11 && 11.9999C4.88501 11 && 11.1999 5 && 5.01998 10 && 10.4299 5 && 5.26498 9 && 9.7049L1.275 6 && 6.60986C0.46 8 && 8.22986 0 10 && 10.0599 0 11 && 11.9999C0 13 && 13.9399 0 && 0.46 15 && 15.7699 1 && 1.28 17 && 17.3899L5.26498 14 && 14.2949Z" fill="#FBBC05" />;
                      <path d="M12 && M12.0004 24C15 && 24C15.2404 24 17 && 17.9654 22 && 22.935 19 && 19.9454 21 && 21.095L16.0804 18 && 18.095C15.0054 18 && 18.82 13 && 13.6204 19 && 19.245 12 && 12.0004 19 && 19.245C8.8704 19 && 19.245 6 && 6.21537 17 && 17.135 5 && 5.2654 14 && 14.29L1.27539 17 && 17.385C3.25539 21 && 21.31 7 && 7.3104 24 12 && 12.0004 24Z" fill="#34A853" />;
                    </svg>;
                  </Button>;

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithFacebook()}

                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Facebook</span>;
                    <Facebook className="h-5 w-5" />;
                  </Button>;

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithTwitter()}
                    disabled={isLoading |isSubmitting}
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Join the Future of AI Marketplace</h3>
                <p className="text-lg text-white/80">
                  Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
}
;
