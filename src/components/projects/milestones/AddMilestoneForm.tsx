// If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      })
    })
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const handleAddMilestone = (milestone: GeneratedMilestone) => {


    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })

type MilestoneFormValues = z.infer < typeof form_schema>;
import React from 'react';
import { use_form } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date - fns';
import { Button } from '@/components / ui / button';
import { Calendar } from '@/components / ui / calendar';
import {
<<<<<<< HEAD
<<<<<<< HEAD
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Popover;
  PopoverContent;
  PopoverTrigger} from '@/components/ui/popover'; import { AIMilestoneGenerator } from './AIMilestoneGenerator'
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator'
const formSchema = z.object({
  title: z.string().min(1, 'Title is required')
  description: z.string().optional()
  due_date: z.date().optional()
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')})
type MilestoneFormValues = z.infer<typeof formSchema>
interface AddMilestoneFormProps {
  onSubmit: (data: MilestoneFormValues,) => void
  isSubmitting: boolean
  onCancel?: () => void
  projectScope?: string
  projectStartDate?: string
  projectEndDate?: string
  projectType?: string
}
export function AddMilestoneForm({
  onSubmit
  isSubmitting
  onCancel
  projectScope = ''
  projectStartDate = ''
  projectEndDate = ''
  projectType = 'Other'
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: ''
      description: ''
      amount: 0}})
  const handleSubmit = (values: MilestoneFormValues) => {
      title: '',;
      description: '',;
      amount: 0}});
  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values);    form.reset()
  }
  const handleAddMilestones = (milestones: GeneratedMilestone[],) => {
    // If there's only one milestone, submit it directly
    if (milestones.length === 1) {
      const milestone = milestones[0]
      if (milestone) {
        onSubmit({
          title: milestone.title
          description: milestone.description
          due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
          amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
        })
        return
      }
    }
        return
      }
    }
import React from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns',;
import { Button } from '@/components/ui/button',;
import { Calendar } from '@/components/ui/calendar',;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
  Popover;
  PopoverContent;
  PopoverTrigger} from '@/components / ui / popover'; import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';
const form_schema = z.object ({
  title: z.string ().min (1, 'Title is required');
  description: z.string ().optional (),
  due_date: z.date ().optional (),
  amount: z.coerce.number ().min (0, 'Amount must be greater than or equal to 0')});
type MilestoneFormValues = z.infer < typeof form_schema>;
interface AddMilestoneFormProps {
  on_submit: (data: MilestoneFormValues, ) => void,
  is_submitting: boolean,
  on_cancel?: () => void;
  project_scope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  project_type?: string;
}
export /**
 * AddMilestoneForm - Function description
 */
function AddMilestoneForm() {
  const form = use_form < MilestoneFormValues>({
    resolver: zod_resolver (form_schema),
    default_values: {
      title: '',
      description: '',
      amount: 0}}),
  const handle_submit = (values: MilestoneFormValues) =>: any {
    on_submit (values);    form.reset ();
  }
  const handleAddMilestones = (milestones: GeneratedMilestone[], ) =>: any {
    // If there's only one milestone, submit it directly;
    // Check condition
if ( {) {
  $2
}
      const milestone = milestones[0];
      // Check condition
if ( {) {
  $2
}
        on_submit ({
          title: milestone.title,
          description: milestone.description,
          due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
          amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
        });
        return;
      }
    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // If there are multiple milestones, submit them one by one;
    milestones.for_each (milestone => {
      on_submit ({
        title: milestone.title,
        description: milestone.description,
        due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
        amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
      });
    });
  }
  const handleAddMilestone = (milestone: GeneratedMilestone, ) =>: any {
    on_submit ({
      title: milestone.title,
      description: milestone.description,
      due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
      amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });

  }
type MilestoneFormValues = z && z.infer<typeof formSchema>;
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {;
<<<<<<< HEAD
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger} from '@/components/ui/popover',;
import { AIMilestoneGenerator } from './AIMilestoneGenerator',;
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',;
const formSchema = z.object({;
  title: z.string().min(1, 'Title is required'),;
  description: z.string().optional(),;
  due_date: z.date().optional(),;
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),;
type MilestoneFormValues = z.infer<typeof formSchema>,;
interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues) => void,;
  isSubmitting: boolean,;
  onCancel?: () => void,;
  projectScope?: string,;
  projectStartDate?: string,;
  projectEndDate?: string,;
  projectType?: string;
}
;
export function AddMilestoneForm({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope = '',;
  projectStartDate = '',;
  projectEndDate = '',;
  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: '',;
      description: '',;
      amount: 0}}),;
  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values),;
    form.reset();
  },;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones.length === 1) {;
      const milestone = milestones[0],;
      if (milestone) {;
        onSubmit({;
          title: milestone.title,;
          description: milestone.description,;
          due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,;
          amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
        }),;
<<<<<<< HEAD
      }
    }

  }
  const handleAddMilestone = (milestone: GeneratedMilestone,) => {
ursor/fix-website-loading-errors-and-merge-6662
    onSubmit({
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
  }
type MilestoneFormValues = z && z.infer<typeof formSchema>;
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
        return
      }
    }
