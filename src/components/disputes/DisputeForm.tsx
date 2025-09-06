<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from 'lucide-react'

=======

  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'; import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { disputeReasonLabels } from '@/types/disputes'
import { useDisputes } from '@/hooks/useDisputes'
import { toast } from 'sonner'
import { FileText } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const formSchema = z.object({
  reason_code: z.string()
    .min(1, { message: "Please select a reason for the dispute" }),
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional()}),

type DisputeFormProps = {
  projectId: string,
  milestoneId?: string,
  onDisputeCreated?: (disputeId: string) => void,
  onCancel?: () => void
},

export function DisputeForm({ 
  projectId, 
  milestoneId, 
  onDisputeCreated, 
  onCancel 
}: DisputeFormProps) {
  const { createDispute } = useDisputes(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [files, setFiles] = useState<File[]>([]),

  const form = useForm<z.infer<typeof formSchema>>({
<<<<<<< HEAD
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason_code: "",
      description: "",
      attachments: []}}),

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),
      form.setValue("attachments", [...files, ...newFiles])
    }
  },

  const removeFile = (index: number) => {
    const newFiles = [...files],
    newFiles.splice(index, 1),
    setFiles(newFiles),
    form.setValue("attachments", newFiles)
  },

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true),
      
=======
    resolver: zodResolver(formSchema)
    defaultValues: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,
