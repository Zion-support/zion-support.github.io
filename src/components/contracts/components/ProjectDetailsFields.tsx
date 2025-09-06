<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

<<<<<<< HEAD
=======
import { format } from "date-fns";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

import { format } from "date-fns";
=======
import { format } from 'date-fns'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
} from "@/components/ui/form"
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;

import { format } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form",
import { 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { ContractFormValues } from "./ContractForm"

interface ProjectDetailsFieldsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
<<<<<<< HEAD
import { format } from 'date - fns';
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from 'react - hook - form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Button } from '@/components / ui / button';
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { Calendar } from '@/components / ui / calendar';
import { ContractFormValues } from './ContractForm';
import { format  } from './date - fns';
import { UseFormReturn, ControllerRenderProps  } from './react - hook - form';
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage;
} from "@/components / ui / form",
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Button  } from '@/components / ui / button';
import { Popover, PopoverContent, PopoverTrigger  } from '@/components / ui / popover';
import { Calendar  } from '@/components / ui / calendar';
import { ContractFormValues  } from './ContractForm';
interface ProjectDetailsFieldsProps {
  form: UseFormReturn < ContractFormValues>;  form: UseFormReturn < ContractFormValues>;
}
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from 'react-hook-form';
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { ContractFormValues } from './ContractForm';
import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription, ;
  FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
}
export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;
  return (
    <>;
      <FormField
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx


        render={({
          field
        }: {

        control={form.control}

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
<<<<<<< HEAD
import { ContractFormValues } from "./ContractForm"

interface ProjectDetailsFieldsProps {
=======
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "projectName"> }) => (
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

<<<<<<< HEAD
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea

=======
            </FormControl>

>>>>>>>             <FormMessage />
=======
<<<<<<< HEAD
            <FormMessage />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </FormItem>
        )}
      />
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
<<<<<<< HEAD
========
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (;
        name="projectName";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            <FormMessage />;
          </FormItem>;
        )}
      />;
      <FormField
        control={form && form.control}
        name='scopeSummary'
          field: ControllerRenderProps < ContractFormValues, 'project_name'>;
        }) => (
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }, ) => (
        name="project_name";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "project_name"> }) => (
          <FormItem>;
            <FormLabel > Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
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
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <FormField
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
<<<<<<< HEAD
>>>>>>>           <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
=======
=======
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
      <FormField;
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Be specific about what is included and any limitations
            </FormDescription>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
        name="scopeSummary";
        render={({ field }: { field: ControllerRenderProps<ContractFormValues "scopeSummary"> }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
<<<<<<< HEAD
=======
>>>>>>>         )}
ursor/fix-website-loading-errors-and-merge-6662
========
        )}
      />;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
        <FormField
          control={form && form.control}
          name='startDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>      ;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField
          control = {form && form.control,}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (;
            <FormItem className="flex flex-col">;
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
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx


========
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
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
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <Textarea;
                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min-h-[120px]";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
<<<<<<< HEAD
        )}
<<<<<<< HEAD
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> }) => (
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
                  <Calendar
                    mode="single"
                    selected={field && field.value}
                    onSelect={field && field.onChange}
                    disabled={(date) => date < new Date()}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
          field: ControllerRenderProps < ContractFormValues, 'scope_summary'>;
        }) => (          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';
                className='min - h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }, ) => (
      <FormField;
        control={form.control}
        name="scope_summary";
        render={({ field }: { field: ControllerRenderProps < ContractFormValues, "scope_summary"> }) => (
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder='Describe the project scope, deliverables, and expectations...';
                className='min - h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations...";
                className="min - h-[120px]";
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Be specific about what is included and any limitations;
            </FormDescription>;
            <FormMessage />;

          </FormItem>;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        )}
>>>>>>>       />
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}
      />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD

=======
>>>>>>>               <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
>>>>>>>                       {field.value ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      {field.value ? (
>>>>>>>                         format(field.value, "PPP")
=======
<<<<<<< HEAD
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
=======
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      {field.value ? (
                        format(field.value, "PPP")
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

                    initialFocus
                  />
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
<<<<<<< HEAD
>>>>>>>                     initialFocus
ursor/fix-website-loading-errors-and-merge-6662
        <FormField;
          control = {form.control, }
          name="start_date";
          render={({ field }: { field: ControllerRenderProps < ContractFormValues, "start_date"> }, ) => (
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
                    selected={field.value}
                    on_select={field.on_change}
                    disabled={date => date < new Date ()}                    initial_focus                    mode="single";
                    selected = {field.value, }
                    on_select = {field.on_change, }
                    disabled = {(date, ) => date < new Date (), }
                    >;
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

        />;


========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
        <FormField
          control={form && form.control}
          name='endDate'
          render={({
            field
          }: {
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

            field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>        ;

========
            field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (;
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>        ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
        <FormField
          control = {form && form.control,}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (;
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {field.value ? (;
                        format(field.value, "PPP");
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

>>>>>>>                     initialFocus
>>>>>>>                   />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    initialFocus
                  />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        />
        <FormField
          control={form.control}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
        />;
        <FormField;
          control={form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
        />;
        <FormField;
          control={form.control}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD

=======
>>>>>>>               <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
>>>>>>>                       {field.value ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      {field.value ? (
>>>>>>>                         format(field.value, "PPP")
=======
<<<<<<< HEAD
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
=======
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      {field.value ? (
                        format(field.value, "PPP")
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
              <FormDescription>
                Leave empty if the end date is flexible
              </FormDescription>
              <FormMessage />
            </FormItem>
          name="endDate";
          render={({ field }: { field: ControllerRenderProps<ContractFormValues "endDate"> }) => (;
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            <FormItem className="flex flex-col">;
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
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
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
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
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
                    disabled = {(date,) => date < form && form.getValues("startDate"),}
                    >;
                      {field && field.value ? (;
                        format(field && field.value, "PPP");
                      ) : (;
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                      ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        <span>Pick a date</span>;
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx


>>>>>>>                       )}
========
                      )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
                  <Calendar
                    mode="single"
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx
=======
                      ) : (;
                        <span>Pick a date</span>;
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
                    mode="single"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        />
      </div>
    </>
  )
};
;
}
<<<<<<< HEAD
=======
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
      </div>;
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
========
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
=======
                  <Calendar;
                    mode="single";
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
                  />;
                </PopoverContent>;
              </Popover>;
              <FormDescription>;
                Leave empty if the end date is flexible;
              </FormDescription>;
              <FormMessage />;
<<<<<<<< HEAD:src/components/contracts/components/ProjectDetailsFields.tsx


;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
  );
}
            </FormItem>)}
        />;
      </div>;
    </>);
}
=======
            </FormItem>;
          )}
        />;
      </div>;
    </>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/components/ProjectDetailsFields.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
