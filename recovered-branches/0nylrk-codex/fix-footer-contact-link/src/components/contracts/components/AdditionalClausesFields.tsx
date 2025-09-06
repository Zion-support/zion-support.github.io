


  FormField,
  FormItem,
  FormLabel,
  FormControl

} from "@/components/ui/form";


import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}


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

      render={() => (;
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;

import { UseFormReturn  } from './react - hook - form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription
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



            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;


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



                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda"),


                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'nda');


                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;


              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox



                      checked={field && field.value?.includes("ip")}

                              currentValues.filter((value) => value !== "ip"),

                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;

                          ? field && field.onChange([...currentValues, "ip"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "ip"),;


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


                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;


              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox


                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "termination",;
                              ),;


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


                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;


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
                              ),

                                (value) => value !== "revisions",
                              ),


                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');


