
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { UseFormReturn } from "react-hook-form",;
import { FormValues } from "./useHireRequestForm",;
;
interface TimelineFieldProps {;
  form:UseFormReturn<FormValues>;
}
;
export function TimelineField({ form } TimelineFieldProps) {;
  const timelineOptions = [;
    { value:"Less than 1 week", label:"Less than 1 week" },;
    { value:"1-2 weeks", label:"1-2 weeks" },;
    { value:"2-4 weeks", label:"2-4 weeks" },;
    { value:"1-2 months", label:"1-2 months" },;
    { value:"3-6 months", label:"3-6 months" },;
    { value:"6+ months", label:"6+ months" },;
    { value:"Ongoing", label:"Ongoing" }
  ],;
;
  return (;
    <FormField;
      control={form.control}
      name="timeline";
      render={({ field }) => (;
        <FormItem>;
          <FormLabel className="text-white">Project Timeline</FormLabel>;
          <FormControl>;
            <Select ;
              onValueChange={field.onChange} ;
              value={field.value}
              defaultValue={field.value}
            >;
              <SelectTrigger className="bg-zion-blue-light/20 border-zion-blue-light text-white">;
                <SelectValue placeholder="Select estimated timeline" />;
              </SelectTrigger>;
              <SelectContent>;
                {timelineOptions.map((option) => (;
                  <SelectItem key={option.value} value={option.value}>;
                    {option.label}
                  </SelectItem>;
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",interface TimelineFieldProps {
  form: UseFormReturn<FormValues>
}

export function TimelineField({ form }: TimelineFieldProps) {
  const timelineOptions = [
    { value: "Less than 1 week", label: "Less than 1 week" },
    { value: "1-2 weeks", label: "1-2 weeks" },
    { value: "2-4 weeks", label: "2-4 weeks" },
    { value: "1-2 months", label: "1-2 months" },
    { value: "3-6 months", label: "3-6 months" },
    { value: "6+ months", label: "6+ months" },
    { value: "Ongoing", label: "Ongoing" }
  ],  ];

  return (
    <FormField
      control={form.control}
      name=&quot;timeline&quot;
      render={({ field }) => (
        <FormItem>
          <FormLabel className=&quot;text-white&quot;>Project Timeline</FormLabel>          <FormControl>
            <Select 
              onValueChange={_field.onChange} 
              value={_field.value}
              defaultValue={_field.value}
            >
              <SelectTrigger className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;>
                <SelectValue placeholder=&quot;Select estimated timeline&quot; />
              </SelectTrigger>
              <SelectContent>
                {_timelineOptions.map((option) => (
                  <SelectItem key={option.value} value={_option.value}>
                    {_option.label}
                  </SelectItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                ))}
              </SelectContent>;
            </Select>;
          </FormControl>;
          <FormMessage />;
        </FormItem>;
      )}
<<<<<<< HEAD
    />;
  ),;
=======
    />
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
