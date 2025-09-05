
import React from 'react';
import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from &quot;@/components/ui/form&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { JobSchemaType } from './validation';

interface DescriptionFieldsProps {
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string;
}

export function DescriptionFields({ control, handleEditorChange, editorContent }: DescriptionFieldsProps) {
  return (
    <>
      <FormField
        control={control}
        name=&quot;description&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
              <Textarea 
                value={editorContent}
                onChange={(e) => {
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);
                }}
                className=&quot;min-h-[200px]&quot;
                placeholder=&quot;Enter a detailed description of the job role&quot;
              />
            </FormControl>
            <FormDescription>
              Detailed description of the job role.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;responsibilities&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Responsibilities (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the main responsibilities of this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
              />
            </FormControl>
            <FormDescription>
              List the main responsibilities of this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;qualifications&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qualifications (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the required qualifications for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
              />
            </FormControl>
            <FormDescription>
              List the required qualifications for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;benefits&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Benefits (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the benefits offered for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
              />
            </FormControl>
            <FormDescription>
              List the benefits offered for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;application_instructions&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Application Instructions (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;Provide instructions on how to apply for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
              />
            </FormControl>
            <FormDescription>
              Provide instructions on how to apply for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
