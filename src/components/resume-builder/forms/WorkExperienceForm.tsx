<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { format } from 'date-fns'
import {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from '@/components/ui/form'; import { WorkExperience } from '@/types/resume'

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,;
  FormMessage;
} from '@/components/ui/form'; import { WorkExperience } from '@/types/resume'

import { Loader2, Edit, Trash2 } from 'lucide-react'
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { Card, CardContent  } from '@/components/ui/card';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
// Define schema for form validation

const workExperienceSchema = z.object({
  company_name: z.string().min(1, 'Company name is required')
  role_title: z.string().min(1, 'Job title is required')
  start_date: z.string().min(1, 'Start date is required')
  end_date: z.string().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()
})
type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>
interface WorkExperienceFormProps {
  resumeId: string
  workExperiences: WorkExperience[]
  onComplete: () => void
  onBack: () => void
export function WorkExperienceForm({
  resumeId
  workExperiences
  onComplete
  onBack
}: WorkExperienceFormProps) {
  const {
    addWorkExperience
    updateWorkExperience
    deleteWorkExperience
    isLoading
  } = useResume()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  // Helper function to format dates to string
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return ''
    if (typeof dateValue === 'string') return dateValue
    return format(dateValue, 'yyyy-MM-dd')
  }
  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceSchema)
    defaultValues: {
      company_name: ''
      role_title: ''
      start_date: format(new Date(), 'yyyy-MM-dd')
      is_current: false
      description: ''
      location: ''
    }
  })
  const handleAddOrUpdate = async (data: WorkExperienceFormValues,) => {
    try {
      setError(null)
      let success
      const experienceData: WorkExperience = {
        company_name: data.company_name, // Required field
        role_title: data.role_title, // Required field
        start_date: data.start_date, // Required field
        end_date: data.is_current ? undefined : data.end_date |undefined
        is_current: data.is_current
        description: data.description
        location: data.location
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      if (editingId) {
        success = await updateWorkExperience(editingId, experienceData)
      } else {
        success = await addWorkExperience(resumeId, experienceData)
      }
      if (success) {
        form.reset({
          company_name: ''
          role_title: ''
          start_date: format(new Date(), 'yyyy-MM-dd')
          is_current: false
          description: ''
          location: ''
        })
        setEditingId(null)
      }
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      setError(err.message |'An error occurred')
    }
  }
  const handleEdit = (work: WorkExperience) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      setError(err.message || 'An error occurred');
    };
  };
  const handleEdit = (work: WorkExperience) => {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    setEditingId(work.id!);    form.reset({
      ...work
  const handleEdit = (work: WorkExperience) => {
    setEditingId(work.id!)
    form.reset({
      start_date: formatDateValue(work.start_date)
      end_date:
        work.end_date && !work.is_current
          ? formatDateValue(work.end_date)
          : undefined
    })
<<<<<<< HEAD
      // Check condition
if ( {) {
  $2
=======
  }
  const handleDelete = async (id: string,) => {
    if (confirm('Are you sure you want to delete this work experience?')) {
      await deleteWorkExperience(id)
    }
  }
  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  }
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Textarea } from '@/components/ui/textarea',;
import { Input } from '@/components/ui/input',;
import { Checkbox } from '@/components/ui/checkbox',;
import { format } from 'date-fns',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
import { WorkExperience } from '@/types/resume',;
import { Loader2, Edit, Trash2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Card, CardContent } from '@/components/ui/card',;
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',;
// Define schema for form validation;
const workExperienceSchema = z.object({;
  company_name: z.string().min(1, 'Company name is required'),;
  role_title: z.string().min(1, 'Job title is required'),;
  start_date: z.string().min(1, 'Start date is required'),;
  end_date: z.string().optional(),;
  is_current: z.boolean().default(false),;
  description: z.string().optional(),;
  location: z.string().optional()}),;
type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>,;
interface WorkExperienceFormProps {;
  resumeId: string,;
  workExperiences: WorkExperience[],;
  onComplete: () => void,;
  onBack: () => void;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;
  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '',;
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  },;
  const form = useForm<WorkExperienceFormValues>({;
    resolver: zodResolver(workExperienceSchema),;
    defaultValues: {;
      company_name: '',;
      role_title: '',;
      start_date: format(new Date(), 'yyyy-MM-dd'),;
      is_current: false,;
      description: '',;
      location: ''}}),;
  const handleAddOrUpdate = async (data: WorkExperienceFormValues) => {;
    try {;
      setError(null),;
      let success,;
      const experienceData: WorkExperience = {;
        company_name: data.company_name, // Required field;
        role_title: data.role_title, // Required field;
        start_date: data.start_date, // Required field;
        end_date: data.is_current ? undefined : (data.end_date || undefined),;
        is_current: data.is_current,;
        description: data.description,;
        location: data.location},;
      if (editingId) {;
        success = await updateWorkExperience(editingId, experienceData);
      } else {;
        success = await addWorkExperience(resumeId, experienceData);
      }
;
      if (success) {;
        form.reset({;
          company_name: '',;
          role_title: '',;
          start_date: format(new Date(), 'yyyy-MM-dd'),;
          is_current: false,;
          description: '',;
          location: ''}),;
        setEditingId(null);
      }
    } catch (err: any) {;
      setError(err.message || 'An error occurred');
    }
  },;
  const handleEdit = (work: WorkExperience) => {;
    setEditingId(work.id!),;
    form.reset({;
      ...work,;
      start_date: formatDateValue(work.start_date),;
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined});
  },;
  const handleDelete = async (id: string) => {;
    if (confirm('Are you sure you want to delete this work experience?')) {;
      await deleteWorkExperience(id);
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
<<<<<<< HEAD
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Textarea } from '@/components/ui/textarea',;
import { Input } from '@/components/ui/input',;
import { Checkbox } from '@/components/ui/checkbox',;
import { format } from 'date-fns',;
ursor/fix-website-loading-errors-and-merge-6662
  return (


import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
>>>>>>> import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';import { WorkExperience } from '@/types/resume';
import { Loader2, Edit, Trash2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
// Define schema for form validation;
const workExperienceSchema = z && z.object({;
  company_name: z && z.string().min(1, 'Company name is required'),;
  role_title: z && z.string().min(1, 'Job title is required'),;
  start_date: z && z.string().min(1, 'Start date is required'),;
  end_date: z && z.string().optional(),;
  is_current: z && z.boolean().default(false),;
  description: z && z.string().optional(),;
  location: z && z.string().optional(),;
});

type WorkExperienceFormValues = z && z.infer<typeof workExperienceSchema>;

interface WorkExperienceFormProps {;
  resumeId: string;
  workExperiences: WorkExperience[];
  onComplete: () => void;
  onBack: () => void;

export function WorkExperienceForm(): any ({;
  resumeId,;
  workExperiences,;
  onComplete,;
  onBack,;
}: WorkExperienceFormProps) {;
  const {;
    addWorkExperience,;
    updateWorkExperience,;
    deleteWorkExperience,;
    isLoading,;
  } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, 'yyyy-MM-dd');
  };

  const form = useForm<WorkExperienceFormValues>({;
    resolver: zodResolver(workExperienceSchema),;
    defaultValues: {;
      company_name: '',;
      role_title: '',;
      start_date: format(new Date(), 'yyyy-MM-dd'),;
      is_current: false,;
      description: '',;
      location: '',;
    },;
  });

  const handleAddOrUpdate = async (data: WorkExperienceFormValues,) => {;
    try {;
      setError(null);
      let success;

      const experienceData: WorkExperience = {;
        company_name: data && data.company_name, // Required field;
        role_title: data && data.role_title, // Required field;
        start_date: data && data.start_date, // Required field;
        end_date: data && data.is_current ? undefined : data && data.end_date || undefined,;
        is_current: data && data.is_current,;
        description: data && data.description,;
        location: data && data.location,;
      };

      if (editingId) {;
        success = await updateWorkExperience(editingId, experienceData);
      } else {;
        success = await addWorkExperience(resumeId, experienceData);
      }

      if (success) {;
        form && form.reset({;
          company_name: '',;
          role_title: '',;
          start_date: format(new Date(), 'yyyy-MM-dd'),;
          is_current: false,;
          description: '',;
          location: '',;
        });
        setEditingId(null);
      }
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred');
    }
  };
  const handleEdit = (work: WorkExperience) => {;
    setEditingId(work && work.id!);    form && form.reset({;
      ...work,;

  const handleEdit = (work: WorkExperience) => {;
    setEditingId(work && work.id!);
    form && form.reset({;
      start_date: formatDateValue(work && work.start_date),;
      end_date:;
        work && work.end_date && !work && work.is_current;
          ? formatDateValue(work && work.end_date);
          : undefined,;
    });
  };

  const handleDelete = async (id: string,) => {;
    if (confirm('Are you sure you want to delete this work experience?')) {;
      await deleteWorkExperience(id);
    }
  };

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  },

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">
          Add your work history to showcase your professional experience.
        </p>
      </div>
      {workExperiences.length > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='space-y-4'>
          <h3 className='text-md font-medium'>Added Experience</h3>
          {workExperiences.map(work => (
            <Card key={work.id} className='bg-muted/40'>
              <CardContent className='pt-6'>
                <div className='flex justify-between'>                  <div>
                    <h4 className='font-medium'>{work.role_title}</h4>
                    <p className='text-sm text-muted-foreground'>
                      {work.company_name}
                    </p>
                    <p className='text-xs text-muted-foreground mt-1'>
                      {typeof work.start_date === 'string'
                        ? work.start_date
                        : format(work.start_date, 'MMM yyyy')}{' '}
                      -{' '}
                      {work.is_current
                        ? 'Present'
                        : work.end_date
                          ? typeof work.end_date === 'string'
                            ? work.end_date
                            : format(work.end_date, 'MMM yyyy')
                          : ''}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </p>
>>>>>>>                     {work.location && (
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="space-y-4">
          <h3 className="text-md font-medium">Added Experience</h3>
          {workExperiences.map((work) => (
            <Card key={work.id} className="bg-muted/40">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{work.role_title}</h4>
                    <p className="text-sm text-muted-foreground">{work.company_name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {typeof work.start_date === 'string' 
                        ? work.start_date 
                        : format(work.start_date, 'MMM yyyy')} - {work.is_current 
                        ? 'Present' 
                        : (work.end_date ? (typeof work.end_date === 'string' 
                          ? work.end_date 
                          : format(work.end_date, 'MMM yyyy')) : '')}
                    </p>
                    {work.location && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <p className="text-xs text-muted-foreground">{work.location}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
<<<<<<< HEAD
                    <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      variant='ghost'
                      size='icon'
                      onClick={() => handleEdit(work)}
                      aria-label='Edit experience'                    >
                      <Edit className='h-4 w-4' />
                    </Button>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Button
<<<<<<< HEAD
                      variant='ghost'
                      size='icon'
                      onClick={() => handleDelete(work.id!)}
                      aria-label='Delete experience'                    >
                      <Trash2 className='h-4 w-4' />
>>>>>>>                     </Button>
                  </div>
                </div>
                {work.description && (
                  <p className='text-sm mt-3 line-clamp-2'>
                    {work.description}
                  </p>
>>>>>>>                 )}
              </CardContent>
            </Card>
ursor/fix-website-loading-errors-and-merge-6662
                      onClick={() => handleEdit(work)}
                      aria-label='Edit experience'                    >
                      <Edit className='h-4 w-4' />
                    </Button>
                    <Button
<<<<<<< HEAD

=======
                      variant='ghost'
                      size='icon'
                      onClick={() => handleDelete(work.id!)}
                      aria-label='Delete experience'                    >
                      <Trash2 className='h-4 w-4' />
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(work)}
                      aria-label="Edit experience"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(work.id!)}
                      aria-label="Delete experience"
                    >
                      <Trash2 className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    </Button>
                  </div>
                </div>
                {work.description && (
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                )}
              </CardContent>;
            </Card>;
>>>>>>>           ))}
        </div>;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <p className='text-sm mt-3 line-clamp-2'>
                    {work.description}
                  </p>
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    <FormLabel>Company Name</FormLabel>
=======
                name='company_name'
                render={({ field }: { field: any }) => (                  <FormItem>
>>>>>>>                     <FormLabel>Company Name</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                name='company_name'
                render={({ field }: { field: any }) => (                  <FormItem>
                name="company_name"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <FormControl>
                      <Input placeholder="Google, Microsoft, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    <FormLabel>Job Title</FormLabel>
=======
              />
ursor/fix-website-loading-errors-and-merge-6662
              />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>>               <FormField
                control={form && form.control}
                name='role_title'
                render={({ field }: { field: any }) => (                  <FormItem>
>>>>>>>                     <FormLabel>Job Title</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              />
              <FormField
                control={form.control}
                name='role_title'
                render={({ field }: { field: any }) => (                  <FormItem>
              />;
              <FormField;
                control={form.control}
                name="role_title"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <FormControl>
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                )}
              />
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='start_date'

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="start_date"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD

                      <Input 
=======
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='start_date'
>>>>>>>                 render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      <Input type='date' {...field} value={field.value |''} />                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='is_current'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                      <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>

                render={({ field }: { field: any }) => (;
                  <FormItem>;
                    <FormLabel>Start Date</FormLabel>;
                    <FormControl>;
                      <Input type='date' {...field} value={field && field.value || ''} />                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                      <Input type='date' {...field} value={field.value || ''} />                    </FormControl>
                    <FormMessage />
                  </FormItem>

>>>>>>>                       <Input 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        type="date" 
                        {...field} 
                        value={field.value || ''}
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
<<<<<<< HEAD

                )}
=======
>>>>>>>                 )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              />



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      <Input type='date' {...field} value={field.value || ''} />                    </FormControl>
                    <FormMessage />
                  </FormItem>
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''}
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                )}
              />

              <div className="space-y-4">
                <FormField
<<<<<<< HEAD

                  control={form.control}
<<<<<<< HEAD

=======
                  name='is_current'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                      <FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  control={form.control}
                  name='is_current'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                      <FormControl>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  name="is_current"
                  render={({ field }: { field: any }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                      <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                        <Checkbox
=======
>>>>>>>                         <Checkbox
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        <Checkbox
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
<<<<<<< HEAD
<<<<<<< HEAD

                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                />
                {!form.watch('is_current') && (
                  <FormField
<<<<<<< HEAD
                    control={form && form.control}
                    name='end_date'
>>>>>>>                     render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                            value={field.value |''}                          />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                    control={form.control}
                    name='end_date'
                />;
                {!form.watch('is_current') && (;
                  <FormField;
                    control={form.control}
                    name="end_date"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            type='date'
                            {...field}
                            value={field.value |''}                          />
                            value={field.value || ''}                          />
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          <Input 
                            type="date" 
                            {...field} 
                            value={field.value || ''} 
                          />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                        </FormControl>
=======
>>>>>>>                         </FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
<<<<<<< HEAD

              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
=======
              </div>
            </div>
            <FormField
              control={form.control}
              name='location'
>>>>>>>               render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='San Francisco, CA (Remote)'                      {...field}
                    />
>>>>>>>                   </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className='flex justify-between'>
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={field.value |''}
                      enhancementType='work-description'
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Describe your responsibilities and accomplishments...'
                      className='min-h-[100px]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className='flex justify-between pt-2'>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                            value={field && field.value || ''}                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        </FormControl>
                        <FormMessage />
                      </FormItem>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    )}
                  />
                )}
<<<<<<< HEAD
<<<<<<< HEAD


              </div>;
            </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </div>
            </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <FormField
              control={form.control}
              name='location'
<<<<<<< HEAD
<<<<<<< HEAD
              render={({ field }: { field: any }) => (;
                <FormItem>;
                  <FormLabel>Location (Optional)</FormLabel>;
                  <FormControl>;
                    <Input
                  </FormItem>)}
              />;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
              <FormField;
                control={form.control}
                name='start_date';
                render={({ field }: { field: any }) => (
                  <FormItem>;
                    <FormLabel > Start Date</FormLabel>;
                    <FormControl>;
                      <Input type='date' {...field} value={field.value || ''} />                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <div className='space - y-4'>;
                <FormField;
                  control={form.control}
                  name='is_current';
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex - row items - start space - x-3 space - y-0 py - 2'>                      <FormControl>;
                        <Checkbox;
                          checked = {field.value, }
                          onCheckedChange = {field.on_change, }
                        />;
                      </FormControl>;
                      <div className='space - y-1 leading - none'>;
                        <FormLabel > I currently work here</FormLabel>;
                      </div>;
                    </FormItem>)}
                />;
                {!form.watch ('is_current') && (
                  <FormField;
                    control={form.control}
                    name='end_date';
                    render={({ field }: { field: any }) => (
                      <FormItem>;
                        <FormLabel > End Date</FormLabel>;
                        <FormControl>;
                          <Input;
                            type='date';
                            {...field}
                            value={field.value || ''}                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>)}
                  />)}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </div>;
            </div>;
            <FormField;
              control={form.control}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            />;


            <FormField
              control={form && form.control}
              name='description'
              render={({ field }: { field: any }) => (;
                <FormItem>;
                  <FormLabel className='flex justify-between'>;
                    <span>Job Description</span>;
                    <AIEnhancementButton

                      currentContent={field && field.value || ''}

=======
              name="location"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='San Francisco, CA (Remote)'                      {...field}
                    />
                    <Input placeholder="San Francisco, CA (Remote)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className='flex justify-between'>
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={field.value |''}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      enhancementType='work-description'
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Describe your responsibilities and accomplishments...'
                      className='min-h-[100px]'
<<<<<<< HEAD
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name='description';
              render={({ field }: { field: any }) => (
                <FormItem>;
                  <FormLabel className='flex justify - between'>;
                    <span > Job Description</span>;
                    <AIEnhancementButton;
                      current_content={field.value || ''}
                      enhancement_type='work - description';
                      context={`Role: ${form.get_values ('role_title')} at ${form.get_values ('company_name')}`}
                      on_enhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder='Describe your responsibilities and accomplishments...';
                      className='min - h-[100px]';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              name="location"

>>>>>>>               render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>

                    <Input placeholder="San Francisco, CA (Remote)" {...field} />

>>>>>>>                   </FormControl>
                  <FormMessage />
                </FormItem>
              )}


>>>>>>>             />;
            <FormField;
              control={form.control}
              name="description"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="flex justify-between">
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={field.value || ''}
                      enhancementType="work-description"
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your responsibilities and accomplishments..."
                      className="min-h-[100px]"
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

                </FormItem>;
              )}
<<<<<<< HEAD

            />
=======
>>>>>>>             />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className='flex justify-between pt-2'>
            />;
            <FormField;
              control={form.control}
              name="description"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="flex justify-between">
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={field.value || ''}
                      enhancementType="work-description"
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your responsibilities and accomplishments..."
                      className="min-h-[100px]"
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              <Button
=======
>>>>>>>               <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
                    setEditingId(null)
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                    setEditingId(null)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    form.reset({
                      company_name: ''
                      role_title: ''
                      start_date: format(new Date(), 'yyyy-MM-dd')
                      is_current: false
                      description: ''
                      location: ''
                    })

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     form.reset({
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              <Button
                type='button'
                variant='outline'
                onClick={() => {
                  if (editingId) {


                    setEditingId(null),
                    setEditingId(null),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    form.reset({
>>>>>>>                       company_name: '',
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    setEditingId(null),
                    setEditingId(null),
                    form.reset({
                      company_name: '',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                      location: ''})
                      location: '',
                    })
>>>>>>>                   } else {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  } else {
>>>>>>>                     onBack()
            />;

            {error && (;
              <Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>;
            )}

            <div className='flex justify-between pt-2'>;
              <Button
                type='button'
                variant='outline'
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
                    form && form.reset({;
                      company_name: '',;
                      role_title: '',;
                      start_date: format(new Date(), 'yyyy-MM-dd'),;
                      is_current: false,;
                      description: '',;
                      location: '',;
                    });
                  } else {;
                    onBack();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      location: ''})
                      location: '',
                    })
                      location: ''})
                  } else {
                    onBack()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
<<<<<<< HEAD

              </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
              </Button>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   {editingId ? 'Update' : 'Add'} Experience
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {editingId ? 'Update' : 'Add'} Experience
>>>>>>>                 </Button>
                {!editingId && workExperiences.length > 0 && (
                  <Button type="button" onClick={onComplete}>
                    Next
                  </Button>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}> {'
  editingId ? 'Cancel': 'Back'
}</Button> Next </Button>)
}</div> </div> </form> </Form> </div> </div>)
}'"  )
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
