
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import { Link, Navigate } from "react-router-dom",
import { useForm, type UseFormReturn } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
<<<<<<< HEAD
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import { useState } from "react",
import { Link, Navigate } from "react-router-dom",
import { useForm, type UseFormReturn } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",



import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";


    displayName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    displayName: z.string().min(2, "Name must be at least 2 characters");
    email: z.string().email("Please enter a valid email")
    displayName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    password: z.string()
      .min(8, "Password must be at least 8 characters")
=======
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",      .min(8, "Password must be at least 8 characters")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")

// Form validation schema;
const signupSchema = z;
  .object({;
    displayName: z && z.string().min(2, "Name must be at least 2 characters");
    email: z && z.string().email("Please enter a valid email"),;
    password: z && z.string();
      .min(8, "Password must be at least 8 characters");
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter");
      .regex(/[a-z]/, "Password must contain at least one lowercase letter");
      .regex(/[0-9]/, "Password must contain at least one number");
    confirmPassword: z && z.string(),;
    termsAccepted: z && z.boolean().refine(val => val === true, {;
      message: "You must accept the terms and conditions"})});
  .refine(data => data && data.password === data && data.confirmPassword, {;
    message: "Passwords do not match",;
    path: ["confirmPassword"]}),;
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

type SignupFormValues = z && z.infer<typeof signupSchema>;

  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
export default function Signup() {
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [showConfirmPassword, setShowConfirmPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

    
    setIsSubmitting(true),

=======
    
    setIsSubmitting(true),

    setIsSubmitting(true);
    
    setIsSubmitting(true),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      await signup(data.email, data.password, data.displayName)
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
=======

=======

  },

<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

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

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setIsSubmitting(true);
    try {;
<<<<<<< HEAD
      await signup(data && data.email, data && data.password, data && data.displayName);
    } finally {;
      setIsSubmitting(false);
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  }
<<<<<<< HEAD

=======
      await signup(data.email, data.password, data.displayName);
    } finally {;
      setIsSubmitting(false);
    }
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />;
  }
<<<<<<< HEAD


  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;

<<<<<<< HEAD
=======
=======
=======
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    setIsSubmitting(true);
    try {;
      await signup(data && data.email, data && data.password, data && data.displayName);
    } finally {;
      setIsSubmitting(false);    }
  }import { useState } from './react';
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  return (
    <>;
<<<<<<< HEAD
      <Header />;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
  ;
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />,;
  }
;
  return (;
    <>;
      <Header />;
      <div className="flex min-h-screen bg-zion-blue">;
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">;
          <div className="mx-auto w-full max-w-sm lg:w-96">;
            <div className="text-center mb-10">;
              <h2 className="text-3xl font-bold tracking-tight text-white">;
                Create your account;
              </h2>;
              <p className="mt-2 text-sm text-zion-slate-light">;
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
;
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {;
    return <Navigate to="/onboarding" />;
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
                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  Sign in;
                </Link>;
              </p>;
            </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              {...field}
                              autoComplete="off"
                              aria-autocomplete="none"
                              type="email"
<<<<<<< HEAD
<<<<<<< HEAD
=======
                            <Input;
                              placeholder="you@example.com";
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              {...field}
                              autoComplete="off";
                              aria-autocomplete="none";
                              type="email";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            />;
=======
      <Header />;                            />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
                    )}

                  />;

                  <FormField
                    control={form && form.control}
                    name="password"                  <FormField
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
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;                            />;
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"                        <FormMessage className="text - red-400" />;
                      </FormItem>)}
                  />;
                  <FormField;
                    control={form.control}
                    name="email";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel className="text - zion - slate-light">Email address</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              placeholder="you@example.com";
                              className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple";
                              {...field}
                              auto_complete="off";
                              aria - autocomplete="none";
                              type="email";
                            />;
                            <Mail className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text - red-400" />;
                      </FormItem>)}
                  />;
                  <FormField;
                    control={form.control}
                    name="password";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel className="text - zion - slate-light">Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <Input;
                              type={show_password ? "text" : "password"}                              placeholder="••••••••";
                              className="bg - zion - blue pl - 10 text - white border - zion - blue - light focus:border - zion-purple";
                              {...field}
                              auto_complete="new - password";
                            />;
                            <Lock className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w-4" />;
                            <Button;
                              type="button";
                              variant="ghost";
                              size="sm";
                              className="absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion-cyan";
                              on_click={() => setShowPassword (!show_password)}
                            >;
                              {show_password ? (
                                <EyeOff className="h - 4 w-4" />) : (
                                <Eye className="h - 4 w-4" />)}
                              <span className="sr-only">;
                                {show_password ? "Hide password" : "Show password"}
                            >;
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;

                  />;

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
                    onClick={() => loginWithTwitter()}
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
;
                <div className="mt-6 grid grid-cols-3 gap-3">;
                  <Button;
                    type="button";
                    variant="outline";
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
                    onClick={() => loginWithGoogle()}
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

                  <Button;
                    type="button";
                    variant="outline";
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
                    onClick={() => loginWithTwitter()}
                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Twitter</span>;
                    <Twitter className="h-5 w-5" />;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;

        <div className="hidden lg:block relative w - 0 flex-1">;
          <div className="absolute inset - 0 h - full w - full object - cover bg - gradient - to - br from - zion - blue - dark via - zion - cyan to - zion - purple opacity-80">;
            <div className="flex flex - col justify - center items - center h - full px-8">;
              <div className="max - w-md text-center">;
                <h3 className="text - 3xl font - bold text - white mb-4">Join the Future of AI Marketplace</h3>;
                <p className="text - lg text-white / 80">;
                  Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

    </>);}
}
;

