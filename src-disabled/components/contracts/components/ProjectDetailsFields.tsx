<<<<<<< HEAD
import { format } from "date-fns";
<<<<<<< HEAD
=======

import { format } from "date-fns";
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { UseFormReturn, ControllerRenderProps } from 'react-hook-form'
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { ContractFormValues } from './ContractForm'
import { format } from "date-fns"
import { UseFormReturn, ControllerRenderProps } from "react-hook-form"
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
} from "@/components/ui/form"
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
import { ContractFormValues } from "./ContractForm"

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { format } from "date-fns";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";

  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

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

interface ProjectDetailsFieldsProps {;

  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
  return (
    <>;
      <FormField
<<<<<<< HEAD
export /**
 * ProjectDetailsFields - Function description
 */
function ProjectDetailsFields() {
  return (
    <>;
      <FormField;
        control={form.control}
        name='project_name';
        render={({
          field
        }: {
        control={form.control}
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { ContractFormValues } from "./ContractForm"

interface ProjectDetailsFieldsProps {
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
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
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
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
=======

        render={({
          field
        }: {

        control={form.control}

<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
=======
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { ContractFormValues } from "./ContractForm",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
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
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
=======
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (
<<<<<<< HEAD
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
ursor/fix-website-loading-errors-and-merge-6662


=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
              <Input placeholder='AI Website Development' {...field} />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
            </FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533

            <FormMessage />
          </FormItem>
        )}
      />
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <FormField
        control={form.control}
        name='scopeSummary'
        render={({
          field
        }: {
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>
        }) => (          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (;
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (;

            </FormControl>
            <FormMessage />
          </FormItem>
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
            </FormControl>;
=======
<<<<<<< HEAD
=======

            </FormControl>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
            <FormMessage />;
          </FormItem>;
        )}
      />;
<<<<<<< HEAD
      <FormField
        control={form && form.control}
        name='scopeSummary'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          field: ControllerRenderProps < ContractFormValues, 'project_name'>;

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
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'',
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (;
      <FormField
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
        control={form && form.control}
        name="scopeSummary""
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (;
=======
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
            </FormControl>
            <FormMessage />
          </FormItem>
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
      <FormField;
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'',
                className='min-h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations..."",
                className="min-h-[120px]""
placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'
                {...field}
<<<<<<< HEAD
              />
            </FormControl>
            <FormDescription>
              Be specific about what is included and any limitations
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <FormField
          control={form.control}
          name='startDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'startDate'>
          }) => (
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control = {form.control,}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (
            <FormItem className="flex flex-col">
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
ursor/fix-website-loading-errors-and-merge-6662
=======
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        )}
      />;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx

      />
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
        <FormField
          control={form && form.control}
          name='startDate''
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx

=======
        <FormField
          control = {form && form.control,}
          name="startDate"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (;
            <FormItem className="flex flex-col">;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button

                      ) : (
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w-auto p-0' align='start'>;
                  <Calendar

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

      <FormField
        control={form.control}

      <FormField;
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (

          <FormItem>

            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"

<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (;
=======
import { format } from "date-fns",;
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",;
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
        control={form.control}
        name="projectName";
        render={({ field } { field:ControllerRenderProps<ContractFormValues "projectName"> }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
      ;
      <FormField;
        control={form.control}
        name="scopeSummary";
        render={({ field } { field:ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx

=======
                className="min-h-[120px]";
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
          </FormItem>;
      />;
      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}
          name="startDate";
          render={({ field } { field:ControllerRenderProps<ContractFormValues "startDate"> }) => (;
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
                      ) :(;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
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

                {...field}

              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;

<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
=======
          </FormItem>;



<<<<<<< HEAD
        )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
<<<<<<< HEAD
=======
<<<<<<< HEAD
          name='startDate'
          render={({
            field,
          }: {
            field: ControllerRenderProps<ContractFormValues, 'startDate'>
          }) => (
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control = {form.control,}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (
            <FormItem className="flex flex-col">
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>

            field: ControllerRenderProps<ContractFormValues, 'startDate'>
          }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Start Date</FormLabel>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                  <Calendar;

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
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
=======
<<<<<<< HEAD
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date < new Date()}                    initialFocus                    mode="single"
                    selected = {field.value,}
                    onSelect = {field.onChange,}
                    disabled = {(date,) => date < new Date(),}
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
=======
                      {field.value ? (
                        format (field.value, "PPP")) : (
                        <span > Pick a date</span>)}
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p - 0" align="start">;
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
        />;
        <FormField
          control={form && form.control}
          name='endDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>        ;
        <FormField
          control = {form && form.control,}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
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

<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date < new Date()}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD
        />
        <FormField
          control={form.control}
        />
        <FormField
          control={form.control}
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
        />;
        <FormField;
          control={form.control}
        />;
        <FormField;
          control={form.control}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      {field.value ? (
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx

=======
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
                    <Button
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
                    mode='single'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx

=======
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
            <FormItem className="flex flex-col">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx

=======
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
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
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
                        <span>Pick a date</span>;

=======
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
        ;
        <FormField;
          control={form.control}
          name="endDate";
          render={({ field } { field:ControllerRenderProps<ContractFormValues "endDate"> }) => (;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
                      ) : (;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
<<<<<<< HEAD

=======
                    mode='single'
                    selected={field.value |undefined}
                    onSelect={field.onChange}
                    disabled={date => date < form.getValues('startDate')}                    initialFocus                    mode="single"
                    selected = {field.value |undefined,}
                    onSelect = {field.onChange,}
                    disabled = {(date,) => date < form.getValues("startDate"),}
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
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx

=======
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
};
;
}
}
}
}
        />;
      </div>;
    </>;
  );
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}
                    disabled={(date) => date < form && form.getValues("startDate")}
                    initialFocus;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name='end_date';
          render={({
            field,
          }: {
            field: ControllerRenderProps < ContractFormValues, 'end_date'>;
          }) => (
            <FormItem className='flex flex - col'>              <FormLabel > End Date (Optional)</FormLabel>;
        <FormField;
          control = {form.control, }
          name="end_date";
          render={({ field }: { field: ControllerRenderProps < ContractFormValues, "end_date"> }, ) => (
            <FormItem className="flex flex - col">;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;
                      variant={'outline'}
                      className={`w - full pl - 3 text - left font - normal ${!field.value && 'text - muted - foreground'}`}
                      {field.value ? (
                        format (field.value, 'PPP')) : (
                        <span > Pick a date</span>)}
                      <CalendarIcon className='ml - auto h - 4 w - 4 opacity - 50' />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className='w - auto p - 0' align='start'>;
                  <Calendar;
                    mode='single';
                    selected={field.value || undefined}
                    on_select={field.on_change}
                    disabled={date => date < form.get_values ('start_date')}                    initial_focus                    mode="single";
                    selected = {field.value || undefined, }
                    on_select = {field.on_change, }
                    disabled = {(date, ) => date < form.get_values ("start_date"), }
                    >;
                      {field.value ? (
                        format (field.value, "PPP")) : (
                        <span > Pick a date</span>)}
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w - auto p - 0" align="start">;
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    on_select={field.on_change}
                    disabled={(date) => date < form.get_values ("start_date")}
                    initial_focus;
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>;
                Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
;
}}}}}}}}}}}}}}}}}}}})))))))))))))))))))
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
            </FormItem>;
          )}
        />;
      </div>;
    </>;
<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
  );
}
;
=======
  ),;}
 import {;
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues> ;
}form ;
}: ProjectDetailsFieldsProps) {;
  return (<> <FormField control= {;
  form.control ;
}<FormItem> <FormLabel>Project Name</FormLabel> <FormControl> <Input placeholder="AI Website Development" {;
  ...field ;
}/> ;
}/> <FormField ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem className="flex flex-col"> ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem className="flex flex-col"> ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormDescription> Leave empty if the end date is flexible </FormDescription> <FormMessage /> </FormItem>) ;
}/> </div> </>) ;
}"
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx

;

<<<<<<< HEAD:src-disabled/components/contracts/components/ProjectDetailsFields.tsx
      </div>
    </>
  );
}
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/contracts/components/ProjectDetailsFields.tsx
