

:src_backup/components/disputes/DisputeForm.tsx

;
import React, { useState } from 'react';
import { useForm, ControllerRenderProps  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { logInfo, logErrorToProduction  } from '@/utils/productionLogger';
import {Form;
:src/components/disputes/DisputeForm.tsx
import React, { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
:src_backup/components/disputes/DisputeForm.tsx
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea";
origin/cursor/automate-test-improve-and-merge-code-2533
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea";


  FormMessage} from @/components/ui/form",
import { Textarea } from "@/components/ui/textarea;
origin/cursor/automate-test-improve-and-merge-code-2533
  FormMessage} from @/components/ui/form",


:src/components/disputes/DisputeForm.tsx
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {

:src/components/disputes/DisputeForm.tsx
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from 'lucide-react'

:src_backup/components/disputes/DisputeForm.tsx


:src/components/disputes/DisputeForm.tsx
    resolver: zodResolver(formSchema)
    defaultValues: {
      reason_code: ''
      description: ''
      attachments: []
    }
  })
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles])
      form.setValue('attachments', [...files, ...newFiles])
    }
  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
    form.setValue('attachments', newFiles)
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      const dispute = await createDispute({
        project_id: projectId
        milestone_id: milestoneId
        reason_code: values.reason_code
        description: values.description
      })