import React from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns',;
import { Button } from '@/components/ui/button',;
import { Calendar } from '@/components/ui/calendar',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger} from '@/components/ui/popover',;
import { AIMilestoneGenerator } from './AIMilestoneGenerator',;
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',;
const formSchema = z.object({;
  title: z.string().min(1, 'Title is required'),;
  description: z.string().optional(),;
  due_date: z.date().optional(),;
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),;
type MilestoneFormValues = z.infer<typeof formSchema>,;
interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues) => void,;
  isSubmitting: boolean,;
  onCancel?: () => void,;
  projectScope?: string,;
  projectStartDate?: string,;
  projectEndDate?: string,;
  projectType?: string;
}
;
export function AddMilestoneForm({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope = '',;
  projectStartDate = '',;
  projectEndDate = '',;
=======
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Popover;
  PopoverContent;
  PopoverTrigger} from '@/components/ui/popover';import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = z && z.object({;
  title: z && z.string().min(1, 'Title is required');
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});

type MilestoneFormValues = z && z.infer<typeof formSchema>;

interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues,) => void,;
  isSubmitting: boolean,;
  onCancel?: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  projectType?: string;
}

export function AddMilestoneForm(): any ({;
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope = '';
  projectStartDate = '';
  projectEndDate = '';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: '',;
      description: '',;
      amount: 0}}),;
  const handleSubmit = (values: MilestoneFormValues) => {;
<<<<<<< HEAD
    onSubmit(values),;
    form.reset();
  },;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones.length === 1) {;
      const milestone = milestones[0],;
      if (milestone) {;
        onSubmit({;
          title: milestone.title,;
          description: milestone.description,;
          due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,;
          amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
        }),;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    onSubmit(values);    form && form.reset();
  };

  const handleAddMilestones = (milestones: GeneratedMilestone[],) => {;
    // If there's only one milestone, submit it directly;
    if (milestones && milestones.length === 1) {;
      const milestone = milestones[0];
      if (milestone) {;
        onSubmit({;
          title: milestone && milestone.title,;
          description: milestone && milestone.description,;
          due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
          amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
        });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return;
      }
    }

<<<<<<< HEAD
    // If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      })
    })
<<<<<<< HEAD
  }
  const handleAddMilestone = (milestone: GeneratedMilestone,) => {
  },

  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
  }
  },
=======
  },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    // If there are multiple milestones, submit them one by one;
    milestones && milestones.forEach(milestone => {;
      onSubmit({;
        title: milestone && milestone.title,;
        description: milestone && milestone.description,;
        due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
        amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      });
    });
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAddMilestone = (milestone: GeneratedMilestone,) => {;
    onSubmit({;
      title: milestone && milestone.title,;
      description: milestone && milestone.description,;
      due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
      amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    });
  };

  return (
<<<<<<< HEAD
      )}
    <div className="space-y-6">
      {/* AI Milestone Generator */}
<<<<<<< HEAD
      {projectScope && projectStartDate && (
        <AIMilestoneGenerator
          scope = {projectScope,}
          startDate = {projectStartDate,}
          endDate = {projectEndDate,}
          projectType = {projectType,}
          onAddMilestones = {handleAddMilestones,}
          onAddMilestone = {handleAddMilestone,}
        />
      )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  },


  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator;
          scope={projectScope}
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
          onAddMilestone={handleAddMilestone}
        />;
<<<<<<< HEAD
<<<<<<< HEAD
      )}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
ursor/fix-website-loading-errors-and-merge-6662
      )}


      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;

<<<<<<< HEAD
            control = {form && form.control,}
=======
          <FormField
            control={form.control}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            name="title"
            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
    <div className="space - y-6">;
      {/* AI Milestone Generator */}
      {project_scope && projectStartDate && (
        <AIMilestoneGenerator;
          scope = {project_scope, }
          start_date = {projectStartDate, }
          end_date = {projectEndDate, }
          project_type = {project_type, }
          onAddMilestones = {handleAddMilestones, }
          onAddMilestone = {handleAddMilestone, }
        />)}
      <Form {...form}>;
        <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;
          <FormField;
