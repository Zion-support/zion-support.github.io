<<<<<<< HEAD
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { WorkExperience } from '@/types/resume'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import { format } from 'date-fns'

import { CalendarIcon, Loader2 } from 'lucide-react'
import { AIEnhancementButton } from '@/components/ai-enhancement/AIEnhancementButton'
import { AIEnhancementDialog } from '@/components/ai-enhancement/AIEnhancementDialog'
=======
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
import { CalendarIcon, Loader2 } from 'lucide-react'
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
// Define form schema

const formSchema = z.object({
<<<<<<< HEAD
  company_name: z.string().min(1, 'Company name is required')
  role_title: z.string().min(1, 'Role title is required')
  start_date: z.date({
    required_error: "Start date is required"}),
  end_date: z.date().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
<<<<<<< HEAD
  location: z.string().optional(),
})
type FormValues = z.infer<typeof formSchema>
interface WorkExperienceItemFormProps {
  initialData?: WorkExperience
  onSubmit: (data: WorkExperience) => Promise<void>
  onCancel: () => void
export function WorkExperienceItemForm({
  initialData
  onSubmit
  onCancel
}: WorkExperienceItemFormProps) {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false)
=======
  location: z.string().optional()}),

type FormValues = z.infer<typeof formSchema>,

interface WorkExperienceItemFormProps {
  initialData?: WorkExperience,
  onSubmit: (data: WorkExperience) => Promise<void>,
  onCancel: () => void
}

export function WorkExperienceItemForm({
  initialData,
  onSubmit,
  onCancel}: WorkExperienceItemFormProps) {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      company_name: initialData?.company_name || "",
      role_title: initialData?.role_title || "",
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      is_current: initialData?.is_current || false,
<<<<<<< HEAD
      description: initialData?.description || '',
      location: initialData?.location || '',
    },
  })
  const { isSubmitting } = form.formState
  const watchIsCurrent = form.watch('is_current')
  const watchRoleTitle = form.watch('role_title')
  const watchCompanyName = form.watch('company_name')
  const handleFormSubmit = async (values: FormValues,) => {
    // Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
      id: initialData?.id
      company_name: values.company_name, // Required
      role_title: values.role_title, // Required
      start_date: values.start_date, // Required
      end_date: values.end_date, // Optional
      is_current: values.is_current, // Required
      description: values.description, // Optional
      location: values.location, // Optional
    }
    await onSubmit(workExperience)
  }
  const handleAIEnhancement = (content: string) => {
    form.setValue('description', content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)
  }
