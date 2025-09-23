
<<<<<<< HEAD
import { FormFieldFormItemFormLabelFormControlFormMessage } from "@/components/ui/form";
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
>>>>>>> origin/auto/autonomy-17186719616
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";

interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
}

export function ContactFields({ control }: ContactFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
<<<<<<< HEAD
              <Input placeholder="San FranciscoCA" {...field} />
=======
              <Input placeholder="San Francisco, CA" {...field} />
>>>>>>> origin/auto/autonomy-17186719616
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder="https://yourwebsite.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder="https://linkedin.com/in/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder="https://github.com/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
