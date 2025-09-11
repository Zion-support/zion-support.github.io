
import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {LockKeyhole} from "lucide-react";
import {supabase} from "@/integrations/supabase/client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {toast} from "@/hooks/use-toast";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {cleanupAuthState} from "@/utils/authUtils";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Form validation schema;
const updatePasswordSchema = z;
  .object({;
    password: z;
      .string();
      .min(8, "Password must be at least 8 characters");
      .max(64, "Password must be less than 64 characters");
    confirmPassword: z && z.string()});
  .refine((data) => data && data.password === data && data.confirmPassword, {;
    message: "Passwords do not match",;
    path: ["confirmPassword"]}),;

type UpdatePasswordFormValues = z && z.infer<typeof updatePasswordSchema>;

export default function UpdatePassword() {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useNavigate, useLocation } from "react-router-dom",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { LockKeyhole } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import { toast } from "@/hooks/use-toast",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer";
import { cleanupAuthState } from "@/utils/authUtils";
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Form validation schema

const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters"),
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    message: "Passwords do not match"
    path: ["confirmPassword"]})
type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;
export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    message: "Passwords do not match",
    path: ["confirmPassword"]}),

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function UpdatePassword() {;
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false),
  const [accessToken, setAccessToken] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [success, setSuccess] = useState(false),
  const navigate = useNavigate(),
  const location = useLocation(),

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Initialize react-hook-form
  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema)
    defaultValues: {
      password: ""
      confirmPassword: ""}})
  useEffect(() => {
    // Extract access token from URL hash
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const hashParams = new URLSearchParams(location.hash.substring(1));
    const token = hashParams.get("access_token");
    const hashParams = new URLSearchParams(location.hash.substring(1)),
    const token = hashParams.get("access_token"),
    
    if (token) {
      setAccessToken(token)
    } else {
      setError("No access token found. Please request a new password reset link.")
    }
    // Clean up auth state to prevent issues
    cleanupAuthState()
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const hashParams = new URLSearchParams(location.hash.substring(1)),
    const token = hashParams.get("access_token"),
    


    if (token) {
      setAccessToken(token)
import { useState, useEffect } from './react';
import { use_navigate, use_location } from './react-router-dom';
import { zod_resolver } from '@hookform / resolvers / zod';
import { use_form } from './react - hook - form';
import { z } from './zod';
import { LockKeyhole } from './lucide-react';
import { supabase } from '@/integrations / supabase / client';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { toast } from '@/hooks / use - toast';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { cleanupAuthState } from '@/utils / auth_utils';
// Form validation schema;
const updatePasswordSchema = z;
  .object ({
    password: z;
      .string ();
      .min (8, "Password must be at least 8 characters");
      .max (64, "Password must be less than 64 characters");
    confirm_password: z.string ()});
  .refine ((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"]}),
type UpdatePasswordFormValues = z.infer < typeof updatePasswordSchema>;
;
export default /**
 * UpdatePassword - Function description
 */
function UpdatePassword() {
  const [is_loading, setIsLoading] = useState (false);
  const [access_token, setAccessToken] = useState < string | null>(null);
  const [error, set_error] = useState < string | null>(null);
  const [success, set_success] = useState (false);
  const navigate = use_navigate ();
  const location = use_location ();
;
  // Initialize react - hook - form;
  const form = use_form < UpdatePasswordFormValues>({
    resolver: zod_resolver (updatePasswordSchema),
    default_values: {
      password: "",
      confirm_password: ""}}),
  useEffect (() => {
    // Extract access token from URL hash;
    const hash_params = new URLSearchParams (location.hash.substring (1));
    const token = hash_params.get ("access_token");
;
    // Check condition
if ( {) {
  $2
}
      setAccessToken (token);
    } else {
      set_error ("No access token found. Please request a new password reset link.");
    }
  }, [location]);
  }, [location]),

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }, [location]);
  }, [location]),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Form submission handler
  const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
      setError("No access token found. Please request a new password reset link.")
      return
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Initialize react-hook-form;
  const form = useForm<UpdatePasswordFormValues>({;
    resolver: zodResolver(updatePasswordSchema),;
    defaultValues: {;
      password: "",;
      confirmPassword: ""}}),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    // Extract access token from URL hash;
    const hashParams = new URLSearchParams(location && location.hash.substring(1));
    const token = hashParams && hashParams.get("access_token");
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (token) {;
      setAccessToken(token);
    } else {;
      setError("No access token found. Please request a new password reset link.");
    }
