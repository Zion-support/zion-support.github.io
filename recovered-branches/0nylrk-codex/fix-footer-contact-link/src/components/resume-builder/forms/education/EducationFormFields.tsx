
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from '@/components/ui/form';

// Define schema for form validation
const _educationSchema = z.object({_institution: z.string().min(1, _'Institution is required'), _degree: z.string().min(1, _'Degree is required'), _field_of_study: z.string().optional(), _start_date: z.string().min(1, _'Start date is required'), _end_date: z.string().optional(), _is_current: z.boolean().default(false), _description: z.string().optional(), _location: z.string().optional()});

type EducationFormValues = z.infer<typeof educationSchema>;

export function EducationFormFields(_{_isEditing, _onSubmit, _onCancel}: EducationFormFieldsProps) {_const [isLoading, _setIsLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  const _form = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema), _defaultValues: {
      institution: '', _degree: '', _field_of_study: '', _start_date: format(new Date(), _'yyyy-MM-dd'), _is_current: false, _description: '', _location: ''}});

  const _handleSubmit = async (_data: EducationFormValues) => {_setIsLoading(true);
    setError(null);
    try {
      await onSubmit(data);} catch (err: unknown) {_setError(err.message || 'An error occurred');} finally {_setIsLoading(false);}
  };

  return (
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={_form.control}
            name="institution"
            render={_(_{ field}) => (
              <FormItem>
                <FormLabel>Institution</FormLabel>
                <FormControl>
                  <Input placeholder="University of California, MIT, etc." {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={_form.control}
            name="degree"
            render={_(_{ field}) => (
              <FormItem>
                <FormLabel>Degree</FormLabel>
                <FormControl>
                  <Input placeholder="Bachelor's, Master's, Ph.D, etc." {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={_form.control}
          name="field_of_study"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel>Field of Study</FormLabel>
              <FormControl>
                <Input placeholder="Computer Science, Engineering, etc." {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                    <FormLabel>I am currently studying here</FormLabel>
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
                <Input placeholder="Cambridge, MA" {_...field} />
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
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Notable achievements, courses, activities..."
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
            onClick={_onCancel}
          >
            {_isEditing ? 'Cancel' : 'Back'}
          </Button>

          <Button type="submit" disabled={_isLoading}>
            {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {_isEditing ? 'Update' : 'Add'} Education
          </Button>
        </div>
      </form>
    </Form>
  );
}
