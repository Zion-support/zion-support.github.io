<<<<<<< HEAD

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LockKeyhole } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
=======
<<<<<<< HEAD

<<<<<<< HEAD
import {
  }
=======
import { Input } from "@/components/ui/input";
import {};
>>>>>>> origin/chore/fix-lint-and-merge
  Form;
  FormControl;
  FormField;
  FormItem;
<<<<<<< HEAD
  FormLabel;

  }
=======
  FormLabel;"
  FormMessage} from "@/components/ui/form","
import { toast } from "@/hooks/use-toast","
import { Header } from "@/components/Header",";
import { Footer } from "@/components/Footer";"
import { cleanupAuthState } from "@/utils/authUtils";"
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input",
import {}
>>>>>>> origin/chore/fix-lint-and-merge
  Form,
  FormControl,
  FormField,
  FormItem,
<<<<<<< HEAD
  FormLabel,
=======

import { cleanupAuthState } from "@/utils/authUtils",
;
=======
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Form validation schema;
const updatePasswordSchema = z;
  .object({}
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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
>>>>>>> merged-prs-20250907-203621
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cleanupAuthState } from "@/utils/authUtils";
=======
import { toast } from "@/hooks/use-toast",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { cleanupAuthState } from "@/utils/authUtils",
=======

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
// Form validation schema

const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
<<<<<<< HEAD
      .max($2);
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]}),

type UpdatePasswordFormValues = $2;
export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState($2);
  const [accessToken, setAccessToken] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [success, setSuccess] = useState($2);
  const navigate = useNavigate($2);
  const location = useLocation($2);
  // Initialize react-hook-form
  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      password: "",
      confirmPassword: ""}}),

  useEffect(() => {
    // Extract access token from URL hash
    const hashParams = $2;
    const token = hashParams.get($2);
=======
      .max(64, "Password must be less than 64 characters");
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {

<<<<<<< HEAD
=======
<<<<<<< HEAD
    message: "Passwords do not match"
    path: ["confirmPassword"]})
type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;
export default function UpdatePassword() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    message: "Passwords do not match",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    path: ["confirmPassword"]}),

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,

