
import React from "react";
import { UseFormReturn } from "react-hook-form";
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
=======
import { FormFieldFormItemFormLabelFormControlFormMessage } from "@/components/ui/form";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { Input } from "@/components/ui/input";
import { TalentProfile } from "@/types/talent";
import { FormValues } from "./useHireRequestForm";

interface BudgetFieldsProps {
  form: UseFormReturn<FormValues>;
  talent?: TalentProfile;
}

<<<<<<< HEAD
export function BudgetFields({ form, talent }: BudgetFieldsProps) {
=======
export function BudgetFields({ formtalent }: BudgetFieldsProps) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  return (
    <>
      <FormField
        control={form.control}
        name="budgetMin"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Budget (Min)</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                <Input 
                  type="number" 
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white" 
                  {...field} 
                />
              </div>
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="budgetMax"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Budget (Max)</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                <Input 
                  type="number" 
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white" 
                  {...field} 
                />
              </div>
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
    </>
  );
}
