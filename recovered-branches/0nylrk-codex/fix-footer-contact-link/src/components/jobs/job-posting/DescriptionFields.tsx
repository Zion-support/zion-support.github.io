<<<<<<< HEAD
=======
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage


import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======


=======


import React from "react";
import { Control } from "react-hook-form";
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;

=======
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from './validation';
interface DescriptionFieldsProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string
}
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;

  return (
    <>;
      <FormField
<<<<<<< HEAD
        control;
                  field.onChange(e.target.value)

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD

        control={control}
        name="description"
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

        control={control}
        name="description"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Textarea


<<<<<<< HEAD
=======



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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
<<<<<<< HEAD
              <Textarea
              <Textarea 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Textarea
              <Textarea 

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                value={editorContent}
                onChange={(e) => {;
<<<<<<< HEAD
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                }}
                className="min-h-[200px]";
=======
                  handleEditorChange(e && e.target.value);
                  field && field.onChange(e && e.target.value);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                }}
                className="min-h-[200px]";
=======
=======
                }}
                className="min-h-[200px]";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

                value={editorContent}
                onChange={(e) => {;
                }}
                className="min-h-[200px]";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
              <Textarea ;
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value),;
                  field.onChange(e.target.value),;
                }}
                className="min-h-[200px]";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD

      />;


      <FormField
        control={control}
        name="responsibilities"
=======
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="responsibilities";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              <Textarea;
                placeholder="List the main responsibilities of this job";
                className="resize-none min-h-[100px]";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD

      />;


      <FormField
        control={control}
        name="qualifications"
=======
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="qualifications";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD

      />;


      <FormField
        control={control}
        name="benefits"
=======
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="benefits";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              <Textarea;
                placeholder="List the benefits offered for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD

      />;


      <FormField
        control={control}
        name="application_instructions"
=======
          </FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="application_instructions";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                {...field}
              />
            </FormControl>
            <FormDescription>
              Provide instructions on how to apply for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
=======
          </FormItem>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        )}

      />;
    </>;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
          </FormItem>)}
      />;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
=======
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </FormItem>)}
      />;
    </>);
}
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
