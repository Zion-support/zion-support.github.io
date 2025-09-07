// If there are multiple milestones, submit them one by one

    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
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

    <div className="space-y-6">
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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
    <div className="space - y-6">;
      {project_scope && projectStartDate && (
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

              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
              </FormItem>)}
            control = {form.control, }
            name="description";
            render={({ field }: { field: any }, ) => (
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min - h-[100px]";
                    {...field}
                </FormControl>;
                <FormMessage />;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

              name="due_date"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
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
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected = {field.value,}
                        onSelect = {field.onChange,}
                        disabled = {(date,) => date < new Date(),}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              control = {form.control,}
              name="amount"
              render={({ field }: { field: any },) => (
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}

                        initialFocus;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              name="due_date";
                <FormItem className="flex flex - col">;
                  <FormLabel > Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                        <Button;
                          variant="outline";
                          className="w - full pl - 3 text - left font - normal";
                        >;
                            format (field.value, "PPP")) : (
                            <span className="text - muted - foreground">;
                              Pick a date;
                            </span>)}
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                        </Button>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0" align="start">;
                      <Calendar;
                        mode="single";
                        selected = {field.value, }
                        on_select = {field.on_change, }
                        disabled = {(date, ) => date < new Date (), }
                        initial_focus;
                    </PopoverContent>;
                  </Popover>;

              control = {form && form.control,}
                  <FormLabel>Amount ($)</FormLabel>;

                  <FormLabel>Amount ($)</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      step="0 && 0.01"
                      placeholder="0 && 0.00"
              name="amount";
                  <FormLabel > Amount ($)</FormLabel>;
                    <Input;
                      type="number";
                      min="0";
                      step="0.01";
                      placeholder="0.00";

          </div>;

          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;

                type="button"
                onClick = {onCancel,}
                disabled = {isSubmitting,}
                Cancel
                onClick={onCancel}
                disabled={isSubmitting}
                Cancel;

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
                "Add Milestone"
          </div>
        </form>
      </Form>
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
        </form>;
      </Form>;
  );

          <div className="flex justify - end space - x-2 pt - 4">;
            {on_cancel && (
                type="button";
                on_click = {on_cancel, }
                disabled = {is_submitting, }
              </Button>)}
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Saving...;
                </>) : (
                "Add Milestone")}
    </div>);
  project_scope;
}start_date= {
  projectStartDate;
}end_date= {
  projectEndDate;
}project_type= {
  project_type;

  handleAddMilestones;

  handleAddMilestone;
}/>);
}</FormControl> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>);
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormLabel > Due Date (optional) </FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button variant="outline" className="w - full pl - 3 text - left font - normal" >) : (<span className="text - muted - foreground" > Pick a date </span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar initial_focus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <Button type="button" variant="outline" on_click={
  on_cancel;
  is_submitting;
}> Cancel </Button>) ";
}<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : ("Add Milestone");
}</Button> </div> </form> </Form> </div>);
}
;