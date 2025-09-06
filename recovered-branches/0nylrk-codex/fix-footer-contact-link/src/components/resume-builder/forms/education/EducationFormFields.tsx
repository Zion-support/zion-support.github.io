

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
=======
import { Education } from '@/types/resume';// Define schema for form validation
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

const educationSchema = z.object({
  institution: z.string().min(1, 'Institution is required');
  degree: z.string().min(1, 'Degree is required');
  field_of_study: z.string().optional()
  start_date: z.string().min(1, 'Start date is required');
  end_date: z.string().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()})
<<<<<<< HEAD
type EducationFormValues = z.infer<typeof educationSchema>;



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

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {format} from 'date - fns';
import {Loader2} from 'lucide-react';
import {Button} from '@/components / ui / button';
import {Textarea} from '@/components / ui / textarea';
import {Input} from '@/components / ui / input';
import {Checkbox} from '@/components / ui / checkbox';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {useState} from 'react';
import {EducationFormFieldsProps} from './types';

    }
  }
  };

import { useForm } from 'react-hook-form',;
=======
type EducationFormValues = z.infer<typeof educationSchema>;import { useForm } from 'react-hook-form',;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

// Define schema for form validation;
const educationSchema = z && z.object({;
  institution: z && z.string().min(1, 'Institution is required');
  degree: z && z.string().min(1, 'Degree is required');
  field_of_study: z && z.string().optional(),;
  start_date: z && z.string().min(1, 'Start date is required');
  end_date: z && z.string().optional(),;
<<<<<<< HEAD
  is_current: z && z.boolean().default(false),;
=======
  is_current: z && z.boolean().default(false),,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: z && z.string().optional(),;
  location: z && z.string().optional()}),;

type EducationFormValues = z && z.infer<typeof educationSchema>;

