<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
=======

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======



export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {
=======

export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    } catch (err: any) {
      setError(err.message |'An error occurred')
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======


  };



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>;

        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <FormField
                control={form && form.control}
                name="company_name"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Company Name</FormLabel>;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </Button>;
                    <Button;
                      variant="ghost";
                      size="icon";
<<<<<<< HEAD
                      on_click={() => handle_delete (work.id!)}
                    >;
                      <Trash2 className="h - 4 w - 4" />;
                    </Button>;
                  </div>;
                </div>;
                {work.description && (
                  <p className="text - sm mt - 3 line - clamp - 2">{work.description}</p>)}
              </CardContent>;
            </Card>))}
        </div>)}
      <div className="bg - muted / 40 p - 6 rounded - lg">;
        <h3 className="text - md font - medium mb - 4">;
          {editing_id ? 'Update Experience' : 'Add Experience'}
        </h3>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (handleAddOrUpdate)} className="space - y-4">;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              <FormField;
                control={form.control}
                name="company_name";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Company Name</FormLabel>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <FormControl>;
                      <Input placeholder="Google, Microsoft, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

              />;


========
<<<<<<< HEAD
              />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
              <FormField
                control={form && form.control}
                name="role_title"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Job Title</FormLabel>;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name="role_title";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Job Title</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
              />;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

              <FormField
                control={form && form.control}
                name="start_date"


=======
<<<<<<< HEAD
                      <Input
                        type="date"
                        {...field}
                        value={field.value |''}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
<<<<<<< HEAD
========
              <FormField
                control={form && form.control}
                name="start_date"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Start Date</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD
                      <Input
                        type="date" 
                        {...field} 
                        value={field && field.value || ''}
=======
                      <Input ;
                        type="date" ;
                        {...field} ;
                        value={field.value || ''}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
<<<<<<< HEAD
              <div className="space-y-4">;
                <FormField
                  control={form && form.control}
                  name="is_current"
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">;
                      <FormControl>;
                        <Checkbox
                          checked={field && field.value}
                          onCheckedChange={field && field.onChange}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        />;
                      </FormControl>;
                      <div className="space-y-1 leading-none">;
                        <FormLabel>I currently work here</FormLabel>;
                      </div>;
                    </FormItem>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
                />;
<<<<<<< HEAD
                {!form && form.watch('is_current') && (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

                  <FormField
                    control={form && form.control}
                    name="end_date"

========
                  <FormField
                    control={form && form.control}
                    name="end_date"
=======
;
                {!form.watch('is_current') && (;
                  <FormField;
                    control={form.control}
                    name="end_date";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel>End Date</FormLabel>;
                        <FormControl>;
<<<<<<< HEAD
                          <Input
                            type="date" 
                            {...field} 
                            value={field && field.value || ''} 
                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
                    )}
=======
                          <Input ;
                            type="date" ;
                            {...field} ;
                            value={field.value || ''} ;
                          />;
                        </FormControl>;
                        <FormMessage />;
                      </FormItem>;                    )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  />;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

              </div>;
            </div>;


========
              </div>;
            </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
            <FormField
              control={form && form.control}
              name="location"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location (Optional)</FormLabel>;
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
                  <FormControl>;
                    <Input placeholder="San Francisco, CA (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

            />;


========
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
            <FormField
              control={form && form.control}
              name="description"
=======
;
            <FormField;
              control={form.control}
              name="location";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location (Optional)</FormLabel>;
                  <FormControl>;
                    <Input placeholder="San Francisco, CA (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
;
            <FormField;
              control={form.control}
              name="description";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="flex justify-between">;
                    <span>Job Description</span>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
                    <AIEnhancementButton

                      currentContent={field && field.value || ''}

========
<<<<<<< HEAD
                    <AIEnhancementButton
                      currentContent={field && field.value || ''}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
                      enhancementType="work-description"
                      context={`Role: ${form && form.getValues('role_title')} at ${form && form.getValues('company_name')}`}
=======
                    <AIEnhancementButton;
                      currentContent={field.value || ''}
                      enhancementType="work-description";
                      context={`Role:${form.getValues('role_title')} at ${form.getValues('company_name')}`}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      onEnhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Textarea
                      placeholder="Describe your responsibilities and accomplishments..."
                      className="min-h-[100px]"
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
=======
                    <Textarea;
                      placeholder="Describe your responsibilities and accomplishments...";
                      className="min-h-[100px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
            />;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            <div className="flex justify-between pt-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

              <Button
                type="button"
                variant="outline"

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                onClick={() => {
                  if (editingId) {
                    setEditingId(null),
                    form.reset({
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
                      company_name: ''
                      role_title: ''
                      start_date: format(new Date(), 'yyyy-MM-dd');
                      is_current: false
                      description: ''

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      location: ''})
                  } else {
                    onBack()
=======
========
              <Button
                type="button"
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
                    form && form.reset({;
                      company_name: '',;
                      role_title: '',;
                      start_date: format(new Date(), 'yyyy-MM-dd');
                      is_current: false,;
                      description: '',;
                      location: ''});
                  } else {;
                    onBack();
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editingId && workExperiences && workExperiences.length > 0 && (;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <Button type="button" onClick={onComplete}>;
                    Next;
                  </Button>;
                )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
    </div>);
=======
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}> {
  editingId ? 'Cancel': 'Back' 
}</Button> Next </Button>) 
}</div> </div> </form> </Form> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/WorkExperienceForm.tsx
=======
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
