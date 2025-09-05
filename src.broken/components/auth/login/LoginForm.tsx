
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useRouter } from 'next/router',
import { useForm } from "react-hook-form",
import type { ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from "lucide-react",

import { useAuth } from "@/hooks/useAuth",
import { loginUser } from "@/services/authService",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
import { useState } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { useForm } from &quot;react-hook-form&quot;;
import type { ControllerRenderProps } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { LogIn, User, Eye, EyeOff } from &quot;lucide-react&quot;;

import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { loginUser } from &quot;@/services/authService&quot;;
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
import { Alert, AlertDescription } from "@/components/ui/alert",
import { Link, useNavigate } from "react-router-dom",
import { LoadingOverlay } from "@/components/LoadingOverlay",
// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters")}),
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Alert, AlertDescription } from &quot;@/components/ui/alert&quot;;
import { Link, useNavigate } from &quot;react-router-dom&quot;;
import { LoadingOverlay } from &quot;@/components/LoadingOverlay&quot;;
=======
import type {_ControllerRenderProps} from "react-hook-form";

import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Form validation schema
const _loginSchema = z.object({_email: z.string().email("Please enter a valid email").min(1, _"Email is required"), _password: z.string().min(6, _"Password must be at least 6 characters")});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Form validation schema
const loginSchema = z.object({
  email: z.string().email(&quot;Please enter a valid email&quot;).min(1, &quot;Email is required&quot;),
  password: z.string().min(6, &quot;Password must be at least 6 characters&quot;)});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type LoginFormValues = z.infer<typeof loginSchema>,

<<<<<<< HEAD
export function LoginForm() {
  const { isLoading, login } = useAuth(),
  const navigate = useNavigate(),
  const [searchParams] = useSearchParams(),
  const [showPassword, setShowPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
<<<<<<< HEAD
      email: "",
      password: ""}}),
=======
      email: "&quot;,
      password: "&quot;}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return,

    try {
      setIsSubmitting(true),
      const { res, data: resData } = await loginUser(data.email, data.password),
      if (!res.ok) {
<<<<<<< HEAD
        toast.error(resData?.error || "Invalid credentials"),
        return
      }
      toast.success("Logged in successfully"),
=======
        toast.error(resData?.error || &quot;Invalid credentials&quot;);
        return;
      }
      toast.success(&quot;Logged in successfully&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      if (resData?.token) {
        document.cookie = `token=${resData.token}, path=/`
      }
<<<<<<< HEAD
      navigate("/")
    } catch (err) {
      toast.error("Unable to login. Please try again.")
=======
      navigate(&quot;/&quot;);
    } catch (err) {
      toast.error(&quot;Unable to login. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant=&quot;destructive&quot; className=&quot;mb-4&quot;>
=======
export function LoginForm() {_const { isLoading, _login} = useAuth();
  const _navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const _form = useForm<LoginFormValues>({_resolver: zodResolver(loginSchema), _defaultValues: {
      email: "", _password: ""}});

  const _onSubmit = async (_data: LoginFormValues) => {_if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const { res, _data: resData} = await loginUser(data.email, data.password);
      if (!res.ok) {_toast.error(resData?.error || "Invalid credentials");
        return;}
      toast.success("Logged in successfully");
      if (resData?.token) {_document.cookie = `token=${resData.token}; path=/`;
      }
      navigate("/");
    } catch (err) {_toast.error("Unable to login. Please try again.");} finally {_setIsSubmitting(false);}
  };

  return (
    <Form {_...form}>
      {_form.formState.errors.root && (
        <Alert variant="destructive" className="mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
      <form
<<<<<<< HEAD
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues,
          if (firstError) {
            form.setFocus(firstError)
          }
=======
        onSubmit={_form.handleSubmit(_onSubmit, _(errors) => {
          const _firstError = Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {
            form.setFocus(firstError);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        })}
        className=&quot;space-y-6&quot;
        autoComplete=&quot;off&quot; // Disable browser autofill
      >
        <FormField
<<<<<<< HEAD
          control={form.control}
          name=&quot;email&quot;
          render={({ field }) => (
=======
          control={_form.control}
          name="email"
          render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Email address</FormLabel>
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
<<<<<<< HEAD
                    placeholder=&quot;you@example.com&quot;
                    aria-label=&quot;Email address&quot;
                    aria-invalid={!!form.formState.errors.email}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
                    autoComplete=&quot;off&quot; // Disable browser autofill
=======
                    placeholder="you@example.com"
                    aria-label="Email address"
                    aria-invalid={_!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {_...field}
                    autoComplete="off" // Disable browser autofill
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <User className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
          )}
        />

        <FormField
<<<<<<< HEAD
          control={form.control}
          name=&quot;password&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Password</FormLabel>
=======
          control={_form.control}
          name="password"
          render={_(_{ field}) => (_<FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
<<<<<<< HEAD
                    type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                    placeholder=&quot;Enter password&quot;
                    aria-label=&quot;Password&quot;
                    aria-invalid={!!form.formState.errors.password}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
                    autoComplete=&quot;off&quot; // Disable browser autofill
=======
                    type={_showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    aria-label="Password"
                    aria-invalid={_!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {_...field}
                    autoComplete="off" // Disable browser autofill
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <LogIn className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Button
<<<<<<< HEAD
                    type=&quot;button&quot;
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className=&quot;h-4 w-4&quot; />
=======
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                    onClick={_() => setShowPassword(!showPassword)}
                  >
                    {_showPassword ? (
                      <EyeOff className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : (
                      <Eye className=&quot;h-4 w-4&quot; />
                    )}
<<<<<<< HEAD
                    <span className=&quot;sr-only&quot;>
                      {showPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}
=======
                    <span className="sr-only">
                      {_showPassword ? "Hide password" : "Show password"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
          )}
        />

        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;text-sm&quot;>
            <Link to=&quot;/forgot-password&quot; className=&quot;font-medium text-zion-cyan hover:text-zion-cyan-light&quot;>
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button
<<<<<<< HEAD
          type=&quot;submit&quot;
          className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? &quot;Logging in...&quot; : &quot;Login&quot;}
=======
          type="submit"
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          disabled={_isLoading || isSubmitting}
        >
          {_isLoading || isSubmitting ? "Logging in..." : "Login"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Button>
      </form>
      <LoadingOverlay visible={_isLoading || isSubmitting} />
    </Form>
  )
}
