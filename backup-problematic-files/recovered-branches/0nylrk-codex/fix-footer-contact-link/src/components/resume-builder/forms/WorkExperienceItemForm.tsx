
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState } from 'react',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { WorkExperience } from "@/types/resume",;
import { Button } from "@/components/ui/button",;
import { Calendar } from "@/components/ui/calendar",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Textarea } from "@/components/ui/textarea",;
import { cn } from "@/lib/utils",;
import { Switch } from "@/components/ui/switch",;
import { format } from "date-fns",;
import { CalendarIcon, Loader2 } from "lucide-react",;
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;
;
// Define form schema;
const formSchema = z.object({;
  company_name:z.string().min(1, "Company name is required"),;
  role_title:z.string().min(1, "Role title is required"),;
  start_date:z.date({;
    required_error:"Start date is required"}),;
  end_date:z.date().optional(),;
<<<<<<< HEAD
  is_current:z.boolean().default(false),;
=======
  is_current:z.boolean().default(false),,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  description:z.string().optional(),;
  location:z.string().optional()}),;
;
=======
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";""
import { useForm } from "react-hook-form";""
import { z } from "zod";""
import { WorkExperience } from "@/types/resume";""
import { Button } from "@/components/ui/button";""
import { Calendar } from "@/components/ui/calendar";""
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";""
import { Input } from "@/components/ui/input";""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";""
import { Textarea } from "@/components/ui/textarea";""
import { cn } from "@/lib/utils";""
import { Switch } from "@/components/ui/switch";""
import { format } from "date-fns";""
import { CalendarIcon, Loader2 } from "lucide-react";""
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton";""
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog";"
;
// Define form schema;
const formSchema = z.object({;)"
  company_name: z.string().min(1;, "Company name is required"),;""
  role_title: z.string().min(1;, "Role title is required"),;"
  start_date: z.date({;,)"
  required_error: "Start date is required";}),;"
  end_date: z.date().optional();,;
  is_current: z.boolean().default(false);,,
  description: z.string().optional();,;
  location: z.string().optional();}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
type FormValues = z.infer<typeof formSchema>,;
</typeof>
  onSubmit: (data:WorkExperience) => Promise<void>;,;
</void>
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema);,;
    defaultValues:{;
<<<<<<< HEAD
      company_name:initialData?.company_name || "",;
      role_title:initialData?.role_title || "",;
      start_date:initialData?.start_date ? new Date(initialData.start_date) :new Date(),;
      end_date:initialData?.end_date ? new Date(initialData.end_date) :undefined,;
<<<<<<< HEAD
      is_current:initialData?.is_current || false,;
      description:initialData?.description || "",;
=======
      is_current:initialData?.is_current || false,,
  description:initialData?.description || "",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      location:initialData?.location || ""}}),;
=======
      company_name: initialData?.company_name || "";,;
      role_title: initialData?.role_title || "";,;
      start_date: initialData?.start_date ? new Date(initialData.start_date) :new Date();,;
      end_date: initialData?.end_date ? new Date(initialData.end_date) :undefined;,;
      is_current: initialData?.is_current || false;,,
  description: initialData?.description || "";,;
      location: initialData?.location || "";}}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ;
  const { isSubmitting } = form.formState,;
  const watchIsCurrent = form.watch("is_current"),;
  const watchRoleTitle = form.watch("role_title"),;
  const watchCompanyName = form.watch("company_name"),;
;
  const handleFormSubmit = async (values:FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience:WorkExperience = {;
<<<<<<< HEAD
      id:initialData?.id,;
      company_name:values.company_name,  // Required;
      role_title:values.role_title,      // Required;
      start_date:values.start_date,      // Required;
      end_date:values.end_date,          // Optional;
<<<<<<< HEAD
      is_current:values.is_current,      // Required;
      description:values.description,    // Optional;
=======
      is_current:values.is_current,      // Required,
  description:values.description,    // Optional;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      location:values.location,          // Optional;
=======
      id: initialData?.id;,;
      company_name: values.company_name;,  // Required;
      role_title: values.role_title;,      // Required;
      start_date: values.start_date;,      // Required;
      end_date: values.end_date;,          // Optional;
      is_current: values.is_current;,      // Required,
  description: values.description;,    // Optional;
      location: values.location;,          // Optional;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    },;
    ;
    await onSubmit(workExperience),;
  },;
;
  const handleAIEnhancement = (content:string) => {;
    form.setValue("description", content, { shouldDirty: true ;}),;
    setIsEnhancementDialogOpen(false),;
  },;
;
  return (;

pr-12325
    <>;
      <Form {...form}>;
)"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;"
</form>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
            <FormField;
<<<<<<< HEAD
              control={form.control}
              name="company_name";
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              control={form.control}"
              name="company_name";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              render={({ field }) => (;

                <FormItem>;

                  <FormLabel>Company Name;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="role_title";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Senior Developer" {...field} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
<<<<<<< HEAD

=======
          </div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="location";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD

=======
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="is_current";
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Current Position</FormLabel>;
                  <div className="flex items-center gap-2 h-10">;
=======
"
                    <Input placeholder="e.g. Acme Corporation" {...field} />;"

                  <FormMessage />;
)
                ;              )}
              name="role_title";"


                  <FormLabel>Role Title;
                    <Input placeholder="e.g. Senior Developer" {...field} />;"


          </div>;"
              name="location";")


                  <FormLabel>Location;
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;"


              name="is_current";"
                <FormItem className="flex flex-col">;"

                  <FormLabel>Current Position;"
                  <div className="flex items-center gap-2 h-10">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <Switch;
                      checked={field.value}
                      onCheckedChange={field.onChange}"
                      id="current-position";"
                    />;
