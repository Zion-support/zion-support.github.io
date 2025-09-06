<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const formSchema = z.object({
  reason_code: z.string()
    .min(1, { message: "Please select a reason for the dispute" })
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" })
  attachments: z.array(z.any()).optional()})
type DisputeFormProps = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}: DisputeFormProps) {;
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
}: DisputeFormProps) {
  const { createDispute } = useDisputes(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [files, setFiles] = useState<File[]>([]),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      reason_code: ""
      description: ""
      attachments: []}})
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  projectId, ;
  milestoneId, ;
  onDisputeCreated, ;
  onCancel ;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

      setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue("attachments", [...files, ...newFiles]);
    }


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles]);
      form.setValue("attachments", [...files, ...newFiles])
    }
  }
  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles)
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
          console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }

<<<<<<< HEAD
=======

        
        toast.success("Your dispute has been submitted"),
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          // // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
        toast.success("Your dispute has been submitted");
        
        toast.success("Your dispute has been submitted"),
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      console.error("Error submitting dispute:", error),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
=======
========
      setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue("attachments", [...files, ...newFiles]);
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
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
    }
  }
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      console.error("Error submitting dispute:", error);

      console.error("Error submitting dispute:", error),
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
          // // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
;
        toast.success("Your dispute has been submitted");
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;
      console.error("Error submitting dispute:", error);
      toast.error("Failed to submit dispute. Please try again.");
    } finally {;
      setIsSubmitting(false);
    }
  }
;
  return (;
<<<<<<< HEAD

========
=======
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
      setIsSubmitting(false),;    }
        if (onDisputeCreated) {onDisputeCreated(dispute.id)}
      }
    } catch (error) {toast.error("Failed to submit dispute. Please try again.")} finally {setIsSubmitting(false)}
  }
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
          <FormField
            control={form && form.control}
            name="reason_code"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
import React, { useState } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { Button } from '@/components / ui / button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Textarea } from '@/components / ui / textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Input } from '@/components / ui / input';
import { DisputeReason, disputeReasonLabels } from '@/types / disputes';
import { use_disputes } from '@/hooks / use_disputes';
import { toast } from './sonner';
import { FileText } from './lucide-react';
const form_schema = z.object ({
  reason_code: z.string ();
    .min (1, { message: "Please select a reason for the dispute" }),
  description: z.string ();
    .min (20, { message: "Description must be at least 20 characters" }),
  attachments: z.array (z.any ()).optional ()}),
type DisputeFormProps = {
  project_id: string,
  milestone_id?: string;
  onDisputeCreated?: (dispute_id: string) => void,
  on_cancel?: () => void;
}
;
export /**
 * DisputeForm - Function description
 */
function DisputeForm() {
  const { create_dispute } = use_disputes ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const [files, set_files] = useState < File[]>([]);
;
  const form = use_form < z.infer < typeof form_schema>>({
    resolver: zod_resolver (form_schema),
    default_values: {
      reason_code: "",
      description: "",
      attachments: []}}),
  const handleFileChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      const new_files = Array.from (e.target.files),
      set_files (prev => [...prev, ...new_files]);
      form.set_value ("attachments", [...files, ...new_files]);
    }
  }
;
  const remove_file = (index: number) =>: any {
    const new_files = [...files],
    new_files.splice (index, 1);
    set_files (new_files);
    form.set_value ("attachments", new_files);
  }
;
  async /**
 * on_submit - Function description
 */
