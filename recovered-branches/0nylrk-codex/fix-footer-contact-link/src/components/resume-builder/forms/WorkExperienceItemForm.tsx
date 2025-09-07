


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

'
import { useState } from 'react',

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


// Define form schema

const formSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  role_title: z.string().min(1, "Role title is required"),
  start_date: z.date({

    required_error: "Start date is required"}),
  end_date: z.date().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type FormValues = z.infer<typeof formSchema>,


export function WorkExperienceItemForm({;

  initialData;
  onSubmit;
export function WorkExperienceItemForm({}
  initialData,
  onSubmit,

  onCancel}: WorkExperienceItemFormProps) {

  onCancel}: WorkExperienceItemFormProps) {


  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {


      company_name: initialData?.company_name || "",

      role_title: initialData?.role_title || "",
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      is_current: initialData?.is_current || false,"
      description: initialData?.description || "","
      location: initialData?.location || ""}}),
  
  const { isSubmitting } = form.formState,"
  const watchIsCurrent = form.watch("is_current"),"
  const watchRoleTitle = form.watch("role_title"),"
  const watchCompanyName = form.watch("company_name"),


  const handleFormSubmit = async (values: FormValues) => {
    // Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
      id: initialData?.id
      company_name: values.company_name,  // Required
      role_title: values.role_title,      // Required
      start_date: values.start_date,      // Required
      end_date: values.end_date,          // Optional
      is_current: values.is_current,      // Required
      description: values.description,    // Optional
      location: values.location,          // Optional


  const handleFormSubmit = async (values: FormValues) => {}
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {}
      id: initialData?.id;
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;


    },
    
    await onSubmit(workExperience)
  },



  const handleAIEnhancement = (content: string) => {
    form.setValue("description", content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)

  },


  return (
    <>
      <Form {...form}>"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField;
              control={form.control}"

              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>

                    <Input placeholder="e.g. Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>

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
// Define form schema;
const formSchema = z.object({;"
  company_name: z.string().min(1, "Company name is required"),;"
  role_title: z.string().min(1, "Role title is required"),;
  start_date: z.date({;"

    required_error: "Start date is required"}),;
  end_date: z.date().optional(),;
  is_current: z.boolean().default(false),;
  description: z.string().optional(),;
  location: z.string().optional()}),;
type FormValues = z.infer<typeof formSchema>,;
interface WorkExperienceItemFormProps {;
  initialData?: WorkExperience,;
  onSubmit: (data: WorkExperience) => Promise<void>,;
  onCancel: () => void;
}
;

export function WorkExperienceItemForm({;
  initialData,;
  onSubmit,;
  onCancel}: WorkExperienceItemFormProps) {;
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),;

  // Set up form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      company_name: initialData?.company_name || "",;
      role_title: initialData?.role_title || "",;

      start_date: initialData?.start_date ? new Date(initialData && initialData.start_date) : new Date(),;
      end_date: initialData?.end_date ? new Date(initialData && initialData.end_date) : undefined,;
      is_current: initialData?.is_current || false,;
      description: initialData?.description || "",;
      location: initialData?.location || ""}}),;

  const { isSubmitting } = form && form.formState;
  const watchIsCurrent = form && form.watch("is_current");
  const watchRoleTitle = form && form.watch("role_title");
  const watchCompanyName = form && form.watch("company_name");

  const handleFormSubmit = async (values: FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {;
      id: initialData?.id,;

      company_name: values && values.company_name,  // Required;
      role_title: values && values.role_title,      // Required;
      start_date: values && values.start_date,      // Required;
      end_date: values && values.end_date,          // Optional;
      is_current: values && values.is_current,      // Required;
      description: values && values.description,    // Optional;
      location: values && values.location,          // Optional;
    };

    await onSubmit(workExperience);
  };

  const handleAIEnhancement = (content: string) => {;
    form && form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);
  };

    <>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleFormSubmit)} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField
              control={form && form.control}

  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);

  // Set up form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      company_name: initialData?.company_name || "",;
      role_title: initialData?.role_title || "",;


      start_date: initialData?.start_date ? new Date(initialData && initialData.start_date) : new Date(),;
      end_date: initialData?.end_date ? new Date(initialData && initialData.end_date) : undefined,;
      is_current: initialData?.is_current || false,;
      description: initialData?.description || "",;
      location: initialData?.location || ""}}),;

  const { isSubmitting } = form && form.formState;
  const watchIsCurrent = form && form.watch("is_current");
  const watchRoleTitle = form && form.watch("role_title");
  const watchCompanyName = form && form.watch("company_name");

  const handleFormSubmit = async (values: FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {;
      id: initialData?.id,;


      company_name: values && values.company_name,  // Required;
      role_title: values && values.role_title,      // Required;
      start_date: values && values.start_date,      // Required;
      end_date: values && values.end_date,          // Optional;
      is_current: values && values.is_current,      // Required;
      description: values && values.description,    // Optional;
      location: values && values.location,          // Optional;
    };

    await onSubmit(workExperience);
  },;
  const handleAIEnhancement = (content: string) => {;
    form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);

  };

    <>;
      <Form {...form}>;"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;

                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;

            <FormField
              control={form && form.control}
              name="role_title"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;

                    <Input placeholder="e && e.g. Senior Developer" {...field} />;

                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}


import { AIEnhancementDialog } from '@/components / ai - enhancement / AIEnhancementDialog';
// Define form schema;
const form_schema = z.object ({"
  company_name: z.string ().min (1, "Company name is required");"
  role_title: z.string ().min (1, "Role title is required");
  start_date: z.date ({"
    required_error: "Start date is required"}),
  end_date: z.date ().optional (),
  is_current: z.boolean ().default (false),
  description: z.string ().optional (),
  location: z.string ().optional ()}),
