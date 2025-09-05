
import React from "react";

interface ProjectDetailsFieldProps {_form: UseFormReturn<FormValues>;}

export function ProjectDetailsField(_{_form}: ProjectDetailsFieldProps) {_return (_<FormField
      control={form.control}
      name="projectOverview"
      render={_({ field}) => (
        <FormItem>
          <FormLabel className="text-white">Project Overview</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Describe your project, goals, and requirements" 
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
              {_...field} 
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}
