

// Define form schema
const _formSchema = z.object({_company_name: z.string().min(1, _"Company name is required"), _role_title: z.string().min(1, _"Role title is required"), _start_date: z.date({
    required_error: "Start date is required"}),
  end_date: z.date().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()});

type FormValues = z.infer<typeof formSchema>;

interface WorkExperienceItemFormProps {_initialData?: WorkExperience;
  onSubmit: (_data: WorkExperience) => Promise<void>;
  onCancel: () => void;}

export function WorkExperienceItemForm(_{_initialData, _onSubmit, _onCancel}: WorkExperienceItemFormProps) {_const [isEnhancementDialogOpen, _setIsEnhancementDialogOpen] = useState(false);

  // Set up form
  const _form = useForm<FormValues>({
    resolver: zodResolver(formSchema), _defaultValues: {
      company_name: initialData?.company_name || "", _role_title: initialData?.role_title || "", _start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(), _end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined, _is_current: initialData?.is_current || false, _description: initialData?.description || "", _location: initialData?.location || ""}});
  
  const {_isSubmitting} = form.formState;
  const _watchIsCurrent = form.watch("is_current");
  const _watchRoleTitle = form.watch("role_title");
  const _watchCompanyName = form.watch("company_name");

  const _handleFormSubmit = async (_values: FormValues) => {_// Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
      id: initialData?.id, _company_name: values.company_name, _// Required
      role_title: values.role_title, _// Required
      start_date: values.start_date, _// Required
      end_date: values.end_date, _// Optional
      is_current: values.is_current, _// Required
      description: values.description, _// Optional
      location: values.location, _// Optional};
    
    await onSubmit(workExperience);
  };

  const _handleAIEnhancement = (_content: string) => {_form.setValue("description", _content, _{ shouldDirty: true});
    setIsEnhancementDialogOpen(false);
  };

  return (
    <>
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={_form.control}
              name="company_name"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Corporation" {_...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={_form.control}
              name="role_title"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Senior Developer" {_...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={_form.control}
              name="location"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York, NY (Remote)" {_...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={_form.control}
              name="is_current"
              render={_(_{ field}) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Current Position</FormLabel>
                  <div className="flex items-center gap-2 h-10">
                    <Switch
                      checked={_field.value}
                      onCheckedChange={_field.onChange}
                      id="current-position"
                    />
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">
                      I currently work here
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={_form.control}
              name="start_date"
              render={_(_{ field}) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={_"outline"}
                          className={_cn(
                            "w-full pl-3 text-left font-normal", _!field.value && "text-muted-foreground"
                          )}
                        >
                          {_field.value ? (
                            format(field.value, _"MMM yyyy")
                          ) : (
                            <span>Select date</span>
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
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={_1990}
                        toYear={_new Date().getFullYear()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {_!watchIsCurrent && (_<FormField
                control={form.control}
                name="end_date"
                render={_({ field}) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={_"outline"}
                            className={_cn(
                              "w-full pl-3 text-left font-normal", _!field.value && "text-muted-foreground"
                            )}
                          >
                            {_field.value ? (
                              format(field.value, _"MMM yyyy")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={_field.value || undefined}
                          onSelect={_field.onChange}
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={_1990}
                          toYear={_new Date().getFullYear()}
                          disabled={_(_date) => date > new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <FormField
            control={_form.control}
            name="description"
            render={_(_{ field}) => (_<FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>Description</FormLabel>
                  <div className="flex gap-2">
                    <AIEnhancementButton
                      options={_{
                        enhancementType: "work-description", _content: field.value || "", _context: `${watchRoleTitle} at ${_watchCompanyName}`
                      }}
                      onEnhanced={_(content) => form.setValue("description", _content, _{ shouldDirty: true})}
                      buttonText="Enhance with AI"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={_() => setIsEnhancementDialogOpen(true)}
                      className="text-xs"
                    >
                      AI Writer
                    </Button>
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    placeholder="Describe your responsibilities, achievements, and skills used in this role..."
                    className="min-h-[150px]"
                    {_...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={_onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>Save</>
              )}
            </Button>
          </div>
        </form>
      </Form>

      <AIEnhancementDialog
        title="Enhance Work Experience Description"
        isOpen={_isEnhancementDialogOpen}
        onClose={_() => setIsEnhancementDialogOpen(false)}
        onApply={_handleAIEnhancement}
        defaultOptions={_{
          enhancementType: "work-description", _content: form.getValues("description") || "", _context: `${watchRoleTitle} at ${_watchCompanyName}`}}
        initialContent={_form.getValues("description") || ""}
      />
    </>
  );
}
