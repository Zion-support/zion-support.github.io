FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage

  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage;

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;

<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  FormField,
  FormItem,
  FormLabel,
  FormControl,

  FormDescription,
  FormMessage,;
<<<<<<< HEAD
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from './validation';
interface DescriptionFieldsProps {
=======

} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string;
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;

  return (
    <>;
<<<<<<< HEAD

        control={control}
        name="description"
control={control}
        name="description"

        control={control}
        name="description"        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
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
      <FormField
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        control={control}
        name="description"

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
<<<<<<< HEAD

              <Textarea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function DescriptionFields({
  control
  handleEditorChange
  editorContent
}: DescriptionFieldsProps) {
  return (
    <>
      <FormField
        control;
                  field.onChange(e.target.value)

<<<<<<< HEAD

export function DescriptionFields({
  control
  handleEditorChange
  editorContent
}: DescriptionFieldsProps) {
  return (
    <>
      <FormField
        control;
                  field.onChange(e.target.value)

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',
import { Control } from 'react-hook-form',
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",

import { JobSchemaType } from './validation',
interface DescriptionFieldsProps {}
  control: Control<JobSchemaType>,
  handleEditorChange: (content: string) => void,
  editorContent: string';
import React from 'react',;'
import { Control } from 'react-hook-form',;"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",;"
import { Textarea } from "@/components/ui/textarea",;'
import { JobSchemaType } from './validation',;
interface DescriptionFieldsProps {;
  control: Control<JobSchemaType>,;
  handleEditorChange: (content: string) => void,;
  editorContent: string;
}
;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        control={control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
<<<<<<< HEAD
=======
            <FormControl>
<<<<<<< HEAD
              <Textarea
              <Textarea 
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              <Textarea
              <Textarea 

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e && e.target.value);
                  field && field.onChange(e && e.target.value);
<<<<<<< HEAD
                }}
                className="min-h-[200px]";
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                }}

                className="min-h-[200px]";
<<<<<<< HEAD
'
import React from './react';'
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Control  } from './react - hook - form';
import {}

  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,

  control: Control < JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editor_content: string;
}

        name="description";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Job Description</FormLabel>;
            <FormControl>;
              <Textarea;
                value={editor_content}

              <Textarea ;

                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value),;
                  field.onChange(e.target.value),;
                }}
<<<<<<< HEAD
                className="min-h-[200px]";

=======
                className="min - h-[200px]";
<<<<<<< HEAD
              <Textarea ;
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value),;
                  field.onChange(e.target.value),;
                }}
                className="min-h-[200px]";
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="responsibilities";
=======

<<<<<<< HEAD
=======
      />;


      <FormField
        control={control}
        name="responsibilities"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
              <Textarea;
                placeholder="List the main responsibilities of this job";
                className="resize-none min-h-[100px]";
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="qualifications";
=======

<<<<<<< HEAD
          </FormItem>)}
      />;
      <FormField;
        control={control}"
=======
      />;


      <FormField
        control={control}
        name="qualifications"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize-none min-h-[100px]";
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="benefits";
=======

      />;


      <FormField
        control={control}
        name="benefits"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea;
                placeholder="List the benefits offered for this job";
                className="resize-none min-h-[100px]";
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="application_instructions";
=======

      />;


      <FormField
        control={control}
        name="application_instructions"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
=======
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </FormItem>)}
      />;
      <FormField;
        control={control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        name="application_instructions";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Application Instructions (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD

  );});
=======
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize - none min - h-[100px]";
<<<<<<< HEAD
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize-none min-h-[100px]";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
                }}
                className="min-h-[200px]"
                placeholder="Enter a detailed description of the job role"
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
        name="responsibilities"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Responsibilities (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="List the main responsibilities of this job"
                className="resize-none min-h-[100px]"
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
        name="qualifications"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qualifications (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="List the required qualifications for this job"
                className="resize-none min-h-[100px]"
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
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Benefits (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="List the benefits offered for this job"
                className="resize-none min-h-[100px]"
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
        name="application_instructions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Application Instructions (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {...field}
              />
            </FormControl>
            <FormDescription>
              Provide instructions on how to apply for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
          </FormItem>;
        )}

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
        )}
      />
    </>
      />;
    </>;
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
