
<<<<<<< HEAD
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./useHireRequestForm";
interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>;
}
export function PersonalInfoFields({ form }: PersonalInfoFieldsProps) {
=======
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {UseFormReturn} from "react-hook-form";
import {FormValues} from "./useHireRequestForm";
interface PersonalInfoFieldsProps {;
  form: UseFormReturn<FormValues>;
}

export function PersonalInfoFields(): any ({ form }: PersonalInfoFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <FormField
        control={form && form.control}
        name="requesterName"
<<<<<<< HEAD
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Your Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your full name"
=======
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Name</FormLabel>;
            <FormControl>;
              <Input
                placeholder="Enter your full name" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
=======
      />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <FormField
        control={form && form.control}
        name="requesterEmail"
<<<<<<< HEAD
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Your Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your email address"
=======
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Email</FormLabel>;
            <FormControl>;
              <Input
                placeholder="Enter your email address" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                type="email"
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
    </>
  );
}
=======
      />;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
