<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  projectStartDate?: string;
<<<<<<< HEAD
  projectEndDate?: string;

<<<<<<< HEAD
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function AddMilestoneForm(): any ({;
  projectType?: string
}
export function AddMilestoneForm({

export function AddMilestoneForm({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      });
      return
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
const formSchema = z.object({;
title: z.string().min(1, 'Title is required'),,
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
      title: '',;
      description: '',;
      amount: 0}}),;
<<<<<<< HEAD

  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values),;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
      return;
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

=======
      });
      return;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    }

  },

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

return (
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
=======

      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator
import {AIMilestoneGenerator} from './AIMilestoneGenerator';
const formSchema = z && z.object({;)
  title: z && z.string().min(1, 'Title is required');
      {projectScope && projectStartDate && (;}
        <AIMilestoneGenerator;}
scope={projectScope}

import {use_form} from 'react - hook - form';''
import {zod_resolver} from '@hookform / resolvers / zod';''
import {z} from 'zod';''
import {CalendarIcon, Loader2} from 'lucide-react';''
import {format} from 'date - fns';''
import {Button} from '@/components / ui / button';''
import {Calendar} from '@/components / ui / calendar';''
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';''
import {Input} from '@/components / ui / input';''
import {Textarea} from '@/components / ui / textarea';''
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';''
import {AIMilestoneGenerator} from './AIMilestoneGenerator';'
const formSchema = z && z.object({;)'
  title: z && z.string().min(1, 'Title is required');'
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});
type MilestoneFormValues = z && z.infer<typeof formSchema>;
</typeof>
type MilestoneFormValues = z.infer<typeof formSchema>,;
  const form = useForm<MilestoneFormValues>({;

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (
        <AIMilestoneGenerator
    <div className="space-y-6">;"
</div>
        <AIMilestoneGenerator;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          scope={projectScope}

          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
<<<<<<< HEAD
          onAddMilestone={handleAddMilestone}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        />;
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <FormField
            control={form && form.control}
            name="title"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;'
import {GeneratedMilestone} from '@/hooks / useMilestoneGenerator';
const form_schema = z.object ({
<<<<<<< HEAD
  title: z.string ().min (1, 'Title is required'),
=======
  title: z.string ().min (1, 'Title is required'),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  projectEndDate?: string;}
  project_type?: string;}
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
 * AddMilestoneForm - Function description;
 */
function AddMilestoneForm() {
  const form = use_form < MilestoneFormValues>({)
    resolver: zod_resolver (form_schema),

    default_values: {,"
  title: ,
      description: ,
      amount: 0}}),
  const handle_submit = (values: MilestoneFormValues) =>: any {
  // TODO: Implement
}
    on_submit (values),
    form.reset ();
  const handleAddMilestones = (milestones: GeneratedMilestone[]) =>: any {
  // TODO: Implement
    // If there's only one milestone, submit it directly;
    // Check condition;
if ( {) {
  $2;
      const milestone = milestones[0];
      on_submit ({
        title: milestone.title,
        description: milestone.description,)
pr-12325

}
      const milestone = milestones[0];
      on_submit ({
        title: milestone.title,

        description: milestone.description,)
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

        description: milestone.description,)
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
  // TODO: Implement
}
    on_submit ({
      title: milestone.title,

      description: milestone.description,)
      due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
      amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });
  }
;
return (
<<<<<<< HEAD
    <div className="space-y-6">;
=======
    <div className="space-y-6">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* AI Milestone Generator */}
      {project_scope && projectStartDate && (
        <AIMilestoneGenerator;
    // If there are multiple milestones, submit them one by one;
    milestones.for_each (milestone => {
  const handleAddMilestone = (milestone: GeneratedMilestone) =>: any {
  // TODO: Implement
  return (
    <div className="space - y-6">;"
pr-12325
  return ('
    <div className="space - y-6">;"
</div>
        <AIMilestoneGenerator;

          scope={project_scope}
          start_date={projectStartDate}
          end_date={projectEndDate}
          project_type={project_type}
          onAddMilestones={handleAddMilestones}
          onAddMilestone={handleAddMilestone}
        />)}
<Form {...form}>;
<<<<<<< HEAD
        <form on_submit={form.handle_submit (handle_submit)} className="space-y-4">;
=======
        <form on_submit={form.handle_submit (handle_submit)} className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <FormField;
            control={form.control}"
            name="title";
            render={({ field }) => (
                <FormControl>;"
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
<FormMessage />;              render={({ field }) => (;
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;
<Textarea"
                    placeholder="Describe what needs to be delivered""
                    className="min-h-[100px]"
              </FormItem>)}
          />;
          <FormField;
control={form.control}"
            name="description";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;
<Textarea;"
                    placeholder="Describe what needs to be delivered";"
                    className="min - h-[100px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

<FormField;
              control={form && form.control}"
              name="due_date"

              render={({ field }) => (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <FormItem className="flex flex-col">;
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;

                            <span className="text-muted-foreground">;
                              Pick a date;
                            </span>;
                          )}"
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w-auto p-0" align="start">;
mode="single"
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
<FormField;
              control={form && form.control}"
              name="amount"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
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

<div className="flex justify-end space-x-2 pt-4">;
{onCancel && (;                Cancel;
              </Button>;
            )}"
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
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
          <div className="flex justify - end space - x-2 pt-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;
                  Saving...;
                </>) : (
                "Add Milestone")}
</Button>;
          </div>;
        </form>;
      </Form>;

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
