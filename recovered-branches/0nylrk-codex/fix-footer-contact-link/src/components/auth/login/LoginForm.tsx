
<<<<<<< HEAD

import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Link } from "react-router-dom",
// Form validation schema
const loginSchema = z.object({

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {LogIn, User, Eye, EyeOff} from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from "lucide-react",
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Link} from "react-router-dom";

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Link } from "react-router-dom",
// Form validation schema
const loginSchema = z.object({
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from "lucide-react",



import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Link} from "react-router-dom";


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  email: z.string().email("Please enter a valid email").min(1, "Email is required");
  password: z.string().min(6, "Password must be at least 6 characters")});
type LoginFormValues = z.infer<typeof loginSchema>;
export function LoginForm() {
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters")}),

type LoginFormValues = z.infer<typeof loginSchema>,

<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
export function LoginForm() {;
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
export function LoginForm() {
  const { login, isLoading } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
    defaultValues: {
      email: ""
      password: ""}})
  const onSubmit = async (data: LoginFormValues) => {
<<<<<<< HEAD

=======
    if (isSubmitting) return;
    if (isSubmitting) return,
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (isSubmitting) return,
    


<<<<<<< HEAD
=======
    if (isSubmitting) return;
    if (isSubmitting) return,
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      setIsSubmitting(true)
      await login(data.email, data.password)
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

  },

<<<<<<< HEAD
=======
    }
=======
  }
  },
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        autoComplete="off" // Disable browser autofill
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="you@example.com"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                    {...field}
                    autoComplete="off" // Disable browser autofill
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { LogIn, User, Eye, EyeOff } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
// Form validation schema;
const loginSchema = z && z.object({;
  email: z && z.string().email("Please enter a valid email").min(1, "Email is required");
  password: z && z.string().min(6, "Password must be at least 6 characters")});

type LoginFormValues = z && z.infer<typeof loginSchema>;

export function LoginForm() {;
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD

=======
// Form validation schema;
const loginSchema = z.object({;
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),;
  password: z.string().min(6, "Password must be at least 6 characters")}),;
