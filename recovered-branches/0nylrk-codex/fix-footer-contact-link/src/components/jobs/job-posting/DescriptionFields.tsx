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
import React from 'react',
import { Control } from 'react-hook-form',
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",""
import { Textarea } from "@/components/ui/textarea",""
import { JobSchemaType } from './validation',
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