<<<<<<< HEAD
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      I currently work here;
                    </label>;
                  </div>;
                  <FormMessage />;
<<<<<<< HEAD

=======
                </FormItem>;
              )}
            />;
          </div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="start_date";
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Start Date</FormLabel>;
=======
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;"
</label>
                    </label>;
                  </div>;

              name="start_date";")

                  <FormLabel>Start Date;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <Popover>;

                    <PopoverTrigger asChild>;


                        <Button;"
                          variant={"outline"}"
                          className={cn(;"
                            "w-full pl-3 text-left font-normal",;""
                            !field.value && "text-muted-foreground";")
                          )}
                        >;

                            <span>Select date</span>;"
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"

                    ;"
                    <PopoverContent className="w-auto p-0" align="start">;"

                      <Calendar;"
                        mode="single";"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus;"
                        captionLayout="dropdown-buttons";"
                        fromYear={1990}
                        toYear={new Date().getFullYear()}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
<<<<<<< HEAD

=======
                </FormItem>;
              )}
            />;
            ;
            {!watchIsCurrent && (;
              <FormField;
                control={form.control}
                name="end_date";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                render={({ field }) => (;
                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
                          <Button;
                            variant={"outline"}
                            className={cn(;
                              "w-full pl-3 text-left font-normal",;
                              !field.value && "text-muted-foreground";
                            )}
                          >;
                            {field.value ? (;
                              format(field.value, "MMM yyyy");
                            ) :(;
                              <span>Select date</span>;
                            )}
                          <Button;
                            variant={"outline"}
                            className={cn(;
                              "w-full pl-3 text-left font-normal",;
                              !field.value && "text-muted-foreground";
                            )}
                          >;
                            {field.value ? (;
                              format(field.value, "MMM yyyy");
                            ) :(;
                              <span>Select date</span>;
                            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;
                      <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD

=======
                        <Calendar;
                          mode="single";
=======


                name="end_date";"

                    <FormLabel>End Date;




                              <span>Select date</span>;



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                          selected={field.value || undefined}
                          disabled={(date) => date > new Date()}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
<<<<<<< HEAD

=======
                  </FormItem>;                )}
              />;
            )}
          </div>;
;
          <FormField;
            control={form.control}
            name="description";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            render={({ field }) => (;
              <FormItem>;
                <div className="flex justify-between items-center">;
                  <FormLabel>Description</FormLabel>;
                  <div className="flex gap-2">;
<<<<<<< HEAD

=======
=======


                  ;                )}
            name="description";"

                <div className="flex justify-between items-center">;"
                  <FormLabel>Description;"
                  <div className="flex gap-2">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <AIEnhancementButton;
                      options={{;"
                        enhancementType: "work-description";,;""
                        content: field.value || "";,;"
                        context: `${watchRoleTitle;} at ${watchCompanyName}`;
                      }})"
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty: true ;})}"

                      type="button";""
                      variant="outline";""
                      size="sm";"
                      onClick={() => setIsEnhancementDialogOpen(true)}
<<<<<<< HEAD
                      className="text-xs";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    >;
                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;
                  <Textarea;
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";
<<<<<<< HEAD

=======
                    className="min-h-[150px]";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
<<<<<<< HEAD

=======
              </FormItem>;
            )}
          />;
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="flex justify-end gap-2">;
            <Button type="button" variant="outline" onClick={onCancel}>;
              Cancel;
            </Button>;
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
=======


                  <Textarea;"
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";""
                    className="min-h-[150px]";"
                    {...field}


          <div className="flex justify-end gap-2">;"
</div>"
            <Button type="button" variant="outline" onClick={onCancel}>;"

            <Button type="submit" disabled={isSubmitting}>;"

                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </>;
<<<<<<< HEAD

=======
              ) :(;
<<<<<<< HEAD
                <>Save</>;
              )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </Button>;
          </div>;
        </form>;
      </Form>;
<<<<<<< HEAD

=======
;
      <AIEnhancementDialog;
        title="Enhance Work Experience Description";
=======
                <>Save</>;)
        </form>;
      <AIEnhancementDialog;"
        title="Enhance Work Experience Description";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}

  ),;}
 is current: z.boolean () .default (false);,
 is current: z.boolean () .default (false);,
pr-12325
  description: z.string () .optional ();
location: z.string () .optional () ;
});
type FormValues = z.infer<typeof formSchema>;
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {
  await onSubmit (workExperience) 
};
setIsEnhancementDialogOpen (false)
};
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md: grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md: grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) ;
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> {
}/> <FormField  <FormMessage /> ) 
}/> </div> <div className="grid grid-cols-1 md: grid-cols-2 gap-4" > <FormField  <FormMessage /> )";
}/> <FormField <FormLabel>Current Position <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> )"
}/> </div> <div className="grid grid-cols-1 md: grid-cols-2 gap-4" > <FormField <FormLabel>Start Date <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>)";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />    <PopoverContent className="w-auto p-0" align="start" > <Calendar />   <FormMessage /> )"

pr-12325
  !watchIsCurrent && (<FormField control= {
<<<<<<< HEAD
  form.control 
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/>) 
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) 
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  form.control;)
}<FormLabel>End Date <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) 
}</div> <FormField <FormLabel>Description <div className="flex gap-2" > <AIEnhancementButton > AI Writer  </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {"

}/>  <FormMessage /> ) 
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>)"
} </div> </form>  <AIEnhancementDialog /> </>) 
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
