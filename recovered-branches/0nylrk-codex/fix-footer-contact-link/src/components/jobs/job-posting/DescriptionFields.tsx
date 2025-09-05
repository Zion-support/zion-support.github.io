
<<<<<<< HEAD
import React from 'react',
import { Control } from 'react-hook-form',
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { JobSchemaType } from './validation',
=======
import React from 'react';
<<<<<<< HEAD
import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from &quot;@/components/ui/form&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { JobSchemaType } from './validation';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface DescriptionFieldsProps {
  control: Control<JobSchemaType>,
  handleEditorChange: (content: string) => void,
  editorContent: string
}
=======

interface DescriptionFieldsProps {_control: Control<JobSchemaType>;
  handleEditorChange: (_content: string) => void;
  editorContent: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function DescriptionFields(_{_control, _handleEditorChange, _editorContent}: DescriptionFieldsProps) {_return (_<>
      <FormField
        control={control}
<<<<<<< HEAD
        name=&quot;description&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
              <Textarea 
                value={editorContent}
                onChange={(e) => {
                  handleEditorChange(e.target.value),
                  field.onChange(e.target.value)
                }}
                className=&quot;min-h-[200px]&quot;
                placeholder=&quot;Enter a detailed description of the job role&quot;
=======
        name="description"
        render={_({ field}) => (_<FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
              <Textarea 
                value={_editorContent}
                onChange={_(e) => {
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);}}
                className="min-h-[200px]"
                placeholder="Enter a detailed description of the job role"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        control={control}
        name=&quot;responsibilities&quot;
        render={({ field }) => (
=======
        control={_control}
        name="responsibilities"
        render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel>Responsibilities (Optional)</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
                placeholder=&quot;List the main responsibilities of this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
=======
                placeholder="List the main responsibilities of this job"
                className="resize-none min-h-[100px]"
                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        control={control}
        name=&quot;qualifications&quot;
        render={({ field }) => (
=======
        control={_control}
        name="qualifications"
        render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel>Qualifications (Optional)</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
                placeholder=&quot;List the required qualifications for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
=======
                placeholder="List the required qualifications for this job"
                className="resize-none min-h-[100px]"
                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        control={control}
        name=&quot;benefits&quot;
        render={({ field }) => (
=======
        control={_control}
        name="benefits"
        render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel>Benefits (Optional)</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
                placeholder=&quot;List the benefits offered for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
=======
                placeholder="List the benefits offered for this job"
                className="resize-none min-h-[100px]"
                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        control={control}
        name=&quot;application_instructions&quot;
        render={({ field }) => (
=======
        control={_control}
        name="application_instructions"
        render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <FormItem>
            <FormLabel>Application Instructions (Optional)</FormLabel>
            <FormControl>
              <Textarea
<<<<<<< HEAD
                placeholder=&quot;Provide instructions on how to apply for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}
=======
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
