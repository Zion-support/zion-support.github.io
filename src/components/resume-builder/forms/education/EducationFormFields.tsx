
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { format  } from 'date-fns';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { format } from 'date-fns'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { useState } from 'react'
import { EducationFormFieldsProps } from './types'
import { Education } from '@/types/resume'
// Define schema for form validation
const educationSchema = z.object({
  institution: z.string().min(1, 'Institution is required')
  degree: z.string().min(1, 'Degree is required')
  field_of_study: z.string().optional()
  start_date: z.string().min(1, 'Start date is required')
  end_date: z.string().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()
})
type EducationFormValues = z.infer<typeof educationSchema>
export function EducationFormFields({
  isEditing
  onSubmit
  onCancel
}: EducationFormFieldsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema)
    defaultValues: {
      institution: ''
      degree: ''
      field_of_study: ''
      start_date: format(new Date(), 'yyyy-MM-dd')
      is_current: false
      description: ''
      location: ''
    }
  })
  const handleSubmit = async (data: EducationFormValues) => {
    setIsLoading(true)
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setError(null);    try {
      await onSubmit(data)
    } catch (err: any) {
      setError(err.message |'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { format } from 'date-fns',;
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Textarea } from '@/components/ui/textarea',;
import { Input } from '@/components/ui/input',;
import { Checkbox } from '@/components/ui/checkbox',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
import { useState } from 'react',;
import { EducationFormFieldsProps } from './types',;
import { Education } from '@/types/resume',;
// Define schema for form validation;
const educationSchema = z.object({;
  institution: z.string().min(1, 'Institution is required'),;
  degree: z.string().min(1, 'Degree is required'),;
  field_of_study: z.string().optional(),;
  start_date: z.string().min(1, 'Start date is required'),;
  end_date: z.string().optional(),;
  is_current: z.boolean().default(false),;
  description: z.string().optional(),;
  location: z.string().optional()}),;
type EducationFormValues = z.infer<typeof educationSchema>,;
export function EducationFormFields({;
  isEditing,;
  onSubmit,;
  onCancel;
}: EducationFormFieldsProps) {;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const form = useForm<EducationFormValues>({;
    resolver: zodResolver(educationSchema),;
    defaultValues: {;
      institution: '',;
      degree: '',;
      field_of_study: '',;
      start_date: format(new Date(), 'yyyy-MM-dd'),;
      is_current: false,;
      description: '',;
      location: ''}}),;
  const handleSubmit = async (data: EducationFormValues) => {;
    setIsLoading(true),;
    setError(null);
    try {;
      await onSubmit(data);
    } catch (err: any) {;
      setError(err.message || 'An error occurred');
    } finally {;
      setIsLoading(false);
    }
  },

>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name='institution'
            render={({ field }: { field: any }) => (              <FormItem>
            name="institution"
            render={({ field }: { field: any }) => (
              <FormItem>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                <FormLabel>Institution</FormLabel>
                <FormControl>
                  <Input placeholder="University of California, MIT, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='degree'
            render={({ field }: { field: any }) => (              <FormItem>
          />;
          <FormField;
            control={form.control}
            name="degree"
            render={({ field }: { field: any }) => (
              <FormItem>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                <FormLabel>Degree</FormLabel>
                <FormControl>
                  <Input placeholder="Bachelor's, Master's, Ph.D, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='field_of_study'
          render={({ field }: { field: any }) => (            <FormItem>
          />;
        </div>;
        <FormField;
          control={form.control}
          name="field_of_study"
          render={({ field }: { field: any }) => (
            <FormItem>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              <FormLabel>Field of Study</FormLabel>
              <FormControl>
                <Input placeholder="Computer Science, Engineering, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='start_date'

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="start_date"
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            name='start_date'
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type='date' {...field} value={field.value |''} />                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='is_current'
              render={({ field }: { field: any }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                  <FormControl>
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <Input 
                    type="date" 
                    {...field}
                    value={field.value || ''} ;
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            )}
          />

          <div className="space-y-4">
            <FormField
              control={form.control}
              name='is_current'
              render={({ field }: { field: any }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-2'>                  <FormControl>
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              name="is_current"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                  <FormControl>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I am currently studying here</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            {!form.watch('is_current') && (
              <FormField
                control={form.control}
                name='end_date'
            />;
            {!form.watch('is_current') && (;
              <FormField;
                control={form.control}
                name="end_date"
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input type='date' {...field} value={field.value |''} />                    </FormControl>
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''} 
                      />
                    </FormControl>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
          render={({ field }: { field: any }) => (            <FormItem>
          </div>;
        </div>;
        <FormField;
          control={form.control}
          name="location"
          render={({ field }: { field: any }) => (
            <FormItem>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              <FormLabel>Location (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Cambridge, MA" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Notable achievements, courses, activities...'
                  className='min-h-[100px]'
        />;
        <FormField;
          control={form.control}
          name="description"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Notable achievements, courses, activities..."
                  className="min-h-[100px]"
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {error && (
          <Alert variant='destructive'>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className='flex justify-between pt-2'>
          <Button type='button' variant='outline' onClick={onCancel}>            {isEditing ? 'Cancel' : 'Back'}
          </Button>
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}

>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

        <div className="flex justify-between pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >;
            {isEditing ? 'Cancel' : 'Back'}
          </Button>

          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            {isEditing ? 'Update' : 'Add'} Education
          </Button>
        </div>
      </form>
    </Form>
  )
}
}
;
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
;
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
