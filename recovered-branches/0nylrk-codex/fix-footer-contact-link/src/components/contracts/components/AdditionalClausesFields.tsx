
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
=======
import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription;
} from "@/components/ui/form",;
import { Checkbox } from "@/components/ui/checkbox",;
import { ContractFormValues } from "./ContractForm",;
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {;
  return (;
    <FormField;
      control={form.control}
<<<<<<< HEAD
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
=======
      name="additionalClauses";
      render={() => (;
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'nda');
                            );
                      }}
<<<<<<< HEAD
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
=======
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>;
                      Confidentiality (NDA);
                    </FormLabel>;
                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;
                </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            />;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
=======
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');
                            );
                      }}
<<<<<<< HEAD
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
=======
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>;
                      Intellectual Property Transfer;
                    </FormLabel>;
                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;
                </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            />;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
=======
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'termination');
                            );
                      }}
<<<<<<< HEAD
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
=======
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>;
                      Termination Clause;
                    </FormLabel>;
                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
                </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            />;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;additionalClauses&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-row items-start space-x-3 space-y-0&quot;>
                  <FormControl>
                    <Checkbox
=======
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');
                            );
                      }}
<<<<<<< HEAD
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
=======
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>;
                      Revisions & Amendments;
                    </FormLabel>;
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
                </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            />;
          </div>;
        </FormItem>;
      )}
    />;
  );
}
;