
<<<<<<< HEAD
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";
import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from "@/components/ui/select";

import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./useHireRequestForm";
interface TimelineFieldProps {
  form: UseFormReturn<FormValues>;
}
export function TimelineField({ form }: TimelineFieldProps) {

  const timelineOptions = [
    { value: "Less than 1 week", label: "Less than 1 week" }
    { value: "1-2 weeks", label: "1-2 weeks" }
    { value: "2-4 weeks", label: "2-4 weeks" }
    { value: "1-2 months", label: "1-2 months" }
    { value: "3-6 months", label: "3-6 months" }
    { value: "6+ months", label: "6+ months" }
=======
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {UseFormReturn} from "react-hook-form";
import {FormValues} from "./useHireRequestForm";
interface TimelineFieldProps {;
  form: UseFormReturn<FormValues>;
}

export function TimelineField(): any ({ form }: TimelineFieldProps) {;
  const timelineOptions = [;
    { value: "Less than 1 week", label: "Less than 1 week" },;
    { value: "1-2 weeks", label: "1-2 weeks" },;
    { value: "2-4 weeks", label: "2-4 weeks" },;
    { value: "1-2 months", label: "1-2 months" },;
    { value: "3-6 months", label: "3-6 months" },;
    { value: "6+ months", label: "6+ months" },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    { value: "Ongoing", label: "Ongoing" }
  ];

  return (
    <FormField
      control={form && form.control}
      name="timeline"
<<<<<<< HEAD
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Project Timeline</FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger className="bg-zion-blue-light/20 border-zion-blue-light text-white">
                <SelectValue placeholder="Select estimated timeline" />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
=======
      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Timeline</FormLabel>;
          <FormControl>;
            <Select
              onValueChange={field && field.onChange} 
              value={field && field.value}
              defaultValue={field && field.value}>;
              <SelectTrigger className="bg-zion-blue-light/20 border-zion-blue-light text-white">;
                <SelectValue placeholder="Select estimated timeline" />;
              </SelectTrigger>;
              <SelectContent>;
                {timelineOptions && timelineOptions.map((option) => (;
                  <SelectItem key={option && option.value} value={option && option.value}>;
                    {option && option.label}
                  </SelectItem>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                ))}
              </SelectContent>;
            </Select>;
          </FormControl>;
          <FormMessage />;
        </FormItem>;
      )}
<<<<<<< HEAD
    />
  );
}
=======
    />;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
