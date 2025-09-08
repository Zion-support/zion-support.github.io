
FormItem




} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { JobSchemaType } from "./validation";
interface DescriptionFieldsProps {;





      <FormField









import { JobSchemaType } from './validation',
interface DescriptionFieldsProps {}
  control: Control<JobSchemaType>,
  handleEditorChange: (content: string) => void,
  editorContent: string';
import React from 'react',;'
import { Control } from 'react-hook-form',;"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form",;"
import { Textarea } from "@/components/ui/textarea",;'





                }}

                className="min-h-[200px]";



                className="min - h-[200px]";










      />;


      <FormField
        control={control}
        name="benefits"


              <Textarea
                placeholder="List the benefits offered for this job"
                className="resize-none min-h-[100px]"



      />;


      <FormField
        control={control}
        name="application_instructions"


              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"




              <Textarea;
                placeholder="Provide instructions on how to apply for this job";
                className="resize - none min - h-[100px]";

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



