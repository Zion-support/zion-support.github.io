<<<<<<< HEAD
import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Input } from "@/components/ui/input",;
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",;
import { useDisputes } from "@/hooks/useDisputes",;
import { toast } from "sonner",;
import { FileText } from "lucide-react",;
;
const formSchema = z.object({;
  reason_code:z.string();
    .min(1, { message:"Please select a reason for the dispute" }),;
  description:z.string();
    .min(20, { message:"Description must be at least 20 characters" }),;
  attachments:z.array(z.any()).optional()}),;
;
type DisputeFormProps = {;
  projectId:string,;
  milestoneId?:string,;
  onDisputeCreated?:(disputeId:string) => void,;
  onCancel?:() => void;
},;
;
export function DisputeForm({ ;
  projectId, ;
  milestoneId, ;
  onDisputeCreated, ;
  onCancel ;
} DisputeFormProps) {;
  const { createDispute } = useDisputes(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [files, setFiles] = useState<File[]>([]),;
;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      reason_code:"",;
      description:"",;
      attachments:[]}}),;
;
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files) {;
      const newFiles = Array.from(e.target.files),;
      setFiles(prev => [...prev, ...newFiles]),;
      form.setValue("attachments", [...files, ...newFiles]),;
    }
  },;
;
  const removeFile = (index:number) => {;
    const newFiles = [...files],;
    newFiles.splice(index, 1),;
    setFiles(newFiles),;
    form.setValue("attachments", newFiles),;
  },;
;
  async function onSubmit(values:z.infer<typeof formSchema>) {;
    try {;
      setIsSubmitting(true),;
      ;
      const dispute = await createDispute({;
        project_id:projectId,;
        milestone_id:milestoneId,;
        reason_code:values.reason_code,;
        description:values.description}),;
      ;
      if (dispute && dispute.id) {;
        // Future enhancement:Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files.length > 0) {;
          // // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`),;
        }
        ;
        toast.success("Your dispute has been submitted"),;
        ;
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id),;
        }
      }
    } catch (error) {;
      console.error("Error submitting dispute:", error),;
      toast.error("Failed to submit dispute. Please try again."),;
    } finally {;
      setIsSubmitting(false),;
=======
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from "lucide-react",const formSchema = z.object({
  reasoncode: z.string()
    .min(1, { message: &quot;Please select a reason for the dispute&quot }),
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional()}),  attachments: z.array(z.any()).optional()});

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
      reasoncode: "",
      description: "",
      attachments: []}}),

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),
      form.setValue("attachments", [...files, ...newFiles])    }
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
      
      const dispute = await createDispute({
        projectid: projectId,
        milestoneid: milestoneId,
        reasoncode: values.reasoncode,
        description: values.description}),
type DisputeFormProps = {projectId: string,
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void;
  onCancel?: () => void};

export function DisputeForm(_{projectId, milestoneId, onDisputeCreated, onCancel}: DisputeFormProps) {const { createDispute} = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({resolver: zodResolver(formSchema), defaultValues: {
      reasoncode: "", description: "", attachments: []}});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, _...newFiles]);
      form.setValue("attachments", _[...files, _...newFiles])}
  };

  const removeFile = (index: number) => {const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles)};

  async function onSubmit(values: z.infer<typeof formSchema>) {try {
      setIsSubmitting(true);
      
      const dispute = await createDispute({
        projectid: projectId, milestone_id: milestoneId, reason_code: values.reasoncode, description: values.description});
      
      if (dispute && dispute.id) {_// Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded,
if (files.length > 0) {
          // // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }        
        toast.success("Your dispute has been submitted"),
          // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
        
        toast.success(&quot;Your dispute has been submitted&quot;);
        
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
      console.error("Error submitting dispute:", error),
      toast.error("Failed to submit dispute. Please try again.")    } finally {
      setIsSubmitting(false)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
        if (onDisputeCreated) {onDisputeCreated(dispute.id)}
      }
    } catch (error) {toast.error("Failed to submit dispute. Please try again.")} finally {setIsSubmitting(false)}
  }
<<<<<<< HEAD
;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;
      ;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="reason_code";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select a reason" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;
=======

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center space-x-2&quot;>
        <FileText className=&quot;h-5 w-5 text-primary&quot; />
        <h2 className=&quot;text-xl font-semibold&quot;>Report an Issue</h2>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
          <FormField,
control={form.control}
            name=&quot;reasoncode&quot;
            render={({ field }) => (              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select a reason&quot; />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(disputeReasonLabels).map(_([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    ))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<< HEAD
          />;
          ;
          <FormField;
            control={form.control}
            name="description";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder="Please provide specific details about the issue...";
                    className="min-h-[150px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
          ;
          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className="space-y-4">;
                <Input ;
                  type="file" ;
                  multiple ;
                  onChange={handleFileChange}
                  className="cursor-pointer";
                />;
                ;
                {files.length > 0 && (;
                  <div className="space-y-2">;
                    <p className="text-sm font-medium">Selected files:</p>;
                    <ul className="space-y-1">;
                      {files.map((file, index) => (;
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">;
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>;
                          <Button ;
                            type="button" ;
                            variant="ghost" ;
                            size="sm" ;
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;
                        </li>;
=======
          />
          
          <FormField,
control={form.control}
            name=&quot;description&quot;
            render={({ field }) => (              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea,
placeholder=&quot;Please provide specific details about the issue...&quot;
                    className=&quot;min-h-[150px]&quot;
                    {...field}                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
              <div className=&quot;space-y-4&quot;>
                <Input,
type=&quot;file&quot; 
                  multiple,
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
                          <Button,
type=&quot;button&quot; 
                            variant=&quot;ghost&quot; 
                            size=&quot;sm&quot; 
                            onClick={() => removeFile(index)}                          >
                            Remove
                          </Button>
                        </li>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                      ))}
                    </ul>;
                  </div>;
                )}
<<<<<<< HEAD
              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
          ;
          <div className="flex justify-end space-x-2">;
            {onCancel && (;
              <Button type="button" variant="outline" onClick={onCancel}>;
                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." :"Submit Dispute"}
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  ),;
=======
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
              {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Dispute&quot}            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}