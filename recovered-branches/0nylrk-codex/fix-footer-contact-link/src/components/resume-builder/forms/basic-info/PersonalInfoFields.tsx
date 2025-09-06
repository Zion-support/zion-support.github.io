





import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {BasicInfoFormData} from "./schema";





import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>;
}
export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface PersonalInfoFieldsProps {;
  control: Control<BasicInfoFormData>;
}

export function PersonalInfoFields(): any ({ control }: PersonalInfoFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField
        control={control}
        name="fullName"

export /**
 * PersonalInfoFields - Function description
 */
function PersonalInfoFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
      <FormField;
        control={control}
        name="full_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Full Name</FormLabel>;

            <FormControl>;
              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;

        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

        )}

      />;


      <FormField
        control={control}
        name="title"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Professional Title</FormLabel>;

            <FormControl>;
              <Input placeholder="Senior Software Engineer" {...field} />;
            </FormControl>;
            <FormMessage />;

      />;


      <FormField
        control={control}
        name="email"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Email</FormLabel>;
            <FormControl>;
              <Input type="email" placeholder="john@example && example.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}

      />;


      <FormField
        control={control}
        name="phone"



            <FormControl>;
              <Input placeholder="+1 234 567 8900" {...field} />;
            </FormControl>;
            <FormMessage />;

      />;
    </div>;
  );
}



  )
}
;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

