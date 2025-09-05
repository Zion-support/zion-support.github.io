
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription} from "@/components/ui/form";

interface AdditionalClausesFieldsProps {_form: UseFormReturn<ContractFormValues>;}

export function AdditionalClausesFields(_{_form}: AdditionalClausesFieldsProps) {_return (_<FormField
      control={form.control}
      name="additionalClauses"
      render={_() => (_<FormItem>
          <div className="mb-4">
            <FormLabel>Additional Clauses</FormLabel>
            <FormDescription>
              Select additional clauses to include in your contract
            </FormDescription>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="additionalClauses"
              render={_({ field}) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={_field.value?.includes('nda')}
                      onCheckedChange={_(_checked) => {
                        const _currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, _'nda'])
                          : field.onChange(_currentValues.filter((value) => value !== 'nda')
                            );}}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
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
              control={_form.control}
              name="additionalClauses"
              render={_(_{ field}) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={_field.value?.includes('ip')}
                      onCheckedChange={_(_checked) => {
                        const _currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, _'ip'])
                          : field.onChange(_currentValues.filter((value) => value !== 'ip')
                            );}}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
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
              control={_form.control}
              name="additionalClauses"
              render={_(_{ field}) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={_field.value?.includes('termination')}
                      onCheckedChange={_(_checked) => {
                        const _currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, _'termination'])
                          : field.onChange(_currentValues.filter((value) => value !== 'termination')
                            );}}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
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
              control={_form.control}
              name="additionalClauses"
              render={_(_{ field}) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={_field.value?.includes('revisions')}
                      onCheckedChange={_(_checked) => {
                        const _currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, _'revisions'])
                          : field.onChange(_currentValues.filter((value) => value !== 'revisions')
                            );}}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
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
