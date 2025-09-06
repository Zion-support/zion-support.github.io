import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
<<<<<<< HEAD
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
=======
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TalentProfile } from "@/types/talent";
import { FormValues } from "./useHireRequestForm";
interface BudgetFieldsProps {
  form: UseFormReturn<FormValues>;
  talent?: TalentProfile;
}

export function BudgetFields(): any ({ form, talent }: BudgetFieldsProps) {;
  return (
    <>;
      <FormField
        control={form && form.control}
        name="budgetMin"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Budget (Min)</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">
                  $
                </span>
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
        name="budget_min";

        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Budget (Max)</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">
                  $
                </span>
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
;

<<<<<<< HEAD
  form: UseFormReturn<FormValues>;
  talent?: TalentProfile;
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function BudgetFields(): any ({ form, talent }: BudgetFieldsProps) {;
  form: UseFormReturn<FormValues>;
  talent?: TalentProfile;
}

export function BudgetFields(): any ({ form, talent }: BudgetFieldsProps) {;
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
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">
                  $
                </span>
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
  )
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
