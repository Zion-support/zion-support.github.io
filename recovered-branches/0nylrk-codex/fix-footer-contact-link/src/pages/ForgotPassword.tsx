<<<<<<< HEAD

=======
import { useState } from "react","
import { Link } from "react-router-dom","
import { useForm, type UseFormReturn } from "react-hook-form","
import { zodResolver } from "@hookform/resolvers/zod","
import { z } from "zod","
import { Mail } from "lucide-react","
import { useAuth } from "@/hooks/useAuth","
import { Button } from "@/components/ui/button";"
import { Input } from "@/components/ui/input";"
import {
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======

import { useState } from "react",
import { Link } from "react-router-dom",
import { useForm, type UseFormReturn } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Mail } from "lucide-react",
import { useAuth } from "@/hooks/useAuth",

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {};

  Form;
  FormControl;
  FormField;
  FormItem;

  FormLabel;"
  FormMessage} from "@/components/ui/form","
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","

import { Input } from "@/components/ui/input",
import {}
>>>>>>> origin/cursor/delete-old-data-records-6bba

  Form,
  FormControl,
  FormField,
  FormItem,

<<<<<<< HEAD
=======
  FormLabel,"
  FormMessage} from "@/components/ui/form","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer",
>>>>>>> origin/cursor/delete-old-data-records-6bba


// Form validation schema

const forgotPasswordSchema = z.object({

<<<<<<< HEAD

  email: z.string().email("Please enter a valid email")})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export default function ForgotPassword() {};
  const { resetPassword, isLoading } = useAuth();

  email: z.string().email("Please enter a valid email")})
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export default function ForgotPassword() {
  const { resetPassword, isLoading } = useAuth();
  const [submitted, setSubmitted] = useState(false);


=======
}
  }
  "email": z.string().email("Please enter a valid email")})"

  email: z.string().email("Please enter a valid email")})
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export default function ForgotPassword() {};
  const { resetPassword, isLoading } = useAuth();
  const [submitted, setSubmitted] = useState(false);export default function ForgotPassword() {;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  email: z.string().email("Please enter a valid email")}),

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,

<<<<<<< HEAD

=======

