


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






// Define schema for form validation

const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required');
  description: z.string().optional()
  technologies: z.string().optional()
  image_url: z.string().optional()
  github_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])


import {useState} from 'react';
import {use_form} from 'react - hook - form';
import {zod_resolver} from '@hookform / resolvers / zod';
import {z} from 'zod';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Textarea} from '@/components / ui / textarea';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {Loader2, Link, FileImage, Github, Edit} from 'lucide-react';

  pdf_url: z && z.string().optional()}),;

type ProjectFormValues = z && z.infer<typeof projectSchema>;

interface ProjectFormProps {;
  project?: PortfolioProject;
  onSuccess: () => void,;
  onCancel: () => void;
}

export function ProjectForm(): any ({ project, onSuccess, onCancel }: ProjectFormProps) {;




export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  const { user } = useAuth();
  const { addProject, updateProject } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!project;
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema)
    defaultValues: {
      title: project?.title |''
      description: project?.description |''
      technologies: project?.technologies ? project.technologies.join() : ''
      image_url: project?.image_url |''
      github_url: project?.github_url |''
      demo_url: project?.demo_url |''
      pdf_url: project?.pdf_url |''}
  });
  const onSubmit = async (data: ProjectFormValues) => {
    if (!user) return;
    setIsLoading(true)
    try {
      const projectData: PortfolioProject = {
        title: data.title
        description: data.description
        technologies: data.technologies ?
          data.technologies.split().map(tech => tech.trim()) : []
        image_url: data.image_url
        github_url: data.github_url |undefined
        demo_url: data.demo_url |undefined
        pdf_url: data.pdf_url}
      let success = false;
      if (isEditing && project?.id) {
        success = await updateProject(project.id, projectData)
      } else {
        const projectId = await addProject(projectData);
        success = !!projectId
      }
      if (success) {
        onSuccess();
        form.reset()
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
      technologies: project?.technologies ? project && project.technologies.join() : '',;
      image_url: project?.image_url || '',;
      github_url: project?.github_url || '',;
      demo_url: project?.demo_url || '',;
      pdf_url: project?.pdf_url || ''}
  });

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


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
      }
    } catch (error) {;
      console && console.error('Error saving project:', error);
    } finally {;
      setIsLoading(false);
    }


  };
  },

=======
import {PortfolioProject} from '@/types / resume';
import {use_portfolio} from '@/hooks / use_portfolio';
import {use_auth} from '@/hooks / use_auth';
// Define schema for form validation;
const project_schema = z.object ({
  title: z.string ().min (1, 'Project title is required');
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
