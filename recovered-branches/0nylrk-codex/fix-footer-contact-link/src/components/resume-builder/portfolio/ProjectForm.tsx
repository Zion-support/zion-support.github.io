<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { Loader2, Link, FileImage, Github, Edit  } from 'lucide-react';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio  } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Define schema for form validation

const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required');
  description: z.string().optional()
  technologies: z.string().optional()
  image_url: z.string().optional()
  github_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
    .optional();
  demo_url: z
    .union([z.string().url('Please enter a valid URL'), z.literal('')])
    .optional();
  pdf_url: z.string().optional()})
type ProjectFormValues = z.infer<typeof projectSchema>;
interface ProjectFormProps {
  project?: PortfolioProject;
  onSuccess: () => void
  onCancel: () => void
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  pdf_url: z && z.string().optional()}),;

type ProjectFormValues = z && z.infer<typeof projectSchema>;

interface ProjectFormProps {;
  project?: PortfolioProject;
<<<<<<< HEAD
  onSuccess: () => void,;
  onCancel: () => void;
}
=======


export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {

export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
export function ProjectForm(): any ({ project, onSuccess, onCancel }: ProjectFormProps) {;

=======


export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    .optional();
  demo_url: z;
    .union([z && z.string().url('Please enter a valid URL'), z && z.literal('')]);
    .optional();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
  const { addProject, updateProject } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!project;
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;
    defaultValues: {;
      title: project?.title || '',;
      description: project?.description || '',;
<<<<<<< HEAD
      technologies: project?.technologies ? project && project.technologies.join() : '',;
=======
      technologies: project?.technologies ? project.technologies.join() : '',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      image_url: project?.image_url || '',;
      github_url: project?.github_url || '',;
      demo_url: project?.demo_url || '',;
      pdf_url: project?.pdf_url || ''}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
        form.reset()

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        form && form.reset();
=======
=======
        const projectId = await addProject(projectData);
        success = !!projectId;
      }
      if (success) {;
        onSuccess();
        form && form.reset();
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      if (success) {;
        onSuccess();
        form.reset();

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    } catch (error) {;
      console && console.error('Error saving project:', error);
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD

  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },
=======

  };



<<<<<<< HEAD
=======
      }
    } catch (error) {
      console.error('Error saving project:', error)
    } finally {
      setIsLoading(false)
    }
  }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  };
  },
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField
          control={form && form.control}
          name="title"
<<<<<<< HEAD
=======

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
        const projectId = await addProject(projectData);
        success = !!projectId;
      }
        onSuccess();
        form && form.reset();
      }
    } catch (error) {;
      console.error('Error saving project:', error),;
    } finally {;
      setIsLoading(false),;
    }
  }

  },
  };
  },
  };
  },

  };
  },
  

  return (
    <Form {...form}>;
<<<<<<< HEAD
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
          name="title";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Project Title</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
                <Input placeholder="E && E.g., AI Chatbot, E-commerce Website" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

        />;


        <FormField
          control={form && form.control}
          name="description"

=======
        />;
        <FormField
          control={form && form.control}
          name="description"
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="description";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Project Description</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
                <Textarea
                  placeholder="Describe what the project does and your role in it..."
                  className="min-h-[100px]"
                  {...field} 
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;


        <FormField
          control={form && form.control}
          name="technologies"
=======
        <FormField
          control={form && form.control}
          name="technologies"
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
                <Input placeholder="React, Node && Node.js, MongoDB, etc. (comma separated)" {...field} />;
=======
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD

        />;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

          <FormField
            control={form && form.control}
            name="github_url"
=======
        />;
          <FormField
            control={form && form.control}
            name="github_url"
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="github_url";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField
          control={form && form.control}
          name="title"
          <FormField
            control={form && form.control}
            name="github_url"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="flex items-center gap-2">;
                  <Github className="h-4 w-4" />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Input placeholder="https://github && github.com/yourusername/project" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          <FormField
            control={form && form.control}
            name="demo_url"
<<<<<<< HEAD
=======
          />;
          <FormField
            control={form && form.control}
            name="demo_url"
                  <Input placeholder="https://github.com/yourusername/project" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="demo_url";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="flex items-center gap-2">;
                  <Link className="h-4 w-4" />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Input placeholder="https://your-project-demo && demo.com" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
        <FormField
          control={form && form.control}
          name="image_url"
<<<<<<< HEAD
=======
          />;
        </div>;
        <FormField
          control={form && form.control}
          name="image_url"
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="flex items-center gap-2">;
                <FileImage className="h-4 w-4" />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                <Input placeholder="https://example && example.com/screenshot && screenshot.jpg" {...field} />;
=======
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <Input placeholder="https://example && example.com/screenshot && screenshot.jpg" {...field} />;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD


        


<<<<<<< HEAD
=======
  
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
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  )
<<<<<<< HEAD
=======

        />;

        {/* Future file upload field would go here */}

        <div className="flex justify-end space-x-2 pt-4">;
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isLoading}>;
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        />;
        ;
        {/* Future file upload field would go here */}
        ;
        <div className="flex justify-end space-x-2 pt-4">;
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isLoading}>;
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Update' :'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
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
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD



=======
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
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className="space - y-4">;
        <FormField;
          control={form.control}
          name="title";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Project Title</FormLabel>;
              <FormControl>;
                <Input placeholder="E.g., AI Chatbot, E - commerce Website" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="description";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Project Description</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder="Describe what the project does and your role in it...";
                  className="min - h-[100px]";
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="technologies";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Technologies Used</FormLabel>;
              <FormControl>;
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <FormField;
            control={form.control}
            name="github_url";
            render={({ field }) => (
              <FormItem>;
                <FormLabel className="flex items - center gap - 2">;
                  <Github className="h - 4 w - 4" />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
                  <Input placeholder="https://github.com / yourusername / project" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="demo_url";
            render={({ field }) => (
              <FormItem>;
                <FormLabel className="flex items - center gap - 2">;
                  <Link className="h - 4 w - 4" />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
                  <Input placeholder="https://your - project - demo.com" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>)}
          />;
        </div>;
        <FormField;
          control={form.control}
          name="image_url";
          render={({ field }) => (
            <FormItem>;
              <FormLabel className="flex items - center gap - 2">;
                <FileImage className="h - 4 w - 4" />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
                <Input placeholder="https://example.com / screenshot.jpg" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        {/* Future file upload field would go here */}
        <div className="flex justify - end space - x-2 pt - 4">;
          <Button type="button" variant="outline" on_click={on_cancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={is_loading}>;
            {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
            {is_editing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>);
}
  ),;}
 type ProjectFormValues = z.infer<typeof projectSchema>;
setIsLoading (true);
try {
  const projectData: PortfolioProject = {
  </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Project Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> {
  /* Future file upload field would go here */ 
}</Button> </div> </form> </Form>) 
}
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
