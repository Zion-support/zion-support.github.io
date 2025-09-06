<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import { Control } from "react-hook-form";
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
=======


import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string
}
  return (
    <>;
      <FormField
<<<<<<< HEAD
<<<<<<< HEAD
        control;
                  field.onChange(e.target.value)

=======
<<<<<<< HEAD
        control;
                  field.onChange(e.target.value)
=======
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        control={control}
        name="description"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
              <Textarea
=======

=======
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react',
import { Control } from 'react-hook-form',
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { JobSchemaType } from './validation',
interface DescriptionFieldsProps {
  control: Control<JobSchemaType>,
  handleEditorChange: (content: string) => void,
  editorContent: string
import React from 'react',;
import { Control } from 'react-hook-form',;
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import { JobSchemaType } from './validation',;
interface DescriptionFieldsProps {;
  control: Control<JobSchemaType>,;
  handleEditorChange: (content: string) => void,;
  editorContent: string;
}
;
export function DescriptionFields({ control, handleEditorChange, editorContent }: DescriptionFieldsProps) {;
  return (;
    <>;
      <FormField;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
<<<<<<< HEAD
              <Textarea
              <Textarea 
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                }}
                className="min-h-[200px]";
=======
import React from './react';
import { Control  } from './react - hook - form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components / ui / form';
import { Textarea  } from '@/components / ui / textarea';
import { JobSchemaType  } from './validation';
interface DescriptionFieldsProps {
  control: Control < JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editor_content: string;
}
export /**
 * DescriptionFields - Function description
 */
function DescriptionFields() {
  return (
    <>;
      <FormField;
        control={control}
        name="description";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Job Description</FormLabel>;
            <FormControl>;
              <Textarea;
                value={editor_content}
                on_change={(e) => {
                  handleEditorChange (e.target.value);
                  field.on_change (e.target.value);
                }}
                className="min - h-[200px]";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;
      <FormField
        control={control}
        name="responsibilities"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="List the main responsibilities of this job"
                className="resize-none min-h-[100px]"
=======
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="responsibilities";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Responsibilities (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the main responsibilities of this job";
                className="resize - none min - h-[100px]";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
      <FormField
        control={control}
        name="qualifications"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="List the required qualifications for this job"
                className="resize-none min-h-[100px]"
=======
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="qualifications";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Qualifications (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize - none min - h-[100px]";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
      <FormField
        control={control}
        name="benefits"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="List the benefits offered for this job"
                className="resize-none min-h-[100px]"
=======
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="benefits";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Benefits (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the benefits offered for this job";
                className="resize - none min - h-[100px]";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
      <FormField
        control={control}
        name="application_instructions"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
=======
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="application_instructions";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Application Instructions (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize - none min - h-[100px]";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD

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
      />;
    </>;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
=======
          </FormItem>)}
      />;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}