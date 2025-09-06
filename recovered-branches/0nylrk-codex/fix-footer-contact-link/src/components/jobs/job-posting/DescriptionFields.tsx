<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

=======


=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from "react";
import { Control } from "react-hook-form";
import {
<<<<<<< HEAD
  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;

========
import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from './validation';
interface DescriptionFieldsProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

  return (
    <>;
      <FormField
<<<<<<< HEAD

=======

========
  return (
    <>;
      <FormField
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
        control={control}
        name="description"
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea
=======

=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function DescriptionFields({
  control
  handleEditorChange
  editorContent
}: DescriptionFieldsProps) {
  return (
    <>
      <FormField
<<<<<<< HEAD
        control;
                  field.onChange(e.target.value)
=======
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
<<<<<<< HEAD

<<<<<<< HEAD
              <Textarea 

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Textarea
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Textarea 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e && e.target.value);
                  field && field.onChange(e && e.target.value);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
                }}
                className="min-h-[200px]";
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
=======
              <Textarea ;
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e.target.value),;
                  field.onChange(e.target.value),;
                }}
                className="min-h-[200px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

      />;


========
<<<<<<< HEAD
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
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
=======
              <Textarea;
                placeholder="List the main responsibilities of this job";
                className="resize-none min-h-[100px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

      />;


========
<<<<<<< HEAD
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
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
=======
              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

      />;


========
<<<<<<< HEAD
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
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
=======
              <Textarea;
                placeholder="List the benefits offered for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

      />;


========
<<<<<<< HEAD
      />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

========
=======
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {...field}
              />
            </FormControl>
            <FormDescription>
              Provide instructions on how to apply for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
========
<<<<<<< HEAD
          </FormItem>)}
      />;
    </>);
}
=======
          </FormItem>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
        )}

<<<<<<< HEAD
=======
      />;
    </>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
=======
          </FormItem>)}
      />;
    </>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/DescriptionFields.tsx
=======
        )}
<<<<<<< HEAD
      />
    </>
=======
      />;
    </>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
