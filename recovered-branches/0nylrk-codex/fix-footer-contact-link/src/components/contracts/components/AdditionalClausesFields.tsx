

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { UseFormReturn } from "react-hook-form";

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  FormDescription,;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f






export function AdditionalClausesFields({
  form
}: AdditionalClausesFieldsProps) {
  return (
    <FormField

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
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
=======

export function AdditionalClausesFields({};
  form;
}: AdditionalClausesFieldsProps) {}
  return (
    <FormField;
"
import { UseFormReturn } from "react-hook-form",
import {}
=======

import { UseFormReturn } from "react-hook-form",
import { 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
<<<<<<< HEAD
  FormDescription "
} from "@/components/ui/form","
import { Checkbox } from "@/components/ui/checkbox","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ContractFormValues } from "./ContractForm",
interface AdditionalClausesFieldsProps {}
  form: UseFormReturn<ContractFormValues>";
=======
  FormDescription 
} from "@/components/ui/form",
import { Checkbox } from "@/components/ui/checkbox",
import { ContractFormValues } from "./ContractForm",
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
<<<<<<< HEAD
  FormDescription;"
} from "@/components/ui/form",;"
import { Checkbox } from "@/components/ui/checkbox",;"
=======
  FormDescription;
} from "@/components/ui/form",;
import { Checkbox } from "@/components/ui/checkbox",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ContractFormValues } from "./ContractForm",;
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {;
  return (;
    <FormField;


      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField
      control={form && form.control}
      name="additionalClauses"
      render={() => (;
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
<<<<<<< HEAD
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox

<<<<<<< HEAD
=======
                      checked={field && field.value?.includes("nda")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "nda"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "nda"),;

          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
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


                      checked={field.value?.includes("nda")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda"),

                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'nda');


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


=======
export function AdditionalClausesFields() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
      name="additionalClauses"      render={() => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

                      checked={field && field.value?.includes("nda")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "nda"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "nda"),;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;


              control={form.control}"
              name="additional_clauses";
              render={({ field }) => (
                      onCheckedChange={(checked) => {}
                        const currentValues = field.value |[];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])
<<<<<<< HEAD
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
<<<<<<< HEAD
=======
=======
                          : field.onChange("
                              currentValues.filter((value) => value !== "nda")"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;'
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'nda');

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            />
            <FormField
            />;
            <FormField;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="space - y-1 leading-none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;              name="additionalClauses"
=======
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;

                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;

            />;


            <FormField
              control={form && form.control}

            />;
            <FormField;

              control={form.control}
            <FormField
              control={form && form.control}
              name="additionalClauses"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      checked={field.value?.includes("ip")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "ip"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "ip")
=======


                      checked={field && field.value?.includes("ip")}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                              currentValues.filter((value) => value !== "ip"),
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                </FormItem>)}
            />;
            <FormField;
<<<<<<< HEAD
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

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'ip');


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
<<<<<<< HEAD
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


=======
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;

<<<<<<< HEAD
=======
            />;


            <FormField
              control={form && form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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

<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                                (value) => value !== "termination",
                              ),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
                          : field.onChange(;
<<<<<<< HEAD
<<<<<<< HEAD
                              currentValues.filter((value) => value !== 'termination');
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'termination');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Termination Clause;
                    </FormLabel>
                    <FormDescription>
                      Define conditions for ending the contract;
=======
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Termination Clause
                    </FormLabel>
                    <FormDescription>
                      Define conditions for ending the contract
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
<<<<<<< HEAD
            <FormField;
            />;
            <FormField;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD


                    <FormDescription>;
=======
                              currentValues.filter((value) => value !== 'termination');                    <FormDescription>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                              currentValues.filter((value) => value !== 'termination');                    <FormDescription>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD
            <FormField
              control={form && form.control}
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;

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
<<<<<<< HEAD
<<<<<<< HEAD
            <FormField
              control={form && form.control}
=======

            <FormField;
              control={form && form.control}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              name="additionalClauses"
              render={({ field }) => (;"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
<<<<<<< HEAD
                    <Checkbox
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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


<<<<<<< HEAD
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
                                (value) => value !== "revisions",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                              ),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======



                </FormItem>)}
            />;
            <FormField;
              control={form.control}"
              name="additional_clauses";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                                (value) => value !== "revisions",
                              ),


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                              ),
                                (value) => value !== "revisions",
                              ),

                                (value) => value !== "revisions",
                              ),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
    />
    />;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

                            );
                      }}
                    />;
                  </FormControl>;

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
                      }}
                    />;
                  </FormControl>;
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
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
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
