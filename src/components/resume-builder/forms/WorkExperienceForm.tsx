<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { Textarea  } from '@/components/ui/textarea';
import { Input  } from '@/components/ui/input';
import { Checkbox  } from '@/components/ui/checkbox';
=======
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import { format } from 'date-fns';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { WorkExperience  } from '@/types/resume';
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
=======
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,;
  FormMessage;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  resumeId: string
  workExperiences: WorkExperience[]
  onComplete: () => void
  onBack: () => void
=======
  resumeId: string;
  workExperiences: WorkExperience[];
  onComplete: () => void;
  onBack: () => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
      setError(err.message |'An error occurred')
    }
<<<<<<< HEAD
  }
=======
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const handleEdit = (work: WorkExperience) => {
=======
      setError(err.message || 'An error occurred');
    };
  };
  const handleEdit = (work: WorkExperience) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setEditingId(work.id!);    form.reset({
      ...work
  const handleEdit = (work: WorkExperience) => {
    setEditingId(work.id!)
    form.reset({
<<<<<<< HEAD
      start_date: formatDateValue(work.start_date)
=======
      ...work,
      start_date: formatDateValue(work.start_date),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      end_date:
        work.end_date && !work.is_current
          ? formatDateValue(work.end_date)
          : undefined
    })
  }
  const handleDelete = async (id: string,) => {
    if (confirm('Are you sure you want to delete this work experience?')) {
      await deleteWorkExperience(id)
    }
  }
  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  }
=======
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
  },

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">
          Add your work history to showcase your professional experience.
        </p>
      </div>
      {workExperiences.length > 0 && (
<<<<<<< HEAD
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </p>
                    {work.location && (
                      <p className="text-xs text-muted-foreground">{work.location}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
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
=======
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(work)}
                      aria-label="Edit experience"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(work.id!)}
                      aria-label="Delete experience"
                    >
                      <Trash2 className="h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </Button>
                  </div>
                </div>
                {work.description && (
<<<<<<< HEAD
                  <p className='text-sm mt-3 line-clamp-2'>
                    {work.description}
                  </p>
=======
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
<<<<<<< HEAD
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>
=======

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='company_name'
                render={({ field }: { field: any }) => (                  <FormItem>
=======
                name="company_name"
                render={({ field }: { field: any }) => (
                  <FormItem>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Google, Microsoft, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
<<<<<<< HEAD
              />
              <FormField
                control={form.control}
                name='role_title'
                render={({ field }: { field: any }) => (                  <FormItem>
=======
              />;
              <FormField;
                control={form.control}
                name="role_title"
                render={({ field }: { field: any }) => (
                  <FormItem>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='start_date'
=======

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="start_date"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
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
                      <Input type='date' {...field} value={field.value || ''} />                    </FormControl>
                    <FormMessage />
                  </FormItem>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''}
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                )}
              />

              <div className="space-y-4">
                <FormField
                  control={form.control}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  name='is_current'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                      <FormControl>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  name="is_current"
                  render={({ field }: { field: any }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                      <FormControl>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                />
                {!form.watch('is_current') && (
                  <FormField
                    control={form.control}
                    name='end_date'
=======
                />;
                {!form.watch('is_current') && (;
                  <FormField;
                    control={form.control}
                    name="end_date"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input
                            type='date'
                            {...field}
<<<<<<< HEAD
                            value={field.value |''}                          />
=======
                            value={field.value || ''}                          />
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                          <Input 
                            type="date" 
                            {...field} 
                            value={field.value || ''} 
                          />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
<<<<<<< HEAD
              </div>
            </div>
            <FormField
              control={form.control}
              name='location'
=======
              </div>;
            </div>;
            <FormField;
              control={form.control}
              name="location"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
<<<<<<< HEAD
                    <Input
                      placeholder='San Francisco, CA (Remote)'                      {...field}
                    />
=======
                    <Input placeholder="San Francisco, CA (Remote)" {...field} />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            />

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {
<<<<<<< HEAD
                    setEditingId(null)
<<<<<<< HEAD
                    form.reset({
                      company_name: ''
                      role_title: ''
                      start_date: format(new Date(), 'yyyy-MM-dd')
                      is_current: false
                      description: ''
                      location: ''
                    })

=======
                    setEditingId(null),
=======
=======
                    setEditingId(null),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    form.reset({
                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
<<<<<<< HEAD
                      location: ''})
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
                      location: '',
                    })
=======
                      location: ''})
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  } else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>
<<<<<<< HEAD
              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
=======

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {editingId ? 'Update' : 'Add'} Experience
                </Button>
                {!editingId && workExperiences.length > 0 && (
                  <Button type="button" onClick={onComplete}>
                    Next
                  </Button>
                )}
<<<<<<< HEAD
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
<<<<<<< HEAD
  )
}> {'
  editingId ? 'Cancel': 'Back'
}</Button> Next </Button>)
}</div> </div> </form> </Form> </div> </div>)
}'"  )
}
<<<<<<< HEAD
=======
  );

}> {';
  editingId ? 'Cancel': 'Back' ;
}</Button> Next </Button>) ;
}</div> </div> </form> </Form> </div> </div>) ;
}'"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
