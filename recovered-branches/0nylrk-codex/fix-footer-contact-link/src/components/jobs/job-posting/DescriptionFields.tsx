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

  FormField,
  FormItem,
  FormLabel,
  FormControl,

  FormDescription,
  FormMessage,;

} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;

  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string;
}

export function DescriptionFields(): any ({;
  control,;
  handleEditorChange,;
  editorContent,;
}: DescriptionFieldsProps) {;

  return (
    <>;

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

              <Textarea

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

        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>

              <Textarea
              <Textarea 

                }}

                className="min-h-[200px]";
'
import React from './react';'
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
                className="min-h-[200px]";

                placeholder="Enter a detailed description of the job role";
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;

        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;

                {...field}
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;

          </FormItem>)}
      />;
      <FormField;
        control={control}"
        name="application_instructions";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Application Instructions (Optional)</FormLabel>;
            <FormControl>;

  );});