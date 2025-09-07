
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
import { CalendarIcon } from "lucide-react",
import { UseFormReturn } from "react-hook-form",
import { 
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
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
<<<<<<< HEAD

} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

} from "@/components/ui/popover";
=======
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";} from "@/components/ui/popover";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
<<<<<<< HEAD


  form: UseFormReturn<ContractFormValues>;
}


export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;

  form: UseFormReturn<ContractFormValues>;
}
=======
  form: UseFormReturn<ContractFormValues>;
}

  form: UseFormReturn<ContractFormValues>;
}

export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD

      />;


      <FormField
        control={form && form.control}
=======
      <FormField
        control={form && form.control}
        name="scopeSummary"      <FormField
        control={form && form.control}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        name="scopeSummary"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </FormItem>)}
      />;
      <FormField;
        control={form.control}
        name="scope_summary";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
<<<<<<< HEAD
                className="min - h-[120px]";

                {...field}
=======
                className="min-h-[120px]";                {...field}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
<<<<<<< HEAD
            <FormMessage />;

                {...field}
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
          control={form && form.control}
          name="startDate"
          </FormItem>;
        )}
      />;
      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}
          name="startDate";
        <FormField
          control={form && form.control}
          name="startDate"
          render={({ field }) => (;
=======
            <FormMessage />;        <FormField
          control={form && form.control}
          name="startDate"          render={({ field }) => (;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
<<<<<<< HEAD
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
                    onSelect={field && field.onChange}
                    disabled={(date) => date < new Date()}
=======
                    onSelect={field && field.onChange}                    disabled={(date) => date < new Date()}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
            </FormItem>;
          )}

        />;

<<<<<<< HEAD

        <FormField
          control={form && form.control}

=======
        <FormField
          control={form && form.control}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        />;
        <FormField;

          control={form.control}
<<<<<<< HEAD
          name="endDate"
          control={form.control}
          name="endDate"
            </FormItem>;          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="endDate";
                  <Calendar
=======
          name="endDate"                  <Calendar
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar
<<<<<<< HEAD
                    mode="single"
                  <Calendar
=======
                    mode="single"                  <Calendar
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
=======
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <FormField;
          control={form.control}
          name="start_date";
          render={({ field }) => (
<<<<<<< HEAD
            <FormItem className="flex flex - col">;
=======
            <FormItem className="flex flex-col">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              <FormLabel > Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}
                    >;
                      {field.value ? (
                        format (field.value, "PPP")) : (
                        <span > Pick a date</span>)}
<<<<<<< HEAD
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p - 0" align="start">;
=======
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p-0" align="start">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  <Calendar;
                    mode="single";
                    selected={field.value}
                    on_select={field.on_change}
                    disabled={(date) => date < new Date ()}
                    initial_focus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="end_date";
          render={({ field }) => (
<<<<<<< HEAD
            <FormItem className="flex flex - col">;
=======
            <FormItem className="flex flex-col">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              <FormLabel > End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;
                      variant={"outline"}
                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}
                    >;
                      {field.value ? (
                        format (field.value, "PPP")) : (
                        <span > Pick a date</span>)}
<<<<<<< HEAD
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p - 0" align="start">;
=======
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p-0" align="start">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    on_select={field.on_change}
                    disabled={(date) => date < form.get_values ("start_date")}
                    initial_focus;
<<<<<<< HEAD


                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>;
                Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;




        />;
      </div>;
    </>;
  );
            </FormItem>)}
        />;
      </div>;
    </>);
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
