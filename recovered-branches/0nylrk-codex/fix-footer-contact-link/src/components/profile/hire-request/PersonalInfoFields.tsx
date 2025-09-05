
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { FormValues } from &quot;./useHireRequestForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>
}

export function PersonalInfoFields({ form }: PersonalInfoFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name=&quot;requesterName&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Name</FormLabel>
            <FormControl>
              <Input 
                placeholder=&quot;Enter your full name&quot; 
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name=&quot;requesterEmail&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Email</FormLabel>
            <FormControl>
              <Input 
                placeholder=&quot;Enter your email address&quot; 
                type=&quot;email&quot;
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
