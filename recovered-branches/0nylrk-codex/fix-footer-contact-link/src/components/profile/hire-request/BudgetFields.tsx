
import React from "react";

interface BudgetFieldsProps {_form: UseFormReturn<FormValues>;
  talent?: TalentProfile;}

export function BudgetFields(_{_form, _talent}: BudgetFieldsProps) {_return (_<>
      <FormField
        control={form.control}
        name="budgetMin"
        render={_({ field}) => (
          <FormItem>
            <FormLabel className="text-white">Budget (Min)</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                <Input 
                  type="number" 
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white" 
                  {_...field} 
                />
              </div>
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
      
      <FormField
        control={_form.control}
        name="budgetMax"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel className="text-white">Budget (Max)</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                <Input 
                  type="number" 
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white" 
                  {_...field} 
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
