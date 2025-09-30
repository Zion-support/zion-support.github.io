import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
<<<<<<< HEAD



=======
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
<<<<<<< HEAD



=======
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
import { useAuth } from '@/hooks/useAuth',;
;
// Define schema for form validation;
const projectSchema = z.object({;
<<<<<<< HEAD


  description:z.string().optional(),;
  technologies:z.string().optional(),;
  image_url:z.string().optional(),;

  github_url:z;
    .union([z.string().url('Please enter a valid URL'), z.literal()]);
    .optional(),;
  demo_url:z;
  pdf_url: z.string().optional();}),;
type ProjectFormValues = z.infer<typeof projectSchema>,;
</typeof>
  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema);,;
    defaultValues:{;


=======
  title:z.string().min(1, 'Project title is required'),;
  description:z.string().optional(),;
  technologies:z.string().optional(),;
  image_url:z.string().optional(),;
  github_url:z;
    .union([z.string().url('Please enter a valid URL'), z.literal('')]);
    .optional(),;
  demo_url:z;
    .union([z.string().url('Please enter a valid URL'), z.literal('')]);
    .optional(),;
  pdf_url:z.string().optional()}),;
;
type ProjectFormValues = z.infer<typeof projectSchema>,;
;
interface ProjectFormProps {;
  project?:PortfolioProject,;
  onSuccess:() => void,;
  onCancel:() => void;
}
;
export function ProjectForm({ project, onSuccess, onCancel } ProjectFormProps) {;
  const { user } = useAuth(),;
  const { addProject, updateProject } = usePortfolio(),;
  const [isLoading, setIsLoading] = useState(false),;
  const isEditing = !!project,;
  ;
  const form = useForm<ProjectFormValues>({;
    resolver:zodResolver(projectSchema),;
    defaultValues:{;
      title:project?.title || '',;
      description:project?.description || '',;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      technologies:project?.technologies ? project.technologies.join() :'',;
      image_url:project?.image_url || '',;
      github_url:project?.github_url || '',;
      demo_url:project?.demo_url || '',;
      pdf_url:project?.pdf_url || ''}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }),;
  ;
  const onSubmit = async (data:ProjectFormValues) => {;
    if (!user) return,;
    ;
    setIsLoading(true),;
    ;
    try {;
      const projectData:PortfolioProject = {;
<<<<<<< HEAD


        technologies:data.technologies ? ;
          data.technologies.split().map(tech => tech.trim()) :[],;
        image_url: data.image_url;,;
        github_url: data.github_url || undefined;,;
        demo_url: data.demo_url || undefined;,;
        pdf_url: data.pdf_url;},;

=======
        title:data.title,;
        description:data.description,;
        technologies:data.technologies ? ;
          data.technologies.split().map(tech => tech.trim()) :[],;
        image_url:data.image_url,;
        github_url:data.github_url || undefined,;
        demo_url:data.demo_url || undefined,;
        pdf_url:data.pdf_url},;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ;
      let success = false,;
      ;
      if (isEditing && project?.id) {;
        success = await updateProject(project.id, projectData),;
      } else {;
        const projectId = await addProject(projectData),;
        success = !!projectId,;
      }
      ;
      if (success) {;
        onSuccess(),;
        form.reset(),;
      }
    } catch (error) {;
<<<<<<< HEAD



=======
      logErrorToProduction('Error saving project:', { data:error }),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  return (;
    <Form {...form}>;
<<<<<<< HEAD

)
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;"
</form>
        <FormField;


=======
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
          name="title";
          render={({ field } { field:any }) => (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <FormItem>;
              <FormLabel>Project Title</FormLabel>;
              <FormControl>;
<<<<<<< HEAD

"
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />;"

              <FormMessage />;
            ;          )}
          name="description";"

              <FormLabel>Project Description;

                <Textarea ;"
                  placeholder="Describe what the project does and your role in it...";""
                  className="min-h-[100px]";"
                  {...field} ;
                />;

        ;

=======
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="description";
          render={({ field } { field:any }) => (;
            <FormItem>;
              <FormLabel>Project Description</FormLabel>;
              <FormControl>;
                <Textarea ;
                  placeholder="Describe what the project does and your role in it...";
                  className="min-h-[100px]";
                  {...field} ;
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="technologies";
          render={({ field } { field:any }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
        ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="github_url";
            render={({ field } { field:any }) => (;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <FormItem>;
                <FormLabel className="flex items-center gap-2">;
                  <Github className="h-4 w-4" />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Input placeholder="https://github.com/yourusername/project" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="demo_url";
            render={({ field } { field:any }) => (;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <FormItem>;
                <FormLabel className="flex items-center gap-2">;
                  <Link className="h-4 w-4" />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Input placeholder="https://your-project-demo.com" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;            )}
          />;
        </div>;
        ;
        <FormField;
          control={form.control}
          name="image_url";
          render={({ field } { field:any }) => (;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <FormItem>;
              <FormLabel className="flex items-center gap-2">;
                <FileImage className="h-4 w-4" />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
<<<<<<< HEAD



=======
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
<<<<<<< HEAD



=======
        ;
        {/* Future file upload field would go here */}
        ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="flex justify-end space-x-2 pt-4">;
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isLoading}>;
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
<<<<<<< HEAD


          </Button>;

        </div>;
          name="image_url";"

                <FileImage className="h-4 w-4" />;"

                <Input placeholder="https: //example.com/screenshot.jpg" {...field;} />;"

        <div className="flex justify-end space-x-2 pt-4">;"
</div>"
          <Button type="button" variant="outline" onClick={onCancel}>;"

          <Button type="submit" disabled={isLoading}>;"
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
</Loader2>

=======
            {isEditing ? 'Update' :'Add'} Project;
          </Button>;
        </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </form>;
    </Form>;
  ),;}
 type ProjectFormValues = z.infer<typeof projectSchema>;
setIsLoading (true);
try {;
  const projectData: PortfolioProject = {;
  </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Project Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> </div> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> {;
  /* Future file upload field would go here */ ;
<<<<<<< HEAD



=======
}</Button> </div> </form> </Form>) ;"}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
