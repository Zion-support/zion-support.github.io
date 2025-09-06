
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger'; import {

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
    if (!user) return;
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
      let success = false
      if (isEditing && project?.id) {
        success = await updateProject(project.id, projectData)
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
      logErrorToProduction ('Error saving project:', { data: error });
    } finally {


import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger';import {;
      setIsLoading(false)
    }
  }

import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
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

  },

  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-4'>;
        <FormField

        />;


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

          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}

                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Technologies Used</FormLabel>
              <FormControl>
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Github className='h-4 w-4' />

            name="github_url"
            render={({ field }: { field: any }) => (
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

                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-demo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

                Screenshot URL
              </FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

            Cancel
          </Button>
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {isEditing ? 'Update' : 'Add'} Project
          </Button>
        </div>
      </form>

;

