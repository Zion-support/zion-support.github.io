<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from "react";"
import {useForm} from "react-hook-form";"
import {zodResolver} from "@hookform/resolvers/zod";"
import {z} from "zod";"
import {Button} from "@/components/ui/button";"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";"
import {Textarea} from "@/components/ui/textarea";"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
import {Input} from "@/components/ui/input";"
import {DisputeReason, disputeReasonLabels} from "@/types/disputes";"
import {useDisputes} from "@/hooks/useDisputes";"
import {toast} from "sonner";"
import {FileText} from "lucide-react";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import React, { useState } from "react","
import { useForm } from "react-hook-form","
import { zodResolver } from "@hookform/resolvers/zod","
import { z } from "zod","
import { Button } from "@/components/ui/button",
import {}
=======

import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Form,
  FormControl,
  FormField,
  FormItem,
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { FileText } from "lucide-react",



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
type DisputeFormProps = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


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
<<<<<<< HEAD
<<<<<<< HEAD

=======
}: DisputeFormProps) {;
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
}: DisputeFormProps) {
  const { createDispute } = useDisputes(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [files, setFiles] = useState<File[]>([]),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const formSchema = z && z.object({;
  reason_code: z && z.string();
    .min(1, { message: "Please select a reason for the dispute" }),;
  description: z && z.string();
    .min(20, { message: "Description must be at least 20 characters" }),;
  attachments: z && z.array(z && z.any()).optional()}),;

type DisputeFormProps = {;
  projectId: string,;
  milestoneId?: string;
<<<<<<< HEAD
=======
type DisputeFormProps = {}
  projectId: string,
  milestoneId?: string,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
  onDisputeCreated?: (disputeId: string) => void,;
  onCancel?: () => void;
};

export function DisputeForm(): any ({ ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  projectId, ;
  milestoneId, ;
  onDisputeCreated, ;
  onCancel ;
<<<<<<< HEAD

      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),"
=======
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

      setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue("attachments", [...files, ...newFiles]);
    }


      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      form.setValue("attachments", [...files, ...newFiles])
    }
  },

<<<<<<< HEAD
  const removeFile = (index: number) => {}
    const newFiles = [...files],
    newFiles.splice(index, 1),
    setFiles(newFiles),"
    form.setValue("attachments", newFiles)
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        }

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        
=======
      if (dispute && dispute.id) {}
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files.length > 0) {}
        "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        }


        
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        toast.success("Your dispute has been submitted"),
        


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          // // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
        toast.success("Your dispute has been submitted");
        
        toast.success("Your dispute has been submitted"),
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======


      console.error("Error submitting dispute:", error),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======



        if (onDisputeCreated) {}
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const removeFile = (index: number) => {;
    const newFiles = [...files],;
    newFiles && newFiles.splice(index, 1);
<<<<<<< HEAD
    setFiles(newFiles);
<<<<<<< HEAD
    form && form.setValue("attachments", newFiles)
};
=======
    setFiles(newFiles);"
    form && form.setValue("attachments", newFiles);
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    form && form.setValue("attachments", newFiles);
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
<<<<<<< HEAD
  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <FormField
            control={form.control}
=======
          <FormField;
            control={form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (

          <FormField
            control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            name="reason_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
<<<<<<< HEAD
                    <SelectTrigger>"
=======
                    <SelectTrigger>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
<<<<<<< HEAD
"
import React, { useState } from "react",;"
import { useForm } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { z } from "zod",;"
=======

import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
<<<<<<< HEAD
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;"
=======
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    .min(20, { message: "Description must be at least 20 characters" }),;
  attachments: z.array(z.any()).optional()}),;
type DisputeFormProps = {;
  projectId: string,;
  milestoneId?: string,;
  onDisputeCreated?: (disputeId: string) => void,;
  onCancel?: () => void;
},;
<<<<<<< HEAD
export function DisputeForm() { return null; }
=======
export function DisputeForm({;
  projectId,;
  milestoneId,;
  onDisputeCreated,;
  onCancel;
}: DisputeFormProps) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { createDispute } = useDisputes(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [files, setFiles] = useState<File[]>([]),;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
<<<<<<< HEAD
    defaultValues: {;"
      reason_code: "",;"
=======
    defaultValues: {;
      reason_code: "",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      description: "",;
      attachments: []}}),;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files) {;
      const newFiles = Array.from(e.target.files),;
<<<<<<< HEAD
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

<<<<<<< HEAD
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <FormField
=======
  return (          <FormField
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
import React, { useState } from './react';'
import { use_form } from './react - hook - form';'
import { zod_resolver } from '@hookform / resolvers / zod';'
import { z } from './zod';'
import { Button } from '@/components / ui / button';'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';'
import { Textarea } from '@/components / ui / textarea';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
import { Input } from '@/components / ui / input';'
import { DisputeReason, disputeReasonLabels } from '@/types / disputes';'
import { use_disputes } from '@/hooks / use_disputes';'
import { toast } from './sonner';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  return (
    <div className="space - y-6">;
      <div className="flex items - center space - x-2">;
        <FileText className="h - 5 w - 5 text - primary" />;
        <h2 className="text - xl font - semibold">Report an Issue</h2>;
      </div>;
      <Form {...form}>;
<<<<<<< HEAD
        <form on_submit={form.handle_submit (on_submit)} className="space-y-6">;
=======
  return ("
    <div className="space - y-6">;"
      <div className="flex items - center space - x-2">;"
        <FileText className="h - 5 w - 5 text - primary" />;"
        <h2 className="text - xl font - semibold">Report an Issue</h2>;
      </div>;
      <Form {...form}>;"
        <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <FormField;
            control={form.control}"
            name="reason_code";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Reason for dispute</FormLabel>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
                <Select onValueChange={field.on_change} default_value={field.value}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
<<<<<<< HEAD
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
                      <SelectItem key={value} value={value}>{label}</SelectItem>;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <FormField
            control={form && form.control}
            name="description"
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
<<<<<<< HEAD
=======
                    {Object.entries (disputeReasonLabels).map (([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}"
            name="description";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Describe the issue in detail</FormLabel>;
                <FormControl>;
<<<<<<< HEAD
                  <Textarea;
                    placeholder="Please provide specific details about the issue...";
                    className="min - h-[150px]";
                  <Textarea;
                    placeholder="Please provide specific details about the issue...";
                    className="min-h-[150px]";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
          />;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;"
              <div className="space-y-4">;
<<<<<<< HEAD
                <Input
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  className="cursor-pointer"
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
                />
                {files.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Selected files:</p>
                    <ul className="space-y-1">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
<<<<<<< HEAD
=======
                  className="cursor-pointer"
                />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
<<<<<<< HEAD


                          <Button "
                            type="button" "
                            variant="ghost" "
                            size="sm" 

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
=======
                          <span>{file && file.name} ({(file && file.size / 1024).toFixed(1)} KB)</span>;
                          <Button
                            type="button" 
                            variant="ghost" 
                            size="sm" 

                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>;
                          <Button ;
                            type="button" ;
                            variant="ghost" ;
                            size="sm" ;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                )}

              </FormItem>)}
          />;
          <FormItem>;
            <FormLabel > Attachments (optional)</FormLabel>;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            size="sm";
                            on_click={() => remove_file (index)}
                          >;
                            Remove;
                          </Button>;
                        </li>))}
                    </ul>;
                  </div>)}

<<<<<<< HEAD


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;

<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
    </div>);

}
            </Button>
          </div>
        </form>
      </Form>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
  )


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )

<<<<<<< HEAD

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
}
}
};
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
}


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
