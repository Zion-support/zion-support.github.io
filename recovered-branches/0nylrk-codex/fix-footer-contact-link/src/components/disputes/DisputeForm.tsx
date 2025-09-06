
import React, { useState } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {DisputeReason, disputeReasonLabels} from "@/types/disputes";
import {useDisputes} from "@/hooks/useDisputes";
import {toast} from "sonner";
import {FileText} from "lucide-react";
<<<<<<< HEAD
const formSchema = z.object({
  reason_code: z.string()
    .min(1, { message: "Please select a reason for the dispute" })
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" })
  attachments: z.array(z.any()).optional()})
type DisputeFormProps = {
  projectId: string
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void
  onCancel?: () => void
}
export function DisputeForm({
  projectId
  milestoneId
  onDisputeCreated
  onCancel
}: DisputeFormProps) {
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      reason_code: ""
      description: ""
      attachments: []}})
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
=======
const formSchema = z && z.object({;
  reason_code: z && z.string();
    .min(1, { message: "Please select a reason for the dispute" }),;
  description: z && z.string();
    .min(20, { message: "Description must be at least 20 characters" }),;
  attachments: z && z.array(z && z.any()).optional()}),;

type DisputeFormProps = {;
  projectId: string,;
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void,;
  onCancel?: () => void;
};

export function DisputeForm(): any ({ ;
  projectId, ;
  milestoneId, ;
  onDisputeCreated, ;
  onCancel ;
}: DisputeFormProps) {;
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z && z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      reason_code: "",;
      description: "",;
      attachments: []}}),;

  const handleFileChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    if (e && e.target.files) {;
      const newFiles = Array && Array.from(e && e.target.files),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue("attachments", [...files, ...newFiles]);
    }
<<<<<<< HEAD
  }
  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles)
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      const dispute = await createDispute({
        project_id: projectId
        milestone_id: milestoneId
        reason_code: values.reason_code
        description: values.description})
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
        toast.success("Your dispute has been submitted");
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
      console.error("Error submitting dispute:", error);

      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
=======
  };

  const removeFile = (index: number) => {;
    const newFiles = [...files],;
    newFiles && newFiles.splice(index, 1);
    setFiles(newFiles);
    form && form.setValue("attachments", newFiles);
  };

  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
    try {;
      setIsSubmitting(true),;

      const dispute = await createDispute({;
        project_id: projectId,;
        milestone_id: milestoneId,;
        reason_code: values && values.reason_code,;
        description: values && values.description}),;

      if (dispute && dispute.id) {;
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files && files.length > 0) {;
          console && console.log(`Would upload ${files && files.length} files for dispute ${dispute.id}`);
        }

        toast && toast.success("Your dispute has been submitted");

        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;
      console && console.error("Error submitting dispute:", error);
      toast && toast.error("Failed to submit dispute. Please try again.");
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  return (
<<<<<<< HEAD
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
=======
    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <FormField
            control={form && form.control}
            name="reason_code"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select a reason" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    {Object && Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;
                    ))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<< HEAD
          />
=======
          />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <FormField
            control={form && form.control}
            name="description"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<< HEAD
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
=======
          />;

          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className="space-y-4">;
                <Input
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />;

                {files && files.length > 0 && (;
                  <div className="space-y-2">;
                    <p className="text-sm font-medium">Selected files:</p>;
                    <ul className="space-y-1">;
                      {files && files.map((file, index) => (;
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">;
                          <span>{file && file.name} ({(file && file.size / 1024).toFixed(1)} KB)</span>;
                          <Button
                            type="button" 
                            variant="ghost" 
                            size="sm" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                )}
<<<<<<< HEAD
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
          <div className="flex justify-end space-x-2">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
=======
              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;

          <div className="flex justify-end space-x-2">;
            {onCancel && (;
              <Button type="button" variant="outline" onClick={onCancel}>;
                Cancel;
              </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : "Submit Dispute"}
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );
}