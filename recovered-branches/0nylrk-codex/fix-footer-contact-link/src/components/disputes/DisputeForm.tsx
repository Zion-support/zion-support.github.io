
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

"
import React, { useState } from "react","
import { useForm } from "react-hook-form","
import { zodResolver } from "@hookform/resolvers/zod","
import { z } from "zod","
import { Button } from "@/components/ui/button",
import {}
  Form,
  FormControl,
  FormField,
  FormItem,
FormLabel,"
  FormMessage} from "@/components/ui/form","
import { Textarea } from "@/components/ui/textarea",
import {}
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,"
  SelectValue} from "@/components/ui/select","
import { Input } from "@/components/ui/input","
import { DisputeReason, disputeReasonLabels } from "@/types/disputes","
import { useDisputes } from "@/hooks/useDisputes","
import { toast } from "sonner","
import { FileText } from "lucide-react",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const formSchema = z.object({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const formSchema = z.object({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  reason_code: z.string()
=======
const formSchema = z.object({}
  reason_code: z.string()"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    .min(1, { message: "Please select a reason for the dispute" })
  description: z.string()"
    .min(20, { message: "Description must be at least 20 characters" })
  attachments: z.array(z.any()).optional()})
type DisputeFormProps = {
<<<<<<< HEAD
<<<<<<< HEAD

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

import React, { useState } from "react";""
import {useForm} from "react-hook-form";""
import {zodResolver} from "@hookform/resolvers/zod";""
import {z} from "zod";""
import {Button} from "@/components/ui/button";""
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";""
import {Textarea} from "@/components/ui/textarea";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {Input} from "@/components/ui/input";""
import {DisputeReason, disputeReasonLabels} from "@/types/disputes";""
import {useDisputes} from "@/hooks/useDisputes";""
import {toast} from "sonner";""
import {FileText} from "lucide-react";""
import React, { useState } from "react",""
import { useForm } from "react-hook-form",""
import { zodResolver } from "@hookform/resolvers/zod",""
import { z } from "zod",""
import { Button } from "@/components/ui/button","
import {
  // TODO: Implement
}
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,"
  FormMessage} from "@/components/ui/form",""
import { Textarea } from "@/components/ui/textarea","
  // TODO: Implement
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,"
  SelectValue} from "@/components/ui/select",""
import { Input } from "@/components/ui/input",""
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",""
import { useDisputes } from "@/hooks/useDisputes",""
import { toast } from "sonner",""
import { FileText } from "lucide-react","
const formSchema = z.object({)
  reason_code: z.string()"
    .min(1, { message: "Please select a reason for the dispute" })"
  description: z.string()"
    .min(20, { message: "Description must be at least 20 characters" })"

  attachments: z.array(z.any()).optional()})
type DisputeFormProps = {
  milestoneId?: string,

  onDisputeCreated?: (disputeId: string) => void,
  onCancel?: () => void;
pr-12325
},

},
export function DisputeForm({ 
  projectId, 
  milestoneId, 
  onDisputeCreated, 
  onCancel 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      reason_code: ""
      description: ""
      attachments: []}})
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
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
},

