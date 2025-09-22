
import { useState } from "react",;
import { useRouter } from 'next/router',;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { LogIn, User, Eye, EyeOff } from 'lucide-react';
import { fireEvent } from '@/lib/analytics',;
import { useAuth } from "@/context/auth/AuthProvider",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import Link from "next/link",;
;
import { Checkbox } from "@/components/ui/checkbox",;
// Form validation schema;
const loginSchema = z.object({;
  email:z.string().email("Please enter a valid email").min(1, "Email is required"),;
  password:z.string().min(6, "Password must be at least 6 characters"),;
  rememberMe:z.boolean()}),;
type LoginFormValues = z.infer<typeof loginSchema>,;
;
export function LoginForm() {;
  const { isLoading, login } = useAuth(),;
  const [showPassword, setShowPassword] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isResending, setIsResending] = useState(false),;
  const [verificationMessage, setVerificationMessage] = useState(''),;
  const router = useRouter(),;
  ;
  const form = useForm<LoginFormValues>({;
    resolver:zodResolver(loginSchema) as any,;
    defaultValues:{;
      email:"",;
      password:"",;
      rememberMe:false}}),;
;
  const onSubmit = async (data:LoginFormValues) => {;
    if (isSubmitting) return,;
;
    try {;
      setIsSubmitting(true),;
      // Pass email and password to the login function;
      const result = await login(data.email, data.password, data.rememberMe),;
      if (result?.error) {;
        let errorMessage = "Login failed. Please try again.", // Default generic error;
        if (result?.error && result?.error?.message) {;
          if (result.error.message.toLowerCase().includes("email not confirmed")) {;
            errorMessage = "Your email is not confirmed. Please check your inbox for a confirmation link.",;
          } else {;
            errorMessage = result.error.message,;
          }
        }
        form.setError("root", { message:errorMessage }),;
      } else {;
        fireEvent('login', { method:'email' }),;
      }
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  const handleResendEmail = async () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message:'Please enter your email address.' }),;
      return,;
    }
    setIsResending(true),;
    setVerificationMessage(''),;
    try {;
      const response = await fetch('/api/auth/resend-verification-email', {;
        method:'POST',;
        headers:{ 'Content-Type':'application/json' },;
        body:JSON.stringify({ email });
      }),;
      const data = await response.json(),;
      if (response.ok) {;
        setVerificationMessage('Verification email sent. Please check your inbox.'),;
      } else {;
        setVerificationMessage(data.message || 'Failed to resend verification email.'),;
      }
    } catch (err) {;
      setVerificationMessage('Failed to resend verification email.'),;
    } finally {;
      setIsResending(false),;
    }
  },;
;
  const handleCheckStatus = () => {;
    const email = form.getValues('email'),;
    if (!email) {;
      form.setError('root', { message:'Please enter your email address.' }),;
      return,;
    }
    router.push(`/verify-status?email=${encodeURIComponent(email)}`),;
  },;
;
  return (;
    <Form {...form}>;
      {form.formState.errors.root && (;
        <Alert variant="destructive" className="mb-4">;
          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>;
        </Alert>;
      )}
      <form;
        onSubmit={form.handleSubmit(onSubmit, (errors) => {;
          const firstError = Object.keys(errors)[0] as keyof LoginFormValues,;
          if (firstError) {;
            form.setFocus(firstError),;
          }
        })}
        className="space-y-6";
      >;
        <FormField;
          control={form.control}
          name="email";
          render={({ field } { field:ControllerRenderProps<LoginFormValues "email"> }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    placeholder="you@example.com";
                    aria-label="Email address";
                    aria-invalid={!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";
                    {...field}
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}
        />;
        <FormField;
          control={form.control}
          name="password";
          render={({ field } { field:ControllerRenderProps<LoginFormValues "password"> }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    type={showPassword ? "text" :"password"}
                    placeholder="Enter password";
                    aria-label="Password";
                    aria-invalid={!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";
                    {...field}
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

              </div>;
            </FormItem>;
          )}
        />;

              Forgot password?;
            </Link>;
          </div>;
        </div>;

            Create account;
          </Link>;
        </p>;
      </form>;
    </Form>;

}else {;
  fireEvent ('login', {';
  method: 'email' ;
}) ;

  message: 'Please enter your email address.' ;
});
return ;
}setIsResending (true);';
setVerificationMessage ('');
try {';
  const response = await fetch ('/api/auth/resend-verification-email', {';
  method: 'POST';
headers: {';
  'Content-Type': 'application/json' ;
};

}catch (err) {';
  setVerificationMessage ('Failed to resend verification email.') ;
}finally {;
  setIsResending (false) ;

}</p>) ";
}<div className=" flex justify-between mt-4" > <Button > {';
  isResending ? 'Sending...': 'Resend / Verify e-mail' ;
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>) ;
