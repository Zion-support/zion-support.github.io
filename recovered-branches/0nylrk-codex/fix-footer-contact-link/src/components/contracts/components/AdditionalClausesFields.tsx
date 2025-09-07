import { UseFormReturn } from "react-hook-form";

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
<<<<<<< HEAD
  FormDescription,;} from "@/components/ui/form";import { Checkbox } from "@/components/ui/checkbox";
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  FormField,
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from "@/components/ui/form";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Checkbox } from "@/components/ui/checkbox";

>>>>>>> origin/resolved-merge-conflicts
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}

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
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}
export function AdditionalClausesFields({
  form
}: AdditionalClausesFieldsProps) {
  return (
    <FormField

import { UseFormReturn } from "react-hook-form",
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
<<<<<<< HEAD
  FormDescription 
} from "@/components/ui/form",
      name="additionalClauses"      render={() => (;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  FormDescription 
} from "@/components/ui/form",
import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>
}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
      control={form.control}
      name="additionalClauses"
      render={() => (
<<<<<<< HEAD
=======
        <FormItem>
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
              render={({ field }) => (

                            );
                      }}
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

                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox

      control={form.control}
<<<<<<< HEAD
=======
=======
export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {;
  return (;
    <FormField;
<<<<<<< HEAD
      control={form.control}
      name="additionalClauses"
      render={() => (
        <FormItem>
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
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      control={form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField;
      control={form && form.control}
<<<<<<< HEAD
"
      name="additionalClauses"

=======
<<<<<<< HEAD
"
      name="additionalClauses"

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      render={() => (;

        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      control={form.control}
      name="additionalClauses"
      render={() => (

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;

<<<<<<< HEAD
                      checked={field && field.value?.includes("nda")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "nda"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "nda"),;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
            <FormField;                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda"),
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                      checked={field.value?.includes("nda")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      onCheckedChange={(checked) => {;

                        const currentValues = field.value || [];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange("
                              currentValues.filter((value) => value !== "nda"),
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;'
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'nda');
<<<<<<< HEAD

                            );
                      }}
                    />
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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

                            );
<<<<<<< HEAD
                      }
=======
                      }}
                    />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
                    />;
                  </FormControl>;

<<<<<<< HEAD
                  <div className="space - y-1 leading-none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;              name="additionalClauses"
=======
<<<<<<< HEAD
=======
=======
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

            />;
            <FormField;

              control={form.control}
              name="additionalClauses"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD
=======
<<<<<<< HEAD

                              currentValues.filter((value) => value !== "ip"),

                      checked={field && field.value?.includes("ip")}
"
                              currentValues.filter((value) => value !== "ip"),

=======
<<<<<<< HEAD

                              currentValues.filter((value) => value !== "ip"),

                      checked={field && field.value?.includes("ip")}
"
                              currentValues.filter((value) => value !== "ip"),

=======
>>>>>>> origin/resolved-merge-conflicts
                      checked={field && field.value?.includes("ip")}

                              currentValues.filter((value) => value !== "ip"),

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
<<<<<<< HEAD
                            );
                      }
=======
<<<<<<< HEAD

? field && field.onChange([...currentValues, "ip"]);
=======
<<<<<<< HEAD

? field && field.onChange([...currentValues, "ip"]);
=======
                          ? field && field.onChange([...currentValues, "ip"]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "ip"),;
                </FormItem>)}
            />;
            <FormField;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');

<<<<<<< HEAD
=======
<<<<<<< HEAD
                            );
                      }}
                    />
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Intellectual Property Transfer;
                    </FormLabel>
                    <FormDescription>
                      Transfer ownership of work products;
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField;
            />;
            <FormField;

              control={form.control});
                      }}
                    />;
                  </FormControl>;

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                            );
                      }}
>>>>>>> origin/resolved-merge-conflicts
                    />
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Intellectual Property Transfer;
                    </FormLabel>
                    <FormDescription>
                      Transfer ownership of work products;
                    </FormDescription>
                  </div>
                </FormItem>
              )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            />
            <FormField;
            />;
            <FormField;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              control={form.control});
                      }}
                    />;
                  </FormControl>;
<<<<<<< HEAD

                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;"
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "termination",;
                              ),;

                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
<<<<<<< HEAD
                        return checked;
=======
                        const currentValues = field.value || [];
                        return checked;'
>>>>>>> origin/chore/fix-lint-and-merge
                          ? field.onChange([...currentValues, 'termination']);

              control={form.control}

                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;

                                (value) => value !== "revisions",
                              ),

                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
<<<<<<< HEAD
                        return checked;
=======
                        const currentValues = field && field.value || [];
                        return checked;"
>>>>>>> origin/chore/fix-lint-and-merge
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "revisions",;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;"
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "termination",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                              ),;
<<<<<<< HEAD

=======
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621

                                (value) => value !== "termination",
                              ),

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            />
            <FormField
            />;
            <FormField;

                            );
                      }
                    />;
                  </FormControl>;

                  <div className="space - y-1 leading-none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
                                (value) => value !== "termination",
                              ),

                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'termination');                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD
            <FormField
              control={form && form.control}
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
                                (value) => value !== "revisions",
                              ),

=======
>>>>>>> origin/resolved-merge-conflicts
            />;
            <FormField;

              control={form.control}
            <FormField
              control={form && form.control}
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox

                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "revisions",;
                              ),;

                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
                                (value) => value !== "revisions",
                              ),                            );
import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>
}

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
<<<<<<< HEAD
                              currentValues.filter((value) => value !== 'revisions')
                            )
                      }
=======
                              currentValues.filter(
                                (value) => value !== "revisions"
                              )
                                (value) => value !== "revisions",
                              ),

<<<<<<< HEAD
=======
=======
                              ),
                                (value) => value !== "revisions",
                              ),

<<<<<<< HEAD
                      checked={field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];

                        return checked
                          ? field.onChange([...currentValues, "revisions"])
                          : field.onChange(
                              currentValues.filter(
                                (value) => value !== "revisions"
                              )
                                (value) => value !== "revisions",
                              ),
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;'
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'revisions');
<<<<<<< HEAD

                            );

                            );
                      }}
                    />;
                  </FormControl>;
=======
<<<<<<< HEAD
                            );
                      }}
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
                            );

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
                  <div className="space - y-1 leading-none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
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
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          :field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');
                            ),;
                      }}
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>;
                      Revisions & Amendments;
                    </FormLabel>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;

    />;
  );
                </FormItem>)}
            />;
          </div>;
        </FormItem>)}
    />);
                            );
                      }
                    />;
                  </FormControl>;
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
}
    />
<<<<<<< HEAD
  )
}
=======
    />;
  );
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
