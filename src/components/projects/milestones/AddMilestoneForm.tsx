
<<<<<<< HEAD
import React from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns',;
;
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
;
const formSchema = z.object({;
  title:z.string().min(1, 'Title is required'),;
  description:z.string().optional(),;
  due_date:z.date().optional(),;
  amount:z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),;
;
type MilestoneFormValues = z.infer<typeof formSchema>,;
;
interface AddMilestoneFormProps {;
  onSubmit:(data:MilestoneFormValues) => void,;
  isSubmitting:boolean,;
  onCancel?:() => void,;
  projectScope?:string,;
  projectStartDate?:string,;
  projectEndDate?:string,;
  projectType?:string;
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
} AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      title:'',;
      description:'',;
      amount:0}}),;
;
  const handleSubmit = (values:MilestoneFormValues) => {;
    onSubmit(values),;
    form.reset();
  },;
;
  const handleAddMilestones = (milestones:GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones.length === 1) {;
      const milestone = milestones[0],;
      if (milestone) {;
        onSubmit({;
          title:milestone.title,;
          description:milestone.description,;
          due_date:milestone.dueDate ? new Date(milestone.dueDate) :undefined,;
          amount:milestone.estimatedHours * 10, // Convert hours to a default payment amount;
        }),;
        return,;
      }
    }
;
    // If there are multiple milestones, submit them one by one;
    milestones.forEach(milestone => {;
      onSubmit({;
        title:milestone.title,;
        description:milestone.description,;
        due_date:milestone.dueDate ? new Date(milestone.dueDate) :undefined,;
        amount:milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      }),;
    }),;
  },;
;
  const handleAddMilestone = (milestone:GeneratedMilestone) => {;
    onSubmit({;
      title:milestone.title,;
      description:milestone.description,;
      due_date:milestone.dueDate ? new Date(milestone.dueDate) :undefined,;
      amount:milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    }),;
  },;
;
  return (;
    <div className="space-y-6">;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator;
          scope={projectScope}
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
          onAddMilestone={handleAddMilestone}
        />;
      )}
;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
          <FormField;
            control={form.control}
            name="title";
            render={({ field } { field:any }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
                <FormControl>;
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
=======
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
type MilestoneFormValues = z.infer<typeof formSchema>,

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
  const _handleAddMilestones = (_milestones: GeneratedMilestone[]) => {_// If there's only one milestone, _submit it directly
    if (milestones.length === 1) {
      const milestone = milestones[0],
      if (milestone) {
        onSubmit({
          title: milestone.title,
          description: milestone.description,
          due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
          amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
        }),
        return      }
    }

    // If there are multiple milestones, submit them one by one
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
      {projectScope && projectStartDate && (        <AIMilestoneGenerator
          scope={projectScope}
          startDate={_projectStartDate}
          endDate={_projectEndDate}
          projectType={_projectType}
          onAddMilestones={_handleAddMilestones}
          onAddMilestone={_handleAddMilestone}
        />
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=&quot;space-y-4&quot;>
          <FormField
            control={form.control}
            name=&quot;title&quot;
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder=&quot;Milestone title&quot; {...field} />                </FormControl>
                <FormMessage />
              </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            )}
          />;
;
          <FormField;
            control={form.control}
<<<<<<< HEAD
            name="description";
            render={({ field } { field:any }) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min-h-[100px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="due_date";
              render={({ field } { field:any }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
                        <Button;
                          variant="outline";
                          className="w-full pl-3 text-left font-normal";
                        >;
                          {field.value ? (;
                            format(field.value, "PPP");
                          ) :(;
                            <span className="text-muted-foreground">;
                              Pick a date;
                            </span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;
                      <Calendar;
                        mode="single";
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus;
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
                </FormItem>;
=======
            name=&quot;description&quot;
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=&quot;Describe what needs to be delivered&quot;
                    className=&quot;min-h-[100px]&quot;
                    {...field}                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
              control={form.control}
              name=&quot;due_date&quot;
              render={({ field }: { field: any }) => (
                <FormItem className=&quot;flex flex-col&quot;>                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant=&quot;outline&quot;
                          className=&quot;w-full pl-3 text-left font-normal&quot;
                        >
                          {field.value ? (
                            format(field.value, &quot;PPP&quot;)                          ) : (
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
                        mode=&quot;single&quot;
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            />;
;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name="amount";
              render={({ field } { field:any }) => (;
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
                </FormItem>;
              )}
            />;
          </div>;
;
          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;
              <Button;
                type="button";
                variant="outline";
                onClick={onCancel}
                disabled={isSubmitting}
              >;
                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;
              ) :(;
                "Add Milestone";
              )}
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  ),;
=======
              name=&quot;amount&quot;
              render={({ field }: { field: any }) => (                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input
                      type=&quot;number&quot;
                      min=&quot;0&quot;
                      step=&quot;0.01&quot;
                      placeholder=&quot;0.00&quot;
                      {...field}                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=&quot;flex justify-end space-x-2 pt-4&quot;>
            {onCancel && (              <Button
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={onCancel}
                disabled={_isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button type=&quot;submit&quot; disabled={isSubmitting}>
              {isSubmitting ? (                <>
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
