

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define schema for form validation

const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required');
  description: z.string().optional()
  technologies: z.string().optional()
  image_url: z.string().optional()
  github_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
type ProjectFormValues = z && z.infer<typeof projectSchema>;
interface ProjectFormProps {;
  project?: PortfolioProject;
  onSuccess: () => void,;
  onCancel: () => void;
}

export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;

export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export function ProjectForm(): any ({ project, onSuccess, onCancel }: ProjectFormProps) {;

=======


export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const { addProject, updateProject } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!project;

=======  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;
    defaultValues: {;
      title: project?.title || '',;
      description: project?.description || '',;
  const onSubmit = async (data: ProjectFormValues) => {;
    if (!user) return;

    setIsLoading(true),;

    try {;
      const projectData: PortfolioProject = {;
        title: data && data.title,;
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (error) {;
      console && console.error('Error saving project:', error);
    } finally {;
      setIsLoading(false);
    }

  };

=======  },
  };
  },  >>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  },
=======
  };
=======
  },

  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField
          control={form && form.control}
          name="title"
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react',;
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
import { useAuth } from '@/hooks/useAuth',;
;
// Define schema for form validation;
const projectSchema = z.object({;
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
      technologies:project?.technologies ? project.technologies.join() :'',;
      image_url:project?.image_url || '',;
      github_url:project?.github_url || '',;
      demo_url:project?.demo_url || '',;
      pdf_url:project?.pdf_url || ''}
  }),;
  ;
  const onSubmit = async (data:ProjectFormValues) => {;
    if (!user) return,;
    ;
    setIsLoading(true),;
    ;
    try {;
      const projectData:PortfolioProject = {;
        title:data.title,;
        description:data.description,;
        technologies:data.technologies ? ;
          data.technologies.split().map(tech => tech.trim()) :[],;
        image_url:data.image_url,;
        github_url:data.github_url || undefined,;
        demo_url:data.demo_url || undefined,;
        pdf_url:data.pdf_url},;
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
      console.error('Error saving project:', error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
          name="title";
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Project Title</FormLabel>;
              <FormControl>;
        />;


        <FormField
          control={form && form.control}
          name="description"

        <FormField
          control={form && form.control}
          name="technologies"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;
                <Input placeholder="React, Node && Node.js, MongoDB, etc. (comma separated)" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

        />;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

          <FormField
            control={form && form.control}
            name="github_url"
