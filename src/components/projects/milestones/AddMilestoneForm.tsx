
return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (
        <AIMilestoneGenerator,
scope = {projectScope}
          startDate = {projectStartDate}
          endDate = {projectEndDate}
          projectType = {projectType}
          onAddMilestones = {handleAddMilestones}
          onAddMilestone = {handleAddMilestone}
        />
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField,
control = {form.control}
            name="title"
            render={({ field }: { field: any },) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Milestone title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField,
control = {form.control}
            name="description"
            render={({ field }: { field: any },) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea,
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
            <FormField,
control = {form.control}
              name="due_date"
              render={({ field }: { field: any },) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button,
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
                      <Calendar,
mode="single"
                        selected = {field.value}
                        onSelect = {field.onChange}
                        disabled = {(date,) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField,
control = {form.control}
              name="amount"
              render={({ field }: { field: any },) => (
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input,origin/main
type="number"
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
<div className="flex justify-end space-x-2 pt-4">;
{onCancel && (
<Button;
type="button"
                variant="outline"
                onClick = {onCancel}
                disabled = {isSubmitting}
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
}//If there are multiple milestones submit them one by one <AIMilestoneGenerator scope= {
  projectScope}startDate= {
  projectStartDate}endDate= {
  projectEndDate}projectType= {
  projectType}onAddMilestones= {
  handleAddMilestones}onAddMilestone= {
  handleAddMilestone}/>)origin/main
}</FormControl> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>)
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) "
}/> </div> <Button type="button" variant="outline" onClick={
  onCancel}disabled= {
  isSubmitting}> Cancel </Button>) "origin/main
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone")
}</Button> </div> </form> </Form> </div>)
}'"}