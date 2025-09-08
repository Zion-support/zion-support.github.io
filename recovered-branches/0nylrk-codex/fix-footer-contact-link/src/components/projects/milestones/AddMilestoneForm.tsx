

<<<<<<< HEAD

=======
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
  FormMessage} from '@/components/ui/form',
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger} from '@/components/ui/popover',
import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = z.object({
  title: z.string().min($2);
  description: z.string().optional($2);
  due_date: z.date().optional($2);
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),

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

export function AddMilestoneForm({;

export function AddMilestoneForm(): any ({;
  projectType?: string
}
export function AddMilestoneForm({

export function AddMilestoneForm({;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  onSubmit;

  isSubmitting;
  onCancel;'
  projectScope = '';'
  projectStartDate = '';
  projectEndDate = null;
<<<<<<< HEAD


=======

      });
      return

import React from 'react',;

  onCancel?: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string;



export function AddMilestoneForm({;
  projectType?: string;
}


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


  projectType = 'Other'
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      title: '',
      description: '',
      amount: 0}),

  const handleSubmit = (values: MilestoneFormValues) => {
    onSubmit($2);
    form.reset()
  },

  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
    // If there's only one milestone, submit it directly

      });
      return
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

export function AddMilestoneForm({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope = '',;
  projectStartDate = '',;
  projectEndDate = null,;

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
<<<<<<< HEAD

      title: '',;
      description: '',;
      amount: 0}}),;

=======


    form && form.reset();
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD





    }



=======
    }

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
  return (

  },

  const handleAddMilestone = $2;
      description: milestone.description,
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (


    <div className="space-y-6">;

      {/* AI Milestone Generator */}
<<<<<<< HEAD
      {projectScope && projectStartDate && (;


        <AIMilestoneGenerator


          scope={projectScope}


=======
      {projectScope && projectStartDate && (
        <AIMilestoneGenerator
}
scope={projectScope}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}

<<<<<<< HEAD

          <FormField
            control={form && form.control}
            name="title"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;


const form_schema = z.object ({

type MilestoneFormValues = z.infer < typeof form_schema>;
interface AddMilestoneFormProps {
  }
  "on_submit": ("data": MilestoneFormValues) => void,
  "is_submitting": boolean,

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

          <FormField;
            control={form.control}"
            name="title";
            render={({ field }) => (

                <FormControl>;
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;


          />;


          <FormField
            control={form && form.control}
            name="description"


=======
                <FormControl>;"
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;

<<<<<<< HEAD


=======

                    className="min-h-[100px]"
              </FormItem>)}
          />;
          <FormField;

            name="description";
            render={({ field }) => (
                <FormControl>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

<<<<<<< HEAD


                <FormItem className="flex flex-col">;

=======
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
<<<<<<< HEAD


                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;


            />;


            <FormField
              control={form && form.control}
              name="amount"


=======
                            <span className="text-muted-foreground">;"
                              Pick a date;
                            </span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD


                      {...field}
                    />;

                  </FormControl>;
                  <FormMessage />;

            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
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
            <FormField
              control={form.control}
              name="due_date"
              render={({ field }) => (
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
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
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

=======
                    <Input;

                  </FormControl>;
                  <FormMessage />;

            />;
          </div>;
          <div className="flex justify-end space-x-2 pt-4">;"
            {onCancel && (;                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;"
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
                  }
                  Saving...;
                </>;
              ) : (;
                "Add Milestone";"
              )}
                </FormItem>)}
            />;
          </div>;
          <div className="flex justify - end space - x-2 pt-4">;"
            {on_cancel && (
              <Button;
                }
                type="button";"
                variant="outline";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                on_click={on_cancel}
                disabled={is_submitting}
              >;
                Cancel;
<<<<<<< HEAD
=======
              </Button>)}
            <Button type="submit" disabled={is_submitting}>;"
              {is_submitting ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;"
                  }
                  Saving...;
                </>) : (
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </Button>)}"
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? (

<<<<<<< HEAD
=======

            </Button>;
          </div>;
        </form>;
      </Form>;

    </div>;
  ),;}
 type MilestoneFormValues = z.infer<typeof formSchema>;
const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
  //If there's only one milestone, submit it directly if (milestones.length === 1) {
  <AIMilestoneGenerator scope= {
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
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <Button type="button" variant="outline" onClick= {
  onCancel 
}disabled= {
  isSubmitting 
}> Cancel </Button>) 
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone") 
}</Button> </div> </form> </Form> </div>) 
}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
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
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
