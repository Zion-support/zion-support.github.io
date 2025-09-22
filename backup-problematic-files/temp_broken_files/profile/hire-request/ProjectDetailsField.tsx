
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Overview</FormLabel>;
          <FormControl>;
<<<<<<< HEAD

            />;
          </FormControl>;
          <FormMessage className="text-red-400" />;
        </FormItem>;
      )}
    />;

