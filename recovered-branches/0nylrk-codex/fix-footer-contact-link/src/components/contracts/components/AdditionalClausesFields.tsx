
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
<<<<<<< HEAD
<<<<<<< HEAD
  FormDescription,;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  FormDescription,;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  FormField,
  FormItem,
  FormLabel,
  FormControl,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
=======
  FormDescription,;} from "@/components/ui/form";import { Checkbox } from "@/components/ui/checkbox";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  FormDescription,;} from "@/components/ui/form";import { Checkbox } from "@/components/ui/checkbox";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

} from "@/components/ui/form";

"
import { Checkbox } from "@/components/ui/checkbox";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
} from "@/components/ui/form";

} from "@/components/ui/form";
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { UseFormReturn } from "react-hook-form";

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

FormDescription,
  FormDescription,;
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

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
FormDescription "
} from "@/components/ui/form","
import { Checkbox } from "@/components/ui/checkbox","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ContractFormValues } from "./ContractForm",
interface AdditionalClausesFieldsProps {}
  form: UseFormReturn<ContractFormValues>";
import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
FormDescription;"
} from "@/components/ui/form",;"
import { Checkbox } from "@/components/ui/checkbox",;"
import { ContractFormValues } from "./ContractForm",;
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
;
<<<<<<< HEAD
export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {;
  return (;
    <FormField;
<<<<<<< HEAD
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField;
      control={form && form.control}
"
      name="additionalClauses"

      render={() => (;

=======
      name="additionalClauses"      render={() => (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
      control={form.control}
      name="additionalClauses"
      render={() => (
=======
        <FormItem>;"
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;

      control={form.control}"
      name="additionalClauses"
      render={() => (

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;
checked={field && field.value?.includes("nda")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "nda"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "nda"),;
<<<<<<< HEAD
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;

              control={form.control}"
              name="additional_clauses";
              render={({ field }) => (
                      onCheckedChange={(checked) => {}
                        const currentValues = field.value |[];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])
: field.onChange(
                              currentValues.filter((value) => value !== "nda")
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

checked={field.value?.includes("nda")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      onCheckedChange={(checked) => {;
=======
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
            <FormField;                      onCheckedChange={(checked) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
            <FormField;                      onCheckedChange={(checked) => {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        const currentValues = field.value || [];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange("
                              currentValues.filter((value) => value !== "nda"),
<<<<<<< HEAD
<<<<<<< HEAD

                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;'
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'nda');

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                            );
                      }}
                    />
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

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            />
            <FormField
            />;
            <FormField;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              control={form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            );
                      }}
                    />;
                  </FormControl>;

<div className="space - y-1 leading-none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;

            />;
            <FormField;

              control={form.control}

            <FormField;
              control={form && form.control}
"
              name="additionalClauses"
              render={({ field }) => (;"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      checked={field && field.value?.includes("ip")}
"
                              currentValues.filter((value) => value !== "ip"),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

? field && field.onChange([...currentValues, "ip"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "ip"),;
                </FormItem>)}
            />;
            <FormField;
control={form.control}"
              name="additional_clauses";
              render={({ field }) => ("
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;"
                      checked={field.value?.includes ("ip")}
                      onCheckedChange={(checked) => {}
                        const current_values = field.value || [];
                        return checked;"
                          ? field.on_change ([...current_values, "ip"]);
                          : field.on_change ("
                              current_values.filter ((value) => value !== "ip"),
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'ip');

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            />
=======
/>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              control={form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            );
                      }}
                    />;
                  </FormControl>;

<div className="space - y-1 leading-none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;

            />;
            <FormField;

              control={form.control}

            <FormField;
              control={form && form.control}
"
              name="additionalClauses"
render={({ field }) => (;"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;"
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "termination",;
                              ),;

</FormItem>)}
            />;
            <FormField;
              control={form.control}"
              name="additional_clauses";
              render={({ field }) => ("
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;"
                      checked={field.value?.includes ("termination")}

                      onCheckedChange={(checked) => {"
                                (value) => value !== "termination"
                              )"
                                (value) => value !== "termination",
                              ),
                        const current_values = field.value || [];
                        return checked;"
                          ? field.on_change ([...current_values, "termination"]);
                          : field.on_change (
                              current_values.filter ("
                                (value) => value !== "termination",
                              ),

"
                                (value) => value !== "termination",
                              ),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                                (value) => value !== "termination",
                              ),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;'
                          ? field.onChange([...currentValues, 'termination']);
: field.onChange(;
<<<<<<< HEAD
                              currentValues.filter((value) => value !== 'termination');
<<<<<<< HEAD
=======
                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "termination",;
                              ),;

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

                                (value) => value !== "termination",
                              ),

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
                                (value) => value !== "termination",
                              ),

                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'termination');

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            );
                      }}
                    />
</FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Termination Clause;
                    </FormLabel>
                    <FormDescription>
                      Define conditions for ending the contract;
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
<FormField;
            />;
            <FormField;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              control={form.control}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <FormField
            />;
            <FormField;

control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            );
                      }}
                    />;
                  </FormControl>;

<FormDescription>;
=======
                              currentValues.filter((value) => value !== 'termination');                    <FormDescription>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
<FormField
              control={form && form.control}
=======
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;

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

            <FormField
              control={form && form.control}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            />;
            <FormField;

              control={form.control}
<FormField
              control={form && form.control}
              name="additionalClauses"
              render={({ field }) => (;"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
<Checkbox
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    <Checkbox;
"
                                (value) => value !== "revisions"
                              )"
=======
            <FormField
              control={form && form.control}
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox

                                (value) => value !== "revisions"
                              )
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                (value) => value !== "revisions",
                              ),

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;"
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "revisions",;
                              ),;

<<<<<<< HEAD
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";

                                (value) => value !== "revisions",
<<<<<<< HEAD
                              ),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;'
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'revisions');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                            );
=======
                              ),                            );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                              ),                            );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');

                            );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      }}
                    />
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Revisions & Amendments;
                    </FormLabel>
                    <FormDescription>
                      Define how changes to the contract are handled;
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </FormItem>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    />
    />;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}

                            );
                      }}
                    />;
                  </FormControl>;

                  <div className="space - y-1 leading-none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;

