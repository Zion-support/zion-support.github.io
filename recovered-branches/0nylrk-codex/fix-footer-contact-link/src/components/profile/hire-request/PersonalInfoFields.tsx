
<<<<<<< HEAD
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
=======

interface PersonalInfoFieldsProps {_form: UseFormReturn<FormValues>;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function PersonalInfoFields(_{_form}: PersonalInfoFieldsProps) {_return (_<>
      <FormField
        control={form.control}
<<<<<<< HEAD
        name=&quot;requesterName&quot;
        render={({ field }) => (
=======
        name="requesterName"
        render={_({ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Name</FormLabel>
            <FormControl>
              <Input 
<<<<<<< HEAD
                placeholder=&quot;Enter your full name&quot; 
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;
=======
                placeholder="Enter your full name" 
                {_...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
<<<<<<< HEAD
        control={form.control}
        name=&quot;requesterEmail&quot;
        render={({ field }) => (
=======
        control={_form.control}
        name="requesterEmail"
        render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Email</FormLabel>
            <FormControl>
              <Input 
<<<<<<< HEAD
                placeholder=&quot;Enter your email address&quot; 
                type=&quot;email&quot;
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;
=======
                placeholder="Enter your email address" 
                type="email"
                {_...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
