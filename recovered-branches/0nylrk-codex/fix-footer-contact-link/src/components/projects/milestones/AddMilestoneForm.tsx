<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import {use_form} from 'react - hook - form';
import {zod_resolver} from '@hookform / resolvers / zod';

import {z} from 'zod';
import {CalendarIcon, Loader2} from 'lucide-react';
import {format} from 'date - fns';
import {Button} from '@/components / ui / button';
import {Calendar} from '@/components / ui / calendar';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {Input} from '@/components / ui / input';
import {Textarea} from '@/components / ui / textarea';
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';
<<<<<<< HEAD
import {AIMilestoneGenerator} from './AIMilestoneGenerator';  projectScope?: string;
=======

import {z} from 'zod';'
import {CalendarIcon, Loader2} from 'lucide-react';'
import {format} from 'date - fns';'
import {Button} from '@/components / ui / button';'
import {Calendar} from '@/components / ui / calendar';'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';'
import {Input} from '@/components / ui / input';'
import {Textarea} from '@/components / ui / textarea';'
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';'
import {AIMilestoneGenerator} from './AIMilestoneGenerator';

const formSchema = z && z.object({;'
  title: z && z.string().min(1, 'Title is required');
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;'
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});

=======
import {AIMilestoneGenerator} from './AIMilestoneGenerator';

const formSchema = z && z.object({;
  title: z && z.string().min(1, 'Title is required');
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});

type MilestoneFormValues = z && z.infer<typeof formSchema>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues) => void,;
  isSubmitting: boolean,;

<<<<<<< HEAD



  onCancel?: () => void;
  projectScope?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  projectStartDate?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  projectEndDate?: string;



<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  onCancel?: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  projectType?: string;
}


export function AddMilestoneForm(): any ({;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



export function AddMilestoneForm({;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function AddMilestoneForm(): any ({;
  projectType?: string
}
export function AddMilestoneForm({

export function AddMilestoneForm({;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onSubmit;
=======
  projectEndDate?: string;  onSubmit;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  projectEndDate?: string;  onSubmit;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  onSubmit;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  isSubmitting;
  onCancel;'
  projectScope = '';'
  projectStartDate = '';
  projectEndDate = null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      });
      return


<<<<<<< HEAD
=======
=======
  projectType = 'Other'
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: ''
      description: ''
      amount: 0}})
  const handleSubmit = (values: MilestoneFormValues) => {
    onSubmit(values)
    form.reset()
  }
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
    // If there's only one milestone, submit it directly
    if (milestones.length === 1) {
      const milestone = milestones[0];
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      });
      return
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',;
=======
      });
      return

=======import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      });
      return

=======import React from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      });
      return


import React from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react',;
import { format } from 'date-fns',;
import { Button } from '@/components/ui/button',;
=======

      });
      return;
'
import React from 'react',;'
import { useForm } from 'react-hook-form',;'
import { zodResolver } from '@hookform/resolvers/zod',;'
import { z } from 'zod',;'
import { CalendarIcon, Loader2 } from 'lucide-react',;'
import { format } from 'date-fns',;'
import { Button } from '@/components/ui/button',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Calendar } from '@/components/ui/calendar',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;'
  FormMessage} from '@/components/ui/form',;'
import { Input } from '@/components/ui/input',;'
import { Textarea } from '@/components/ui/textarea',;
import {;
  Popover,;
  PopoverContent,;'
  PopoverTrigger} from '@/components/ui/popover',;'
import { AIMilestoneGenerator } from './AIMilestoneGenerator',;'
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',;
<<<<<<< HEAD
const formSchema = z.object({;
<<<<<<< HEAD
  title: z.string().min(1, 'Title is required'),,
=======
const formSchema = z.object({;'
  title: z.string().min(1, 'Title is required'),;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  title: z.string().min(1, 'Title is required'),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  description: z.string().optional(),;
  due_date: z.date().optional(),;'
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
<<<<<<< HEAD
export function AddMilestoneForm({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope = '',;
  projectStartDate = '',;
  projectEndDate = null,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: '',;
      description: '',;
      amount: 0}}),;
<<<<<<< HEAD

  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values),;
<<<<<<< HEAD
=======
      title: '',;
      description: '',;
      amount: 0}}),;

  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    form && form.reset();
  };

  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones && milestones.length === 1) {;
      const milestone = milestones[0];
      onSubmit({;
        title: milestone && milestone.title,;
        description: milestone && milestone.description,;
        due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
        amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
      return;
=======
=======
      });
      return;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    form.reset();
  },;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones.length === 1) {;
      const milestone = milestones[0],;
      onSubmit({;
        title: milestone.title,;
        description: milestone.description,;
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,;
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      }),;
      return;
    }
