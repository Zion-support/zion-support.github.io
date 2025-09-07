import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
<<<<<<< HEAD
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;
=======
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { FormValues } from "./useHireRequestForm",
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;  form: UseFormReturn<FormValues>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
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

<<<<<<< HEAD
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;
  form: UseFormReturn<FormValues>;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
  return (
    <FormField
      control={form && form.control}
      name="projectOverview"
}
;

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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
