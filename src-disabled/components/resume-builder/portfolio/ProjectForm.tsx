<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
      let success = false;
      // Check condition;
if ( {) {$2;
}
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        success = await update_project (project.id, project_data)import { useState   } from 'react';
import { useForm   } from 'react-hook-form';
import { zodResolver   } from '@hookform/resolvers/zod';
import { z   } from 'zod';
import { Button   } from '@/components/ui/button';
import { Input   } from '@/components/ui/input';
import { Textarea   } from '@/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
=======
        success = await update_project (project.id, project_data)import { useState   } from 'react;
import { useForm   } from react-hook-form';
import { zodResolver   } from '@hookform/resolvers/zod;
import { z   } from zod';
import { Button   } from '@/components/ui/button;
import { Input   } from @/components/ui/input';
import { Textarea   } from '@/components/ui/textarea;
import { logErrorToProduction } from @/utils/productionLogger';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage  } from '@/components/ui/form';
import { Loader2, Link, FileImage, Github, Edit  } from 'lucide-react';
import { PortfolioProject   } from '@/types/resume';
import { usePortfolio   } from '@/hooks/usePortfolio';
import { useAuth  } from '@/hooks/useAuth';
// Define schema for form validation;
const projectSchema = null;
>>>>>>> merged-prs-20250907-203621
:src/components/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
      let success = false;
      // Check condition;
if ( {) {}
  $2;
}
        success = await update_project (project.id, project_data);

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState  } from react';
import { useForm  } from 'react-hook-form;
import { zodResolver  } from @hookform/resolvers/zod';
import { z  } from 'zod;
import { Button  } from @/components/ui/button';
import { Input  } from '@/components/ui/input;
import { Textarea  } from @/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger; import {Form;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
<<<<<<< HEAD
import { logErrorToProduction } from '@/utils/productionLogger'; import {Form;
=======
import {logErrorToProduction} from '@/utils/productionLogger';
import { Form;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  FormControl;
  FormField;
  FormItem;
  FormLabel;
<<<<<<< HEAD
  FormMessage;
} from '@/components/ui/form'; import { Loader2, Link, FileImage, Github, Edit  } from 'lucide-react';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio  } from '@/hooks/usePortfolio';
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
  FormMessage } from '@/components/ui/form';
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react'
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio  } from '@/hooks/usePortfolio';
<<<<<<< HEAD


=======
<<<<<<< HEAD
import { useAuth } from '@/hooks/useAuth';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Define schema for form validation;
const projectSchema = z.object({title: z.string().min(1, 'Project title is required')description: z.string().optional()technologies: z.string().optional()image_url: z.string().optional()github_url: z;
    .union([z.string().url('Please enter a valid URL'), z.literal('')]).optional()demo_url: z;
    .union([z.string().url('Please enter a valid URL'), z.literal('')]).optional()pdf_url: z.string().optional()})type ProjectFormValues = z.infer<typeof projectSchema>;
