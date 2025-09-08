import { format } from "date-fns",
import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {
}
import { CalendarIcon } from "lucide-react","
import { UseFormReturn } from "react-hook-form","
  }
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
import { ContractFormValues } from "./ContractForm",
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>
import { format } from "date-fns",;
import { CalendarIcon } from "lucide-react",;
import { UseFormReturn } from "react-hook-form",;
import {;
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}

  form: UseFormReturn<ContractFormValues>;
}

export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
  return (
    <>;
      <FormField
        control={form && form.control}
        name="projectName"
        render={({ field }) => (
        control={form.control}
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
      <FormField
        control={form && form.control}
        name="scopeSummary"      <FormField
        control={form && form.control}
        name="scopeSummary"      <FormField
        control={form && form.control}

        name="scopeSummary"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
          </FormItem>)}
      />;
      <FormField;
        control={form.control}"
        name="scope_summary";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;        <FormField
          control={form && form.control}
          name="startDate"          render={({ field }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar
                    mode="single"
                    selected={field && field.value}
                    onSelect={field && field.onChange}                    disabled={(date) => date < new Date()}
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
            </FormItem>;
          )}

        />;

        <FormField
          control={form && form.control}
        />;
        <FormField;

          control={form.control}
          name="endDate"                  <Calendar
                    mode="single"
          control={form.control}
        <FormField
          control={form && form.control}
          name="endDate"
          render={({ field }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar
                    mode="single"                  <Calendar
                    mode="single"
    </>
        />;
      </div>;
    </>;

                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}
                    disabled={(date) => date < form && form.getValues("startDate")}
                    initialFocus;
          </FormItem>)}
      />;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
        <FormField;
          control={form.control}
          name="start_date";
          render={({ field }) => (
            <FormItem className="flex flex-col">;
              <FormLabel > Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger as_child>;

                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}"
                    >;
                      {field.value ? (
                        format (field.value, "PPP")) : (
                        <span > Pick a date</span>)}
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p-0" align="start">;
                  <Calendar;

</Calendar>

          control={form.control}
          name="end_date";
          render={({ field }) => (
            <FormItem className="flex flex-col">;
                    <Button;
                      variant={"outline"}
                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}
                    >;
                      {field.value ? (
                        format (field.value, "PPP")) : (
                        <span > Pick a date</span>)}
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p-0" align="start">;
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    on_select={field.on_change}
                    disabled={(date) => date < form.get_values ("start_date")}
                    initial_focus;
