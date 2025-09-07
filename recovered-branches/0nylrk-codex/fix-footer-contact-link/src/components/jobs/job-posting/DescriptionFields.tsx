<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  FormField
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  FormField,
  FormItem,
  FormLabel,
  FormControl,

  FormDescription,
  FormMessage,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} from "@/components/ui/form";
=======
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";} from "@/components/ui/form";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
<<<<<<< HEAD
=======


} from "@/components/ui/form";
"
import { Textarea } from "@/components/ui/textarea";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from './validation';
interface DescriptionFieldsProps {
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;

  return (
    <>;
<<<<<<< HEAD
<<<<<<< HEAD
      <FormField
<<<<<<< HEAD
        control;
                  field.onChange(e.target.value)

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <FormField

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

        control={control}
        name="description"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Textarea

<<<<<<< HEAD

<<<<<<< HEAD
=======



=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <Textarea


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react',
import { Control } from 'react-hook-form',
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
=======
      <FormField;
        control={control}"
        name="description"

        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;

              <Textarea;
import React from 'react','
import { Control } from 'react-hook-form',"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form","
import { Textarea } from "@/components/ui/textarea",'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export function DescriptionFields({ control, handleEditorChange, editorContent }: DescriptionFieldsProps) {;
  return (;
    <>;
      <FormField;
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        control={control}
=======
export function DescriptionFields() { return null; }
        control={control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <FormControl>
<<<<<<< HEAD
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
=======

              <Textarea;
              <Textarea;
                value={editorContent}
                onChange={(e) => {;
                }}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="min-h-[200px]";
'
import React from './react';'
import { Control  } from './react - hook - form';
import {}
=======
            <FormControl>

              <Textarea
              <Textarea 

                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e && e.target.value);
                  field && field.onChange(e && e.target.value);
                }}
                className="min-h-[200px]";
}}
                className="min-h-[200px]";

                value={editorContent}
                onChange={(e) => {;
                }}
                className="min-h-[200px]";
import React from './react';
import { Control  } from './react - hook - form';
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
<<<<<<< HEAD
  FormMessage,';
} from '@/components / ui / form';'
import { Textarea  } from '@/components / ui / textarea';'
import { JobSchemaType  } from './validation';
interface DescriptionFieldsProps {}
=======
  FormMessage,
} from '@/components / ui / form';
import { Textarea  } from '@/components / ui / textarea';
import { JobSchemaType  } from './validation';
interface DescriptionFieldsProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  control: Control < JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editor_content: string;
}
<<<<<<< HEAD
export /**;
 * DescriptionFields - Function description;
 */
function DescriptionFields() {}
  return (
    <>;
      <FormField;
        control={control}"
=======
export /**
 * DescriptionFields - Function description
 */
function DescriptionFields() {
  return (
    <>;
      <FormField;
        control={control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        name="description";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Job Description</FormLabel>;
            <FormControl>;
              <Textarea;
                value={editor_content}
<<<<<<< HEAD
                on_change={(e) => {}
                  handleEditorChange (e.target.value);
                  field.on_change (e.target.value);
                }}"
                className="min - h-[200px]";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
                on_change={(e) => {
                  handleEditorChange (e.target.value);
                  field.on_change (e.target.value);
                }}
                className="min - h-[200px]";
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Textarea ;
=======
<Textarea ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value),;
                  field.onChange(e.target.value),;
                }}
                className="min-h-[200px]";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;

<<<<<<< HEAD


=======
      />;

      <FormField
        control={control}
        name="responsibilities"
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="responsibilities";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD


              <Textarea;"
                placeholder="List the main responsibilities of this job";"
                className="resize-none min-h-[100px]";



=======
              <Textarea
                placeholder="List the main responsibilities of this job"
                className="resize-none min-h-[100px]"
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
              <Textarea;
                placeholder="List the main responsibilities of this job";
                className="resize-none min-h-[100px]";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;

