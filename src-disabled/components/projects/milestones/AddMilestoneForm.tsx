// If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title,
        description: milestone.description,
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount

      })
    })
// If there are multiple milestones, submit them one by one;
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title;,
  description: milestone.description;)
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined;,
  amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      })
pr-12325

import React from 'react';
import { use_form } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date - fns';
import { Button } from '@/components / ui / button';

import { Calendar } from '@/components / ui / calendar';

import {

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
  const handleAddMilestone = (milestone: GeneratedMilestone, ) =>: any {}
    on_submit ({}
      title: milestone.title,
      description: milestone.description,
      due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
      amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });

  }
type MilestoneFormValues = z && z.infer<typeof formSchema>;'
import React from 'react';'
import { useForm } from 'react-hook-form';'
import { zodResolver } from '@hookform/resolvers/zod';'
import { z } from 'zod';'
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns';'
import { Button } from '@/components/ui/button';'
import { Calendar } from '@/components/ui/calendar';

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

        return;
      }
    }


    // If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      })
    })


  }
  const handleAddMilestone = (milestone: GeneratedMilestone,) => {
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

      )}

    <div className="space-y-6">
      {/* AI Milestone Generator */}



  },

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}



      {projectScope && projectStartDate && (;
    // If there are multiple milestones, submit them one by one;
    milestones.for_each (milestone => {
  const handleAddMilestone = (milestone: GeneratedMilestone, ) =>: any {
  // TODO: Implement

type MilestoneFormValues = z && z.infer<typeof formSchema>;
</typeof>
type MilestoneFormValues = z.infer<typeof formSchema>,;
  const form = useForm<MilestoneFormValues>({;

    <div className="space-y-6">"
</div>"
</div>
pr-12325
        <AIMilestoneGenerator;
          scope={projectScope}
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
          onAddMilestone={handleAddMilestone}
        />;



      )}

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;



            name="title"

      {/* AI Milestone Generator */}
      {project_scope && projectStartDate && (
        <AIMilestoneGenerator;
      <Form {...form}>;
)"
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;"
</form>
          <FormField;
            control={form.control}"
            name="title""
            render={({ field }: { field: any },) => (;

              <FormItem>;

                <FormLabel>Title;"
    <div className="space - y-6">;"
pr-12325
          scope = {project_scope, }
          start_date = {projectStartDate, }
          end_date = {projectEndDate, }
          project_type = {project_type, }
          onAddMilestones = {handleAddMilestones, }
          onAddMilestone = {handleAddMilestone, }
        />)}

          <FormField;
            control = {form.control, }"
            name="title";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel > Title</FormLabel>;
                <FormControl>;"
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Milestone title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (


              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>


                    className="min-h-[100px]"

              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }"
            name="description";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;


          />;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;


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


                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus;

            <FormField;
              control = {form.control, }"
              name="due_date";

                  <FormLabel > Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <FormControl>;

                              Pick a date;
                            </span>)}
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p-0" align="start">;
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
              control = {form.control,}

              render={({ field }: { field: any },) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;

            />;
            <FormField;

                <FormItem>
                  <FormControl>

            />;
            <FormField;
              control = {form.control, }"
              name="amount";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > Amount ($)</FormLabel>;
                  <FormControl>;
                    <Input;"
                      type="number";"
                      min="0";"
                      step="0.01";"
                      placeholder="0.00";

                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;


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

                onClick={onCancel}
                disabled={isSubmitting}
              >;
                Cancel;
              </Button>;



            )}

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : ("
                "Add Milestone"
              )}

            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );


            {on_cancel && (
              <Button;"
                type="button";"

                variant="outline";
                on_click = {on_cancel, }
                disabled = {is_submitting, }
              >;
                Cancel;

                  Saving...;
                </>) : ("
                "Add Milestone")}

            </Button>;
          </div>;
        </form>;
      </Form>;


  handleAddMilestone;
}/>);
}</FormControl> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>);

  on_cancel;
}disabled= {
  is_submitting;
}> Cancel </Button>) ";

}'"}

}


