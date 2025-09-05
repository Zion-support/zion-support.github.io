
<<<<<<< HEAD
import React from 'react',;
import { Control } from 'react-hook-form',;
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import { JobSchemaType } from './validation',;
;
interface DescriptionFieldsProps {;
  control:Control<JobSchemaType>,;
  handleEditorChange:(content:string) => void,;
  editorContent:string;
}
;
export function DescriptionFields({ control, handleEditorChange, editorContent } DescriptionFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={control}
        name="description";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
              <Textarea ;
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value),;
                  field.onChange(e.target.value),;
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
=======
import React from 'react',
import { Control } from 'react-hook-form',
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import { JobSchemaType } from './validation',interface DescriptionFieldsProps {
  control: Control<JobSchemaType>,
  handleEditorChange: (content: string) => void,
  editorContent: string
}

interface DescriptionFieldsProps {_control: Control<JobSchemaType>;
  handleEditorChange: (_content: string) => void;
  editorContent: string;}

export function DescriptionFields(_{_control, _handleEditorChange, _editorContent}: DescriptionFieldsProps) {_return (_<>
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
                  handleEditorChange(e.target.value),
                  field.onChange(e.target.value)
                }}
                className=&quot;min-h-[200px]&quot;
                placeholder=&quot;Enter a detailed description of the job role&quot;              />
            </FormControl>
            <FormDescription>
              Detailed description of the job role.
            </FormDescription>
            <FormMessage />
          </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      />;
;
      <FormField;
        control={control}
<<<<<<< HEAD
        name="responsibilities";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the main responsibilities of this job";
                className="resize-none min-h-[100px]";
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
=======
        name=&quot;responsibilities&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel>Responsibilities (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the main responsibilities of this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}              />
            </FormControl>
            <FormDescription>
              List the main responsibilities of this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      />;
;
      <FormField;
        control={control}
<<<<<<< HEAD
        name="qualifications";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize-none min-h-[100px]";
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
=======
        name=&quot;qualifications&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel>Qualifications (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the required qualifications for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}              />
            </FormControl>
            <FormDescription>
              List the required qualifications for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      />;
;
      <FormField;
        control={control}
<<<<<<< HEAD
        name="benefits";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="List the benefits offered for this job";
                className="resize-none min-h-[100px]";
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
=======
        name=&quot;benefits&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel>Benefits (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;List the benefits offered for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}              />
            </FormControl>
            <FormDescription>
              List the benefits offered for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      />;
;
      <FormField;
        control={control}
<<<<<<< HEAD
        name="application_instructions";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize-none min-h-[100px]";
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
  ),;
=======
        name=&quot;application_instructions&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel>Application Instructions (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder=&quot;Provide instructions on how to apply for this job&quot;
                className=&quot;resize-none min-h-[100px]&quot;
                {...field}              />
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
