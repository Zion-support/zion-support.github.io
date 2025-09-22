
import React from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react',;
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
  projectEndDate = null,;
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
      onSubmit({;
        title:milestone.title,;
        description:milestone.description,;
        due_date:milestone.dueDate ? new Date(milestone.dueDate) :undefined,;
        amount:milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      }),;
      return,;
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

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;

                            <span className="text-muted-foreground">;
                              Pick a date;
                            </span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;

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

                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;

            </Button>;
          </div>;
        </form>;
      </Form>;