type LoginFormValues = z.infer<typeof loginSchema>,;
export function LoginForm() {;
  const { login, isLoading } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const form = useForm<LoginFormValues>({;
    resolver: zodResolver(loginSchema),;
    defaultValues: {;
      email: "",;
      password: ""}}),;

  const onSubmit = async (data: LoginFormValues) => {;
<<<<<<< HEAD
    if (isSubmitting) return;

    try {;
      setIsSubmitting(true),;
      await login(data && data.email, data && data.password);
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }

  return (
<<<<<<< HEAD

    <Form {...form}>;
      <form
        onSubmit={form && form.handleSubmit(onSubmit)} 

=======
    <Form {...form}>;
      <form
        onSubmit={form && form.handleSubmit(onSubmit)} 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        className="space-y-6"
        autoComplete="off" // Disable browser autofill>;
        <FormField
          control={form && form.control}
          name="email"
<<<<<<< HEAD
<<<<<<< HEAD
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input
                    placeholder="you@example && example.com"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                    {...field}
                    autoComplete="off" // Disable browser autofill
=======

import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { LogIn, User, Eye, EyeOff } from "lucide-react",;
;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Link } from "react-router-dom",;
;
// Form validation schema;
const loginSchema = z.object({;
  email:z.string().email("Please enter a valid email").min(1, "Email is required"),;
  password:z.string().min(6, "Password must be at least 6 characters")}),;
;
type LoginFormValues = z.infer<typeof loginSchema>,;
;
export function LoginForm() {;
  const { login, isLoading } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  const form = useForm<LoginFormValues>({;
    resolver:zodResolver(loginSchema),;
    defaultValues:{;
      email:"",;
      password:""}}),;
;
  const onSubmit = async (data:LoginFormValues) => {;
    if (isSubmitting) return,;
    ;
    try {;
      setIsSubmitting(true),;
      await login(data.email, data.password),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <Form {...form}>;
      <form ;
    if (isSubmitting) return,;
    try {;
      setIsSubmitting(true);
      await login(data.email, data.password);
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <Form {...form}>;
      <form;
        onSubmit={form.handleSubmit(onSubmit)} ;
        className="space-y-6";
        autoComplete="off" // Disable browser autofill;
      >;
        <FormField;
          control={form.control}
                  <Input;
                    placeholder="you@example.com";
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                    {...field}
                    autoComplete="off" // Disable browser autofill;
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="you@example.com"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                    {...field}
                    autoComplete="off" // Disable browser autofill;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
<<<<<<< HEAD
            </FormItem>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
            </FormItem>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          )}
        <FormField
          control={form && form.control}
          name="password"
<<<<<<< HEAD
=======
        />;
        <FormField
          control={form && form.control}
          name="password"
            </FormItem>;          )}
        />;
;
        <FormField;
          control={form.control}
          name="password";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </FormItem>;
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>
                <div className="relative">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                    {...field}
                    autoComplete="off" // Disable browser autofill
<<<<<<< HEAD
<<<<<<< HEAD
                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
=======
                  />
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Input;
                    type={showPassword ? "text" :"password"}
                    placeholder="••••••••";
                    className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple";
                    {...field}
                    autoComplete="off" // Disable browser autofill;
                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  <Button;
                    type="button";
                    variant="ghost";
                    size="sm";
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    onClick={() => setShowPassword(!showPassword)}
                  >;
                    {showPassword ? (;
                      <EyeOff className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
                    ) : (;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" : "Show password"}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    ) :(;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" :"Show password"}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

        />;

        <div className="flex items-center justify-between">;
          <div className="text-sm">;
            <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
=======
import { useState } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { LogIn, User, Eye, EyeOff } from './lucide-react';
;
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Link } from './react-router-dom';
// Form validation schema;
const login_schema = z.object ({
  email: z.string ().email ("Please enter a valid email").min (1, "Email is required");
  password: z.string ().min (6, "Password must be at least 6 characters")});
;
type LoginFormValues = z.infer < typeof login_schema>;
;
export /**
 * LoginForm - Function description
 */
function LoginForm() {
  const { login, is_loading } = use_auth ();
  const [show_password, setShowPassword] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const form = use_form < LoginFormValues>({
    resolver: zod_resolver (login_schema),
    default_values: {
      email: "",
      password: ""}}),
  const on_submit = async (data: LoginFormValues) => {
    // Check condition
if (return) {
  $2
}
    try {
      setIsSubmitting (true),
      await login (data.email, data.password);
    } finally {
      setIsSubmitting (false);
    }
  }
;
  return (
    <Form {...form}>;
      <form;
        on_submit={form.handle_submit (on_submit)}
        className="space - y-6";
        auto_complete="off" // Disable browser autofill;
      >;
        <FormField;
          control={form.control}
          name="email";
          render={({ field }) => (
            <FormItem>;
              <FormLabel className="text - zion - slate - light">Email address</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    placeholder="you@example.com";
                    className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                    {...field}
                    auto_complete="off" // Disable browser autofill;
                  />;
                  <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text - red - 400" />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="password";
          render={({ field }) => (
            <FormItem>;
              <FormLabel className="text - zion - slate - light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    type={show_password ? "text" : "password"}
                    placeholder="••••••••";
                    className="bg - zion - blue pl - 10 text - white border - zion - blue - light focus:border - zion - purple";
                    {...field}
                    auto_complete="off" // Disable browser autofill;
                  />;
                  <LogIn className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  <Button;
                    type="button";
                    variant="ghost";
                    size="sm";
                    className="absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan";
                    on_click={() => setShowPassword (!show_password)}
                  >;
                    {show_password ? (
                      <EyeOff className="h - 4 w - 4" />) : (
                      <Eye className="h - 4 w - 4" />)}
                    <span className="sr - only">;
                      {show_password ? "Hide password" : "Show password"}
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;
              <FormMessage className="text - red - 400" />;
            </FormItem>)}
        />;
        <div className="flex items - center justify - between">;
          <div className="text - sm">;
            <Link to="/forgot - password" className="font - medium text - zion - cyan hover:text - zion - cyan - light">;

=======
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot your password?
            </Link>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          disabled={isLoading |isSubmitting}
        >
          {isLoading |isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  )

        />;
;
        <div className="flex items-center justify-between">;
          <div className="text-sm">;
            <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              Forgot your password?;
            </Link>;
          </div>;
        </div>;
<<<<<<< HEAD

        <Button;
          type="submit";
          className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
          disabled={is_loading || is_submitting}
        >;
          {is_loading || is_submitting ? "Logging in..." : "Login"}
        </Button>;
      </form>;
    </Form>);
}

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;
        <Button;
          type="submit";
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
          disabled={isLoading || isSubmitting}
        >;
          {isLoading || isSubmitting ? "Logging in..." :"Login"}
        </Button>;
      </form>;
    </Form>;
  ),; import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
//Form validation schema const loginSchema = z.object ({
  email: z.string () .email ("Please enter a valid email") .min (1, "Email is required");
password: z.string () .min (6, "Password must be at least 6 characters") 
});
const onSubmit = async (data: LoginFormValues) => {
  if (isSubmitting) return;
try {
  setIsSubmitting (true);
await login (data.email, data.password) 
}finally {
  setIsSubmitting (false) 
}

}
;

};
...form 
}> <form <FormItem> <FormLabel className="text-zion-slate-light" >Email address</FormLabel> <FormControl> <div className="relative" > <Input /> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <FormField <FormControl> <div className="relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) 
}</span> </Button> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <div className="flex items-center justify-between" > <div className="text-sm" > <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light" > Forgot your password? </Link> </div> </div> <Button </Button> </form> </Form>) 
}
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
