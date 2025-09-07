<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { format } from "date-fns";
=======


import { format } from "date-fns",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { format } from "date-fns",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
=======

import { format } from "date-fns",";
import { CalendarIcon } from "lucide-react";"
import { UseFormReturn } from "react-hook-form";

import {};
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage"
} from "@/components/ui/form";"
import { Input } from "@/components/ui/input";"
import { Textarea } from "@/components/ui/textarea";"
import { Button } from "@/components/ui/button";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
} from "@/components/ui/popover";
"
import { Calendar } from "@/components/ui/calendar";"
import { ContractFormValues } from "./ContractForm";
<<<<<<< HEAD
interface ProjectDetailsFieldsProps {
import { CalendarIcon } from "lucide-react",;
import { UseFormReturn } from "react-hook-form",;
import { 

import { format } from "date-fns",""
import { CalendarIcon } from "lucide-react";""
import { UseFormReturn } from "react-hook-form";"
import {
  // TODO: Implement
}
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage;"
} from "@/components/ui/form";""
import { Input } from "@/components/ui/input";""
import { Textarea } from "@/components/ui/textarea";""
import { Button } from "@/components/ui/button";""
} from "@/components/ui/popover";""
import { Calendar } from "@/components/ui/calendar";""
import { ContractFormValues } from "./ContractForm";"
interface ProjectDetailsFieldsProps {
  // TODO: Implement
}"
import { CalendarIcon } from "lucide-react",""
import { UseFormReturn } from "react-hook-form","
  // TODO: Implement
pr-12325
}

  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 

  FormDescription, 
  FormMessage 
} from "@/components/ui/form",


import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  form: UseFormReturn<ContractFormValues>;
}
=======


"
} from "@/components/ui/form";"
import { Input } from "@/components/ui/input";"
import { Textarea } from "@/components/ui/textarea";"
import { Button } from "@/components/ui/button";

import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;


"
} from "@/components/ui/popover";
"
import { Calendar } from "@/components/ui/calendar";"
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  form: UseFormReturn<ContractFormValues>;
}

<<<<<<< HEAD
<<<<<<< HEAD
export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
=======

export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;


  form: UseFormReturn<ContractFormValues>;
}

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;

  form: UseFormReturn<ContractFormValues>;
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
  form: UseFormReturn<ContractFormValues>;
}
  form: UseFormReturn<ContractFormValues>;
}

  form: UseFormReturn<ContractFormValues>;
}

