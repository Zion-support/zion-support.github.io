
<<<<<<< HEAD
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { TalentProfile } from "@/types/talent",
import { FormValues } from "./useHireRequestForm",
=======
import React from &quot;react&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { FormValues } from &quot;./useHireRequestForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface BudgetFieldsProps {
  form: UseFormReturn<FormValues>,
  talent?: TalentProfile
}

export function BudgetFields({ form, talent }: BudgetFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name=&quot;budgetMin&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Budget (Min)</FormLabel>
            <FormControl>
              <div className=&quot;relative&quot;>
                <span className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot;>$</span>
                <Input 
                  type=&quot;number&quot; 
                  className=&quot;pl-7 bg-zion-blue border-zion-blue-light text-white&quot; 
                  {...field} 
                />
              </div>
            </FormControl>
            <FormMessage className=&quot;text-red-400&quot; />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name=&quot;budgetMax&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Budget (Max)</FormLabel>
            <FormControl>
              <div className=&quot;relative&quot;>
                <span className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot;>$</span>
                <Input 
                  type=&quot;number&quot; 
                  className=&quot;pl-7 bg-zion-blue border-zion-blue-light text-white&quot; 
                  {...field} 
                />
              </div>
            </FormControl>
            <FormMessage className=&quot;text-red-400&quot; />
          </FormItem>
        )}
      />
    </>
  )
}