<<<<<<< HEAD


        render={({ field }) => (;
=======
            <FormControl>        render={({ field }) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <FormControl>        render={({ field }) => (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      />;

      <FormField
        control={control}
        name="qualifications"
</FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="qualifications";
        render={({ field }) => (;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
=======
            <FormControl>        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Textarea
                placeholder="List the required qualifications for this job"
                className="resize-none min-h-[100px]"
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

      />;

      <FormField
        control={control}
        name="benefits"
</FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="benefits";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="List the benefits offered for this job"
                className="resize-none min-h-[100px]"
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

      />;

      <FormField
        control={control}
        name="application_instructions"
</FormItem>;        )}
      />;
;
      <FormField;
        control={control}
        name="application_instructions";
        render={({ field }) => (;
                className="resize-none min-h-[100px]"              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize-none min-h-[100px]";
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
<<<<<<< HEAD
=======


              <Textarea;"
                placeholder="List the required qualifications for this job";"
                className="resize-none min-h-[100px]";



                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;



        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;


              <Textarea;"
                placeholder="List the benefits offered for this job";"
                className="resize-none min-h-[100px]";



                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;



        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </FormItem>)}
      />;
      <FormField;
        control={control}"
        name="application_instructions";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Application Instructions (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize - none min - h-[100px]";

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
                className="resize - none min-h-[100px]";

      />;
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  );}  );
          </FormItem>)}
      />;

} from "@/components/ui/form";""
import { Textarea } from "@/components/ui/textarea";""
import { JobSchemaType } from "./validation";"
interface DescriptionFieldsProps {;
"
} from "@/components/ui/form";""
import { Textarea } from "@/components/ui/textarea";""
import { JobSchemaType } from "./validation";"
interface DescriptionFieldsProps {;"
} from "@/components/ui/form";""
import { Textarea } from "@/components/ui/textarea";""
import { JobSchemaType } from './validation';'
interface DescriptionFieldsProps {
  // TODO: Implement
}'
} from "@/components/ui/form";""
import { Textarea } from "@/components/ui/textarea";"
  control: Control<JobSchemaType>;