:src/components/disputes/DisputeForm.tsx
        toast.success('Your dispute has been submitted')
        if (onDisputeCreated) {

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")

:src/components/disputes/DisputeForm.tsx
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")


:src_backup/components/disputes/DisputeForm.tsx
const formSchema = null;
      toast.error("Failed to submit dispute. Please try again.")
origin/cursor/automate-test-improve-and-merge-code-2533
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
    <div className=space-y-6">
      <div className="flex items-center space-x-2>
        <FileText className=h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold>Report an Issue</h2>
      </div>



    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>

:src/components/disputes/DisputeForm.tsx
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
:src_backup/components/disputes/DisputeForm.tsx
            name='reason_code'
            name='reason_code'

:src_backup/components/disputes/DisputeForm.tsx
                    placeholder='Please provide specific details about the issue...'
                    className='min-h-[150px]'



:src_backup/components/disputes/DisputeForm.tsx
  FormMessage,;
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';import {;

  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
:src_backup/components/disputes/DisputeForm.tsx
  SelectValue,;
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { disputeReasonLabels } from '@/types/disputes';
import { useDisputes } from '@/hooks/useDisputes';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';
const formSchema = z && z.object({;
  FormMessage,;
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';import {;


  SelectValue,;
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { disputeReasonLabels } from '@/types/disputes';
import { useDisputes } from '@/hooks/useDisputes';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';
const formSchema = z && z.object({;
  FormMessage} from '@/components/ui/form;
import { Textarea } from @/components/ui/textarea';import {

  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from '@/components/ui/select;
import { Input } from @/components/ui/input';
import { disputeReasonLabels } from '@/types/disputes;
import { useDisputes } from @/hooks/useDisputes';
import { toast } from 'sonner;
import { FileText } from lucide-react';
const formSchema = z && z.object({
  reason_code: z;
    .string();
    .min(1, { message: 'Please select a reason for the dispute' }),;
  description: z;
    .string();
    .min(20, { message: 'Description must be at least 20 characters' }),;
  attachments: z && z.array(z && z.any()).optional(),;
});

type DisputeFormProps = {;
  projectId: string;
  FormMessage} from "@/components/ui/form",import { Textarea  } from '@/components/ui/textarea';
import { Form,FormControl,FormField,FormItem,FormLabel,Select,SelectContent,SelectItem,SelectTrigger,Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage;
 } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea'; import { Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue;
 } from '@/components/ui/select';
import { Input  } from '@/components/ui/input';
import { disputeReasonLabels  } from '@/types/disputes';
import { useDisputes  } from '@/hooks/useDisputes';
import { toast  } from 'sonner';
import { FileText  } from 'lucide-react';
const formSchema = z.object({reason_code: z.string().min(1, { message: "Please select a reason for the dispute" }),description: z.string().min(20, { message: "Description must be at least 20 characters" }),attachments: z.array(z.any()).optional()}),type DisputeFormProps = {projectId: string,milestoneId?: string,onDisputeCreated?: (disputeId: string) => void,onCancel?: () => void;
},export function DisputeForm() {const { createDispute } = useDisputes(),const [isSubmitting, setIsSubmitting] = useState(false),const [files, setFiles] = useState<File[]>([]),const form = useForm<z.infer<typeof formSchema>>({resolver: zodResolver(formSchema)defaultValues: {const dispute = await createDispute({project_id: projectId,milestone_id: milestoneId,reason_code: values.reason_code,if (dispute && dispute.id) {// Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files.length > 0) {// logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`)}
        toast.success('Your dispute has been submitted')toast.success("Your dispute has been submitted"),if (onDisputeCreated) {if (onDisputeCreated) {onDisputeCreated(dispute.id)}
      }
    } catch (error) {logErrorToProduction('Error submitting dispute:', { data: error }),toast.error("Failed to submit dispute. Please try again.")logErrorToProduction('Error submitting dispute:', { data: error }),toast.error("Failed to submit dispute. Please try again.")const formSchema = null;
      toast.error("Failed to submit dispute. Please try again.")} finally {setIsSubmitting(false)}
  }
  return (<div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <FormField;
            control={form.control}name="reason_code";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (<FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select a reason" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (<SelectItem key={value} value={value}>{label}</SelectItem>;
import React, { useState } from "react",import { useForm, ControllerRenderProps } from "react-hook-form",import { zodResolver } from "@hookform/resolvers/zod",import { z } from "zod",import { Button } from "@/components/ui/button",import { logInfo, logErrorToProduction } from '@/utils/productionLogger',import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
const formSchema = z && z.object({reason_code: z;
    .string().min(1, { message: 'Please select a reason for the dispute' }),description: z;
    .string().min(20, { message: 'Description must be at least 20 characters' }),attachments: z && z.array(z && z.any()).optional()})type DisputeFormProps = {projectId: string;
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void;
  onCancel?: () => void;
}export function DisputeForm(): any ({projectId,milestoneId,onDisputeCreated,onCancel}: DisputeFormProps) {const { createDispute } = useDisputes()const [isSubmitting, setIsSubmitting] = useState(false)const [files, setFiles]  = useState<File[]>([])const form = useForm<z && z.infer<typeof formSchema>>({resolver: zodResolver(formSchema),defaultValues: {reason_code: '',description: '',attachments: []}})const handleFileChange = (e: React && React.ChangeEvent<HTMLInputElement>,) => {if (e && e.target.files) {const newFiles = Array && Array.from(e && e.target.files),setFiles(prev => [...prev, ...newFiles])form && form.setValue('attachments', [...files, ...newFiles])}
  }const removeFile = (index: number) => {const newFiles = [...files],newFiles && newFiles.splice(index, 1)setFiles(newFiles)form && form.setValue('attachments', newFiles)}async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {try {setIsSubmitting(true)const dispute = await createDispute({project_id: projectId,milestone_id: milestoneId,reason_code: values && values.reason_code,description: values && values.description})if (dispute && dispute.id) {// Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files && files.length > 0) {// logInfo(`Would upload ${files && files.length} files for dispute ${dispute.id}`)}toast && toast.success('Your dispute has been submitted')if (onDisputeCreated) {onDisputeCreated(dispute.id)}
      }
    } catch (error) {logErrorToProduction('Error submitting dispute:', { data: error })toast && toast.error('Failed to submit dispute. Please try again.')} finally {setIsSubmitting(false)}
  }
:src_backup/components/disputes/DisputeForm.tsx


:src_backup/components/disputes/DisputeForm.tsx
          // log_info (`Would upload ${files.length} files for dispute ${dispute.id}`)}
        toast.success ('Your dispute has been submitted')// Check condition;
if ( {) {$2;


    } catch (error) {logErrorToProduction ('Error submitting dispute:', { data: error })toast.error ('Failed to submit dispute. Please try again.')} finally {setIsSubmitting (false)}
  }
  return (<div className='space - y-6'>;
    } catch (error) {
      logErrorToProduction ('Error submitting dispute:', { data: error });
      toast.error ('Failed to submit dispute. Please try again.');
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <div className='space - y-6'>;
    } catch (error) {logErrorToProduction (Error submitting dispute:, { data: error })toast.error ('Failed to submit dispute. Please try again.')} finally {setIsSubmitting (false)}
  }
  return (<div className=space - y-6>;


:src_backup/components/disputes/DisputeForm.tsx
            name='reason_code';
            name='reason_code';
            name=reason_code;
            render={({field;
            }: {z && z.infer<typeof formSchema>,'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;<Select;
                  onValueChange={field && field.onChange}
                  defaultValue={field && field.value}>;
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel > Reason for dispute</FormLabel>;
                <Select;
                  onValueChange={field.on_change}
                  default_value={field.value}
                >;


:src_backup/components/disputes/DisputeForm.tsx
                  <SelectContent>;/>;<FormField;
            control={form && form.control}
            name='description';
                    {Object.entries (disputeReasonLabels).map (([value, label]) => (<SelectItem key={value} value={value}>;


:src_backup/components/disputes/DisputeForm.tsx
            render={({field;
            }: {z && z.infer<typeof formSchema>,'description';
              >;
            }) => (              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;<Textarea;
                    placeholder='Please provide specific details about the issue...';
                    className='min-h-[150px]';
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,'description';


:src_backup/components/disputes/DisputeForm.tsx
                <FormMessage />;/>;<FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className='space-y-4'>;<Input;
                  type='file';
                  multiple;
                  onChange={handleFileChange}className='cursor-pointer'                />;{files && files.length > 0 && (<div className='space-y-2'>;
                    <p className='text-sm font-medium'>Selected files:</p>;
                    <ul className='space-y-1'>;
                      {files && files.map((file, index) => (<li;
:src_backup/components/disputes/DisputeForm.tsx


:src_backup/components/disputes/DisputeForm.tsx
                            type='button'
                            variant='ghost'
                            size='sm'
                          <span>{file && file.name} ({(file && file.size / 1024).toFixed(1)} KB)</span>;
                          <Button;
                            type='button';
                            variant='ghost';
                            size='sm';
:src_backup/components/disputes/DisputeForm.tsx

                    placeholder="Please provide specific details about the issue...";
                    className="min-h-[150px]";


:src_backup/components/disputes/DisputeForm.tsx
          />;
                      ))}
                    </ul>;
                  </div>;
                )}<div className="flex justify-end space-x-2">;
            {onCancel && (<Button type='button' variant='outline' onClick={onCancel}>;
                Cancel;
              </Button>;
:src_backup/components/disputes/DisputeForm.tsx
                  className='cursor - pointer'                />;
:src_backup/components/disputes/DisputeForm.tsx


                  className='cursor - pointer                />;


                  <div className='space - y-2'>;
                  className='cursor - pointer'                />;<div className='space-y-4'>;
                  <div className='space-y-2'>
                    <p className='text-sm font-medium'>Selected files:</p>
                    <ul className='space-y-1'>
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className='flex items-center justify-between text-sm bg-muted/30 p-2 rounded'
                        >
                          <span>
                            {file.name} ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            onClick={() => removeFile(index)}                          >
                            Remove
                          </Button>
                        </li>
              <div className="space-y-4">
                <Input 
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  <div className='space - y-2>;
                  className=cursor - pointer'                />;<div className='space-y-4>;
                <Input;
                  type='file';
                  multiple;
                  onChange={handleFileChange}
                  className='cursor-pointer'                />;
                {files.length > 0 && (<div className='space-y-2'>;
                    <p className='text-sm font-medium'>Selected files:</p>;
                    <ul className='space-y-1'>;
                      {files.map((file, index) => (<li;
                          key={index}
                          className='flex items-center justify-between text-sm bg-muted/30 p-2 rounded';
                        >;
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>;
                          <Button;
                            type='button';
                            variant='ghost';
                            size='sm';
                            onClick={() => removeFile(index)}                          >;
                            Remove;
                          </Button>;
                        </li>;
              <div className="space-y-4">;
                <Input;
                  type="file";
                  multiple;
                  onChange={handleFileChange}
:src_backup/components/disputes/DisputeForm.tsx
                  className="cursor-pointer";
                            type="button";
                            variant="ghost";
                            size="sm";
                  className="cursor-pointer"


:src_backup/components/disputes/DisputeForm.tsx
            {onCancel && (<Button type='button' variant='outline' onClick={onCancel}>;
            {onCancel && (<Button type='button' variant='outline' onClick={onCancel}>;
            {onCancel && (<Button type='button variant=outline' onClick={onCancel}>;
                Cancel;
              </Button>;
                {files.length > 0 && (<div className='space - y-2'>;
                    <p className='text - sm font - medium'>Selected files:</p>;
                    <ul className='space - y-1'>;
                      {files.map ((file, index) => (<li;
                          key={index}
                          className='flex items - center justify - between text - sm bg - muted / 30 p - 2 rounded';
                        >;
                          <span>{file.name} ({(file.size / 1024).to_fixed (1)} KB)</span>;
                          <Button;
                            type='button';
                            variant='ghost';
                            size='sm';
                            on_click={() => remove_file (index)}                          >;
                            Remove;
                          </Button>;
                        </li>))}
                    </ul>;
                  </div>)}
              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;<div className='flex justify - end space - x-2'>;
            {on_cancel && (<Button type='button' variant='outline' on_click={on_cancel}>;
                Cancel;
              </Button>)}
            <Button type='submit' disabled={is_submitting}>;
              {is_submitting ? 'Submitting...' : 'Submit Dispute'}
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>)}</Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  )}const removeFile = (index: number) => {async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {)}
            <Button type='submit' disabled={isSubmitting}>;
              {isSubmitting ? 'Submitting...' : 'Submit Dispute'}
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
:src_backup/components/disputes/DisputeForm.tsx
  );

};
          <div className='flex justify-end space-x-2'>


:src_backup/components/disputes/DisputeForm.tsx
  );


:src/components/disputes/DisputeForm.tsx
  )
}
const removeFile = (index: number) => {
  async function onSubmit (values: z.infer<typeof formSchema>) {
  try {
  setIsSubmitting (true)
const dispute = await createDispute ({
  project id: projectId
milestone id: milestoneId
reason code: values.reason code
description: values.description
})
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files.length > 0) {
}finally {
  setIsSubmitting (false)
}"
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {
  field.onChange
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {
  value
}value= {
  value
}> {
  label
}</SelectItem>) )
}</SelectContent> </Select> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) "
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) )
}</ul> </div>)
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)
}'"}


:src_backup/components/disputes/DisputeForm.tsx
  project id: projectId;
milestone id: milestoneId;
reason code: values.reason code;
description: values.description ;
});
:src_backup/components/disputes/DisputeForm.tsx


:src_backup/components/disputes/DisputeForm.tsx
}'"}




  setIsSubmitting (true);
const dispute = await create_dispute ({
  project id: project_id;
  )}const removeFile = (index: number) => {async function onSubmit () {try {setIsSubmitting (true)const dispute = await createDispute ({project id: projectId;
milestone id: milestoneId;reason code: values && values.reason code;
description: values && values.description ;
})//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files && files.length > 0) {reason code: values.reason code;
description: values.description ;
})//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files.length > 0) {;
}finally {setIsSubmitting (false)}";}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <SelectonValueChange= {field && field.onChange;
}defaultValue= {field && field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {Object && Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItemkey= {value;
}value= {value;
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {field.onChange ;
}defaultValue= {field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {value ;
}value= {value ;}> {label ;
}</SelectItem>) )}</SelectContent> </Select> <FormMessage /> </FormItem>)}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) )}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) )}</ul> </div>)}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)}</ul> </div>)}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)}'"}setIsSubmitting (true)const dispute = await create_dispute ({project id: project_id;
milestone id: milestone_id;
reason code: values.reason code;
description: values.description;
})//Future enhancement: Upload attachments //For now we just log the files that would be uploaded // Check condition;
if ( {) {$2;
}
:src_backup/components/disputes/DisputeForm.tsx
}</SelectItem>) )}</SelectContent> </Select> <FormMessage /> </FormItem>)}/> <FormField <FormItem> <FormLabel > Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel > Attachments (optional) </FormLabel> <FormControl> <div className="space - y-4" > <Input type="file" multiple > Remove </Button> </li>) )}</ul> </div>)}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)}'"}}</ul> </div>)}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)}'";