<<<<<<< HEAD
    // Clean up auth state to prevent issues;
    cleanupAuthState();
  }, [location]);
  // Form submission handler;
  const onSubmit = async (data: UpdatePasswordFormValues) => {;

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
    setIsLoading(true);

    }


    setIsLoading(true),


<<<<<<< HEAD
    }
    setIsLoading(true);

    setIsLoading(true),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    // Clean up auth state to prevent issues;
    cleanupAuthState();
  }, [location]);

  // Form submission handler;
  const onSubmit = async (data: UpdatePasswordFormValues) => {;
    if (!accessToken) {;
      setError("No access token found. Please request a new password reset link."),;
      return;

    }
    setIsLoading(true);

    setIsLoading(true),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      // Set the session with the access token
      await supabase.auth.setSession({
        access_token: accessToken
        refresh_token: ''})
      // Update the password
      const { error } = await supabase.auth.updateUser({
        password: data.password})
      if (error) {
        toast({
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title: "Password update failed"
          description: error.message
          variant: "destructive"})
        setError(error.message);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title: "Password update failed",
          description: error.message,
          variant: "destructive"}),
        setError(error.message),
<<<<<<< HEAD
<<<<<<< HEAD
        return
      }
      // Show success message and clean up auth state
      setSuccess(true),
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return
      }
      // Show success message and clean up auth state
      setSuccess(true);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Password updated successfully"
        description: "You can now log in with your new password."})
      // Clean auth state and redirect after a delay
<<<<<<< HEAD
<<<<<<< HEAD
      cleanupAuthState(),
=======
      cleanupAuthState();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      cleanupAuthState();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    } catch (error: any) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Password update error:", error),
=======
      console.error("Password update error:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error("Password update error:", error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Password update failed"
        description: error.message |"An unexpected error occurred"
        variant: "destructive"})
      setError(error.message |"An unexpected error occurred")
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  },

<<<<<<< HEAD
  return (
    <>
      <Header />
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
                  <Button 
                    className="mt-3 text-xs"
                    variant="outline"
import { useState, useEffect } from "react",;
import { useNavigate, useLocation } from "react-router-dom",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { LockKeyhole } from "lucide-react",;
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
  const navigate = useNavigate(),;
  const location = useLocation(),;
  // Initialize react-hook-form;
  const form = useForm<UpdatePasswordFormValues>({;
    resolver: zodResolver(updatePasswordSchema),;
    defaultValues: {;
      password: "",;
      confirmPassword: ""}}),;
  useEffect(() => {;
    // Extract access token from URL hash;
    const hashParams = new URLSearchParams(location.hash.substring(1)),;
    const token = hashParams.get("access_token"),;
    if (token) {;
      setAccessToken(token);
    } else {;
      setError("No access token found. Please request a new password reset link.");
    }
;
    // Clean up auth state to prevent issues;
    cleanupAuthState();
  }, [location]),;
  // Form submission handler;
  const onSubmit = async (data: UpdatePasswordFormValues) => {;
    if (!accessToken) {;
      setError("No access token found. Please request a new password reset link."),;
      return;
    }
;
    setIsLoading(true),;

    }
    }

  },


  return (

    }
  }
  return (
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
          title: "Password update failed",;
          description: error.message,;
          variant: "destructive"}),;
        setError(error.message),;
        return;
      }
