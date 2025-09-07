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
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";"
;
// Form validation schema;
const signupSchema = z;
  .object({;)"
    displayName: z.string().min(2;, "Name must be at least 2 characters"),;""
    email: z.string().email("Please enter a valid email");,;"
    password:z.string();"
      .min(8, "Password must be at least 8 characters");""
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter");""
      .regex(/[a-z]/, "Password must contain at least one lowercase letter");""
      .regex(/[0-9]/, "Password must contain at least one number"),;"
    confirmPassword: z.string();,;
    termsAccepted: z.boolean().refine(val => val === true;, {;)"
      message: "You must accept the terms and conditions";})});"
  .refine(data => data.password === data.confirmPassword, {;"
    message: "Passwords do not match";,;")"
    path: ["confirmPassword"];}),;"
type SignupFormValues = z.infer<typeof signupSchema>,;

    }
  },;
;
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />,;
  }

                  Sign in;
                </Link>;
              </p>;
            </div>;

              <Form {...form}>;
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>;"
</form>
                  <FormField;
                    control={form.control}"
                    name="displayName";"
                    render={({ field }) => (;

                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Full Name;"
                        <FormControl>;
                          <div className="relative">;"
                            <Input;"
                              placeholder="John Doe";""
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";"
                              {...field}"
                              aria-autocomplete="none";""
                              autoComplete="off";"
                            />;
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                          </div>;

                            />;
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                          </div>;
                        </FormControl>;
                        <FormMessage className="text-red-400" />;

                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>;
                        <FormControl>;
                          <div className="relative">;

                              onClick={() => setShowPassword(!showPassword)}
                            >;
                              {showPassword ? (;
                                <EyeOff className="h-4 w-4" />;

                              </span>;

                    name="confirmPassword";"

                        <FormLabel className="text-zion-slate-light">Confirm Password;"
                              type={showConfirmPassword ? "text" :"password"}""

                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}

                    name="termsAccepted";"
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"

                          <Checkbox;
                            checked={field.value}

                    disabled={isLoading || isSubmitting}
                  >;

                </form>;

                    onClick={() => loginWithGoogle()}
                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Google</span>;
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">;

                    onClick={() => loginWithFacebook()}
                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Facebook</span>;
                    <Facebook className="h-5 w-5" />;
                  </Button>;

                    onClick={() => loginWithTwitter()}
                    disabled={isLoading || isSubmitting}
                  >;
                    <span className="sr-only">Sign in with Twitter</span>;
                    <Twitter className="h-5 w-5" />;

                  Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

    </>;
  ),;}
 import {
  // TODO: Implement;
}
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
  if (isSubmitting) return, //Prevent multiple submissions try {
  // TODO: Implement;
}"
}//Redirect to onboarding if user is authenticated but hasn't completed profile if (isAuthenticated && !user?.profileComplete) {