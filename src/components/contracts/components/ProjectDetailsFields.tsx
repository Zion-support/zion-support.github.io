
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",
=======
import { format } from &quot;date-fns&quot;;
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from &quot;react-hook-form&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
<<<<<<< HEAD
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { ContractFormValues } from "./ContractForm",
=======
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Popover, PopoverContent, PopoverTrigger } from &quot;@/components/ui/popover&quot;;
import { Calendar } from &quot;@/components/ui/calendar&quot;;
import { ContractFormValues } from &quot;./ContractForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>
}
=======
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription, _FormMessage} from "@/components/ui/form";

interface ProjectDetailsFieldsProps {_form: UseFormReturn<ContractFormValues>;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ProjectDetailsFields(_{_form}: ProjectDetailsFieldsProps) {_return (_<>
      <FormField
        control={form.control}
<<<<<<< HEAD
        name="projectName"
<<<<<<< HEAD
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (
=======
        name=&quot;projectName&quot;
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, &quot;projectName&quot;> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder=&quot;AI Website Development&quot; {...field} />
=======
        render={_({ field}: {_field: ControllerRenderProps<ContractFormValues, _"projectName">}) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
<<<<<<< HEAD
        control={form.control}
<<<<<<< HEAD
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (
=======
        name=&quot;scopeSummary&quot;
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, &quot;scopeSummary&quot;> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        control={_form.control}
        name="scopeSummary"
        render={_(_{ field}: {_field: ControllerRenderProps<ContractFormValues, _"scopeSummary">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
                placeholder=&quot;Describe the project scope, deliverables, and expectations...&quot;
                className=&quot;min-h-[120px]&quot;
                {...field}
=======
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
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
<<<<<<< HEAD
          control={form.control}
<<<<<<< HEAD
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
=======
          control={_form.control}
          name="startDate"
          render={_(_{ field}: {_field: ControllerRenderProps<ContractFormValues, _"startDate">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem className="flex flex-col">
=======
          name=&quot;startDate&quot;
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, &quot;startDate&quot;> }) => (
            <FormItem className=&quot;flex flex-col&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD
                      variant={&quot;outline&quot;}
                      className={`w-full pl-3 text-left font-normal ${!field.value && &quot;text-muted-foreground&quot;}`}
                    >
                      {field.value ? (
                        format(field.value, &quot;PPP&quot;)
=======
                      variant={_"outline"}
                      className={_`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {_field.value ? (
                        format(field.value, _"PPP")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                  <Calendar
<<<<<<< HEAD
                    mode=&quot;single&quot;
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
=======
                    mode="single"
                    selected={_field.value}
                    onSelect={_field.onChange}
                    disabled={_(_date) => date < new Date()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
<<<<<<< HEAD
          control={form.control}
<<<<<<< HEAD
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
=======
          control={_form.control}
          name="endDate"
          render={_(_{ field}: {_field: ControllerRenderProps<ContractFormValues, _"endDate">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem className="flex flex-col">
=======
          name=&quot;endDate&quot;
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, &quot;endDate&quot;> }) => (
            <FormItem className=&quot;flex flex-col&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD
                      variant={&quot;outline&quot;}
                      className={`w-full pl-3 text-left font-normal ${!field.value && &quot;text-muted-foreground&quot;}`}
                    >
                      {field.value ? (
                        format(field.value, &quot;PPP&quot;)
=======
                      variant={_"outline"}
                      className={_`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {_field.value ? (
                        format(field.value, _"PPP")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                  <Calendar
<<<<<<< HEAD
                    mode=&quot;single&quot;
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues(&quot;startDate&quot;)}
=======
                    mode="single"
                    selected={_field.value || undefined}
                    onSelect={_field.onChange}
                    disabled={_(_date) => date < form.getValues("startDate")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