</JobSchemaType>
    <>;
      <FormField;
        control={control}"
        name="description""
        control={control}"
        name="description""
        render={({ field }) => (;
</FormField>
          <FormItem>;
</FormItem>
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
</FormControl>
              <Textarea;"
import React from 'react',''
import { Control } from 'react-hook-form',''
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",""
import { Textarea } from "@/components/ui/textarea",""
import { JobSchemaType } from './validation','
interface DescriptionFieldsProps {
  // TODO: Implement
}
  control: Control<JobSchemaType>,
</Textarea>
  control: Control<JobSchemaType>,;
</JobSchemaType>
    <>;
      <FormField;




        control={control}'
        name="description"")
        render={({ field }) => (
</FormField>
          <FormItem>
</FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
</FormControl>


              <Textarea;
              <Textarea;
                value={editorContent})
                onChange={(e) => {;
</Textarea>
  control: Control < JobSchemaType>;,
  handleEditorChange: (content: string) => void;,
  editor_content: string;
}
export /**
 * DescriptionFields - Function description;
 */
function DescriptionFields() {
  return (
    <>;
      <FormField;
        control={control}"
        name="description";")
        render={({ field }) => (
</FormField>
          <FormItem>;
</FormItem>
            <FormLabel > Job Description</FormLabel>;
            <FormControl>;
</FormControl>
              <Textarea;
                value={editor_content})
                on_change={(e) => {
</Textarea>
              <Textarea ;
                value={editorContent}
                onChange={(e) => {;
</Textarea>
            </FormControl>;
            <FormDescription>;
</FormDescription>
            </FormDescription>;
            <FormMessage />;
</FormMessage>
      <FormField;
        control={control}"
        name="responsibilities""
        render={({ field }) => (;
</FormField>
          <FormItem>;
</FormItem>)
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
</FormControl>
              <Textarea;"
                placeholder="List the main responsibilities of this job"""
                className="resize-none min-h-[100px]""
              <Textarea;"
                placeholder="List the main responsibilities of this job";""
                className="resize-none min-h-[100px]";"
                {...field}
              />;
</Textarea>
            </FormControl>;
            <FormDescription>;
</FormDescription>
            </FormDescription>;
            <FormMessage />;
</FormMessage>
      <FormField;
        control={control}"
        name="qualifications""
        render={({ field }) => (;
</FormField>
          <FormItem>;
</FormItem>)
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
</FormControl>
              <Textarea;"
                placeholder="List the required qualifications for this job"""
                className="resize-none min-h-[100px]""
              <Textarea;"
                placeholder="List the required qualifications for this job";""
                className="resize-none min-h-[100px]";"
                {...field}
              />;
</Textarea>
            </FormControl>;
            <FormDescription>;
</FormDescription>
            </FormDescription>;
            <FormMessage />;
</FormMessage>
      <FormField;
        control={control}"
        name="benefits""
        render={({ field }) => (;
</FormField>
          <FormItem>;
</FormItem>)
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
</FormControl>
              <Textarea;"
                placeholder="List the benefits offered for this job"""
                className="resize-none min-h-[100px]""
              <Textarea;"
                placeholder="List the benefits offered for this job";""
                className="resize-none min-h-[100px]";"
                {...field}
              />;
</Textarea>
            </FormControl>;
            <FormDescription>;
</FormDescription>
            </FormDescription>;
            <FormMessage />;
</FormMessage>
      <FormField;
        control={control}"
        name="application_instructions""
        render={({ field }) => (;
</FormField>
          <FormItem>;
</FormItem>)
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
</FormControl>
              <Textarea;"
                placeholder="Provide instructions on how to apply for this job"""
                className="resize-none min-h-[100px]""
          </FormItem>)}
</Textarea>
      <FormField;
        control={control}"
        name="application_instructions";"
        render={({ field }) => (
</FormField>
          <FormItem>;
</FormItem>)
            <FormLabel > Application Instructions (Optional)</FormLabel>;
            <FormControl>;
</FormControl>
              <Textarea;"
                placeholder="Provide instructions on how to apply for this job";""
                className="resize - none min - h-[100px]";"
                {...field}
              />;
</Textarea>
            </FormControl>;
            <FormDescription>;
</FormDescription>
            </FormDescription>;
            <FormMessage />;
</FormMessage>
            </FormControl>
            <FormDescription>
</FormDescription>
            </FormDescription>
            <FormMessage />
</FormMessage>
          </FormItem>
    </>;


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );}  );
=======
              <Textarea;"
                placeholder="Provide instructions on how to apply for this job";"
                className="resize - none min - h-[100px]";



                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;

                {...field}
              />
            </FormControl>
            <FormDescription>
              Provide instructions on how to apply for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>

        )}

      />;
    </>;

}


  );

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
          </FormItem>)}
    </>);
}
  );
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

          </FormItem>)}
    </>);
}
);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

  // TODO: Implement
}
  control: Control<JobSchemaType>;
