
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',
import { Input } from '@/components/ui/input',
import { UseFormReturn } from 'react-hook-form',
import { CertificationFormValues } from './types',
interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>
}

export function CertificationFormFields({ form }: CertificationFormFieldsProps) {
  return (
    <>
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <FormField
          control={form.control}
          name=&quot;name&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certification Name</FormLabel>
              <FormControl>
                <Input placeholder=&quot;AWS Certified Solutions Architect, PMP, etc.&quot; {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=&quot;issuing_organization&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issuing Organization</FormLabel>
              <FormControl>
                <Input placeholder=&quot;Amazon Web Services, PMI, etc.&quot; {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <FormField
          control={form.control}
          name=&quot;issue_date&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
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

        <FormField
          control={form.control}
          name=&quot;expiration_date&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiration Date (Optional)</FormLabel>
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
      </div>

      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <FormField
          control={form.control}
          name=&quot;credential_id&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credential ID (Optional)</FormLabel>
              <FormControl>
                <Input placeholder=&quot;ABC123XYZ&quot; {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=&quot;credential_url&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credential URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder=&quot;https://www.credential.com/verify/abc123&quot; {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}
