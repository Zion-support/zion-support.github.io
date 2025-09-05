 interface BudgetFieldsProps {
  form: UseFormReturn<FormValues>;
talent?: TalentProfile 
}form, talent 
}: BudgetFieldsProps) {
  return (<> <FormField control= {
  form.control 
}<FormItem> <FormLabel className="text-white" >Budget (Min) </FormLabel> <FormControl> <div className="relative" > <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" >$</span> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className="text-white" >Budget (Max) </FormLabel> <FormControl> <div className="relative" > <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" >$</span> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> </>) 
}