<<<<<<< HEAD
            control = {form.control, }
            name="title";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel > Title</FormLabel>;
                <FormControl>;
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;



          />;

          <FormField
            control = {form && form.control,}
            name="description"

            render={({ field }: { field: any }) => (
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
<<<<<<< HEAD
                  <Input placeholder="Milestone title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control = {form.control,}
            name="description"
            render={({ field }: { field: any },) => (
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Textarea
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }
            name="description";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min - h-[100px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

          />;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

<<<<<<< HEAD
<<<<<<< HEAD
          />
          <FormField
            control = {form.control,}
            name="description"
            render={({ field }: { field: any },) => (
          />;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormField
              control={form.control}
              name="due_date"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className="text-muted-foreground">
                              Pick a date
                            </span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        selected = {field.value,}
                        onSelect = {field.onChange,}
                        disabled = {(date,) => date < new Date(),}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
            <FormField
              control = {form.control,}
              name="amount"
              render={({ field }: { field: any },) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}

                        initialFocus;
              </FormItem>)}
          />;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control = {form.control, }
              name="due_date";
              render={({ field }: { field: any }, ) => (
                <FormItem className="flex flex - col">;
                  <FormLabel > Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <FormControl>;
                        <Button;
                          variant="outline";
                          className="w - full pl - 3 text - left font - normal";
                        >;
                          {field.value ? (
                            format (field.value, "PPP")) : (
                            <span className="text - muted - foreground">;
                              Pick a date;
                            </span>)}
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0" align="start">;
                      <Calendar;
                        mode="single";
                        selected = {field.value, }
                        on_select = {field.on_change, }
                        disabled = {(date, ) => date < new Date (), }
                        initial_focus;
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;

            />;


            <FormField
<<<<<<< HEAD
              control = {form.control,}
=======
              control = {form && form.control,}
              name="amount"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }: { field: any },) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
            />;
            <FormField;
              control={form.control}
              name="amount"
              render={({ field }: { field: any }) => (

                <FormItem>
<<<<<<< HEAD
=======
                  <FormLabel>Amount ($)</FormLabel>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0 && 0.01"
                      placeholder="0 && 0.00"
                </FormItem>)}
            />;
            <FormField;
              control = {form.control, }
              name="amount";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > Amount ($)</FormLabel>;
                  <FormControl>;
                    <Input;
                      type="number";
                      min="0";
                      step="0.01";
                      placeholder="0.00";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

            />;
          </div>;

          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;

<<<<<<< HEAD
              name="amount"
              render={({ field }: { field: any },) => (
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus;
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            <FormField;
              control={form.control}
              name="amount"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
<<<<<<< HEAD
=======
              <Button
                type="button"
                variant="outline"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick = {onCancel,}
                disabled = {isSubmitting,}
              >
                Cancel
              </Button>
<<<<<<< HEAD
                onClick = {onCancel,}
                disabled = {isSubmitting,}
              >
                Cancel
              </Button>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={onCancel}
                disabled={isSubmitting}
              >;
                Cancel;
              </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Add Milestone"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}//If there are multiple milestones, submit them one by one <AIMilestoneGenerator scope= {
  projectScope
}startDate= {
  projectStartDate
}endDate= {
  projectEndDate
}projectType= {
  projectType
}onAddMilestones= {
  handleAddMilestones
}onAddMilestone= {
  handleAddMilestone
}/>)
}</FormControl> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>)
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) "
}/> </div> <Button type="button" variant="outline" onClick={
  onCancel
}disabled= {
  isSubmitting
}> Cancel </Button>) "
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone")
}</Button> </div> </form> </Form> </div>)
}'"}
<<<<<<< HEAD

            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;
              ) : (;
                "Add Milestone";
              )}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </FormItem>)}
            />;
          </div>;
          <div className="flex justify - end space - x-2 pt - 4">;
            {on_cancel && (
              <Button;
                type="button";
                variant="outline";
                on_click = {on_cancel, }
                disabled = {is_submitting, }
              >;
                Cancel;
              </Button>)}
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Saving...;
                </>) : (
                "Add Milestone")}
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>);
}//If there are multiple milestones, submit them one by one <AIMilestoneGenerator scope= {
  project_scope;
}start_date= {
  projectStartDate;
}end_date= {
  projectEndDate;
}project_type= {
  project_type;

}onAddMilestones= {
  handleAddMilestones;
}onAddMilestone= {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  handleAddMilestone;
}/>);
}</FormControl> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>);
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormLabel > Due Date (optional) </FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button variant="outline" className="w - full pl - 3 text - left font - normal" >) : (<span className="text - muted - foreground" > Pick a date </span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar initial_focus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <Button type="button" variant="outline" on_click={
  on_cancel;
}disabled= {
  is_submitting;
}> Cancel </Button>) ";
}<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : ("Add Milestone");
}</Button> </div> </form> </Form> </div>);
}'"}
}
<<<<<<< HEAD
<<<<<<< HEAD
;
}
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
