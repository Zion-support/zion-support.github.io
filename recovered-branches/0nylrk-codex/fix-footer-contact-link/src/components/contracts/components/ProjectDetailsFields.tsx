<<<<<<< HEAD
import { format } from "date-fns",
import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { 
=======
<<<<<<< HEAD
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
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
import {
  Popover
  PopoverContent
  PopoverTrigger
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
<<<<<<< HEAD
=======
  FormMessage,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
<<<<<<< HEAD
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;


=======

} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  form: UseFormReturn<ContractFormValues>;
}


export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;

<<<<<<< HEAD
  form: UseFormReturn<ContractFormValues>;
}
export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <>;
      <FormField
        control={form && form.control}
        name="projectName"
<<<<<<< HEAD
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
}
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="projectName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
import { format  } from './date - fns';
import { CalendarIcon  } from './lucide-react';
import { UseFormReturn  } from './react - hook - form';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
<<<<<<< HEAD
FormMessage
} from "@/components/ui/form";"
import { Input } from "@/components/ui/input";"
import { Textarea } from "@/components/ui/textarea";"
import { Button } from "@/components/ui/button";"
} from "@/components/ui/popover";"
import { Calendar } from "@/components/ui/calendar";"
import { ContractFormValues } from "./ContractForm";"
interface ProjectDetailsFieldsProps {
}
import { CalendarIcon } from "lucide-react","
import { UseFormReturn } from "react-hook-form","
  }
>>>>>>> merged-prs-20250907-203621
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover
  PopoverContent
  PopoverTrigger
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {
<<<<<<< HEAD
  form: UseFormReturn<ContractFormValues>
}
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="projectName"
        render={({ field }) => (
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
=======
  }
  "form": UseFormReturn<ContractFormValues>
import { format } from "date-fns";"
import { UseFormReturn } from "react-hook-form",;"
import {;
  }
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
} from "@/components/ui/form";"
import { Button } from "@/components/ui/button";} from "@/components/ui/popover";"
interface ProjectDetailsFieldsProps {;
  }
  "form": UseFormReturn<ContractFormValues>;
=======
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

import { format } from "date-fns",

} from "@/components/ui/popover";
"
import { Calendar } from "@/components/ui/calendar";"
import { ContractFormValues } from "./ContractForm";

  form: UseFormReturn<ContractFormValues>;
>>>>>>> origin/chore/fix-lint-and-merge
}

  form: UseFormReturn<ContractFormValues>;
}

export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;

  form: UseFormReturn<ContractFormValues>;
}

  return (
    <>;
      <FormField;
        control={form && form.control}"
        name="projectName"
        render={({ field }) => (
<<<<<<< HEAD

=======
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
      />;
<<<<<<< HEAD

/>;
      <FormField
      />;
      <FormField;

      <FormField

        control={form && form.control}
        name="scopeSummary"      <FormField
        control={form && form.control}
=======
      <FormField
        control={form && form.control}

      />;
      <FormField;

        control={form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        name="scopeSummary"

import { format } from "date-fns",;
import { CalendarIcon } from "lucide-react",;
import { UseFormReturn } from "react-hook-form",;
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription, ;
  FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { ContractFormValues } from "./ContractForm",;
;
interface ProjectDetailsFieldsProps {;
  form:UseFormReturn<ContractFormValues>;
}
;
export function ProjectDetailsFields({ form } ProjectDetailsFieldsProps) {;
  return (;
    <>;
      <FormField;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        control={form.control}
        name="projectName";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;        )}
      />;
      ;
      <FormField;
        control={form.control}
        name="scopeSummary";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </FormItem>)}
      />;
      <FormField;
        control={form.control}"
        name="scope_summary";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
<<<<<<< HEAD

          control={form && form.control}
          name="startDate"          render={({ field }) => (;

        <FormField
          control={form && form.control}
=======
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min - h-[120px]";
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
      />
      <FormField
      />;
      <FormField;
>>>>>>> merged-prs-20250907-203621
        control={form.control}
        name="scopeSummary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
          </FormItem>;
        )}
      />;
      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}
          name="startDate";
=======
=======
      />;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <FormField
          control={form && form.control}
          name="startDate"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          render={({ field }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
<<<<<<< HEAD
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) :(;
=======
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
                  <Calendar;
                    mode="single";
                    selected={field.value}
                    onSelect={field.onChange}
=======
                  <Calendar
                    mode="single"
                    selected={field && field.value}
                    onSelect={field && field.onChange}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    disabled={(date) => date < new Date()}
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
<<<<<<< HEAD
        />;


        />;
        <FormField
          control={form && form.control}
=======
            </FormItem>;
          )}

        />;


        <FormField
          control={form && form.control}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        />;
        <FormField;

<<<<<<< HEAD
=======
<<<<<<< HEAD
          control={form.control}
          name="endDate"
            </FormItem>;          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="endDate";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          control={form.control}

          name="endDate"
<<<<<<< HEAD
          control={form.control}
          name="endDate"
            </FormItem>;          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="endDate";
                  <Calendar

                    mode="single"
          control={form.control}
        <FormField;
          control={form && form.control}"
          name="endDate"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          render={({ field }) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
<<<<<<< HEAD

                  <Calendar

                    mode="single"
    </>
        />;
  FormMessage;"
} from "@/components/ui/form",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea",""
import { Button } from "@/components/ui/button",""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",""
import { Calendar } from "@/components/ui/calendar",""
import { ContractFormValues } from "./ContractForm","
  // TODO: Implement
  form: UseFormReturn<ContractFormValues>

  form: UseFormReturn<ContractFormValues>;

    <>;
      <FormField;
        control={form && form.control}"
        name="projectName""
        render={({ field }) => (

          <FormItem>;

            <FormLabel > Project Name;
            <FormControl>;
"
              <Input placeholder="AI Website Development" {...field} />;"

            ;
            <FormMessage />;

        name="scopeSummary"")
        render={({ field }) => (;

            <FormLabel>Scope Summary;

              <Textarea;"
                placeholder="Describe the project scope, deliverables, and expectations..."""
                className="min-h-[120px]"")
          )}

        control={form.control}"
        name="scope_summary";"

            <FormLabel > Scope Summary;

                placeholder="Describe the project scope, deliverables, and expectations...";""
                className="min - h-[120px]";"
                {...field}

              />;
</Textarea>
            </FormControl>;

            <FormDescription>;

            <FormDescription>

            <FormMessage />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
          name="startDate""
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
          name="startDate";"
          name="startDate"")
            <FormItem className="flex flex-col">;"

              <FormLabel>Start Date;
              <Popover>;

                <PopoverTrigger asChild>;

                    <Button;"
                      variant={"outline"}""
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;"

                        <span>Pick a date</span>;"
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"

                ;"
                <PopoverContent className="w-auto p-0" align="start">;"

                  <Calendar;"
                    mode="single""
                    selected={field && field.value}
                    onSelect={field && field.onChange})
                    disabled={(date) => date < new Date()}

          control={form && form.control}

          name="endDate""
            ;          )}

