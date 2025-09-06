
<<<<<<< HEAD
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
=======
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {UseFormReturn} from "react-hook-form";
import {FormValues} from "./useHireRequestForm";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TimelineFieldProps {
  form: UseFormReturn<FormValues>;
}
export function TimelineField({ form }: TimelineFieldProps) {

  const timelineOptions = [
<<<<<<< HEAD
    { value: "Less than 1 week", label: "Less than 1 week" }
    { value: "1-2 weeks", label: "1-2 weeks" }
    { value: "2-4 weeks", label: "2-4 weeks" }
    { value: "1-2 months", label: "1-2 months" }
    { value: "3-6 months", label: "3-6 months" }
    { value: "6+ months", label: "6+ months" }
=======
    { value: "Less than 1 week", label: "Less than 1 week" },
    { value: "1-2 weeks", label: "1-2 weeks" },
    { value: "2-4 weeks", label: "2-4 weeks" },
    { value: "1-2 months", label: "1-2 months" },
    { value: "3-6 months", label: "3-6 months" },
    { value: "6+ months", label: "6+ months" },
<<<<<<< HEAD
    { value: "Ongoing", label: "Ongoing" };
  ];
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    { value: "Ongoing", label: "Ongoing" }
  ],
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  return (
    <FormField
      control={form.control}
      name="timeline"
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
<<<<<<< HEAD
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { UseFormReturn } from "react-hook-form",;
import { FormValues } from "./useHireRequestForm",;
interface TimelineFieldProps {;
  form: UseFormReturn<FormValues>;
}
;
export function TimelineField({ form }: TimelineFieldProps) {;
  const timelineOptions = [;
    { value: "Less than 1 week", label: "Less than 1 week" },;
    { value: "1-2 weeks", label: "1-2 weeks" },;
    { value: "2-4 weeks", label: "2-4 weeks" },;
    { value: "1-2 months", label: "1-2 months" },;
    { value: "3-6 months", label: "3-6 months" },;
    { value: "6+ months", label: "6+ months" };
    { value: "Ongoing", label: "Ongoing" }
  ];
  return (;
    <FormField;
      control={form.control}
      name="timeline";
      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Timeline</FormLabel>;
          <FormControl>;
            <Select;
              onValueChange={field.onChange} ;
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger className="bg-zion-blue-light/20 border-zion-blue-light text-white">
                <SelectValue placeholder="Select estimated timeline" />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}