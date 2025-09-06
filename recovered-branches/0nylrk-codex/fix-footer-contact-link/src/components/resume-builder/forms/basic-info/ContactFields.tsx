

import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {BasicInfoFormData} from "./schema";


import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",




import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
}





interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
}
export function ContactFields({ control }: ContactFieldsProps) {
  return (
interface ContactFieldsProps {;
  control: Control<BasicInfoFormData>;
}

export function ContactFields(): any ({ control }: ContactFieldsProps) {;
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




        )}

      />;


      <FormField
        control={control}
        name="website"

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




