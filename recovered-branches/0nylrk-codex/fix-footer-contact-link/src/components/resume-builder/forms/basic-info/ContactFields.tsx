 interface ContactFieldsProps {
  control: Control<BasicInfoFormData> 
}export function ContactFields ({
  control 
}: ContactFieldsProps) {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField control= {
  control 
}name="location" render= {
  ({
  field 
}) => (<FormItem> <FormLabel>Location</FormLabel> <FormControl> <Input placeholder="San Francisco, CA" {
  ...field 
}/> 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div>) 
}