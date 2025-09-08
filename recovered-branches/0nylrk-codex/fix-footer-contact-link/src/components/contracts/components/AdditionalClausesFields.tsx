<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { UseFormReturn } from "react-hook-form";

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
<<<<<<< HEAD


=======
  FormDescription,;} from "@/components/ui/form";import { Checkbox } from "@/components/ui/checkbox";
>>>>>>> origin/cursor/delete-old-data-records-6bba
  FormField,
  FormItem,
  FormLabel,
  FormControl,

<<<<<<< HEAD


} from "@/components/ui/form";

=======
} from "@/components/ui/form";
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Checkbox } from "@/components/ui/checkbox";

import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}

<<<<<<< HEAD

FormDescription,
  FormDescription,;

} from "@/components/ui/form";


import { Checkbox } from "@/components/ui/checkbox";
=======
import { UseFormReturn } from "react-hook-form";

import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}
export function AdditionalClausesFields({
  form
}: AdditionalClausesFieldsProps) {
  return (
    <FormField

<<<<<<< HEAD


=======
import { UseFormReturn } from "react-hook-form",
import { 
>>>>>>> origin/cursor/delete-old-data-records-6bba
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
<<<<<<< HEAD

=======
  FormDescription 
} from "@/components/ui/form",
      name="additionalClauses"      render={() => (;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;

import { ContractFormValues } from "./ContractForm",;
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
;


export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField;
      control={form && form.control}
<<<<<<< HEAD

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

=======

"
      name="additionalClauses"

>>>>>>> origin/cursor/delete-old-data-records-6bba
      render={() => (;

        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
<<<<<<< HEAD
=======

      control={form.control}
      name="additionalClauses"
      render={() => (
>>>>>>> origin/cursor/delete-old-data-records-6bba


            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;


          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;

              control={form.control}"
              name="additional_clauses";
              render={({ field }) => (
                      onCheckedChange={(checked) => {}
                        const currentValues = field.value |[];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])

                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;"
                      checked={field.value?.includes ("nda")}
                      onCheckedChange={(checked) => {}
                        const current_values = field.value || [];
                        return checked;"
                          ? field.on_change ([...current_values, "nda"]);
                          : field.on_change ("
                              current_values.filter ((value) => value !== "nda"),

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      onCheckedChange={(checked) => {;

                        const currentValues = field.value || [];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange("
                              currentValues.filter((value) => value !== "nda"),

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;'
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'nda');

<<<<<<< HEAD

=======
                            );
                      }}
                    />
                            );
                      }
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

                            );
                      }
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Confidentiality (NDA)
                    </FormLabel>
                    <FormDescription>
                      Protect sensitive information;
                    </FormDescription>
                  </div>
                </FormItem>
              )}

            />

            <FormField
            />;
            <FormField;

              control={form.control});
                      }}
                    />;
                  </FormControl>;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
              control={form.control}
              name="additionalClauses"

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox

<<<<<<< HEAD
                      checked={field && field.value?.includes("ip")}

                              currentValues.filter((value) => value !== "ip"),


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
<<<<<<< HEAD

                          ? field && field.onChange([...currentValues, "ip"]);

=======


? field && field.onChange([...currentValues, "ip"]);
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "ip"),;
                </FormItem>)}
            />;
            <FormField;
<<<<<<< HEAD

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
=======


                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'ip');

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');


<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;
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
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'ip']);
                          :field.onChange(;
                              currentValues.filter((value) => value !== 'ip');
                            ),;
                      }}
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

            />;
            <FormField;

              control={form.control}
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;"
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "termination",;
                              ),;

<<<<<<< HEAD
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

=======
                                (value) => value !== "revisions",
                              ),

                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "revisions",;
                              ),;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
<<<<<<< HEAD



                                (value) => value !== "revisions",

                                (value) => value !== "revisions",
                              ),

                      checked={field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
=======
                                (value) => value !== "revisions",
                              ),                            );
import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {
  return (
    <FormField
      control = $2;
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'nda')
                            )
                      }
                    />
                  </FormControl>
                  <div className = $2;
                        return checked
                          ? field.onChange([...currentValues, "ip"])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'ip')
                            )
                      }
                    />
                  </FormControl>
                  <div className = $2;
                        return checked
                          ? field.onChange([...currentValues, "termination"])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'termination')
                            )
                      }
                    />
                  </FormControl>
                  <div className = $2;
                        return checked
                          ? field.onChange([...currentValues, "revisions"])
                          : field.onChange(


                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;'
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'revisions');
<<<<<<< HEAD



=======

                            );

                            );
                      }}
                    />;
                  </FormControl>;
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


                            );

                            );
                      }}
                    />;
                  </FormControl>;

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
