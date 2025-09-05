<<<<<<< HEAD
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
=======
import React, { useState } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from "lucide-react",
=======
  SelectValue} from &quot;@/components/ui/select&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { DisputeReason, disputeReasonLabels } from &quot;@/types/disputes&quot;;
import { useDisputes } from &quot;@/hooks/useDisputes&quot;;
import { toast } from &quot;sonner&quot;;
import { FileText } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const formSchema = z.object({
  reason_code: z.string()
    .min(1, { message: &quot;Please select a reason for the dispute&quot; }),
  description: z.string()
<<<<<<< HEAD
    .min(20, { message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional()}),
=======
    .min(20, { message: &quot;Description must be at least 20 characters&quot; }),
  attachments: z.array(z.any()).optional()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
    resolver: zodResolver(formSchema),
    defaultValues: {
<<<<<<< HEAD
      reason_code: "",
      description: "",
      attachments: []}}),

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),
      form.setValue("attachments", [...files, ...newFiles])
=======
      reason_code: "&quot;,
      description: "&quot;,
      attachments: []}});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      form.setValue(&quot;attachments&quot;, [...files, ...newFiles]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const removeFile = (index: number) => {
<<<<<<< HEAD
    const newFiles = [...files],
    newFiles.splice(index, 1),
    setFiles(newFiles),
    form.setValue("attachments", newFiles)
  },
=======
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue(&quot;attachments&quot;, newFiles);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true),
      
      const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,
        description: values.description}),
      
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
<<<<<<< HEAD
          // // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
        
        toast.success("Your dispute has been submitted"),
=======
          // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
        
        toast.success(&quot;Your dispute has been submitted&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error submitting dispute:", error),
      toast.error("Failed to submit dispute. Please try again.")
=======
      console.error(&quot;Error submitting dispute:&quot;, error);
      toast.error(&quot;Failed to submit dispute. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center space-x-2&quot;>
        <FileText className=&quot;h-5 w-5 text-primary&quot; />
        <h2 className=&quot;text-xl font-semibold&quot;>Report an Issue</h2>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
          <FormField
            control={form.control}
            name=&quot;reason_code&quot;
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select a reason&quot; />
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
            name=&quot;description&quot;
            render={({ field }) => (
              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=&quot;Please provide specific details about the issue...&quot;
                    className=&quot;min-h-[150px]&quot;
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
              <div className=&quot;space-y-4&quot;>
                <Input 
                  type=&quot;file&quot; 
                  multiple 
                  onChange={handleFileChange}
                  className=&quot;cursor-pointer&quot;
                />
                
                {files.length > 0 && (
                  <div className=&quot;space-y-2&quot;>
                    <p className=&quot;text-sm font-medium&quot;>Selected files:</p>
                    <ul className=&quot;space-y-1&quot;>
                      {files.map((file, index) => (
                        <li key={index} className=&quot;flex items-center justify-between text-sm bg-muted/30 p-2 rounded&quot;>
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                          <Button 
                            type=&quot;button&quot; 
                            variant=&quot;ghost&quot; 
                            size=&quot;sm&quot; 
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
          
          <div className=&quot;flex justify-end space-x-2&quot;>
            {onCancel && (
              <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type=&quot;submit&quot; disabled={isSubmitting}>
              {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Dispute&quot;}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}