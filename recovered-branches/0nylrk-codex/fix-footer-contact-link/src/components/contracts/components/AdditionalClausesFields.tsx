
<<<<<<< HEAD
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form",
=======
import { UseFormReturn } from &quot;react-hook-form&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription 
<<<<<<< HEAD
} from "@/components/ui/form",
import { Checkbox } from "@/components/ui/checkbox",
import { ContractFormValues } from "./ContractForm",
=======
} from &quot;@/components/ui/form&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { ContractFormValues } from &quot;./ContractForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>
}
=======
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription} from "@/components/ui/form";

interface AdditionalClausesFieldsProps {_form: UseFormReturn<ContractFormValues>;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function AdditionalClausesFields(_{_form}: AdditionalClausesFieldsProps) {_return (_<FormField
      control={form.control}
<<<<<<< HEAD
      name=&quot;additionalClauses&quot;
      render={() => (
        <FormItem>
          <div className=&quot;mb-4&quot;>
=======
      name="additionalClauses"
      render={_() => (_<FormItem>
          <div className="mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormLabel>Additional Clauses</FormLabel>
            <FormDescription>
              Select additional clauses to include in your contract
            </FormDescription>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
              control={form.control}
<<<<<<< HEAD
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [],
                        return checked
                          ? field.onChange([...currentValues, 'nda'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'nda')
                            )
                      }}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              control={form.control}
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [],
                        return checked
                          ? field.onChange([...currentValues, 'ip'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'ip')
                            )
                      }}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              control={form.control}
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [],
                        return checked
                          ? field.onChange([...currentValues, 'termination'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'termination')
                            )
                      }}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              control={form.control}
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [],
                        return checked
                          ? field.onChange([...currentValues, 'revisions'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'revisions')
                            )
                      }}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
