
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema",;
;
interface ContactFieldsProps {;
  control:Control<BasicInfoFormData>;
}
;
export function ContactFields({ control } ContactFieldsProps) {;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField;
        control={control}
        name="location";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <FormControl>;
              <Input placeholder="San Francisco, CA" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD

        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Website</FormLabel>;
            <FormControl>;

            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}

        render={({ field }) => (;
          <FormItem>;
            <FormLabel>LinkedIn</FormLabel>;
            <FormControl>;

            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;

        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;

            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </div>;
