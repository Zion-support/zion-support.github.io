
<<<<<<< HEAD
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Control } from &quot;react-hook-form&quot;;
import { BasicInfoFormData } from &quot;./schema&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ContactFieldsProps {
  control: Control<BasicInfoFormData>
}

export function ContactFields({ control }: ContactFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
      <FormField
        control={control}
        name=&quot;location&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder=&quot;San Francisco, CA&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema";
interface ContactFieldsProps {;
  control: Control<BasicInfoFormData>;
}
;
export function ContactFields({ control }: ContactFieldsProps) {;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;website&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://yourwebsite.com&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
        name="website";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Website</FormLabel>;
            <FormControl>;
              <Input placeholder="https://yourwebsite.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;linkedin&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://linkedin.com/in/username&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
        name="linkedin";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>LinkedIn</FormLabel>;
            <FormControl>;
              <Input placeholder="https://linkedin.com/in/username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;github&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://github.com/username&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
        name="github";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github.com/username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
    </div>;
  );
}
;