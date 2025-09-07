// Set up form;
  const form = useForm<FormValues>({

    <>
      <Form {...form}>
)
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">"
</form>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
            <FormField;
              control={form.control}
"
              name="company_name""
              render={({ field }: { field: any }) => (

                <FormItem>



                  <FormLabel>Company Name
                  <FormControl>
                    <Input placeholder="e.g. Acme Corporation" {...field} />"

                  
                  <FormMessage />

                
type FormValues = z.infer < typeof form_schema>;
interface WorkExperienceItemFormProps {
  // TODO: Implement
}
  initial_data?: WorkExperience;)
  on_submit: (data: WorkExperience) => Promise < void>;,
  on_cancel: () => void;
export /**
 * WorkExperienceItemForm - Function description;
 */
function WorkExperienceItemForm() {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState (false);
  // Set up form;
  const form = use_form < FormValues>({)
    resolver: zod_resolver (form_schema),
    default_values: {,"
  company_name: initial_data?.company_name || ,
      role_title: initial_data?.role_title || ,
      start_date: initial_data?.start_date;
        ? new Date (initial_data.start_date);
        : new Date (),
      end_date: initial_data?.end_date;
        ? new Date (initial_data.end_date);
        : undefined,
      is_current: initial_data?.is_current || false,
      description: initial_data?.description || ,
      location: initial_data?.location || ,
    },
  });
  const { is_submitting } = form.form_state;
  const watchIsCurrent = form.watch ('is_current');
  const watchRoleTitle = form.watch ('role_title');
  const watchCompanyName = form.watch ('company_name');
  const handleFormSubmit = async (values: FormValues, ) => {
    // Create a properly typed WorkExperience object with all required fields;
    const work_experience: WorkExperience = {,
  id: initial_data?.id,
      company_name: values.company_name, // Required;
      role_title: values.role_title, // Required;
      start_date: values.start_date, // Required;
      end_date: values.end_date, // Optional;
      is_current: values.is_current, // Required;
      description: values.description, // Optional;
      location: values.location, // Optional;
    await onSubmit(workExperience)
  const handleAIEnhancement = (content: string) => {
    form.setValue('description', content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)


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
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { format } from 'date-fns';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;""
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;"
// Define form schema;
const formSchema = z.object({;)"
  company_name: z.string().min(1, "Company name is required"),;""
  role_title: z.string().min(1, "Role title is required"),;"
  start_date: z.date({;,)"
  required_error: "Start date is required"}),;"
  end_date: z.date().optional(),;
  is_current: z.boolean().default(false),;
  description: z.string().optional(),;
  location: z.string().optional()}),;
type FormValues = z.infer<typeof formSchema>,;
</typeof>
  onSubmit: (data: WorkExperience) => Promise<void>,;
</void>
  const form = useForm<FormValues>({;

    <>;
      <Form {...form}>;
)"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
              control={form.control}"
              name="company_name";"
              render={({ field }: { field: any }) => (;

                <FormItem>;

                  <FormLabel>Company Name;
                  <FormControl>;
                    <Input placeholder="e.g. Acme Corporation" {...field} />;"

                  ;
                  <FormMessage />;

              control={form && form.control}"
              name='role_title)
              render={({ field }: { field: any }) => (                <FormItem>;

                  <FormLabel>Role Title;

                    <Input placeholder='e && e.g. Senior Developer' {...field} />;


          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
              control={form && form.control}
              name='location)

                  <FormLabel>Location;

                    <Input;)
                      placeholder='e && e.g. New York, NY (Remote)
  return (


        <form;)
          on_submit={form.handle_submit (handleFormSubmit)}
          className='space - y-6';
        >;
</form>
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
              name='company_name';

                  <FormLabel > Company Name;

                    <Input placeholder='e.g. Acme Corporation' {...field} />;

                )}

            />;




                  <FormLabel>Role Title

                    <Input placeholder="e.g. Senior Developer" {...field} />"

                  

                






                  <FormLabel>Location
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />"

                  

                
              name="is_current""
                <FormItem className="flex flex-col">"

                  <FormLabel>Current Position"
                  <div className="flex items-center gap-2 h-10">"
                    <Switch;"
                      aria-label="Current position""
                      checked={field.value}

                      onCheckedChange={field.onChange}"
                      id="current-position""
                    />
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">"
</label>

                
          </div>;"
              name="start_date"")

                  <FormLabel>Start Date


                  <Popover>

                    <PopoverTrigger asChild>


                        <Button;"
                          variant={"outline"}"
                          className={cn("
                            "w-full pl-3 text-left font-normal",""
                            !field.value && "text-muted-foreground"")
                        >

                            <span>Select date</span>
                            <span>Select date</span>;
              name='start_date';

                <FormItem className='flex flex - col'>                  <FormLabel > Start Date;

                  <Popover>;

                    <PopoverTrigger as_child>;


                        <Button;
                          variant={'outline'}
                          className={cn (
                            'w - full pl - 3 text - left font - normal',')
                            !field.value && 'text - muted - foreground')}                        >;

                            <span > Select date</span>)}
                          <CalendarIcon;
                            className='ml - auto h - 4 w - 4 opacity - 50';
                            aria - hidden='true';

                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />"

                        
                      
                    <PopoverContent className="w-auto p-0" align="start">"

                      <Calendar;"
                        mode="single""
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus;"
                        captionLayout="dropdown-buttons""
                        fromYear={1990}
                        toYear={new Date().getFullYear()}



                name='end_date

                  <FormItem className='flex flex-col'>                    <FormLabel>End Date;


                      <PopoverTrigger asChild>;


                          <Button;)