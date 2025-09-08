<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/pages/UpdatePassword.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
:src/pages/UpdatePassword.tsx
import { useRouter } from 'next/router'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, ControllerRenderProps } from "react-hook-form"
import { z } from "zod"
import { LockKeyhole } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form
  FormControl
  FormField
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form"; import { toast } from "@/hooks/use-toast"
import { cleanupAuthState } from "@/utils/authUtils"
import { logErrorToProduction } from '@/utils/productionLogger'
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { z } from "zod",
import { LockKeyhole } from 'lucide-react'

import { supabase } from "@/integrations/supabase/client",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
=======
  FormMessage} from @/components/ui/form",
FormMessage} from "@/components/ui/form,
import { toast } from @/hooks/use-toast",
import { cleanupAuthState } from "@/utils/authUtils,
import { logErrorToProduction } from '@/utils/productionLogger,
import { logErrorToProduction } from @/utils/productionLogger',
=======
FormMessage} from "@/components/ui/form",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { toast } from "@/hooks/use-toast",
import { cleanupAuthState } from "@/utils/authUtils",
import { logErrorToProduction } from '@/utils/productionLogger',
import { toast } from "@/hooks/use-toast",;
import { cleanupAuthState } from "@/utils/authUtils",;
import { logErrorToProduction } from '@/utils/productionLogger',;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Form validation schema
const updatePasswordSchema = z
  .object({
    password: z
      .string()
<<<<<<< HEAD

      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters"),

=======
<<<<<<< HEAD
:src/pages/UpdatePassword.tsx
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than 64 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;
}

export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
<<<<<<< HEAD
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters"),
=======
      .min(8, Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters),
=======
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters"),
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]}),

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,

export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false),
  const [accessToken, setAccessToken] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [success, setSuccess] = useState(false),
  const router = useRouter(),

  // Initialize react-hook-form
  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
<<<<<<< HEAD

=======
<<<<<<< HEAD
      password: '',
      confirmPassword: '',
    },
  });
=======
<<<<<<< HEAD
      password: ',
      confirmPassword: '}});
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  useEffect(() => {
    // Extract access token from URL hash on the client
:src/pages/UpdatePassword.tsx
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const hashParams = new URLSearchParams(hash.substring(1));
    const token = hashParams.get('access_token');

<<<<<<< HEAD
    const hash = typeof window !== 'undefined' ? window.location.hash : "",
=======
    const hash = typeof window !== undefined' ? window.location.hash : ",
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      password: "",
      confirmPassword: ""}}),

  useEffect(() => {
    // Extract access token from URL hash on the client
    const hash = typeof window !== 'undefined' ? window.location.hash : "",
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const hashParams = new URLSearchParams(hash.substring(1)),
    const token = hashParams.get("access_token"),
    if (token) {
      setAccessToken(token)
    } else {
<<<<<<< HEAD

=======
<<<<<<< HEAD
      setError(
        'No access token found. Please request a new password reset link.'
      );
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setError("No access token found. Please request a new password reset link.")

    }

    // Clean up auth state to prevent issues
    cleanupAuthState()
  }, []),

  // Form submission handler
  const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
      setError(
        'No access token found. Please request a new password reset link.'
      );
      return;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setError("No access token found. Please request a new password reset link."),
      return

    }

    setIsLoading(true),
    try {
      // Set the session with the access token
      await supabase.auth.setSession({
        access_token: accessToken,
<<<<<<< HEAD

=======
<<<<<<< HEAD
        refresh_token: '',
      });
=======
<<<<<<< HEAD
        refresh_token: '});
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      // Update the password
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (error) {
        toast({
          title: 'Password update failed',
          description: error.message,
          variant: 'destructive',
        });
        setError(error.message);
        return;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        refresh_token: ''}),

      // Update the password
      const { error } = await supabase.auth.updateUser({
        password: data.password}),

      if (error) {
        toast({
          title: "Password update failed",
          description: error.message,
          variant: "destructive"}),
        setError(error.message),
        return

      }

      // Show success message and clean up auth state
      setSuccess(true),
      toast({
<<<<<<< HEAD

        title: "Password updated successfully",
        description: "You can now log in with your new password."}),

