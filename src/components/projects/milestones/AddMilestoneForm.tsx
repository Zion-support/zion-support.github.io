// If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
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


<<<<<<< HEAD
import React from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'
import { format  } from 'date-fns';
import { Button  } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form;

=======
  },

  const handleAddMilestone = (milestone: GeneratedMilestone) => {


    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })

type MilestoneFormValues = z.infer < typeof form_schema>;
origin/cursor/automate-test-improve-and-merge-code-2533

type MilestoneFormValues = z.infer < typeof form_schema>;
pr-12325
import React from 'react';
import { use_form } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react'import { format } from 'date - fns';
import { Button } from '@/components / ui / button';
import { Calendar } from '@/components / ui / calendar';
import {
import { Button } from '@/components/ui/ button';
import { Calendar } from '@/components/ui/ calendar';
import {
  // TODO: Implement
}
pr-12325
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
  FormMessage} from '@/components/ui/ form';
import { Input } from '@/components/ui/ input';
import { Textarea } from '@/components/ui/ textarea';
  Popover;
  PopoverContent;
  PopoverTrigger} from '@/components/ui/ popover'; import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/ useMilestoneGenerator';
const form_schema = z.object ({)
pr-12325
  title: z.string ().min (1, 'Title is required');
  description: z.string ().optional (),
  due_date: z.date ().optional (),
  amount: z.coerce.number ().min (0, 'Amount must be greater than or equal to 0')});
type MilestoneFormValues = z.infer < typeof form_schema>;
  PopoverTrigger } from '@/components/ui/popover';
import { AIMilestoneGenerator  } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = null;
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
origin/cursor/automate-test-improve-and-merge-code-2533
interface AddMilestoneFormProps {
interface AddMilestoneFormProps {
  // TODO: Implement
pr-12325
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
export /**
 * AddMilestoneForm - Function description;
 */
function AddMilestoneForm() {
  const form = use_form < MilestoneFormValues>({)
    resolver: zod_resolver (form_schema),
    default_values: {,
  title: ,
      description: ,
      amount: 0}}),
  const handle_submit = (values: MilestoneFormValues) =>: any {
  // TODO: Implement
    on_submit (values);    form.reset ();
  const handleAddMilestones = (milestones: GeneratedMilestone[], ) =>: any {
  // TODO: Implement
    // If there's only one milestone, submit it directly;
    // Check condition;
if ( {) {
  $2;
      const milestone = milestones[0];
      // Check condition;
        on_submit ({
          title: milestone.title,
          description: milestone.description,)
pr-12325
          due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
          amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
        });
        return;
      }
    }
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
  Form;
>>>>>>> origin/main
  FormControl;
  FormField;
  FormItem;
  FormLabel;
<<<<<<< HEAD

  FormMessage } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover;
  PopoverContent;
  PopoverTrigger } from '@/components/ui/popover';
import { AIMilestoneGenerator  } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = null;

=======
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
  },

  const handleAddMilestone = (milestone: GeneratedMilestone,) => {;
    onSubmit({;
      title: milestone && milestone.title,;
      description: milestone && milestone.description,;
      due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
      amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    });
  };

  return (


  },


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
>>>>>>> origin/main
  return (
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

          <FormField
            control = {form && form.control,}
            name="title"
            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
    <div className="space - y-6">;
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
      <Form {...form}>;
        <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;
          <FormField;
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


              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
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

            <FormField
              control = {form && form.control,}
              name="due_date"
              render={({ field }: { field: any },) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
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


          onAddMilestone = {handleAddMilestone, })
        />)}

