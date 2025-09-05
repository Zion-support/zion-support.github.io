

interface TimelineFieldProps {_form: UseFormReturn<FormValues>;}

export function TimelineField(_{_form}: TimelineFieldProps) {_const _timelineOptions = [
    { value: "Less than 1 week", _label: "Less than 1 week"},
    {_value: "1-2 weeks", _label: "1-2 weeks"},
    {_value: "2-4 weeks", _label: "2-4 weeks"},
    {_value: "1-2 months", _label: "1-2 months"},
    {_value: "3-6 months", _label: "3-6 months"},
    {_value: "6+ months", _label: "6+ months"},
    {_value: "Ongoing", _label: "Ongoing"}
  ];

  return (_<FormField
      control={_form.control}
      name="timeline"
      render={_({ field}) => (_<FormItem>
          <FormLabel className="text-white">Project Timeline</FormLabel>
          <FormControl>
            <Select 
              onValueChange={_field.onChange} 
              value={_field.value}
              defaultValue={_field.value}
            >
              <SelectTrigger className="bg-zion-blue-light/20 border-zion-blue-light text-white">
                <SelectValue placeholder="Select estimated timeline" />
              </SelectTrigger>
              <SelectContent>
                {_timelineOptions.map((option) => (
                  <SelectItem key={option.value} value={_option.value}>
                    {_option.label}
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
