          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {


      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")

    } finally {
      setIsSubmitting(false)
    }
  }
  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
import React, { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
    <div className='space-y-6'>;
      <div className='flex items-center space-x-2'>;
        <FileText className='h-5 w-5 text-primary' />;
        <h2 className='text-xl font-semibold'>Report an Issue</h2>;
      </div>;
          <FormField
            control={form && form.control}
            name='reason_code'
      setIsSubmitting (true);
      const dispute = await create_dispute ({
        project_id: project_id,
        milestone_id: milestone_id,
        reason_code: values.reason_code,
        description: values.description,
      });
      // Check condition
if ( {) {
  $2
}
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        // Check condition
if ( {) {
  $2
}
          // log_info (`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
        toast.success ('Your dispute has been submitted');
        // Check condition
if ( {) {
  $2
}
          onDisputeCreated (dispute.id);
        }
      }
    } catch (error) {
      logErrorToProduction ('Error submitting dispute:', { data: error });
      toast.error ('Failed to submit dispute. Please try again.');
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <div className='space - y-6'>;
      <div className='flex items - center space - x-2'>;
        <FileText className='h - 5 w - 5 text - primary' />;
        <h2 className='text - xl font - semibold'>Report an Issue</h2>;
      </div>;
      <Form {...form}>;
        <form on_submit={form.handle_submit (on_submit)} className='space - y-6'>;
          <FormField;
            control={form.control}
            name='reason_code';
            render={({
              field
            }: {
                <Select
                  onValueChange={field && field.onChange}
                  defaultValue={field && field.value}>;
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel > Reason for dispute</FormLabel>;
                <Select;
                  onValueChange={field.on_change}
                  default_value={field.value}
                >;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select a reason' />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
          <FormField
            control={form && form.control}
            name='description'
                    {Object.entries (disputeReasonLabels).map (
                      ([value, label]) => (
                        <SelectItem key={value} value={value}>;
                          {label}
                        </SelectItem>))}                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name='description';
            render={({
              field
            }: {
                  <Textarea
                    placeholder='Please provide specific details about the issue...'
                    className='min-h-[150px]'
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'description';
              >;
            }) => (              <FormItem>;
                <FormLabel > Describe the issue in detail</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder='Please provide specific details about the issue...';
                    className='min - h-[150px]';
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
              <div className='space-y-4'>
                <Input
                  type='file'
                  multiple
                  onChange={handleFileChange}
                        <li
                          key={index}
                          className='flex items-center justify-between text-sm bg-muted/30 p-2 rounded'>;
                          <span>;
                            {file && file.name} ({(file && file.size / 1024).toFixed(1)} KB);
                          </span>;
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                      ))}
                    </ul>;
                  </div>;
                )}
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;


  setIsSubmitting (true);
const dispute = await create_dispute ({
  project id: project_id;
milestone id: milestone_id;
reason code: values.reason code;
description: values.description;
});
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded // Check condition
if ( {) {
  $2
}
}finally {
  setIsSubmitting (false);
}";
}return (<div className="space - y-6" > <div className="flex items - center space - x-2" > <FileText className="h - 5 w - 5 text - primary" /> <h2 className="text - xl font - semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel > Reason for dispute</FormLabel> <Select onValueChange= {
  field.on_change;
}default_value= {
  field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {
  value;
}value= {
  value;
}> {
