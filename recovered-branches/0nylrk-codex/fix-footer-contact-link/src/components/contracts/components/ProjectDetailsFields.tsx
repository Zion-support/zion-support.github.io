
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription, _FormMessage} from "@/components/ui/form";

interface ProjectDetailsFieldsProps {_form: UseFormReturn<ContractFormValues>;}

export function ProjectDetailsFields(_{_form}: ProjectDetailsFieldsProps) {_return (_<>
      <FormField
        control={form.control}
        name="projectName"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={_form.control}
        name="scopeSummary"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
                {_...field}
              />
            </FormControl>
            <FormDescription>
              Be specific about what is included and any limitations
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={_form.control}
          name="startDate"
          render={_(_{ field}) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={_"outline"}
                      className={_`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {_field.value ? (
                        format(field.value, _"PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={_field.value}
                    onSelect={_field.onChange}
                    disabled={_(_date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={_form.control}
          name="endDate"
          render={_(_{ field}) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={_"outline"}
                      className={_`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {_field.value ? (
                        format(field.value, _"PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={_field.value || undefined}
                    onSelect={_field.onChange}
                    disabled={_(_date) => date < form.getValues("startDate")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Leave empty if the end date is flexible
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
