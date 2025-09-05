
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
=======
import { format } from "date-fns",;
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (
=======
        name=&quot;projectName&quot;
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, &quot;projectName&quot;> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder=&quot;AI Website Development&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (
=======
        name=&quot;scopeSummary&quot;
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, &quot;scopeSummary&quot;> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;Describe the project scope, deliverables, and expectations...&quot;
                className=&quot;min-h-[120px]&quot;
=======
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
        <FormField
          control={form.control}
<<<<<<< HEAD
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
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
                      variant={&quot;outline&quot;}
                      className={`w-full pl-3 text-left font-normal ${!field.value && &quot;text-muted-foreground&quot;}`}
                    >
                      {field.value ? (
                        format(field.value, &quot;PPP&quot;)
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                  <Calendar
                    mode=&quot;single&quot;
=======
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}
          name="startDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar;
                    mode="single";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
        <FormField;
          control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
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
                      variant={&quot;outline&quot;}
                      className={`w-full pl-3 text-left font-normal ${!field.value && &quot;text-muted-foreground&quot;}`}
                    >
                      {field.value ? (
                        format(field.value, &quot;PPP&quot;)
                      ) : (
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
                    disabled={(date) => date < form.getValues(&quot;startDate&quot;)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Leave empty if the end date is flexible
              </FormDescription>
              <FormMessage />
            </FormItem>
=======
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>;
                Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;
            </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        />;
      </div>;
    </>;
  );
}
;