const form = useForm<LoginFormValues>({


import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { LogIn, User, Eye, EyeOff } from "lucide-react",  password: z.string().min(6, "Password must be at least 6 characters")}),

type LoginFormValues = z.infer<typeof loginSchema>,

    try {
      setIsSubmitting(true)
      await login(data.email, data.password)
    } finally {
      setIsSubmitting(false)                  />;
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                </div>;
              </FormControl>;"
              <FormMessage className="text-red-400" />;
            </FormItem>;
          )}

        <FormField
          control={form && form.control}
          name="password"