export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <>;
      <FormField;
        control={form && form.control}"
        name="projectName"
        render={({ field }) => (
<<<<<<< HEAD
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}

=======
        control={form.control}
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      />;

/>;
      <FormField
      />;
      <FormField;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <FormField
=======
      <FormField
        control={form && form.control}
        name="scopeSummary"      <FormField
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        control={form && form.control}
        name="scopeSummary"      <FormField
        control={form && form.control}
        name="scopeSummary"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <FormControl>;"
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;



      <FormField;
        control={form && form.control}"
        name="scopeSummary"



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
<<<<<<< HEAD
                className="min-h-[120px]";                {...field}
=======
              <Textarea;"
                placeholder="Describe the project scope, deliverables, and expectations...";"
                className="min - h-[120px]";



                {...field}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                className="min - h-[120px]";

<Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";
                {...field}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                className="min-h-[120px]";                {...field}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <FormMessage />;

/>
      <FormField
      />;
      <FormField;
        control={form.control}
        name="scopeSummary"
        render={({ field }) => (
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
<<<<<<< HEAD
              Be specific about what is included and any limitations;
=======
              Be specific about what is included and any limitations
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      

"
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
<<<<<<< HEAD
=======
      />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
=======
            <FormMessage />;        <FormField
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <FormMessage />;        <FormField
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          control={form && form.control}
          name="startDate"          render={({ field }) => (;
=======

        <FormField;
          control={form && form.control}"
          name="startDate"

          </FormItem>;
        )}
      />;
      ;"
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}"
          name="startDate";


        <FormField;
          control={form && form.control}"
          name="startDate"

          render={({ field }) => (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      />;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <FormMessage />;        <FormField
          control={form && form.control}
          name="startDate"          render={({ field }) => (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    <Button"
                      variant={"outline"}"
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;"
                        format(field && field.value, "PPP");
                      ) : (;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) :(;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                        <span>Pick a date</span>;
                      )}"
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;"
                <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
                  <Calendar
                    mode="single"
                    selected={field && field.value}
<<<<<<< HEAD
                    onSelect={field && field.onChange}                    disabled={(date) => date < new Date()}
=======

                    disabled={(date) => date < new Date()}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    onSelect={field && field.onChange}
<Calendar;
                    mode="single";
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                    onSelect={field && field.onChange}                    disabled={(date) => date < new Date()}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    initialFocus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
<<<<<<< HEAD
            </FormItem>;
          )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
        />
=======
        />;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        />;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        <FormField
          control={form && form.control}
/>;

        />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <FormField
          control={form && form.control}

        />;
        <FormField;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          control={form.control}
<<<<<<< HEAD
          name="endDate"                  <Calendar
=======


        />;
        <FormField;



                  <Calendar"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
control={form.control}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        />;
        <FormField;

          control={form.control}
          name="endDate"                  <Calendar
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    mode="single"
          control={form.control}
        <FormField;
          control={form && form.control}"
          name="endDate"
<<<<<<< HEAD
          render={({ field }) => (;
=======

          render={({ field }) => (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    <Button"
                      variant={"outline"}"`
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;"
                        format(field && field.value, "PPP");
                      ) : (;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button;
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >;
                      {field.value ? (;
                        format(field.value, "PPP");
                      ) :(;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                        <span>Pick a date</span>;
                      )}"
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;"
                <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <Calendar
                    mode="single"
<<<<<<< HEAD
=======
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <Calendar
<<<<<<< HEAD
                    mode="single"                  <Calendar
=======


                  <Calendar"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    mode="single"
                  <Calendar
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  <Calendar
                    mode="single"                  <Calendar
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}"
                    disabled={(date) => date < form && form.getValues("startDate")}
                    initialFocus;
          </FormItem>)}
<<<<<<< HEAD
      />;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
=======
      />;"
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <FormField;
          control={form.control}"
          name="start_date";
<<<<<<< HEAD
          render={({ field }) => (
<<<<<<< HEAD
<<<<<<< HEAD
            <FormItem className="flex flex-col">;
=======
          render={({ field }) => ("
            <FormItem className="flex flex - col">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <FormItem className="flex flex - col">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <FormItem className="flex flex-col">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                        <span > Pick a date</span>)}
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p-0" align="start">;
                  <Calendar;
=======
                        <span > Pick a date</span>)}"
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;"
                <PopoverContent className="w - auto p - 0" align="start">;
                  <Calendar;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
          render={({ field }) => (
<<<<<<< HEAD
<<<<<<< HEAD
            <FormItem className="flex flex-col">;
=======
          render={({ field }) => ("
            <FormItem className="flex flex - col">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <FormItem className="flex flex - col">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <FormItem className="flex flex-col">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                        <span > Pick a date</span>)}
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p-0" align="start">;
                  <Calendar;
=======
                        <span > Pick a date</span>)}"
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;"
                <PopoverContent className="w - auto p - 0" align="start">;
                  <Calendar;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    mode="single";
                    selected={field.value || undefined}
                    on_select={field.on_change}"
                    disabled={(date) => date < form.get_values ("start_date")}
                    initial_focus;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<Calendar;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );

=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </FormItem>)}
        />;
      </div>;
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</FormMessage>
            </FormItem>)}
        <FormField;

          control={form.control}"
          name="end_date";"
              <FormLabel > End Date (Optional);






                    selected={field.value || undefined}
                    on_select={field.on_change}"
                    disabled={(date) => date < form.get_values ("start_date")}"



  );
    </>);
"`;
pr-12325
}
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
