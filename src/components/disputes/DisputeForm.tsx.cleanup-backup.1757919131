<<<<<<< HEAD
import React, { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
import React, { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/auto/autonomy-17186719616
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
=======
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/auto/autonomy-17186719616
import {
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
=======
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { disputeReasonLabels } from "@/types/disputes";
import { useDisputes } from "@/hooks/useDisputes";
import { toast } from "sonner";
>>>>>>> origin/auto/autonomy-17186719616
import { FileText } from 'lucide-react'

const formSchema = z.object({
  reason_code: z.string()
    .min(1, { message: "Please select a reason for the dispute" }),
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" }),
<<<<<<< HEAD
  attachments: z.array(z.any()).optional()}),

type DisputeFormProps = {
  projectId: string,
  milestoneId?: string,
  onDisputeCreated?: (disputeId: string) => void,
  onCancel?: () => void
},
=======
  attachments: z.array(z.any()).optional(),
});

type DisputeFormProps = {
  projectId: string;
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void;
  onCancel?: () => void;
};
>>>>>>> origin/auto/autonomy-17186719616

export function DisputeForm({ 
  projectId, 
  milestoneId, 
  onDisputeCreated, 
  onCancel 
}: DisputeFormProps) {
<<<<<<< HEAD
  const { createDispute } = useDisputes(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [files, setFiles] = useState<File[]>([]),
=======
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
>>>>>>> origin/auto/autonomy-17186719616

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason_code: "",
      description: "",
<<<<<<< HEAD
      attachments: []}}),

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),
      form.setValue("attachments", [...files, ...newFiles]),
    }
  },

  const removeFile = (index: number) => {
    const newFiles = [...files],
    newFiles.splice(index, 1),
    setFiles(newFiles),
    form.setValue("attachments", newFiles),
  },

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true),
=======
      attachments: [],
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      form.setValue("attachments", [...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
>>>>>>> origin/auto/autonomy-17186719616
      
      const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,
<<<<<<< HEAD
        description: values.description}),
=======
        description: values.description,
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
<<<<<<< HEAD
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`),
        }
        
        toast.success("Your dispute has been submitted"),
        
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id),
        }
      }
    } catch (error) {
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again."),
    } finally {
      setIsSubmitting(false),
    }
  }
  return (

=======
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
        
        toast.success("Your dispute has been submitted");
        
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {
      logErrorToProduction('Error submitting dispute:', { data: error });
      toast.error("Failed to submit dispute. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
>>>>>>> origin/auto/autonomy-17186719616
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>
      
<<<<<<< HEAD


                z && z.infer<typeof formSchema>,;
                'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;

                <Select
                  onValueChange={field && field.onChange}
                  defaultValue={field && field.value}>;
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel > Reason for dispute</FormLabel>;
                <Select;
                  onValueChange={field.on_change}
                  default_value={field.value}
                >;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select a reason' />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;

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
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

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
                            onClick={() => removeFile(index)}                          >;
                            Remove;
                          </Button>;
                        </li>;
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"

=======
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="reason_code"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "description"> }) => (
              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
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
                          >
                            Remove
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
>>>>>>> origin/auto/autonomy-17186719616
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
          <div className='flex justify-end space-x-2'>
          
          <div className="flex justify-end space-x-2">



            {onCancel && (
              <Button type='button' variant='outline' onClick={onCancel}>
=======
          
          <div className="flex justify-end space-x-2">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  ),
}
=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
