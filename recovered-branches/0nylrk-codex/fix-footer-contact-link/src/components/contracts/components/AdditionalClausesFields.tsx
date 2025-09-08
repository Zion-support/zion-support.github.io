








} from "@/components/ui/form";


FormDescription,
  FormDescription,;

} from "@/components/ui/form";


import { Checkbox } from "@/components/ui/checkbox";




      name="additionalClauses"

import { UseFormReturn } from "react-hook-form",;
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription ;
} from "@/components/ui/form",;
import { Checkbox } from "@/components/ui/checkbox",;
import { ContractFormValues } from "./ContractForm",;
;
interface AdditionalClausesFieldsProps {;
  form:UseFormReturn<ContractFormValues>;
}
;
export function AdditionalClausesFields({ form } AdditionalClausesFieldsProps) {;
  return (;
    <FormField;
      control={form.control}
      name="additionalClauses";






                  <div className="space - y-1 leading - none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'nda']);
                          :field.onChange(;
                              currentValues.filter((value) => value !== 'nda');
                            ),;
                      }}
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
              control={form.control}
              name="additionalClauses"

                      checked={field && field.value?.includes("ip")}

                              currentValues.filter((value) => value !== "ip"),



                          ? field && field.onChange([...currentValues, "ip"]);


              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("ip")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "ip"]);
                          : field.on_change (
                              current_values.filter ((value) => value !== "ip"),
            />
            <FormField
            />;
            <FormField;
              control={form.control}
              name="additionalClauses"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes("ip")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "ip"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "ip")
                              currentValues.filter((value) => value !== "ip"),
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');
                            );
                      }}
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

                            );
                      }}
                    />;
                  </FormControl>;

                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("termination")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "termination"]);
                          : field.on_change (
                              current_values.filter (
                                (value) => value !== "termination",
                              ),


                                (value) => value !== "termination",
                              ),



                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;

                        const currentValues = field.value || [];
                        return checked;'

                          ? field.onChange([...currentValues, 'termination']);

                          : field.onChange(;
                              currentValues.filter((value) => value !== 'termination');


                            );
                      }}
                    />;
                  </FormControl>;
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          :field.onChange(;
                              currentValues.filter((value) => value !== 'termination');
                            ),;
                      }}
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


            />;
            <FormField;

              control={form.control}
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox

                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;

                        const currentValues = field && field.value || [];
                        return checked;"





                                (value) => value !== "revisions",

                                (value) => value !== "revisions",
                              ),

                      checked={field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];



