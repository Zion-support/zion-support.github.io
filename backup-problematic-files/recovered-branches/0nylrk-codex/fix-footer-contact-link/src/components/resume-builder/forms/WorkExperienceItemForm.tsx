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

  description:z.string().optional(),;
  location:z.string().optional()}),;
;

type FormValues = z.infer<typeof formSchema>,;
</typeof>
  onSubmit: (data:WorkExperience) => Promise<void>;,;
</void>
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema);,;
    defaultValues:{;

      location:initialData?.location || ""}}),;

  ;
  const { isSubmitting } = form.formState,;
  const watchIsCurrent = form.watch("is_current"),;
  const watchRoleTitle = form.watch("role_title"),;
  const watchCompanyName = form.watch("company_name"),;
;
  const handleFormSubmit = async (values:FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience:WorkExperience = {;

      location:values.location,          // Optional;

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

              render={({ field }) => (;

                <FormItem>;

                  <FormLabel>Company Name;
                  <FormControl>;

                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;

                    <Switch;
                      checked={field.value}
                      onCheckedChange={field.onChange}"
                      id="current-position";"
                    />;

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

                render={({ field }) => (;
                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;
                      <PopoverContent className="w-auto p-0" align="start">;

                          selected={field.value || undefined}
                          disabled={(date) => date > new Date()}

            render={({ field }) => (;
              <FormItem>;
                <div className="flex justify-between items-center">;
                  <FormLabel>Description</FormLabel>;
                  <div className="flex gap-2">;

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

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

          <div className="flex justify-end gap-2">;
            <Button type="button" variant="outline" onClick={onCancel}>;
              Cancel;
            </Button>;
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;

                </>;

            </Button>;
          </div>;
        </form>;
      </Form>;

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