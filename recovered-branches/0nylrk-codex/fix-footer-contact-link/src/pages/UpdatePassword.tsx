
import { useState, useEffect } from &quot;react&quot;;
import { useNavigate, useLocation } from &quot;react-router-dom&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { z } from &quot;zod&quot;;
import { LockKeyhole } from &quot;lucide-react&quot;;

import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from &quot;@/components/ui/form&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { cleanupAuthState } from &quot;@/utils/authUtils&quot;;

// Form validation schema
const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, &quot;Password must be at least 8 characters&quot;)
      .max(64, &quot;Password must be less than 64 characters&quot;),
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
    message: &quot;Passwords do not match&quot;,
    path: [&quot;confirmPassword&quot;]});

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;

export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize react-hook-form
  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "&quot;,
      confirmPassword: "&quot;}});

  useEffect(() => {
    // Extract access token from URL hash
    const hashParams = new URLSearchParams(location.hash.substring(1));
    const token = hashParams.get(&quot;access_token&quot;);
    
    if (token) {
      setAccessToken(token);
    } else {
      setError(&quot;No access token found. Please request a new password reset link.&quot;);
    }

    // Clean up auth state to prevent issues
    cleanupAuthState();
  }, [location]);

  // Form submission handler
  const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
      setError(&quot;No access token found. Please request a new password reset link.&quot;);
      return;
    }

    setIsLoading(true);
    try {
      // Set the session with the access token
      await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: ''});

      // Update the password
      const { error } = await supabase.auth.updateUser({
        password: data.password});

      if (error) {
        toast({
          title: &quot;Password update failed&quot;,
          description: error.message,
          variant: &quot;destructive&quot;});
        setError(error.message);
        return;
      }

      // Show success message and clean up auth state
      setSuccess(true);
      toast({
        title: &quot;Password updated successfully&quot;,
        description: &quot;You can now log in with your new password.&quot;});

      // Clean auth state and redirect after a delay
      cleanupAuthState();
      setTimeout(() => {
        navigate(&quot;/login&quot;);
      }, 3000);
    } catch (error: any) {
      console.error(&quot;Password update error:&quot;, error);
      toast({
        title: &quot;Password update failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
      setError(error.message || &quot;An unexpected error occurred&quot;);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className=&quot;flex min-h-screen bg-zion-blue&quot;>
        <div className=&quot;flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24&quot;>
          <div className=&quot;mx-auto w-full max-w-sm lg:w-96&quot;>
            <div className=&quot;text-center mb-10&quot;>
              <h2 className=&quot;text-3xl font-bold tracking-tight text-white&quot;>
                Update your password
              </h2>
              <p className=&quot;mt-2 text-sm text-zion-slate-light&quot;>
                Enter your new password below.
              </p>
            </div>

            <div className=&quot;bg-zion-blue-dark rounded-lg p-6&quot;>
              {error && (
                <div className=&quot;mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white&quot;>
                  <p className=&quot;text-sm&quot;>{error}</p>
                  <Button 
                    className=&quot;mt-3 text-xs&quot;
                    variant=&quot;outline&quot;
                    onClick={() => navigate('/forgot-password')}
                  >
                    Request new reset link
                  </Button>
                </div>
              )}

              {success ? (
                <div className=&quot;text-center py-8&quot;>
                  <div className=&quot;mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4&quot;>
                    <LockKeyhole className=&quot;h-6 w-6 text-zion-purple&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-medium text-white&quot;>Password updated</h3>
                  <p className=&quot;mt-2 text-sm text-zion-slate-light&quot;>
                    Your password has been successfully updated.
                  </p>
                  <p className=&quot;mt-2 text-sm text-zion-slate-light&quot;>
                    Redirecting you to login...
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
                    <FormField
                      control={form.control}
                      name=&quot;password&quot;
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>New Password</FormLabel>
                          <FormControl>
                            <Input
                              type=&quot;password&quot;
                              className=&quot;bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              placeholder=&quot;••••••••&quot;
                              disabled={isLoading}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name=&quot;confirmPassword&quot;
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type=&quot;password&quot;
                              className=&quot;bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              placeholder=&quot;••••••••&quot;
                              disabled={isLoading}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <Button
                      type=&quot;submit&quot;
                      className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                      disabled={isLoading || !accessToken}
                    >
                      {isLoading ? &quot;Updating...&quot; : &quot;Update Password&quot;}
                    </Button>

                    <div className=&quot;text-center&quot;>
                      <Button
                        variant=&quot;link&quot;
                        className=&quot;text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0&quot;
                        onClick={() => navigate(&quot;/login&quot;)}
                        type=&quot;button&quot;
                      >
                        Back to login
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
        <div className=&quot;hidden lg:block relative w-0 flex-1&quot;>
          <div className=&quot;absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80&quot;>
            <div className=&quot;flex flex-col justify-center items-center h-full px-8&quot;>
              <div className=&quot;max-w-md text-center&quot;>
                <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>Password Recovery</h3>
                <p className=&quot;text-lg text-white/80&quot;>
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
