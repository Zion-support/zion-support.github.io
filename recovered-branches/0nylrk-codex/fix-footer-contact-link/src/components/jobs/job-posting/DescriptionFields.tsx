
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Control } from 'react-hook-form',
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { JobSchemaType } from './validation',
=======
import React from 'react';
import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from &quot;@/components/ui/form&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { JobSchemaType } from './validation';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface DescriptionFieldsProps {
  control: Control<JobSchemaType>,
  handleEditorChange: (content: string) => void,
  editorContent: string
=======
import React from 'react',;
import { Control } from 'react-hook-form',;
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import { JobSchemaType } from './validation',;
interface DescriptionFieldsProps {;
  control: Control<JobSchemaType>,;
  handleEditorChange: (content: string) => void,;
  editorContent: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function DescriptionFields({ control, handleEditorChange, editorContent }: DescriptionFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;description&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
              <Textarea 
=======
        name="description";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
              <Textarea;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);
                }}
<<<<<<< HEAD
                className=&quot;min-h-[200px]&quot;
                placeholder=&quot;Enter a detailed description of the job role&quot;
              />
            </FormControl>
            <FormDescription>
              Detailed description of the job role.
            </FormDescription>
            <FormMessage />
          </FormItem>
=======
                className="min-h-[200px]";
                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;responsibilities&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Responsibilities (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the main responsibilities of this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
=======
        name="responsibilities";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the main responsibilities of this job";
                className="resize-none min-h-[100px]";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;qualifications&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qualifications (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the required qualifications for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
=======
        name="qualifications";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize-none min-h-[100px]";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;benefits&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Benefits (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the benefits offered for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
=======
        name="benefits";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the benefits offered for this job";
                className="resize-none min-h-[100px]";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
      <FormField;
        control={control}
<<<<<<< HEAD
        name=&quot;application_instructions&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Application Instructions (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;Provide instructions on how to apply for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
=======
        name="application_instructions";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize-none min-h-[100px]";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </>;
  );
}
;