export function DisputeForm({}
  projectId, 
  milestoneId, 
  onDisputeCreated, ;
  onCancel;
  const form = useForm<z.infer<typeof formSchema>>({}
    resolver: zodResolver(formSchema)
    defaultValues: {"
      reason_code: """
      description: ""
      attachments: []}})
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
    if (e.target.files) {}
  projectId, ;
  milestoneId, ;
  onDisputeCreated, ;
  onCancel ;
const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),"
      form.setValue("attachments", [...files, ...newFiles])
    }
  },

const removeFile = (index: number) => {}
    const newFiles = [...files],
    newFiles.splice(index, 1),
    setFiles(newFiles),"
    form.setValue("attachments", newFiles)
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const removeFile = (index: number) => {
    const newFiles = [...files],
    newFiles.splice(index, 1),
    setFiles(newFiles),
    form.setValue("attachments", newFiles)
  },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
=======

  async function onSubmit(values: z.infer<typeof formSchema>) {}
    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting(true)
      const dispute = await createDispute({}
        project_id: projectId;
        milestone_id: milestoneId;
        reason_code: values.reason_code;
        description: values.description})
if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
<<<<<<< HEAD
<<<<<<< HEAD
        }

<<<<<<< HEAD
=======
        }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        toast.success("Your dispute has been submitted"),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
        toast.success("Your dispute has been submitted");
        toast.success("Your dispute has been submitted"),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
      console.error("Error submitting dispute:", error),

"
      toast.error("Failed to submit dispute. Please try again.")
    } finally {}
      setIsSubmitting(false)

"
      toast.error("Failed to submit dispute. Please try again.")
    } finally {}
      setIsSubmitting(false)

  };
=======
        }  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        }  };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue("attachments", [...files, ...newFiles]);
    }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const removeFile = (index: number) => {;
    const newFiles = [...files],;
    newFiles && newFiles.splice(index, 1);
setFiles(newFiles);
<<<<<<< HEAD
    form && form.setValue("attachments", newFiles)
};
=======
    form && form.setValue("attachments", newFiles)
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
    try {;
      setIsSubmitting(true),;

      const dispute = await createDispute({;
        project_id: projectId,;
        milestone_id: milestoneId,;
        reason_code: values && values.reason_code,,
  description: values && values.description}),;

      if (dispute && dispute.id) {;
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files && files.length > 0) {;
          console && console.log(`Would upload ${files && files.length} files for dispute ${dispute.id}`);
        }
"
        toast && toast.success("Your dispute has been submitted");

        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;"
      console && console.error("Error submitting dispute:", error);"
      toast && toast.error("Failed to submit dispute. Please try again.");
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }
<<<<<<< HEAD
  return (

<<<<<<< HEAD
<<<<<<< HEAD
          <FormField
            control={form.control}
=======
  return (

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
          <FormField
            control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            name="reason_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
<SelectTrigger>"
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
"
import React, { useState } from "react",;"
import { useForm } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { z } from "zod",;"
import { Button } from "@/components/ui/button",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
FormLabel,;"
  FormMessage} from "@/components/ui/form",;"
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
SelectTrigger,;"
  SelectValue} from "@/components/ui/select",;"
import { Input } from "@/components/ui/input",;"
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",;"
import { useDisputes } from "@/hooks/useDisputes",;"
import { toast } from "sonner",;"
import { FileText } from "lucide-react",;
const formSchema = z.object({;
  reason_code: z.string();"
    .min(1, { message: "Please select a reason for the dispute" }),;
  description: z.string();"
    .min(20, { message: "Description must be at least 20 characters" }),;
  attachments: z.array(z.any()).optional()}),;
type DisputeFormProps = {;
  projectId: string,;
  milestoneId?: string,;
  onDisputeCreated?: (disputeId: string) => void,;
  onCancel?: () => void;
},;
export function DisputeForm() { return null; }
  const { createDispute } = useDisputes(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [files, setFiles] = useState<File[]>([]),;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
defaultValues: {;"
      reason_code: "",;"
      description: "",;
      attachments: []}}),;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files) {;
      const newFiles = Array.from(e.target.files),;
setFiles(prev => [...prev, ...newFiles]),;"
      form.setValue("attachments", [...files, ...newFiles]);

          <FormField;
            control={form.control}"
            name="reason_code"
      setFiles(prev => [...prev, ...newFiles]);"
      form && form.setValue("attachments", [...files, ...newFiles]);

    }
    }
  }
"
    <div className="space-y-6">;"
      <div className="flex items-center space-x-2">;"
        <FileText className="h-5 w-5 text-primary" />;"
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;

<Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <FormField
=======
  return (          <FormField
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      setFiles(prev => [...prev, ...newFiles]),;
      form.setValue("attachments", [...files, ...newFiles]);
          <FormField
            control={form.control}
            name="reason_code"
      setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue("attachments", [...files, ...newFiles]);
    }
    }
  }
;
  return (;

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
    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
return (
          <FormField
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            control={form && form.control}
=======
          <FormField;
            control={form && form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            name="reason_code"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
import { FileText } from './lucide-react';
const form_schema = z.object ({}
  reason_code: z.string ();"
    .min (1, { message: "Please select a reason for the dispute" }),
  description: z.string ();"
    .min (20, { message: "Description must be at least 20 characters" }),
  attachments: z.array (z.any ()).optional ()}),
type DisputeFormProps = {}
  project_id: string,
  milestone_id?: string;
  onDisputeCreated?: (dispute_id: string) => void,
  on_cancel?: () => void;
}
;
export /**;
 * DisputeForm - Function description;
 */
function DisputeForm() {}
  const { create_dispute } = use_disputes ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const [files, set_files] = useState < File[]>([]);
;
  const form = use_form < z.infer < typeof form_schema>>({}
    resolver: zod_resolver (form_schema),
    default_values: {"
      reason_code: "","
      description: "",
      attachments: []}}),
  const handleFileChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      const new_files = Array.from (e.target.files),
      set_files (prev => [...prev, ...new_files]);"
      form.set_value ("attachments", [...files, ...new_files]);
  onCancel;

  const form = useForm<z.infer<typeof formSchema>>({
</z>)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
</HTMLInputElement>
  const [files, setFiles] = useState<File[]>([]);
</File>

  const form = useForm<z && z.infer<typeof formSchema>>({;
</z>)
  const handleFileChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>
  async function onSubmit(values: z.infer<typeof formSchema>) {
</typeof>
  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
</typeof>
          <FormField;
            control={form.control}"
            name="reason_code""
            render={({ field }) => (
</FormField>
              <FormItem>
</FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
</Select>
                  <FormControl>
</FormControl>
                    <SelectTrigger>
</SelectTrigger>"
                      <SelectValue placeholder="Select a reason" />"
</SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
</SelectContent>
                      <SelectItem key={value} value={value}>{label}</SelectItem>)
  const [files, setFiles] = useState<File[]>([]),;
</File>
  const form = useForm<z.infer<typeof formSchema>>({;
</z>)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>
          <FormField;
            control={form.control}"
            name="reason_code""
      setFiles(prev => [...prev, ...newFiles]);
</FormField>"
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center space-x-2">;"
</div>"
        <FileText className="h-5 w-5 text-primary" />;"
</FileText>"
        <h2 className="text-xl font-semibold">Report an Issue</h2>;"
      </div>;
      <Form {...form}>;
</Form>"
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;"
</form>
          <FormField;
            control={form && form.control}"
            name="reason_code""
            render={({ field }) => (;
</FormField>
              <FormItem>;
</FormItem>
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
</Select>)

  const [files, set_files] = useState < File[]>([]);
;
  const form = use_form < z.infer < typeof form_schema>>({)
    resolver: zod_resolver (form_schema),

    default_values: {,"
  reason_code: "",""
      description: "","
      attachments: []}}),
  const handleFileChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
  // TODO: Implement
}
    // Check condition;
if ( {) {
  $2;
}
      const new_files = Array.from (e.target.files),
      set_files (prev => [...prev, ...new_files]);"
      form.set_value ("attachments", [...files, ...new_files]);"

    }
  }
;
  const remove_file = (index: number) =>: any {}
    const new_files = [...files],
    new_files.splice (index, 1);
    set_files (new_files);"
    form.set_value ("attachments", new_files);
  }
;
  async /**
 * on_submit - Function description;
 */
function on_submit() {}
    try {}
      setIsSubmitting (true),
      const dispute = await create_dispute ({}
        project_id: project_id,

        milestone_id: milestone_id,
        reason_code: values.reason_code,
        description: values.description}),
      // Check condition;
if ( {) {}
  $2;
}
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        // Check condition;
if ( {) {}
  $2;
}`
          console.log (`Would upload ${files.length} files for dispute ${dispute.id}`);
        }"
        toast.success ("Your dispute has been submitted");
;
// Check condition;
if ( {) {}
  $2;
}
          onDisputeCreated (dispute.id);
        }
      }
    } catch (error) {"
      console.error ("Error submitting dispute:", error);"
      toast.error ("Failed to submit dispute. Please try again.");
    } finally {}
      setIsSubmitting (false);
    }
  }
return (
    <div className="space-y-6">;
      <div className="flex items - center space-x-2">;
        <FileText className="h - 5 w - 5 text-primary" />;
        <h2 className="text - xl font-semibold">Report an Issue</h2>;
      </div>;
      <Form {...form}>;
<<<<<<< HEAD
<<<<<<< HEAD
        <form on_submit={form.handle_submit (on_submit)} className="space-y-6">;
=======
        <form on_submit={form.handle_submit (on_submit)} className="space-y-6">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <FormField;
            control={form.control}"
            name="reason_code";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Reason for dispute</FormLabel>;
<<<<<<< HEAD
                <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          />;
          <FormField
            control={form && form.control}
            name="description"
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <FormControl>;
                    <SelectTrigger>;"
=======
                  <FormControl>;
                    <SelectTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <SelectValue placeholder="Select a reason" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;

{Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    ))}
                  </SelectContent>;
=======
                <Select onValueChange={field.on_change} default_value={field.value}>;                  </SelectContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <Select onValueChange={field.on_change} default_value={field.value}>;                  </SelectContent>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;

                    ))}
                  </SelectContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}

          />;

<<<<<<< HEAD
          <FormField
            control={form && form.control}
            name="description"
{Object.entries(disputeReasonLabels).map(([value, label]) => (;
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
          />;
          ;
          <FormField;
            control={form.control}
            name="description";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
=======

          <FormField;
            control={form && form.control}"
            name="description"

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;

                  <Textarea"
                    placeholder="Please provide specific details about the issue...""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="min-h-[150px]"

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  <Textarea;"
                    placeholder="Please provide specific details about the issue...";"
                    className="min - h-[150px]";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

/>;

          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;"
              <div className="space-y-4">;
<Input
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
<<<<<<< HEAD
<<<<<<< HEAD
                  className="cursor-pointer"

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                />;
=======
                  className="cursor-pointer"                />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className="cursor-pointer"                />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

                {files && files.length > 0 && (;"
                  <div className="space-y-2">;"
                    <p className="text-sm font-medium">Selected files:</p>;"
                    <ul className="space-y-1">;
                      {files && files.map((file, index) => (;"
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">;
                          <span>{file && file.name} ({(file && file.size / 1024).toFixed(1)} KB)</span>;
                          <Button"
                            type="button" "
                            variant="ghost" "
                            size="sm" 
<Button "
                            type="button" "
                            variant="ghost" "
                            size="sm" 

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>;
                          <Button ;
                            type="button" ;
                            variant="ghost" ;
                            size="sm" ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;

                        </li>;
                      ))}
                    </ul>;
                  </div>;
                )}

              </FormItem>)}
          />;
          <FormItem>;
            <FormLabel > Attachments (optional)</FormLabel>;
<FormControl>;"
              <div className="space - y-4">;
                <Input;"
                  type="file";
                  multiple;
                  on_change={handleFileChange}"
                  className="cursor - pointer";
                />;
                {files.length > 0 && ("
                  <div className="space - y-2">;"
                    <p className="text - sm font - medium">Selected files:</p>;"
                    <ul className="space - y-1">;
                      {files.map ((file, index) => ("
                        <li key={index} className="flex items - center justify - between text - sm bg - muted / 30 p - 2 rounded">;
                          <span>{file.name} ({(file.size / 1024).to_fixed (1)} KB)</span>;
                          <Button;"
                            type="button";"
                            variant="ghost";"
                            size="sm";
                            on_click={() => remove_file (index)}
                          >;
                            Remove;
                          </Button>;
                        </li>))}
                    </ul>;
                  </div>)}

              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="flex justify - end space - x-2">;
            {on_cancel && (
              <Button type="button" variant="outline" on_click={on_cancel}>;
                Cancel;
              </Button>)}
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? "Submitting..." : "Submit Dispute"}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </Button>;
          </div>;
        </form>;
      </Form>;

</div>);

}
</Button>
}            </Button>
          </div>
        </form>
      </Form>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  )

        reason_code: values.reason_code,)
        description: values.description}),
      // Check condition;
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        // Check condition;
          console.log (`Would upload ${files.length} files for dispute ${dispute.id}`);
        }"
        toast.success ("Your dispute has been submitted");"
        // Check condition;
          onDisputeCreated (dispute.id);
    } catch (error) {"
      console.error ("Error submitting dispute:", error);""
      toast.error ("Failed to submit dispute. Please try again.");"
    } finally {
  // TODO: Implement
      setIsSubmitting (false);
  return ("
    <div className="space - y-6">;"
      <div className="flex items - center space - x-2">;"
        <FileText className="h - 5 w - 5 text - primary" />;"
        <h2 className="text - xl font - semibold">Report an Issue</h2>;"
)"
        <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;"
            name="reason_code";"

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            onClick={() => removeFile(index)}

                        </li>;
                    </ul>;

            <FormLabel > Attachments (optional);
              <div className="space - y-4">;"
                  type="file";"
                  on_change={handleFileChange}"
                  className="cursor - pointer";"
                  <div className="space - y-2">;"
                    <p className="text - sm font - medium">Selected files:</p>;""
                    <ul className="space - y-1">;"
                        <li key={index} className="flex items - center justify - between text - sm bg - muted / 30 p - 2 rounded">;"
                          <span>{file.name} ({(file.size / 1024).to_fixed (1)} KB)</span>;
                            type="button";""
                            variant="ghost";""
                            size="sm";"
                            on_click={() => remove_file (index)}

                        </li>))}
                  </div>)}

          ;"
          <div className="flex justify - end space - x-2">;"
              <Button type="button" variant="outline" on_click={on_cancel}>;"

              )}"
            <Button type="submit" disabled={is_submitting}>;"

        </form>;
    </div>);
</Button>
            </Button>;

          </div>;
        </form>;
      </Form>;
    </div>);

            </Button>

          </div>
        </form>
      </Form>
    </div>

                          </Button>
                        </li>
                    </ul>
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
          <div className="flex justify-end space-x-2">"
              <Button type="button" variant="outline" onClick={onCancel}>"

            <Button type="submit" disabled={isSubmitting}>"

  async function onSubmit (values: z.infer<typeof formSchema>) {
</typeof>"
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute <Select onValueChange= {"
  field.onChange;
}defaultValue= {
  field.value;"
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" />   <SelectContent> {")
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {
  value;
}value= {
}> {
}) ) 
}  <FormMessage /> ) 

}/> <FormField <FormItem> <FormLabel>Describe the issue in detail <FormControl> <Textarea />  <FormMessage /> ) 
}/> <FormItem> <FormLabel>Attachments (optional)  <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove  </li>) )"

}</ul> </div>) 
}</div>  <FormMessage />   </div> </form>  </div>) 
"`;
pr-12325
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) 
}
}
};
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
}

}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</FormMessage>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
