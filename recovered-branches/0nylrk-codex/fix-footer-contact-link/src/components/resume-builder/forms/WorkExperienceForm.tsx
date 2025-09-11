
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
import { format } from 'date-fns';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { WorkExperience  } from '@/types/resume';
import { Loader2, Edit, Trash2  } from 'lucide-react';
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { Card, CardContent  } from '@/components/ui/card';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Input} from '@/components/ui/input';
import {Checkbox} from '@/components/ui/checkbox';
import {format} from 'date-fns';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {WorkExperience} from '@/types/resume';
import {Loader2, Edit, Trash2} from 'lucide-react';
import {useResume} from '@/hooks/useResume';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Card, CardContent} from '@/components/ui/card';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define schema for form validation

const workExperienceSchema = z.object({
  company_name: z.string().min(1, 'Company name is required');
  role_title: z.string().min(1, 'Job title is required');
  start_date: z.string().min(1, 'Start date is required');
  end_date: z.string().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()})
type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;
interface WorkExperienceFormProps {
  resumeId: string
  workExperiences: WorkExperience[]
  onComplete: () => void
  onBack: () => void
}



export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;


<<<<<<< HEAD
<<<<<<< HEAD
export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {

export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Helper function to format dates to string
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue
    return format(dateValue, 'yyyy-MM-dd')
  }
  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceSchema)
    defaultValues: {
      company_name: ''
      role_title: ''
      start_date: format(new Date(), 'yyyy-MM-dd');
      is_current: false
      description: ''
      location: ''}})
  const handleAddOrUpdate = async (data: WorkExperienceFormValues) => {
    try {
      setError(null);
      let success
      const experienceData: WorkExperience = {
        company_name: data.company_name, // Required field
        role_title: data.role_title, // Required field
        start_date: data.start_date, // Required field
        end_date: data.is_current ? undefined : (data.end_date |undefined)
        is_current: data.is_current
        description: data.description
        location: data.location}
      if (editingId) {
        success = await updateWorkExperience(editingId, experienceData)
      } else {
        success = await addWorkExperience(resumeId, experienceData)
      }
      if (success) {
        form.reset({
          company_name: ''
          role_title: ''
          start_date: format(new Date(), 'yyyy-MM-dd');
          is_current: false
          description: ''
          location: ''})
        setEditingId(null)
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import { Loader2, Edit, Trash2 } from 'lucide-react',;
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (err: any) {
      setError(err.message |'An error occurred')
    }


  };



<<<<<<< HEAD
<<<<<<< HEAD
  }
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleEdit = (work: WorkExperience) => {
    setEditingId(work.id!);
    form.reset({
      ...work
      start_date: formatDateValue(work.start_date)
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined})
  }
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this work experience?')) {
      await deleteWorkExperience(id)
    }

