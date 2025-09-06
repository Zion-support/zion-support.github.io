




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}

            name="institution"
            render={({ field }: { field: any }) => (
              <FormItem>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <FormLabel>Institution</FormLabel>
                <FormControl>
                  <Input placeholder="University of California, MIT, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          />;
          <FormField;
            control={form.control}
            name="degree"
            render={({ field }: { field: any }) => (
              <FormItem>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <FormLabel>Degree</FormLabel>
                <FormControl>
                  <Input placeholder="Bachelor's, Master's, Ph.D, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          />;
        </div>;
        <FormField;
          control={form.control}
          name="field_of_study"
          render={({ field }: { field: any }) => (
            <FormItem>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <FormLabel>Field of Study</FormLabel>
              <FormControl>
                <Input placeholder="Computer Science, Engineering, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}

            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>

                  <Input type='date' {...field} value={field.value || ''} />                </FormControl>
                <FormMessage />
              </FormItem>

=======
                  <Input 
                    type="date" 
                    {...field}
                    value={field.value || ''} ;
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            )}
          />

          <div className="space-y-4">
            <FormField
              control={form.control}


                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I am currently studying here</FormLabel>
                  </div>
                </FormItem>
              )}

            />;
            {!form.watch('is_current') && (;
              <FormField;
                control={form.control}
                name="end_date"

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>

                      <Input type='date' {...field} value={field.value || ''} />                    </FormControl>

=======
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''} 
                      />
                    </FormControl>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

          </div>;
        </div>;
        <FormField;
          control={form.control}
          name="location"
          render={({ field }: { field: any }) => (
            <FormItem>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <FormLabel>Location (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Cambridge, MA" {...field} />
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
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Notable achievements, courses, activities..."
                  className="min-h-[100px]"

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





            {isEditing ? 'Update' : 'Add'} Education
          </Button>
        </div>
      </form>
    </Form>
  )

}

