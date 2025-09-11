<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger'; import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,;
  FormMessage;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
      let success = false;
      // Check condition
if ( {) {
  $2
}
        success = await update_project (project.id, project_data);
      } else {
        const projectId = await addProject(projectData)
        success = !!projectId
      }
<<<<<<< HEAD
<<<<<<< HEAD
      if (success) {
        onSuccess()
        form.reset()
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      // Check condition
if ( {) {
  $2
}
        on_success ();
        form.reset ();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (error) {
      logErrorToProduction('Error saving project:', { data: error })
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  FormMessage} from '@/components/ui/form',;
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
import { useAuth } from '@/hooks/useAuth',;
// Define schema for form validation;
const projectSchema = z.object({;
  title: z.string().min(1, 'Project title is required'),;
  description: z.string().optional(),;
  technologies: z.string().optional(),;
  image_url: z.string().optional(),;
  github_url: z;
    .union([z.string().url('Please enter a valid URL'), z.literal('')]);
    .optional(),;
  demo_url: z;
    .union([z.string().url('Please enter a valid URL'), z.literal('')]);
    .optional(),;
  pdf_url: z.string().optional()}),;
type ProjectFormValues = z.infer<typeof projectSchema>,;
interface ProjectFormProps {;
  project?: PortfolioProject,;
  onSuccess: () => void,;
  onCancel: () => void;
}
;
export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;
  const { user } = useAuth(),;
  const { addProject, updateProject } = usePortfolio(),;
  const [isLoading, setIsLoading] = useState(false),;
  const isEditing = !!project,;
  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;
    defaultValues: {;
      title: project?.title || '',;
      description: project?.description || '',;
      technologies: project?.technologies ? project.technologies.join() : '',;
      image_url: project?.image_url || '',;
      github_url: project?.github_url || '',;
      demo_url: project?.demo_url || '',;
      pdf_url: project?.pdf_url || ''}
  }),;
  const onSubmit = async (data: ProjectFormValues) => {;
    if (!user) return,;
    setIsLoading(true),;
    try {;
      const projectData: PortfolioProject = {;
        title: data.title,;
        description: data.description,;
        technologies: data.technologies ?;
          data.technologies.split().map(tech => tech.trim()) : [],;
        image_url: data.image_url,;
        github_url: data.github_url || undefined,;
        demo_url: data.demo_url || undefined,;
        pdf_url: data.pdf_url},;
      let success = false,;
      if (isEditing && project?.id) {;
        success = await updateProject(project.id, projectData);
      } else {;
        const projectId = await addProject(projectData),;
        success = !!projectId;
      }
;
      if (success) {;
        onSuccess();
        form.reset();
      }
    } catch (error) {;
      logErrorToProduction('Error saving project:', { data: error });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

  },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  



  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-4'>;
=======
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;


<<<<<<< HEAD
<<<<<<< HEAD
  },
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name='title'
          name="title"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input
                  placeholder='E.g., AI Chatbot, E-commerce Website'
                  {...field}                />
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <FormField
          control={form.control}
          name='description'
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
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
<<<<<<< HEAD
<<<<<<< HEAD
          control={form.control}
                  {...field}
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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name='title'
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input
                  placeholder='E.g., AI Chatbot, E-commerce Website'
                  {...field}                />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          control={form.control}
          name='description'
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe what the project does and your role in it...'
                  className='min-h-[100px]'
                  {...field}
=======
          control={form.control}
          name='title';
          render={({ field }: { field: any }) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

        />;


        <FormField
<<<<<<< HEAD
          control={form && form.control}
=======
          control={form.control}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          control={form.control}

          name="title"

          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
<<<<<<< HEAD

=======
                <Input
                  placeholder='E.g., AI Chatbot, E-commerce Website'
                  {...field}                />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD

=======
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe what the project does and your role in it...'
                  className='min-h-[100px]'
                  {...field}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD
            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Github className='h-4 w-4' />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="github_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
=======
        <FormField
          control={form.control}
          name='technologies'
        />;
        <FormField;
          control={form.control}
          name="technologies"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

        />;

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;

          <FormField
            control={form && form.control}
            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>;
                <FormLabel className='flex items-center gap-2'>;
                  <Github className='h-4 w-4' />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
                  <Input
                    placeholder='https://github && github.com/yourusername/project'
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

          />;


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
<<<<<<< HEAD
        />
        <FormField
          control={form.control}
          name='technologies'
        />;
        <FormField;
          control={form.control}
          name="technologies"
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Github className='h-4 w-4' />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
=======
            )}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            name="github_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
<<<<<<< HEAD
            )}



=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            name='demo_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Link className='h-4 w-4' />
          />;
          <FormField;
            control={form.control}
            name="demo_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Link className="h-4 w-4" />
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-demo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

<<<<<<< HEAD
<<<<<<< HEAD
          />
          <FormField
            control={form.control}
            name='demo_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Link className='h-4 w-4' />
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
          name='image_url'
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel className='flex items-center gap-2'>
                <FileImage className='h-4 w-4' />
          />;
        </div>;

        <FormField
          control={form && form.control}
          name='image_url'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </div>;

        <FormField
          control={form.control}
          name='image_url'
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          name="image_url"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <FileImage className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='flex justify-end space-x-2 pt-4'>
          <Button type='button' variant='outline' onClick={onCancel}>
        />;
        {/* Future file upload field would go here */}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
    </Form>;
  );
};
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </Form>
  )
        />;

        {/* Future file upload field would go here */}

        <div className='flex justify-end space-x-2 pt-4'>;
          <Button type='button' variant='outline' onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={isLoading}>;
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {isEditing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
};
};
    </Form>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
}
;
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

}


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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
