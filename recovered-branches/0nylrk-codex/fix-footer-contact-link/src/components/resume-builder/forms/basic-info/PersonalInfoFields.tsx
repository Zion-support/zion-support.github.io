
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
interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>
}

export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
      <FormField
        control={control}
        name=&quot;fullName&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder=&quot;John Doe&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema";
interface PersonalInfoFieldsProps {;
  control: Control<BasicInfoFormData>;
}
;
export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField;
        control={control}
        name="fullName";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Full Name</FormLabel>;
            <FormControl>;
              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;title&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>
              <Input placeholder=&quot;Senior Software Engineer&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
        name="title";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Professional Title</FormLabel>;
            <FormControl>;
              <Input placeholder="Senior Software Engineer" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;email&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type=&quot;email&quot; placeholder=&quot;john@example.com&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
        name="email";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Email</FormLabel>;
            <FormControl>;
              <Input type="email" placeholder="john@example.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;phone&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder=&quot;+1 234 567 8900&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
        name="phone";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Phone</FormLabel>;
            <FormControl>;
              <Input placeholder="+1 234 567 8900" {...field} />;
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