function on_submit() {
    try {
      setIsSubmitting (true),
      const dispute = await create_dispute ({
        project_id: project_id,
        milestone_id: milestone_id,
        reason_code: values.reason_code,
        description: values.description}),
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
          console.log (`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
        toast.success ("Your dispute has been submitted");
;
        // Check condition
if ( {) {
  $2
}
          onDisputeCreated (dispute.id);
        }
      }
    } catch (error) {
      console.error ("Error submitting dispute:", error);
      toast.error ("Failed to submit dispute. Please try again.");
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <div className="space - y-6">;
      <div className="flex items - center space - x-2">;
        <FileText className="h - 5 w - 5 text - primary" />;
        <h2 className="text - xl font - semibold">Report an Issue</h2>;
      </div>;
      <Form {...form}>;
        <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
          <FormField;
            control={form.control}
            name="reason_code";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Reason for dispute</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select a reason" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    ))}
========
          />;
          <FormField
            control={form && form.control}
            name="description"
=======
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                      <SelectItem key={value} value={value}>{label}</SelectItem>;                    ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

          />;


          <FormField
            control={form && form.control}
            name="description"
========
          />;
          ;
          <FormField;
            control={form.control}
            name="description";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
<<<<<<< HEAD
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
                    {Object.entries (disputeReasonLabels).map (([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="description";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Describe the issue in detail</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder="Please provide specific details about the issue...";
                    className="min - h-[150px]";
=======
                  <Textarea;
                    placeholder="Please provide specific details about the issue...";
                    className="min-h-[150px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

========
<<<<<<< HEAD
          />;
=======
              </FormItem>;
            )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
          />;
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className="space-y-4">;
<<<<<<< HEAD
                <Input
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  className="cursor-pointer"
<<<<<<< HEAD
=======
                      <SelectItem key={value} value={value}>{label}</SelectItem>;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                />
                {files.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Selected files:</p>
                    <ul className="space-y-1">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;
<<<<<<< HEAD
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
              </FormItem>)}
          />;
          <FormItem>;
            <FormLabel > Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className="space - y-4">;
                <Input;
                  type="file";
                  multiple;
                  on_change={handleFileChange}
                  className="cursor - pointer";
                />;
                {files.length > 0 && (
                  <div className="space - y-2">;
                    <p className="text - sm font - medium">Selected files:</p>;
                    <ul className="space - y-1">;
                      {files.map ((file, index) => (
                        <li key={index} className="flex items - center justify - between text - sm bg - muted / 30 p - 2 rounded">;
                          <span>{file.name} ({(file.size / 1024).to_fixed (1)} KB)</span>;
                          <Button;
                            type="button";
                            variant="ghost";
                            size="sm";
                            on_click={() => remove_file (index)}
                          >;
                            Remove;
                          </Button>;
                        </li>))}
                    </ul>;
                  </div>)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

========
=======
                        </li>;                      ))}
                    </ul>;
                  </div>;
                )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
          <div className="flex justify - end space - x-2">;
            {on_cancel && (
              <Button type="button" variant="outline" on_click={on_cancel}>;
                Cancel;
              </Button>)}
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? "Submitting..." : "Submit Dispute"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

========
=======
          ;
          <div className="flex justify-end space-x-2">;
            {onCancel && (;
              <Button type="button" variant="outline" onClick={onCancel}>;
                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." :"Submit Dispute"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
            </Button>;
          </div>;
        </form>;
      </Form>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx

    </div>);

}
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </div>);
=======
    </div>;
  ),; import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
import {
  Select;
SelectContent;
SelectItem;
SelectTrigger;
const formSchema = z.object ({
  reason code: z.string () .min (1, {
  message: "Please select a reason for the dispute" 
});
description: z.string () attachments: z.array (z.any () ) .optional () 
});
}
};
const removeFile = (index: number) => {
  async function onSubmit (values: z.infer<typeof formSchema>) {
  try {
  setIsSubmitting (true);
const dispute = await createDispute ({
  project id: projectId;
milestone id: milestoneId;
reason code: values.reason code;
description: values.description 
});
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded toast.success ("Your dispute has been submitted");
}finally {
  setIsSubmitting (false) 
}
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {
  value 
}value= {
  value 
}> {
  label 
}</SelectItem>) ) 
}</SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 
}</ul> </div>) 
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/disputes/DisputeForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
};
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
