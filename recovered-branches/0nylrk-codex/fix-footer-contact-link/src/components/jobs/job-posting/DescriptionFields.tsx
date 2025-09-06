
import React from "react";
import { Control } from "react-hook-form";
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import { JobSchemaType } from './validation';
interface DescriptionFieldsProps {
=======
import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string
}
<<<<<<< HEAD
export function DescriptionFields({
  control
  handleEditorChange
  editorContent
}: DescriptionFieldsProps) {
=======

export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <FormField
<<<<<<< HEAD
        control;
                  field.onChange(e.target.value)
=======
        control={control}
        name="description"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
              <Textarea
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e && e.target.value);
                  field && field.onChange(e && e.target.value);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                }}
                className="min-h-[200px]";
                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
=======
      />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
=======
      />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
=======
      />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
=======
      />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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