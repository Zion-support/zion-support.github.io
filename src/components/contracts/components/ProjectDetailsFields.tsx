
<<<<<<< HEAD
import { format } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",
import { 
  FormField,
=======
import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { 
  FormField, 
>>>>>>> origin/auto/autonomy-17186719616
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

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>
=======
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;
>>>>>>> origin/auto/autonomy-17186719616
}

export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="projectName"
<<<<<<< HEAD
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (





=======
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
>>>>>>> origin/auto/autonomy-17186719616
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
<<<<<<< HEAD

        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (
=======
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
>>>>>>> origin/auto/autonomy-17186719616
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
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
          control={form.control}
          name="startDate"
<<<<<<< HEAD
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
=======
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> }) => (
>>>>>>> origin/auto/autonomy-17186719616
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
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
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="endDate"
<<<<<<< HEAD
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
=======
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
>>>>>>> origin/auto/autonomy-17186719616
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
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
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
              <FormDescription>
                Leave empty if the end date is flexible
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
