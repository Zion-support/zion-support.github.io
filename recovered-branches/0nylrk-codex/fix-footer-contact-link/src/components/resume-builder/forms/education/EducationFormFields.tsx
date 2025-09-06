
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { format  } from 'date-fns';
import { Loader2  } from 'lucide-react';
import { Button  } from '@/components/ui/button';
import { Textarea  } from '@/components/ui/textarea';
import { Input  } from '@/components/ui/input';
import { Checkbox  } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { useState  } from 'react';
import { EducationFormFieldsProps  } from './types';
import { Education } from '@/types/resume';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {format} from 'date-fns';
import {Loader2} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Input} from '@/components/ui/input';
import {Checkbox} from '@/components/ui/checkbox';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {useState} from 'react';
import {EducationFormFieldsProps} from './types';
import {Education} from '@/types/resume';
// Define schema for form validation

const educationSchema = z.object({
  institution: z.string().min(1, 'Institution is required');
  degree: z.string().min(1, 'Degree is required');
  field_of_study: z.string().optional()
  start_date: z.string().min(1, 'Start date is required');
  end_date: z.string().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()})
type EducationFormValues = z.infer<typeof educationSchema>;
export function EducationFormFields({
  isEditing
  onSubmit
  onCancel
}: EducationFormFieldsProps) {

export function EducationFormFields({ 
  isEditing, 
  onSubmit, 
  onCancel 
}: EducationFormFieldsProps) {;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema)
    defaultValues: {
      institution: ''
      degree: ''
      field_of_study: ''
      start_date: format(new Date(), 'yyyy-MM-dd');
      is_current: false
      description: ''
      location: ''}})
  const handleSubmit = async (data: EducationFormValues) => {
    setIsLoading(true);
    setError(null)
    try {
      await onSubmit(data)
    } catch (err: any) {
      setError(err.message |'An error occurred')
    } finally {
      setIsLoading(false)
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { format } from 'date-fns',;
import { Loader2 } from 'lucide-react',;
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
;
// Define schema for form validation;
const educationSchema = z.object({;
  institution:z.string().min(1, 'Institution is required'),;
  degree:z.string().min(1, 'Degree is required'),;
  field_of_study:z.string().optional(),;
  start_date:z.string().min(1, 'Start date is required'),;
  end_date:z.string().optional(),;
  is_current:z.boolean().default(false),;
  description:z.string().optional(),;
  location:z.string().optional()}),;
;
type EducationFormValues = z.infer<typeof educationSchema>,;
;
export function EducationFormFields({ ;
  isEditing, ;
  onSubmit, ;
  onCancel ;
} EducationFormFieldsProps) {;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
;
  const form = useForm<EducationFormValues>({;
    resolver:zodResolver(educationSchema),;
    defaultValues:{;
      institution:'',;
      degree:'',;
      field_of_study:'',;
      start_date:format(new Date(), 'yyyy-MM-dd'),;
      is_current:false,;
      description:'',;
      location:''}}),;
;
  const handleSubmit = async (data:EducationFormValues) => {;
    setIsLoading(true),;
    setError(null),;
    try {;
      await onSubmit(data);
    } catch (err:any) {;
      setError(err.message || 'An error occurred');
    } finally {;
    }

  },

  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField
            control={form && form.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
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
            name="degree"
            render={({ field }) => (
              <FormItem>
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
          name="field_of_study"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field of Study</FormLabel>
              <FormControl>
                <Input placeholder="Computer Science, Engineering, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
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
          <div className="space-y-4">
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Start Date</FormLabel>;
                <FormControl>;
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
            <FormField
              control={form && form.control}
              name="is_current"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">;
                  <FormControl>;
                    <Checkbox
                      checked={field && field.value}
                      onCheckedChange={field && field.onChange}
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>I am currently studying here</FormLabel>;
                  </div>;
                </FormItem>;
              )}
          control={form.control}
          name="location";
          render={({ field }) => (
        <FormField
          control={form && form.control}
          name="description"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Description (Optional)</FormLabel>;
              <FormControl>;
                <Textarea
                  placeholder="Notable achievements, courses, activities..."
                  className="min-h-[100px]"
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="description";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Description (Optional)</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder="Notable achievements, courses, activities...";
                  className="min - h-[100px]";
                  {...field}
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}>;
            {isEditing ? 'Cancel' : 'Back'}
