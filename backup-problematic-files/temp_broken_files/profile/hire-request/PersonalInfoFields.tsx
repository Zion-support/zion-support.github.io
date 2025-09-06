
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { UseFormReturn } from "react-hook-form",;
import { FormValues } from "./useHireRequestForm",;
;
interface PersonalInfoFieldsProps {;
  form:UseFormReturn<FormValues>;
}
;
export function PersonalInfoFields({ form } PersonalInfoFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
        name="requesterName";
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Name</FormLabel>;
            <FormControl>;
<<<<<<< HEAD

        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Email</FormLabel>;
            <FormControl>;

              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </>;

