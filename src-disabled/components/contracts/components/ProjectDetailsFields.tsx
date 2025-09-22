:src/components/contracts/components/ProjectDetailsFields.tsx

import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;

import { format } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",
import {
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
interface ProjectDetailsFieldsProps {
origin/cursor/automate-test-improve-and-merge-code-2533
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
}
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
name='projectName'
        render={({
          field
        }: {
          field: ControllerRenderProps<ContractFormValues, 'projectName'>
        }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (



import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;

  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
}

export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
  return (
    <>;
      <FormField

        render={({
          field
        }: {

        control={form.control}

:src_backup/components/contracts/components/ProjectDetailsFields.tsx

        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (

import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { ContractFormValues } from "./ContractForm",
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>
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
}
;
export function ProjectDetailsFields({ form }:,  ProjectDetailsFieldsProps) {;
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (

          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />

</FormControl>

              <Input placeholder='AI Website Development' {...field} />
            </FormControl>

        name="projectName""
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => ("
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />"
            </FormControl>

              <Input placeholder='AI Website Development' {...field} />
            </FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533
            <FormMessage />
          </FormItem>
        )}
      />
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (;
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (;
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

            </FormControl>
            <FormMessage />
          </FormItem>
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

          field: ControllerRenderProps < ContractFormValues, 'project_name'>;
        name="projectName"          field: ControllerRenderProps < ContractFormValues, 'project_name'>;
        }) => (
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }, ) => ("
        name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }) => ("
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
<FormField
origin/cursor/automate-test-improve-and-merge-code-2533
        control={form.control}
        name='scope_summary';
        render={({
          field
        }: {
:src/components/contracts/components/ProjectDetailsFields.tsx
field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (;

      <FormField
        control={form && form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'',
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (;
      <FormField
        control={form && form.control}
        name="scopeSummary""
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'',
                className='min-h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations..."",
                className="min-h-[120px]""
placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;

      />
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <FormField
          control={form && form.control}
          name='startDate''
          render={({
            field
          }: {
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
            field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

        <FormField
          control = {form && form.control,}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (;
            <FormItem className="flex flex-col">;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && 'text-muted-foreground'}`}
                      {field && field.value ? (
                        format(field && field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w-auto p-0' align='start'>;
                  <Calendar
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                    mode='single'
                    selected={field && field.value}
                    onSelect={field && field.onChange}
                    disabled={date => date < new Date()}                    initialFocus                    mode="single";
                    selected = {field && field.value,}
                    onSelect = {field && field.onChange,}
                    disabled = {(date,) => date < new Date(),}
                    >;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
                        <span>Pick a date</span>;
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

      <FormField
        control={form.control}
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
      <FormField;
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (
:src_backup/components/contracts/components/ProjectDetailsFields.tsx


          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                className="min-h-[120px]";

          field: ControllerRenderProps < ContractFormValues, 'scope_summary'>;
        }) => (          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';,
                className='min - h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }, ) => ("
      <FormField;
        control={form.control}
        name="scope_summary";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }) => ("
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';,
                className='min - h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations...";,
                className="min - h-[120px]";
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

                {...field}
                className="min-h-[120px]";                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
          </FormItem>;

          </FormItem>;
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
:src_backup/components/contracts/components/ProjectDetailsFields.tsx


            field: ControllerRenderProps<ContractFormValues, 'startDate'>
          }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Start Date</FormLabel>
:src/components/contracts/components/ProjectDetailsFields.tsx
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >

:src/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}"
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}`
                    >
                      {field.value ? (
                        format(field.value, "PPP")"
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />"
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">"
                  <Calendar
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

                    mode="single"
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}
          name="startDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (;
            <FormItem className="flex flex-col">;
              <FormLabel>Start Date</FormLabel>;
                    mode="single""
      />;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control = {form.control, }
          name="start_date";
          render={({ field }: { field: ControllerRenderProps < ContractFormValues, "start_date"> }, ) => ("
            <FormItem className="flex flex - col">;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button;
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
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
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
        <FormField
          control={form && form.control}
          name='endDate''
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>        ;
        <FormField
          control = {form && form.control,}
          name="endDate""
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (;
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
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />'
variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
origin/cursor/automate-test-improve-and-merge-code-2533
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>'
                  <Calendar
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date < new Date()}
:src/components/contracts/components/ProjectDetailsFields.tsx
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

        />
<FormField
          control={form.control}
origin/cursor/automate-test-improve-and-merge-code-2533
          name='endDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>
          }) => (
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>
        <FormField
          control = {form.control,}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (
            <FormItem className="flex flex-col">
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>

            <FormItem className='flex flex-col'>
              <FormLabel>End Date (Optional)</FormLabel>
:src/components/contracts/components/ProjectDetailsFields.tsx
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >

:src/components/contracts/components/ProjectDetailsFields.tsx

                      variant={"outline"}"
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}`
                    >
                      {field.value ? (
                        format(field.value, "PPP")"
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />"
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">"
                  <Calendar
                    mode="single""
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}"
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
variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value |undefined}
                    onSelect={field.onChange}
                    disabled={date => date < form.getValues('startDate')}
origin/cursor/automate-test-improve-and-merge-code-2533
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Leave empty if the end date is flexible
              </FormDescription>
              <FormMessage />
            </FormItem>
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
          )}
        />;
      </div>;
    </>;
  );
}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

        <FormField
          control={form.control}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}

                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}
                    disabled={date => date < form && form.getValues('startDate')}                    initialFocus                    mode="single";
                    selected = {field && field.value || undefined,}
                    onSelect = {field && field.onChange,}
                    disabled = {(date,) => date < form && form.getValues("startDate"),}"
                    >;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
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
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

:src/components/contracts/components/ProjectDetailsFields.tsx
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar
:src_backup/components/contracts/components/ProjectDetailsFields.tsx
                    mode="single"
                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>;
                Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;
;
}}}}}}}}}}}}}}}}}}}})))))))))))))))))))
            </FormItem>;
          )}
        />;
      </div>;
    </>;
  );
}
;

;
:src_backup/components/contracts/components/ProjectDetailsFields.tsx

      </div>
    </>
  );
}
:src/components/contracts/components/ProjectDetailsFields.tsx
