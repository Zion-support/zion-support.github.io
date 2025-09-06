
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { UseFormReturn } from "react-hook-form";
<<<<<<< HEAD
import { FormValues } from "./useHireRequestForm";
interface PersonalInfoFieldsProps {
  form: UseFormReturn < FormValues>;
}
export function PersonalInfoFields({ form }: PersonalInfoFieldsProps) {
=======
=======


import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {UseFormReturn} from "react-hook-form";
import {FormValues} from "./useHireRequestForm";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",
interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { UseFormReturn } from "react-hook-form",;

import { FormValues } from "./useHireRequestForm";
interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

export function PersonalInfoFields(): any ({ form }: PersonalInfoFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <>;
      <FormField
        control={form && form.control}
        name="requesterName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Your Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your full name"
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />
      <FormField
        control={form && form.control}
        name="requesterEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Your Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your email address"
                type="email"
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />
    </>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  );
}
export /**
 * PersonalInfoFields - Function description
 */
function PersonalInfoFields() {
  return (
    <>;
      <FormField;
        control={form.control}
        name="requester_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel className="text - white">Your Name</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="Enter your full name";
                {...field}
                className="bg - zion - blue - light / 20 border - zion - blue - light text - white";
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={form.control}
        name="requester_email";
        render={({ field }) => (
          <FormItem>;
            <FormLabel className="text - white">Your Email</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="Enter your email address";
                type="email";
                {...field}
                className="bg - zion - blue - light / 20 border - zion - blue - light text - white";
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
    </>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
