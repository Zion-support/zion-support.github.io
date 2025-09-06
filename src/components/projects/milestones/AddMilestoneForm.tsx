

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type MilestoneFormValues = z.infer<typeof formSchema>
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      title: ''
      description: ''
      amount: 0}})
  const handleSubmit = (values: MilestoneFormValues) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      title: '',;
      description: '',;
      amount: 0}});
  const handleSubmit = (values: MilestoneFormValues) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
        return
      }
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

        return;
      }
    }

=======
>>>>>>>         return;
      }
    }

>>>>>>>     // If there are multiple milestones, submit them one by one
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // If there are multiple milestones, submit them one by one
>>>>>>>     milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      })
    })
<<<<<<< HEAD

=======
  }
  const handleAddMilestone = (milestone: GeneratedMilestone,) => {
>>>>>>>     onSubmit({
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onSubmit({
>>>>>>>       title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
<<<<<<< HEAD
=======
  }
type MilestoneFormValues = z && z.infer<typeof formSchema>;
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
=======
        return
      }
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns',;
import { Button } from '@/components/ui/button',;
import { Calendar } from '@/components/ui/calendar',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  Popover;
  PopoverContent;
  PopoverTrigger} from '@/components/ui/popover';import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = z && z.object({;
  title: z && z.string().min(1, 'Title is required');
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

type MilestoneFormValues = z && z.infer<typeof formSchema>;

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        return;
      }
    }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
  },

  const handleAddMilestone = (milestone: GeneratedMilestone) => {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
<<<<<<< HEAD


  },

>>>>>>> 
  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
<<<<<<< HEAD

=======
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
      )}
=======
=======
=======
  },

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
<<<<<<< HEAD
=======
>>>>>>>       )}

>>>>>>>       <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
ursor/fix-website-loading-errors-and-merge-6662
      )}


      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;

>>>>>>>           <FormField
            control = {form && form.control,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

              <FormItem>
=======
          />
          <FormField
            control = {form.control,}
            name="description"
            render={({ field }: { field: any },) => (
>>>>>>>               <FormItem>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

          />;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

=======
          />
          <FormField
            control = {form.control,}
            name="description"
            render={({ field }: { field: any },) => (
=======
          />;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            <FormField
              control = {form.control,}
<<<<<<< HEAD
              name="amount"
              render={({ field }: { field: any },) => (
>>>>>>>                 <FormItem>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <FormItem>
>>>>>>>                   <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

            />;
          </div>;

          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;

=======
              name="amount"
              render={({ field }: { field: any },) => (
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                type="button"
                variant="outline"
<<<<<<< HEAD
<<<<<<< HEAD

            )}
=======
                onClick = {onCancel,}
                disabled = {isSubmitting,}
              >
                Cancel
              </Button>
>>>>>>>             )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                onClick = {onCancel,}
                disabled = {isSubmitting,}
              >
                Cancel
              </Button>
=======
                onClick={onCancel}
                disabled={isSubmitting}
              >;
                Cancel;
              </Button>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Add Milestone"
              )}
<<<<<<< HEAD

=======
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
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
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

            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );
<<<<<<< HEAD

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


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
