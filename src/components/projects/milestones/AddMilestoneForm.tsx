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



  FormControl;
  FormField;
  FormItem;
  FormLabel;

  return (
    <div className="space-y-6">"
      {/* AI Milestone Generator */}
  },
  return (
    <div className="space-y-6">"

  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title,
      description: milestone.description,
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
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
            control={form.control}
            name="title""
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
            name="description""

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
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe what needs to be delivered""
                    className="min-h-[100px]"",
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
                    className="min - h-[100px]";,
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
          />;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField
              control={form.control}
              name="due_date""
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-col">"
              </FormItem>;
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          variant="outline""
                          className="w-full pl-3 text-left font-normal""
                        >
                          {field.value ? (
                            format(field.value, "PPP")"
                          ) : (
                            <span className="text-muted-foreground">"
                              Pick a date
                            </span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />"
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">"
                      <Calendar
                        mode="single""
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
                            format (field.value, "PPP")) : ("
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
              name="amount""
              render={({ field }: { field: any },) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
            />;
            <FormField;
              control={form.control}
              name="amount""
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
                    <Input type="number""
                      min="0""
                      step="0 && 0.01""
                      placeholder="0 && 0.00""
                </FormItem />)}
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
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
            />;
          </div>;
          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;
              <Button
                type="button""
                variant="outline""
                </FormItem>;
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
            <Button type="submit" disabled={isSubmitting}>"
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
                  Saving...
                </>
              ) : (
                "Add Milestone""
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
                "Add Milestone")}"
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
}/> </div> <Button type="button" variant="outline" on_click={"
  on_cancel;
}disabled= {
  is_submitting;
}> Cancel </Button>) ";
}<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : ("Add Milestone");
}</Button> </div> </form> </Form> </div>);
}'"}"
}
;
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
