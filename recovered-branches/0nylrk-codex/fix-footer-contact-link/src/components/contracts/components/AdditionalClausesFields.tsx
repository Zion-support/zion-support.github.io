
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription 
} from &quot;@/components/ui/form&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { ContractFormValues } from &quot;./ContractForm&quot;;

interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}

export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {
  return (
    <FormField
      control={form.control}
      name=&quot;additionalClauses&quot;
      render={() => (
        <FormItem>
          <div className=&quot;mb-4&quot;>
            <FormLabel>Additional Clauses</FormLabel>
            <FormDescription>
              Select additional clauses to include in your contract
            </FormDescription>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
              control={form.control}
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'nda'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'nda')
                            );
                      }}
                    />
                  </FormControl>
                  <div className=&quot;space-y-1 leading-none&quot;>
                    <FormLabel>
                      Confidentiality (NDA)
                    </FormLabel>
                    <FormDescription>
                      Protect sensitive information
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'ip'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'ip')
                            );
                      }}
                    />
                  </FormControl>
                  <div className=&quot;space-y-1 leading-none&quot;>
                    <FormLabel>
                      Intellectual Property Transfer
                    </FormLabel>
                    <FormDescription>
                      Transfer ownership of work products
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'termination'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'termination')
                            );
                      }}
                    />
                  </FormControl>
                  <div className=&quot;space-y-1 leading-none&quot;>
                    <FormLabel>
                      Termination Clause
                    </FormLabel>
                    <FormDescription>
                      Define conditions for ending the contract
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'revisions'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'revisions')
                            );
                      }}
                    />
                  </FormControl>
                  <div className=&quot;space-y-1 leading-none&quot;>
                    <FormLabel>
                      Revisions & Amendments
                    </FormLabel>
                    <FormDescription>
                      Define how changes to the contract are handled
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </FormItem>
      )}
    />
  );
}
