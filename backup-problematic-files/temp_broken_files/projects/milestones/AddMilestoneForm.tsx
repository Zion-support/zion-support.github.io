
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
;
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;

  FormMessage} from '@/components/ui/form',;
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

  Popover,;
  PopoverContent,;
  PopoverTrigger} from '@/components/ui/popover',;
import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
;
const formSchema = z.object({;
  title: z.string().min(1;, 'Title is required'),,
const formSchema = z.object({;)
  title: z.string().min(1;, 'Title is required'),;
pr-12325
  description: z.string().optional();,;
  due_date: z.date().optional();,;
  amount: z.coerce.number().min(0;, 'Amount must be greater than or equal to 0')}),;
type MilestoneFormValues = z.infer<typeof formSchema>,;
</typeof>
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema);,;
    defaultValues:{;
      title: '';,,
  description: '';,;
      amount: 0;}}),;
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
          title: milestone.title;,,
  description: milestone.description;,;
          due_date: milestone.dueDate ? new Date(milestone.dueDate) :undefined;,;
          amount: milestone.estimatedHours * 10;, // Convert hours to a default payment amount;
        }),;
        return,;
      }
    }
;
    // If there are multiple milestones, submit them one by one;
    milestones.forEach(milestone => {;
      onSubmit({;
        title: milestone.title;,,
  description: milestone.description;,;
        due_date: milestone.dueDate ? new Date(milestone.dueDate) :undefined;,;
        amount: milestone.estimatedHours * 10;, // Convert hours to a default payment amount;
      }),;
    }),;
  },;
;
  const handleAddMilestone = (milestone:GeneratedMilestone) => {;
    onSubmit({;
      title: milestone.title;,,
  description: milestone.description;,;
      due_date: milestone.dueDate ? new Date(milestone.dueDate) :undefined;,;
      amount: milestone.estimatedHours * 10;, // Convert hours to a default payment amount;
    }),;
  },;
;
  return (;
    <div className="space-y-6">;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;

    <div className="space-y-6">;"
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

      <Form {...form}>;
)"
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;"
</form>
          <FormField;
            control={form.control}"
            name="title";"
            render={({ field } { field: any ;}) => (;

              <FormItem>;

                <FormLabel>Title;
                <FormControl>;
"
                  <Input placeholder="Milestone title" {...field} />;"
                <FormMessage />;
)
              ;            )}
            name="description";"
                <FormLabel>Description (optional);

                  <Textarea;"
                    placeholder="Describe what needs to be delivered";""
                    className="min-h-[100px]";"
                    {...field}


              ;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
              name="due_date";"
                <FormItem className="flex flex-col">;"
                  <FormLabel>Due Date (optional);
                  <Popover>;

                    <PopoverTrigger asChild>;


                        <Button;"
                          variant="outline";""
                          className="w-full pl-3 text-left font-normal";"
                        >;
                            <span className="text-muted-foreground">;"
</span>
                            </span>;"
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
                    <PopoverContent className="w-auto p-0" align="start">;"
                      <Calendar;"
                        mode="single";"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}


                ;              )}
              name="amount";"
                  <FormLabel>Amount ($);

                    <Input;"
                      type="number";""
                      min="0";""
                      step="0.01";""
                      placeholder="0.00";"
          </div>;"
          <div className="flex justify-end space-x-2 pt-4">;"
                type="button";""
                variant="outline";"
                onClick={onCancel}
                disabled={isSubmitting}

            <Button type="submit" disabled={isSubmitting}>;"
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
                </>;
              ) :(;"
                "Add Milestone";")
              )}
          </div>;
        </form>;
  ),; type MilestoneFormValues = z.infer<typeof formSchema>;
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

} <FormMessage /> ) ;

}/> <FormField <FormItem> <FormLabel>Description (optional)  <FormControl> <Textarea />  <FormMessage /> ) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional)  <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) ";"}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />    <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus />   <FormMessage /> ) ;"}/> <FormField <FormItem> <FormLabel>Amount ($)  <FormControl> <Input />  <FormMessage /> ) ";"}/> </div> <Button type="button" variant="outline" onClick={;"
  onCancel ;
}disabled= {;"
  isSubmitting ;"}> Cancel ) ";"}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone") ;"
</Loader2>"
} </div> </form>  </div>) ;"}'"""