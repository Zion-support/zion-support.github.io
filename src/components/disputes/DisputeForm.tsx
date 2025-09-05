<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
import React, { useState } from &quot;react&quot;;
import { useForm, ControllerRenderProps } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
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
import { disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
=======
  SelectValue} from &quot;@/components/ui/select&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { disputeReasonLabels } from &quot;@/types/disputes&quot;;
import { useDisputes } from &quot;@/hooks/useDisputes&quot;;
import { toast } from &quot;sonner&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { FileText } from 'lucide-react'

const formSchema = z.object({
  reason_code: z.string()
    .min(1, { message: &quot;Please select a reason for the dispute&quot; }),
  description: z.string()
<<<<<<< HEAD
    .min(20, { message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional()}),
=======
    .min(20, { message: &quot;Description must be at least 20 characters&quot; }),
=======
import React, {_useState} from "react";
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";

const _formSchema = z.object({_reason_code: z.string()
    .min(1, _{ message: "Please select a reason for the dispute"}),
  description: z.string()
    .min(20, {_message: "Description must be at least 20 characters"}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  attachments: z.array(z.any()).optional()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
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
=======
type DisputeFormProps = {_projectId: string;
  milestoneId?: string;
  onDisputeCreated?: (_disputeId: string) => void;
  onCancel?: () => void;};

export function DisputeForm(_{_projectId, _milestoneId, _onDisputeCreated, _onCancel}: DisputeFormProps) {_const { createDispute} = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const _form = useForm<z.infer<typeof formSchema>>({_resolver: zodResolver(formSchema), _defaultValues: {
      reason_code: "", _description: "", _attachments: []}});

  const _handleFileChange = (_e: React.ChangeEvent<HTMLInputElement>) => {_if (e.target.files) {
      const _newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, _...newFiles]);
      form.setValue("attachments", _[...files, _...newFiles]);}
  };

  const _removeFile = (_index: number) => {_const _newFiles = [...files];
    newFiles.splice(index, _1);
    setFiles(newFiles);
    form.setValue("attachments", _newFiles);};

  async function onSubmit(_values: z.infer<typeof formSchema>) {_try {
      setIsSubmitting(true);
      
      const _dispute = await createDispute({
        project_id: projectId, _milestone_id: milestoneId, _reason_code: values.reason_code, _description: values.description});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (dispute && dispute.id) {_// Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
<<<<<<< HEAD
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`)
=======
          // logInfo(`Would upload ${files.length} files for dispute ${_dispute.id}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        
<<<<<<< HEAD
        toast.success("Your dispute has been submitted"),
=======
        toast.success(&quot;Your dispute has been submitted&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
<<<<<<< HEAD
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
<<<<<<< HEAD
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
=======
      logErrorToProduction('Error submitting dispute:', { data: error });
      toast.error(&quot;Failed to submit dispute. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
=======
        if (onDisputeCreated) {_onDisputeCreated(dispute.id);}
      }
    } catch (error) {_logErrorToProduction('Error submitting dispute:', _{ data: error});
      toast.error("Failed to submit dispute. Please try again.");
    } finally {_setIsSubmitting(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center space-x-2&quot;>
        <FileText className=&quot;h-5 w-5 text-primary&quot; />
        <h2 className=&quot;text-xl font-semibold&quot;>Report an Issue</h2>
      </div>
      
<<<<<<< HEAD
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
          <FormField
            control={form.control}
            name=&quot;reason_code&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;reason_code&quot;> }) => (
=======
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={_form.control}
            name="reason_code"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"reason_code">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select a reason&quot; />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {_Object.entries(disputeReasonLabels).map(_([value, _label]) => (
                      <SelectItem key={value} value={_value}>{_label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;description&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;description&quot;> }) => (
=======
            control={_form.control}
            name="description"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"description">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
<<<<<<< HEAD
                    placeholder=&quot;Please provide specific details about the issue...&quot;
                    className=&quot;min-h-[150px]&quot;
                    {...field}
=======
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
                    {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
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
=======
                  onChange={_handleFileChange}
                  className="cursor-pointer"
                />
                
                {_files.length > 0 && (_<div className="space-y-2">
                    <p className="text-sm font-medium">Selected files:</p>
                    <ul className="space-y-1">
                      {files.map((file, _index) => (
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">
                          <span>{_file.name} ({_(file.size / 1024).toFixed(1)} KB)</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            onClick={_() => removeFile(index)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
          
<<<<<<< HEAD
          <div className=&quot;flex justify-end space-x-2&quot;>
            {onCancel && (
              <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type=&quot;submit&quot; disabled={isSubmitting}>
              {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Dispute&quot;}
=======
          <div className="flex justify-end space-x-2">
            {_onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? "Submitting..." : "Submit Dispute"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}