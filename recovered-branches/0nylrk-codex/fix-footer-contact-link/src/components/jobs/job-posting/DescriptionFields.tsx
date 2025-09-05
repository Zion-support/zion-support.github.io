
import React from 'react';

interface DescriptionFieldsProps {_control: Control<JobSchemaType>;
  handleEditorChange: (_content: string) => void;
  editorContent: string;}

export function DescriptionFields(_{_control, _handleEditorChange, _editorContent}: DescriptionFieldsProps) {_return (_<>
      <FormField
        control={control}
        name="description"
        render={_({ field}) => (_<FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
              <Textarea 
                value={_editorContent}
                onChange={_(e) => {
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);}}
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
        control={_control}
        name="responsibilities"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Responsibilities (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="List the main responsibilities of this job"
                className="resize-none min-h-[100px]"
                {_...field}
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
        control={_control}
        name="qualifications"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Qualifications (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="List the required qualifications for this job"
                className="resize-none min-h-[100px]"
                {_...field}
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
        control={_control}
        name="benefits"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Benefits (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="List the benefits offered for this job"
                className="resize-none min-h-[100px]"
                {_...field}
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
        control={_control}
        name="application_instructions"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Application Instructions (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Provide instructions on how to apply for this job"
                className="resize-none min-h-[100px]"
                {_...field}
              />
            </FormControl>
            <FormDescription>
              Provide instructions on how to apply for this job.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
