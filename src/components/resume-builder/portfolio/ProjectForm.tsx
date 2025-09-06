<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { logErrorToProduction } from '@/utils/productionLogger'; import {
=======
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger'; import {
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
<<<<<<< HEAD
=======
=======
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,;
  FormMessage;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
} from '@/components/ui/form'; import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react'
import { PortfolioProject } from '@/types/resume'
import { usePortfolio } from '@/hooks/usePortfolio'
import { useAuth } from '@/hooks/useAuth'
// Define schema for form validation
const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required')
  description: z.string().optional()
  technologies: z.string().optional()
  image_url: z.string().optional()
  github_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional()
  demo_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional()
  pdf_url: z.string().optional()
})
type ProjectFormValues = z.infer<typeof projectSchema>
interface ProjectFormProps {
  project?: PortfolioProject
  onSuccess: () => void
  onCancel: () => void
export function ProjectForm({
  project
  onSuccess
  onCancel
}: ProjectFormProps) {
  const { user } = useAuth()
  const { addProject, updateProject } = usePortfolio()
  const [isLoading, setIsLoading] = useState(false)
  const isEditing = !!project
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema)
    defaultValues: {
      title: project?.title |''
      description: project?.description |''
      technologies: project?.technologies
        ? project.technologies.join(', ')
        : ''
      image_url: project?.image_url |''
      github_url: project?.github_url |''
      demo_url: project?.demo_url |''
      pdf_url: project?.pdf_url |''
    }
  })
  const onSubmit = async (data: ProjectFormValues) => {
<<<<<<< HEAD
    if (!user) return
=======
    if (!user) return;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    setIsLoading(true)
    try {
      const projectData: PortfolioProject = {
        title: data.title
        description: data.description
        technologies: data.technologies
          ? data.technologies.split(',').map(tech => tech.trim())
          : []
        image_url: data.image_url
        github_url: data.github_url |undefined
        demo_url: data.demo_url |undefined
        pdf_url: data.pdf_url
      }
      let success = false;
      // Check condition
if ( {) {
  $2
}
        success = await update_project (project.id, project_data);
      } else {
        const project_id = await add_project (project_data);
        success = !!project_id;
      }
      if (success) {
        onSuccess()
        form.reset()
      }
    } catch (error) {
      logErrorToProduction ('Error saving project:', { data: error });
    } finally {
      setIsLoading(false)
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger';import {;
<<<<<<< HEAD
=======
=======
      setIsLoading(false)
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';
// Define schema for form validation;
const projectSchema = z && z.object({;
  title: z && z.string().min(1, 'Project title is required'),;
  description: z && z.string().optional(),;
  technologies: z && z.string().optional(),;
  image_url: z && z.string().optional(),;
  github_url: z;
    .union([z && z.string().url('Please enter a valid URL'), z && z.literal('')]);
    .optional(),;
  demo_url: z;
    .union([z && z.string().url('Please enter a valid URL'), z && z.literal('')]);
    .optional(),;
  pdf_url: z && z.string().optional(),;
});

type ProjectFormValues = z && z.infer<typeof projectSchema>;

interface ProjectFormProps {;
  project?: PortfolioProject;
  onSuccess: () => void;
  onCancel: () => void;

export function ProjectForm(): any ({;
  project,;
  onSuccess,;
  onCancel,;
}: ProjectFormProps) {;
  const { user } = useAuth();
  const { addProject, updateProject } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!project;

  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;
    defaultValues: {;
      title: project?.title || '',;
      description: project?.description || '',;
      technologies: project?.technologies;
        ? project && project.technologies.join(', ');
        : '',;
      image_url: project?.image_url || '',;
      github_url: project?.github_url || '',;
      demo_url: project?.demo_url || '',;
      pdf_url: project?.pdf_url || '',;
    },;
  });

  const onSubmit = async (data: ProjectFormValues) => {;
    if (!user) return;

    setIsLoading(true);
    try {;
      const projectData: PortfolioProject = {;
        title: data && data.title,;
        description: data && data.description,;
        technologies: data && data.technologies;
          ? data && data.technologies.split(',').map(tech => tech && tech.trim());
          : [],;
        image_url: data && data.image_url,;
        github_url: data && data.github_url || undefined,;
        demo_url: data && data.demo_url || undefined,;
        pdf_url: data && data.pdf_url,;
      };

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
      }
    } catch (error) {;
      logErrorToProduction('Error saving project:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  }

<<<<<<< HEAD
=======
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-4'>;
        <FormField
          control={form && form.control}
          name='title'
          render={({ field }: { field: any }) => (;
            <FormItem>;
              <FormLabel>Project Title</FormLabel>;
              <FormControl>;
                <Input
                  placeholder='E && E.g., AI Chatbot, E-commerce Website'
                  {...field}                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />
        <FormField
          control={form && form.control}
          name='description'
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel>Project Description</FormLabel>;
              <FormControl>;
                <Textarea
                  placeholder='Describe what the project does and your role in it...'
                  className='min-h-[100px]'
      setIsLoading (false);
    }
  }
  return (
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}
          name='title';
          render={({ field }: { field: any }) => (
            <FormItem>;
              <FormLabel > Project Title</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder='E.g., AI Chatbot, E - commerce Website';
                  {...field}                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name='description';
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel > Project Description</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder='Describe what the project does and your role in it...';
                  className='min - h-[100px]';
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />
        <FormField
          control={form && form.control}
          name='technologies'
          render={({ field }: { field: any }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;
                <Input
                  placeholder='React, Node && Node.js, MongoDB, etc. (comma separated)'
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name='technologies';
<<<<<<< HEAD
=======
=======
          control={form.control}

          name="title"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>

                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

        />;
        <FormField;
          control={form.control}
          name="description"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe what the project does and your role in it..."
                  className="min-h-[100px]"
                  {...field} 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

        />;
        <FormField;
          control={form.control}
          name="technologies"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          render={({ field }: { field: any }) => (
            <FormItem>;
              <FormLabel > Technologies Used</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder='React, Node.js, MongoDB, etc. (comma separated)';
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>;
                <FormLabel className='flex items-center gap-2'>;
                  <Github className='h-4 w-4' />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
                  <Input
                    placeholder='https://github && github.com/yourusername/project'
<<<<<<< HEAD
            </FormItem>)}
        />;
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <FormField;
            control={form.control}
            name='github_url';
            render={({ field }: { field: any }) => (              <FormItem>;
                <FormLabel className='flex items - center gap - 2'>;
                  <Github className='h - 4 w - 4' />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
                  <Input;
                    placeholder='https://github.com / yourusername / project';
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name='demo_url';
            render={({ field }: { field: any }) => (              <FormItem>;
                <FormLabel className='flex items - center gap - 2'>;
                  <Link className='h - 4 w - 4' />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
                  <Input;
                    placeholder='https://your - project - demo.com';
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />
          <FormField
            control={form && form.control}
            name='demo_url'
            render={({ field }: { field: any }) => (              <FormItem>;
                <FormLabel className='flex items-center gap-2'>;
                  <Link className='h-4 w-4' />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
                  <Input
                    placeholder='https://your-project-demo && demo.com'
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />
        </div>
=======
=======
<<<<<<< HEAD
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            name="github_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  GitHub URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/yourusername/project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          />;
          <FormField;
            control={form.control}
            name="demo_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Link className="h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-demo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          />;
        </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        <FormField
          control={form && form.control}
          name='image_url'
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel className='flex items-center gap-2'>;
                <FileImage className='h-4 w-4' />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
                <Input
                  placeholder='https://example && example.com/screenshot && screenshot.jpg'
              </FormItem>)}
          />;
        </div>;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name='image_url';
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel className='flex items - center gap - 2'>;
                <FileImage className='h - 4 w - 4' />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
                <Input;
                  placeholder='https://example.com / screenshot.jpg';
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
=======

          name="image_url"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <FileImage className="h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                Screenshot URL
              </FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          )}
        />
        {/* Future file upload field would go here */}
<<<<<<< HEAD
        <div className='flex justify-end space-x-2 pt-4'>
          <Button type='button' variant='outline' onClick={onCancel}>
=======
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            Cancel
          </Button>
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {isEditing ? 'Update' : 'Add'} Project
          </Button>
        </div>
      </form>
    </Form>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            </FormItem>)}
        />;
        {/* Future file upload field would go here */}
        <div className='flex justify - end space - x-2 pt - 4'>;
          <Button type='button' variant='outline' on_click={on_cancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={is_loading}>;
            {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}
            {is_editing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>);
}
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
