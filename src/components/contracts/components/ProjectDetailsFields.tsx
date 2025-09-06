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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues>;
=======
  form: UseFormReturn<ContractFormValues>
}

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name='projectName'
        render={({
          field,
        }: {
          field: ControllerRenderProps<ContractFormValues, 'projectName'>;
        }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder='AI Website Development' {...field} />            </FormControl>
=======
        name="projectName"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "projectName"> }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="AI Website Development" {...field} />
            </FormControl>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='scopeSummary'
        render={({
          field,
        }: {
          field: ControllerRenderProps<ContractFormValues, 'scopeSummary'>;
        }) => (          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'                {...field}
=======
      
      <FormField
        control={form.control}
        name="scopeSummary"
        render={({ field }: { field: ControllerRenderProps<ContractFormValues, "scopeSummary"> }) => (
          <FormItem>
            <FormLabel>Scope Summary</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
                placeholder='Describe the project scope, deliverables, and expectations...'
                className='min-h-[120px]'
=======
                placeholder="Describe the project scope, deliverables, and expectations..."
                className="min-h-[120px]"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {...field}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            field,
          }: {
            field: ControllerRenderProps<ContractFormValues, 'startDate'>;
          }) => (
            <FormItem className='flex flex-col'>              <FormLabel>Start Date</FormLabel>
=======
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "startDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    >
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
                    disabled={date => date < new Date()}                    initialFocus
=======
                    disabled={(date) => date < new Date()}
                    initialFocus
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='endDate'
          render={({
            field,
          }: {
            field: ControllerRenderProps<ContractFormValues, 'endDate'>;
          }) => (
            <FormItem className='flex flex-col'>              <FormLabel>End Date (Optional)</FormLabel>
=======
        
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }: { field: ControllerRenderProps<ContractFormValues, "endDate"> }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    >
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
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={date => date < form.getValues('startDate')}                    initialFocus
=======
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
