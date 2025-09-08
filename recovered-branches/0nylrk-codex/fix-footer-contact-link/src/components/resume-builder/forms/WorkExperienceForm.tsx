
<<<<<<< HEAD
=======
import { format } from 'date-fns';
import { Form;
  FormControl;
  FormField;

>>>>>>> origin/cursor/delete-old-data-records-6bba

// Define schema for form validation

const workExperienceSchema = z.object({
  company_name: z.string().min(1, 'Company name is required');
  role_title: z.string().min(1, 'Job title is required');

  start_date: z.string().min(1, 'Start date is required');
  end_date: z.string().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()})
type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;
interface WorkExperienceFormProps {}
  resumeId: string;
  workExperiences: WorkExperience[]
  onComplete: () => void;
  onBack: () => void;
}

export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;

  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {'
    if (!dateValue) return '';'
    if (typeof dateValue === 'string') return dateValue'
    return format(dateValue, 'yyyy-MM-dd')
  }
  const form = useForm<WorkExperienceFormValues>({}
    resolver: zodResolver(workExperienceSchema)
    defaultValues: {'
      company_name: '''
      role_title: '''
      start_date: format(new Date(), 'yyyy-MM-dd');
      is_current: false'
      description: '''
      location: ''}})
  const handleAddOrUpdate = async (data: WorkExperienceFormValues) => {}
    try {}
      setError(null);

<<<<<<< HEAD
      let success

      const experienceData: WorkExperience = {
        company_name: data.company_name, // Required field
        role_title: data.role_title, // Required field
        start_date: data.start_date, // Required field

        end_date: data.is_current ? undefined : (data.end_date |undefined)
        is_current: data.is_current
        description: data.description
        location: data.location}

      if (editingId) {
        success = await updateWorkExperience(editingId, experienceData)
      } else {
        success = await addWorkExperience(resumeId, experienceData)
      }
      if (success) {
        form.reset({

          company_name: ''
          role_title: ''
          start_date: format(new Date(), 'yyyy-MM-dd');
          is_current: false
          description: ''
          location: ''})
        setEditingId(null)

=======
      let success;
      const experienceData: WorkExperience = {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
        company_name: data.company_name, // Required field;
        role_title: data.role_title, // Required field;
        start_date: data.start_date, // Required field;
        end_date: data.is_current ? undefined : (data.end_date |undefined)
        is_current: data.is_current;
        description: data.description;
        location: data.location}
      if (editingId) {}
        success = await updateWorkExperience(editingId, experienceData)
      } else {}
        success = await addWorkExperience(resumeId, experienceData)
      }
      if (success) {}
        form.reset({'
          company_name: '''
          role_title: '''
          start_date: format(new Date(), 'yyyy-MM-dd');
          is_current: false'
          description: '''
          location: ''})
        setEditingId(null)


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    } catch (err: any) {'
      setError(err.message |'An error occurred')
    }

  };

  const handleEdit = (work: WorkExperience) => {

    setEditingId(work.id!);
    form.reset({}
      ...work;
      start_date: formatDateValue(work.start_date)
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined})
  }
  const handleDelete = async (id: string) => {'
    if (confirm('Are you sure you want to delete this work experience?')) {}
      await deleteWorkExperience(id)
    }

  };
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },;
  const handleEdit = (work: WorkExperience) => {;
    setEditingId(work.id!),;
    form.reset({;
      ...work,;
      start_date: formatDateValue(work.start_date),;
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined});
  },;
  const handleDelete = async (id: string) => {;'
    if (confirm('Are you sure you want to delete this work experience?')) {;
      await deleteWorkExperience(id);
    }
  },
<<<<<<< HEAD



=======

  const handleEnhanceDescription = (enhancedContent: string) => {'
    form.setValue('description', enhancedContent)
  },


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

<<<<<<< HEAD



