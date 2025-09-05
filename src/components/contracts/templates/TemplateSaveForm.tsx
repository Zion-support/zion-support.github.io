

const _formSchema = z.object({_title: z.string().min(1, _"Title is required"), _isDefault: z.boolean()});

type FormValues = z.infer<typeof formSchema>;

interface TemplateSaveFormProps {_onCancel: () => void;
  onComplete: () => void;
  editTemplate?: ContractTemplate | null;
  currentValues?: ContractFormValues;}

export function TemplateSaveForm(_{_onCancel, _onComplete, _editTemplate, _currentValues}: TemplateSaveFormProps) {_const [saving, _setSaving] = useState(false);
  const { createTemplate, _updateTemplate} = useContractTemplates();
  
  const _form = useForm<FormValues>({_resolver: zodResolver(formSchema), _defaultValues: {
      title: editTemplate?.title || "", _isDefault: editTemplate?.is_default || false}});
  
  const _onSubmit = async (_values: FormValues) => {_if (!currentValues && !editTemplate) {
      return;}
    
    setSaving(true);
    
    try {_if (editTemplate) {
        await updateTemplate.mutateAsync({
          templateId: editTemplate.id, _title: values.title, _templateData: editTemplate.template_data, _isDefault: values.isDefault});
      } else if (currentValues) {_await createTemplate.mutateAsync({
          title: values.title, _templateData: currentValues, _isDefault: values.isDefault});
      }
      
      onComplete();
    } finally {_setSaving(false);}
  };
  
  return (
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={_form.control}
          name="title"
          render={_(_{ field}: {_field: ControllerRenderProps<FormValues, _"title">}) => (
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {_...field} placeholder="Enter template name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={_form.control}
          name="isDefault"
          render={_(_{ field}: {_field: ControllerRenderProps<FormValues, _"isDefault">}) => (
            <FormItem className="flex items-center justify-between">
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch
                  aria-label="Default template"
                  checked={_field.value}
                  onCheckedChange={_field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={_onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={_saving}>
            {_saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              `${editTemplate ? "Update" : "Save"} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
