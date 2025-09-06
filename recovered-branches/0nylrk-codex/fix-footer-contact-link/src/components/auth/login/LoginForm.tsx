
<<<<<<< HEAD
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {LogIn, User, Eye, EyeOff} from "lucide-react";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from "lucide-react",
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
  email: z.string().email("Please enter a valid email").min(1, "Email is required");
  password: z.string().min(6, "Password must be at least 6 characters")});
type LoginFormValues = z.infer<typeof loginSchema>;
export function LoginForm() {
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters")}),

type LoginFormValues = z.infer<typeof loginSchema>,

<<<<<<< HEAD
export function LoginForm() {;
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
export function LoginForm() {
  const { login, isLoading } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
    defaultValues: {
      email: ""
      password: ""}})
  const onSubmit = async (data: LoginFormValues) => {

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (isSubmitting) return,
    


<<<<<<< HEAD
    if (isSubmitting) return;
    if (isSubmitting) return,
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      setIsSubmitting(true)
      await login(data.email, data.password)
    } finally {
      setIsSubmitting(false)

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

  },

<<<<<<< HEAD
    }
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Form validation schema;
const loginSchema = z && z.object({;
  email: z && z.string().email("Please enter a valid email").min(1, "Email is required");
  password: z && z.string().min(6, "Password must be at least 6 characters")});
<<<<<<< HEAD
type LoginFormValues = z && z.infer<typeof loginSchema>;
=======

type LoginFormValues = z && z.infer<typeof loginSchema>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function LoginForm() {;
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
// Form validation schema;
const loginSchema = z.object({;
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),;
  password: z.string().min(6, "Password must be at least 6 characters")}),;
type LoginFormValues = z.infer<typeof loginSchema>,;
export function LoginForm() {;
  const { login, isLoading } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const form = useForm<LoginFormValues>({;
    resolver: zodResolver(loginSchema),;
    defaultValues: {;
      email: "",;
      password: ""}}),;
<<<<<<< HEAD
  const onSubmit = async (data: LoginFormValues) => {;
    <Form {...form}>;
      <form
        onSubmit={form && form.handleSubmit(onSubmit)} 
=======

  const onSubmit = async (data: LoginFormValues) => {;
    if (isSubmitting) return;

    try {;
      setIsSubmitting(true),;
      await login(data && data.email, data && data.password);
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (

    <Form {...form}>;
      <form
        onSubmit={form && form.handleSubmit(onSubmit)} 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        className="space-y-6"
        autoComplete="off" // Disable browser autofill>;
        <FormField
          control={form && form.control}
          name="email"
<<<<<<< HEAD

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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
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
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
            </FormItem>;
<<<<<<< HEAD
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          )}

        />;


        <FormField
          control={form && form.control}
          name="password"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                    {...field}
                    autoComplete="off" // Disable browser autofill
<<<<<<< HEAD
                  />
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
=======
                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
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
                    onClick={() => setShowPassword(!showPassword)}
                  >;
                    {showPassword ? (;
                      <EyeOff className="h-4 w-4" />;
                    ) :(;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" :"Show password"}
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
                    onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
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
=======
                  >;
                    {showPassword ? (;
                      <EyeOff className="h-4 w-4" />;
                    ) : (;
                      <Eye className="h-4 w-4" />;
                    )}
                    <span className="sr-only">;
                      {showPassword ? "Hide password" : "Show password"}
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        />;
;
        <div className="flex items-center justify-between">;
          <div className="text-sm">;
            <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
              Forgot your password?;
            </Link>;
          </div>;
        </div>;
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

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
