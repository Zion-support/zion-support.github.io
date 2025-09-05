
<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { useNavigate, useLocation } from "react-router-dom",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { LockKeyhole } from "lucide-react",;
;
import { supabase } from "@/integrations/supabase/client",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { toast } from "@/hooks/use-toast",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { cleanupAuthState } from "@/utils/authUtils",;
;
// Form validation schema;
const updatePasswordSchema = z;
  .object({;
    password:z;
      .string();
      .min(8, "Password must be at least 8 characters");
      .max(64, "Password must be less than 64 characters"),;
    confirmPassword:z.string()});
  .refine((data) => data.password === data.confirmPassword, {;
    message:"Passwords do not match",;
    path:["confirmPassword"]}),;
;
type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,;
;
export default function UpdatePassword() {;
  const [isLoading, setIsLoading] = useState(false),;
  const [accessToken, setAccessToken] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
  const [success, setSuccess] = useState(false),;
  const navigate = useNavigate(),;
  const location = useLocation(),;
;
  // Initialize react-hook-form;
  const form = useForm<UpdatePasswordFormValues>({;
    resolver:zodResolver(updatePasswordSchema),;
    defaultValues:{;
      password:"",;
      confirmPassword:""}}),;
;
  useEffect(() => {;
    // Extract access token from URL hash;
    const hashParams = new URLSearchParams(location.hash.substring(1)),;
    const token = hashParams.get("access_token"),;
    ;
    if (token) {;
      setAccessToken(token),;
    } else {;
      setError("No access token found. Please request a new password reset link."),;
    }
;
    // Clean up auth state to prevent issues;
    cleanupAuthState(),;
  }, [location]),;
;
  // Form submission handler;
  const onSubmit = async (data:UpdatePasswordFormValues) => {;
    if (!accessToken) {;
      setError("No access token found. Please request a new password reset link."),;
      return;
    }
;
    setIsLoading(true),;
    try {;
      // Set the session with the access token;
      await supabase.auth.setSession({;
        access_token:accessToken,;
        refresh_token:''}),;
;
      // Update the password;
      const { error } = await supabase.auth.updateUser({;
        password:data.password}),;
;
      if (error) {;
        toast({;
          title:"Password update failed",;
          description:error.message,;
          variant:"destructive"}),;
        setError(error.message),;
        return,;
      }
;
      // Show success message and clean up auth state;
      setSuccess(true),;
      toast({;
        title:"Password updated successfully",;
        description:"You can now log in with your new password."}),;
;
      // Clean auth state and redirect after a delay;
      cleanupAuthState(),;
      setTimeout(() => {;
        navigate("/login"),;
      }, 3000),;
    } catch (error:any) {;
      console.error("Password update error:", error),;
      toast({;
        title:"Password update failed",;
        description:error.message || "An unexpected error occurred",;
        variant:"destructive"}),;
      setError(error.message || "An unexpected error occurred"),;
    } finally {;
      setIsLoading(false),;
    }
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
                Update your password;
              </h2>;
              <p className="mt-2 text-sm text-zion-slate-light">;
                Enter your new password below.;
              </p>;
            </div>;
;
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              {error && (;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">;
                  <p className="text-sm">{error}</p>;
                  <Button ;
                    className="mt-3 text-xs";
                    variant="outline";
                    onClick={() => navigate('/forgot-password')}
                  >;
                    Request new reset link;
                  </Button>;
                </div>;
              )}
;
              {success ? (;
                <div className="text-center py-8">;
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">;
                    <LockKeyhole className="h-6 w-6 text-zion-purple" />;
                  </div>;
                  <h3 className="text-lg font-medium text-white">Password updated</h3>;
                  <p className="mt-2 text-sm text-zion-slate-light">;
                    Your password has been successfully updated.;
                  </p>;
                  <p className="mt-2 text-sm text-zion-slate-light">;
                    Redirecting you to login...;
                  </p>;
                </div>;
              ) :(;
                <Form {...form}>;
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
                    <FormField;
                      control={form.control}
                      name="password";
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">New Password</FormLabel>;
                          <FormControl>;
                            <Input;
                              type="password";
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              placeholder="••••••••";
                              disabled={isLoading}
                              {...field}
                            />;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
;
                    <FormField;
                      control={form.control}
                      name="confirmPassword";
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                          <FormControl>;
                            <Input;
                              type="password";
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              placeholder="••••••••";
                              disabled={isLoading}
                              {...field}
                            />;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
;
                    <Button;
                      type="submit";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                      disabled={isLoading || !accessToken}
                    >;
                      {isLoading ? "Updating..." :"Update Password"}
                    </Button>;
;
                    <div className="text-center">;
                      <Button;
                        variant="link";
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0";
                        onClick={() => navigate("/login")}
                        type="button";
                      >;
                        Back to login;
                      </Button>;
                    </div>;
                  </form>;
                </Form>;
              )}
            </div>;
          </div>;
        </div>;
        <div className="hidden lg:block relative w-0 flex-1">;
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">;
            <div className="flex flex-col justify-center items-center h-full px-8">;
              <div className="max-w-md text-center">;
                <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3>;
                <p className="text-lg text-white/80">;
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
=======
import { useState, useEffect } from "react",
import { useNavigate, useLocation } from "react-router-dom",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { LockKeyhole } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { toast } from "@/hooks/use-toast",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { cleanupAuthState } from "@/utils/authUtils",
// Form validation schema,
const updatePasswordSchema = z
  .object({password: z
      .string()
      .min(8, &quot;Password must be at least 8 characters&quot;)
      .max(64, &quot;Password must be less than 64 characters&quot;),
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]}),      .min(8, _"Password must be at least 8 characters")
      .max(64, _"Password must be less than 64 characters"), confirmPassword: z.string()})
  .refine(_(data) => data.password === data.confirmPassword, {message: "Passwords do not match", path: ["confirmPassword"]});

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,

