
import { format } from "date-fns",
import { CalendarIcon } from "lucide-react",
import { UseFormReturn } from "react-hook-form",import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { ContractFormValues } from "./ContractForm",interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>
}
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription, _FormMessage} from "@/components/ui/form";

interface ProjectDetailsFieldsProps {_form: UseFormReturn<ContractFormValues>;}

export function ProjectDetailsFields(_{_form}: ProjectDetailsFieldsProps) {_return (_<>
      <FormField
        control={form.control}
        name=&quot;projectName&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder=&quot;AI Website Development&quot; {...field} />            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name=&quot;scopeSummary&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;Describe the project scope, deliverables, and expectations...&quot;
                className=&quot;min-h-[120px]&quot;
                {...field}              />
            </FormControl>
            <FormDescription>
              Be specific about what is included and any limitations
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
        <FormField
          control={form.control}
          name=&quot;startDate&quot;
          render={({ field }) => (
            <FormItem className=&quot;flex flex-col&quot;>              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={&quot;outline&quot;}
                      className={`w-full pl-3 text-left font-normal ${!field.value && &quot;text-muted-foreground&quot;}`}
                    >
                      {field.value ? (
                        format(field.value, &quot;PPP&quot;)                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                  <Calendar
                    mode=&quot;single&quot;
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name=&quot;endDate&quot;
          render={({ field }) => (
            <FormItem className=&quot;flex flex-col&quot;>              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={&quot;outline&quot;}
                      className={`w-full pl-3 text-left font-normal ${!field.value && &quot;text-muted-foreground&quot;}`}
                    >
                      {field.value ? (
                        format(field.value, &quot;PPP&quot;)                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                  <Calendar
                    mode=&quot;single&quot;
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues(&quot;startDate&quot;)}                    initialFocus
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
  )
}
