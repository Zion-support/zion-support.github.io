

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

import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Link} from "react-router-dom";

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
  email: z.string().email("Please enter a valid email").min(1, "Email is required");
  password: z.string().min(6, "Password must be at least 6 characters")});
type LoginFormValues = z.infer<typeof loginSchema>;
export function LoginForm() {
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters")}),

type LoginFormValues = z.infer<typeof loginSchema>,



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
    defaultValues: {
      email: ""
      password: ""}})
  const onSubmit = async (data: LoginFormValues) => {

=======
    if (isSubmitting) return;
    if (isSubmitting) return,
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    try {
      setIsSubmitting(true)
      await login(data.email, data.password)
    } finally {
      setIsSubmitting(false)
    }
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  }

  return (

    <Form {...form}>;
      <form
        onSubmit={form && form.handleSubmit(onSubmit)} 

        className="space-y-6"
        autoComplete="off" // Disable browser autofill>;
        <FormField
          control={form && form.control}
          name="email"
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
                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;
              <FormMessage className="text-red-400" />;
            </FormItem>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple"
                    {...field}
                    autoComplete="off" // Disable browser autofill
                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                    onClick={() => setShowPassword(!showPassword)}
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
<<<<<<< HEAD