interface ProjectFormProps  {project?: PortfolioProject;
  onSuccess: () => void;
  onCancel: () => void;
export function ProjectForm() {const { user } = useAuth()const { addProject, updateProject } = usePortfolio()const [isLoading, setIsLoading] = useState(false)const isEditing = !!project;
  const form = useForm<ProjectFormValues>({resolver: zodResolver(projectSchema)defaultValues: {title: project?.title |'';
      description: project?.description |'';
      technologies: project?.technologies;
        ? project.technologies.join(', '): '';
      image_url: project?.image_url |'';
      github_url: project?.github_url |'';
      demo_url: project?.demo_url |'';
      pdf_url: project?.pdf_url |'';
    }
  })const onSubmit = async (data: ProjectFormValues) => {if (!user) return;
    setIsLoading(true)try {const projectData: PortfolioProject = {title: data.title;
        description: data.description;
        technologies: data.technologies;
          ? data.technologies.split(',').map(tech => tech.trim()): [];
        image_url: data.image_url;
        github_url: data.github_url |undefined;
        demo_url: data.demo_url |undefined;
        pdf_url: data.pdf_url;
      }
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      let success = false
      if (isEditing && project?.id) {
        success = await updateProject(project.id, projectData)
origin/cursor/automate-test-improve-and-merge-code-2533
        success = await update_project (project.id, project_data);
      } else {
<<<<<<< HEAD
import { useAuth } from '@/hooks/useAuth';
=======
import { useAuth } from @/hooks/useAuth';
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/resume-builder/portfolio/ProjectForm.tsx
// Define schema for form validation
const projectSchema = null;
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
<<<<<<< HEAD
} from '@/components/ui/form'; import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react'
import { PortfolioProject } from '@/types/resume'
import { usePortfolio } from '@/hooks/usePortfolio'
import { useAuth } from '@/hooks/useAuth'
=======
} from '@/components/ui/form; import { Loader2, Link, FileImage, Github, Edit } from lucide-react'
import { PortfolioProject } from '@/types/resume
import { usePortfolio } from @/hooks/usePortfolio'
import { useAuth } from '@/hooks/useAuth
=======
import { useAuth } from '@/hooks/useAuth';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Define schema for form validation
const projectSchema = null;

        const projectId = await addProject(projectData)
        success = !!projectId;
      }

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Check condition
if ( {) {
  $2
      let success = false;
      if (isEditing && project?.id) {success = await updateProject(project.id, projectData)} else {const projectId = await addProject(projectData)success = !!projectId;
      }// Check condition;
if ( {) {$2;
}
        on_success ()form.reset ()}
    } catch (error) {logErrorToProduction('Error saving project:', { data: error })} finally {import React from 'react';
import { logErrorToProduction } from '@/utils/productionLogger';import {setIsLoading(false)}
  }import { useState } from 'react',import { useForm } from 'react-hook-form',import { zodResolver } from '@hookform/resolvers/zod',import { z } from 'zod',import { Button } from '@/components/ui/button',import { Input } from '@/components/ui/input',import { Textarea } from '@/components/ui/textarea',import {logErrorToProduction} from '@/utils/productionLogger',import {Form,FormControl,FormField,FormItem,FormLabel,const form = useForm<ProjectFormValues>({resolver: zodResolver(projectSchema),defaultValues: {title: project?.title || '',description: project?.description || ''}
    } catch (error) {logErrorToProduction('Error saving project:', { data: error })} finally {setIsLoading(false)}},return (<FormField />;<FormField;
          name='description';
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel>Project Description</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder='Describe what the project does and your role in it...';
                  className='min-h-[100px]';
      setIsLoading (false)}
  }
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Check condition;
if ( {) {}
  $2;
}
        on_success ();
        form.reset ();

      }
    } catch (error) {}
      logErrorToProduction('Error saving project:', { data: error })

import { logErrorToProduction } from '@/utils/productionLogger';import {;
      setIsLoading(false)
    }

<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
=======
import { useState } from 'react,
import { useForm } from react-hook-form',
import { zodResolver } from '@hookform/resolvers/zod,
import { z } from zod',
import { Button } from '@/components/ui/button,
import { Input } from @/components/ui/input',
import { Textarea } from '@/components/ui/textarea,
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
  FormLabel,;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  FormLabel,;
  FormLabel,
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema),;

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

      logErrorToProduction('Error saving project:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  },

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

        <FormField

        />;
        <FormField
          control={form.control}
<<<<<<< HEAD

          name='description''

=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
          name='title'
<<<<<<< HEAD
          name='description''
=======
          name=description'
=======
          name='description''
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <FormField

          name='description'

          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>

      setIsLoading (false);
    }
  return (
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Form {...form}>;
  return (<Form {...form}>;
    <Form {...form}>;'
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}'
          name='title';
          render={({ field }: { field: any }) => (<FormItem>;
=======
>>>>>>> merged-prs-20250907-203621
    <Form {...form}>;'
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}'
          name='title';
          render={({ field }: { field: any }) => (
            <FormItem>;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                  {...field}
                />;
              </FormControl>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <FormMessage />;/>;<FormField;
          name='technologies';
          render={({ field }: { field: any }) => (<FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder='React, Node && Node.js, MongoDB, etc. (comma separated)';
            </FormItem>)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <FormMessage />;
        />;
        <FormField
          control={form.control}
          name='technologies''

          name='technologies'

          render={({ field }: { field: any }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;

        />;
        <FormField;
          control={form.control}'
          name='technologies';
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
          control={form.control}name="title";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          control={form.control}name="title";
          control={form.control}name="title;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          render={({ field }: { field: any }) => (<FormItem>;
              <FormLabel>Project Title</FormLabel>;
              <FormControl>;
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}/>;
        <FormField;
          control={form.control}
          name="description";
          render={({ field }: { field: any }) => (<FormItem>;
              <FormLabel>Project Description</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder="Describe what the project does and your role in it...";
                  className="min-h-[100px]";
                  {...field}/>;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}/>;
        <FormField;
          control={form.control}
          name="technologies";
          render={({ field }: { field: any }) => (<FormItem>;
              <FormLabel > Technologies Used</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder='React, Node.js, MongoDB, etc. (comma separated)';
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;/>;<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;<FormField;
            control={form && form.control}
            name='github_url';
            render={({ field }: { field: any }) => (              <FormItem>;
<<<<<<< HEAD
                <FormLabel className='flex items-center gap-2'>;
=======
                <FormLabel className='flex items-center gap-2>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
          control={form.control}

          name="title"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
                <Input
                  placeholder='E.g., AI Chatbot, E-commerce Website'
                  {...field}                />
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

        />;
        <FormField;
          control={form.control}"

          name="description"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>

                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
        />
        <FormField
          control={form.control}
<<<<<<< HEAD
          name='technologies'
=======
          name=technologies'
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        />;
        <FormField;
          control={form.control}"
          name="technologies"

          render={({ field }: { field: any }) => (

                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
        />;

                  <Github className='h-4 w-4' />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <Input;
                    placeholder='https://github && github.com/yourusername/project';
            </FormItem>)}
        />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <FormMessage />;/>;<FormField;
            control={form && form.control}
            name='demo_url';
            render={({ field }: { field: any }) => (              <FormItem>;
<<<<<<< HEAD
                <FormLabel className='flex items-center gap-2'>;
=======
                <FormLabel className='flex items-center gap-2>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <FormMessage />;
          />;

            name='demo_url'
            render={({ field }: { field: any }) => (              <FormItem>;'
                <FormLabel className='flex items-center gap-2'>;'

                  <Link className='h-4 w-4' />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
                  <Input;
                    placeholder='https://your-project-demo && demo.com';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <Input;
                    placeholder=https://your-project-demo && demo.com';
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            )}GitHub URL;
                </FormLabel>;
                <FormControl>;
                  <Input placeholder="https://github.com/yourusername/project" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}/>;
          <FormField;
            control={form.control}
            name="demo_url";
            render={({ field }: { field: any }) => (<FormItem>;
                <FormLabel className="flex items-center gap-2">;
                  <Link className="h-4 w-4" />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
                  <Input placeholder="https://your-project-demo.com" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}/>;
        </div>;<FormField;
<<<<<<< HEAD
          name='image_url';
=======
          name='image_url;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>
<<<<<<< HEAD
                <FormLabel className='flex items-center gap-2'>
                  <Github className='h-4 w-4' />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
=======
                <FormLabel className=flex items-center gap-2'>
                  <Github className='h-4 w-4 />
        <div className=grid grid-cols-1 md:grid-cols-2 gap-4>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <FormField
            control={form.control}
            name="github_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Github className="h-4 w-4" />

                  GitHub URL

                </FormLabel>
                <FormControl>"
                  <Input placeholder="https://github.com/yourusername/project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
          />
          <FormField
            control={form.control}
            name='demo_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Link className='h-4 w-4' />
                  Demo URL
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

          />;
          <FormField;
            control={form.control}"

            name="demo_url"
            render={({ field }: { field: any }) => (
              <FormItem>"
                <FormLabel className="flex items-center gap-2">"
                  <Link className="h-4 w-4" />

                </FormLabel>
                <FormControl>"
                  <Input placeholder="https://your-project-demo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

<<<<<<< HEAD

=======
<<<<<<< HEAD
          name='image_url'
=======
<<<<<<< HEAD
          name='image_url
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/resume-builder/portfolio/ProjectForm.tsx
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel className='flex items-center gap-2'>
                <FileImage className='h-4 w-4' />
                Screenshot URL
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          name='image_url'


          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel className='flex items-center gap-2'>;

                <FileImage className='h-4 w-4' />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Input;
                  placeholder='https://example && example.com/screenshot && screenshot.jpg';
              </FormItem>)}
          />;
        </div>;
        <FormField;
          control={form.control}name="image_url";
          render={({ field }: { field: any }) => (<FormItem>;
              <FormLabel className="flex items-center gap-2">;
                <FileImage className="h-4 w-4" />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}/>;
        {/* Future file upload field would go here */}<div className="flex justify-end space-x-2 pt-4">;
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={isLoading}>;
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {isEditing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;
  )/>;{/* Future file upload field would go here */}<div className='flex justify-end space-x-2 pt-4'>;
          <Button type='button' variant='outline' onClick={onCancel}>;
            Cancel;
          </Button>;
<<<<<<< HEAD
          <Button type='submit' disabled={isLoading}>;
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
=======
          <Button type=submit' disabled={isLoading}>;
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin />}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          />;
        </div>;
        <FormField;
          control={form.control}

          name="image_url"
          render={({ field }: { field: any }) => (
            <FormItem>"
              <FormLabel className="flex items-center gap-2">"
                <FileImage className="h-4 w-4" />

              </FormLabel>
              <FormControl>"
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/resume-builder/portfolio/ProjectForm.tsx
        />
        {/* Future file upload field would go here */}
<<<<<<< HEAD
        <div className='flex justify-end space-x-2 pt-4'>
          <Button type='button' variant='outline' onClick={onCancel}>
=======
        <div className=flex justify-end space-x-2 pt-4'>
          <Button type='button variant=outline' onClick={onCancel}>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        />;
        {/* Future file upload field would go here */}
        "
        <div className="flex justify-end space-x-2 pt-4">"
          <Button type="button" variant="outline" onClick={onCancel}>

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
        />;
        {/* Future file upload field would go here */}

            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}'
            {isEditing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
};
    </Form>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
  )}}</Form>;
  )}
}}</FormItem>)}
        />;
        {/* Future file upload field would go here */}
        <div className='flex justify - end space - x-2 pt - 4'>;
          <Button type='button' variant='outline' on_click={on_cancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={is_loading}>;
            {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}
>>>>>>> merged-prs-20250907-203621
  )
};
:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
};
=======
}
}
=======
  )
};
};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </Form>
  )
}

            </FormItem>)}
        />;
        {/* Future file upload field would go here */}'
        <div className='flex justify - end space - x-2 pt - 4'>;'
          <Button type='button' variant='outline' on_click={on_cancel}>;
            Cancel;

            {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}'
            {is_editing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/resume-builder/portfolio/ProjectForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </Form>)}
})
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </Form>);
});