export function EducationFormFields(): any ({ ;
  isEditing, ;
  onSubmit, ;
  onCancel ;
}: EducationFormFieldsProps) {;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const form = useForm<EducationFormValues>({;
    resolver: zodResolver(educationSchema),;
    defaultValues: {;
      institution: '',;
      degree: '',;
      field_of_study: '',;
      start_date: format(new Date(), 'yyyy-MM-dd');
<<<<<<< HEAD
      is_current: false,;
      description: '',;
=======
      is_current: false,,
  description: '',;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      location: ''}}),;

  const handleSubmit = async (data: EducationFormValues) => {;
    setIsLoading(true);
    setError(null),;
    try {;
      await onSubmit(data);
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred');
    } finally {;
      setIsLoading(false);
    }

  },

<<<<<<< HEAD






=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField
            control={form && form.control}
            name="institution"
            render={({ field }) => (;
              <FormItem>;
<<<<<<< HEAD
                <FormLabel>Institution</FormLabel>;
import {Education} from '@/types / resume';
=======
                <FormLabel>Institution</FormLabel>;import {Education} from '@/types / resume';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// Define schema for form validation;
const education_schema = z.object ({
  institution: z.string ().min (1, 'Institution is required');
  degree: z.string ().min (1, 'Degree is required');
  field_of_study: z.string ().optional (),
  start_date: z.string ().min (1, 'Start date is required');
  end_date: z.string ().optional (),
  is_current: z.boolean ().default (false),
  description: z.string ().optional (),
  location: z.string ().optional ()}),
type EducationFormValues = z.infer < typeof education_schema>;
;
export /**
 * EducationFormFields - Function description
 */
function EducationFormFields() {
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const form = use_form < EducationFormValues>({
    resolver: zod_resolver (education_schema),
    default_values: {
      institution: '',
      degree: '',
      field_of_study: '',
      start_date: format (new Date (), 'yyyy - MM - dd');
      is_current: false,
      description: '',
      location: ''}}),
  const handle_submit = async (data: EducationFormValues) => {
    setIsLoading (true);
    set_error (null),
    try {
      await on_submit (data);
    } catch (err: any) {
      set_error (err.message || 'An error occurred');
    } finally {
      setIsLoading (false);
    }
  }
;
  return (
    <Form {...form}>;
<<<<<<< HEAD
      <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
=======
      <form on_submit={form.handle_submit (handle_submit)} className="space-y-4">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <FormField;
            control={form.control}
            name="institution";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Institution</FormLabel>;
<<<<<<< HEAD
  };

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
// Define schema for form validation;
const educationSchema = z.object({;
  institution:z.string().min(1, 'Institution is required'),;
  degree:z.string().min(1, 'Degree is required'),;
  field_of_study:z.string().optional(),;
  start_date:z.string().min(1, 'Start date is required'),;
  end_date:z.string().optional(),;
<<<<<<< HEAD
  is_current:z.boolean().default(false),;
=======
  is_current:z.boolean().default(false),,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
      is_current:false,;
      description:'',;
=======
      is_current:false,,
  description:'',;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
import {z} from 'zod';
import {format} from 'date - fns';
import {Loader2} from 'lucide-react';
import {Button} from '@/components / ui / button';
import {Textarea} from '@/components / ui / textarea';
import {Input} from '@/components / ui / input';
import {Checkbox} from '@/components / ui / checkbox';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {useState} from 'react';
import {EducationFormFieldsProps} from './types';
    }
  }

  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="institution";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Institution</FormLabel>;
<<<<<<< HEAD
          <FormField
            control={form && form.control}
            name="institution"
                <FormControl>;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  <Input placeholder="University of California, MIT, etc." {...field} />;
                </FormControl>;
                <FormMessage />;

          />;

<<<<<<< HEAD

          <FormField
            control={form && form.control}
            name="degree"
          <FormField
=======
          <FormField
            control={form && form.control}
            name="degree"          <FormField
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            control={form && form.control}
            name="degree"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Degree</FormLabel>;
                <FormControl>;
<<<<<<< HEAD
                  <Input placeholder="Bachelor's, Master's, Ph && Ph.D, etc." {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}

          />;
        </div>;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <FormField
          control={form && form.control}
          name="field_of_study"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Field of Study</FormLabel>;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="degree";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Degree</FormLabel>;
                <FormControl>;
                  <Input placeholder="Bachelor's, Master's, Ph.D, etc." {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>)}
          />;
        </div>;
        <FormField;
          control={form.control}
          name="field_of_study";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Field of Study</FormLabel>;
              <FormControl>;
                <Input placeholder="Computer Science, Engineering, etc." {...field} />;
              </FormControl>;
              <FormMessage />;
<<<<<<< HEAD

        />;
=======
          <FormField
            control={form && form.control}
            name="start_date"        />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

          <FormField
            control={form && form.control}
            name="start_date"

<<<<<<< HEAD

                  <Input 
                    type="date" 


          <FormField
            control={form && form.control}
            name="start_date"
                    {...field}
                    value={field.value |''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-4">
=======
                  <Input 
                    type="date" 
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Start Date</FormLabel>;
                <FormControl>;
                  <Input
                    type="date" 
                    {...field}
<<<<<<< HEAD
                    value={field && field.value || ''} 
                  />;
=======
                    value={field && field.value || ''}                   />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />;

          <div className="space-y-4">;
<<<<<<< HEAD
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>I am currently studying here</FormLabel>;
                  </div>;
                </FormItem>;
              )}

            />;

            {!form && form.watch('is_current') && (;

              <FormField
                control={form && form.control}
                name="end_date"
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>End Date</FormLabel>;
                    <FormControl>;
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

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <FormField
          control={form && form.control}
          name="location"
          render={({ field }) => (;
            <FormItem>;
<<<<<<< HEAD
              <FormLabel>Location (Optional)</FormLabel>;
                )}
=======
              <FormLabel>Location (Optional)</FormLabel>;                )}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                      <Input ;
                        type="date" ;
                        {...field} ;
                        value={field.value || ''} ;
                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;                )}
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
<<<<<<< HEAD
              <FormControl>;
                <Input placeholder="Cambridge, MA" {...field} />;
              </FormControl>;
              <FormMessage />;

        />;


        <FormField
          control={form && form.control}
          name="description"
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
                <Textarea;
                  placeholder="Notable achievements, courses, activities...";
                  className="min-h-[100px]";
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;

        />;

        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

        <div className="flex justify-between pt-2">;

          <Button
            type="button"
            variant="outline"
            onClick={onCancel}>;
            {isEditing ? 'Cancel' : 'Back'}

          </Button>;

          <Button type="submit" disabled={isLoading}>;
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Update' : 'Add'} Education;
          </Button>;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        </div>;
      </form>;
    </Form>;
  );
}
<<<<<<< HEAD

            </FormItem>)}
        />;
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
        <div className="flex justify - between pt - 2">;
=======
            </FormItem>)}
        />;
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
        <div className="flex justify - between pt-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <Button;
            type="button";
            variant="outline";
            on_click={on_cancel}
          >;
            {is_editing ? 'Cancel' : 'Back'}
          </Button>;
          <Button type="submit" disabled={is_loading}>;
<<<<<<< HEAD
            {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
=======
            {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {is_editing ? 'Update' : 'Add'} Education;
          </Button>;
        </div>;
      </form>;
    </Form>);
}
<<<<<<< HEAD

}
;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;

  ),;}
 type EducationFormValues = z.infer<typeof educationSchema>;
</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Start Date</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="space-y-4" > <FormField <FormControl> <Checkbox checked= {
  field.value 
}onCheckedChange= {
  field.onChange 
}/> </FormControl> <div className="space-y-1 leading-none" > <FormLabel>I am currently studying here</FormLabel> </div> </FormItem>) 
}/> {
  !form.watch ('is current') && (<FormField control= {
  form.control 
}<FormItem> <FormLabel>End Date</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/>) 
}</div> </div> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Description (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="flex justify-between pt-2" > <Button > {
  isEditing ? 'Cancel' : 'Back' 
}</Button> </Button> </div> </form> </Form>) 
}
}
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
