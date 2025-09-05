
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Alert, AlertDescription } from &quot;@/components/ui/alert&quot;;
import { Link, useNavigate } from &quot;react-router-dom&quot;;
import { LoadingOverlay } from &quot;@/components/LoadingOverlay&quot;;

// Form validation schema
const loginSchema = z.object({
  email: z.string().email(&quot;Please enter a valid email&quot;).min(1, &quot;Email is required&quot;),
  password: z.string().min(6, &quot;Password must be at least 6 characters&quot;)});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { isLoading, login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "&quot;,
      password: "&quot;}});

  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const { res, data: resData } = await loginUser(data.email, data.password);
      if (!res.ok) {
        toast.error(resData?.error || &quot;Invalid credentials&quot;);
        return;
      }
      toast.success(&quot;Logged in successfully&quot;);
      if (resData?.token) {
        document.cookie = `token=${resData.token}; path=/`;
      }
      navigate(&quot;/&quot;);
    } catch (err) {
      toast.error(&quot;Unable to login. Please try again.&quot;);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant=&quot;destructive&quot; className=&quot;mb-4&quot;>
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
        </Alert>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues;
          if (firstError) {
            form.setFocus(firstError);
          }
        })}
        className=&quot;space-y-6&quot;
        autoComplete=&quot;off&quot; // Disable browser autofill
      >
        <FormField
          control={form.control}
          name=&quot;email&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Email address</FormLabel>
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
                    placeholder=&quot;you@example.com&quot;
                    aria-label=&quot;Email address&quot;
                    aria-invalid={!!form.formState.errors.email}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
                    autoComplete=&quot;off&quot; // Disable browser autofill
                  />
                  <User className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=&quot;password&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Password</FormLabel>
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
                    type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                    placeholder=&quot;Enter password&quot;
                    aria-label=&quot;Password&quot;
                    aria-invalid={!!form.formState.errors.password}
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
                    autoComplete=&quot;off&quot; // Disable browser autofill
                  />
                  <LogIn className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Button
                    type=&quot;button&quot;
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className=&quot;h-4 w-4&quot; />
                    ) : (
                      <Eye className=&quot;h-4 w-4&quot; />
                    )}
                    <span className=&quot;sr-only&quot;>
                      {showPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}
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
          type=&quot;submit&quot;
          className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? &quot;Logging in...&quot; : &quot;Login&quot;}
        </Button>
      </form>
      <LoadingOverlay visible={isLoading || isSubmitting} />
    </Form>
  );
}