=======
      description: initialData?.description || "",
      location: initialData?.location || ""}}),
  
  const { isSubmitting } = form.formState,
  const watchIsCurrent = form.watch("is_current"),
  const watchRoleTitle = form.watch("role_title"),
  const watchCompanyName = form.watch("company_name"),

  const handleFormSubmit = async (values: FormValues) => {
    // Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
      id: initialData?.id,
      company_name: values.company_name,  // Required
      role_title: values.role_title,      // Required
      start_date: values.start_date,      // Required
      end_date: values.end_date,          // Optional
      is_current: values.is_current,      // Required
      description: values.description,    // Optional
      location: values.location,          // Optional
    },
    
    await onSubmit(workExperience)
  },

  const handleAIEnhancement = (content: string) => {
    form.setValue("description", content, { shouldDirty: true }),
    setIsEnhancementDialogOpen(false)
  },

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
<<<<<<< HEAD
              name='company_name'
              render={({ field }: { field: any }) => (                <FormItem>
=======
              name="company_name"
              render={({ field }: { field: any }) => (
                <FormItem>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
<<<<<<< HEAD
              )}
            />
            <FormField
              control={form.control}
              name='role_title'
              render={({ field }: { field: any }) => (                <FormItem>
=======
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
import { CalendarIcon, Loader2 } from 'lucide-react';
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;
// Define form schema;
const formSchema = z.object({;
  company_name: z.string().min(1, "Company name is required"),;
  role_title: z.string().min(1, "Role title is required"),;
  start_date: z.date({;
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
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),;
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,;
      is_current: initialData?.is_current || false,;
      description: initialData?.description || "",;
      location: initialData?.location || ""}}),;
  const { isSubmitting } = form.formState,;
  const watchIsCurrent = form.watch("is_current"),;
  const watchRoleTitle = form.watch("role_title"),;
  const watchCompanyName = form.watch("company_name"),;
  const handleFormSubmit = async (values: FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {;
      id: initialData?.id,;
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;
    },;
    await onSubmit(workExperience);
  },;
  const handleAIEnhancement = (content: string) => {;
    form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);
  },;
  return (;
    <>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="company_name";
              render={({ field }: { field: any }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            <FormField;
              control={form.control}
              name="role_title"
              render={({ field }: { field: any }) => (
                <FormItem>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Senior Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='location'
              render={({ field }: { field: any }) => (                <FormItem>
=======

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }: { field: any }) => (
                <FormItem>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
<<<<<<< HEAD
            />
            <FormField
              control={form.control}
              name='is_current'
              render={({ field }: { field: any }) => (
                <FormItem className='flex flex-col'>                  <FormLabel>Current Position</FormLabel>
                  <div className='flex items-center gap-2 h-10'>
                    <Switch
                      aria-label='Current position'
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id='current-position'                    />
                    <label
                      htmlFor='current-position'
                      className='text-sm text-muted-foreground'
                    >
=======
            />;
            <FormField;
              control={form.control}
              name="is_current"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Current Position</FormLabel>
                  <div className="flex items-center gap-2 h-10">
                    <Switch
                      aria-label="Current position"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="current-position"
                    />
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                      I currently work here
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='start_date'
              render={({ field }: { field: any }) => (
                <FormItem className='flex flex-col'>                  <FormLabel>Start Date</FormLabel>
=======

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
<<<<<<< HEAD
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal'
                            !field.value && 'text-muted-foreground'
                          )}                        >
=======
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                          {field.value ? (
                            format(field.value, "MMM yyyy")
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
<<<<<<< HEAD
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        captionLayout='dropdown-buttons'
                        fromYear={1990}
                        toYear={new Date().getFullYear()}                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!watchIsCurrent && (
              <FormField
                control={form.control}
                name='end_date'
                render={({ field }: { field: any }) => (
                  <FormItem className='flex flex-col'>                    <FormLabel>End Date</FormLabel>
=======
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={1990}
                        toYear={new Date().getFullYear()}
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            {!watchIsCurrent && (;
              <FormField;
                control={form.control}
                name="end_date"
                render={({ field }: { field: any }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
<<<<<<< HEAD
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal'
                              !field.value && 'text-muted-foreground'
                            )}                          >
=======
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                            {field.value ? (
                              format(field.value, "MMM yyyy")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
<<<<<<< HEAD
                          mode='single'
                          selected={field.value |undefined}
                          onSelect={field.onChange}
                          initialFocus
                          captionLayout='dropdown-buttons'
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={date => date > new Date()}                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
=======
                          mode="single"
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
                  </FormItem>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                )}
              />
            )}
<<<<<<< HEAD
          </div>
          <FormField
            control={form.control}
            name='description'
            render={({ field }: { field: any }) => (              <FormItem>
                <div className='flex justify-between items-center'>
=======
          </div>;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (
              <FormItem>
                <div className="flex justify-between items-center">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  <FormLabel>Description</FormLabel>
                  <div className="flex gap-2">
                    <AIEnhancementButton
                      options={{
<<<<<<< HEAD
                        enhancementType: 'work-description'
                        content: field.value |''
                        context: `${watchRoleTitle} at ${watchCompanyName}`
                      }}
<<<<<<< HEAD
                      onEnhanced={content =>
                        form.setValue('description', content, {
                          shouldDirty: true
                        })
                      }
                      buttonText='Enhance with AI'
                    />
                    <Button
                      type='button'
                      variant='outline'
                      size='sm'
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className='text-xs'                    >
=======
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty: true })}
                      buttonText="Enhance with AI"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className="text-xs"
                    >
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                      AI Writer
                    </Button>
                  </div>
                </div>
                <FormControl>
                  <Textarea
<<<<<<< HEAD
                    placeholder='Describe your responsibilities, achievements, and skills used in this role...'
                    className='min-h-[150px]'
=======
                    placeholder="Describe your responsibilities, achievements, and skills used in this role..."
                    className="min-h-[150px]"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
<<<<<<< HEAD
          <div className='flex justify-end gap-2'>
            <Button type='button' variant='outline' onClick={onCancel}>
=======
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>Save</>
              )}
            </Button>
          </div>
        </form>
      </Form>
      <AIEnhancementDialog
<<<<<<< HEAD
        title='Enhance Work Experience Description'
=======
        title="Enhance Work Experience Description"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{
<<<<<<< HEAD
          enhancementType: 'work-description',
          content: form.getValues('description') || '',
          context: `${watchRoleTitle} at ${watchCompanyName}`,
        }}
        initialContent={form.getValues('description') |''}      />

    </>
  )
is current: z.boolean () .default (false)
description: z.string () .optional ()
location: z.string () .optional ()
})
type FormValues = z.infer<typeof formSchema>
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {
  await onSubmit (workExperience)
}
setIsEnhancementDialogOpen (false)
}
}/> <FormField </FormControl> <FormMessage /> </FormItem>)
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) "
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/> {
  !watchIsCurrent && (<FormField control= {
  form.control
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/>) "
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {
  ...field
}/> </FormControl> <FormMessage /> </FormItem>) "
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) 
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) ;
}";
};
};
=======
          enhancementType: "work-description",
          content: form.getValues("description") || "",
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues("description") || ""}
      />
    </>
  )
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