<<<<<<< HEAD
=======
      });
      return;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export function AddMilestoneForm() { return null; }
      amount: 0}}),;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
      });
      return;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




    }


  },



<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
<<<<<<< HEAD
=======
  const handleAddMilestone = (milestone: GeneratedMilestone) => {}
    onSubmit({}
      title: milestone.title;
      description: milestone.description;
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined;
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    })

=======
    })


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  const handleAddMilestone = (milestone: GeneratedMilestone) => {;
    onSubmit({;
      title: milestone && milestone.title,;
      description: milestone && milestone.description,;
      due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
      amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    });
  };


  },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
=======
      title: '',,
  description: '',;
      amount: 0}}),;  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      title: '',,
  description: '',;
      amount: 0}}),;  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className="space-y-6">;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator
=======


  return (
    <div className="space-y-6">;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          scope={projectScope}
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          onAddMilestone={handleAddMilestone}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        />;
      )}

=======
<<<<<<< HEAD
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Form {...form}>
=======
          onAddMilestone={handleAddMilestone}      <Form {...form}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          onAddMilestone={handleAddMilestone}      <Form {...form}>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



      <Form {...form}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          onAddMilestone={handleAddMilestone}
        />;
      )}





      <Form {...form}>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">

      <Form {...form}>;"
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <FormField
            control={form && form.control}
=======
          <FormField;
            control={form && form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            name="title"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;'
import {GeneratedMilestone} from '@/hooks / useMilestoneGenerator';
<<<<<<< HEAD
const form_schema = z.object ({
<<<<<<< HEAD
  title: z.string ().min (1, 'Title is required'),
=======
const form_schema = z.object ({'
  title: z.string ().min (1, 'Title is required');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  title: z.string ().min (1, 'Title is required');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  description: z.string ().optional (),
  due_date: z.date ().optional (),'
  amount: z.coerce.number ().min (0, 'Amount must be greater than or equal to 0')});
;
type MilestoneFormValues = z.infer < typeof form_schema>;
;
interface AddMilestoneFormProps {}
  on_submit: (data: MilestoneFormValues) => void,
  is_submitting: boolean,
  on_cancel?: () => void;
  project_scope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  project_type?: string;
}
export /**;
 * AddMilestoneForm - Function description;
 */
function AddMilestoneForm() {}
  const form = use_form < MilestoneFormValues>({}
    resolver: zod_resolver (form_schema),
    default_values: {'
      title: '','
      description: '',
      amount: 0}}),
  const handle_submit = (values: MilestoneFormValues) =>: any {}
    on_submit (values),
    form.reset ();
  }
;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) =>: any {'
    // If there's only one milestone, submit it directly;
    // Check condition;
if ( {) {}
  $2;
}
      const milestone = milestones[0];
      on_submit ({}
        title: milestone.title,
        description: milestone.description,
        due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
        amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
      });
      return;
    }
    // If there are multiple milestones, submit them one by one;
    milestones.for_each (milestone => {}
      on_submit ({}
        title: milestone.title,
        description: milestone.description,
        due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
        amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
      });
    });
  }
;
  const handleAddMilestone = (milestone: GeneratedMilestone) =>: any {}
    on_submit ({}
      title: milestone.title,
      description: milestone.description,
      due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
      amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });
  }
