
<<<<<<< HEAD
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import { FormValues } from "./useHireRequestForm",;
;
interface ProjectDetailsFieldProps {;
  form:UseFormReturn<FormValues>;
}
;
export function ProjectDetailsField({ form } ProjectDetailsFieldProps) {;
  return (;
    <FormField;
      control={form.control}
      name="projectOverview";
      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Overview</FormLabel>;
          <FormControl>;
            <Textarea ;
              placeholder="Describe your project, goals, and requirements" ;
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";
              {...field} ;
            />;
          </FormControl>;
          <FormMessage className="text-red-400" />;
        </FormItem>;
      )}
    />;
  ),;
=======
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { FormValues } from "./useHireRequestForm",interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
}
import React from "react";

interface ProjectDetailsFieldProps {_form: UseFormReturn<FormValues>;}

export function ProjectDetailsField(_{_form}: ProjectDetailsFieldProps) {_return (_<FormField
      control={form.control}
      name=&quot;projectOverview&quot;
      render={({ field }) => (        <FormItem>
          <FormLabel className=&quot;text-white&quot;>Project Overview</FormLabel>
          <FormControl>
            <Textarea 
              placeholder=&quot;Describe your project, goals, and requirements&quot; 
              className=&quot;bg-zion-blue border-zion-blue-light text-white min-h-[120px]&quot;
              {...field}             />
          </FormControl>
          <FormMessage className=&quot;text-red-400&quot; />
        </FormItem>
      )}
    />
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
