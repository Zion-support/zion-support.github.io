<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
      let success = false;
      // Check condition;
if ( {) {}
  $2;
}
        success = await update_project (project.id, project_data);
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import {logErrorToProduction} from '@/utils/productionLogger';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react'
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio  } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';
// Define schema for form validation
const projectSchema = null;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { logErrorToProduction } from '@/utils/productionLogger'; import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
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
    if (!user) return
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
origin/cursor/automate-test-improve-and-merge-code-2533
      } else {
=======
      } else {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
        const projectId = await addProject(projectData)
        success = !!projectId;
      }

      // Check condition;
if ( {) {}
  $2;
}
        on_success ();
        form.reset ();

      }
    } catch (error) {}
      logErrorToProduction('Error saving project:', { data: error })
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
    } finally {

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
=======
    } finally {}
'
import React from 'react';'
import { useState } from 'react';'
import { useForm } from 'react-hook-form';'
import { zodResolver } from '@hookform/resolvers/zod';'
import { z } from 'zod';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';'
import { Textarea } from '@/components/ui/textarea';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
import { logErrorToProduction } from '@/utils/productionLogger';import {;
      setIsLoading(false)
    }
  }
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
=======
'
import { useState } from 'react',;'
import { useForm } from 'react-hook-form',;'
import { zodResolver } from '@hookform/resolvers/zod',;'
import { z } from 'zod',;'
import { Button } from '@/components/ui/button',;'
import { Input } from '@/components/ui/input',;'
import { Textarea } from '@/components/ui/textarea',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
  FormLabel,;
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  FormMessage,;
} from '@/components/ui/form';import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';
// Define schema for form validation;
const projectSchema = z && z.object({;
  title: z && z.string().min(1, 'Project title is required'),,
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
      title: project?.title || '',,
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
        title: data && data.title,,
  description: data && data.description,;
        technologies: data && data.technologies;
          ? data && data.technologies.split(',').map(tech => tech && tech.trim());
          : [],;
        image_url: data && data.image_url,;
        github_url: data && data.github_url || undefined,;
        demo_url: data && data.demo_url || undefined,;
        pdf_url: data && data.pdf_url,
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
        form && form.reset();      }
=======
=======
=======
  FormMessage} from '@/components/ui/form',;
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
=======
  FormLabel,;'
  FormMessage} from '@/components/ui/form',;'
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';'
import { PortfolioProject } from '@/types/resume',;'
import { usePortfolio } from '@/hooks/usePortfolio',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
import { useAuth } from '@/hooks/useAuth',;
// Define schema for form validation;
const projectSchema = z.object({;'
  title: z.string().min(1, 'Project title is required'),;
  description: z.string().optional(),;
  technologies: z.string().optional(),;
  image_url: z.string().optional(),;
  github_url: z;'
    .union([z.string().url('Please enter a valid URL'), z.literal('')]);
    .optional(),;
  demo_url: z;'
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
export function ProjectForm() { return null; }
  const { user } = useAuth(),;
  const { addProject, updateProject } = usePortfolio(),;
  const [isLoading, setIsLoading] = useState(false),;
  const isEditing = !!project,;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectForm.tsx

  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
    defaultValues: {;
      title: project?.title || '',;
      description: project?.description || '',;
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
      technologies: project?.technologies ? project.technologies.join() : '',;
      image_url: project?.image_url || '',;
      github_url: project?.github_url || '',;
      demo_url: project?.demo_url || '',;
=======
    defaultValues: {;'
      title: project?.title || '',;'
      description: project?.description || '',;'
      technologies: project?.technologies ? project.technologies.join() : '',;'
      image_url: project?.image_url || '',;'
      github_url: project?.github_url || '',;'
      demo_url: project?.demo_url || '',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/resume-builder/portfolio/ProjectForm.tsx

=======

  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;
    defaultValues: {;
      title: project?.title || '',;
      description: project?.description || '',;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    } catch (error) {;
=======
    } catch (error) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
      logErrorToProduction('Error saving project:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
  
<<<<<<< HEAD
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======

  return (

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
  return (

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <FormField
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
          control={form.control}
<<<<<<< HEAD
=======
          name='description'
=======

  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-4'>;        <FormField

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
        />;
        <FormField
          control={form.control}
          name='description''

        <FormField
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          control={form && form.control}          name='description'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
          control={form.control}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx

=======
        <FormField;
        />;


        <FormField;
          control={form.control}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
          name='description'
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                <Textarea'
                  placeholder='Describe what the project does and your role in it...''
                  className='min-h-[100px]'
=======
                <Textarea
                  placeholder='Describe what the project does and your role in it...'',
                  className='min-h-[100px]''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
      setIsLoading (false);
    }
  }
  return (
    <Form {...form}>;'
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}'
          name='title';
          render={({ field }: { field: any }) => (
            <FormItem>;
              <FormLabel > Project Title</FormLabel>;
              <FormControl>;
                <Input;'
                  placeholder='E.g., AI Chatbot, E - commerce Website';
                  {...field}                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}'
          name='description';
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel > Project Description</FormLabel>;
              <FormControl>;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                <Textarea;'
                  placeholder='Describe what the project does and your role in it...';'
                  className='min - h-[100px]';
=======
                <Textarea;
                  placeholder='Describe what the project does and your role in it...';
                  className='min - h-[100px]';,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
        />;
        <FormField
          control={form.control}
          name='technologies''

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
        <FormField
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          control={form && form.control}          name='technologies'
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
          control={form.control}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx

=======

        <FormField;
          control={form.control}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
          name='technologies'
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          render={({ field }: { field: any }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                <Input'
                  placeholder='React, Node && Node.js, MongoDB, etc. (comma separated)'
            </FormItem>)}
=======
                <Input placeholder='React, Node && Node.js, MongoDB, etc. (comma,  separated)''
            </FormItem />)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
        />;
        <FormField;
          control={form.control}'
          name='technologies';
          control={form.control}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
          name="title""
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
          name="title"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />;
        <FormField;
          control={form.control}"
=======
        />;
        <FormField;
          control={form.control}
          name="description""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
          name="description"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                <Textarea "
                  placeholder="Describe what the project does and your role in it...""
=======
                <Textarea
                  placeholder="Describe what the project does and your role in it..."",
                  className="min-h-[100px]""
                  {...field}
                <Textarea 
                  placeholder="Describe what the project does and your role in it..."
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />;
        <FormField;
          control={form.control}"
          name="technologies"
=======
        />;
        <FormField;
          control={form.control}
          name="technologies""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
          render={({ field }: { field: any }) => (
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
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
<<<<<<< HEAD
            control={form.control}
            name="github_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
=======
            control={form && form.control}
=======
            <FormItem>;
              <FormLabel > Technologies Used</FormLabel>;
              <FormControl>;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                <Input;'
                  placeholder='React, Node.js, MongoDB, etc. (comma separated)';
=======
                <Input;
                  placeholder='React, Node.js, MongoDB, etc. (comma,  separated)';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
        />;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
'
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;

          <FormField;
            control={form && form.control}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>;'
                <FormLabel className='flex items-center gap-2'>;'
=======
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <FormField
            control={form && form.control}
            name='github_url''
            render={({ field }: { field: any }) => (              <FormItem>;
                <FormLabel className='flex items-center gap-2'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
                  <Github className='h-4 w-4' />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                  <Input'
                    placeholder='https://github && github.com/yourusername/project'
            </FormItem>)}
        />;'
=======
                  <Input placeholder='https://github && github.com/yourusername/project''
            </FormItem />)}
        />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <FormField;
            control={form.control}'
            name='github_url';
            render={({ field }: { field: any }) => (              <FormItem>;'
                <FormLabel className='flex items - center gap - 2'>;'
                  <Github className='h - 4 w - 4' />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
                  <Input;'
                    placeholder='https://github.com / yourusername / project';
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}'
            name='demo_url';
            render={({ field }: { field: any }) => (              <FormItem>;'
                <FormLabel className='flex items - center gap - 2'>;'
                  <Link className='h - 4 w - 4' />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
                  <Input;'
                    placeholder='https://your - project - demo.com';
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
          />;

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
          <FormField
            control={form && form.control}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======

          <FormField;
            control={form && form.control}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
            name='demo_url'
            render={({ field }: { field: any }) => (              <FormItem>;'
                <FormLabel className='flex items-center gap-2'>;'
=======
            name='demo_url''
            render={({ field }: { field: any }) => (              <FormItem>;
                <FormLabel className='flex items-center gap-2'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
                  <Link className='h-4 w-4' />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                  <Input'
                    placeholder='https://your-project-demo && demo.com'
=======
                  <Input
                    placeholder='https://your-project-demo && demo.com''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
                  GitHub URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/yourusername/project" {...field} />"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="github_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  GitHub URL
=======
                  GitHub URL;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
                </FormLabel>
                <FormControl>"
                  <Input placeholder="https://github.com/yourusername/project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          />;
          <FormField;
            control={form.control}"
=======
          />;
          <FormField;
            control={form.control}
            name="demo_url""
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">"
                  <Link className="h-4 w-4" />"
                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-demo.com" {...field} />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
            name="demo_url"
            render={({ field }: { field: any }) => (
              <FormItem>"
                <FormLabel className="flex items-center gap-2">"
                  <Link className="h-4 w-4" />

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                  Demo URL
=======

                  Demo URL;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
                </FormLabel>
                <FormControl>"
                  <Input placeholder="https://your-project-demo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======

          />;
        </div>;

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
        <FormField
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          control={form && form.control}          name='image_url'
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
          control={form.control}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
          />;
        </div>;
        <FormField
          control={form.control}
          name='image_url''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx

          name='image_url'
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel className='flex items-center gap-2'>;
=======
        <FormField;
          control={form.control}'
          name='image_url'
          render={({ field }: { field: any }) => (            <FormItem>;'
              <FormLabel className='flex items-center gap-2'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
                <FileImage className='h-4 w-4' />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                <Input'
                  placeholder='https://example && example.com/screenshot && screenshot.jpg'
              </FormItem>)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <Input placeholder='https://example && example.com/screenshot && screenshot.jpg''
              </FormItem />)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
          />;
        </div>;
        <FormField;
          control={form.control}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
          name="image_url""
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">"
                <FileImage className="h-4 w-4" />"
                Screenshot URL
              </FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />"
        <FormField;
          control={form.control}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
          name="image_url"
          render={({ field }: { field: any }) => (
            <FormItem>"
              <FormLabel className="flex items-center gap-2">"
                <FileImage className="h-4 w-4" />

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                Screenshot URL
=======

                Screenshot URL;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
              </FormLabel>
              <FormControl>"
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />;
        {/* Future file upload field would go here */}
        "
        <div className="flex justify-end space-x-2 pt-4">"
          <Button type="button" variant="outline" onClick={onCancel}>
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
        />;
        {/* Future file upload field would go here */}

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
            Cancel
          </Button>
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {isEditing ? 'Update' : 'Add'} Project
=======

            Cancel;
          </Button>"
          <Button type="submit" disabled={isLoading}>"
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}'
            {isEditing ? 'Update' : 'Add'} Project;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
          </Button>
        </div>
      </form>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </Form>
  )
}
;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </Form>
  )
        />;
        {/* Future file upload field would go here */}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
'
        <div className='flex justify-end space-x-2 pt-4'>;'
          <Button type='button' variant='outline' onClick={onCancel}>;
            Cancel;
          </Button>;'
          <Button type='submit' disabled={isLoading}>;'
=======
        <div className='flex justify-end space-x-2 pt-4'>;
          <Button type='button' variant='outline' onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={isLoading}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}'
            {isEditing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;
  )
};
};
    </Form>
  )
}
}
}

            </FormItem>)}
        />;
        {/* Future file upload field would go here */}'
        <div className='flex justify - end space - x-2 pt - 4'>;'
          <Button type='button' variant='outline' on_click={on_cancel}>;
            Cancel;
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
          </Button>;'
          <Button type='submit' disabled={is_loading}>;'
=======
          </Button>;
          <Button type='submit' disabled={is_loading}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
            {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}'
            {is_editing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>);
}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/resume-builder/portfolio/ProjectForm.tsx
  );
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectForm.tsx
