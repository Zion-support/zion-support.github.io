
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./useHireRequestForm";

interface TimelineFieldProps {
  form: UseFormReturn<FormValues>;
}

export function TimelineField({ form }: TimelineFieldProps) {
  const timelineOptions = [
  ];

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