/>
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
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  FormDescription,;

  FormField,
  FormItem,
  FormLabel,
  FormControl,
"
} from "@/components/ui/form";""
import { Checkbox } from "@/components/ui/checkbox";""
import { ContractFormValues } from "./ContractForm";"
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;

    <FormField;"
import { UseFormReturn } from "react-hook-form","
import {
  // TODO: Implement
}
  FormDescription;"
} from "@/components/ui/form",""
import { Checkbox } from "@/components/ui/checkbox",""
import { ContractFormValues } from "./ContractForm","
interface AdditionalClausesFieldsProps {
  // TODO: Implement
  form: UseFormReturn<ContractFormValues>

    <FormField;

      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;)
}: AdditionalClausesFieldsProps) {;
  return (
      control={form && form.control}"
      name="additionalClauses"")
      render={() => (;

        <FormItem>;
          <div className="mb-4">;"
</div>
            <FormLabel>Additional Clauses;
            <FormDescription>;

            ;
          </div>;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
              control={form.control}"
              name="additional_clauses";")
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;"

                  <FormControl>;

                    <Checkbox;)"
                      checked={field.value?.includes ("nda")}"
                      onCheckedChange={(checked) => {

                  <div className="space-y-1 leading-none">"
                    <FormLabel>

                    <FormDescription>

            />;

                            );
                      }}

                  ;"
                  <div className="space - y-1 leading - none">;"
                    <FormLabel > Confidentiality (NDA);

                  </div>;
              control={form && form.control}

              name="additionalClauses""
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"

                      checked={field && field.value?.includes("ip")}""
                              currentValues.filter((value) => value !== "ip"),"

                )}
              name="additional_clauses";"

                      checked={field.value?.includes ("ip")}"

                <FormItem className="flex flex-row items-start space-x-3 space-y-0">"

                  <FormControl>

                      checked={field.value?.includes("ip")}"

                    <FormLabel > Intellectual Property Transfer;

                      checked={field && field.value?.includes("termination")}"
                      onCheckedChange={(checked) => {;

                      checked={field.value?.includes ("termination")}"

                    <FormLabel > Termination Clause;

                                (value) => value !== "revisions""

              name="additional_clauses";""
                                (value) => value !== "revisions","

                    <FormLabel > Revisions & Amendments;

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