=======
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
  const handleEnhanceDescription = (enhancedContent: string) => {'
    form.setValue('description', enhancedContent)
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <div className="space-y-6">
      <div>"
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <p className="text-muted-foreground">
          Add your work history to showcase your professional experience.
        </p>
      </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {workExperiences.length > 0 && ("
        <div className="space-y-4">"
          <h3 className="text-md font-medium">Added Experience</h3>
          {workExperiences.map((work) => ("
            <Card key={work.id} className="bg-muted/40">"
              <CardContent className="pt-6">"
                <div className="flex justify-between">
                  <div>"
                    <h4 className="font-medium">{work.role_title}</h4>"
                    <p className="text-sm text-muted-foreground">{work.company_name}</p>"
                    <p className="text-xs text-muted-foreground mt-1">'
                      {typeof work.start_date === 'string'
                        ? work.start_date'
                        : format(work.start_date, 'MMM yyyy')} - {work.is_current'
                        ? 'Present''
                        : (work.end_date ? (typeof work.end_date === 'string'
                          ? work.end_date'
                          : format(work.end_date, 'MMM yyyy')) : '')}
                    </p>
                    {work.location && ("
                      <p className="text-xs text-muted-foreground">{work.location}</p>
<<<<<<< HEAD
=======

                    <Button"
                      variant="ghost""
                      size="icon"
                      onClick={() => handleEdit(work)}"
      <div className="bg-muted/40 p-6 rounded-lg">"
        <h3 className="text-md font-medium mb-4">'
>>>>>>> origin/cursor/delete-old-data-records-6bba

          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>
        <Form {...form}>"
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <Trash2 className="h-4 w-4" />;
                    </Button>;
                  </div>;
                </div>;

<<<<<<< HEAD
                {work.description && (;
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>;
                )}
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
;
      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Experience' :'Add Experience'}
        </h3>;
;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <FormField;
                control={form.control}
                name="company_name";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Company Name</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Google, Microsoft, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;
              />;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <Input 

                        type="date" 
                        {...field} '
                        value={field.value || ''}

<<<<<<< HEAD


=======
                <FormField
                  control={form && form.control}

                  name="is_current"
                  render={({ field }) => (;"
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">;
                      <FormControl>;
                        <Checkbox;
                          checked={field && field.value}
                          onCheckedChange={field && field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
              <FormField
                control={form && form.control}
                name="start_date"
                  </FormItem>;                )}
              />;
;
              <FormField;
                control={form.control}
                name="role_title";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Job Title</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;
;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <FormField;
                control={form.control}
                name="start_date";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Start Date</FormLabel>;
                    <FormControl>;
                      <Input ;
                        type="date" ;
                        {...field} ;
                        value={field.value || ''}
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
;
              <div className="space-y-4">;
                <FormField;
                  control={form.control}
                  name="is_current";
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">;
                      <FormControl>;
                        <Checkbox;
                          checked={field.value}
                          onCheckedChange={field.onChange}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <FormField
                  control={form && form.control}

                  name="is_current"
                  render={({ field }) => (;"
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">;
                      <FormControl>;
                        <Checkbox;
                          checked={field && field.value}
                          onCheckedChange={field && field.onChange}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        />;
                      </FormControl>;"
                      <div className="space-y-1 leading-none">;
                        <FormLabel>I currently work here</FormLabel>;
                      </div>;
                    </FormItem>;
                  )}

<<<<<<< HEAD



=======
                  <FormControl>;

                    <Input placeholder="San Francisco, CA (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
            <FormField;
              control={form && form.control}"
              name="description"
              render={({ field }) => (;
                <FormItem>;"
                  <FormLabel className="flex justify-between">;
                    <span>Job Description</span>;
                    <AIEnhancementButton"
                      enhancementType="work-description"'
                      context={`Role: ${form && form.getValues('role_title')} at ${form && form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
                    <Textarea"
                      placeholder="Describe your responsibilities and accomplishments...""
                      className="min-h-[100px]"
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel className="flex justify-between">;
                    <span > Job Description</span>;
                    <AIEnhancementButton;'
                      current_content={field.value || ''}"
                      enhancement_type="work - description";'`
                      context={`Role: ${form.get_values ('role_title')} at ${form.get_values ('company_name')}`}
                      on_enhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Describe your responsibilities and accomplishments...";
                      className="min-h-[100px]";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel>End Date</FormLabel>;
                        <FormControl>;
                    )}
                          <Input ;
                            type="date" ;
                            {...field} ;
                            value={field.value || ''} ;
                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>;                    )}
                  />;
                )}
              </div>;
            </div>;
            />;
            <FormField
              control={form && form.control}
              name="description"
;
            <FormField;
              control={form.control}
              name="location";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location (Optional)</FormLabel>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <FormControl>;

                    <Input placeholder="San Francisco, CA (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;

<<<<<<< HEAD

=======
            <FormField;
              control={form && form.control}"
              name="description"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              render={({ field }) => (;
                <FormItem>;"
                  <FormLabel className="flex justify-between">;
                    <span>Job Description</span>;

<<<<<<< HEAD

=======
                    <AIEnhancementButton"
                      enhancementType="work-description"'
                      context={`Role: ${form && form.getValues('role_title')} at ${form && form.getValues('company_name')}`}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      onEnhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
=======

                    <Textarea"
                      placeholder="Describe your responsibilities and accomplishments...""
                      className="min-h-[100px]"
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
                      className="min - h-[100px]";


>>>>>>> origin/cursor/delete-old-data-records-6bba
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

<<<<<<< HEAD

                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      start_date: format(new Date(), 'yyyy-MM-dd');
                      is_current: false'
                      description: ''

                    form && form.reset({;
                      company_name: '',;
                      role_title: '',;
                      start_date: format(new Date(), 'yyyy-MM-dd');
                      is_current: false,,
  description: '',;
                      location: ''});
                  } else {;
                    onBack();

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  }
                }}
              >;'
                {editingId ? 'Cancel' : 'Back'}

<<<<<<< HEAD
              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editingId && workExperiences && workExperiences.length > 0 && (;
                </FormItem>;
              )}
            />;
;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
;
            <div className="flex justify-between pt-2">;
              <Button;
                type="button";
                variant="outline";
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null),;
                    form.reset({;
                      company_name:'',;
                      role_title:'',;
                      start_date:format(new Date(), 'yyyy-MM-dd'),;
                      is_current:false,;
                      description:'',;
                      location:''}),;
                  } else {;
                    onBack(),;
                  }
                }}
              >;
                {editingId ? 'Cancel' :'Back'}
              </Button>;
;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' :'Add'} Experience;
                </Button>;
;
                {!editingId && workExperiences.length > 0 && (;
                  <Button type="button" onClick={onComplete}>;
                    Next;
                  </Button>;
                )}
                </FormItem>)}
            />;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            <div className="flex justify - between pt - 2">;
              <Button;
                type="button";
                variant="outline";
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
                    setEditingId (null);
                    form.reset ({
                      company_name: '',
                      role_title: '',
                      start_date: format (new Date (), 'yyyy - MM - dd');
                      is_current: false,
                      description: '',
                      location: ''});
                  } else {
                    on_back ();
                  }
                }}
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className="flex gap - 2">;
                <Button type="submit" disabled={is_loading}>;
                  {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
                  {editing_id ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (
                  <Button type="button" on_click={on_complete}>;
                    Next;
                  </Button>)}


              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;


    </div>);
}




=======
        </Form>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
