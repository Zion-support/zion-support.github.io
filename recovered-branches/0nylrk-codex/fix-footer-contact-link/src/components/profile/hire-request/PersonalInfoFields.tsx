
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>
}

interface PersonalInfoFieldsProps {_form: UseFormReturn<FormValues>;}

export function PersonalInfoFields(_{_form}: PersonalInfoFieldsProps) {_return (_<>
      <FormField
        control={form.control}
        name=&quot;requesterName&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Name</FormLabel>
            <FormControl>
              <Input 
                placeholder=&quot;Enter your full name&quot; 
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name=&quot;requesterEmail&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Email</FormLabel>
            <FormControl>
              <Input 
                placeholder=&quot;Enter your email address&quot; 
                type=&quot;email&quot;
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
