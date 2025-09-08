
<<<<<<< HEAD
=======
import {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  FormField,
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD


=======

  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>
}


interface ProjectDetailsFieldProps {
  form: UseFormReturn < FormValues>;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {FormValues} from "./useHireRequestForm";

interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>


<<<<<<< HEAD
=======
  FormField
  FormItem
  FormLabel
  FormControl

} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {}
  form: UseFormReturn<FormValues>;

  form: UseFormReturn<FormValues>
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { FormValues } from "./useHireRequestForm",
interface ProjectDetailsFieldProps {
<<<<<<< HEAD

  form: UseFormReturn<FormValues>
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;

=======
  }
  "form": UseFormReturn<FormValues>
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;"
import { Textarea } from "@/components/ui/textarea",;  "form": UseFormReturn<FormValues>;"
import { Textarea } from "@/components/ui/textarea",;  form: UseFormReturn<FormValues>;

}

export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;

  form: UseFormReturn<FormValues>;

}
export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;

  return (
    <FormField;

;

} from "@/components/ui/form";

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./useHireRequestForm";
interface ProjectDetailsFieldProps {
  form: UseFormReturn<FormValues>;
  form: UseFormReturn<FormValues>;
}
<<<<<<< HEAD

export function ProjectDetailsField(): any ({ form }: ProjectDetailsFieldProps) {;
  return (
    <FormField
      control={form && form.control}


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
        <FormItem>;
          <FormLabel className="text - white">Project Overview</FormLabel>;
          <FormControl>;
            <Textarea;
              placeholder="Describe your project, goals, and requirements";
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
              {...field}



      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Overview</FormLabel>;
          <FormControl>;

            <Textarea
              placeholder="Describe your project, goals, and requirements" 
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              {...field} 

            />;
          </FormControl>;
          <FormMessage className="text-red-400" />;
        </FormItem>;
      )}
    />;

  );
}


  )

}

;





=======


  )
      name="projectOverview"
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
