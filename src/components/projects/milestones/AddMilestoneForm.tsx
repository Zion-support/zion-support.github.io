
<<<<<<< HEAD
import React from 'react',
import { useForm } from 'react-hook-form',
import { zodResolver } from '@hookform/resolvers/zod',
import { z } from 'zod',
import { CalendarIcon, Loader2 } from 'lucide-react'
import { format } from 'date-fns',
import { Button } from '@/components/ui/button',
import { Calendar } from '@/components/ui/calendar',
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form',
import { Input } from '@/components/ui/input',
import { Textarea } from '@/components/ui/textarea',
import {
  Popover,
  PopoverContent,
  PopoverTrigger} from '@/components/ui/popover',
import { AIMilestoneGenerator } from './AIMilestoneGenerator',
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',
const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  due_date: z.date().optional(),
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),
=======
import React from 'react';

import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from '@/components/ui/form';
import {_Popover, _PopoverContent, _PopoverTrigger} from '@/components/ui/popover';

const _formSchema = z.object({_title: z.string().min(1, _'Title is required'), _description: z.string().optional(), _due_date: z.date().optional(), _amount: z.coerce.number().min(0, _'Amount must be greater than or equal to 0')});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type MilestoneFormValues = z.infer<typeof formSchema>,

<<<<<<< HEAD
interface AddMilestoneFormProps {
  onSubmit: (data: MilestoneFormValues) => void,
  isSubmitting: boolean,
  onCancel?: () => void,
  projectScope?: string,
  projectStartDate?: string,
  projectEndDate?: string,
  projectType?: string
}

export function AddMilestoneForm({
  onSubmit,
  isSubmitting,
  onCancel,
  projectScope = '',
  projectStartDate = '',
  projectEndDate = '',
  projectType = 'Other'
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      amount: 0}}),

  const handleSubmit = (values: MilestoneFormValues) => {
    onSubmit(values),
    form.reset()
  },
=======
interface AddMilestoneFormProps {_onSubmit: (_data: MilestoneFormValues) => void;
  isSubmitting: boolean;
  onCancel?: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  projectType?: string;}

export function AddMilestoneForm(_{_onSubmit, _isSubmitting, _onCancel, _projectScope = '', _projectStartDate = '', _projectEndDate = '', _projectType = 'Other'}: AddMilestoneFormProps) {_const _form = useForm<MilestoneFormValues>({
    resolver: zodResolver(formSchema), _defaultValues: {
      title: '', _description: '', _amount: 0}});

  const _handleSubmit = (_values: MilestoneFormValues) => {_onSubmit(values);
    form.reset();};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleAddMilestones = (_milestones: GeneratedMilestone[]) => {_// If there's only one milestone, _submit it directly
    if (milestones.length === 1) {
<<<<<<< HEAD
      const milestone = milestones[0],
      if (milestone) {
        onSubmit({
          title: milestone.title,
          description: milestone.description,
          due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
          amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
        }),
        return
=======
      const _milestone = milestones[0];
      if (milestone) {
        onSubmit({
          title: milestone.title, _description: milestone.description, _due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined, _amount: milestone.estimatedHours * 10, _// Convert hours to a default payment amount});
        return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }

    // If there are multiple milestones, submit them one by one
<<<<<<< HEAD
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title,
        description: milestone.description,
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      })
    })
  },

  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title,
      description: milestone.description,
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
  },

  return (
    <div className=&quot;space-y-6&quot;>
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (
=======
    milestones.forEach(milestone => {_onSubmit({
        title: milestone.title, _description: milestone.description, _due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined, _amount: milestone.estimatedHours * 10, _// Convert hours to a default payment amount});
    });
  };

  const _handleAddMilestone = (_milestone: GeneratedMilestone) => {_onSubmit({
      title: milestone.title, _description: milestone.description, _due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined, _amount: milestone.estimatedHours * 10, _// Convert hours to a default payment amount});
  };

  return (
    <div className="space-y-6">
      {_/* AI Milestone Generator */}
      {_projectScope && projectStartDate && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <AIMilestoneGenerator
          scope={projectScope}
          startDate={_projectStartDate}
          endDate={_projectEndDate}
          projectType={_projectType}
          onAddMilestones={_handleAddMilestones}
          onAddMilestone={_handleAddMilestone}
        />
      )}

<<<<<<< HEAD
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=&quot;space-y-4&quot;>
          <FormField
            control={form.control}
            name=&quot;title&quot;
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder=&quot;Milestone title&quot; {...field} />
=======
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={_form.control}
            name="title"
            render={_(_{ field}: {_field: unknown}) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Milestone title" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;description&quot;
            render={({ field }: { field: any }) => (
=======
            control={_form.control}
            name="description"
            render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
<<<<<<< HEAD
                    placeholder=&quot;Describe what needs to be delivered&quot;
                    className=&quot;min-h-[100px]&quot;
                    {...field}
=======
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
                    {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;due_date&quot;
              render={({ field }: { field: any }) => (
                <FormItem className=&quot;flex flex-col&quot;>
=======
              control={_form.control}
              name="due_date"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem className="flex flex-col">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant=&quot;outline&quot;
                          className=&quot;w-full pl-3 text-left font-normal&quot;
                        >
<<<<<<< HEAD
                          {field.value ? (
                            format(field.value, &quot;PPP&quot;)
=======
                          {_field.value ? (
                            format(field.value, _"PPP")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          ) : (
                            <span className=&quot;text-muted-foreground&quot;>
                              Pick a date
                            </span>
                          )}
                          <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                      <Calendar
<<<<<<< HEAD
                        mode=&quot;single&quot;
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
=======
                        mode="single"
                        selected={_field.value}
                        onSelect={_field.onChange}
                        disabled={_(_date) => date < new Date()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;amount&quot;
              render={({ field }: { field: any }) => (
=======
              control={_form.control}
              name="amount"
              render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input
<<<<<<< HEAD
                      type=&quot;number&quot;
                      min=&quot;0&quot;
                      step=&quot;0.01&quot;
                      placeholder=&quot;0.00&quot;
                      {...field}
=======
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

<<<<<<< HEAD
          <div className=&quot;flex justify-end space-x-2 pt-4&quot;>
            {onCancel && (
=======
          <div className="flex justify-end space-x-2 pt-4">
            {_onCancel && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Button
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={onCancel}
                disabled={_isSubmitting}
              >
                Cancel
              </Button>
            )}
<<<<<<< HEAD
            <Button type=&quot;submit&quot; disabled={isSubmitting}>
              {isSubmitting ? (
=======
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <>
                  <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
                  Saving...
                </>
              ) : (
                &quot;Add Milestone&quot;
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
