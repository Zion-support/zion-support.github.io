
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { TalentProfile } from "@/types/talent",
import { FormValues } from "./useHireRequestForm",interface BudgetFieldsProps {
  form: UseFormReturn<FormValues>,
  talent?: TalentProfile
}
import React from "react";

interface BudgetFieldsProps {_form: UseFormReturn<FormValues>;
  talent?: TalentProfile;}

export function BudgetFields(_{_form, _talent}: BudgetFieldsProps) {_return (_<>
      <FormField
        control={form.control}
        name=&quot;budgetMin&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Budget (Min)</FormLabel>
            <FormControl>
              <div className=&quot;relative&quot;>
                <span className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot;>$</span>
                <Input 
                  type=&quot;number&quot; 
                  className=&quot;pl-7 bg-zion-blue border-zion-blue-light text-white&quot; 
                  {...field}                 />
              </div>
            </FormControl>
            <FormMessage className=&quot;text-red-400&quot; />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name=&quot;budgetMax&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Budget (Max)</FormLabel>
            <FormControl>
              <div className=&quot;relative&quot;>
                <span className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot;>$</span>
                <Input 
                  type=&quot;number&quot; 
                  className=&quot;pl-7 bg-zion-blue border-zion-blue-light text-white&quot; 
                  {...field}                 />
              </div>
            </FormControl>
            <FormMessage className=&quot;text-red-400&quot; />
          </FormItem>
        )}
      />
    </>
  )
}
