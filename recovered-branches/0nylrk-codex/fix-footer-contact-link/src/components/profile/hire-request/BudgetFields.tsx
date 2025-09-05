
<<<<<<< HEAD
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
=======
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { TalentProfile } from "@/types/talent",;
import { FormValues } from "./useHireRequestForm",;
interface BudgetFieldsProps {;
  form: UseFormReturn<FormValues>;
  talent?: TalentProfile;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function BudgetFields({ form, talent }: BudgetFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
<<<<<<< HEAD
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
=======
        name="budgetMin";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Budget (Min)</FormLabel>;
            <FormControl>;
              <div className="relative">;
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
                <Input;
                  type="number";
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white";
                  {...field} ;
                />;
              </div>;
            </FormControl>;
            <FormMessage className="text-red-400" />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={form.control}
<<<<<<< HEAD
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
=======
        name="budgetMax";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Budget (Max)</FormLabel>;
            <FormControl>;
              <div className="relative">;
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
                <Input;
                  type="number";
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white";
                  {...field} ;
                />;
              </div>;
            </FormControl>;
            <FormMessage className="text-red-400" />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
    </>;
  );
}
;