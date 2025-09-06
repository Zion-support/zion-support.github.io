 export interface BasicInfoFormProps {
  resumeId?: string;
initialData?: Partial<BasicInfoFormData>;
onSave: (data: BasicInfoFormData) => void;
skills?: string[];
yearsExperience?: number;
onComplete?: () => void 
}export function BasicInfoForm ({
  resumeId;
initialData = {
  
};
onSave;
skills = [];
yearsExperience = 0;
onComplete 
}: BasicInfoFormProps) {
  const form = useForm<BasicInfoFormData> ({
  resolver: zodResolver (basicInfoSchema);
defaultValues: {
  fullName: "";
title: "";
email: "";
phone: "";
location: "";
website: "";
linkedin: "";
github: "";
hourlyRate: 0;
...initialData 
}
});
if (initialData) {
  Object.entries (initialData) .forEach ( ([key, value]) => {
  if (value !== undefined) {
  
}
}, [initialData, form]);
<div className=" pt-4 border-t border-gray-200"> <h3 className=" text-lg font-medium mb-4">Rate Information</h3> <RateOptimizationSection /> </div> </Card> <div className=" flex justify-end"> <Button type=" submit" >Save Basic Information</Button> </div> </form> </Form>) 
}