;
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className="space-y-6">;
=======
  return ("
    <div className="space - y-6">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <div className="space - y-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {/* AI Milestone Generator */}
      {project_scope && projectStartDate && (
        <AIMilestoneGenerator;
          scope={project_scope}
          start_date={projectStartDate}
          end_date={projectEndDate}
          project_type={project_type}
          onAddMilestones={handleAddMilestones}
          onAddMilestone={handleAddMilestone}
        />)}
<<<<<<< HEAD
      <Form {...form}>;
<<<<<<< HEAD
        <form on_submit={form.handle_submit (handle_submit)} className="space-y-4">;
=======
      <Form {...form}>;"
        <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <FormField;
            control={form.control}"
            name="title";
            render={({ field }) => (
                <FormControl>;"
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                <FormMessage />;              render={({ field }) => (;
=======
                <FormMessage />;


          <FormField;
            control={form && form.control}"
            name="description"

=======
                <FormMessage />;

          />;


          <FormField
            control={form && form.control}
            name="description"
          <FormField
            control={form && form.control}
            name="description"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;
<<<<<<< HEAD

                  <Textarea"
                    placeholder="Describe what needs to be delivered""
=======
                  <Textarea
                    placeholder="Describe what needs to be delivered"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    className="min-h-[100px]"
              </FormItem>)}
          />;
          <FormField;
<<<<<<< HEAD
            control={form.control}"
=======
            control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            name="description";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;
<<<<<<< HEAD
                  <Textarea;"
                    placeholder="Describe what needs to be delivered";"
                    className="min - h-[100px]";



=======
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min - h-[100px]";
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min-h-[100px]";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

<<<<<<< HEAD

            <FormField;
              control={form && form.control}"
              name="due_date"

              render={({ field }) => (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          />;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

            <FormField
              control={form && form.control}
              name="due_date"
            <FormField
              control={form && form.control}
              name="due_date"
              render={({ field }) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <FormItem className="flex flex-col">;
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                        <Button"
                          variant="outline""
                          className="w-full pl-3 text-left font-normal">;
                          {field && field.value ? (;"
                            format(field && field.value, "PPP");
                          ) : (;


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal">;
                          {field && field.value ? (;
                            format(field && field.value, "PPP");
                          ) : (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            <span className="text-muted-foreground">;
                              Pick a date;
                            </span>;
                          )}"
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                      <Calendar"
=======
                      <Calendar
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        mode="single"
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
<<<<<<< HEAD
            <FormField;
              control={form && form.control}"
              name="amount"



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <FormField
              control={form && form.control}
              name="amount"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <Input
                      type="number"
                      min="0"
                      step="0 && 0.01"
                      placeholder="0 && 0.00"
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="amount";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Amount ($)</FormLabel>;
                  <FormControl>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <Input;
                      type="number";
                      min="0";
                      step="0.01";
=======

                    <Input"
                      type="number""
                      min="0""
                      step="0 && 0.01""
                      placeholder="0 && 0.00"
                </FormItem>)}
            />;
            <FormField;
              control={form.control}"
              name="amount";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Amount ($)</FormLabel>;
                  <FormControl>;



                    <Input;"
                      type="number";"
                      min="0";"
                      step="0.01";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      placeholder="0.00";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;


<<<<<<< HEAD
          <div className="flex justify-end space-x-2 pt-4">;
<<<<<<< HEAD
            {onCancel && (;                Cancel;
=======

              <Button"
                type="button""
                variant="outline"
                onClick={onCancel}



                Cancel;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            {onCancel && (;

              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isSubmitting}>;
                Cancel;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </Button>;
            )}"
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
<<<<<<< HEAD
                </>;
              ) : (;
                "Add Milestone";
              )}

                </FormItem>)}
            />;
          </div>;
<<<<<<< HEAD
          <div className="flex justify - end space - x-2 pt-4">;
=======

                </FormItem>)}
            />;
          </div>;"
          <div className="flex justify - end space - x-2 pt - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="flex justify - end space - x-2 pt - 4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {on_cancel && (
              <Button;"
                type="button";"
                variant="outline";
                on_click={on_cancel}
                disabled={is_submitting}
              >;
                Cancel;
              </Button>)}"
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? (
<<<<<<< HEAD
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Saving...;
                </>) : (
                "Add Milestone")}
<<<<<<< HEAD
=======
                <>;"
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Saving...;
                </>) : ("
                "Add Milestone")}

"
                "Add Milestone";
              )}

=======

                "Add Milestone";
              )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </Button>;
          </div>;
        </form>;
      </Form>;

<<<<<<< HEAD


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </div>);
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
