
import React from "react";
import { UseFormReturn } from "react-hook-form";
<<<<<<< HEAD
import { FormFieldFormItemFormLabelFormControlFormMessage } from "@/components/ui/form";
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
>>>>>>> origin/auto/autonomy-17186719616
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";

interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;
}

export function ProjectDetailsField({ form }: ProjectDetailsFieldProps) {
  return (
    <FormField
      control={form.control}
      name="projectOverview"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Project Overview</FormLabel>
          <FormControl>
            <Textarea 
<<<<<<< HEAD
              placeholder="Describe your projectgoalsand requirements" 
=======
              placeholder="Describe your project, goals, and requirements" 
>>>>>>> origin/auto/autonomy-17186719616
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              {...field} 
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}