<<<<<<< HEAD
        description: values.description}),
      
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
<<<<<<< HEAD
        
        toast.success("Your dispute has been submitted"),
        
        if (onDisputeCreated) {
=======
if (onDisputeCreated) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          onDisputeCreated(dispute.id)
=======
        toast.success('Your dispute has been submitted')
        
        toast.success("Your dispute has been submitted"),
        
        if (onDisputeCreated) {          onDisputeCreated(dispute.id)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        }
      }
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>

      
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            name="reason_code"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (
              <FormItem>
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <SelectItem key={value} value={value}>{label}</SelectItem>
import React, { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import {;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
<<<<<<< HEAD
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select",;
import { Input } from "@/components/ui/input",;
import { disputeReasonLabels } from "@/types/disputes",;
import { useDisputes } from "@/hooks/useDisputes",;
import { toast } from "sonner",;
import { FileText } from 'lucide-react';
const formSchema = z.object({;
  reason_code: z.string();
    .min(1, { message: "Please select a reason for the dispute" }),;
  description: z.string();
    .min(20, { message: "Description must be at least 20 characters" }),;
  attachments: z.array(z.any()).optional()}),;
type DisputeFormProps = {;
  projectId: string,;
  milestoneId?: string,;
  onDisputeCreated?: (disputeId: string) => void,;
  onCancel?: () => void;
},;
export function DisputeForm({;
  projectId,;
  milestoneId,;
  onDisputeCreated,;
  onCancel;
}: DisputeFormProps) {;
  const { createDispute } = useDisputes(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [files, setFiles] = useState<File[]>([]),;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      reason_code: "",;
      description: "",;
      attachments: []}}),;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files) {;
      const newFiles = Array.from(e.target.files),;
      setFiles(prev => [...prev, ...newFiles]),;
      form.setValue("attachments", [...files, ...newFiles]);
    }
  },;
  const removeFile = (index: number) => {;
    const newFiles = [...files],;
    newFiles.splice(index, 1),;
    setFiles(newFiles),;
    form.setValue("attachments", newFiles);
  },;
  async function onSubmit(values: z.infer<typeof formSchema>) {;
    try {;
      setIsSubmitting(true),;
      const dispute = await createDispute({;
        project_id: projectId,;
        milestone_id: milestoneId,;
        reason_code: values.reason_code,;
        description: values.description}),;
      if (dispute && dispute.id) {;
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files.length > 0) {;
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
;
        toast.success("Your dispute has been submitted");
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;
      logErrorToProduction('Error submitting dispute:', { data: error });
      toast.error("Failed to submit dispute. Please try again.");
    } finally {;
      setIsSubmitting(false);
    }
  }
;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
=======
=======

    <div className='space-y-6'>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className='flex items-center space-x-2'>;
        <FileText className='h-5 w-5 text-primary' />;
        <h2 className='text-xl font-semibold'>Report an Issue</h2>;
      </div>;

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;

          <FormField
            control={form && form.control}
            name='reason_code'
      setIsSubmitting (true);
      const dispute = await create_dispute ({
        project_id: project_id,
        milestone_id: milestone_id,
        reason_code: values.reason_code,
        description: values.description,
      });
      // Check condition
if ( {) {
  $2
}
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        // Check condition
if ( {) {
  $2
}
          // log_info (`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
        toast.success ('Your dispute has been submitted');
        // Check condition
if ( {) {
  $2
}
          onDisputeCreated (dispute.id);
        }
      }
    } catch (error) {
      logErrorToProduction ('Error submitting dispute:', { data: error });
      toast.error ('Failed to submit dispute. Please try again.');
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <div className='space - y-6'>;
      <div className='flex items - center space - x-2'>;
        <FileText className='h - 5 w - 5 text - primary' />;
        <h2 className='text - xl font - semibold'>Report an Issue</h2>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      </div>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="reason_code";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (;
              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select a reason" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
<<<<<<< HEAD
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;
                    ))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "description"> }) => (
              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
=======

          />;

          <FormField
            control={form && form.control}
            name='description'
                    {Object.entries (disputeReasonLabels).map (
                      ([value, label]) => (
                        <SelectItem key={value} value={value}>;
                          {label}
                        </SelectItem>))}                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name='description';
            render={({
              field
            }: {

                z && z.infer<typeof formSchema>,;
                'description';
              >;
            }) => (              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;

                  <Textarea
                    placeholder='Please provide specific details about the issue...'
                    className='min-h-[150px]'
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'description';
              >;
            }) => (              <FormItem>;
                <FormLabel > Describe the issue in detail</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder='Please provide specific details about the issue...';
                    className='min - h-[150px]';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
<<<<<<< HEAD
              </FormItem>;
            )}
          />
          
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
              <div className="space-y-4">
                <Input 
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                
                {files.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Selected files:</p>
                    <ul className="space-y-1">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
          
          <div className="flex justify-end space-x-2">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Dispute"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
=======

          />;

          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className='space-y-4'>;

                <Input
                  type='file'
                  multiple
                  onChange={handleFileChange}

                  className='cursor-pointer'                />;

                {files && files.length > 0 && (;
                  <div className='space-y-2'>;
                    <p className='text-sm font-medium'>Selected files:</p>;
                    <ul className='space-y-1'>;
                      {files && files.map((file, index) => (;

                        <li
                          key={index}
                          className='flex items-center justify-between text-sm bg-muted/30 p-2 rounded'>;
                          <span>;
                            {file && file.name} ({(file && file.size / 1024).toFixed(1)} KB);
                          </span>;
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
<<<<<<< HEAD
                            onClick={() => removeFile(index)}                          >;
                            Remove;
                          </Button>;
                        </li>;
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

                      ))}
                    </ul>;
                  </div>;
                )}

<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div className="flex justify-end space-x-2">

            {onCancel && (
              <Button type='button' variant='outline' onClick={onCancel}>
                Cancel
              </Button>
              </FormItem>)}
          />;
          <FormItem>;
            <FormLabel > Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className='space - y-4'>;
                <Input;
                  type='file';
                  multiple;
                  on_change={handleFileChange}
                  className='cursor - pointer'                />;
<<<<<<< HEAD
              <div className='space-y-4'>
                <Input
                  type='file'
                  multiple
                  onChange={handleFileChange}
                  className='cursor-pointer'                />
                {files.length > 0 && (
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
                  className="cursor-pointer"
                />
                
                {files.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Selected files:</p>
                    <ul className="space-y-1">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;
                        </li>;
                      ))}
                    </ul>
                  </div>
                )}
            {onCancel && (
              <Button type='button' variant='outline' onClick={onCancel}>
                Cancel
              </Button>}value= {
=======

}value= {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  value 
}> {;
  label ;
}</SelectItem>) ) ;
}</SelectContent> </Select> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) ;

}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 
<<<<<<< HEAD
}</ul> </div>) ;
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) ;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  setIsSubmitting (true);
const dispute = await create_dispute ({
  project id: project_id;
milestone id: milestone_id;
reason code: values.reason code,
  description: values.description;
});
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded // Check condition
if ( {) {
  $2
}
}finally {
  setIsSubmitting (false);
}";
}return (<div className="space-y-6" > <div className="flex items - center space-x-2" > <FileText className="h - 5 w - 5 text-primary" /> <h2 className="text - xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel > Reason for dispute</FormLabel> <Select onValueChange= {
  field.on_change;
}default_value= {
  field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {
  value;
}value= {
  value;
}> {
<<<<<<< HEAD
<<<<<<< HEAD
  label;
}</SelectItem>) );
}</SelectContent> </Select> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel > Attachments (optional) </FormLabel> <FormControl> <div className="space - y-4" > <Input type="file" multiple > Remove </Button> </li>) );
}</ul> </div>);
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>);
}'"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
