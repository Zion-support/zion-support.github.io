import {useState} from 'react';
import {zodResolver} from "@hookform/resolvers/zod";"
import {useForm} from "react-hook-form";"
import {z} from "zod";"
import {WorkExperience} from "@/types/resume";"
import {Button} from "@/components/ui/button";"
import {Calendar} from "@/components/ui/calendar";"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";"
import {Input} from "@/components/ui/input";"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";"
import {Textarea} from "@/components/ui/textarea";"
import {cn} from "@/lib/utils";"
import {Switch} from "@/components/ui/switch";"
import {format} from "date-fns";"
import {CalendarIcon, Loader2} from "lucide-react";"
import {AIEnhancementButton} from "@/components/ai-enhancement/AIEnhancementButton";"
import {AIEnhancementDialog} from "@/components/ai-enhancement/AIEnhancementDialog";
import { useState } from 'react',import { useState } from 'react',
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { WorkExperience } from "@/types/resume",
import { Button } from "@/components/ui/button",
import { Calendar } from "@/components/ui/calendar",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Textarea } from "@/components/ui/textarea",
import { cn } from "@/lib/utils",
import { Switch } from "@/components/ui/switch",
import { format } from "date-fns",
import { CalendarIcon, Loader2 } from "lucide-react",export function WorkExperienceItemForm({;
  initialData;
  onSubmit;
export function WorkExperienceItemForm({}
  initialData,
  onSubmit,
  onCancel}: WorkExperienceItemFormProps) {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),

  onCancel}: WorkExperienceItemFormProps) {  return (
    <>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleFormSubmit)} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField
              control={form && form.control}
              name="company_name"  onCancel}: WorkExperienceItemFormProps) {;
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);
  return (
    <>;
      <Form {...form}>;"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e && e.g. Acme Corporation" {...field} />;                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;

            <FormField
              control={form && form.control}
              name="role_title"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;

                    <Input placeholder="e.g. Senior Developer" {...field} />;







}
;
      <AIEnhancementDialog;"
        title="Enhance Work Experience Description";
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}

        defaultOptions={{;"
          enhancementType:"work-description",;"
          content:form.getValues("description") || "",;`
          context:`${watchRoleTitle} at ${watchCompanyName}`}}"


        initialContent={form.getValues("description") || ""}
      />;
    </>;
  ),;}
 is current: z.boolean () .default (false),
  description: z.string () .optional ();
location: z.string () .optional () 
});
type FormValues = z.infer<typeof formSchema>;
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {
  await onSubmit (workExperience) 
};
setIsEnhancementDialogOpen (false)
};
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> {
  !watchIsCurrent && (<FormField control= {
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
}
}

;
