

  talent: TalentProfile,
  onClose: () => void,
  userDetails?: UserProfile
}



const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {
    message: "Interview date must be in the future"

  }),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),
  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">
            <img


              src={talent.profile_picture_url || "/placeholder.svg"}
              alt={talent.full_name}
              className="h-full w-full object-cover"
              loading="lazy"
            />



          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>
          </div>
        </div>

        <FormField
          control={form.control}
          name='title'
          render={({
            field
          }: {
            field: ControllerRenderProps<z.infer<typeof formSchema>, 'title'>
          }) => (            <FormItem>
          name="title"
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "title"> }) => (
            <FormItem>


              <FormLabel>Interview Title</FormLabel>
              <FormControl>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "date"> }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>

                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button


                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button


                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus
                      className="p-3 pointer-events-auto"


                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>


                <FormLabel>Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                  </FormControl>


                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "duration"> }) => (
              <FormItem>


          <FormField
            control={form.control}
            name='duration'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>,
                'duration'
              >
            }) => (              <FormItem>

                <FormLabel>Meeting Link (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Add your ${form.watch('platform')} link here`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}


          control={form.control}
          name="notes"
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "notes"> }) => (
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"


                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



          </Button>
        </div>
      </form>
    </Form>
  )


