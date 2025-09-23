
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from '@/components/ui/form';
Loader2LinkFileImageGithubEdit
=======
  FormMessage,
} from '@/components/ui/form';
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
>>>>>>> origin/auto/autonomy-17186719616
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';

// Define schema for form validation
const projectSchema = z.object({
<<<<<<< HEAD
  title: z.string().min(1'Project title is required'),
=======
  title: z.string().min(1, 'Project title is required'),
>>>>>>> origin/auto/autonomy-17186719616
  description: z.string().optional(),
  technologies: z.string().optional(),
  image_url: z.string().optional(),
  github_url: z
<<<<<<< HEAD
    .union([z.string().url('Please enter a valid URL')z.literal('')])
    .optional(),
  demo_url: z
    .union([z.string().url('Please enter a valid URL')z.literal('')])
    .optional(),
  pdf_url: z.string().optional()});
=======
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional(),
  demo_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional(),
  pdf_url: z.string().optional(),
});
>>>>>>> origin/auto/autonomy-17186719616

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  project?: PortfolioProject;
  onSuccess: () => void;
  onCancel: () => void;
}

<<<<<<< HEAD
export function ProjectForm({ projectonSuccessonCancel }: ProjectFormProps) {
  const { user } = useAuth();
  const { addProjectupdateProject } = usePortfolio();
  const [isLoadingsetIsLoading] = useState(false);
=======
export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {
  const { user } = useAuth();
  const { addProject, updateProject } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  const isEditing = !!project;
  
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
<<<<<<< HEAD
      technologies: project?.technologies ? project.technologies.join(') : '',
      image_url: project?.image_url || '',
      github_url: project?.github_url || '',
      demo_url: project?.demo_url || '',
      pdf_url: project?.pdf_url || ''}
=======
      technologies: project?.technologies ? project.technologies.join(', ') : '',
      image_url: project?.image_url || '',
      github_url: project?.github_url || '',
      demo_url: project?.demo_url || '',
      pdf_url: project?.pdf_url || '',
    }
>>>>>>> origin/auto/autonomy-17186719616
  });
  
  const onSubmit = async (data: ProjectFormValues) => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      const projectData: PortfolioProject = {
        title: data.title,
        description: data.description,
        technologies: data.technologies ? 
          data.technologies.split(',').map(tech => tech.trim()) : [],
        image_url: data.image_url,
        github_url: data.github_url || undefined,
        demo_url: data.demo_url || undefined,
<<<<<<< HEAD
        pdf_url: data.pdf_url};
=======
        pdf_url: data.pdf_url,
      };
>>>>>>> origin/auto/autonomy-17186719616
      
      let success = false;
      
      if (isEditing && project?.id) {
<<<<<<< HEAD
        success = await updateProject(project.idprojectData);
=======
        success = await updateProject(project.id, projectData);
>>>>>>> origin/auto/autonomy-17186719616
      } else {
        const projectId = await addProject(projectData);
        success = !!projectId;
      }
      
      if (success) {
        onSuccess();
        form.reset();
      }
    } catch (error) {
<<<<<<< HEAD
      console.error('Error saving project:'error);
=======
      console.error('Error saving project:', error);
>>>>>>> origin/auto/autonomy-17186719616
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
<<<<<<< HEAD
                <Input placeholder="E.g.AI ChatbotE-commerce Website" {...field} />
=======
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                <Input placeholder="ReactNode.jsMongoDBetc. (comma separated)" {...field} />
=======
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />
>>>>>>> origin/auto/autonomy-17186719616
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
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Update' : 'Add'} Project
          </Button>
        </div>
      </form>
    </Form>
  );
}
