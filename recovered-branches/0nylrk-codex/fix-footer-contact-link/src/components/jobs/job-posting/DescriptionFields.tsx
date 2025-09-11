

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,;
import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from './validation';
interface DescriptionFieldsProps {
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;

  return (
    <>;
      <FormField
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
=======
=======
=======
=======

        control={control}
        name="description"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
==============
              <Textarea
=======

=======
=======

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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e && e.target.value);
                  field && field.onChange(e && e.target.value);
      />;


      <FormField
        control={control}
        name="responsibilities"

      <FormField
        control={control}
        name="qualifications"
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                {...field}
              />
            </FormControl>
            <FormDescription>
              Provide instructions on how to apply for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
      />;
    </>;
          </FormItem>)}
      />;
    </>);
<<<<<<< HEAD
}
  ),;}
 interface DescriptionFieldsProps {
  control: Control<JobSchemaType>;
handleEditorChange: (content: string) => void;
editorContent: string 
}control, handleEditorChange, editorContent 
}: DescriptionFieldsProps) {
  return (<> <FormField control= {
  control 
}/> </FormControl> <FormDescription> Detailed description of the job role. </FormDescription> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Responsibilities (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> List the main responsibilities of this job. </FormDescription> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Qualifications (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> List the required qualifications for this job. </FormDescription> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Benefits (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> List the benefits offered for this job. </FormDescription> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Application Instructions (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Provide instructions on how to apply for this job. </FormDescription> <FormMessage /> </FormItem>) 
}/> </>) 
}
=======        )}
      />
    </>
      />;
    </>;
  );
=======
          </FormItem>)}
      />;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