=======
<<<<<<< HEAD
        title: 'Password updated successfully',
        description: 'You can now log in with your new password.',
      });
=======
<<<<<<< HEAD
        title: Password updated successfully',
        description: 'You can now log in with your new password.});
=======
        title: "Password updated successfully",
        description: "You can now log in with your new password."}),
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      // Clean auth state and redirect after a delay
      cleanupAuthState(),
      setTimeout(() => {
<<<<<<< HEAD

        router.push("/login")

=======
<<<<<<< HEAD
:src/pages/UpdatePassword.tsx
        router.push('/login');
      }, 3000);
    } catch (error: any) {
      logErrorToProduction(
        error instanceof Error ? error.message : String(error),
        error instanceof Error ? error : undefined,
        { message: 'Password update error' }
      );
      toast({
        title: 'Password update failed',
        description: error.message || 'An unexpected error occurred',
        variant: 'destructive',
      });
      setError(error.message || 'An unexpected error occurred');
    } finally {
<<<<<<< HEAD
        router.push("/login")
=======
        router.push(/login")
=======
        router.push("/login")
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }, 3000)
    } catch (error: any) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Password update error' }),
      toast({
        title: "Password update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      setError(error.message || "An unexpected error occurred")
    } finally {
      setIsLoading(false)
import { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { z } from "zod",;
import { LockKeyhole } from 'lucide-react';
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
import { cleanupAuthState } from "@/utils/authUtils",;
import { logErrorToProduction } from '@/utils/productionLogger',;
// Form validation schema;
const updatePasswordSchema = z;
  .object({;
    password: z;
      .string();
      .min(8, "Password must be at least 8 characters");
      .max(64, "Password must be less than 64 characters"),;
    confirmPassword: z.string()});
  .refine((data) => data.password === data.confirmPassword, {;
    message: "Passwords do not match",;
    path: ["confirmPassword"]}),;
type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,;
export default function UpdatePassword() {;
  const [isLoading, setIsLoading] = useState(false),;
  const [accessToken, setAccessToken] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
  const [success, setSuccess] = useState(false),;
  const router = useRouter(),;
  // Initialize react-hook-form;
  const form = useForm<UpdatePasswordFormValues>({;
    resolver: zodResolver(updatePasswordSchema),;
    defaultValues: {;
      password: "",;
      confirmPassword: ""}}),;
  useEffect(() => {;
    // Extract access token from URL hash on the client;
    const hash = typeof window !== 'undefined' ? window.location.hash : "",;
    const hashParams = new URLSearchParams(hash.substring(1)),;
    const token = hashParams.get("access_token"),;
    if (token) {;
      setAccessToken(token);
    } else {;
      setError("No access token found. Please request a new password reset link.");
    }
;
    // Clean up auth state to prevent issues;
    cleanupAuthState();
  }, []),;
  // Form submission handler;
  const onSubmit = async (data: UpdatePasswordFormValues) => {;
    if (!accessToken) {;
      setError("No access token found. Please request a new password reset link."),;
      return;
    }
;
    setIsLoading(true),;
    try {;
      // Set the session with the access token;
      await supabase.auth.setSession({;
        access_token: accessToken,;
        refresh_token: ''}),;
      // Update the password;
      const { error } = await supabase.auth.updateUser({;
        password: data.password}),;
      if (error) {;
        toast({;
          title: "Password update failed",
          description: error.message,;
          variant: "destructive"}),;
        setError(error.message),;
        return;
      }
;
      // Show success message and clean up auth state;
      setSuccess(true),;
      toast({;
        title: "Password updated successfully",
        description: "You can now log in with your new password."}),;
      // Clean auth state and redirect after a delay;
      cleanupAuthState(),;
      setTimeout(() => {;
        router.push("/login");
      }, 3000);
    } catch (error: any) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Password update error' }),;
      toast({;
        title: "Password update failed",
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      setError(error.message || "An unexpected error occurred");
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },;
  const onInvalid = (errors: any) => {;

    const firstError = Object.keys(errors)[0] as keyof UpdatePasswordFormValues;
    if (firstError) {;
      form.setFocus(firstError);
    }
<<<<<<< HEAD

  },

=======
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <>
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Update your password
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Enter your new password below.
              </p>
            </div>

            <div className="bg-zion-blue-dark rounded-lg p-6">
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">
                  <p className="text-sm">{error}</p>
                  <Button 
                    className="mt-3 text-xs"
                    variant="outline"
                    onClick={() => router.push('/forgot-password')}
                  >;
                    Request new reset link;
                  </Button>;
                </div>;
              )}

              {success ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">
                    <LockKeyhole className="h-6 w-6 text-zion-purple" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Password updated</h3>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    Your password has been successfully updated.
                  </p>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    Redirecting you to login...
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">New Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter password"
                              aria-label="New password"
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
              ) : (;
                <Form {...form}>;
                  <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">;
                    <FormField;
                      control={form.control}
                      name="password";
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">New Password</FormLabel>;
                          <FormControl>;
                            <Input;
                              type="password";
                              placeholder="Enter password";
                              aria-label="New password";
                              aria-invalid={!!form.formState.errors.password}
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              disabled={isLoading}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />;
                    <FormField;
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter password"
                              aria-label="Confirm password"
                      name="confirmPassword";
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                          <FormControl>;
                            <Input;
                              type="password";
                              placeholder="Enter password";
                              aria-label="Confirm password";
                              aria-invalid={!!form.formState.errors.confirmPassword}
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              disabled={isLoading}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={isLoading || !accessToken}
                    >
                      {isLoading ? "Updating..." : "Update Password"}
                    </Button>

                    <div className="text-center">
                      <Button
                        variant="link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0"
                        onClick={() => router.push("/login")}
                        type="button"
                      >
                        Back to login
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/pages/UpdatePassword.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/pages/UpdatePassword.tsx
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </div>
        <div className="hidden lg: block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3>
                <p className="text-lg text-white/80">
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.
                </p>
              </div>
    </>

  );
  password: z .string () if (token) {;
  setAccessToken (token) ;
}else {;
  ;

}, []);
//Form submission handler ;
}setIsLoading (true);
try {;
  //Set the session with the access token await supabase.auth.setSession ({;
  access token: accessToken;
refresh token: '' ;
});
//Update the password const {;
  error ;
}= await supabase.auth.updateUser ({;
  password: data.password ;
});
if (error) {;
  toast ({;
  title: "Password update failed";
description: error.message;
setError (error.message);
return;
}//Show success message and clean up auth state //Clean auth state and redirect after a delay cleanupAuthState ();
setTimeout ( () => {;
  ;
}catch (error: any) {;
  logErrorToProduction (error instanceof Error ? error.message : String (error),  error instanceof Error ? error : undefined, {';
  message: 'Password update error' ;
});
toast ({;
  ;
}finally {;
  setIsLoading (false) ;

};
const onInvalid = (errors: any) => {;
  const firstError = Object.keys (errors) [0] as keyof UpdatePasswordFormValues;
if (firstError) {;
  form.setFocus (firstError) ;

};";
error && (<div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white"> <p className="text-sm"> {;
  error ;
}</p> <Button > Request new reset link </Button> </div>) ;
}{";
  success ? (<div className="text-center py-8"> <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4"> <LockKeyhole className="h-6 w-6 text-zion-purple" /> </div> <h3 className="text-lg font-medium text-white">Password updated</h3> <p className="mt-2 text-sm text-zion-slate-light"> Your password has been successfully updated. </p> <p className="mt-2 text-sm text-zion-slate-light"> Redirecting you to login... </p> </div>) : (<Form {;
  ...form ";
}> >New Password</FormLabel> <FormControl> <Input className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" disabled= {;
  isLoading ;
}{;
  ...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField >Confirm Password</FormLabel> <FormControl> <Input className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" disabled= {;
  isLoading ;
}{;
  ...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <Button </Button> <div className="text-center" > <Button > Back to login </Button> </div> </form> </Form>) ";
}</div> </div> </div> <div className="hidden lg: block relative w-0 flex-1"> <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80"> <div className="flex flex-col justify-center items-center h-full px-8"> <div className="max-w-md text-center"> <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3> <p className="text-lg text-white/80"> Set a strong password to secure your account and continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> </>) ;
}'"
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533