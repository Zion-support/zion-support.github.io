
  FormField,

import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {BasicInfoFormData} from "./schema";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",

import {


interface ContactFieldsProps {
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
  control: Control<BasicInfoFormData>;
}

export /**
 * ContactFields - Function description
 */
function ContactFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
      <FormField;
        control={control}
        name="location";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Location</FormLabel>;
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Website</FormLabel>;
            <FormControl>;
              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
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
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input
                placeholder="https://linkedin.com/in/username"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />;

      <FormField
        control={control}
        name="github"        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github && github.com/username" {...field} />;            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />
    </div>
  );
}
;
