
<<<<<<< HEAD
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { FormValues } from &quot;./useHireRequestForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TimelineFieldProps {
  form: UseFormReturn<FormValues>
}

export function TimelineField({ form }: TimelineFieldProps) {
  const timelineOptions = [
<<<<<<< HEAD
    { value: "Less than 1 week", label: "Less than 1 week" },
    { value: "1-2 weeks", label: "1-2 weeks" },
    { value: "2-4 weeks", label: "2-4 weeks" },
    { value: "1-2 months", label: "1-2 months" },
    { value: "3-6 months", label: "3-6 months" },
    { value: "6+ months", label: "6+ months" },
    { value: "Ongoing", label: "Ongoing" }
  ],
=======
    { value: &quot;Less than 1 week&quot;, label: &quot;Less than 1 week&quot; },
    { value: &quot;1-2 weeks&quot;, label: &quot;1-2 weeks&quot; },
    { value: &quot;2-4 weeks&quot;, label: &quot;2-4 weeks&quot; },
    { value: &quot;1-2 months&quot;, label: &quot;1-2 months&quot; },
    { value: &quot;3-6 months&quot;, label: &quot;3-6 months&quot; },
    { value: &quot;6+ months&quot;, label: &quot;6+ months&quot; },
    { value: &quot;Ongoing&quot;, label: &quot;Ongoing&quot; }
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <FormField
      control={form.control}
      name=&quot;timeline&quot;
      render={({ field }) => (
        <FormItem>
          <FormLabel className=&quot;text-white&quot;>Project Timeline</FormLabel>
          <FormControl>
            <Select 
              onValueChange={field.onChange} 
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;>
                <SelectValue placeholder=&quot;Select estimated timeline&quot; />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
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
            >;
              <SelectTrigger className="bg-zion-blue-light/20 border-zion-blue-light text-white">;
                <SelectValue placeholder="Select estimated timeline" />;
              </SelectTrigger>;
              <SelectContent>;
                {timelineOptions.map((option) => (;
                  <SelectItem key={option.value} value={option.value}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    {option.label}
                  </SelectItem>;
                ))}
              </SelectContent>;
            </Select>;
          </FormControl>;
          <FormMessage />;
        </FormItem>;
      )}
    />;
  );
}
;