
import React from &quot;react&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { FormValues } from &quot;./useHireRequestForm&quot;;

interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;
}

export function ProjectDetailsField({ form }: ProjectDetailsFieldProps) {
  return (
    <FormField
      control={form.control}
      name=&quot;projectOverview&quot;
      render={({ field }) => (
        <FormItem>
          <FormLabel className=&quot;text-white&quot;>Project Overview</FormLabel>
          <FormControl>
            <Textarea 
              placeholder=&quot;Describe your project, goals, and requirements&quot; 
              className=&quot;bg-zion-blue border-zion-blue-light text-white min-h-[120px]&quot;
              {...field} 
            />
          </FormControl>
          <FormMessage className=&quot;text-red-400&quot; />
        </FormItem>
      )}
    />
  );
}
