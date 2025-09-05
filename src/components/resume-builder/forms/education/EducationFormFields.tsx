
import { useForm } from 'react-hook-form',
import { zodResolver } from '@hookform/resolvers/zod',
import { z } from 'zod',
import { format } from 'date-fns',
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Textarea } from '@/components/ui/textarea',
import { Input } from '@/components/ui/input',
import { Checkbox } from '@/components/ui/checkbox',
import { Alert, AlertDescription } from '@/components/ui/alert',
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form',
import { useState } from 'react',
import { EducationFormFieldsProps } from './types',
import { Education } from '@/types/resume',
// Define schema for form validation
const educationSchema = z.object({
  institution: z.string().min(1, 'Institution is required'),
  degree: z.string().min(1, 'Degree is required'),
  field_of_study: z.string().optional(),
  start_date: z.string().min(1, 'Start date is required'),
  end_date: z.string().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type EducationFormValues = z.infer<typeof educationSchema>,

export function EducationFormFields({ 
  isEditing, 
  onSubmit, 
  onCancel 
}: EducationFormFieldsProps) {
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),

  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: '',
      degree: '',
      field_of_study: '',
      start_date: format(new Date(), 'yyyy-MM-dd'),
      is_current: false,
      description: '',
      location: ''}}),

  const handleSubmit = async (data: EducationFormValues) => {
    setIsLoading(true),
    setError(null),
    try {
      await onSubmit(data)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  },

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className=&quot;space-y-4&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
            control={form.control}
            name=&quot;institution&quot;
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Institution</FormLabel>
                <FormControl>
                  <Input placeholder=&quot;University of California, MIT, etc.&quot; {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name=&quot;degree&quot;
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Degree</FormLabel>
                <FormControl>
                  <Input placeholder=&quot;Bachelor's, Master's, Ph.D, etc.&quot; {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name=&quot;field_of_study&quot;
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Field of Study</FormLabel>
              <FormControl>
                <Input placeholder=&quot;Computer Science, Engineering, etc.&quot; {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
            control={form.control}
            name=&quot;start_date&quot;
            render={({ field }: { field: any }) => (
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
              render={({ field }: { field: any }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0 py-2&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className=&quot;space-y-1 leading-none&quot;>
                    <FormLabel>I am currently studying here</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            {!form.watch('is_current') && (
              <FormField
                control={form.control}
                name=&quot;end_date&quot;
                render={({ field }: { field: any }) => (
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
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Location (Optional)</FormLabel>
              <FormControl>
                <Input placeholder=&quot;Cambridge, MA&quot; {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=&quot;description&quot;
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=&quot;Notable achievements, courses, activities...&quot;
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
            onClick={onCancel}
          >
            {isEditing ? 'Cancel' : 'Back'}
          </Button>

          <Button type=&quot;submit&quot; disabled={isLoading}>
            {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
            {isEditing ? 'Update' : 'Add'} Education
          </Button>
        </div>
      </form>
    </Form>
  )
}
