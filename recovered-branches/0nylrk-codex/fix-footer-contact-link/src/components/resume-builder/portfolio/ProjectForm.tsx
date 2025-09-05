
import { useState } from 'react',
import { useForm } from 'react-hook-form',
import { zodResolver } from '@hookform/resolvers/zod',
import { z } from 'zod',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Textarea } from '@/components/ui/textarea',
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form',
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react',
import { PortfolioProject } from '@/types/resume',
import { usePortfolio } from '@/hooks/usePortfolio',
import { useAuth } from '@/hooks/useAuth',
// Define schema for form validation
const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  description: z.string().optional(),
  technologies: z.string().optional(),
  image_url: z.string().optional(),
  github_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional(),
  demo_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional(),
  pdf_url: z.string().optional()}),
type ProjectFormValues = z.infer<typeof projectSchema>,

interface ProjectFormProps {
  project?: PortfolioProject,
  onSuccess: () => void,
  onCancel: () => void
}

export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {
  const { user } = useAuth(),
  const { addProject, updateProject } = usePortfolio(),
  const [isLoading, setIsLoading] = useState(false),
  const isEditing = !!project,
  
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      technologies: project?.technologies ? project.technologies.join() : '',
      image_url: project?.image_url || '',
      github_url: project?.github_url || '',
      demo_url: project?.demo_url || '',
      pdf_url: project?.pdf_url || ''}
  }),
  
  const onSubmit = async (data: ProjectFormValues) => {
    if (!user) return,    
    setIsLoading(true),
    
    try {
      const projectData: PortfolioProject = {
        title: data.title,
        description: data.description,
        technologies: data.technologies ? 
          data.technologies.split().map(tech => tech.trim()) : [],
        image_url: data.image_url,
        github_url: data.github_url || undefined,
        demo_url: data.demo_url || undefined,
        pdf_url: data.pdf_url},
      
      let success = false,
      
      if (isEditing && project?.id) {
        success = await updateProject(project.id, projectData)
      } else {
        const projectId = await addProject(projectData),
        success = !!projectId
      }
      
      if (success) {
        onSuccess(),
        form.reset()
      }
    } catch (error) {
      console.error('Error saving project:', error)
    } finally {
      setIsLoading(false)
    }
  },
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-4&quot;>
        <FormField
          control={form.control}
          name=&quot;title&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder=&quot;E.g., AI Chatbot, E-commerce Website&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name=&quot;description&quot;
          render={({ field }) => (            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder=&quot;Describe what the project does and your role in it...&quot;
                  className=&quot;min-h-[100px]&quot;
                  {...field}                 />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name=&quot;technologies&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technologies Used</FormLabel>
              <FormControl>
                <Input placeholder=&quot;React, Node.js, MongoDB, etc. (comma separated)&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
            control={form.control}
            name=&quot;github_url&quot;
            render={({ field }) => (
              <FormItem>
                <FormLabel className=&quot;flex items-center gap-2&quot;>
                  <Github className=&quot;h-4 w-4&quot; />
                  GitHub URL
                </FormLabel>
                <FormControl>
                  <Input placeholder=&quot;https://github.com/yourusername/project&quot; {...field} />                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name=&quot;demo_url&quot;
            render={({ field }) => (
              <FormItem>
                <FormLabel className=&quot;flex items-center gap-2&quot;>
                  <Link className=&quot;h-4 w-4&quot; />
                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input placeholder=&quot;https://your-project-demo.com&quot; {...field} />                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name=&quot;image_url&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel className=&quot;flex items-center gap-2&quot;>
                <FileImage className=&quot;h-4 w-4&quot; />
                Screenshot URL
              </FormLabel>
              <FormControl>
                <Input placeholder=&quot;https://example.com/screenshot.jpg&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {_/* Future file upload field would go here */}
        
        <div className=&quot;flex justify-end space-x-2 pt-4&quot;>
          <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={onCancel}>
            Cancel
          </Button>
          <Button type=&quot;submit&quot; disabled={isLoading}>
            {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
            {isEditing ? 'Update' : 'Add'} Project          </Button>
        </div>
      </form>
    </Form>
  )
}
