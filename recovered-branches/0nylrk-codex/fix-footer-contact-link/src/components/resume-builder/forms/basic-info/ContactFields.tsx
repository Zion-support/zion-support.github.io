
<<<<<<< HEAD
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
            <FormControl>;
              <Input placeholder="San Francisco, CA" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="website";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Website</FormLabel>;
            <FormControl>;
              <Input placeholder="https://yourwebsite.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="linkedin";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>LinkedIn</FormLabel>;
            <FormControl>;
              <Input placeholder="https://linkedin.com/in/username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="github";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github.com/username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </div>;
  ),;
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",interface ContactFieldsProps {
  control: Control<BasicInfoFormData>
}

export function ContactFields({ control }: ContactFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
      <FormField,
control={control}
        name=&quot;location&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder=&quot;San Francisco, CA&quot; {...field} />

interface ContactFieldsProps {control: Control<BasicInfoFormData>}

export function ContactFields(_{control}: ContactFieldsProps) {return (_<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField,
control={control}
        name="location"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="San Francisco, CA" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField,
control={control}
        name=&quot;website&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://yourwebsite.com&quot; {...field} />            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField,
control={control}
        name=&quot;linkedin&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://linkedin.com/in/username&quot; {...field} />            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField,
control={control}
        name=&quot;github&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://github.com/username&quot; {...field} />            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
