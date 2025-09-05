
<<<<<<< HEAD
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { TalentProfile } from "@/types/talent",;
import { FormValues } from "./useHireRequestForm",;
;
interface BudgetFieldsProps {;
  form:UseFormReturn<FormValues>,;
  talent?:TalentProfile;
}
;
export function BudgetFields({ form, talent } BudgetFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
        name="budgetMin";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Budget (Min)</FormLabel>;
            <FormControl>;
              <div className="relative">;
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
                <Input ;
                  type="number" ;
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white" ;
                  {...field} ;
                />;
              </div>;
            </FormControl>;
            <FormMessage className="text-red-400" />;
          </FormItem>;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      />;
      ;
      <FormField;
        control={form.control}
<<<<<<< HEAD
        name="budgetMax";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Budget (Max)</FormLabel>;
            <FormControl>;
              <div className="relative">;
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
                <Input ;
                  type="number" ;
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white" ;
                  {...field} ;
                />;
              </div>;
            </FormControl>;
            <FormMessage className="text-red-400" />;
          </FormItem>;
        )}
      />;
    </>;
  ),;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
