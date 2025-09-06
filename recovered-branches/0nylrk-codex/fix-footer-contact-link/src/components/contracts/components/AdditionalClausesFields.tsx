<<<<<<< HEAD



<<<<<<< HEAD

import { UseFormReturn } from "react-hook-form";

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;

=======

=======
import { UseFormReturn } from "react-hook-form";



import { UseFormReturn } from "react-hook-form";

import {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  FormField,
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/form";

=======
} from "@/components/ui/form";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
} from "@/components/ui/form";

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc






=======
=======

=======






  FormDescription,
  FormDescription,;
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function AdditionalClausesFields({
  form
}: AdditionalClausesFieldsProps) {
  return (
    <FormField


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { UseFormReturn } from "react-hook-form",
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription
} from "@/components/ui/form",
import { Checkbox } from "@/components/ui/checkbox",
import { ContractFormValues } from "./ContractForm",
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>
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
}
;
export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {;
  return (;
    <FormField;
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox

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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField
      control={form && form.control}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      name="additionalClauses"
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      render={() => (;
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
<<<<<<< HEAD
=======
import { UseFormReturn  } from './react - hook - form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components / ui / form';
import { Checkbox  } from '@/components / ui / checkbox';
import { ContractFormValues  } from './ContractForm';
interface AdditionalClausesFieldsProps {
  form: UseFormReturn < ContractFormValues>;
}
export /**
 * AdditionalClausesFields - Function description
 */
function AdditionalClausesFields() {
  return (
    <FormField;
      control={form.control}
      name="additional_clauses";
      render={() => (
        <FormItem>;
          <div className="mb - 4">;
            <FormLabel > Additional Clauses</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      control={form.control}
      name="additionalClauses"
      render={() => (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD

                      checked={field && field.value?.includes("nda")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "nda"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "nda"),;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
<<<<<<< HEAD
=======
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("nda")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "nda"]);
                          : field.on_change (
                              current_values.filter ((value) => value !== "nda"),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======

                      checked={field.value?.includes("nda")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda"),
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'nda');
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            />
            <FormField
            />;
            <FormField;
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              control={form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD

            />;


            <FormField
              control={form && form.control}
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            />;
            <FormField;

              control={form.control}
=======
            <FormField
              control={form && form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD
                      checked={field.value?.includes("ip")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "ip"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "ip")
                              currentValues.filter((value) => value !== "ip"),
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      checked={field && field.value?.includes("ip")}

                              currentValues.filter((value) => value !== "ip"),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
<<<<<<< HEAD
<<<<<<< HEAD

=======
                          ? field && field.onChange([...currentValues, "ip"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "ip"),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </FormItem>)}
            />;
            <FormField;
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
            />
            <FormField
            />;
            <FormField;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              control={form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD

            />;


            <FormField
              control={form && form.control}
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            />;
            <FormField;

              control={form.control}
=======
            <FormField
              control={form && form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD

                            );
                      }}
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "termination",;
                              ),;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      onCheckedChange={(checked) => {
                                (value) => value !== "termination"
                              )
                                (value) => value !== "termination",
                              ),
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "termination"]);
                          : field.on_change (
                              current_values.filter (
                                (value) => value !== "termination",
                              ),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                                (value) => value !== "termination",
                              ),

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
                      checked={field.value?.includes("termination")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "termination"])
                          : field.onChange(
                              currentValues.filter(
                                (value) => value !== "termination"
                              )
                                (value) => value !== "termination",
                              ),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'termination');
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            );
                      }}
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
            />;
            <FormField;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              control={form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD

            />;


            <FormField
              control={form && form.control}
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            />;
            <FormField;

              control={form.control}
=======
            <FormField
              control={form && form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

                                (value) => value !== "revisions"
                              )
                                (value) => value !== "revisions",
                              ),


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "revisions",;
                              ),;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
                                (value) => value !== "revisions",
                              ),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                                (value) => value !== "revisions",
                              ),

=======
=======
                                (value) => value !== "revisions",
                              ),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            );
                      }}
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
    />
    />;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<< HEAD

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;

=======
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD


=======
    />
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    />;
  );
                </FormItem>)}
            />;
          </div>;
        </FormItem>)}
    />);
                            );
                      }}
                    />;
                  </FormControl>;
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
}
<<<<<<< HEAD
=======
                </FormItem>;              )}
            />;
          </div>;
        </FormItem>;
      )}
    />;
  ),;}
 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues> 
}form 
}: AdditionalClausesFieldsProps) {
  return (<FormField control= {
  form.control 
}<FormLabel>Additional Clauses</FormLabel> <FormDescription> Select additional clauses to include in your contract </FormDescription> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField control= {
  form.control 
}/> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Confidentiality (NDA) </FormLabel> <FormDescription> Protect sensitive information </FormDescription> </div> </FormItem>) 
}/> <FormField /> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Intellectual Property Transfer </FormLabel> <FormDescription> Transfer ownership of work products </FormDescription> </div> </FormItem>) 
}/> <FormField /> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Termination Clause </FormLabel> <FormDescription> Define conditions for ending the contract </FormDescription> </div> </FormItem>) 
}/> <FormField /> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Revisions & Amendments </FormLabel> <FormDescription> Define how changes to the contract are handled </FormDescription> </div> </FormItem>) 
}/> </div> </FormItem>) 
}/>) 
}
    />
    />;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