</JobSchemaType>
  return (<> <FormField control= {
  control;)
}/> </FormControl> <FormDescription> Detailed description of the job role. </FormDescription> <FormMessage /> </FormItem>) 
</FormField>
}/> <FormField <FormItem> <FormLabel>Responsibilities (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> List the main responsibilities of this job. </FormDescription> <FormMessage /> </FormItem>) 
</FormField>
}/> <FormField <FormItem> <FormLabel>Qualifications (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> List the required qualifications for this job. </FormDescription> <FormMessage /> </FormItem>) 
</FormField>
}/> <FormField <FormItem> <FormLabel>Benefits (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> List the benefits offered for this job. </FormDescription> <FormMessage /> </FormItem>) 
</FormField>
}/> <FormField <FormItem> <FormLabel>Application Instructions (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Provide instructions on how to apply for this job. </FormDescription> <FormMessage /> </FormItem>) 
</FormField>

}/> </>) 
}
        )}
      />
    </>
      />;
    </>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

} from "@/components/ui/form";""
import { Textarea } from "@/components/ui/textarea";""
import { JobSchemaType } from "./validation";"
interface DescriptionFieldsProps {;
"
interface DescriptionFieldsProps {;"
import { JobSchemaType } from './validation';
interface DescriptionFieldsProps {
  // TODO: Implement
}
import { Textarea } from "@/components/ui/textarea";"
  control: Control<JobSchemaType>;

    <>;
      <FormField;
        control={control}"
        name="description""
        render={({ field }) => (;

          <FormItem>;

            <FormLabel>Job Description;
            <FormControl>;

              <Textarea;"
import React from 'react',;
import { Control } from 'react-hook-form',;
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",""
import { Textarea } from "@/components/ui/textarea",""
import { JobSchemaType } from './validation',;
  // TODO: Implement
  control: Control<JobSchemaType>,

  control: Control<JobSchemaType>,;





        control={control}
        name="description"")
        render={({ field }) => (

          <FormItem>

            <FormLabel>Job Description
            <FormControl>



              <Textarea;
                value={editorContent})
                onChange={(e) => {;

  control: Control < JobSchemaType>;,
  handleEditorChange: (content: string) => void;,
  editor_content: string;
export /**
 * DescriptionFields - Function description;
 */
function DescriptionFields() {
  return (
        name="description";")


            <FormLabel > Job Description;

                value={editor_content})
                on_change={(e) => {

              <Textarea ;
                value={editorContent}

            ;
            <FormDescription>;

            <FormMessage />;

        name="responsibilities""

)
            <FormLabel>Responsibilities (Optional);

                placeholder="List the main responsibilities of this job"""
                className="resize-none min-h-[100px]""
                placeholder="List the main responsibilities of this job";""
                className="resize-none min-h-[100px]";"
                {...field}
              />;



        name="qualifications""

            <FormLabel>Qualifications (Optional);

                placeholder="List the required qualifications for this job"""
                placeholder="List the required qualifications for this job";""



        name="benefits""

            <FormLabel>Benefits (Optional);

                placeholder="List the benefits offered for this job"""
                placeholder="List the benefits offered for this job";""



        name="application_instructions""

            <FormLabel>Application Instructions (Optional);

                placeholder="Provide instructions on how to apply for this job"""
          )}

        name="application_instructions";"

            <FormLabel > Application Instructions (Optional);

                placeholder="Provide instructions on how to apply for this job";""
                className="resize - none min - h-[100px]";"



            <FormDescription>

            <FormMessage />

    </>;


  );
    </>);
  ),;}
  // TODO: Implement

  return (<> <FormField control= {
  control;)
}/>  <FormDescription> Detailed description of the job role.  <FormMessage /> ) 

}/> <FormField <FormItem> <FormLabel>Responsibilities (Optional)  <FormControl> <Textarea />  <FormDescription> List the main responsibilities of this job.  <FormMessage /> ) 

}/> <FormField <FormItem> <FormLabel>Qualifications (Optional)  <FormControl> <Textarea />  <FormDescription> List the required qualifications for this job.  <FormMessage /> ) 

}/> <FormField <FormItem> <FormLabel>Benefits (Optional)  <FormControl> <Textarea />  <FormDescription> List the benefits offered for this job.  <FormMessage /> ) 

}/> <FormField <FormItem> <FormLabel>Application Instructions (Optional)  <FormControl> <Textarea />  <FormDescription> Provide instructions on how to apply for this job.  <FormMessage /> ) 

}/> </>) 
      />
    </>
pr-12325
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
