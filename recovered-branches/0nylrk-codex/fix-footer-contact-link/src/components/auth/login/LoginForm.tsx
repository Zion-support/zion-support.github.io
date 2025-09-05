
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
        onSubmit={form.handleSubmit(onSubmit)} ;
        className="space-y-6";
        autoComplete="off" // Disable browser autofill;
      >;
        <FormField;
          control={form.control}
          name="email";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    placeholder="you@example.com";
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                    {...field}
                    autoComplete="off" // Disable browser autofill;
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
=======
import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from "lucide-react",

import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Link } from "react-router-dom",
// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters")}),
// Form validation schema
const loginSchema = z.object({
  email: z.string().email(&quot;Please enter a valid email&quot;).min(1, &quot;Email is required&quot;),
  password: z.string().min(6, &quot;Password must be at least 6 characters&quot;)});

type LoginFormValues = z.infer<typeof loginSchema>,

export function LoginForm() {
  const { login, isLoading } = useAuth(),
  const [showPassword, setShowPassword] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""}}),
  const onSubmit = async (data: LoginFormValues) => {
    if (isSubmitting) return,
    
    try {
      setIsSubmitting(true),
      await login(data.email, data.password)
    } finally {
      setIsSubmitting(false)
    }
  },
export function LoginForm() {_const { login, _isLoading} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const _form = useForm<LoginFormValues>({_resolver: zodResolver(loginSchema), _defaultValues: {
      email: "", _password: ""}});

  const _onSubmit = async (_data: LoginFormValues) => {_if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      await login(data.email, _data.password);} finally {_setIsSubmitting(false);}
  };

  return (
    <Form {_...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className=&quot;space-y-6&quot;
        autoComplete=&quot;off&quot; // Disable browser autofill
      >
        <FormField
          control={form.control}
          name=&quot;email&quot;
          render={({ field }) => (            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Email address</FormLabel>
              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
                    placeholder=&quot;you@example.com&quot;
                    className=&quot;bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
                    autoComplete=&quot;off&quot; // Disable browser autofill                  />
                  <User className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                </div>
              </FormControl>
              <FormMessage className=&quot;text-red-400&quot; />
            </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          )}
        />;
;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name="password";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
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
  ),;
=======
          name=&quot;password&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel className=&quot;text-zion-slate-light&quot;>Password</FormLabel>              <FormControl>
                <div className=&quot;relative&quot;>
                  <Input
                    type={showPassword ? &quot;text&quot; : &quot;password&quot;}
                    placeholder=&quot;••••••••&quot;
                    className=&quot;bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple&quot;
                    {...field}
                    autoComplete=&quot;off&quot; // Disable browser autofill                  />
                  <LogIn className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Button
                    type=&quot;button&quot;
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    className=&quot;absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan&quot;
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className=&quot;h-4 w-4&quot; />                    ) : (
                      <Eye className=&quot;h-4 w-4&quot; />
                    )}
                    <span className=&quot;sr-only&quot;>
                      {showPassword ? &quot;Hide password&quot; : &quot;Show password&quot;}                    </span>
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
          {isLoading || isSubmitting ? &quot;Logging in...&quot; : &quot;Login&quot;}        </Button>
      </form>
    </Form>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
