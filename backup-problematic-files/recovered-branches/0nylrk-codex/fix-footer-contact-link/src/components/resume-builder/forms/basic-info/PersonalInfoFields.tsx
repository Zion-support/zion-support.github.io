
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema",;
;
interface PersonalInfoFieldsProps {;
  control:Control<BasicInfoFormData>;
}
;
export function PersonalInfoFields({ control } PersonalInfoFieldsProps) {;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField;
        control={control}
        name="fullName";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Full Name</FormLabel>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <FormControl>;
              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD

            <FormControl>;
              <Input placeholder="Senior Software Engineer" {...field} />;
            </FormControl>;
            <FormMessage />;

        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Email</FormLabel>;
            <FormControl>;

            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;

            <FormControl>;
              <Input placeholder="+1 234 567 8900" {...field} />;
            </FormControl>;
            <FormMessage />;

