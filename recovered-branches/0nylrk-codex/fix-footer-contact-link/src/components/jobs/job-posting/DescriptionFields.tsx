  FormField
  FormItem
  FormLabel
  FormControl
  FormDescription
  FormMessage

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,;
<<<<<<< HEAD

} from "@/components/ui/form";

=======
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";} from "@/components/ui/form";

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Textarea } from "@/components/ui/textarea";

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;
<<<<<<< HEAD

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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  control: Control<JobSchemaType>;
  handleEditorChange: (content: string) => void;
  editorContent: string
}

<<<<<<< HEAD

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

        control={control}
        name="description"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
              <Textarea


=======
        control={control}
        name="description"        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
<<<<<<< HEAD
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

      />;


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

      />;


      <FormField
        control={control}
        name="qualifications"
        render={({ field }) => (;
=======
            <FormControl>        render={({ field }) => (;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="List the required qualifications for this job"
<<<<<<< HEAD
                className="resize-none min-h-[100px]"
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
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="List the benefits offered for this job"
                className="resize-none min-h-[100px]"
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
        render={({ field }) => (;
=======
                className="resize-none min-h-[100px]"              <Textarea;
                placeholder="List the required qualifications for this job";
                className="resize-none min-h-[100px]";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
=======
                className="resize - none min-h-[100px]";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      />;
    </>;

<<<<<<< HEAD

  );
          </FormItem>)}
      />;
    </>);
}
  );
=======
  );}  );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </FormItem>)}
      />;
    </>);
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
