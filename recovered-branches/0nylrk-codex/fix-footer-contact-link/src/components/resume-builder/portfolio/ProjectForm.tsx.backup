
<<<<<<< HEAD

=======
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';// Define schema for form validation
import { Form;
  FormControl;
  FormField;
  FormItem;
>>>>>>> origin/cursor/delete-old-data-records-6bba


import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Loader2, Link, FileImage, Github, Edit} from 'lucide-react';
import {PortfolioProject} from '@/types/resume';
import {usePortfolio} from '@/hooks/usePortfolio';
import {useAuth} from '@/hooks/useAuth';

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Define schema for form validation

const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  description: z.string().optional()
  technologies: z.string().optional()
  image_url: z.string().optional()
  github_url: z

<<<<<<< HEAD
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useState} from 'react';

import {use_form} from 'react - hook - form';
import {zod_resolver} from '@hookform / resolvers / zod';
import {z} from 'zod';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Textarea} from '@/components / ui / textarea';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {Loader2, Link, FileImage, Github, Edit} from 'lucide-react';
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  pdf_url: z && z.string().optional()}),;
type ProjectFormValues = z && z.infer<typeof projectSchema>;
interface ProjectFormProps {;
  project?: PortfolioProject;

<<<<<<< HEAD
  onSuccess: () => void,;
  onCancel: () => void;
}
export function ProjectForm(): any ({ project, onSuccess, onCancel }: ProjectFormProps) {;


export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();
  const { addProject, updateProject } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!project;
<<<<<<< HEAD



  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;

    defaultValues: {;
      title: project?.title || '',;
      description: project?.description || '',;


=======

  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;


  const onSubmit = async (data: ProjectFormValues) => {;
    if (!user) return;

    setIsLoading(true),;

    try {;
      const projectData: PortfolioProject = {;
        title: data && data.title,,
  description: data && data.description,;
        technologies: data && data.technologies ? ;
          data && data.technologies.split().map(tech => tech && tech.trim()) : [],;
        image_url: data && data.image_url,;
        github_url: data && data.github_url || undefined,;
        demo_url: data && data.demo_url || undefined,;
        pdf_url: data && data.pdf_url},;

      let success = false;

      if (isEditing && project?.id) {;
        success = await updateProject(project && project.id, projectData);
      } else {;

        const projectId = await addProject(projectData);
        success = !!projectId;
      }

      if (success) {;

        onSuccess();
        form && form.reset();
      if (success) {;
        onSuccess();
        form.reset()
};
  },

  
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-4'>;
        <FormField
          control={form && form.control}
          name='title'        <div className='flex justify-end space-x-2 pt-4'>
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form',
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';
// Define schema for form validation

const projectSchema = z.object({
  title: z.string().min($2);
  description: z.string().optional($2);
  technologies: z.string().optional($2);
  image_url: z.string().optional($2);
  github_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional($2);
  demo_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional($2);
  pdf_url: z.string().optional()}),

type ProjectFormValues = $2;
interface ProjectFormProps {
  project?: PortfolioProject,
  onSuccess: () => void,
  onCancel: () => void
}
export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {
  const { user } = useAuth($2);
  const { addProject, updateProject } = usePortfolio($2);
  const [isLoading, setIsLoading] = useState($2);
  const isEditing = $2;
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      title: project ?.title || '',
      description: project ?.description || '',
      technologies: project ?.technologies ? project.technologies.join() : '',
      image_url: project ?.image_url || '',
      github_url: project ?.github_url || '',
      demo_url: project ?.demo_url || '',
      pdf_url: project ?.pdf_url || ''}
  }),
  
  const onSubmit = $2;
    setIsLoading($2);
    try {
      const projectData: PortfolioProject = $2;
        description: data.description,
        technologies: data.technologies ? 
          data.technologies.split().map(tech = $2;
        image_url: data.image_url,
        github_url: data.github_url || undefined,
        demo_url: data.demo_url || undefined,
        pdf_url: data.pdf_url},
      
      let success = $2;
      if (isEditing && project?.id) {
        success = await updateProject(project.id, projectData)
      } else {
        const projectId = await addProject($2);
        success = !!projectId
      }
      if (success) {
        onSuccess($2);
        form.reset()
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
      if (success) {;
        onSuccess();
        form.reset();


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    } catch (error) {;'
      console && console.error('Error saving project:', error);
    } finally {;
      setIsLoading(false);
    }


<<<<<<< HEAD
  };






  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField
          control={form && form.control}
          name="title"


          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Project Title</FormLabel>;
              <FormControl>;

                <Input placeholder="E && E.g., AI Chatbot, E-commerce Website" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

        />;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

/>;
        <FormField
          control={form && form.control}
          name="description"
<<<<<<< HEAD




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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Project Description</FormLabel>;
              <FormControl>;


<<<<<<< HEAD
=======
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Github className="h-4 w-4" />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;

<<<<<<< HEAD
=======
                  <Input placeholder="https://github && github.com/yourusername/project" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  <Link className="h-4 w-4" />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;

<<<<<<< HEAD
=======
                  <Input placeholder="https://your-project-demo && demo.com" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <FileImage className="h-4 w-4" />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what the project does and your role in it..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="technologies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technologies Used</FormLabel>
              <FormControl>
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="github_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/yourusername/project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="demo_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-demo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <FileImage className="h-4 w-4" />
                Screenshot URL
              </FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Future file upload field would go here */}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="flex justify-end space-x-2 pt-4">

          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel;
          </Button>"
          <Button type="submit" disabled={isLoading}>"
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}'
            {isEditing ? 'Update' : 'Add'} Project;
          </Button>
        </div>
      </form>
    </Form>
  )
