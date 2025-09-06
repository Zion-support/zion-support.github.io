

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from "lucide-react",


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
}: DisputeFormProps) {;
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
}: DisputeFormProps) {
  const { createDispute } = useDisputes(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [files, setFiles] = useState<File[]>([]),

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      reason_code: ""
      description: ""
      attachments: []}})
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue("attachments", [...files, ...newFiles]);
    }
  }
  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles)
  }
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
        
        toast.success("Your dispute has been submitted"),
        
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
      console.error("Error submitting dispute:", error);

      console.error("Error submitting dispute:", error),
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)

    }
  }
  return (


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

                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                    ))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}

          />;


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



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
          <div className="flex justify - end space - x-2">;
            {on_cancel && (
              <Button type="button" variant="outline" on_click={on_cancel}>;
                Cancel;
              </Button>)}
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? "Submitting..." : "Submit Dispute"}

            </Button>;
          </div>;
        </form>;
      </Form>;

    </div>);

}
=======
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