;
      // Show success message and clean up auth state;
      setSuccess(true),;
      toast({;
        title: "Password updated successfully",;
        description: "You can now log in with your new password."}),;
      // Clean auth state and redirect after a delay;
      cleanupAuthState(),;
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      // Set the session with the access token;
      await supabase && supabase.auth.setSession({;
        access_token: accessToken,;
        refresh_token: ''}),;

      // Update the password;
      const { error } = await supabase && supabase.auth.updateUser({;
        password: data && data.password}),;

      if (error) {;
        toast({;
          title: "Password update failed",;
          description: error && error.message,;
          variant: "destructive"}),;
        setError(error && error.message);
        return;
      }

      // Show success message and clean up auth state;
      setSuccess(true);
      toast({;
        title: "Password updated successfully",;
        description: "You can now log in with your new password."}),;

      // Clean auth state and redirect after a delay;
      cleanupAuthState();
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setTimeout(() => {;
        navigate("/login");
      }, 3000);
    } catch (error: any) {;
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Password update error:", error),;
      toast({;
        title: "Password update failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"});
      setError(error.message || "An unexpected error occurred");
    } finally {;
      setIsLoading(false);
    }
  };
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console && console.error("Password update error:", error);
      toast({;
        title: "Password update failed",;
        description: error && error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      setError(error && error.message || "An unexpected error occurred");
    } finally {;
      setIsLoading(false);

    }
  }
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              {error && (;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">;
                  <p className="text-sm">{error}</p>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Button;
                    className="mt-3 text-xs";
                    variant="outline";
                    onClick={() => navigate('/forgot-password')}
                  >
                    Request new reset link
                  </Button>
                </div>
              )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <Button
                    className="mt-3 text-xs"
                    variant="outline"
<<<<<<< HEAD
                  <Button ;
                    className="mt-3 text-xs";
                    variant="outline";
=======
=======

                  <Button 
                    className="mt-3 text-xs"
                    variant="outline"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    onClick={() => navigate('/forgot-password')}
                  >;
                    Request new reset link;
                  </Button>;
                </div>;
              )}


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              ) :(;
                <Form {...form}>;
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
                    <FormField;
                      control={form.control}
                      name="password";
=======
              ) : (;
                <Form {...form}>;
                  <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <FormField
                      control={form && form.control}
                      name="password"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">New Password</FormLabel>;
                          <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">New Password</FormLabel>
                          <FormControl>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <Input
                              type="password"
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              placeholder="••••••••"
<<<<<<< HEAD
                            <Input;
                              type="password";
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              placeholder="••••••••";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              disabled={isLoading}
                              {...field}
                            />;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
<<<<<<< HEAD
                    />;
;
                    <FormField;
                      control={form.control}
                      name="confirmPassword";
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                          <FormControl>;
                              disabled={isLoading}
                              {...field}
<<<<<<< HEAD
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              placeholder="••••••••"
                            <Input;
                              type="password";
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              placeholder="••••••••";
                              disabled={isLoading}
                              {...field}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            />;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
<<<<<<< HEAD
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
                      disabled={isLoading |!accessToken}
                    >
                      {isLoading ? "Updating..." : "Update Password"}
                    </Button>
                    <div className="text-center">
=======
=======

                    />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                    <FormField
                      control={form && form.control}
                      name="confirmPassword"
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                          <FormControl>;
                            <Input
                              type="password"
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              placeholder="••••••••"
                              disabled={isLoading}
                              {...field}
                            />;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}

                    />;

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={isLoading || !accessToken}>;
                      {isLoading ? "Updating..." : "Update Password"}
                    </Button>;

                    <div className="text-center">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Button
                        variant="link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0"
                        onClick={() => navigate("/login")}
<<<<<<< HEAD
<<<<<<< HEAD
                        type="button"
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
        <div className="hidden lg: block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3>
                <p className="text-lg text-white/80">
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Clean up auth state to prevent issues;
    cleanupAuthState ();
  }, [location]);
