import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from '@/components/ui/form';

// Define schema for form validation
const _projectSchema = z.object({_title: z.string().min(1, _'Project title is required'), _description: z.string().optional(), _technologies: z.string().optional(), _image_url: z.string().optional(), _github_url: z
    .union([z.string().url('Please enter a valid window.URL'), _z.literal('')])
    .optional(), _demo_url: z
    .union([z.string().url('Please enter a valid window.URL'), _z.literal('')])
    .optional(), _pdf_url: z.string().optional()});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {_project?: PortfolioProject;
  onSuccess: () => void;
  onCancel: () => void;}

export function ProjectForm(_{_project, _onSuccess, _onCancel}: ProjectFormProps) {_const { user} = useAuth();
  const {_addProject, _updateProject} = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
  const _isEditing = !!project;
  
  const _form = useForm<ProjectFormValues>({_resolver: zodResolver(projectSchema), _defaultValues: {
      title: project?.title || '', _description: project?.description || '', _technologies: project?.technologies ? project.technologies.join(', _') : '', _image_url: project?.image_url || '', _github_url: project?.github_url || '', _demo_url: project?.demo_url || '', _pdf_url: project?.pdf_url || ''}
  });
  
  const _onSubmit = async (_data: ProjectFormValues) => {_if (!user) return;
    
    setIsLoading(true);
    
    try {
      const projectData: PortfolioProject = {
        title: data.title, _description: data.description, _technologies: data.technologies ? 
          data.technologies.split(', _').map(tech => tech.trim()) : [], _image_url: data.image_url, _github_url: data.github_url || undefined, _demo_url: data.demo_url || undefined, _pdf_url: data.pdf_url};
      
      let _success = false;
      
      if (isEditing && project?.id) {_success = await updateProject(project.id, _projectData);} else {_const _projectId = await addProject(projectData);
        success = !!projectId;}
      
      if (success) {_onSuccess();
        form.reset();}
    } catch (error) {_logErrorToProduction('Error saving project:', _{ data: error});
    } finally {_setIsLoading(false);}
  };
  
  return (
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={_form.control}
          name="title"
          render={_(_{ field}: {_field: unknown}) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={_form.control}
          name="description"
          render={_(_{ field}: {_field: unknown}) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe what the project does and your role in it..."
                  className="min-h-[100px]"
                  {_...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={_form.control}
          name="technologies"
          render={_(_{ field}: {_field: unknown}) => (
            <FormItem>
              <FormLabel>Technologies Used</FormLabel>
              <FormControl>
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={_form.control}
            name="github_url"
            render={_(_{ field}: {_field: unknown}) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub window.URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/yourusername/project" {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={_form.control}
            name="demo_url"
            render={_(_{ field}: {_field: unknown}) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  Demo window.URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-demo.com" {_...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={_form.control}
          name="image_url"
          render={_(_{ field}: {_field: unknown}) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <FileImage className="h-4 w-4" />
                Screenshot window.URL
              </FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/screenshot.jpg" {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {_/* Future file upload field would go here */}
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={_onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={_isLoading}>
            {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {_isEditing ? 'Update' : 'Add'} Project
          </Button>
        </div>
      </form>
    </Form>
  );
}
