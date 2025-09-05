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
import { Loader2, Edit, Trash2 } from 'lucide-react',
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

type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>,

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
      <div>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>Work Experience</h2>
        <p className=&quot;text-muted-foreground&quot;>
          Add your work history to showcase your professional experience.
        </p>
      </div>

      {workExperiences.length > 0 && (
        <div className=&quot;space-y-4&quot;>
          <h3 className=&quot;text-md font-medium&quot;>Added Experience</h3>
          {workExperiences.map((work) => (
            <Card key={work.id} className=&quot;bg-muted/40&quot;>
              <CardContent className=&quot;pt-6&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <div>
                    <h4 className=&quot;font-medium&quot;>{work.role_title}</h4>
                    <p className=&quot;text-sm text-muted-foreground&quot;>{work.company_name}</p>
                    <p className=&quot;text-xs text-muted-foreground mt-1&quot;>
                      {typeof work.start_date === 'string' 
                        ? work.start_date 
                        : format(work.start_date, 'MMM yyyy')} - {work.is_current 
                        ? 'Present' 
                        : (work.end_date ? (typeof work.end_date === 'string' 
                          ? work.end_date 
                          : format(work.end_date, 'MMM yyyy')) : '')}
                    </p>
                    {work.location && (
                      <p className=&quot;text-xs text-muted-foreground&quot;>{work.location}</p>
                    )}
                  </div>
                  <div className=&quot;flex gap-2&quot;>
                    <Button
                      variant=&quot;ghost&quot;
                      size=&quot;icon&quot;
                      onClick={() => handleEdit(work)}
                    >
                      <Edit className=&quot;h-4 w-4&quot; />
                    </Button>
                    <Button
                      variant=&quot;ghost&quot;
                      size=&quot;icon&quot;
                      onClick={() => handleDelete(work.id!)}
                    >
                      <Trash2 className=&quot;h-4 w-4&quot; />
                    </Button>
                  </div>
                </div>
                {work.description && (
                  <p className=&quot;text-sm mt-3 line-clamp-2&quot;>{work.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;Google, Microsoft, etc.&quot; {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name=&quot;role_title&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;Software Engineer, Product Manager, etc.&quot; {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <FormField
                control={form.control}
                name=&quot;start_date&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input 
                        type=&quot;date&quot; 
                        {...field} 
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=&quot;space-y-4&quot;>
                <FormField
                  control={form.control}
                  name=&quot;is_current&quot;
                  render={({ field }) => (
                    <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0 py-2&quot;>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className=&quot;space-y-1 leading-none&quot;>
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {!form.watch('is_current') && (
                  <FormField
                    control={form.control}
                    name=&quot;end_date&quot;
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input 
                            type=&quot;date&quot; 
                            {...field} 
                            value={field.value || ''} 
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
              name=&quot;location&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;San Francisco, CA (Remote)&quot; {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name=&quot;description&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=&quot;flex justify-between&quot;>
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={field.value || ''}
                      enhancementType=&quot;work-description&quot;
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder=&quot;Describe your responsibilities and accomplishments...&quot;
                      className=&quot;min-h-[100px]&quot;
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <Alert variant=&quot;destructive&quot;><AlertDescription>{error}</AlertDescription></Alert>}

            <div className=&quot;flex justify-between pt-2&quot;>
              <Button
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={() => {
                  if (editingId) {
                    setEditingId(null),
                    form.reset({
                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
                      location: ''})
                  } else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>

              <div className=&quot;flex gap-2&quot;>
                <Button type=&quot;submit&quot; disabled={isLoading}>
                  {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
                  {editingId ? 'Update' : 'Add'} Experience
                </Button>

                {!editingId && workExperiences.length > 0 && (
                  <Button type=&quot;button&quot; onClick={onComplete}>
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
