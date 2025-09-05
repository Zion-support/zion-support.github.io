
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { FormValues } from "./useHireRequestForm",
=======
import React from &quot;react&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { FormValues } from &quot;./useHireRequestForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
}
=======
import React from "react";

interface ProjectDetailsFieldProps {_form: UseFormReturn<FormValues>;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ProjectDetailsField(_{_form}: ProjectDetailsFieldProps) {_return (_<FormField
      control={form.control}
<<<<<<< HEAD
      name=&quot;projectOverview&quot;
      render={({ field }) => (
=======
      name="projectOverview"
      render={_({ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <FormItem>
          <FormLabel className=&quot;text-white&quot;>Project Overview</FormLabel>
          <FormControl>
            <Textarea 
<<<<<<< HEAD
              placeholder=&quot;Describe your project, goals, and requirements&quot; 
              className=&quot;bg-zion-blue border-zion-blue-light text-white min-h-[120px]&quot;
              {...field} 
=======
              placeholder="Describe your project, goals, and requirements" 
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              {_...field} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </FormControl>
          <FormMessage className=&quot;text-red-400&quot; />
        </FormItem>
      )}
    />
  )
}
