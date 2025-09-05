
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { UseFormReturn } from 'react-hook-form',;
import { CertificationFormValues } from './types',;
;
interface CertificationFormFieldsProps {;
  form:UseFormReturn<CertificationFormValues>;
}
;
export function CertificationFormFields({ form } CertificationFormFieldsProps) {;
  return (;
    <>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;
          control={form.control}
          name="name";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Certification Name</FormLabel>;
              <FormControl>;
                <Input placeholder="AWS Certified Solutions Architect, PMP, etc." {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
=======
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
                <Input placeholder=&quot;AWS Certified Solutions Architect, PMP, etc.&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          )}
        />;
;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name="issuing_organization";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Issuing Organization</FormLabel>;
              <FormControl>;
                <Input placeholder="Amazon Web Services, PMI, etc." {...field} />;
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
          name="issue_date";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Issue Date</FormLabel>;
              <FormControl>;
                <Input ;
                  type="date" ;
                  {...field}
                  value={field.value || ''}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
=======
          name=&quot;issuing_organization&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issuing Organization</FormLabel>
              <FormControl>
                <Input placeholder=&quot;Amazon Web Services, PMI, etc.&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <FormField
          control={form.control}
          name=&quot;issue_date&quot;
          render={({ field }) => (            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>
                <Input 
                  type=&quot;date&quot; 
                  {...field}
                  value={field.value || ''}                />
              </FormControl>
              <FormMessage />
            </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          )}
        />;
;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name="expiration_date";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Expiration Date (Optional)</FormLabel>;
              <FormControl>;
                <Input ;
                  type="date" ;
                  {...field}
                  value={field.value || ''}
                />;
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
          name="credential_id";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Credential ID (Optional)</FormLabel>;
              <FormControl>;
                <Input placeholder="ABC123XYZ" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
=======
          name=&quot;expiration_date&quot;
          render={({ field }) => (            <FormItem>
              <FormLabel>Expiration Date (Optional)</FormLabel>
              <FormControl>
                <Input 
                  type=&quot;date&quot; 
                  {...field}
                  value={field.value || ''}                />
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
                <Input placeholder=&quot;ABC123XYZ&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          )}
        />;
;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name="credential_url";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Credential URL (Optional)</FormLabel>;
              <FormControl>;
                <Input placeholder="https://www.credential.com/verify/abc123" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
      </div>;
    </>;
  ),;
=======
          name=&quot;credential_url&quot;
          render={({ field }) => (            <FormItem>
              <FormLabel>Credential window.URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder=&quot;https://www.credential.com/verify/abc123&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
