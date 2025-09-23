
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
<<<<<<< HEAD
Loader2
=======
import { Loader2 } from 'lucide-react';
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
<<<<<<< HEAD
import { AlertDescription } from '@/components/ui/alert';
=======
import { Alert, AlertDescription } from '@/components/ui/alert';
>>>>>>> origin/auto/autonomy-17186719616
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from '@/components/ui/form';
=======
  FormMessage,
} from '@/components/ui/form';
>>>>>>> origin/auto/autonomy-17186719616
import { useState } from 'react';
import { EducationFormFieldsProps } from './types';
import { Education } from '@/types/resume';

// Define schema for form validation
const educationSchema = z.object({
<<<<<<< HEAD
  institution: z.string().min(1'Institution is required'),
  degree: z.string().min(1'Degree is required'),
  field_of_study: z.string().optional(),
  start_date: z.string().min(1'Start date is required'),
  end_date: z.string().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()});
=======
  institution: z.string().min(1, 'Institution is required'),
  degree: z.string().min(1, 'Degree is required'),
  field_of_study: z.string().optional(),
  start_date: z.string().min(1, 'Start date is required'),
  end_date: z.string().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional(),
});
>>>>>>> origin/auto/autonomy-17186719616

type EducationFormValues = z.infer<typeof educationSchema>;

export function EducationFormFields({ 
<<<<<<< HEAD
  isEditing
  onSubmit
  onCancel 
}: EducationFormFieldsProps) {
  const [isLoadingsetIsLoading] = useState(false);
  const [errorsetError] = useState<string | null>(null);
=======
  isEditing, 
  onSubmit, 
  onCancel 
}: EducationFormFieldsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
>>>>>>> origin/auto/autonomy-17186719616

  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: '',
      degree: '',
      field_of_study: '',
<<<<<<< HEAD
      start_date: format(new Date()'yyyy-MM-dd'),
      is_current: false,
      description: '',
      location: ''}});
=======
      start_date: format(new Date(), 'yyyy-MM-dd'),
      is_current: false,
      description: '',
      location: '',
    },
  });
>>>>>>> origin/auto/autonomy-17186719616

  const handleSubmit = async (data: EducationFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      await onSubmit(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institution</FormLabel>
                <FormControl>
<<<<<<< HEAD
                  <Input placeholder="University of CaliforniaMITetc." {...field} />
=======
                  <Input placeholder="University of California, MIT, etc." {...field} />
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                  <Input placeholder="Bachelor'sMaster'sPh.Detc." {...field} />
=======
                  <Input placeholder="Bachelor's, Master's, Ph.D, etc." {...field} />
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                <Input placeholder="Computer ScienceEngineeringetc." {...field} />
=======
                <Input placeholder="Computer Science, Engineering, etc." {...field} />
>>>>>>> origin/auto/autonomy-17186719616
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
                    {...field}
                    value={field.value || ''} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
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
                    <FormLabel>I am currently studying here</FormLabel>
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location (Optional)</FormLabel>
              <FormControl>
<<<<<<< HEAD
                <Input placeholder="CambridgeMA" {...field} />
=======
                <Input placeholder="Cambridge, MA" {...field} />
>>>>>>> origin/auto/autonomy-17186719616
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
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea
<<<<<<< HEAD
                  placeholder="Notable achievementscoursesactivities..."
=======
                  placeholder="Notable achievements, courses, activities..."
>>>>>>> origin/auto/autonomy-17186719616
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
            onClick={onCancel}
          >
            {isEditing ? 'Cancel' : 'Back'}
          </Button>

          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Update' : 'Add'} Education
          </Button>
        </div>
      </form>
    </Form>
  );
}
