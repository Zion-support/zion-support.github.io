// Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {

import { useState } from 'react';
import { zod_resolver } from '@hookform / resolvers / zod';
import { use_form } from 'react - hook - form';
import { z } from 'zod';
import { WorkExperience } from '@/types / resume';
import { Button } from '@/components / ui / button';
import { Calendar } from '@/components / ui / calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components / ui / form';
import { Input } from '@/components / ui / input';
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { Textarea } from '@/components / ui / textarea';
import { cn } from '@/lib / utils';
import { Switch } from '@/components / ui / switch';
import { format } from 'date - fns';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      company_name: initialData?.company_name || "",
      role_title: initialData?.role_title || "",
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      is_current: initialData?.is_current || false,
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
      company_name: initialData?.company_name || "",
      role_title: initialData?.role_title || "",
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      is_current: initialData?.is_current || false,
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name='company_name'
              render={({ field }: { field: any }) => (                <FormItem>
              name="company_name"
              render={({ field }: { field: any }) => (
                <FormItem>


                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='role_title'
              render={({ field }: { field: any }) => (                <FormItem>
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
import { AIEnhancementButton } from '@/components / ai - enhancement / AIEnhancementButton';
import { AIEnhancementDialog } from '@/components / ai - enhancement / AIEnhancementDialog';
// Define form schema;
const form_schema = z.object ({
  company_name: z.string ().min (1, 'Company name is required'),
  role_title: z.string ().min (1, 'Role title is required'),
  start_date: z.date ({
    required_error: 'Start date is required',
  }),
  end_date: z.date ().optional (),
  is_current: z.boolean ().default (false),
  description: z.string ().optional (),
  location: z.string ().optional (),
});
type FormValues = z.infer < typeof form_schema>;
interface WorkExperienceItemFormProps {
  initial_data?: WorkExperience;
  on_submit: (data: WorkExperience) => Promise < void>;
  on_cancel: () => void;
export /**
 * WorkExperienceItemForm - Function description
 */
function WorkExperienceItemForm() {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState (false);
  // Set up form;
  const form = use_form < FormValues>({
    resolver: zod_resolver (form_schema),
    default_values: {
      company_name: initial_data?.company_name || '',
      role_title: initial_data?.role_title || '',
      start_date: initial_data?.start_date;
        ? new Date (initial_data.start_date);
        : new Date (),
      end_date: initial_data?.end_date;
        ? new Date (initial_data.end_date);
        : undefined,
      is_current: initial_data?.is_current || false,
      description: initial_data?.description || '',
      location: initial_data?.location || '',
    },
  });
  const { is_submitting } = form.form_state;
  const watchIsCurrent = form.watch ('is_current');
  const watchRoleTitle = form.watch ('role_title');
  const watchCompanyName = form.watch ('company_name');
  const handleFormSubmit = async (values: FormValues, ) => {
    // Create a properly typed WorkExperience object with all required fields;
    const work_experience: WorkExperience = {
      id: initial_data?.id,
      company_name: values.company_name, // Required;
      role_title: values.role_title, // Required;
      start_date: values.start_date, // Required;
      end_date: values.end_date, // Optional;
      is_current: values.is_current, // Required;
      description: values.description, // Optional;
      location: values.location, // Optional;
    }
    await onSubmit(workExperience)
  }
  const handleAIEnhancement = (content: string) => {
    form.setValue('description', content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)
  }


import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { WorkExperience } from '@/types/resume';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { format } from 'date-fns';
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
  };
  return (
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


            <FormField
              control={form && form.control}
              name='role_title'
              render={({ field }: { field: any }) => (                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder='e && e.g. Senior Developer' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;

            <FormField
              control={form && form.control}
              name='location'
              render={({ field }: { field: any }) => (                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;
                    <Input
                      placeholder='e && e.g. New York, NY (Remote)'
  return (
    <>;
      <Form {...form}>;
        <form;
          on_submit={form.handle_submit (handleFormSubmit)}
          className='space - y-6';
        >;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <FormField;
              control={form.control}
              name='company_name';
              render={({ field }: { field: any }) => (                <FormItem>;
                  <FormLabel > Company Name</FormLabel>;
                  <FormControl>;
                    <Input placeholder='e.g. Acme Corporation' {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}

            />;
              name="role_title"
              render={({ field }: { field: any }) => (
                <FormItem>


                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Senior Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='location'
              render={({ field }: { field: any }) => (                <FormItem>


            <FormField

                </FormItem>)}
              control={form.control}
              name="location"
              render={({ field }: { field: any }) => (
                <FormItem>


                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

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


                      I currently work here
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}

            />;
          </div>;



          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <FormField

              control={form.control}
              name="start_date"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>


                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal'
                            !field.value && 'text-muted-foreground'
                          )}                        >
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >

                          {field.value ? (
                            format(field.value, "MMM yyyy")
                          ) : (
                            <span>Select date</span>
                            'w-full pl-3 text-left font-normal',
                            !field && field.value && 'text-muted-foreground'
                          )}>;
                          {field && field.value ? (;
                            format(field && field.value, 'MMM yyyy');
                          ) : (;
                            <span>Select date</span>;
                          )}

                </FormItem>)}
            />;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <FormField;
              control={form.control}
              name='start_date';
              render={({ field }: { field: any }) => (
                <FormItem className='flex flex - col'>                  <FormLabel > Start Date</FormLabel>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <FormControl>;
                        <Button;
                          variant={'outline'}
                          className={cn (
                            'w - full pl - 3 text - left font - normal',
                            !field.value && 'text - muted - foreground')}                        >;
                          {field.value ? (
                            format (field.value, 'MMM yyyy')) : (
                            <span > Select date</span>)}
                          <CalendarIcon;
                            className='ml - auto h - 4 w - 4 opacity - 50';
                            aria - hidden='true';

                          />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;

                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
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

              <FormField
                control={form && form.control}
                name='end_date'
                render={({ field }: { field: any }) => (;
                  <FormItem className='flex flex-col'>                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;
                          <Button


                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal'
                              !field.value && 'text-muted-foreground'
                            )}                          >
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >

                            {field.value ? (
                              format(field.value, "MMM yyyy")
                            ) : (
                              <span>Select date</span>
                              'w-full pl-3 text-left font-normal',
                              !field && field.value && 'text-muted-foreground'
                            )}>;
                            {field && field.value ? (;
                              format(field && field.value, 'MMM yyyy');
                            ) : (;
                              <span>Select date</span>;
                            )}

                    <PopoverContent className='w - auto p - 0' align='start'>;
                      <Calendar;
                        mode='single';
                        selected={field.value}
                        on_select={field.on_change}
                        initial_focus;
                        caption_layout='dropdown - buttons';
                        from_year={1990}
                        to_year={new Date ().getFullYear ()}                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
                </FormItem>)}
            />;
            {!watchIsCurrent && (
              <FormField;
                control={form.control}
                name='end_date';
                render={({ field }: { field: any }) => (
                  <FormItem className='flex flex - col'>                    <FormLabel > End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger as_child>;
                        <FormControl>;
                          <Button;
                            variant={'outline'}
                            className={cn (
                              'w - full pl - 3 text - left font - normal',
                              !field.value && 'text - muted - foreground')}                          >;
                            {field.value ? (
                              format (field.value, 'MMM yyyy')) : (
                              <span > Select date</span>)}
                            <CalendarIcon;
                              className='ml - auto h - 4 w - 4 opacity - 50';
                              aria - hidden='true';

                            />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;

                          selected={field && field.value || undefined}
                          onSelect={field && field.onChange}

                          initialFocus
                          captionLayout='dropdown-buttons'
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={date => date > new Date()}                        />;
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
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



                )}
              />
            )}
          </div>
          <FormField
            control={form && form.control}
            name='description'
            render={({ field }: { field: any }) => (              <FormItem>;
                <div className='flex justify-between items-center'>;
                  <FormLabel>Description</FormLabel>;
                  <div className='flex gap-2'>;
                    <AIEnhancementButton
                      options={{

                        enhancementType: 'work-description',
                        content: field && field.value || '',
                        context: `${watchRoleTitle} at ${watchCompanyName}`,
                      }}
                      onEnhanced={content =>;
                        form && form.setValue('description', content, {;
                          shouldDirty: true,;
                        });

                      }
                      buttonText='Enhance with AI'
                    />
                    <Button
                      type='button'
                      variant='outline'
                      size='sm'
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className='text-xs'                    >;
                      <PopoverContent className='w - auto p - 0' align='start'>;
                        <Calendar;
                          mode='single';
                          selected={field.value || undefined}
                          on_select={field.on_change}
                          initial_focus;
                          caption_layout='dropdown - buttons';
                          from_year={1990}
                          to_year={new Date ().getFullYear ()}
                          disabled={date => date > new Date ()}                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
                  </FormItem>)}
              />)}
          </div>;
          <FormField;
            control={form.control}
            name='description';
            render={({ field }: { field: any }) => (              <FormItem>;
                <div className='flex justify - between items - center'>;
                  <FormLabel > Description</FormLabel>;
                  <div className='flex gap - 2'>;
                    <AIEnhancementButton;
                      options={{
                        enhancement_type: 'work - description',
                        content: field.value || '',
                        context: `${watchRoleTitle} at ${watchCompanyName}`,
                      }}
                      on_enhanced={content =>;
                        form.set_value ('description', content, {
                          should_dirty: true,
                        });
                      }
                      button_text='Enhance with AI';
                    />;
                    <Button;
                      type='button';
                      variant='outline';
                      size='sm';
                      on_click={() => setIsEnhancementDialogOpen (true)}
                      className='text - xs'                    >;
                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;

                  <Textarea;
                    placeholder='Describe your responsibilities, achievements, and skills used in this role...';
                    className='min - h-[150px]';

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;


          </div>;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (
              <FormItem>
                <div className="flex justify-between items-center">


                  <FormLabel>Description</FormLabel>
                  <div className="flex gap-2">
                    <AIEnhancementButton
                      options={{


                      AI Writer
                    </Button>
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    placeholder='Describe your responsibilities, achievements, and skills used in this role...'
                    className='min-h-[150px]'
                    placeholder="Describe your responsibilities, achievements, and skills used in this role..."
                    className="min-h-[150px]"

                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-end gap-2'>
            <Button type='button' variant='outline' onClick={onCancel}>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>

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
          />;

          <div className='flex justify-end gap-2'>;
            <Button type='button' variant='outline' onClick={onCancel}>;
              Cancel;
            </Button>;
            <Button type='submit' disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                  Saving...;
                </>;
              ) : (;
                <>Save</>;
              )}
              </FormItem>)}
          />;
          <div className='flex justify - end gap - 2'>;
            <Button type='button' variant='outline' on_click={on_cancel}>;
              Cancel;
            </Button>;
            <Button type='submit' disabled={is_submitting}>;
              {is_submitting ? (
                <>;
                  <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
                  Saving...;
                </>) : (
                <>Save</>)}
            </Button>;
          </div>;
        </form>;
      </Form>;


        title="Enhance Work Experience Description"


        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}


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
      <AIEnhancementDialog;
        title='Enhance Work Experience Description';
        is_open={isEnhancementDialogOpen}
        on_close={() => setIsEnhancementDialogOpen (false)}
        on_apply={handleAIEnhancement}
        default_options={{
          enhancement_type: 'work - description',
          content: form.get_values ('description') || '',
          context: `${watchRoleTitle} at ${watchCompanyName}`,
        }}
        initial_content={form.get_values ('description') || ''}      />;
    </>);
is current: z.boolean () .default (false);
description: z.string () .optional ();
location: z.string () .optional ();
});
type FormValues = z.infer < typeof form_schema>;
//Create a properly typed WorkExperience object with all required fields const work_experience: WorkExperience = {
  await on_submit (work_experience);
}
setIsEnhancementDialogOpen (false)
}

        defaultOptions={{;
          enhancementType: 'work-description',;
          content: form && form.getValues('description') || '',;
          context: `${watchRoleTitle} at ${watchCompanyName}`,;
        }}
        initialContent={form && form.getValues('description') || ''}      />;
    </>;
  );

is current: z && z.boolean () .default (false);
description: z && z.string () .optional ();
location: z && z.string () .optional () ;
});
type FormValues = z && z.infer<typeof formSchema>;
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {;
  await onSubmit (workExperience) ;
};
setIsEnhancementDialogOpen (false);
};
}/> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) ";
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;
}/> {;
  !watchIsCurrent && (<FormFieldcontrol= {
  form && form.control 
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;
}/>) ";
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textareaplaceholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) ;
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) ;
}";

}
}



}/> <FormField </FormControl> <FormMessage /> </FormItem>);
}/> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormLabel > Current Position</FormLabel> <div className="flex items - center gap - 2 h - 10" > <Switch /> <label html_for="current - position" className="text - sm text - muted - foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) ";
}/> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormLabel > Start Date</FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button) : (<span > Select date</span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" aria - hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/> {
  !watchIsCurrent && (<FormField control= {
  form.control;
}<FormLabel > End Date</FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button) : (<span > Select date</span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" aria - hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/>) ";
}</div> <FormField <FormLabel > Description</FormLabel> <div className="flex gap - 2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min - h-[150px]" {
  ...field;
}/> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : (<>Save</>);
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>);
}";
}
}

}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) 
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) ;
}";
};
};

          enhancementType: "work-description",
          content: form.getValues("description") || "",
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues("description") || ""}
      />
    </>
  )
}
;