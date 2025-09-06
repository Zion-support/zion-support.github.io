import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  form: UseFormReturn<FormValues>;
}

export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <FormField
      control={form && form.control}
      name="projectOverview"

export /**
 * ProjectDetailsField - Function description
 */
function ProjectDetailsField() {
  return (
    <FormField;
      control={form.control}
      name="project_overview";

      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Project Overview</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Describe your project, goals, and requirements"
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
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  form: UseFormReturn<FormValues>;
>>>>>>> main
}
export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <FormField
      control={form && form.control}
      name="projectOverview"
}
;

<<<<<<< HEAD
  ),;}
 interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues> 
}form 
}: ProjectDetailsFieldProps) {
  return (<FormField control= {
  form.control 
}<FormItem> <FormLabel className="text-white" >Project Overview</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/>) 
}
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
              placeholder="Describe your project, goals, and requirements"
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
  )
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
