
import React from 'react';

import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from '@/components/ui/form';
import {_Popover, _PopoverContent, _PopoverTrigger} from '@/components/ui/popover';

const _formSchema = z.object({_title: z.string().min(1, _'Title is required'), _description: z.string().optional(), _due_date: z.date().optional(), _amount: z.coerce.number().min(0, _'Amount must be greater than or equal to 0')});

type MilestoneFormValues = z.infer<typeof formSchema>;

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

  const _handleAddMilestones = (_milestones: GeneratedMilestone[]) => {_// If there's only one milestone, _submit it directly
    if (milestones.length === 1) {
      const _milestone = milestones[0];
      if (milestone) {
        onSubmit({
          title: milestone.title, _description: milestone.description, _due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined, _amount: milestone.estimatedHours * 10, _// Convert hours to a default payment amount});
        return;
      }
    }

    // If there are multiple milestones, submit them one by one
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
        <AIMilestoneGenerator
          scope={projectScope}
          startDate={_projectStartDate}
          endDate={_projectEndDate}
          projectType={_projectType}
          onAddMilestones={_handleAddMilestones}
          onAddMilestone={_handleAddMilestone}
        />
      )}

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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={_form.control}
            name="description"
            render={_(_{ field}: {_field: unknown}) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
                    {_...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={_form.control}
              name="due_date"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal"
                        >
                          {_field.value ? (
                            format(field.value, _"PPP")
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
                        selected={_field.value}
                        onSelect={_field.onChange}
                        disabled={_(_date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={_form.control}
              name="amount"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {_...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            {_onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={_isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? (
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
  );
}
