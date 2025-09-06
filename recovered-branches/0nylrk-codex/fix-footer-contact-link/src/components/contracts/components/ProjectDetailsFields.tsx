<<<<<<< HEAD
=======
<<<<<<< HEAD
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,;
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,;
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;

} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  form: UseFormReturn<ContractFormValues>;
}


export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;

  return (
    <>;
      <FormField
        control={form && form.control}
        name="projectName"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
=======
import { format  } from './date - fns';
import { CalendarIcon  } from './lucide-react';
import { UseFormReturn  } from './react - hook - form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Button  } from '@/components / ui / button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { Calendar  } from '@/components / ui / calendar';
import { ContractFormValues  } from './ContractForm';
interface ProjectDetailsFieldsProps {
  form: UseFormReturn < ContractFormValues>;
}
export /**
 * ProjectDetailsFields - Function description
 */
function ProjectDetailsFields() {
  return (
    <>;
      <FormField;
        control={form.control}
        name="project_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;

      />;


      <FormField
        control={form && form.control}
=======

      />;
      <FormField;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
        control={form.control}
        name="scope_summary";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min - h-[120px]";

                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
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
=======
      />;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <FormField
          control={form && form.control}
          name="startDate"
          render={({ field }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
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
                    onSelect={field && field.onChange}
                    disabled={(date) => date < new Date()}
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
=======

        />;
        <FormField;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          name="endDate"
          render={({ field }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar
                    mode="single"
                    selected={field.value |undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
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
<<<<<<< HEAD
        />
      </div>
<<<<<<< HEAD
    </>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

        />;
      </div>;
    </>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
=======
            </FormItem>)}
        />;
      </div>;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}