<<<<<<< HEAD



=======
        />;
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
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
            {isEditing ? 'Update' :'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;

<<<<<<< HEAD



}

=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {PortfolioProject} from '@/types / resume';
import {use_portfolio} from '@/hooks / use_portfolio';
import {use_auth} from '@/hooks / use_auth';
// Define schema for form validation;
const project_schema = z.object ({
  title: z.string ().min (1, 'Project title is required'),
  description: z.string ().optional (),
  technologies: z.string ().optional (),
  image_url: z.string ().optional (),
  github_url: z;
    .union ([z.string ().url ('Please enter a valid URL'), z.literal ('')]);
    .optional ();
  demo_url: z;
    .union ([z.string ().url ('Please enter a valid URL'), z.literal ('')]);
    .optional ();
  pdf_url: z.string ().optional ()}),
type ProjectFormValues = z.infer < typeof project_schema>;
;
<<<<<<< HEAD


=======
}
interface ProjectFormProps {
  project?: PortfolioProject;
  on_success: () => void,
  on_cancel: () => void;
}
export /**
 * ProjectForm - Function description
 */
function ProjectForm() {
  const { user } = use_auth ();
  const { add_project, update_project } = use_portfolio ();
  const [is_loading, setIsLoading] = useState (false);
  const is_editing = !!project;
;
  const form = use_form < ProjectFormValues>({
    resolver: zod_resolver (project_schema),
    default_values: {
      title: project?.title || '',
      description: project?.description || '',
      technologies: project?.technologies ? project.technologies.join () : '',
      image_url: project?.image_url || '',
      github_url: project?.github_url || '',
      demo_url: project?.demo_url || '',
      pdf_url: project?.pdf_url || ''}
  });
;
  const on_submit = async (data: ProjectFormValues) => {
    // Check condition
if (return) {
  $2
}
    setIsLoading (true),
    try {
      const project_data: PortfolioProject = {
        title: data.title,
        description: data.description,
        technologies: data.technologies ?;
          data.technologies.split ().map (tech => tech.trim ()) : [],
        image_url: data.image_url,
        github_url: data.github_url || undefined,
        demo_url: data.demo_url || undefined,
        pdf_url: data.pdf_url},
      let success = false;
;
      // Check condition
if ( {) {
  $2
}
        success = await update_project (project.id, project_data);
      } else {
        const project_id = await add_project (project_data);
        success = !!project_id;
      }
      // Check condition
if ( {) {
  $2
}
        on_success ();
        form.reset ();
      }
    } catch (error) {
      console.error ('Error saving project:', error);
    } finally {
      setIsLoading (false);
    }
  }
;
  return (
  pdf_url: z && z.string().optional()}),;

type ProjectFormValues = z && z.infer<typeof projectSchema>;
</typeof>
  const form = useForm<ProjectFormValues>({;


    <Form {...form}>;
)
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-4">;"
</form>
        <FormField;
          control={form && form.control}"
          name="title""

)"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;"
          control={form.control}"
          name="title";"
          render={({ field }) => (;

            <FormItem>;

              <FormLabel>Project Title;
              <FormControl>;
"
                <Input placeholder="E && E.g., AI Chatbot, E-commerce Website" {...field} />;"

              ;
              <FormMessage />;


          name="description"")
>>>>>>> origin/cursor/delete-old-data-records-6bba
