<<<<<<< HEAD
import React{ useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form";
=======
  FormMessage,
} from "@/components/ui/form";
>>>>>>> origin/auto/autonomy-17186719616
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DisputeReasondisputeReasonLabels } from "@/types/disputes";
=======
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DisputeReason, disputeReasonLabels } from "@/types/disputes";
>>>>>>> origin/auto/autonomy-17186719616
import { useDisputes } from "@/hooks/useDisputes";
import { toast } from "sonner";
import { FileText } from "lucide-react";

const formSchema = z.object({
  reason_code: z.string()
<<<<<<< HEAD
    .min(1{ message: "Please select a reason for the dispute" }),
  description: z.string()
    .min(20{ message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional()});
=======
    .min(1, { message: "Please select a reason for the dispute" }),
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional(),
});
>>>>>>> origin/auto/autonomy-17186719616

type DisputeFormProps = {
  projectId: string;
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void;
  onCancel?: () => void;
};

export function DisputeForm({ 
<<<<<<< HEAD
  projectId
  milestoneId
  onDisputeCreated
  onCancel 
}: DisputeFormProps) {
  const { createDispute } = useDisputes();
  const [isSubmittingsetIsSubmitting] = useState(false);
  const [filesetFiles] = useState<File[]>([]);
=======
  projectId, 
  milestoneId, 
  onDisputeCreated, 
  onCancel 
}: DisputeFormProps) {
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
      attachments: []}});
=======
      attachments: [],
    },
  });
>>>>>>> origin/auto/autonomy-17186719616

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
<<<<<<< HEAD
      setFiles(prev => [...prev...newFiles]);
      form.setValue("attachments"[...files...newFiles]);
=======
      setFiles(prev => [...prev, ...newFiles]);
      form.setValue("attachments", [...files, ...newFiles]);
>>>>>>> origin/auto/autonomy-17186719616
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
<<<<<<< HEAD
    newFiles.splice(index1);
    setFiles(newFiles);
    form.setValue("attachments"newFiles);
=======
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles);
>>>>>>> origin/auto/autonomy-17186719616
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      
      const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,
<<<<<<< HEAD
        description: values.description});
=======
        description: values.description,
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          console.log(`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
        
        toast.success("Your dispute has been submitted");
        
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error submitting dispute:"error);
      toast.error("Failed to submit dispute. Please try again.");
    } finally {
      setIsSubmitting(false);

=======
      console.error("Error submitting dispute:", error);
      toast.error("Failed to submit dispute. Please try again.");
    } finally {
      setIsSubmitting(false);
>>>>>>> origin/auto/autonomy-17186719616
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="reason_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
<<<<<<< HEAD
                    {Object.entries(disputeReasonLabels).map(([valuelabel]) => (
=======
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
>>>>>>> origin/auto/autonomy-17186719616
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
            render={({ field }) => (
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
<<<<<<< HEAD
                      {files.map((fileindex) => (
=======
                      {files.map((file, index) => (
>>>>>>> origin/auto/autonomy-17186719616
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
  );
}