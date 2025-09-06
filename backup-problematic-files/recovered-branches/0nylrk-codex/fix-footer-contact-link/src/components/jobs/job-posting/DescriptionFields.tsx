<<<<<<< HEAD
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string
}
export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;
  return (
    <>;
      <FormField
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
                value={editorContent}
                onChange={(e) => {;
                  handleEditorChange(e && e.target.value);
                  field && field.onChange(e && e.target.value);
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
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
=======
              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>)}
      />;
    </>);
}
=======
          </FormItem>;
        )}
      />;
    </>;
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
