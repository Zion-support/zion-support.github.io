

interface CertificationFormFieldsProps {_form: UseFormReturn<CertificationFormValues>;}

export function CertificationFormFields(_{_form}: CertificationFormFieldsProps) {_return (_<>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={_({ field}) => (
            <FormItem>
              <FormLabel>Certification Name</FormLabel>
              <FormControl>
                <Input placeholder="AWS Certified Solutions Architect, PMP, etc." {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={_form.control}
          name="issuing_organization"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel>Issuing Organization</FormLabel>
              <FormControl>
                <Input placeholder="Amazon Web Services, PMI, etc." {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={_form.control}
          name="issue_date"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  {_...field}
                  value={_field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={_form.control}
          name="expiration_date"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel>Expiration Date (Optional)</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  {_...field}
                  value={_field.value || ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={_form.control}
          name="credential_id"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel>Credential ID (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="ABC123XYZ" {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={_form.control}
          name="credential_url"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel>Credential window.URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://www.credential.com/verify/abc123" {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
