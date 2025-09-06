<<<<<<< HEAD

import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react'
<<<<<<< HEAD
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { 
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
=======
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { ContractFormValues } from "./ContractForm"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>
}
=======
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,;
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { ContractFormValues } from './ContractForm';

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
              <Input placeholder='AI Website Development' {...field} />            </FormControl>        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> },) => (
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
=======
              <Input placeholder='AI Website Development' {...field} />
            </FormControl>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            <FormMessage />
          </FormItem>
        )}
      />
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <FormField
        control={form.control}
        name='scopeSummary'
        render={({
          field
        }: {
<<<<<<< HEAD
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>
        }) => (          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                {...field}        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> },) => (
      <FormField
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
=======
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'
<<<<<<< HEAD
                className='min-h-[120px]'                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
=======
                className='min-h-[120px]'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <FormField
          control={form.control}
          name='startDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'startDate'>
          }) => (
<<<<<<< HEAD
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control = {form.control,}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> },) => (
            <FormItem className="flex flex-col">
=======
            <FormItem className='flex flex-col'>
              <FormLabel>Start Date</FormLabel>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
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
                    selected={field.value}
                    onSelect={field.onChange}
<<<<<<< HEAD
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
=======
                    disabled={date => date < new Date()}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <FormField
          control={form.control}
          name='endDate'
          render={({
            field
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>
          }) => (
<<<<<<< HEAD
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>
        <FormField
          control = {form.control,}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> },) => (
            <FormItem className="flex flex-col">
=======
            <FormItem className='flex flex-col'>
              <FormLabel>End Date (Optional)</FormLabel>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
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
<<<<<<< HEAD
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
                    selected={field.value |undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
=======
                    disabled={date => date < form.getValues('startDate')}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