type FormValues = z.infer < typeof form_schema>;
;
interface WorkExperienceItemFormProps {}
  initial_data?: WorkExperience;
  on_submit: (data: WorkExperience) => Promise < void>,
  on_cancel: () => void;
}
export /**;
 * WorkExperienceItemForm - Function description;
 */
function WorkExperienceItemForm() {}
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState (false);
;
  // Set up form;
  const form = use_form < FormValues>({}
    resolver: zod_resolver (form_schema),
    default_values: {"
      company_name: initial_data?.company_name || "","
      role_title: initial_data?.role_title || "",
      start_date: initial_data?.start_date ? new Date (initial_data.start_date) : new Date (),
      end_date: initial_data?.end_date ? new Date (initial_data.end_date) : undefined,
      is_current: initial_data?.is_current || false,"
      description: initial_data?.description || "","
      location: initial_data?.location || ""}}),
  const { is_submitting } = form.form_state;"
  const watchIsCurrent = form.watch ("is_current");"
  const watchRoleTitle = form.watch ("role_title");"
  const watchCompanyName = form.watch ("company_name");
;
  const handleFormSubmit = async (values: FormValues) => {}
    // Create a properly typed WorkExperience object with all required fields;
    const work_experience: WorkExperience = {}
      id: initial_data?.id,
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;
    }
;
    await on_submit (work_experience);
  }
;
  const handleAIEnhancement = (content: string) =>: any {"
    form.set_value ("description", content, { should_dirty: true }),
    setIsEnhancementDialogOpen (false);
  }
;
  return (
    <>;

            <FormField;
              control={form.control}"
              name="company_name";
              render={({ field }) => (


              control={form.control}

              name="role_title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Role Title</FormLabel>;
                  <FormControl>;"
                    <Input placeholder="e.g. Senior Developer" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;

            <FormField;
              control={form.control}"
              name="location";
              render={({ field }) => (

                <FormItem>;
                  <FormLabel > Location</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;

              control={form.control}
              name="is_current";
              render={({ field }) => (
                <FormItem className="flex flex - col">;
                  <FormLabel > Current Position</FormLabel>;
                  <div className="flex items - center gap - 2 h - 10">;
                    <Switch;
                      checked={field.value}
            />;
            <FormField
              control={form && form.control}
              name="is_current"
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Current Position</FormLabel>;
                  <div className="flex items-center gap-2 h-10">;
                    <Switch
                      checked={field && field.value}
                      onCheckedChange={field && field.onChange}
                      id="current-position"
                    />;
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;


                      onCheckedChange={field.on_change}
                      id="current - position";
                    />;
                    <label html_for="current - position" className="text - sm text - muted - foreground">;


                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;


            <FormField;
              control={form && form.control}"
              name="is_current"
              render={({ field }) => (;"
                <FormItem className="flex flex-col">;
                  <FormLabel>Current Position</FormLabel>;"
                  <div className="flex items-center gap-2 h-10">;
                    <Switch;
                      checked={field && field.value}
                      onCheckedChange={field && field.onChange}"
                      id="current-position"
                    />;"
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;


                      I currently work here;
                    </label>;
                  </div>;
                  <FormMessage />;

                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;

              <FormField
                control={form && form.control}
                name="end_date"

              <FormField
                control={form && form.control}

                name="end_date"

                render={({ field }) => (;

                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;


                              <span>Select date</span>;

                          <Button"
                            variant={"outline"}
                            className={cn(

                            )}"

                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;"
                      <PopoverContent className="w-auto p-0" align="start">;


                        <Calendar"
                          mode="single"

                          initialFocus"


                          captionLayout="dropdown-buttons"
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}


                          mode="single";
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus;"

                          captionLayout="dropdown-buttons";
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}


                        />;

                      </PopoverContent>;
                    </Popover>;


            control={form && form.control}
            name="description"
          <FormField
            control={form && form.control}
            name="description"


            render={({ field }) => (;
              <FormItem>;"
                <div className="flex justify-between items-center">;
                  <FormLabel>Description</FormLabel>;"
                  <div className="flex gap-2">;


                    <AIEnhancementButton;
                      options={{}
                        context: `${watchRoleTitle} at ${watchCompanyName}`
                      }}"
                      onEnhanced={(content) => form && form.setValue("description", content, { shouldDirty: true })}"
                      buttonText="Enhance with AI";
                    />;

                  </FormItem>)}
              />)}
          </div>;
          <FormField;

                    <AIEnhancementButton;
                      options={{;
                        enhancementType:"work-description",;
                        content:field.value || "",;
                        context:`${watchRoleTitle} at ${watchCompanyName}`;
                      }}
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty:true })}
                      buttonText="Enhance with AI";
                    />;
                    <Button;
                      type="button";
                      variant="outline";
                      size="sm";

                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className="text-xs";

                    >;

                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;


                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;


            </Button>;
          </div>;
        </form>;
      </Form>;


        initialContent={form && form.getValues("description") || ""}
      />;
    </>;
  );
}


        title="Enhance Work Experience Description";
        is_open={isEnhancementDialogOpen}
        on_close={() => setIsEnhancementDialogOpen (false)}
        on_apply={handleAIEnhancement}

        initial_content={form.get_values ("description") || ""}
      />;
    </>);
}

}
;


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

}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) 
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) 
}
}
}

;
