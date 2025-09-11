<<<<<<< HEAD
<<<<<<< HEAD

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
      }
      if (editingId) {
        success = await updateWorkExperience(editingId, experienceData)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
      // Check condition
if ( {) {
  $2
}
        success = await updateWorkExperience (editing_id, experience_data);
      } else {
        success = await addWorkExperience(resumeId, experienceData)
      }
<<<<<<< HEAD
<<<<<<< HEAD
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
      setError(err.message |'An error occurred')
    }
  }
  const handleEdit = (work: WorkExperience) => {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setError(err.message || 'An error occurred');
    };
  };
  const handleEdit = (work: WorkExperience) => {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      // Check condition
if ( {) {
  $2
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
  const handle_edit = (work: WorkExperience) =>: any {
    setEditingId (work.id!);    form.reset ({
      ...work,
  const handle_edit = (work: WorkExperience) =>: any {
    setEditingId (work.id!);
    form.reset ({
      start_date: formatDateValue (work.start_date),
      end_date:;
        work.end_date && !work.is_current;
          ? formatDateValue (work.end_date);
          : undefined,
    });
  }
  const handle_delete = async (id: string, ) => {
    if () {) {
  $2
}
      await deleteWorkExperience (id);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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
<<<<<<< HEAD
=======
import {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

  },
=======
  const handleEnhanceDescription = (enhancedContent: string) => {;
    form && form.setValue('description', enhancedContent);
  };
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space-y-6'>;
      <div>;
        <h2 className='text-xl font-semibold mb-2'>Work Experience</h2>;
        <p className='text-muted-foreground'>;
          Add your work history to showcase your professional experience.;
        </p>;
      </div>;

      {workExperiences && workExperiences.length > 0 && (;
        <div className='space-y-4'>;
          <h3 className='text-md font-medium'>Added Experience</h3>;
          {workExperiences && workExperiences.map(work => (;
            <Card key={work && work.id} className='bg-muted/40'>;
              <CardContent className='pt-6'>;
                <div className='flex justify-between'>                  <div>;
                    <h4 className='font-medium'>{work && work.role_title}</h4>;
                    <p className='text-sm text-muted-foreground'>;
                      {work && work.company_name}
                    </p>;
                    <p className='text-xs text-muted-foreground mt-1'>;
                      {typeof work && work.start_date === 'string';
                        ? work && work.start_date;
                        : format(work && work.start_date, 'MMM yyyy')}{' '}
<<<<<<< HEAD
<<<<<<< HEAD
                      -{' '}
                      {work && work.is_current;
                        ? 'Present';
                        : work && work.end_date;
                          ? typeof work && work.end_date === 'string';
                            ? work && work.end_date;
                            : format(work && work.end_date, 'MMM yyyy');
                          : ''}
                    </p>;
                    {work && work.location && (;
                      <p className='text-xs text-muted-foreground'>;
                        {work && work.location}
                      </p>;
                    )}
                  </div>;
                  <div className='flex gap-2'>;
                    <Button
                      variant='ghost'
                      size='icon'

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">
          Add your work history to showcase your professional experience.
        </p>
      </div>
      {workExperiences.length > 0 && (
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      -{' '}
                      {work.is_current
                        ? 'Present'
                        : work.end_date
                          ? typeof work.end_date === 'string'
                            ? work.end_date
                            : format(work.end_date, 'MMM yyyy')
                          : ''}
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>
                    {work.location && (
                      <p className="text-xs text-muted-foreground">{work.location}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
                      variant='ghost'
                      size='icon'
                      onClick={() => handleEdit(work)}
                      aria-label='Edit experience'                    >
                      <Edit className='h-4 w-4' />
                    </Button>
                    <Button
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
=======
                    <Button

                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(work)}
                      aria-label='Edit experience'                    >;
                      <Edit className='h-4 w-4' />;
                    </Button>;
                    <Button

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(work.id!)}
                      aria-label="Delete experience"
                    >
                      <Trash2 className="h-4 w-4" />
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Button>
                  </div>
                </div>
                {work.description && (
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>

                )}
              </CardContent>;
            </Card>;
<<<<<<< HEAD
        </div>;
                  <p className='text-sm mt-3 line-clamp-2'>
                    {work.description}
                  </p>
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
=======
          ))}
        </div>;
      )}



      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>
        <Form {...form}>

      <div className='bg-muted/40 p-6 rounded-lg'>;
        <h3 className='text-md font-medium mb-4'>;
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>;

        <Form {...form}>;
          <form
            onSubmit={form && form.handleSubmit(handleAddOrUpdate)}
            className='space-y-4'>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
              <FormField
<<<<<<< HEAD
                control={form.control}
                name='company_name'
                render={({ field }: { field: any }) => (                  <FormItem>
                name='company_name'
                render={({ field }: { field: any }) => (                  <FormItem>
=======

    <div className='space - y-6'>;
      <div>;
        <h2 className='text - xl font - semibold mb - 2'>Work Experience</h2>;
        <p className='text - muted - foreground'>;
          Add your work history to showcase your professional experience.;
        </p>;
      </div>;
      {work_experiences.length > 0 && (
        <div className='space - y-4'>;
          <h3 className='text - md font - medium'>Added Experience</h3>;
          {work_experiences.map (work => (
            <Card key={work.id} className='bg - muted / 40'>;
              <CardContent className='pt - 6'>;
                <div className='flex justify - between'>                  <div>;
                    <h4 className='font - medium'>{work.role_title}</h4>;
                    <p className='text - sm text - muted - foreground'>;
                      {work.company_name}
                    </p>;
                    <p className='text - xs text - muted - foreground mt - 1'>;
                      {typeof work.start_date === 'string';
                        ? work.start_date;
                        : format (work.start_date, 'MMM yyyy')}{' '}
                      -{' '}
                      {work.is_current;
                        ? 'Present';
                        : work.end_date;
                          ? typeof work.end_date === 'string';
                            ? work.end_date;
                            : format (work.end_date, 'MMM yyyy');
                          : ''}
                    </p>;
                    {work.location && (
                      <p className='text - xs text - muted - foreground'>;
                        {work.location}
                      </p>)}
                  </div>;
                  <div className='flex gap - 2'>;
                    <Button;
                      variant='ghost';
                      size='icon';
                      on_click={() => handle_edit (work)}
                      aria - label='Edit experience'                    >;
                      <Edit className='h - 4 w - 4' />;
                    </Button>;
                    <Button;
                      variant='ghost';
                      size='icon';
                      on_click={() => handle_delete (work.id!)}
                      aria - label='Delete experience'                    >;
                      <Trash2 className='h - 4 w - 4' />;
                    </Button>;
                  </div>;
                </div>;
                {work.description && (
                  <p className='text - sm mt - 3 line - clamp - 2'>;
                    {work.description}
                  </p>)}
              </CardContent>;
            </Card>))}
        </div>)}
      <div className='bg - muted / 40 p - 6 rounded - lg'>;
        <h3 className='text - md font - medium mb - 4'>;
          {editing_id ? 'Update Experience' : 'Add Experience'}
        </h3>;
        <Form {...form}>;
          <form;
            on_submit={form.handle_submit (handleAddOrUpdate)}
            className='space - y-4';
          >;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
              <FormField;
                control={form.control}
                name='company_name';
                render={({ field }: { field: any }) => (                  <FormItem>;
                    <FormLabel > Company Name</FormLabel>;

                    <FormControl>;
                      <Input placeholder='Google, Microsoft, etc.' {...field} />;
                    </FormControl>;
                    <FormMessage />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                control={form.control}

                name="company_name"
                render={({ field }: { field: any }) => (
                  <FormItem>
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Google, Microsoft, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
<<<<<<< HEAD
              />
ursor/fix-website-loading-errors-and-merge-6662
              />;

                control={form && form.control}
                name='role_title'
                render={({ field }: { field: any }) => (                  <FormItem>
              />
              <FormField
                control={form.control}
                name='role_title'
                render={({ field }: { field: any }) => (                  <FormItem>
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />;

              <FormField
                control={form && form.control}
                name='role_title'
                render={({ field }: { field: any }) => (                  <FormItem>;
                    <FormLabel>Job Title</FormLabel>;
                    <FormControl>;
                      <Input
                        placeholder='Software Engineer, Product Manager, etc.'
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
<<<<<<< HEAD
                name="role_title"
                render={({ field }: { field: any }) => (
                  <FormItem>
=======

                name="role_title"
                render={({ field }: { field: any }) => (
                  <FormItem>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
<<<<<<< HEAD
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              />;
            </div>;



            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
              <FormField
<<<<<<< HEAD
                control={form.control}
                name='start_date'

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='start_date'
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
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
=======

                control={form.control}
                name="start_date"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
              />



                      <Input type='date' {...field} value={field.value || ''} />                    </FormControl>
                    <FormMessage />
                  </FormItem>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''}
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;



                )}
<<<<<<< HEAD
              />

              <div className='space-y-4'>;
                <FormField
                  name='is_current'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                      <FormControl>
                  control={form.control}
                  name='is_current'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                      <FormControl>
                  name="is_current"
                  render={({ field }: { field: any }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                {!form.watch('is_current') && (
                  <FormField
                    control={form.control}
                    name='end_date'
=======
              />;

              <div className='space-y-4'>;
                <FormField

                  control={form.control}



                        <Checkbox
                          checked = {field && field.value,}
                          onCheckedChange = {field && field.onChange,}
                        />;
                      </FormControl>;
                      <div className='space-y-1 leading-none'>;
                        <FormLabel>I currently work here</FormLabel>;
                      </div>;
                    </FormItem>;
                  )}

                />;

                {!form && form.watch('is_current') && (;

                  <FormField
                    control={form && form.control}
                    name='end_date'
                    render={({ field }: { field: any }) => (;
                      <FormItem>;
                        <FormLabel>End Date</FormLabel>;
                        <FormControl>;
                          <Input
                            type='date'
                            {...field}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                />;
                {!form.watch('is_current') && (;
                  <FormField;
                    control={form.control}
                    name="end_date"
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input
                            type='date'
                            {...field}
                            value={field.value |''}                          />
                            value={field.value || ''}                          />
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            value={field.value || ''}                          />

                          <Input 
                            type="date" 
                            {...field} 
                            value={field.value || ''} 
                          />
<<<<<<< HEAD
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>
            <FormField
              control={form.control}
              name='location'
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='San Francisco, CA (Remote)'                      {...field}
                    />
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                            value={field && field.value || ''}                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>;
<<<<<<< HEAD
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )}
                  />;
                )}



              </div>;
            </div>;

<<<<<<< HEAD
              </div>
            </div>
            <FormField
              control={form.control}
              name='location'
=======
            <FormField
              control={form && form.control}
              name='location'
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
            <FormField;
              control={form.control}
<<<<<<< HEAD
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
                      enhancementType='work-description'
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
=======

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

                      enhancementType='work-description'
                      context={`Role: ${form && form.getValues('role_title')} at ${form && form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Textarea
                      placeholder='Describe your responsibilities and accomplishments...'
                      className='min-h-[100px]'
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
              name="location"

              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>

                    <Input placeholder="San Francisco, CA (Remote)" {...field} />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}


<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                </FormItem>;
              )}
=======

                </FormItem>;
              )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
              <Button
<<<<<<< HEAD
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {
                    setEditingId(null)
                    setEditingId(null)
                    form.reset({
                      company_name: ''
                      role_title: ''
                      start_date: format(new Date(), 'yyyy-MM-dd')
                      is_current: false
                      description: ''
                      location: ''
                    })

              <Button
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                type='button'
                variant='outline'
                onClick={() => {
                  if (editingId) {


                    setEditingId(null),
                    setEditingId(null),


                    form.reset({
<<<<<<< HEAD
                    setEditingId(null),
                    setEditingId(null),
=======
                    <Button
                    setEditingId(null),
                    setEditingId(null),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    form.reset({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
<<<<<<< HEAD
                      location: ''})
<<<<<<< HEAD
                      location: '',
                    })
ursor/fix-website-loading-errors-and-merge-6662
                  } else {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  } else {
                    onBack()
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
<<<<<<< HEAD
<<<<<<< HEAD
                      location: ''})
                      location: '',
                    })
                      location: ''})
                  } else {
                    onBack()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>
              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
<<<<<<< HEAD
=======

              </Button>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}


                  {editingId ? 'Update' : 'Add'} Experience
<<<<<<< HEAD
=======
                </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {!editingId && workExperiences.length > 0 && (
                  <Button type="button" onClick={onComplete}>
                    Next
                  </Button>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </Button>;

              <div className='flex gap-2'>;
                <Button type='submit' disabled={isLoading}>;
                  {isLoading && (;
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                  )}
                  {editingId ? 'Update' : 'Add'} Experience;
                </Button>;

                {!editingId && workExperiences && workExperiences.length > 0 && (;
                  <Button type='button' onClick={onComplete}>;
                    Next;
                  </Button>;
                )}

;


                </FormItem>)}
            />;
            {error && (
              <Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>)}
            <div className='flex justify - between pt - 2'>;
              <Button;
                type='button';
                variant='outline';
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
                    setEditingId (null);
                    form.reset ({
                      company_name: '',
                      role_title: '',
                      start_date: format (new Date (), 'yyyy - MM - dd'),
                      is_current: false,
                      description: '',
                      location: '',
                    });
                  } else {
                    on_back ();
                  }
                }}
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className='flex gap - 2'>;
                <Button type='submit' disabled={is_loading}>;
                  {is_loading && (
                    <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                  {editing_id ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (
                  <Button type='button' on_click={on_complete}>;
                    Next;
                  </Button>)}
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
<<<<<<< HEAD
;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      ...work;
      start_date: formatDateValue(work.start_date),
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined})
  };



    </div>);
}> {';
  editing_id ? 'Cancel': 'Back';
}</Button> Next </Button>);
}</div> </div> </form> </Form> </div> </div>);
}'"  );
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