<<<<<<< HEAD
=======
<<<<<<< HEAD
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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Initialize react-hook-form

  const form = useForm<UpdatePasswordFormValues>({

    resolver: zodResolver(updatePasswordSchema)
    defaultValues: {"
      password: """
      confirmPassword: ""}})
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

    if (token) {
      setAccessToken(token)
<<<<<<< HEAD

=======
    } else {
      setError("No access token found. Please request a new password reset link.")
    }
    // Clean up auth state to prevent issues
    cleanupAuthState()

    const hashParams = new URLSearchParams(location.hash.substring(1)),
    const token = hashParams.get("access_token"),

    if (token) {
      setAccessToken(token)

    const hashParams = new URLSearchParams(location.hash.substring(1)),
    const token = hashParams.get("access_token"),

    if (token) {
      setAccessToken(token)
=======
  useEffect(() => {
    // Extract access token from URL hash
<<<<<<< HEAD
    const hashParams = new URLSearchParams(location.hash.substring(1));
    const token = hashParams.get("access_token");
    const hashParams = new URLSearchParams(location.hash.substring(1)),
    const token = hashParams.get("access_token"),
    
>>>>>>> merged-prs-20250907-203621
    if (token) {
      setAccessToken(token)
    } else {
      setError("No access token found. Please request a new password reset link.")
<<<<<<< HEAD
    }
    // Clean up auth state to prevent issues
    cleanupAuthState()
  }, [location]),

  // Form submission handler
  const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
      setError($2);
      return
=======
>>>>>>> merged-prs-20250907-203621
    }
    // Clean up auth state to prevent issues
    cleanupAuthState()
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const hashParams = new URLSearchParams(location.hash.substring(1)),
    const token = hashParams.get("access_token"),
    


    if (token) {
      setAccessToken(token)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
    }
<<<<<<< HEAD

<<<<<<< HEAD
    setIsLoading($2);
    try {
      // Set the session with the access token
      await supabase.auth.setSession($2);
      // Update the password
      const { error } = await supabase.auth.updateUser($2);
=======
  }, [location]),

    } else {
      setError("No access token found. Please request a new password reset link.")
    }
=======
  }, [location]);
  }, [location]),

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Form submission handler
  const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
<<<<<<< HEAD

=======
      setError("No access token found. Please request a new password reset link.")
      return
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Initialize react-hook-form;
  const form = useForm<UpdatePasswordFormValues>({;
    resolver: zodResolver(updatePasswordSchema),;
    defaultValues: {;
      password: "",;
      confirmPassword: ""}}),;
  useEffect(() => {;
>>>>>>> origin/chore/fix-lint-and-merge
    // Extract access token from URL hash;
    const hashParams = new URLSearchParams(location && location.hash.substring(1));"
    const token = hashParams && hashParams.get("access_token");
    if (token) {;
      setAccessToken(token);
    } else {;"
      setError("No access token found. Please request a new password reset link.");
    }
<<<<<<< HEAD
<<<<<<< HEAD
    const hashParams = new URLSearchParams(location && location.hash.substring(1));

>>>>>>> merged-prs-20250907-203621
      if (error) {
        toast($2);
        setError($2);
        return
      }
<<<<<<< HEAD
      // Show success message and clean up auth state
      setSuccess($2);
      toast($2);
      // Clean auth state and redirect after a delay
      cleanupAuthState($2);
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    } catch (error: any) {
      console.error($2);
      toast($2);
      setError(error.message || "An unexpected error occurred")
=======
      // Show success message and clean up auth state,
setSuccess(true),
      toast({

>>>>>>> merged-prs-20250907-203621
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }
  },

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
=======

    }
    // Clean up auth state to prevent issues;
    cleanupAuthState();
  }, [location]),
  // Form submission handler;
  const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
      setError(No access token found. Please request a new password reset link."),
=======

    // Clean up auth state to prevent issues;
    cleanupAuthState();
  }, [location]);

>>>>>>> merged-prs-20250907-203621
import { useState, useEffect } from "react",;
import { useNavigate, useLocation } from "react-router-dom",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { LockKeyhole } from "lucide-react",;
<<<<<<< HEAD
=======
;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const onSubmit = async (data:UpdatePasswordFormValues) => {;
    if (!accessToken) {;
      setError("No access token found. Please request a new password reset link."),;
      return;
    setIsLoading(true);

    }

    setIsLoading(true),

    }
    setIsLoading(true);

    setIsLoading(true),

<<<<<<< HEAD
    }
    setIsLoading(true);

    setIsLoading(true),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      // Set the session with the access token
      await supabase.auth.setSession({
        access_token: accessToken

<<<<<<< HEAD
        refresh_token: ''})
      // Update the password;
      const { error } = await supabase.auth.updateUser({}
        password: data.password})

      }
      // Show success message and clean up auth state;
      setSuccess(true),
      toast({"
        title: "Password updated successfully""
        description: "You can now log in with your new password."})
      // Clean auth state and redirect after a delay;
      cleanupAuthState(),
      setTimeout(() => {"
        navigate("/login")
      }, 3000)
    } catch (error: any) {"
      console.error("Password update error:", error),
      toast({"
        title: "Password update failed""
        description: error.message |"An unexpected error occurred""
        variant: "destructive"})"
      setError(error.message |"An unexpected error occurred")
    } finally {}
      setIsLoading(false)

import { Input } from "@/components/ui/input",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;"
import { toast } from "@/hooks/use-toast",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { cleanupAuthState } from "@/utils/authUtils",;
>>>>>>> merged-prs-20250907-203621
// Form validation schema;
const updatePasswordSchema = z;
  .object({;
    password: z;
<<<<<<< HEAD
=======
      .string();"
      .min(8, "Password must be at least 8 characters");"
      .max(64, "Password must be less than 64 characters"),;
    confirmPassword: z.string()});
  .refine((data) => data.password === data.confirmPassword, {;"
    message: "Passwords do not match",;"
    path: ["confirmPassword"]}),;
type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,;
export default function UpdatePassword() { return null; }
      confirmPassword: ""}}),;
  useEffect(() => {;
    // Extract access token from URL hash;
    const hashParams = new URLSearchParams(location.hash.substring(1)),;"
    const token = hashParams.get("access_token"),;
    if (token) {;
      setAccessToken(token);
    } else {;"
      setError("No access token found. Please request a new password reset link.");
    }
;
    // Clean up auth state to prevent issues;
    cleanupAuthState();
  }, [location]),;

  // Form submission handler;
  const onSubmit = async (data: UpdatePasswordFormValues) => {;
    if (!accessToken) {;"
      setError("No access token found. Please request a new password reset link."),;
>>>>>>> origin/chore/fix-lint-and-merge
      return;

    }
    }

  },

<<<<<<< HEAD
=======
  return (
=======
<<<<<<< HEAD
          title: "Password update failed"
          description: error.message
          variant: "destructive"})
        setError(error.message);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: "Password update failed",
          description: error.message,
          variant: "destructive"}),
>>>>>>> origin/chore/fix-lint-and-merge
        setError(error.message),
<<<<<<< HEAD
        return
      }
      // Show success message and clean up auth state
      setSuccess(true),
=======

        return
      }
      // Show success message and clean up auth state
      setSuccess(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
<<<<<<< HEAD

=======
        title: "Password updated successfully"
        description: "You can now log in with your new password."})
      // Clean auth state and redirect after a delay
<<<<<<< HEAD
      cleanupAuthState(),
=======
      cleanupAuthState();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Password update error:", error),
=======
      console.error("Password update error:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Password update failed"
        description: error.message |"An unexpected error occurred"
        variant: "destructive"})
      setError(error.message |"An unexpected error occurred")
>>>>>>> origin/chore/fix-lint-and-merge
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      // Set the session with the access token;

=======
    }
  }
  },

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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

    try {;
      // Set the session with the access token;
      await supabase && supabase.auth.setSession({;
        access_token: accessToken,;'
        refresh_token: ''}),;

      // Update the password;
      const { error } = await supabase && supabase.auth.updateUser({;
        password: data && data.password}),;

      if (error) {;

          variant: "destructive"}),;
>>>>>>> origin/chore/fix-lint-and-merge
        setError(error && error.message);
        return;
      }

      // Show success message and clean up auth state;
      setSuccess(true);
<<<<<<< HEAD

<<<<<<< HEAD
                              disabled={isLoading}
                              {...field}
                            />;
                          </FormControl>;
=======
      // Clean auth state and redirect after a delay;
      cleanupAuthState();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      setTimeout(() => {;
        navigate("/login");
      }, 3000);
    } catch (error: any) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              {error && (;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">;
                  <p className="text-sm">{error}</p>;
                  <Button;
                    className="mt-3 text-xs";
                    variant="outline";
                    onClick={() => navigate('/forgot-password')}
                  >
                    Request new reset link
                  </Button>
                </div>
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
=======
=======
      console && console.error("Password update error:", error);
      toast({;
        title: "Password update failed",;
        description: error && error.message || "An unexpected error occurred",;
        variant: "destructive"}),;
      setError(error && error.message || "An unexpected error occurred");
    } finally {;
      setIsLoading(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                        </FormItem>;
                      )}
                    />;
                    <FormField;
                      control={form.control}

                          <FormControl>;
>>>>>>> merged-prs-20250907-203621
                    <FormField
                      control={form.control}
                      name=password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light>New Password</FormLabel>
                          <FormControl>
                            <Input
                              type=password"
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple
                              placeholder=••••••••"
                              disabled={isLoading}
                              {...field}
                            />
                          </FormControl>

                        </FormItem>;
                      )}

                    />;
                              disabled={isLoading}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className=text-red-400" />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit
                      className=w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={isLoading |!accessToken}
                    >
                      {isLoading ? "Updating... : Update Password"}
                    </Button>
                    <div className="text-center>
                      <Button
                        variant=link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0
                        onClick={() => navigate(/login")}
    // Clean up auth state to prevent issues;
    cleanupAuthState ();
  }, [location]);
  // Form submission handler;
  const on_submit = async ("data": UpdatePasswordFormValues) => {
    // Check condition
}
if ( {) {
  $2
}

      return;
    }
    setIsLoading (true);
    try {
      // Set the session with the access token;
      }
      await supabase.auth.set_session ({

      // Update the password;
      const { error } = await supabase.auth.update_user ({
        }
        "password": data.password}),
      // Check condition,
if ( {) {
  $2
}
        toast ({

        set_error (error.message);
        return;
      }
      // Show success message and clean up auth state;
      set_success (true);
      toast ({

    } finally {
      }
      setIsLoading (false);
    }
  }

=======

<<<<<<< HEAD
                  <p className="text-sm">{error}</p>;
'
=======
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="bg-zion-blue-dark rounded-lg p-6">;
              {error && (;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">;
                  <p className="text-sm">{error}</p>;
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

                  <Button
                    className="mt-3 text-xs"
                    variant="outline"
                  <Button ;
                    className="mt-3 text-xs";
                    variant="outline";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    onClick={() => navigate('/forgot-password')}
                  >
                    Request new reset link;

                  </Button>
                </div>
              )}

                    onClick={() => navigate('/forgot-password')}
>>>>>>> origin/chore/fix-lint-and-merge
                  >;
                    Request new reset link;
                  </Button>;
                </div>;
              )}

<<<<<<< HEAD
                    <LockKeyhole className="h-6 w-6 text-zion-purple" />
                  </div>"
                  <h3 className="text-lg font-medium text-white">Password updated</h3>"
                  <p className="mt-2 text-sm text-zion-slate-light">
                    Your password has been successfully updated.
                  </p>"
=======

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {success ? (
<<<<<<< HEAD

                    Redirecting you to login...;
                  </p>;
                </div>) : (
                <Form {...form}>;

                              disabled={is_loading}
                              {...field} />;
                          </FormControl>;

                        </FormItem>)}
                    />;
                    <FormField;
                      control={form.control}

                              disabled={is_loading}
                              {...field} />;
                          </FormControl>;

                      >;
                        Back to login;
                      </Button>;
                    </div>;

=======
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
<<<<<<< HEAD

=======
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
<<<<<<< HEAD
;
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {success ? (;
                <div className="text-center py-8">;
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">;
                    <LockKeyhole className="h-6 w-6 text-zion-purple" />;
                  </div>;
                  <h3 className="text-lg font-medium text-white">Password updated</h3>;
                  <p className="mt-2 text-sm text-zion-slate-light">;
                    Your password has been successfully updated.;
                  </p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <p className="mt-2 text-sm text-zion-slate-light">;
                    Redirecting you to login...;
                  </p>;
                </div>;
<<<<<<< HEAD

                      control={form && form.control}
                      name="password"

=======
              ) :(;
                <Form {...form}>;
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
                    <FormField;
                      control={form.control}
                      name="password";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      render={({ field }) => (;
                        <FormItem>;"
                          <FormLabel className="text-zion-slate-light">New Password</FormLabel>;
                          <FormControl>;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            <Input

                              type="password"

                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
<<<<<<< HEAD
=======
                              placeholder="••••••••"
                            <Input;
                              type="password";
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                              placeholder="••••••••";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                              disabled={isLoading}
                              {...field}
                            />;
                          </FormControl>;"
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
<<<<<<< HEAD
=======
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            />;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                    <FormField
                      control={form && form.control}

                      name="confirmPassword"
                      render={({ field }) => (;
                        <FormItem>;"
                          <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;
                          <FormControl>;
                            <Input"
                              type="password""

                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              disabled={isLoading}
                              {...field}
                            />;

                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}

<<<<<<< HEAD
=======
                    />;

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={isLoading || !accessToken}>;
                      {isLoading ? "Updating..." : "Update Password"}
                    </Button>;

                    <div className="text-center">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <Button
                        variant="link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0"
                        onClick={() => navigate("/login")}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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


<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        type="button"
>>>>>>> origin/chore/fix-lint-and-merge
                      >
                        Back to login
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
    </>;
  ); import {
  }
  Form;
FormControl;
FormField;
FormItem;
FormLabel;

}, [location]);
//Form submission handler
}setIsLoading (true);
try {
  //Set the session with the access token await supabase.auth.setSession ({
  }
  access "token": accessToken;
refresh "token": '''
});
//Update the password const {
  }
  error
}= await supabase.auth.updateUser ({
  }
  "password": data.password
});
if (error) {
  }
  toast ({

}
    </>;
  );
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
            </div>
          </div>
        </div>
        <div className=hidden lg: block relative w-0 flex-1>
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">
            <div className=flex flex-col justify-center items-center h-full px-8>
              <div className="max-w-md text-center">
                <h3 className=text-3xl font-bold text-white mb-4>Password Recovery</h3>
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

                    <FormField;
                      control={form.control}"
                      name="password";
                      render={({ field }) => (

                              placeholder="••••••••";
                              disabled={is_loading}
                              {...field}
                            />;

                        </FormItem>)}
                    />;
                    <FormField;
                      control={form.control}"
                      name="confirm_password";
                      render={({ field }) => (

                              placeholder="••••••••";
                              disabled={is_loading}
                              {...field}
                            />;

                      disabled={is_loading || !access_token}
                    >;"
                      {is_loading ? "Updating..." : "Update Password"}

                      name="confirmPassword";

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </div>;
        </div>;
        <div className="hidden lg: block relative w-0 flex-1">;
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
<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

<<<<<<< HEAD
=======



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
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

    </>);
    </>;
  ); import {};

  Form;
FormControl;
FormField;
FormItem;
FormLabel;

}
}, [location]);
//Form submission handler;
}setIsLoading (true);
try {}
  //Set the session with the access token await supabase.auth.setSession ({}
  access token: accessToken;'
refresh token: '' 
});
//Update the password const {}
  error;
}= await supabase.auth.updateUser ({}
  password: data.password;
});

setError (error.message);
return;
  // TODO: Implement
  // TODO: Implement
}

}
}, [location]);
//Form submission handler;
}setIsLoading (true);
try {
  // TODO: Implement
  //Set the session with the access token await supabase.auth.setSession ({

  access token: accessToken;"
refresh token: ')
});
//Update the password const {
  // TODO: Implement
  error;
}= await supabase.auth.updateUser ({
  password: data.password;)
if (error) {
  toast ({
  title: "Password update failed";",
  description: error.message;)
setError (error.message);
pr-12325
}//Show success message and clean up auth state //Clean auth state and redirect after a delay cleanupAuthState ();

  setIsLoading (false) 
}
};"
flex min-h-screen bg-zion-blue"> <div className=" flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className=" mx-auto w-full max-w-sm lg:w-96"> <div className=" text-center mb-10"> <h2 className=" text-3xl font-bold tracking-tight text-white"> Update your password </h2> <p className=" mt-2 text-sm text-zion-slate-light"> Enter your new password below. </p> </div> > Request new reset link </Button> </div>) "
}</div> <h3 className=" text-lg font-medium text-white">Password updated</h3> <p className=" mt-2 text-sm text-zion-slate-light"> Your password has been successfully updated. </p> <p className=" mt-2 text-sm text-zion-slate-light"> Redirecting you to login... </p> </div>) : (<Form {}
  ...form "
}> <FormItem> <FormLabel className=" text-zion-slate-light">New Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Confirm Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> <Button </Button> <div className=" text-center" > <Button > Back to login </Button> </div> </form> </Form>) 
}</div> </div> </div> Set a strong password to secure your account and continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> <Footer /> </>) 
}
  // TODO: Implement
}
  setIsLoading (false) 
}
};"
flex min-h-screen bg-zion-blue"> <div className=" flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className=" mx-auto w-full max-w-sm lg:w-96"> <div className=" text-center mb-10"> <h2 className=" text-3xl font-bold tracking-tight text-white"> Update your password </h2> <p className=" mt-2 text-sm text-zion-slate-light"> Enter your new password below. </p> </div> > Request new reset link </Button> </div>)""
}</div> <h3 className=" text-lg font-medium text-white">Password updated</h3> <p className=" mt-2 text-sm text-zion-slate-light"> Your password has been successfully updated. </p> <p className=" mt-2 text-sm text-zion-slate-light"> Redirecting you to login... </p> </div>) : (<Form {"
  // TODO: Implement

}
  ...form;)"
}> <FormItem> <FormLabel className=" text-zion-slate-light">New Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>)""
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Confirm Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>)"
</FormField>"
}/> <Button </Button> <div className=" text-center" > <Button > Back to login </Button> </div> </form> </Form>)"
}</div> </div> </div> Set a strong password to secure your account and continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> <Footer /> </>) 
</Footer>
    </>;
  );

}

}

;

}
<<<<<<< HEAD
=======
;
    </>);
}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
