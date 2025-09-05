
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { FormValues } from &quot;./useHireRequestForm&quot;;

interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>;
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
  );
}
