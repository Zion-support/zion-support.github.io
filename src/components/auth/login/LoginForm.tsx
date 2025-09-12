
import { _useState } from "react";
import { _useForm } from "react-hook-form";
import { _useNavigate } from "react-router-dom";
import { _zodResolver } from "@hookform/resolvers/zod";
import { _z } from "zod";
import { _LogIn, User, Eye, EyeOff } from "lucide-react";
import { _useAuth } from "@/hooks/useAuth";
import { _Button } from "@/components/ui/button";
import { _Input } from "@/components/ui/input";
import { _Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { _Link } from "react-router-dom";
import { _LoadingOverlay } from "@/components/LoadingOverlay";

import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
// Form validation schema
const _loginSchema = z.object({
    email: z.string().email("Please enter a valid email").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
export function LoginForm() {
    const { login, isLoading } = useAuth();
    const _navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const _form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const _onSubmit = async (data) => {
        if (isSubmitting)
            return;
        try {
            setIsSubmitting(true);
            const { error } = await login(data.email, data.password);
            if (error) {
                form.setError("root", { message: error });
            }
            else {
                navigate("/");
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" autoComplete="off" // Disable browser autofill
    >
        {form.formState.errors.root && (<p className="text-red-400 text-sm" role="alert">
            {form.formState.errors.root.message}
          </p>)}
        <FormField control={form.control} name="email" render={({ field }) => (<FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input placeholder="you@example.com" className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field} autoComplete="off" // Disable browser autofill
        />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
                </div>
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>)}/>

        <FormField control={form.control} name="password" render={({ field }) => (<FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple" {...field} autoComplete="off" // Disable browser autofill
        />
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
                  <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<EyeOff className="h-4 w-4"/>) : (<Eye className="h-4 w-4"/>)}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>)}/>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button type="submit" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" disabled={isLoading || isSubmitting}>
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
      <LoadingOverlay visible={isLoading || isSubmitting}/>
    </Form>);
}

