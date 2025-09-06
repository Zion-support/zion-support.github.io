<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { 
  FormField;
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {
<<<<<<< HEAD
  form: UseFormReturn<ContractFormValues>;
=======

import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { 
  FormField;
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 

} from "@/components/ui/form",

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  form: UseFormReturn<ContractFormValues>
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
        name='projectName'
        render={({
          field,
        }: {
          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder='AI Website Development' {...field} />
=======
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
<<<<<<< HEAD
<<<<<<< HEAD

      <FormField
        control={form.control}
        name='scopeSummary'
        render={({
          field,
        }: {
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (
=======
      
      <FormField
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      <FormField
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
<<<<<<< HEAD
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'
=======
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <FormField
          control={form.control}
          name='startDate'
          render={({
            field,
          }: {
            field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (
            <FormItem className='flex flex-col'>
=======
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> }) => (
            <FormItem className="flex flex-col">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> }) => (
            <FormItem className="flex flex-col">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD
<<<<<<< HEAD
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
=======
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                    disabled={date => date < new Date()}
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    disabled={(date) => date < new Date()}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD
<<<<<<< HEAD

        <FormField
          control={form.control}
          name='endDate'
          render={({
            field,
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (
            <FormItem className='flex flex-col'>
=======
        
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
            <FormItem className="flex flex-col">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
            <FormItem className="flex flex-col">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
<<<<<<< HEAD
<<<<<<< HEAD
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
=======
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                    disabled={date => date < form.getValues('startDate')}
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    disabled={(date) => date < form.getValues("startDate")}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
