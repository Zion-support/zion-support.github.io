
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
  },;
;
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {;
    return <Navigate to="/" />,;
  }
<<<<<<< HEAD

                  Sign in;
                </Link>;
              </p>;
            </div>;

                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
                        <FormControl>;
                          <div className="relative">;

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

                          />;
                        </FormControl>;
                        <div className="space-y-1 leading-none">;
                          <FormLabel className="text-sm text-zion-slate-light">;
                            I agree to the{" "}
                            <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light">;
                              Terms of Service;
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">;
                              Privacy Policy;
                            </a>;
                          </FormLabel>;
                          <FormMessage className="text-red-400" />;
                        </div>;
                      </FormItem>;
                    )}
                  />;

              <div className="mt-6">;
                <div className="relative">;
                  <div className="absolute inset-0 flex items-center">;
                    <div className="w-full border-t border-zion-blue-light" />;
                  </div>;
                  <div className="relative flex justify-center text-sm">;
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;
                  </div>;
                </div>;

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

