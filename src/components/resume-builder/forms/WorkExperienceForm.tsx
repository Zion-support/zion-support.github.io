<<<<<<< HEAD
import { useState } from 'react',
import { useForm } from 'react-hook-form',
import { zodResolver } from '@hookform/resolvers/zod',
import { z } from 'zod',
import { Button } from '@/components/ui/button',
import { Textarea } from '@/components/ui/textarea',
import { Input } from '@/components/ui/input',
import { Checkbox } from '@/components/ui/checkbox',
import { format } from 'date-fns',
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form',
import { WorkExperience } from '@/types/resume',
import { Loader2, Edit, Trash2 } from 'lucide-react'
import { useResume } from '@/hooks/useResume',
import { Alert, AlertDescription } from '@/components/ui/alert',
import { Card, CardContent } from '@/components/ui/card',
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',
// Define schema for form validation
const workExperienceSchema = z.object({
  company_name: z.string().min(1, 'Company name is required'),
  role_title: z.string().min(1, 'Job title is required'),
  start_date: z.string().min(1, 'Start date is required'),
  end_date: z.string().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),
=======
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from '@/components/ui/form';

// Define schema for form validation
const _workExperienceSchema = z.object({_company_name: z.string().min(1, _'Company name is required'), _role_title: z.string().min(1, _'Job title is required'), _start_date: z.string().min(1, _'Start date is required'), _end_date: z.string().optional(), _is_current: z.boolean().default(false), _description: z.string().optional(), _location: z.string().optional()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>,

<<<<<<< HEAD
interface WorkExperienceFormProps {
  resumeId: string,
  workExperiences: WorkExperience[],
  onComplete: () => void,
  onBack: () => void
}

export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {
  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, isLoading } = useResume(),
  const [editingId, setEditingId] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),

  // Helper function to format dates to string
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '',
    if (typeof dateValue === 'string') return dateValue,
    return format(dateValue, 'yyyy-MM-dd')
  },

  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      company_name: '',
      role_title: '',
      start_date: format(new Date(), 'yyyy-MM-dd'),
      is_current: false,
      description: '',
      location: ''}}),

  const handleAddOrUpdate = async (data: WorkExperienceFormValues) => {
    try {
      setError(null),
      let success,

      const experienceData: WorkExperience = {
        company_name: data.company_name, // Required field
        role_title: data.role_title, // Required field
        start_date: data.start_date, // Required field
        end_date: data.is_current ? undefined : (data.end_date || undefined),
        is_current: data.is_current,
        description: data.description,
        location: data.location},

      if (editingId) {
        success = await updateWorkExperience(editingId, experienceData)
      } else {
        success = await addWorkExperience(resumeId, experienceData)
      }

      if (success) {
        form.reset({
          company_name: '',
          role_title: '',
          start_date: format(new Date(), 'yyyy-MM-dd'),
          is_current: false,
          description: '',
          location: ''}),
        setEditingId(null)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    }
  },

  const handleEdit = (work: WorkExperience) => {
    setEditingId(work.id!),
    form.reset({
      ...work,
      start_date: formatDateValue(work.start_date),
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined})
  },

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this work experience?')) {
      await deleteWorkExperience(id)
    }
  },

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent)
  },

  return (
    <div className=&quot;space-y-6&quot;>
=======
interface WorkExperienceFormProps {_resumeId: string;
  workExperiences: WorkExperience[];
  onComplete: () => void;
  onBack: () => void;}

export function WorkExperienceForm(_{_resumeId, _workExperiences, _onComplete, _onBack}: WorkExperienceFormProps) {_const { addWorkExperience, _updateWorkExperience, _deleteWorkExperience, _isLoading} = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates to string
  const _formatDateValue = (_dateValue: string | Date | undefined): string => {_if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, _'yyyy-MM-dd');};

  const _form = useForm<WorkExperienceFormValues>({_resolver: zodResolver(workExperienceSchema), _defaultValues: {
      company_name: '', _role_title: '', _start_date: format(new Date(), _'yyyy-MM-dd'), _is_current: false, _description: '', _location: ''}});

  const _handleAddOrUpdate = async (_data: WorkExperienceFormValues) => {_try {
      setError(null);
      let success;

      const experienceData: WorkExperience = {
        company_name: data.company_name, _// Required field
        role_title: data.role_title, _// Required field
        start_date: data.start_date, _// Required field
        end_date: data.is_current ? undefined : (data.end_date || undefined), _is_current: data.is_current, _description: data.description, _location: data.location};

      if (editingId) {_success = await updateWorkExperience(editingId, _experienceData);} else {_success = await addWorkExperience(resumeId, _experienceData);}

      if (success) {_form.reset({
          company_name: '', _role_title: '', _start_date: format(new Date(), _'yyyy-MM-dd'), _is_current: false, _description: '', _location: ''});
        setEditingId(null);
      }
    } catch (err: unknown) {_setError(err.message || 'An error occurred');}
  };

  const _handleEdit = (_work: WorkExperience) => {_setEditingId(work.id!);
    form.reset({
      ...work, _start_date: formatDateValue(work.start_date), _end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined});
  };

  const _handleDelete = async (_id: string) => {_if (confirm('Are you sure you want to delete this work experience?')) {
      await deleteWorkExperience(id);}
  };

  const _handleEnhanceDescription = (_enhancedContent: string) => {_form.setValue('description', _enhancedContent);};

  return (_<div className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <div>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>Work Experience</h2>
        <p className=&quot;text-muted-foreground&quot;>
          Add your work history to showcase your professional experience.
        </p>
      </div>

<<<<<<< HEAD
      {workExperiences.length > 0 && (
        <div className=&quot;space-y-4&quot;>
          <h3 className=&quot;text-md font-medium&quot;>Added Experience</h3>
=======
      {_workExperiences.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-md font-medium">Added Experience</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {workExperiences.map((work) => (
            <Card key={work.id} className=&quot;bg-muted/40&quot;>
              <CardContent className=&quot;pt-6&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <div>
<<<<<<< HEAD
                    <h4 className=&quot;font-medium&quot;>{work.role_title}</h4>
                    <p className=&quot;text-sm text-muted-foreground&quot;>{work.company_name}</p>
                    <p className=&quot;text-xs text-muted-foreground mt-1&quot;>
                      {typeof work.start_date === 'string' 
=======
                    <h4 className="font-medium">{_work.role_title}</h4>
                    <p className="text-sm text-muted-foreground">{_work.company_name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {_typeof work.start_date === 'string' 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        ? work.start_date 
                        : format(work.start_date, _'MMM yyyy')} - {_work.is_current 
                        ? 'Present' 
                        : (work.end_date ? (typeof work.end_date === 'string' 
                          ? work.end_date 
                          : format(work.end_date, _'MMM yyyy')) : '')}
                    </p>
<<<<<<< HEAD
                    {work.location && (
                      <p className=&quot;text-xs text-muted-foreground&quot;>{work.location}</p>
=======
                    {_work.location && (
                      <p className="text-xs text-muted-foreground">{work.location}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    )}
                  </div>
                  <div className=&quot;flex gap-2&quot;>
                    <Button
<<<<<<< HEAD
                      variant=&quot;ghost&quot;
                      size=&quot;icon&quot;
                      onClick={() => handleEdit(work)}
                      aria-label=&quot;Edit experience&quot;
=======
                      variant="ghost"
                      size="icon"
                      onClick={_() => handleEdit(work)}
                      aria-label="Edit experience"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Edit className=&quot;h-4 w-4&quot; />
                    </Button>
                    <Button
<<<<<<< HEAD
                      variant=&quot;ghost&quot;
                      size=&quot;icon&quot;
                      onClick={() => handleDelete(work.id!)}
                      aria-label=&quot;Delete experience&quot;
=======
                      variant="ghost"
                      size="icon"
                      onClick={_() => handleDelete(work.id!)}
                      aria-label="Delete experience"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Trash2 className=&quot;h-4 w-4&quot; />
                    </Button>
                  </div>
                </div>
<<<<<<< HEAD
                {work.description && (
                  <p className=&quot;text-sm mt-3 line-clamp-2&quot;>{work.description}</p>
=======
                {_work.description && (
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

<<<<<<< HEAD
      <div className=&quot;bg-muted/40 p-6 rounded-lg&quot;>
        <h3 className=&quot;text-md font-medium mb-4&quot;>
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className=&quot;space-y-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <FormField
                control={form.control}
                name=&quot;company_name&quot;
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;Google, Microsoft, etc.&quot; {...field} />
=======
      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {_editingId ? 'Update Experience' : 'Add Experience'}
        </h3>

        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={_form.control}
                name="company_name"
                render={_(_{ field}: {_field: unknown}) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Google, Microsoft, etc." {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;role_title&quot;
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;Software Engineer, Product Manager, etc.&quot; {...field} />
=======
                control={_form.control}
                name="role_title"
                render={_(_{ field}: {_field: unknown}) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer, Product Manager, etc." {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;start_date&quot;
                render={({ field }: { field: any }) => (
=======
                control={_form.control}
                name="start_date"
                render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input 
<<<<<<< HEAD
                        type=&quot;date&quot; 
                        {...field} 
                        value={field.value || ''}
=======
                        type="date" 
                        {_...field} 
                        value={_field.value || ''}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=&quot;space-y-4&quot;>
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;is_current&quot;
                  render={({ field }: { field: any }) => (
                    <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0 py-2&quot;>
=======
                  control={_form.control}
                  name="is_current"
                  render={_(_{ field}: {_field: unknown}) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <FormControl>
                        <Checkbox
                          checked={_field.value}
                          onCheckedChange={_field.onChange}
                        />
                      </FormControl>
                      <div className=&quot;space-y-1 leading-none&quot;>
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {_!form.watch('is_current') && (_<FormField
                    control={form.control}
<<<<<<< HEAD
                    name=&quot;end_date&quot;
                    render={({ field }: { field: any }) => (
=======
                    name="end_date"
                    render={_({ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input 
<<<<<<< HEAD
                            type=&quot;date&quot; 
                            {...field} 
                            value={field.value || ''} 
=======
                            type="date" 
                            {_...field} 
                            value={_field.value || ''} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              control={form.control}
              name=&quot;location&quot;
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;San Francisco, CA (Remote)&quot; {...field} />
=======
              control={_form.control}
              name="location"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="San Francisco, CA (Remote)" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;description&quot;
              render={({ field }: { field: any }) => (
=======
              control={_form.control}
              name="description"
              render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel className=&quot;flex justify-between&quot;>
                    <span>Job Description</span>
                    <AIEnhancementButton
<<<<<<< HEAD
                      currentContent={field.value || ''}
                      enhancementType=&quot;work-description&quot;
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
=======
                      currentContent={_field.value || ''}
                      enhancementType="work-description"
                      context={_`Role: ${form.getValues('role_title')} at ${_form.getValues('company_name')}`}
                      onEnhanced={_handleEnhanceDescription}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
<<<<<<< HEAD
                      placeholder=&quot;Describe your responsibilities and accomplishments...&quot;
                      className=&quot;min-h-[100px]&quot;
                      {...field}
=======
                      placeholder="Describe your responsibilities and accomplishments..."
                      className="min-h-[100px]"
                      {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<<<<<<< HEAD
            {error && <Alert variant=&quot;destructive&quot;><AlertDescription>{error}</AlertDescription></Alert>}
=======
            {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

            <div className=&quot;flex justify-between pt-2&quot;>
              <Button
<<<<<<< HEAD
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={() => {
=======
                type="button"
                variant="outline"
                onClick={_() => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  if (editingId) {
                    setEditingId(null),
                    form.reset({
<<<<<<< HEAD
                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
                      location: ''})
                  } else {
                    onBack()
                  }
=======
                      company_name: '', _role_title: '', _start_date: format(new Date(), _'yyyy-MM-dd'), _is_current: false, _description: '', _location: ''});
                  } else {_onBack();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                }}
              >
                {_editingId ? 'Cancel' : 'Back'}
              </Button>

<<<<<<< HEAD
              <div className=&quot;flex gap-2&quot;>
                <Button type=&quot;submit&quot; disabled={isLoading}>
                  {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
                  {editingId ? 'Update' : 'Add'} Experience
                </Button>

                {!editingId && workExperiences.length > 0 && (
                  <Button type=&quot;button&quot; onClick={onComplete}>
=======
              <div className="flex gap-2">
                <Button type="submit" disabled={_isLoading}>
                  {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {_editingId ? 'Update' : 'Add'} Experience
                </Button>

                {_!editingId && workExperiences.length > 0 && (
                  <Button type="button" onClick={onComplete}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Next
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