;
  // Form submission handler;
  const on_submit = async (data: UpdatePasswordFormValues) => {
    // Check condition
if ( {) {
  $2
}
      set_error ("No access token found. Please request a new password reset link."),
      return;
    }
    setIsLoading (true);
    try {
      // Set the session with the access token;
      await supabase.auth.set_session ({
        access_token: access_token,
        refresh_token: ''}),
      // Update the password;
      const { error } = await supabase.auth.update_user ({
        password: data.password}),
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Password update failed",
          description: error.message,
          variant: "destructive"}),
        set_error (error.message);
        return;
      }
      // Show success message and clean up auth state;
      set_success (true);
      toast ({
        title: "Password updated successfully",
        description: "You can now log in with your new password."}),
      // Clean auth state and redirect after a delay;
      cleanupAuthState ();
      set_timeout (() => {
        navigate ("/login");
      }, 3000);
    } catch (error: any) {
      console.error ("Password update error:", error);
      toast ({
        title: "Password update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      set_error (error.message || "An unexpected error occurred");
    } finally {
      setIsLoading (false);
    }
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
                Update your password;
              </h2>;
              <p className="mt - 2 text - sm text - zion - slate - light">;
                Enter your new password below.;
              </p>;
            </div>;
            <div className="bg - zion - blue - dark rounded - lg p - 6">;
              {error && (
                <div className="mb - 6 p - 4 bg - red - 500 / 20 border border - red - 500 / 50 rounded - md text - white">;
                  <p className="text - sm">{error}</p>;
                  <Button;
                    className="mt - 3 text - xs";
                    variant="outline";
                    on_click={() => navigate ('/forgot - password')}
                  >;
                    Request new reset link;
                  </Button>;
                </div>)}
              {success ? (
                <div className="text - center py - 8">;
                  <div className="mx - auto flex items - center justify - center h - 12 w - 12 rounded - full bg - zion - purple / 20 mb - 4">;
                    <LockKeyhole className="h - 6 w - 6 text - zion - purple" />;
                  </div>;
                  <h3 className="text - lg font - medium text - white">Password updated</h3>;
                  <p className="mt - 2 text - sm text - zion - slate - light">;
                    Your password has been successfully updated.;
                  </p>;
                  <p className="mt - 2 text - sm text - zion - slate - light">;
                    Redirecting you to login...;
                  </p>;
                </div>) : (
                <Form {...form}>;
                  <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
                    <FormField;
                      control={form.control}
                      name="password";
                      render={({ field }) => (
                        <FormItem>;
                          <FormLabel className="text - zion - slate - light">New Password</FormLabel>;
                          <FormControl>;
                            <Input;
                              type="password";
                              className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                              placeholder="••••••••";
                              disabled={is_loading}
                              {...field}
                            />;
                          </FormControl>;
                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                    <FormField;
                      control={form.control}
                      name="confirm_password";
                      render={({ field }) => (
                        <FormItem>;
                          <FormLabel className="text - zion - slate - light">Confirm Password</FormLabel>;
                          <FormControl>;
                            <Input;
                              type="password";
                              className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                              placeholder="••••••••";
                              disabled={is_loading}
                              {...field}
                            />;
                          </FormControl>;
                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                    <Button;
                      type="submit";
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                      disabled={is_loading || !access_token}
                    >;
                      {is_loading ? "Updating..." : "Update Password"}
                    </Button>;
                    <div className="text - center">;
                      <Button;
                        variant="link";
                        className="text - sm font - medium text - zion - cyan hover:text - zion - cyan - light p - 0";
                        on_click={() => navigate ("/login")}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        type="button";
                      >;
                        Back to login;
                      </Button>;
                    </div>;
                  </form>;

<<<<<<< HEAD

<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      name="confirmPassword";
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                          <FormControl>;
                            <Input;
                              type="password";
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              placeholder="••••••••";
                        onClick={() => navigate("/login")}
                        type="button"
                      >
                        Back to login
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </div>;
        <div className="hidden lg: block relative w-0 flex-1">;
<<<<<<< HEAD
                </Form>;
              )}
            </div>;
          </div>;
        </div>;
        <div className="hidden lg:block relative w-0 flex-1">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">;
            <div className="flex flex-col justify-center items-center h-full px-8">;
              <div className="max-w-md text-center">;
                <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3>;
                <p className="text-lg text-white/80">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
                </Form>)}
            </div>;
          </div>;
        </div>;
        <div className="hidden lg: block relative w - 0 flex - 1">;
          <div className="absolute inset - 0 h - full w - full object - cover bg - gradient - to - tr from - zion - blue - dark via - zion - purple to - zion - cyan opacity - 80">;
            <div className="flex flex - col justify - center items - center h - full px - 8">;
              <div className="max - w-md text - center">;
                <h3 className="text - 3xl font - bold text - white mb - 4">Password Recovery</h3>;
                <p className="text - lg text - white / 80">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </>);
    </>;
  ); import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
  password: z .string () if (token) {
  setAccessToken (token) 
}else {
  
}
}, [location]);
//Form submission handler 
}setIsLoading (true);
try {
  //Set the session with the access token await supabase.auth.setSession ({
  access token: accessToken;
refresh token: '' 
});
//Update the password const {
  error 
}= await supabase.auth.updateUser ({
  password: data.password 
});
if (error) {
  toast ({
  title: "Password update failed";
description: error.message;
setError (error.message);
return;
}//Show success message and clean up auth state //Clean auth state and redirect after a delay cleanupAuthState ();
setTimeout ( () => {
  
}finally {
  setIsLoading (false) 
}
};
flex min-h-screen bg-zion-blue"> <div className=" flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className=" mx-auto w-full max-w-sm lg:w-96"> <div className=" text-center mb-10"> <h2 className=" text-3xl font-bold tracking-tight text-white"> Update your password </h2> <p className=" mt-2 text-sm text-zion-slate-light"> Enter your new password below. </p> </div> > Request new reset link </Button> </div>) 
}</div> <h3 className=" text-lg font-medium text-white">Password updated</h3> <p className=" mt-2 text-sm text-zion-slate-light"> Your password has been successfully updated. </p> <p className=" mt-2 text-sm text-zion-slate-light"> Redirecting you to login... </p> </div>) : (<Form {
  ...form 
}> <FormItem> <FormLabel className=" text-zion-slate-light">New Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Confirm Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <Button </Button> <div className=" text-center" > <Button > Back to login </Button> </div> </form> </Form>) 
}</div> </div> </div> Set a strong password to secure your account and continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
