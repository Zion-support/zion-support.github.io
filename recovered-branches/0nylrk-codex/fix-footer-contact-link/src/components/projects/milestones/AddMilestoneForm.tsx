<<<<<<< HEAD

  projectStartDate?: string;
  projectEndDate?: string;  onSubmit;
  isSubmitting;
  onCancel;

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form,
import { Input } from @/components/ui/input',
import { Textarea } from '@/components/ui/textarea,
  Popover,
  PopoverContent,
  PopoverTrigger} from @/components/ui/popover',
import { AIMilestoneGenerator } from './AIMilestoneGenerator,
import { GeneratedMilestone } from @/hooks/useMilestoneGenerator',
const formSchema = z.object({
  title: z.string().min(1, 'Title is required),,
  description: z.string().optional(),
  due_date: z.date().optional(),
  amount: z.coerce.number().min(0, Amount must be greater than or equal to 0')}),
type MilestoneFormValues = z.infer<typeof formSchema>,
interface AddMilestoneFormProps {
  onSubmit: (data: MilestoneFormValues) => void,
  isSubmitting: boolean,
  onCancel?: () => void,
  projectScope?: string,
  projectStartDate?: string,
  projectEndDate?: string,
  projectType?: string;
}
export function AddMilestoneForm({
  onSubmit,
  isSubmitting,
  onCancel,
  projectScope = ',
  projectStartDate = ',
  projectEndDate = null,
  projectType = 'Other;
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ',,
  description: ',
      amount: 0}}),  return (
    <div className="space-y-6>;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
import React from react';
import { useForm } from 'react-hook-form;
import { zodResolver } from @hookform/resolvers/zod';
import { z } from 'zod;
import { CalendarIcon, Loader2 } from lucide-react';
import { format } from 'date-fns;
import { Button } from @/components/ui/button';
import { Calendar } from '@/components/ui/calendar;
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from @/components/ui/form',
import { Input } from '@/components/ui/input;
import { Textarea } from @/components/ui/textarea';
  Popover,
  PopoverContent,
  PopoverTrigger} from '@/components/ui/popover,
import { AIMilestoneGenerator } from ./AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator;
  title: z.string().min($2);
  description: z.string().optional($2);
  due_date: z.date().optional($2);
  amount: z.coerce.number().min(0, Amount must be greater than or equal to 0')}),

type MilestoneFormValues = $2;
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
  projectScope = $2;
  projectStartDate = $2;
  projectEndDate = $2;
  projectType = 'Other
}: AddMilestoneFormProps) {
    resolver: zodResolver($2);
    defaultValues: {
      title: ',
      description: ',
      amount: 0}}),
=======
export function AddMilestoneForm({;

export function AddMilestoneForm(): any ({;
  projectType?: string
}
export function AddMilestoneForm({

export function AddMilestoneForm({;

  onSubmit;

  isSubmitting;
  onCancel;'
  projectScope = '';'
  projectStartDate = '';
  projectEndDate = null;

      });
      return

import React from 'react',;

import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react',;
import { format } from 'date-fns',;
import { Button } from '@/components/ui/button',;

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

  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;

    form && form.reset();
  };
>>>>>>> origin/chore/fix-lint-and-merge

  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones && milestones.length === 1) {;
      const milestone = milestones[0];
      onSubmit({;
        title: milestone && milestone.title,;
        description: milestone && milestone.description,;
        due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
        amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;

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
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
    // If theres only one milestone, submit it directly
    if (milestones.length = $2;
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      }),
      return
=======
>>>>>>> origin/chore/fix-lint-and-merge
    }

  },

  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount

    })

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

  return (
<<<<<<< HEAD
    <div className=space-y-6">
=======

    <div className="space-y-6">;
>>>>>>> origin/chore/fix-lint-and-merge
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator

          scope={projectScope}

          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
<<<<<<< HEAD
          onAddMilestone={handleAddMilestone}      <Form {...form}>

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
import {GeneratedMilestone} from '@/hooks / useMilestoneGenerator';'
const form_schema = z.object ({

type MilestoneFormValues = z.infer < typeof form_schema>;
interface AddMilestoneFormProps {
  }
  "on_submit": ("data": MilestoneFormValues) => void,
  "is_submitting": boolean,
=======

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">

      <Form {...form}>

  description: z.string ().optional (),
  due_date: z.date ().optional (),'
  amount: z.coerce.number ().min (0, 'Amount must be greater than or equal to 0')});
;
type MilestoneFormValues = z.infer < typeof form_schema>;
;

  on_submit: (data: MilestoneFormValues) => void,
  is_submitting: boolean,
>>>>>>> origin/chore/fix-lint-and-merge
  on_cancel?: () => void;
  project_scope?: string;
  projectStartDate?: string;
  projectEndDate?: string;}
  project_type?: string;}
}
export /**;
 * AddMilestoneForm - Function description;
 */
<<<<<<< HEAD
function AddMilestoneForm() {
  }
  const form = use_form < MilestoneFormValues>({

    // Check condition
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD

=======
;
  const handleAddMilestone = (milestone: GeneratedMilestone) =>: any {}
    on_submit ({}
      title: milestone.title,
      description: milestone.description,
  // TODO: Implement
}
>>>>>>> origin/chore/fix-lint-and-merge
    on_submit ({
      title: milestone.title,

      description: milestone.description,)
      due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
      amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });
  }
<<<<<<< HEAD
=======
;
>>>>>>> origin/chore/fix-lint-and-merge

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
<<<<<<< HEAD
          onAddMilestone={handleAddMilestone} />)}
      <Form {...form}>;

=======
          onAddMilestone={handleAddMilestone}
        />)}

          <FormField;
            control={form.control}"
            name="title";
            render={({ field }) => (
                <FormControl>;"
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;

                    className="min-h-[100px]"
              </FormItem>)}
          />;
          <FormField;

            name="description";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

                <FormItem className="flex flex-col">;
>>>>>>> origin/chore/fix-lint-and-merge
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;

                    <Input;
<<<<<<< HEAD

                  </FormControl>;
                  <FormMessage />;

            />;
          </div>;

              )}
                </FormItem>)}
            />;
          </div>;

=======
                      type="number";
                      min="0";
                      step="0.01";

                      placeholder="0.00";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

            {on_cancel && (
              <Button;"
                type="button";"
                variant="outline";
>>>>>>> origin/chore/fix-lint-and-merge
                on_click={on_cancel}
                disabled={is_submitting}
              >;
                Cancel;
<<<<<<< HEAD
              </Button>)}

                  Saving...;
                </>) : (
                "Add Milestone)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button type=submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin />
                  Saving...
                </>
              ) : (
                Add Milestone"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
=======
              </Button>)}"
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? (

            </Button>;
          </div>;
        </form>;
      </Form>;
>>>>>>> origin/chore/fix-lint-and-merge
