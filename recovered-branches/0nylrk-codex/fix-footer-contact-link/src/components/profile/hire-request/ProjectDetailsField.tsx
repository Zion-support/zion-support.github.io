


  form: UseFormReturn<FormValues>
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;


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





