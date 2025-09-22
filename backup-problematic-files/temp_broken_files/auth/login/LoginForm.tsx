
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

                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
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
                  </Button>;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
        />;

              Forgot your password?;
            </Link>;
          </div>;
        </div>;

}