</Calendar>

                </PopoverContent>;
              </Popover>;
              <FormMessage />;
</FormMessage>
            </FormItem>;

        <FormField;
          control={form && form.control}

        />;
</FormField>
        <FormField;

          control={form.control}"
          name="endDate""
          control={form.control}"
          name="endDate""
            </FormItem>;          )}
</FormField>

        <FormField;
          control={form.control}"
          name="endDate";"
          control={form.control}
)
              <FormLabel>End Date (Optional);

                      variant={"outline"}""`;

    </>

pr-12325

        <FormField;
          control={form && form.control}"
          name="endDate""
          render={({ field }) => (;
</FormField>"
            <FormItem className="flex flex-col">;"
</FormItem>)
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
</Popover>
                <PopoverTrigger asChild>;
</PopoverTrigger>
                  <FormControl>;
</FormControl>
                    <Button;"
                      variant={"outline"}""
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;"
</Button>
                        <span>Pick a date</span>;"
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
</CalendarIcon>
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;"
                <PopoverContent className="w-auto p-0" align="start">;"
</PopoverContent>
                  <Calendar;"
                    mode="single""
                  <Calendar;"
                    mode="single""

    </>
</Calendar>
      </div>;
    </>;
=======
<<<<<<< HEAD
                    <Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) :(;
=======
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
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
        />;
        <FormField;
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
          render={({ field }) => (
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
        />
      </div>
    </>
  )
}
=======
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
=======
                  <Calendar
                    mode="single"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}"
                    disabled={(date) => date < form && form.getValues("startDate")}
                    initialFocus;
          </FormItem>)}

        <FormField;
          control={form.control}"
          name="start_date";

              <FormLabel > Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;"
                      variant={"outline"}"`
                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}
                    >;
                      {field.value ? ("
                        format (field.value, "PPP")) : (

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
          control={form.control}"
          name="end_date";

              <FormLabel > End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;"
                      variant={"outline"}"`
                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}
                    >;
                      {field.value ? ("
                        format (field.value, "PPP")) : (

                    mode="single";
                    selected={field.value || undefined}
                    on_select={field.on_change}"
                    disabled={(date) => date < form.get_values ("start_date")}
                    initial_focus;
<<<<<<< HEAD

<Calendar;
=======
                  <Calendar;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    mode="single";
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus;
                  />;
                    onSelect={field && field.onChange}"
                    disabled={(date) => date < form && form.getValues("startDate")}"
                    initialFocus;
          )}"
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
          name="start_date";"
            <FormItem className="flex flex - col">;"

              <FormLabel > Start Date;

                <PopoverTrigger as_child>;

                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}"
                    >;
                        <span > Pick a date</span>)}"
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;"

                <PopoverContent className="w - auto p - 0" align="start">;"

                    mode="single";"
                    selected={field.value}
                    on_select={field.on_change}
                    disabled={(date) => date < new Date ()}

</Calendar>

                </PopoverContent>;
              </Popover>;
              <FormMessage />;

        />;
      </div>;
    </>;

<<<<<<< HEAD
            </FormItem>)}
=======



  );
            </FormItem>;
          )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        />;
      </div>;
<<<<<<< HEAD
    </>;
  ),;}
 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues> 
}form 
}: ProjectDetailsFieldsProps) {
  return (<> <FormField control= {
  form.control 
}</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Scope Summary</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Be specific about what is included and any limitations </FormDescription> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>End Date (Optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormDescription> Leave empty if the end date is flexible </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> </>) 
}
        />
      </div>
    </>
        />;
      </div>;
    </>;
  );
}
=======
    </>);
<<<<<<< HEAD
}

            </FormItem>;
          )}
        />;
      </div>;
    </>;
  ),;}
 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues> 
}form 
}: ProjectDetailsFieldsProps) {
  return (<> <FormField control= {
  form.control 
}</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Scope Summary</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Be specific about what is included and any limitations </FormDescription> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>End Date (Optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormDescription> Leave empty if the end date is flexible </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> </>) 
}
        />
      </div>
    </>
        />;
      </div>;
    </>;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
