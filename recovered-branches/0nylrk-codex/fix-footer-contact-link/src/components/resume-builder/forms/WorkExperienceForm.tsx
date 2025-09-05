import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from '@/components/ui/form';

// Define schema for form validation
const _workExperienceSchema = z.object({_company_name: z.string().min(1, _'Company name is required'), _role_title: z.string().min(1, _'Job title is required'), _start_date: z.string().min(1, _'Start date is required'), _end_date: z.string().optional(), _is_current: z.boolean().default(false), _description: z.string().optional(), _location: z.string().optional()});

type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;

interface WorkExperienceFormProps {_resumeId: string;
  workExperiences: WorkExperience[];
  onComplete: () => void;
  onBack: () => void;}

export function WorkExperienceForm(_{_resumeId, _workExperiences, _onComplete, _onBack}: WorkExperienceFormProps) {_const { addWorkExperience, _updateWorkExperience, _deleteWorkExperience, _isLoading} = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates to string
  const _formatDateValue = (_dateValue: string | Date | undefined): string => {_if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, _'yyyy-MM-dd');};

  const _form = useForm<WorkExperienceFormValues>({_resolver: zodResolver(workExperienceSchema), _defaultValues: {
      company_name: '', _role_title: '', _start_date: format(new Date(), _'yyyy-MM-dd'), _is_current: false, _description: '', _location: ''}});

  const _handleAddOrUpdate = async (_data: WorkExperienceFormValues) => {_try {
      setError(null);
      let success;

      const experienceData: WorkExperience = {
        company_name: data.company_name, _// Required field
        role_title: data.role_title, _// Required field
        start_date: data.start_date, _// Required field
        end_date: data.is_current ? undefined : (data.end_date || undefined), _is_current: data.is_current, _description: data.description, _location: data.location};

      if (editingId) {_success = await updateWorkExperience(editingId, _experienceData);} else {_success = await addWorkExperience(resumeId, _experienceData);}

      if (success) {_form.reset({
          company_name: '', _role_title: '', _start_date: format(new Date(), _'yyyy-MM-dd'), _is_current: false, _description: '', _location: ''});
        setEditingId(null);
      }
    } catch (err: unknown) {_setError(err.message || 'An error occurred');}
  };

  const _handleEdit = (_work: WorkExperience) => {_setEditingId(work.id!);
    form.reset({
      ...work, _start_date: formatDateValue(work.start_date), _end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined});
  };

  const _handleDelete = async (_id: string) => {_if (confirm('Are you sure you want to delete this work experience?')) {
      await deleteWorkExperience(id);}
  };

  const _handleEnhanceDescription = (_enhancedContent: string) => {_form.setValue('description', _enhancedContent);};

  return (_<div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">
          Add your work history to showcase your professional experience.
        </p>
      </div>

      {_workExperiences.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-md font-medium">Added Experience</h3>
          {workExperiences.map((work) => (
            <Card key={work.id} className="bg-muted/40">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{_work.role_title}</h4>
                    <p className="text-sm text-muted-foreground">{_work.company_name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {_typeof work.start_date === 'string' 
                        ? work.start_date 
                        : format(work.start_date, _'MMM yyyy')} - {_work.is_current 
                        ? 'Present' 
                        : (work.end_date ? (typeof work.end_date === 'string' 
                          ? work.end_date 
                          : format(work.end_date, _'MMM yyyy')) : '')}
                    </p>
                    {_work.location && (
                      <p className="text-xs text-muted-foreground">{work.location}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={_() => handleEdit(work)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={_() => handleDelete(work.id!)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {_work.description && (
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {_editingId ? 'Update Experience' : 'Add Experience'}
        </h3>

        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={_form.control}
                name="company_name"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Google, Microsoft, etc." {_...field} />
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
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer, Product Manager, etc." {_...field} />
                    </FormControl>
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
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {_...field} 
                        value={_field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormField
                  control={_form.control}
                  name="is_current"
                  render={_(_{ field}) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                      <FormControl>
                        <Checkbox
                          checked={_field.value}
                          onCheckedChange={_field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {_!form.watch('is_current') && (_<FormField
                    control={form.control}
                    name="end_date"
                    render={_({ field}) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            {_...field} 
                            value={_field.value || ''} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>

            <FormField
              control={_form.control}
              name="location"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="San Francisco, CA (Remote)" {_...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={_form.control}
              name="description"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel className="flex justify-between">
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={_field.value || ''}
                      enhancementType="work-description"
                      context={_`Role: ${form.getValues('role_title')} at ${_form.getValues('company_name')}`}
                      onEnhanced={_handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your responsibilities and accomplishments..."
                      className="min-h-[100px]"
                      {_...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={_() => {
                  if (editingId) {
                    setEditingId(null);
                    form.reset({
                      company_name: '', _role_title: '', _start_date: format(new Date(), _'yyyy-MM-dd'), _is_current: false, _description: '', _location: ''});
                  } else {_onBack();}
                }}
              >
                {_editingId ? 'Cancel' : 'Back'}
              </Button>

              <div className="flex gap-2">
                <Button type="submit" disabled={_isLoading}>
                  {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {_editingId ? 'Update' : 'Add'} Experience
                </Button>

                {_!editingId && workExperiences.length > 0 && (
                  <Button type="button" onClick={onComplete}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
