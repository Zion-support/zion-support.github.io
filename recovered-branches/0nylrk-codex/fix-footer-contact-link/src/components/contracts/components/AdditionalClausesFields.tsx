<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";

import {

  FormDescription,;

=======



import { UseFormReturn } from "react-hook-form";

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

=======

=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { UseFormReturn } from "react-hook-form";

import {
<<<<<<< HEAD
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  FormField,
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

<<<<<<< HEAD
=======





=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  FormDescription,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  FormDescription,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
export function AdditionalClausesFields({
  form
}: AdditionalClausesFieldsProps) {
  return (
    <FormField
<<<<<<< HEAD

=======

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      control={form.control}
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField
      control={form && form.control}
      name="additionalClauses"
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      render={() => (;
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                      checked={field && field.value?.includes("nda")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "nda"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "nda"),;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======
<<<<<<< HEAD
                      checked={field.value?.includes("nda")}
<<<<<<< HEAD
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda"),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'nda');
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;

========
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

            />;


========
<<<<<<< HEAD
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
            <FormField
              control={form && form.control}
=======

            />;
            <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                      checked={field && field.value?.includes("ip")}
=======

                              currentValues.filter((value) => value !== "ip"),

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

========
                          ? field && field.onChange([...currentValues, "ip"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "ip"),;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

=======
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');

<<<<<<< HEAD
=======
<<<<<<< HEAD
            />
            <FormField
=======
            />;
            <FormField;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              control={form.control}
              name="additionalClauses"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
<<<<<<< HEAD
                      checked={field.value?.includes("ip")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "ip"])
                          : field.onChange(
<<<<<<< HEAD
                              currentValues.filter((value) => value !== "ip")
=======
                              currentValues.filter((value) => value !== "ip"),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;

========
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

            />;


========
<<<<<<< HEAD
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
            <FormField
              control={form && form.control}
=======

            />;
            <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "termination",;
                              ),;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

                                (value) => value !== "termination",
                              ),

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            />
            <FormField
=======
            />;
            <FormField;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              control={form.control}
              name="additionalClauses"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
<<<<<<< HEAD
                      checked={field.value?.includes("termination")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "termination"])
                          : field.onChange(
                              currentValues.filter(
<<<<<<< HEAD
                                (value) => value !== "termination"
                              )
=======
                                (value) => value !== "termination",
                              ),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'termination');
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
<<<<<<< HEAD
            />
            <FormField
=======
            />;
            <FormField;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              control={form.control}
              name="additionalClauses"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
<<<<<<< HEAD

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;

========
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

            />;


========
<<<<<<< HEAD
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
            <FormField
              control={form && form.control}
=======

            />;
            <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "revisions",;
                              ),;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("revisions")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "revisions"]);
                          : field.on_change (
                              current_values.filter (
                                (value) => value !== "revisions",
                              ),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                                (value) => value !== "revisions",
                              ),

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                      checked={field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];

                        return checked
                          ? field.onChange([...currentValues, "revisions"])
                          : field.onChange(
                              currentValues.filter(
<<<<<<< HEAD
                                (value) => value !== "revisions"
                              )
=======
                                (value) => value !== "revisions",
                              ),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                            );
                      }}
                    />;
                  </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx

                  <div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;

========
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx


    />;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/AdditionalClausesFields.tsx
                </FormItem>)}
            />;
          </div>;
        </FormItem>)}
    />);
}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
    />
=======
    />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