"
        <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;"
            control = {form.control, }"
            name="title";"
            render={({ field }: { field: any }, ) => (


                <FormLabel > Title;
                <FormControl>;
                  <Input placeholder="Milestone title" {...field} />;"

                ;
                <FormMessage />;

            control = {form && form.control,}"
            name="description"")
            render={({ field }: { field: any }) => (



              <FormItem>
)
                <FormLabel>Description (optional)
                <FormControl>

                  <Textarea;"
                    placeholder="Describe what needs to be delivered"""
                    className="min-h-[100px]""
              )}

            name="description";"

                <FormLabel > Description (optional);

                    placeholder="Describe what needs to be delivered";""
                    className="min - h-[100px]";"
                    {...field}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
              name="due_date""
                <FormItem className="flex flex-col">"
                  <FormLabel>Due Date (optional)
                  <Popover>

                    <PopoverTrigger asChild>


                        <Button;"
                          variant="outline"""
                          className="w-full pl-3 text-left font-normal""
                        >
                            <span className="text-muted-foreground">"
</span>
                            </span>"
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />"

                        
                      
                    <PopoverContent className="w-auto p-0" align="start">"

                      <Calendar;"
                        mode="single""
pr-12325
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
              control = {form && form.control,}
              name="amount"
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
                  <FormLabel>Amount ($)</FormLabel>
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
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Add Milestone"
              )}

            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );

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
              )}"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
              name="due_date";"
                <FormItem className="flex flex - col">;"
                  <FormLabel > Due Date (optional);
                  <Popover>;

                    <PopoverTrigger as_child>;


                          variant="outline";""
                          className="w - full pl - 3 text - left font - normal";"
                        >;
                            <span className="text - muted - foreground">;"
                            </span>)}"
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;"

                    ;"
                    <PopoverContent className="w - auto p - 0" align="start">;"

                        mode="single";"
                        selected = {field.value, }
                        on_select = {field.on_change, }
                        disabled = {(date, ) => date < new Date (), }


              name="amount""

                  <FormLabel>Amount ($);



                  <FormLabel>Amount ($)

                    <Input;"
                      type="number"""
                      min="0"""
                      step="0 && 0.01"""
                      placeholder="0 && 0.00""

              name="amount";"

                  <FormLabel > Amount ($);

                      type="number";""
                      min="0";""
                      step="0.01";""
                      placeholder="0.00";"


          </div>;"
          <div className="flex justify-end space-x-2 pt-4">;"
                type="button"""
                variant="outline""
                onClick={onCancel}
                disabled={isSubmitting}

            <Button type="submit" disabled={isSubmitting}>"

                <>"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
</Loader2>
                </>
              ) : ("
                "Add Milestone"")

          </div>;
        </form>;
          <div className="flex justify - end space - x-2 pt - 4">;"
                type="button";""
                variant="outline";"
                on_click = {on_cancel, }
                disabled = {is_submitting, }

            <Button type="submit" disabled={is_submitting}>;"

                <>;"
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
                </>) : ()"
                "Add Milestone")}"
pr-12325
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
;
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );

}//If there are multiple milestones, submit them one by one <AIMilestoneGenerator scope= {;
  projectScope ;
}startDate= {;
  projectStartDate ;
}endDate= {;
  projectEndDate ;
}projectType= {;
  projectType ;
}onAddMilestones= {;
  handleAddMilestones ;
}onAddMilestone= {;
  handleAddMilestone ;
}/>) ;
}</FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <Button type="button" variant="outline" onClick={;
  onCancel ;
}disabled= {;
  isSubmitting ;
}> Cancel </Button>) ";
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone") ;
}</Button> </div> </form> </Form> </div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533

} <FormMessage /> );

}/> <FormField <FormItem> <FormLabel > Description (optional)  <FormControl> <Textarea />  <FormMessage /> );
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormLabel > Due Date (optional)  <Popover> <PopoverTrigger as_child> <FormControl> <Button variant="outline" className="w - full pl - 3 text - left font - normal" >) : (<span className="text - muted - foreground" > Pick a date </span>) ";"
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />    <PopoverContent className="w - auto p - 0" align="start" > <Calendar initial_focus />   <FormMessage /> );"
}/> <FormField <FormItem> <FormLabel > Amount ($)  <FormControl> <Input />  <FormMessage /> ) ";"
}/> </div> <Button type="button" variant="outline" on_click={"
  on_cancel;
}disabled= {
  is_submitting;"
}> Cancel ) ";""
}<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : ("Add Milestone");"
} </div> </form>  </div>);"
pr-12325
