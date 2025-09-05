
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { FormValues } from &quot;./useHireRequestForm&quot;;

interface TimelineFieldProps {
  form: UseFormReturn<FormValues>;
}

export function TimelineField({ form }: TimelineFieldProps) {
  const timelineOptions = [
    { value: &quot;Less than 1 week&quot;, label: &quot;Less than 1 week&quot; },
    { value: &quot;1-2 weeks&quot;, label: &quot;1-2 weeks&quot; },
    { value: &quot;2-4 weeks&quot;, label: &quot;2-4 weeks&quot; },
    { value: &quot;1-2 months&quot;, label: &quot;1-2 months&quot; },
    { value: &quot;3-6 months&quot;, label: &quot;3-6 months&quot; },
    { value: &quot;6+ months&quot;, label: &quot;6+ months&quot; },
    { value: &quot;Ongoing&quot;, label: &quot;Ongoing&quot; }
  ];

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