<<<<<<< HEAD
    </>;
  ),;}
 import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
  if (isSubmitting) return, //Prevent multiple submissions try {
  
}//Redirect to onboarding if user is authenticated but hasn't completed profile if (isAuthenticated && !user?.profileComplete) {
  
}flex min-h-screen bg-zion-blue"> <div className=" flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"> <div className=" mx-auto w-full max-w-sm lg:w-96"> <div className=" text-center mb-10"> <h2 className=" text-3xl font-bold tracking-tight text-white"> Create your account </h2> Sign in </Link> </p> </div> <FormItem> <FormLabel className=" text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <Mail className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <FormField <FormControl> <div className=" relative"> <Input /> <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Button) : (<Eye className=" h-4 w-4"/>) 
}</span> </Button> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <FormField <FormControl> <div className=" relative"> <Input /> <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Button) : (<Eye className=" h-4 w-4"/>) 
}</span> </Button> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <FormField Privacy Policy </Link> </FormLabel> <FormMessage className=" text-red-400"/> </div> </FormItem>) 
}/> <Button </Button> </form> </Form> <div className=" mt-6"> <div className=" relative"> <div className=" absolute inset-0 flex items-center"> <div className=" w-full border-t border-zion-blue-light"/> </div> <div className=" relative flex justify-center text-sm"> <span className=" px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span> </div> </div> <div className=" mt-6 grid grid-cols-3 gap-3"> <Button > <span className=" sr-only">Sign in with Google</span> <svg className=" h-5 w-5"aria-hidden=" true"fill=" currentColor"viewBox=" 0 0 24 24"> <path d=" M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"fill=" #EA4335"/> <path d=" M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"fill=" #4285F4"/> <path d=" M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"fill=" #FBBC05"/> <path d=" M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z"fill=" #34A853"/> </svg> </Button> <Button > <span className=" sr-only">Sign in with Facebook</span> <Facebook className=" h-5 w-5"/> </Button> <Button > <span className=" sr-only">Sign in with Twitter</span> <Twitter className=" h-5 w-5"/> </Button> </div> </div> </div> </div> </div> <div className=" hidden lg:block relative w-0 flex-1"> <div className=" absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80"> <div className=" flex flex-col justify-center items-center h-full px-8"> <div className=" max-w-md text-center"> <h3 className=" text-3xl font-bold text-white mb-4">Join the Future of AI Marketplace</h3> <p className=" text-lg text-white/80" > Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide. </p> </div> </div> </div> </div> </div> <Footer /> </>) 
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
}
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
