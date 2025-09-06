
<<<<<<< HEAD
=======

  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { Control  } from './react - hook - form';
import { BasicInfoFormData  } from './schema';

interface PersonalInfoFieldsProps {
  control: Control < BasicInfoFormData>;
}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {BasicInfoFormData} from "./schema";


<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD

        render={({ field }) => (

=======
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Phone</FormLabel>;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="email";
        render={({ field }) => (
<<<<<<< HEAD
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="+1 234 567 8900" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

  );
}
=======
          <FormItem>;
            <FormLabel > Email</FormLabel>;
            <FormControl>;
              <Input type="email" placeholder="john@example.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="phone";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Phone</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            <FormControl>;
              <Input placeholder="+1 234 567 8900" {...field} />;
            </FormControl>;
            <FormMessage />;

      />;
    </div>;
  );
}

=======
          </FormItem>)}
      />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  )
}
;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