export default function ForgotPassword() {;

  const { resetPassword, isLoading } = useAuth();
  const [submitted, setSubmitted] = useState(false);
export default function ForgotPassword() {}
  const { resetPassword, isLoading } = useAuth(),
  const [submitted, setSubmitted] = useState(false),
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    resolver: zodResolver(forgotPasswordSchema)
    defaultValues: {"
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>
  // Form submission handler;
  const onSubmit = async (data: ForgotPasswordFormValues) => {}
    await resetPassword(data.email)
    setSubmitted(true)


>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema)
    defaultValues: {
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>
  // Form submission handler
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    await resetPassword(data.email)
    setSubmitted(true)

  return (
    <>
      <Header />"
      <div className="flex min-h-screen bg-zion-blue">"
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">"
          <div className="mx-auto w-full max-w-sm lg:w-96">"
            <div className="text-center mb-10">"
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Reset your password;
              </h2>"
              <p className="mt-2 text-sm text-zion-slate-light">
                Enter your email and we'll send you a link to reset your password.
              </p>
            </div>"
            <div className="bg-zion-blue-dark rounded-lg p-6">
              {submitted ? ("
                <div className="text-center py-8">"
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">"
                    <Mail className="h-6 w-6 text-zion-purple" />
                  </div>"
                  <h3 className="text-lg font-medium text-white">Check your email</h3>"
                  <p className="mt-2 text-sm text-zion-slate-light">'
                    We've sent a password reset link to your email address.
                  </p>"
                  <div className="mt-6">


<<<<<<< HEAD
  },




=======
    <>;
      <Header />;"
      <div className="flex min-h-screen bg-zion-blue">;"
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">;"
          <div className="mx-auto w-full max-w-sm lg:w-96">;"
            <div className="text-center mb-10">;"
              <h2 className="text-3xl font-bold tracking-tight text-white">;
                Reset your password;
              </h2>;"
              <p className="mt-2 text-sm text-zion-slate-light">;'


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
;
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

<<<<<<< HEAD
;
            <div className="bg-zion-blue-dark rounded-lg p-6">;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              {submitted ? (;
                <div className="text-center py-8">;
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">;

                    <Mail className="h-6 w-6 text-zion-purple" />;
                  </div>;"
                  <h3 className="text-lg font-medium text-white">Check your email</h3>;"
                  <p className="mt-2 text-sm text-zion-slate-light">;'
                    We've sent a password reset link to your email address.;
                  </p>;"
                  <div className="mt-6">;
<<<<<<< HEAD

export default function ForgotPassword() { return null; }
  const { resetPassword, isLoading } = useAuth(),;
  const [submitted, setSubmitted] = useState(false),;
=======


                    <Link
                      to="/login"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center">;
<Link;
                      to="/login";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
                    >;
                    <Link
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center">;                    <Link
                      to="/login"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center">;

                      Back to login;
                    </Link>;
                  </div>;
                </div>;

                          <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;

                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            </div>;
                          </FormControl>;"
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}

    await reset_password (data.email),
    set_submitted (true);
  }
;
  return (
    <>;

                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white px - 4 py - 2 rounded inline - flex items - center justify - center";

                    >;
</Link>
                    </Link>;
                  </div>;)
                </div>) : (

                        Back to login;
                      </Link>;
                    </div>;
                  </form>;

                  We'll help you get back into your account so you can continue your journey in the Zion marketplace.;
</Link>
                      </Link>;
                    </div>;
                  </form>;
            </div>;
          </div>;
        </div>;"
        <div className="hidden lg: block relative w-0 flex-1">;"
</div>"
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">;"
</div>"
            <div className="flex flex-col justify-center items-center h-full px-8">;"
</div>"
              <div className="max-w-md text-center">;"
</div>"
                <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3>;""
                <p className="text-lg text-white/80">;"
</p>
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Initialize react-hook-form;
  const form = useForm({;
    resolver: zodResolver(forgotPasswordSchema),;
    defaultValues: {;"
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>,;
  // Form submission handler;
  const onSubmit = async (data: ForgotPasswordFormValues) => {;
    await resetPassword(data.email);
    setSubmitted(true)
};
  return (;
    <>;
      <Header />;"
      <div className="flex min-h-screen bg-zion-blue">;"
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">;"
          <div className="mx-auto w-full max-w-sm lg:w-96">;"
            <div className="text-center mb-10">;"
              <h2 className="text-3xl font-bold tracking-tight text-white">;
                Reset your password;
              </h2>;"
              <p className="mt-2 text-sm text-zion-slate-light">;'
                Enter your email and we'll send you a link to reset your password.;
              </p>;
            </div>;"
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              {submitted ? (;"
                <div className="text-center py-8">;"
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">;"
                    <Mail className="h-6 w-6 text-zion-purple" />;
                  </div>;"
                  <h3 className="text-lg font-medium text-white">Check your email</h3>;"
                  <p className="mt-2 text-sm text-zion-slate-light">;'
                    We've sent a password reset link to your email address.;
                  </p>;"
                  <div className="mt-6">;
                    <Link;"
                      to="/login";"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";
                    >;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      Back to login;
                    </Link>;
                  </div>;
                </div>;
<<<<<<< HEAD

              ) :(;
                <Form {...form}>;
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
                    <FormField;
                      control={form.control}
                      name="email";

=======

              ) : (;
                <Form {...form}>;"
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;

                    <FormField;
  FormLabel,"
import { Header } from "@/components/Header",""
import { Footer } from "@/components/Footer","
// Form validation schema;
const forgotPasswordSchema = z.object({

// Form validation schema;
const forgotPasswordSchema = z.object({)"
  email: z.string().email("Please enter a valid email")})"
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
</typeof>
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,;
</typeof>"
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>"

    <>
      <Header />
"
      <div className="flex min-h-screen bg-zion-blue">"
</div>"
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">"
          <div className="mx-auto w-full max-w-sm lg:w-96">"
            <div className="text-center mb-10">"
              <h2 className="text-3xl font-bold tracking-tight text-white">"
</h2>
              </h2>"
              <p className="mt-2 text-sm text-zion-slate-light">"
</p>
            <div className="bg-zion-blue-dark rounded-lg p-6">"
                <div className="text-center py-8">"
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">"
                    <Mail className="h-6 w-6 text-zion-purple" />"

                  <h3 className="text-lg font-medium text-white">Check your email</h3>""
                  </p>"
                  <div className="mt-6">"
</div>
    <>;
      <Header />;
      <div className="flex min-h-screen bg-zion-blue">;"
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">;"
          <div className="mx-auto w-full max-w-sm lg:w-96">;"
            <div className="text-center mb-10">;"
              <h2 className="text-3xl font-bold tracking-tight text-white">;"
              </h2>;"
              <p className="mt-2 text-sm text-zion-slate-light">;"
              </p>;
            </div>;"
            <div className="bg-zion-blue-dark rounded-lg p-6">;"
                <div className="text-center py-8">;"
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">;"
                    <Mail className="h-6 w-6 text-zion-purple" />;"

                  <h3 className="text-lg font-medium text-white">Check your email</h3>;""
                  </p>;"
                  <div className="mt-6">;"
                    <Link;"
                      to="/login"""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center">;"

                      to="/login";""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center";"
                    >;

                    ;
                  </div>;
                <Form {...form}>;
                  <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;"
</form>
                    <FormField;
                      control={form && form.control}"
                      name="email""
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      render={({ field }) => (;

                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Email address;"
                          <FormControl>;
<<<<<<< HEAD

                            <div className="relative">;
                              <Input;
                                placeholder="you@example.com";
                                className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                                {...field}
                              />;
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
                    </Button>;
                    <div className="text-center">;
                      <Link
                        to="/login"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light">;

=======
                            <div className="relative">;"
                              <Input;"
                                placeholder="you@example && example.com"""
                                className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple""
                                {...field}
                              />;
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                          ;"
                          <FormMessage className="text-red-400" />;"

                    <Button;"
                      type="submit"""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
                      disabled={isLoading}>;

                    <div className="text-center">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
const forgotPasswordSchema = z.object ({)
  email: z.string ().email ("Please enter a valid email")}),"
type ForgotPasswordFormValues = z.infer < typeof forgotPasswordSchema>;
      email: ""}}) as UseFormReturn < ForgotPasswordFormValues>,"
  // Form submission handler;
  const on_submit = async (data: ForgotPasswordFormValues) => {
    await reset_password (data.email),
    set_submitted (true);
  return (
      <div className="flex min - h-screen bg - zion - blue">;"
        <div className="flex - 1 flex flex - col justify - center px - 4 py - 12 sm:px - 6 lg:px - 20 xl:px - 24">;"
          <div className="mx - auto w - full max - w-sm lg:w - 96">;"
            <div className="text - center mb - 10">;"
              <h2 className="text - 3xl font - bold tracking - tight text - white">;"
              <p className="mt - 2 text - sm text - zion - slate - light">;"
            <div className="bg - zion - blue - dark rounded - lg p - 6">;"
                <div className="text - center py - 8">;"
                  <div className="mx - auto flex items - center justify - center h - 12 w - 12 rounded - full bg - zion - purple / 20 mb - 4">;"
                    <Mail className="h - 6 w - 6 text - zion - purple" />;"

                  <h3 className="text - lg font - medium text - white">Check your email</h3>;""
                  <div className="mt - 6">;"
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white px - 4 py - 2 rounded inline - flex items - center justify - center";"

                  </div>;)
                </div>) : (
)"
                  <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;"
                      control={form.control}"
                      name="email";"
                      render={({ field }) => (

                          <FormLabel className="text - zion - slate - light">Email address;"
                                placeholder="you@example.com";""
                                className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";"
                              <Mail className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;"

                          <FormMessage className="text - red - 400" />;"
)
                        )}
                      type="submit";""
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";"
                      disabled={is_loading}

<<<<<<< HEAD
                    >;
                      {is_loading ? "Sending..." : "Reset Password"}
                    </Button>;
                    <div className="text - center">;
                      <Link;
                        to="/login";
                        className="text - sm font - medium text - zion - cyan hover:text - zion - cyan - light";
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
                      >;
                        Back to login;
                      </Link>;
                    </div>;
                  </form>;
                </Form>;              )}
            </div>;
          </div>;
        </div>;
        <div className="hidden lg:block relative w-0 flex-1">;
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">;
            <div className="flex flex-col justify-center items-center h-full px-8">;
              <div className="max-w-md text-center">;
                <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3>;
                <p className="text-lg text-white/80">;
                  We'll help you get back into your account so you can continue your journey in the Zion marketplace.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

      <Footer />;




=======
                    <div className="text - center">;"
                        className="text - sm font - medium text - zion - cyan hover:text - zion - cyan - light";"

                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
                      disabled={isLoading}

                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light";"

                  </form>;
        <div className="hidden lg: block relative w-0 flex-1">;"
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">;"
            <div className="flex flex-col justify-center items-center h-full px-8">;"
              <div className="max-w-md text-center">;"
                <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3>;""
                <p className="text-lg text-white/80">;"
      <Footer />;

    </>);
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light""
                      >
                        Back to login;
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,;
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>,;"

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;"

    </>;
return (<> <Header /> <div className="flex min-h-screen bg-zion-blue"> <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className="mx-auto w-full max-w-sm lg:w-96"> <div className="text-center mb-10"> <h2 className="text-3xl font-bold tracking-tight text-white"> Reset your password </h2> <p className="mt-2 text-sm text-zion-slate-light"> Enter your email and we'll send you a link to reset your password. </p> </div> <div className="bg-zion-blue-dark rounded-lg p-6"> {"
  submitted ? (<div className="text-center py-8"> <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4"> <Mail className="h-6 w-6 text-zion-purple" /> </div> <h3 className="text-lg font-medium text-white">Check your email</h3> <p className="mt-2 text-sm text-zion-slate-light"> We've sent a password reset link to your email address. </p> <div className="mt-6" > <Link to="/login" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center" > Back to login  </div> </div>) : (<Form {"
  // TODO: Implement
  ...form;"
}> <FormItem> <FormLabel className="text-zion-slate-light">Email address <FormControl> <div className="relative" > <Input placeholder="you@example.com" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
}/> <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div>  <FormMessage className="text-red-400" /> )"
}/> <Button  <div className="text-center" > <Link to="/login" className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light" > Back to login  </div> </form> )""
}</div> </div> </div> <div className="hidden lg: block relative w-0 flex-1"> <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80"> <div className="flex flex-col justify-center items-center h-full px-8"> <div className="max-w-md text-center"> <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3> <p className="text-lg text-white/80"> We'll help you get back into your account so you can continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> <Footer /> </>)
pr-12325
}> <FormItem> <FormLabel className="text-zion-slate-light">Email address</FormLabel> <FormControl> <div className="relative" > <Input placeholder="you@example.com" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
</FormItem>)"
}/> <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)"
</Mail>"
}/> <Button </Button> <div className="text-center" > <Link to="/login" className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light" > Back to login </Link> </div> </form> </Form>)""
}</div> </div> </div> <div className="hidden lg: block relative w-0 flex-1"> <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80"> <div className="flex flex-col justify-center items-center h-full px-8"> <div className="max-w-md text-center"> <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3> <p className="text-lg text-white/80"> We'll help you get back into your account so you can continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> <Footer /> </>)'
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
