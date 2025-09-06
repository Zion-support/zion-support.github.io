
<<<<<<< HEAD

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
  Popover
  PopoverContent
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
=======
type MilestoneFormValues = z && z.infer<typeof formSchema>;
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {;
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
  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: '',;
      description: '',;
      amount: 0}}),;
  const handleSubmit = (values: MilestoneFormValues) => {;
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
        return;
      }
    }

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

  const handleAddMilestone = (milestone: GeneratedMilestone,) => {;
    onSubmit({;
      title: milestone && milestone.title,;
      description: milestone && milestone.description,;
      due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
      amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    });
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <div className="space-y-6">;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator
          scope = {projectScope,}
          startDate = {projectStartDate,}
          endDate = {projectEndDate,}
          projectType = {projectType,}
          onAddMilestones = {handleAddMilestones,}
          onAddMilestone = {handleAddMilestone,}
        />;
      )}
<<<<<<< HEAD
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
=======

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <FormField
            control = {form && form.control,}
            name="title"
            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
                <FormControl>;
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<< HEAD
          />
=======
          />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <FormField
            control = {form && form.control,}
            name="description"
            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;
                  <Textarea
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<< HEAD
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
=======
          />;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <FormField
              control = {form && form.control,}
              name="due_date"
              render={({ field }: { field: any },) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal">;
                          {field && field.value ? (;
                            format(field && field.value, "PPP");
                          ) : (;
                            <span className="text-muted-foreground">;
                              Pick a date;
                            </span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;
                      <Calendar
                        mode="single"
                        selected = {field && field.value,}
                        onSelect = {field && field.onChange,}
                        disabled = {(date,) => date < new Date(),}
                        initialFocus;
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
            />
=======
            />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <FormField
              control = {form && form.control,}
              name="amount"
              render={({ field }: { field: any },) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
                    <Input
                      type="number"
                      min="0"
                      step="0 && 0.01"
                      placeholder="0 && 0.00"
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            {onCancel && (
=======
            />;
          </div>;

          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                type="button"
                variant="outline"
                onClick = {onCancel,}
                disabled = {isSubmitting,}>;
                Cancel;
              </Button>;
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
<<<<<<< HEAD
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
=======
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );

}//If there are multiple milestones, submit them one by one <AIMilestoneGeneratorscope= {
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
}/>) ;
}</FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <Buttontype="button" variant="outline" onClick={
  onCancel 
}disabled= {
  isSubmitting 
}> Cancel </Button>) ";
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone") ;
}</Button> </div> </form> </Form> </div>) ;
}'"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
