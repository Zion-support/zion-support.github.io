
<<<<<<< HEAD
<<<<<<< HEAD
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
=======


import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {BasicInfoFormData} from "./schema";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              <Input placeholder="San Francisco, CA" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ContactFieldsProps {;
  control: Control<BasicInfoFormData>;
}

export function ContactFields(): any ({ control }: ContactFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField
        control={control}
        name="location"

export /**
 * ContactFields - Function description
 */
function ContactFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
      <FormField;
        control={control}
        name="location";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Location</FormLabel>;

            <FormControl>;
              <Input placeholder="San Francisco, CA" {...field} />;
            </FormControl>;
            <FormMessage />;

        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="San Francisco, CA" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}

      />;


      <FormField
        control={control}
        name="website"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Website</FormLabel>;
            <FormControl>;
              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}

          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="website";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Website</FormLabel>;
            <FormControl>;
              <Input placeholder="https://yourwebsite.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;

        control={control}
        name="linkedin";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > LinkedIn</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="https://linkedin.com / in / username";
                {...field}

      />;

      <FormField
        control={control}
        name="linkedin"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>LinkedIn</FormLabel>;
            <FormControl>;
              <Input placeholder="https://linkedin && linkedin.com/in/username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;


      <FormField
        control={control}
        name="github"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github && github.com/username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />
    </div>
<<<<<<< HEAD
  );
}

=======
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="github";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github.com / username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
