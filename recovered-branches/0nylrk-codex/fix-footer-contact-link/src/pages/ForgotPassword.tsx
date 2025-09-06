<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx


<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState} from "react";
import {Link} from "react-router-dom";
import {useForm, type, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Mail} from "lucide-react";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { Link } from "react-router-dom",
import { useForm, type UseFormReturn } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Mail } from "lucide-react",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
=======
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Form validation schema

const forgotPasswordSchema = z.object({
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
  email: z.string().email("Please enter a valid email")})
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export default function ForgotPassword() {
  const { resetPassword, isLoading } = useAuth();
  const [submitted, setSubmitted] = useState(false);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  email: z.string().email("Please enter a valid email")}),

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export default function ForgotPassword() {;
  const { resetPassword, isLoading } = useAuth();
  const [submitted, setSubmitted] = useState(false);
=======
export default function ForgotPassword() {
  const { resetPassword, isLoading } = useAuth(),
  const [submitted, setSubmitted] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema)
    defaultValues: {
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>
  // Form submission handler
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    await resetPassword(data.email)
    setSubmitted(true)
<<<<<<< HEAD
<<<<<<< HEAD
=======


  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Reset your password
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Enter your email and we'll send you a link to reset your password.
              </p>
            </div>
            <div className="bg-zion-blue-dark rounded-lg p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">
                    <Mail className="h-6 w-6 text-zion-purple" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Check your email</h3>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    We've sent a password reset link to your email address.
                  </p>
                  <div className="mt-6">
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
import {useState} from "react";
import {Link} from "react-router-dom";
import {useForm, type, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Mail} from "lucide-react";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
// Form validation schema;
const forgotPasswordSchema = z && z.object({;
  email: z && z.string().email("Please enter a valid email")}),;
type ForgotPasswordFormValues = z && z.infer<typeof forgotPasswordSchema>;
export default function ForgotPassword() {;
  const { resetPassword, isLoading } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  // Initialize react-hook-form;
  const form = useForm({;
    resolver: zodResolver(forgotPasswordSchema),;
    defaultValues: {;
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>,;
  // Form submission handler;
  const onSubmit = async (data: ForgotPasswordFormValues) => {;
    await resetPassword(data && data.email),;
    setSubmitted(true);
  };
  return (
=======

import { useState } from "react",;
import { Link } from "react-router-dom",;
import { useForm, type UseFormReturn } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Mail } from "lucide-react",;
;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
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
const forgotPasswordSchema = z.object({;
  email:z.string().email("Please enter a valid email")}),;
;
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,;
;
export default function ForgotPassword() {;
  const { resetPassword, isLoading } = useAuth(),;
  const [submitted, setSubmitted] = useState(false),;
  ;
  // Initialize react-hook-form;
  const form = useForm({;
    resolver:zodResolver(forgotPasswordSchema),;
    defaultValues:{;
      email:""}}) as UseFormReturn<ForgotPasswordFormValues>,;
;
  // Form submission handler;
  const onSubmit = async (data:ForgotPasswordFormValues) => {;
    await resetPassword(data.email),;
    setSubmitted(true);
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <>;
      <Header />;
      <div className="flex min-h-screen bg-zion-blue">;
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">;
          <div className="mx-auto w-full max-w-sm lg:w-96">;
            <div className="text-center mb-10">;
              <h2 className="text-3xl font-bold tracking-tight text-white">;
                Reset your password;
              </h2>;
              <p className="mt-2 text-sm text-zion-slate-light">;
                Enter your email and we'll send you a link to reset your password.;
              </p>;
            </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              {submitted ? (;
                <div className="text-center py-8">;
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">;
                    <Mail className="h-6 w-6 text-zion-purple" />;
                  </div>;
                  <h3 className="text-lg font-medium text-white">Check your email</h3>;
                  <p className="mt-2 text-sm text-zion-slate-light">;
                    We've sent a password reset link to your email address.;
                  </p>;
                  <div className="mt-6">;
<<<<<<< HEAD
                    <Link
                      to="/login"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center">;
=======
                    <Link;
                      to="/login";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
                    >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      Back to login;
                    </Link>;
                  </div>;
                </div>;
<<<<<<< HEAD
              ) : (;
                <Form {...form}>;
                  <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
                    <FormField
                      control={form && form.control}
                      name="email"
=======
              ) :(;
                <Form {...form}>;
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
                    <FormField;
                      control={form.control}
                      name="email";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
<<<<<<< HEAD
                              <Input
                                placeholder="you@example && example.com"
                                className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
=======
                              <Input;
                                placeholder="you@example.com";
                                className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                {...field}
                              />;
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx

                    />;


========
                    />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={isLoading}>;
                      {isLoading ? "Sending..." : "Reset Password"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
                    </Button>;
                    <div className="text-center">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx

                      <Link
                        to="/login"

========
                      <Link
                        to="/login"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
import { useState } from './react';
import { Link } from './react-router-dom';
import { use_form, type, UseFormReturn } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { Mail } from './lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
// Form validation schema;
const forgotPasswordSchema = z.object ({
  email: z.string ().email ("Please enter a valid email")}),
type ForgotPasswordFormValues = z.infer < typeof forgotPasswordSchema>;
;
export default /**
 * ForgotPassword - Function description
 */
function ForgotPassword() {
  const { reset_password, is_loading } = use_auth ();
  const [submitted, set_submitted] = useState (false);
;
  // Initialize react - hook - form;
  const form = use_form ({
    resolver: zod_resolver (forgotPasswordSchema),
    default_values: {
      email: ""}}) as UseFormReturn < ForgotPasswordFormValues>,
  // Form submission handler;
  const on_submit = async (data: ForgotPasswordFormValues) => {
    await reset_password (data.email),
    set_submitted (true);
  }
;
  return (
    <>;
      <Header />;
      <div className="flex min - h-screen bg - zion - blue">;
        <div className="flex - 1 flex flex - col justify - center px - 4 py - 12 sm:px - 6 lg:px - 20 xl:px - 24">;
          <div className="mx - auto w - full max - w-sm lg:w - 96">;
            <div className="text - center mb - 10">;
              <h2 className="text - 3xl font - bold tracking - tight text - white">;
                Reset your password;
              </h2>;
              <p className="mt - 2 text - sm text - zion - slate - light">;
                Enter your email and we'll send you a link to reset your password.;
              </p>;
            </div>;
            <div className="bg - zion - blue - dark rounded - lg p - 6">;
              {submitted ? (
                <div className="text - center py - 8">;
                  <div className="mx - auto flex items - center justify - center h - 12 w - 12 rounded - full bg - zion - purple / 20 mb - 4">;
                    <Mail className="h - 6 w - 6 text - zion - purple" />;
                  </div>;
                  <h3 className="text - lg font - medium text - white">Check your email</h3>;
                  <p className="mt - 2 text - sm text - zion - slate - light">;
                    We've sent a password reset link to your email address.;
                  </p>;
                  <div className="mt - 6">;
                    <Link;
                      to="/login";
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white px - 4 py - 2 rounded inline - flex items - center justify - center";
                    >;
                      Back to login;
                    </Link>;
                  </div>;
                </div>) : (
                <Form {...form}>;
                  <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
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
                              />;
                              <Mail className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                    <Button;
                      type="submit";
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                      disabled={is_loading}
                    >;
                      {is_loading ? "Sending..." : "Reset Password"}
                    </Button>;
                    <div className="text - center">;
                      <Link;
                        to="/login";
                        className="text - sm font - medium text - zion - cyan hover:text - zion - cyan - light";
=======
;
                    <Button;
                      type="submit";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                      disabled={isLoading}
                    >;
                      {isLoading ? "Sending..." :"Reset Password"}
                    </Button>;
;
                    <div className="text-center">;
                      <Link;
                        to="/login";
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      >;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
                        Back to login;
                      </Link>;
                    </div>;
                  </form>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
            </div>;
          </div>;
        </div>;
        <div className="hidden lg: block relative w-0 flex-1">;
=======
                </Form>;              )}
            </div>;
          </div>;
        </div>;
        <div className="hidden lg:block relative w-0 flex-1">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">;
            <div className="flex flex-col justify-center items-center h-full px-8">;
              <div className="max-w-md text-center">;
                <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3>;
                <p className="text-lg text-white/80">;
<<<<<<< HEAD
                </Form>)}
            </div>;
          </div>;
        </div>;
        <div className="hidden lg: block relative w - 0 flex - 1">;
          <div className="absolute inset - 0 h - full w - full object - cover bg - gradient - to - tr from - zion - blue - dark via - zion - purple to - zion - cyan opacity - 80">;
            <div className="flex flex - col justify - center items - center h - full px - 8">;
              <div className="max - w-md text - center">;
                <h3 className="text - 3xl font - bold text - white mb - 4">Account Recovery</h3>;
                <p className="text - lg text - white / 80">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
                  We'll help you get back into your account so you can continue your journey in the Zion marketplace.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx

    </>);
}

=======
=======
                    <Link
                      to="/login"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
                    >
                      Back to login
                    </Link>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                              />
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Reset Password"}
                    </Button>
                    <div className="text-center">
                      <Link
                        to="/login"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light"
                      >
                        Back to login
                      </Link>
                    </div>
                  </form>
                </Form>
<<<<<<< HEAD

<<<<<<< HEAD
=======
;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg: block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3>
                <p className="text-lg text-white/80">
                  We'll help you get back into your account so you can continue your journey in the Zion marketplace.
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
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { Link } from "react-router-dom",;
import { useForm, type UseFormReturn } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Mail } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
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
const forgotPasswordSchema = z.object({;
  email: z.string().email("Please enter a valid email")}),;
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,;
export default function ForgotPassword() {;
  const { resetPassword, isLoading } = useAuth(),;
  const [submitted, setSubmitted] = useState(false),;
  // Initialize react-hook-form;
  const form = useForm({;
    resolver: zodResolver(forgotPasswordSchema),;
    defaultValues: {;
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>,;
  // Form submission handler;
  const onSubmit = async (data: ForgotPasswordFormValues) => {;
    await resetPassword(data.email);
    setSubmitted(true);
  };
  return (;
    <>;
      <Header />;
      <div className="flex min-h-screen bg-zion-blue">;
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">;
          <div className="mx-auto w-full max-w-sm lg:w-96">;
            <div className="text-center mb-10">;
              <h2 className="text-3xl font-bold tracking-tight text-white">;
                Reset your password;
              </h2>;
              <p className="mt-2 text-sm text-zion-slate-light">;
                Enter your email and we'll send you a link to reset your password.;
              </p>;
            </div>;
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              {submitted ? (;
                <div className="text-center py-8">;
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">;
                    <Mail className="h-6 w-6 text-zion-purple" />;
                  </div>;
                  <h3 className="text-lg font-medium text-white">Check your email</h3>;
                  <p className="mt-2 text-sm text-zion-slate-light">;
                    We've sent a password reset link to your email address.;
                  </p>;
                  <div className="mt-6">;
                    <Link;
                      to="/login";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
                    >;
                      Back to login;
                    </Link>;
                  </div>;
                </div>;
              ) : (;
                <Form {...form}>;
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
                    <FormField;
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </>);
}
=======
    </>;
  );
}
 import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
return (<> <Header /> <div className="flex min-h-screen bg-zion-blue"> <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className="mx-auto w-full max-w-sm lg:w-96"> <div className="text-center mb-10"> <h2 className="text-3xl font-bold tracking-tight text-white"> Reset your password </h2> <p className="mt-2 text-sm text-zion-slate-light"> Enter your email and we'll send you a link to reset your password. </p> </div> <div className="bg-zion-blue-dark rounded-lg p-6"> {
  submitted ? (<div className="text-center py-8"> <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4"> <Mail className="h-6 w-6 text-zion-purple" /> </div> <h3 className="text-lg font-medium text-white">Check your email</h3> <p className="mt-2 text-sm text-zion-slate-light"> We've sent a password reset link to your email address. </p> <div className="mt-6" > <Link to="/login" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center" > Back to login </Link> </div> </div>) : (<Form {
  ...form 
}> <FormItem> <FormLabel className="text-zion-slate-light">Email address</FormLabel> <FormControl> <div className="relative" > <Input placeholder="you@example.com" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field 
}/> <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <Button </Button> <div className="text-center" > <Link to="/login" className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light" > Back to login </Link> </div> </form> </Form>) 
}</div> </div> </div> <div className="hidden lg: block relative w-0 flex-1"> <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80"> <div className="flex flex-col justify-center items-center h-full px-8"> <div className="max-w-md text-center"> <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3> <p className="text-lg text-white/80"> We'll help you get back into your account so you can continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> <Footer /> </>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ForgotPassword.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
