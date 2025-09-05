
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Link } from "react-router-dom",
import { useForm, type UseFormReturn } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Mail } from "lucide-react",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
import { useState } from &quot;react&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { useForm, type UseFormReturn } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Mail } from &quot;lucide-react&quot;;

import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
// Form validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email")}),
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;

// Form validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email(&quot;Please enter a valid email&quot;)});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Form validation schema
const _forgotPasswordSchema = z.object({_email: z.string().email("Please enter a valid email")});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>,

<<<<<<< HEAD
export default function ForgotPassword() {
  const { resetPassword, isLoading } = useAuth(),
  const [submitted, setSubmitted] = useState(false),
  
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>,

  // Form submission handler
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    await resetPassword(data.email),
    setSubmitted(true)
  },
=======
export default function ForgotPassword() {_const { resetPassword, _isLoading} = useAuth();
  const [submitted, setSubmitted] = useState(false);
  
  // Initialize react-hook-form
  const _form = useForm({_resolver: zodResolver(forgotPasswordSchema), _defaultValues: {
      email: ""}}) as UseFormReturn<ForgotPasswordFormValues>;

  // Form submission handler
  const _onSubmit = async (_data: ForgotPasswordFormValues) => {_await resetPassword(data.email);
    setSubmitted(true);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
              {_submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">
                    <Mail className="h-6 w-6 text-zion-purple" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Check your email</h3>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    We've sent a password reset link to your email address.
                  </p>
                  <div className="mt-6&quot;>
                    <Link
                      to=&quot;/login"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
                    >
                      Back to login
                    </Link>
                  </div>
                </div>
              ) : (
                <Form {...form}>
<<<<<<< HEAD
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6&quot;>
                    <FormField
                      control={form.control}
                      name=&quot;email"
                      render={({ field }) => (
=======
                  <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={_form.control}
                      name="email"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                          <FormControl>
                            <div className="relative&quot;>
                              <Input
                                placeholder=&quot;you@example.com"
                                className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                                {_...field}
                              />
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <Button
<<<<<<< HEAD
                      type=&quot;submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                      disabled={isLoading}
                    >
                      {isLoading ? &quot;Sending...&quot; : &quot;Reset Password"}
=======
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={_isLoading}
                    >
                      {_isLoading ? "Sending..." : "Reset Password"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>

                    <div className="text-center&quot;>
                      <Link
                        to=&quot;/login"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light"
                      >
                        Back to login
                      </Link>
                    </div>
                  </form>
                </Form>
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
