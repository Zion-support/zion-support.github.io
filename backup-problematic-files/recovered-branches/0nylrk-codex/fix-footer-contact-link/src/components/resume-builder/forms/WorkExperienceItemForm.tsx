
import { useState } from 'react',;
import { zodResolver } from "@hookform/resolvers/zod",;""
import { useForm } from "react-hook-form",;""
import { z } from "zod",;""
import { WorkExperience } from "@/types/resume",;""
import { Button } from "@/components/ui/button",;""
import { Calendar } from "@/components/ui/calendar",;""
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;""
import { Input } from "@/components/ui/input",;""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;""
import { Textarea } from "@/components/ui/textarea",;""
import { cn } from "@/lib/utils",;""
import { Switch } from "@/components/ui/switch",;""
import { format } from "date-fns",;""
import { CalendarIcon, Loader2 } from "lucide-react",;""
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;""
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;"
;
// Define form schema;
const formSchema = z.object({;)"
  company_name:z.string().min(1, "Company name is required"),;""
  role_title:z.string().min(1, "Role title is required"),;"
  start_date: z.date({;,)"
  required_error:"Start date is required"}),;"
  end_date:z.date().optional(),;
  is_current:z.boolean().default(false),;
  description:z.string().optional(),;
  location:z.string().optional()}),;
type FormValues = z.infer<typeof formSchema>,;
</typeof>
  onSubmit:(data:WorkExperience) => Promise<void>,;
</void>
  const form = useForm<FormValues>({;

    <>;
      <Form {...form}>;
)"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;"
</form>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
            <FormField;
              control={form.control}"
              name="company_name";"
              render={({ field }) => (;

                <FormItem>;

                  <FormLabel>Company Name;
                  <FormControl>;
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
                    <Switch;
                      checked={field.value}
                      onCheckedChange={field.onChange}"
                      id="current-position";"
                    />;
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;"
</label>
                    </label>;
                  </div>;

              name="start_date";")

                  <FormLabel>Start Date;
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


                name="end_date";"

                    <FormLabel>End Date;




                              <span>Select date</span>;



                          selected={field.value || undefined}
                          disabled={(date) => date > new Date()}


                  ;                )}
            name="description";"

                <div className="flex justify-between items-center">;"
                  <FormLabel>Description;"
                  <div className="flex gap-2">;"
                    <AIEnhancementButton;
                      options={{;"
                        enhancementType:"work-description",;""
                        content:field.value || "",;"
                        context:`${watchRoleTitle} at ${watchCompanyName}`;
                      }})"
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty:true })}"

                      type="button";""
                      variant="outline";""
                      size="sm";"
                      onClick={() => setIsEnhancementDialogOpen(true)}


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
                </>;
              ) :(;
                <>Save</>;)
        </form>;
      <AIEnhancementDialog;"
        title="Enhance Work Experience Description";"
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}

  ),;}
 is current: z.boolean () .default (false);,
  description: z.string () .optional ();
location: z.string () .optional () 
});
type FormValues = z.infer<typeof formSchema>;
}/> <FormField  <FormMessage /> ) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField  <FormMessage /> )"
}/> <FormField <FormLabel>Current Position <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> )"
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>)"
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />    <PopoverContent className="w-auto p-0" align="start" > <Calendar />   <FormMessage /> )"

  !watchIsCurrent && (<FormField control= {
  form.control;)
}<FormLabel>End Date <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) 
}</div> <FormField <FormLabel>Description <div className="flex gap-2" > <AIEnhancementButton > AI Writer  </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {"

}/>  <FormMessage /> ) 
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>)"
} </div> </form>  <AIEnhancementDialog /> </>) 
"`;