<<<<<<< HEAD
<<<<<<< HEAD
  };

  }
  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  }
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  };

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">
          Add your work history to showcase your professional experience.
        </p>
      </div>
      {workExperiences.length > 0 && (
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
                      <p className="text-xs text-muted-foreground">{work.location}</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(work)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(work.id!)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {work.description && (
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {use_form} from 'react - hook - form';
import {zod_resolver} from '@hookform / resolvers / zod';
import {z} from 'zod';
import {Button} from '@/components / ui / button';
import {Textarea} from '@/components / ui / textarea';
import {Input} from '@/components / ui / input';
import {Checkbox} from '@/components / ui / checkbox';
import {format} from 'date - fns';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {WorkExperience} from '@/types / resume';
import {Loader2, Edit, Trash2} from 'lucide-react';


<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Google, Microsoft, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role_title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>;

        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <FormField
                control={form && form.control}
                name="company_name"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Company Name</FormLabel>;
import {use_resume} from '@/hooks / use_resume';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {Card, CardContent} from '@/components / ui / card';
import {AIEnhancementButton} from '@/components / resume - builder / forms / AIEnhancementButton';
// Define schema for form validation;
const workExperienceSchema = z.object ({
  company_name: z.string ().min (1, 'Company name is required');
  role_title: z.string ().min (1, 'Job title is required');
  start_date: z.string ().min (1, 'Start date is required');
  end_date: z.string ().optional (),
  is_current: z.boolean ().default (false),
  description: z.string ().optional (),
  location: z.string ().optional ()}),
type WorkExperienceFormValues = z.infer < typeof workExperienceSchema>;
;
interface WorkExperienceFormProps {
  resume_id: string,
  work_experiences: WorkExperience[],
  on_complete: () => void,
  on_back: () => void;
}
export /**
 * WorkExperienceForm - Function description
 */
function WorkExperienceForm() {
  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, is_loading } = use_resume ();
  const [editing_id, setEditingId] = useState < string | null>(null);
  const [error, set_error] = useState < string | null>(null);
;
  // Helper function to format dates to string;
  const formatDateValue = (date_value: string | Date | undefined): string => {
    // Check condition
if (return '') {
  $2
}
    // Check condition
if (return date_value, ) {
  $2
}
    return format (date_value, 'yyyy - MM - dd');
  }
;
  const form = use_form < WorkExperienceFormValues>({
    resolver: zod_resolver (workExperienceSchema),
    default_values: {
      company_name: '',
      role_title: '',
      start_date: format (new Date (), 'yyyy - MM - dd');
      is_current: false,
      description: '',
      location: ''}}),
  const handleAddOrUpdate = async (data: WorkExperienceFormValues) => {
    try {
      set_error (null);
      let success,
      const experience_data: WorkExperience = {
        company_name: data.company_name, // Required field;
        role_title: data.role_title, // Required field;
        start_date: data.start_date, // Required field;
        end_date: data.is_current ? undefined : (data.end_date || undefined),
        is_current: data.is_current,
        description: data.description,
        location: data.location},
      // Check condition
if ( {) {
  $2
}
        success = await updateWorkExperience (editing_id, experience_data);
      } else {
        success = await addWorkExperience (resume_id, experience_data);
      }
      // Check condition
if ( {) {
  $2
}
        form.reset ({
          company_name: '',
          role_title: '',
          start_date: format (new Date (), 'yyyy - MM - dd');
          is_current: false,
          description: '',
          location: ''}),
        setEditingId (null);
      }
    } catch (err: any) {
      set_error (err.message || 'An error occurred');
    }
  }
;
  const handle_edit = (work: WorkExperience) =>: any {
    setEditingId (work.id!);
    form.reset ({
      ...work,
      start_date: formatDateValue (work.start_date),
      end_date: work.end_date && !work.is_current ? formatDateValue (work.end_date) : undefined});
  }
;
  const handle_delete = async (id: string) => {
    if () {) {
  $2
}
      await deleteWorkExperience (id);
    }
  }
;
  const handleEnhanceDescription = (enhanced_content: string) =>: any {
    form.set_value ('description', enhanced_content);
  }
;
  return (
    <div className="space - y-6">;
      <div>;
        <h2 className="text - xl font - semibold mb - 2">Work Experience</h2>;
        <p className="text - muted - foreground">;
          Add your work history to showcase your professional experience.;
        </p>;
      </div>;
      {work_experiences.length > 0 && (
        <div className="space - y-4">;
          <h3 className="text - md font - medium">Added Experience</h3>;
          {work_experiences.map ((work) => (
            <Card key={work.id} className="bg - muted / 40">;
              <CardContent className="pt - 6">;
                <div className="flex justify - between">;
                  <div>;
                    <h4 className="font - medium">{work.role_title}</h4>;
                    <p className="text - sm text - muted - foreground">{work.company_name}</p>;
                    <p className="text - xs text - muted - foreground mt - 1">;
                      {typeof work.start_date === 'string';
                        ? work.start_date;
                        : format (work.start_date, 'MMM yyyy')} - {work.is_current;
                        ? 'Present';
                        : (work.end_date ? (typeof work.end_date === 'string';
                          ? work.end_date;
                          : format (work.end_date, 'MMM yyyy')) : '')}
                    </p>;
                    {work.location && (
                      <p className="text - xs text - muted - foreground">{work.location}</p>)}
                  </div>;
                  <div className="flex gap - 2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      on_click={() => handle_edit (work)}
                    >;
                      <Edit className="h - 4 w - 4" />;
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
import { Loader2, Edit, Trash2 } from 'lucide-react',;
import { useResume } from '@/hooks/useResume',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Card, CardContent } from '@/components/ui/card',;
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',;
;
// Define schema for form validation;
const workExperienceSchema = z.object({;
  company_name:z.string().min(1, 'Company name is required'),;
  role_title:z.string().min(1, 'Job title is required'),;
  start_date:z.string().min(1, 'Start date is required'),;
  end_date:z.string().optional(),;
  is_current:z.boolean().default(false),;
  description:z.string().optional(),;
  location:z.string().optional()}),;
;
type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>,;
;
interface WorkExperienceFormProps {;
  resumeId:string,;
  workExperiences:WorkExperience[],;
  onComplete:() => void,;
  onBack:() => void;
}
;
export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack } WorkExperienceFormProps) {;
  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
;
  // Helper function to format dates to string;
  const formatDateValue = (dateValue:string | Date | undefined):string => {;
    if (!dateValue) return '',;
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd'),;
  },;
;
  const form = useForm<WorkExperienceFormValues>({;
    resolver:zodResolver(workExperienceSchema),;
    defaultValues:{;
      company_name:'',;
      role_title:'',;
      start_date:format(new Date(), 'yyyy-MM-dd'),;
      is_current:false,;
      description:'',;
      location:''}}),;
;
  const handleAddOrUpdate = async (data:WorkExperienceFormValues) => {;
    try {;
      setError(null),;
      let success,;
;
      const experienceData:WorkExperience = {;
        company_name:data.company_name, // Required field;
        role_title:data.role_title, // Required field;
        start_date:data.start_date, // Required field;
        end_date:data.is_current ? undefined :(data.end_date || undefined),;
        is_current:data.is_current,;
        description:data.description,;
        location:data.location},;
;
      if (editingId) {;
        success = await updateWorkExperience(editingId, experienceData),;
      } else {;
        success = await addWorkExperience(resumeId, experienceData),;
      }
;
      if (success) {;
        form.reset({;
          company_name:'',;
          role_title:'',;
          start_date:format(new Date(), 'yyyy-MM-dd'),;
          is_current:false,;
          description:'',;
          location:''}),;
        setEditingId(null),;      }
    } catch (err:any) {;
      setError(err.message || 'An error occurred');
    }
  },;
;
  const handleEdit = (work:WorkExperience) => {;
    setEditingId(work.id!),;
    form.reset({;
      ...work,;
      start_date:formatDateValue(work.start_date),;
      end_date:work.end_date && !work.is_current ? formatDateValue(work.end_date) :undefined}),;
  },;
;
  const handleDelete = async (id:string) => {;
    if (confirm('Are you sure you want to delete this work experience?')) {;
      await deleteWorkExperience(id);
    }
  },;
;
  const handleEnhanceDescription = (enhancedContent:string) => {;
    form.setValue('description', enhancedContent),;
  },;
;
  return (;
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>;
        <p className="text-muted-foreground">;
          Add your work history to showcase your professional experience.;
        </p>;
      </div>;
;
      {workExperiences.length > 0 && (;
        <div className="space-y-4">;
          <h3 className="text-md font-medium">Added Experience</h3>;
          {workExperiences.map((work) => (;
            <Card key={work.id} className="bg-muted/40">;
              <CardContent className="pt-6">;
                <div className="flex justify-between">;
                  <div>;
                    <h4 className="font-medium">{work.role_title}</h4>;
                    <p className="text-sm text-muted-foreground">{work.company_name}</p>;
                    <p className="text-xs text-muted-foreground mt-1">;
                      {typeof work.start_date === 'string' ;
                        ? work.start_date ;
                        :format(work.start_date, 'MMM yyyy')} - {work.is_current ;
                        ? 'Present' ;
                        :(work.end_date ? (typeof work.end_date === 'string' ;
                          ? work.end_date ;
                          :format(work.end_date, 'MMM yyyy')) :'')}
                    </p>;
                    {work.location && (;
                      <p className="text-xs text-muted-foreground">{work.location}</p>;
                    )}
                  </div>;
                  <div className="flex gap-2">;
                    <Button;
                      variant="ghost";
                      size="icon";
                      onClick={() => handleEdit(work)}
                    >;
                      <Edit className="h-4 w-4" />;
                    </Button>;
                    <Button;
                      variant="ghost";
                      size="icon";
                      onClick={() => handleDelete(work.id!)}
                    >;
                      <Trash2 className="h-4 w-4" />;
                    </Button>;
                  </div>;
                </div>;
                {work.description && (;
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>;
                )}
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
;
      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Experience' :'Add Experience'}
        </h3>;
;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <FormField;
                control={form.control}
                name="company_name";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Company Name</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Google, Microsoft, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;
              />;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Input
                        type="date"
                        {...field}
                        value={field.value |''}
<<<<<<< HEAD
=======

              <FormField
                control={form && form.control}
                name="start_date"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
<<<<<<< HEAD
<<<<<<< HEAD
              <FormField
                control={form && form.control}
                name="start_date"
                  </FormItem>;                )}
              />;
;
              <FormField;
                control={form.control}
                name="role_title";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Job Title</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;
;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <FormField;
                control={form.control}
                name="start_date";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Start Date</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                      <Input ;
                        type="date" ;
                        {...field} ;
                        value={field.value || ''}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Input
                        type="date" 
                        {...field} 
                        value={field && field.value || ''}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
<<<<<<< HEAD
<<<<<<< HEAD
;
              <div className="space-y-4">;
                <FormField;
                  control={form.control}
                  name="is_current";
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">;
                      <FormControl>;
                        <Checkbox;
                          checked={field.value}
                          onCheckedChange={field.onChange}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className="space-y-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <FormField
                  control={form && form.control}
                  name="is_current"
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">;
                      <FormControl>;
                        <Checkbox
                          checked={field && field.value}
                          onCheckedChange={field && field.onChange}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        />;
                      </FormControl>;
                      <div className="space-y-1 leading-none">;
                        <FormLabel>I currently work here</FormLabel>;
                      </div>;
                    </FormItem>;
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
                />;
                  <FormField
                    control={form && form.control}
                    name="end_date"
;
                {!form.watch('is_current') && (;
                  <FormField;
                    control={form.control}
                    name="end_date";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                />;

                {!form && form.watch('is_current') && (;

                  <FormField
                    control={form && form.control}
                    name="end_date"

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel>End Date</FormLabel>;
                        <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                    )}
                          <Input ;
                            type="date" ;
                            {...field} ;
                            value={field.value || ''} ;
                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>;                    )}
                  />;
                )}
              </div>;
            </div>;
            />;
            <FormField
              control={form && form.control}
              name="description"
;
            <FormField;
              control={form.control}
              name="location";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location (Optional)</FormLabel>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <Input
                            type="date" 
                            {...field} 
                            value={field && field.value || ''} 
                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>;

                    )}
                  />;
                )}

              </div>;
            </div>;


            <FormField
              control={form && form.control}
              name="location"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location (Optional)</FormLabel>;
=======
                  </FormItem>)}
              />;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              <FormField;
                control={form.control}
                name="start_date";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Start Date</FormLabel>;
                    <FormControl>;
                      <Input;
                        type="date";
                        {...field}
                        value={field.value || ''}
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <div className="space - y-4">;
                <FormField;
                  control={form.control}
                  name="is_current";
                  render={({ field }) => (
                    <FormItem className="flex flex - row items - start space - x-3 space - y-0 py - 2">;
                      <FormControl>;
                        <Checkbox;
                          checked={field.value}
                          onCheckedChange={field.on_change}
                        />;
                      </FormControl>;
                      <div className="space - y-1 leading - none">;
                        <FormLabel > I currently work here</FormLabel>;
                      </div>;
                    </FormItem>)}
                />;
                {!form.watch ('is_current') && (
                  <FormField;
                    control={form.control}
                    name="end_date";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel > End Date</FormLabel>;
                        <FormControl>;
                          <Input;
                            type="date";
                            {...field}
                            value={field.value || ''}
                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>)}
                  />)}
              </div>;
            </div>;
            <FormField;
              control={form.control}
              name="location";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Location (Optional)</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <FormControl>;
                    <Input placeholder="San Francisco, CA (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                </FormItem>;              )}
            />;
;
            <FormField;
              control={form.control}
              name="description";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;


            <FormField
              control={form && form.control}
              name="description"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="flex justify-between">;
                    <span>Job Description</span>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <AIEnhancementButton;
                      currentContent={field.value || ''}
                      enhancementType="work-description";
                      context={`Role:${form.getValues('role_title')} at ${form.getValues('company_name')}`}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <AIEnhancementButton

                      currentContent={field && field.value || ''}

                      enhancementType="work-description"
                      context={`Role: ${form && form.getValues('role_title')} at ${form && form.getValues('company_name')}`}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      onEnhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <Textarea;
                      placeholder="Describe your responsibilities and accomplishments...";
                      className="min-h-[100px]";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Textarea
                      placeholder="Describe your responsibilities and accomplishments..."
                      className="min-h-[100px]"
=======
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel className="flex justify - between">;
                    <span > Job Description</span>;
                    <AIEnhancementButton;
                      current_content={field.value || ''}
                      enhancement_type="work - description";
                      context={`Role: ${form.get_values ('role_title')} at ${form.get_values ('company_name')}`}
                      on_enhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Describe your responsibilities and accomplishments...";
                      className="min - h-[100px]";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                <FormField
                  control={form.control}
                  name="is_current"
                  render={({ field }) => (
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
                    name="end_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            value={field.value |''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="San Francisco, CA (Remote)" {...field} />
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
                  <FormLabel className="flex justify-between">
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={field.value |''}
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="outline"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">;

              <Button
                type="button"
                variant="outline"

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={() => {
                  if (editingId) {
                    setEditingId(null),
                    form.reset({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      company_name: ''
                      role_title: ''
                      start_date: format(new Date(), 'yyyy-MM-dd');
                      is_current: false
                      description: ''
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
<<<<<<< HEAD
<<<<<<< HEAD
              <Button
                type="button"
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      location: ''})
                  } else {
                    onBack()
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    form && form.reset({;
                      company_name: '',;
                      role_title: '',;
                      start_date: format(new Date(), 'yyyy-MM-dd');
                      is_current: false,;
                      description: '',;
                      location: ''});
                  } else {;
                    onBack();
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}
<<<<<<< HEAD
              </Button>;
=======

              </Button>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Experience;
                </Button>;
<<<<<<< HEAD
                {!editingId && workExperiences && workExperiences.length > 0 && (;
                </FormItem>;
              )}
            />;
;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
;
            <div className="flex justify-between pt-2">;
              <Button;
                type="button";
                variant="outline";
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null),;
                    form.reset({;
                      company_name:'',;
                      role_title:'',;
                      start_date:format(new Date(), 'yyyy-MM-dd'),;
                      is_current:false,;
                      description:'',;
                      location:''}),;
                  } else {;
                    onBack(),;
                  }
                }}
              >;
                {editingId ? 'Cancel' :'Back'}
              </Button>;
;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' :'Add'} Experience;
                </Button>;
;
                {!editingId && workExperiences.length > 0 && (;
=======

                {!editingId && workExperiences && workExperiences.length > 0 && (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button type="button" onClick={onComplete}>;
                    Next;
                  </Button>;
                )}
<<<<<<< HEAD
                </FormItem>)}
            />;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            <div className="flex justify - between pt - 2">;
              <Button;
                type="button";
                variant="outline";
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
                    setEditingId (null);
                    form.reset ({
                      company_name: '',
                      role_title: '',
                      start_date: format (new Date (), 'yyyy - MM - dd');
                      is_current: false,
                      description: '',
                      location: ''});
                  } else {
                    on_back ();
                  }
                }}
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className="flex gap - 2">;
                <Button type="submit" disabled={is_loading}>;
                  {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
                  {editing_id ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (
                  <Button type="button" on_click={on_complete}>;
                    Next;
                  </Button>)}

<<<<<<< HEAD
                      location: ''})
                  } else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>
              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Experience
                </Button>
                {!editingId && workExperiences.length > 0 && (
                  <Button type="button" onClick={onComplete}>
                    Next
                  </Button>
                )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  ),; type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;