export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false),
  const [accessToken, setAccessToken] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [success, setSuccess] = useState(false),
  const navigate = useNavigate(),
  const location = useLocation(),

  // Initialize react-hook-form,
const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""}}),

  useEffect(() => {
    // Extract access token from URL hash,
const hashParams = new URLSearchParams(location.hash.substring(1)),
    const token = hashParams.get("accesstoken"),    
    if (token) {
      setAccessToken(token)
    } else {
      setError("No access token found. Please request a new password reset link.")    }
export default function UpdatePassword() {const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize react-hook-form,
const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema), defaultValues: {
      password: "", confirmPassword: ""}});

  useEffect_(() => {_// Extract access token from window.URL hash,
const hashParams = new URLSearchParams(location.hash.substring(1));
    const token = hashParams.get("accesstoken");
    
    if (token) {
      setAccessToken(token)} else {setError("No access token found. Please request a new password reset link.")}

    // Clean up auth state to prevent issues,
cleanupAuthState()
  }, [location]),

  // Form submission handler,
const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
      setError("No access token found. Please request a new password reset link."),
      return    }

    setIsLoading(true),
    try {
      // Set the session with the access token,
await supabase.auth.setSession({
        accesstoken: accessToken,
        refreshtoken: ''}),

      // Update the password,
const { error } = await supabase.auth.updateUser({
        password: data.password}),

      if (error) {
        toast({
          title: &quot;Password update failed&quot;,
          description: error.message,
          variant: "destructive"}),
        setError(error.message),
        return        setError(error.message);
        return
      }

      // Show success message and clean up auth state,
setSuccess(true),
      toast({
        title: "Password updated successfully",
        description: "You can now log in with your new password."}),
      // Clean auth state and redirect after a delay,
cleanupAuthState(),
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    } catch (error: any) {
      console.error("Password update error:", error),
      toast({
        title: "Password update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      setError(error.message || "An unexpected error occurred")    } finally {
      setIsLoading(false)
    }
  },
      setSuccess(true);
      toast({title: "Password updated successfully", description: "You can now log in with your new password."});

      // Clean auth state and redirect after a delay,
cleanupAuthState();
      setTimeout_(() => {navigate("/login")}, 3000)
    } catch (error: unknown) {toast({
        title: "Password update failed", description: error.message || "An unexpected error occurred", variant: "destructive"});
      setError(error.message || "An unexpected error occurred")
    } finally {setIsLoading(false)}
  };

  return (_<>
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
                  <Button,
className=&quot;mt-3 text-xs&quot;
                    variant=&quot;outline&quot;
                    onClick={() => navigate('/forgot-password')}                  >
                    Request new reset link
                  </Button>
                </div>
              )}

              {success ? (
                <div className=&quot;text-center py-8&quot;>
                  <div className=&quot;mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4&quot;>
                    <LockKeyhole className=&quot;h-6 w-6 text-zion-purple&quot; />                  </div>
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
                    <FormField,
control={form.control}
                      name=&quot;password&quot;
                      render={({ field }) => (                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>New Password</FormLabel>
                          <FormControl>
                            <Input,
type=&quot;password&quot;
                              className=&quot;bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              placeholder=&quot;••••••••&quot;
                              disabled={isLoading}
                              {...field}                            />
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <FormField,
control={form.control}
                      name=&quot;confirmPassword&quot;
                      render={({ field }) => (                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>Confirm Password</FormLabel>
                          <FormControl>
                            <Input,
type=&quot;password&quot;
                              className=&quot;bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                              placeholder=&quot;••••••••&quot;
                              disabled={isLoading}
                              {...field}                            />
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <Button,
type=&quot;submit&quot;
                      className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                      disabled={isLoading || !accessToken}
                    >
                      {isLoading ? &quot;Updating...&quot; : &quot;Update Password&quot}                    </Button>

                    <div className=&quot;text-center&quot;>
                      <Button,
variant=&quot;link&quot;
                        className=&quot;text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0&quot;
                        onClick={() => navigate(&quot;/login&quot;)}
                        type=&quot;button&quot;                      >
                        Back to login
                      </Button>
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
                <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3>
                <p className="text-lg text-white/80">                  Set a strong password to secure your account and continue your journey in the Zion marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
