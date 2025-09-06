

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


    
    setIsSubmitting(true),


    setIsSubmitting(true);
    try {;


import { useState } from "react",;
import { Link, Navigate } from "react-router-dom",;
import { useForm, type UseFormReturn } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",;
;
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
;
// Form validation schema;
const signupSchema = z;
  .object({;
    displayName:z.string().min(2, "Name must be at least 2 characters"),;
    email:z.string().email("Please enter a valid email"),;
    password:z.string();
      .min(8, "Password must be at least 8 characters");
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter");
      .regex(/[a-z]/, "Password must contain at least one lowercase letter");
      .regex(/[0-9]/, "Password must contain at least one number"),;
    confirmPassword:z.string(),;
    termsAccepted:z.boolean().refine(val => val === true, {;
      message:"You must accept the terms and conditions"})});
  .refine(data => data.password === data.confirmPassword, {;
    message:"Passwords do not match",;
    path:["confirmPassword"]}),;
;
type SignupFormValues = z.infer<typeof signupSchema>,;
;
export default function Signup() {;
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  // Initialize react-hook-form;
  const form = useForm({;
    resolver:zodResolver(signupSchema),;
    defaultValues:{;
      displayName:"",;
      email:"",;
      password:"",;
      confirmPassword:"",;
      termsAccepted:false}}) as UseFormReturn<SignupFormValues>,;
;
  // Form submission handler;
  const onSubmit = async (data:SignupFormValues) => {;
    if (isSubmitting) return, // Prevent multiple submissions;
    ;
    setIsSubmitting(true),;
    try {;
      await signup(data.email, data.password, data.displayName),;
    } finally {;
      setIsSubmitting(false),;

    }
  }

      await signup(data.email, data.password, data.displayName);
    } finally {;
      setIsSubmitting(false);
    }
  };

  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />;
  }


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
  }
  return (
    <>;
      <Header />;


                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;

                  Sign in;
                </Link>;
              </p>;
            </div>;

                            <Input
                              placeholder="John Doe"
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                            />;
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;

                    )}
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

;
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              <Form {...form}>;
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>;
                  <FormField;
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
                              aria-autocomplete="none";
                              autoComplete="off";
                            />;
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="you@example.com"


                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="off"
                              aria-autocomplete="none"
                              type="email"

                            <Input;
                              placeholder="you@example.com";
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              {...field}
                              autoComplete="off";
                              aria-autocomplete="none";
                              type="email";


                            />;
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;

                  />;
                  <FormField
                    control={form && form.control}
                    name="password"
                      </FormItem>;                    )}
                  />;
;
                  <FormField;
                    control={form.control}
                    name="password";


                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;

                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>
                        <FormControl>
                          <div className="relative">


                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="new-password"

                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />


                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"


                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;


                  <FormField
                    control={form && form.control}
                    name="confirmPassword"
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input
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
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••";
                              className="bg - zion - blue pl - 10 text - white border - zion - blue - light focus:border - zion - purple";
                              {...field}
                                {showConfirmPassword ? "Hide password" : "Show password"}
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;
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
                              ) :(;
                                <Eye className="h-4 w-4" />;
                              )}
                              <span className="sr-only">;
                                {showPassword ? "Hide password" :"Show password"}
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;                    )}
                  />;
;
                  <FormField;
                    control={form.control}
                    name="confirmPassword";
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              type={showConfirmPassword ? "text" :"password"}
                              placeholder="••••••••";
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple";
                              {...field}
                              autoComplete="new-password";
                            />;
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            <Button;
                              type="button";
                              variant="ghost";
                              size="sm";
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >;
                              {showConfirmPassword ? (;
                                <EyeOff className="h-4 w-4" />;
                              ) :(;
                                <Eye className="h-4 w-4" />;
                              )}
                              <span className="sr-only">;
                                {showConfirmPassword ? "Hide password" :"Show password"}
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;                    )}
                  />;
;
                  <FormField;
                    control={form.control}
                    name="termsAccepted";
                    render={({ field }) => (;
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                        <FormControl>;
                          <Checkbox;
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
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
;
                  <Button;
                    type="submit";
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                    disabled={isLoading || isSubmitting}
                  >;
                    {isLoading ? "Creating Account..." :"Create Account"}
                  </Button>;
                </form>;
              </Form>;
;
              <div className="mt-6">;
                <div className="relative">;
                  <div className="absolute inset-0 flex items-center">;
                    <div className="w-full border-t border-zion-blue-light" />;
                  </div>;
                  <div className="relative flex justify-center text-sm">;
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;
                  </div>;
                </div>;
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
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="new-password"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                              <span className="sr-only">
                                {showConfirmPassword ? "Hide password" : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-zion-slate-light">
                            I agree to the{" "}
                            <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">
                              Privacy Policy
                            </Link>
                          </FormLabel>
                          <FormMessage className="text-red-400" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled={isLoading |isSubmitting}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </Form>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zion-blue-light" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">