<div> <h2 className="text-xl font-semibold mb-2" >Work Experience</h2> <p className="text-muted-foreground" > Add your work history to showcase your professional experience. </p> </div> {
  workExperiences.map ( (work) => (<Card key= {
  work.id 
}className="bg-muted/40" > <CardContent className="pt-6" > <div className="flex justify-between" > <div> ? work.start date : format (work.start date, 'MMM yyyy') 
}- {
  work.is current ? 'Present' : (work.end date ? (typeof work.end date === 'string' ? work.end date : format (work.end date, 'MMM yyyy') ) : '') 
}</p>) 
}</div> <div className="flex gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> <Button > <Trash2 className="h-4 w-4" /> </Button> </div> </div>) 
}</CardContent> </Card>) ) 
}</div>) 
}</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Start Date</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="space-y-4" > <FormField <FormControl> <Checkbox checked= {
  field.value 
}onCheckedChange= {
  field.onChange 
}/> </FormControl> <div className="space-y-1 leading-none" > <FormLabel>I currently work here</FormLabel> </div> </FormItem>) 
}/> {
  !form.watch ('is current') && (<FormField control= {
  form.control 
}<FormItem> <FormLabel>End Date</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/>) 
}</div> </div> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className="flex justify-between" > <span>Job Description</span> <AIEnhancementButton /> </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="flex justify-between pt-2" > <Button if (editingId) {
  setEditingId (null);
form.reset ({
  
}
;

}> {
  editingId ? 'Cancel': 'Back' 
}</Button> Next </Button>) 
}</div> </div> </form> </Form> </div> </div>) 
}
    </div>;
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>);
}

=======
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
