
import React from "react";
import { UseFormReturn } from "react-hook-form";
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
