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