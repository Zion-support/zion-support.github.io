
=======
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
      setIsLoading(false),;
    }
  },;
;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="institution";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Institution</FormLabel>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <FormControl>;
                  <Input placeholder="University of California, MIT, etc." {...field} />;
                </FormControl>;
                <FormMessage />;
<<<<<<< HEAD

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Degree</FormLabel>;
                <FormControl>;

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

                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>I am currently studying here</FormLabel>;
                  </div>;
                </FormItem>;
              )}
            />;

                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>End Date</FormLabel>;
                    <FormControl>;

              />;
            )}
          </div>;
        </div>;

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Description (Optional)</FormLabel>;
              <FormControl>;

                  {...field}
                />;
              </FormControl>;
              <FormMessage />;

          </Button>;
        </div>;
      </form>;
    </Form>;

