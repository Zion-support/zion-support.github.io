<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {
=======
import { Button } from "@/components/ui/button";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
>>>>>>> import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
import React, { useState } from 'react';
import { use_form, ControllerRenderProps } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { Button } from '@/components / ui / button';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
import {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
import { Button } from "@/components/ui/button",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx
<<<<<<< HEAD

========
  FormMessage,
} from '@/components / ui / form';
import { Textarea } from '@/components / ui / textarea'; import {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { disputeReasonLabels } from '@/types/disputes'
import { useDisputes } from '@/hooks/useDisputes'
import { toast } from 'sonner'
import { FileText } from 'lucide-react'
const formSchema = z.object({

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
  FormMessage,;
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea'; import {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
<<<<<<< HEAD
  FormMessage,;
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea'; import {
>>>>>>>   Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'; import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { disputeReasonLabels } from '@/types/disputes'
import { useDisputes } from '@/hooks/useDisputes'
import { toast } from 'sonner'
import { FileText } from 'lucide-react'
const formSchema = z.object({
  reason_code: z
    .string()
    .min(1, { message: 'Please select a reason for the dispute' })
  description: z
    .string()
    .min(20, { message: 'Description must be at least 20 characters' })
  attachments: z.array(z.any()).optional()
})
type DisputeFormProps = {
  projectId: string
  milestoneId?: string
  onDisputeCreated?: (disputeId: string) => void
  onCancel?: () => void
}
export function DisputeForm({
  projectId
  milestoneId
  onDisputeCreated
  onCancel
}: DisputeFormProps) {
  const { createDispute } = useDisputes()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason_code: '',
      description: '',
      attachments: [],
    },
  })
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles])
      form.setValue('attachments', [...files, ...newFiles])
    }
  }
  const removeFile = (index: number) => {
    const newFiles = [...files],
    newFiles.splice(index, 1)
    setFiles(newFiles)
    form.setValue('attachments', newFiles)
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from 'lucide-react'

const formSchema = z.object({
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  reason_code: z.string()
    .min(1, { message: "Please select a reason for the dispute" }),
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional()}),

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {

      const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,

      if (dispute && dispute.id) {
=======
>>>>>>>   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      reason_code: ''
      description: ''
      attachments: []
    }
  })
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles])
      form.setValue('attachments', [...files, ...newFiles])
    }
  }
  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
    form.setValue('attachments', newFiles)
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      const dispute = await createDispute({
        project_id: projectId
        milestone_id: milestoneId
        reason_code: values.reason_code
        description: values.description
      })
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>       const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,
        description: values.description}),
      
        description: values.description,
      })
>>>>>>>       if (dispute && dispute.id) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      reason_code: "",
      description: "",
      attachments: []}}),

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
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
      setIsSubmitting(true),
      
      const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,
        description: values.description}),
      
        description: values.description,
      })
        description: values.description}),
      
      if (dispute && dispute.id) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        toast.success('Your dispute has been submitted')

        toast.success("Your dispute has been submitted"),

        if (onDisputeCreated) {
=======
        toast.success('Your dispute has been submitted')
        
        toast.success("Your dispute has been submitted"),
        
>>>>>>>         if (onDisputeCreated) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

        toast.success('Your dispute has been submitted')
        
        toast.success("Your dispute has been submitted"),
        
        if (onDisputeCreated) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
if (onDisputeCreated) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> >>>>>>>     } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    } finally {
>>>>>>>       setIsSubmitting(false)
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      logErrorToProduction('Error submitting dispute:', { data: error })
      toast.error('Failed to submit dispute. Please try again.')

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
=======
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    } finally {
      setIsSubmitting(false)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
      
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD

                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
=======
>>>>>>>       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            name='reason_code'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'reason_code'
              >
            }) => (              <FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <FormLabel>Reason for dispute</FormLabel>
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}

            name="reason_code"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (
              <FormItem>

<<<<<<< HEAD
>>>>>>>                 <FormLabel>Reason for dispute</FormLabel>
>>>>>>>                 <Select onValueChange={field.onChange} defaultValue={field.value}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            name="reason_code"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (
              <FormItem>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    {...field}
                  />
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    {Object.entries(disputeReasonLabels).map(
                      ([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      )
                    )}                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'description'
              >
            }) => (              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Please provide specific details about the issue...'
                    className='min-h-[150px]'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     {...field}
ursor/fix-website-loading-errors-and-merge-6662
========
  SelectValue,
} from '@/components / ui / select';
import { Input } from '@/components / ui / input';
import { disputeReasonLabels } from '@/types / disputes';
import { use_disputes } from '@/hooks / use_disputes';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';
const form_schema = z.object ({
  reason_code: z;
    .string ();
    .min (1, { message: 'Please select a reason for the dispute' }),
  description: z;
    .string ();
    .min (20, { message: 'Description must be at least 20 characters' }),
  attachments: z.array (z.any ()).optional (),
});
type DisputeFormProps = {
  project_id: string;
  milestone_id?: string;
  onDisputeCreated?: (dispute_id: string) => void;
  on_cancel?: () => void;
}
export /**
 * DisputeForm - Function description
 */
function DisputeForm() {
  const { create_dispute } = use_disputes ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const [files, set_files] = useState < File[]>([]);
  const form = use_form < z.infer < typeof form_schema>>({
    resolver: zod_resolver (form_schema),
    default_values: {
      reason_code: '',
      description: '',
      attachments: [],
    },
  });
  const handleFileChange = (e: React.ChangeEvent < HTMLInputElement>, ) =>: any {
    // Check condition
if ( {) {
  $2
}
      const new_files = Array.from (e.target.files),
      set_files (prev => [...prev, ...new_files]);
      form.set_value ('attachments', [...files, ...new_files]);
    }
  }
  const remove_file = (index: number) =>: any {
    const new_files = [...files],
    new_files.splice (index, 1);
    set_files (new_files);
    form.set_value ('attachments', new_files);
  }
  async /**
 * on_submit - Function description
 */
function on_submit() {
    try {
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
<<<<<<< HEAD
<<<<<<< HEAD
  FormMessage,;
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';import {;
=======
  FormMessage} from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  FormMessage} from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
<<<<<<< HEAD
<<<<<<< HEAD
  SelectValue,;
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { disputeReasonLabels } from '@/types/disputes';
import { useDisputes } from '@/hooks/useDisputes';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';
const formSchema = z && z.object({;
  reason_code: z;
    .string();
    .min(1, { message: 'Please select a reason for the dispute' }),;
  description: z;
    .string();
    .min(20, { message: 'Description must be at least 20 characters' }),;
  attachments: z && z.array(z && z.any()).optional(),;
});
type DisputeFormProps = {;
  projectId: string;
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void;
  onCancel?: () => void;
};
export function DisputeForm(): any ({;
  projectId,;
  milestoneId,;
  onDisputeCreated,;
  onCancel,;
}: DisputeFormProps) {;
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<z && z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      reason_code: '',;
      description: '',;
      attachments: [],;
    },;
  });
  const handleFileChange = (e: React && React.ChangeEvent<HTMLInputElement>,) => {;
    if (e && e.target.files) {;
      const newFiles = Array && Array.from(e && e.target.files),;
      setFiles(prev => [...prev, ...newFiles]);
      form && form.setValue('attachments', [...files, ...newFiles]);
    }
  };
  const removeFile = (index: number) => {;
    const newFiles = [...files],;
    newFiles && newFiles.splice(index, 1);
    setFiles(newFiles);
    form && form.setValue('attachments', newFiles);
  };
  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
    try {;
      setIsSubmitting(true);
      const dispute = await createDispute({;
        project_id: projectId,;
        milestone_id: milestoneId,;
        reason_code: values && values.reason_code,;
        description: values && values.description,;
      });
      if (dispute && dispute.id) {;
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files && files.length > 0) {;
          // logInfo(`Would upload ${files && files.length} files for dispute ${dispute.id}`);
        }
        toast && toast.success('Your dispute has been submitted');
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;
      logErrorToProduction('Error submitting dispute:', { data: error });
      toast && toast.error('Failed to submit dispute. Please try again.');
    } finally {;
      setIsSubmitting(false);
    }
  }
  return (
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
    <div className='space-y-6'>;
      <div className='flex items-center space-x-2'>;
        <FileText className='h-5 w-5 text-primary' />;
        <h2 className='text-xl font-semibold'>Report an Issue</h2>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
          <FormField
            control={form && form.control}
            name='reason_code'
      setIsSubmitting (true);
      const dispute = await create_dispute ({
        project_id: project_id,
        milestone_id: milestone_id,
        reason_code: values.reason_code,
        description: values.description,
      });
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
          // log_info (`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
        toast.success ('Your dispute has been submitted');
        // Check condition
if ( {) {
  $2
}
          onDisputeCreated (dispute.id);
        }
      }
    } catch (error) {
      logErrorToProduction ('Error submitting dispute:', { data: error });
      toast.error ('Failed to submit dispute. Please try again.');
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <div className='space - y-6'>;
      <div className='flex items - center space - x-2'>;
        <FileText className='h - 5 w - 5 text - primary' />;
        <h2 className='text - xl font - semibold'>Report an Issue</h2>;
      </div>;
      <Form {...form}>;
        <form on_submit={form.handle_submit (on_submit)} className='space - y-6'>;
          <FormField;
            control={form.control}
            name='reason_code';
            render={({
              field
            }: {
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
                z && z.infer<typeof formSchema>,;
                'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
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
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

          />;


========
          />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
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
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
                z && z.infer<typeof formSchema>,;
                'description';
              >;
            }) => (              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  SelectValue} from "@/components/ui/select",;
import { Input } from "@/components/ui/input",;
import { disputeReasonLabels } from "@/types/disputes",;
import { useDisputes } from "@/hooks/useDisputes",;
import { toast } from "sonner",;
import { FileText } from 'lucide-react';
<<<<<<< HEAD
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
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`),;
        }
        ;
        toast.success("Your dispute has been submitted"),;
        ;
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id),;
        }
      }
    } catch (error) {;
      logErrorToProduction('Error submitting dispute:', { data:error }),;
      toast.error("Failed to submit dispute. Please try again."),;
    } finally {;
      setIsSubmitting(false),;    }
        if (onDisputeCreated) {onDisputeCreated(dispute.id)}
      }
    } catch (error) {logErrorToProduction('Error submitting dispute:', _{ data: error});
      toast.error("Failed to submit dispute. Please try again.")
    } finally {setIsSubmitting(false)}
=======
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
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
;
        toast.success("Your dispute has been submitted");
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;
      logErrorToProduction('Error submitting dispute:', { data: error });
      toast.error("Failed to submit dispute. Please try again.");
    } finally {;
      setIsSubmitting(false);
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="reason_code";
<<<<<<< HEAD
            render={({ field } { field:ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (;
=======
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
                      <SelectItem key={value} value={value}>{label}</SelectItem>;
                    ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
<<<<<<< HEAD
          ;
          <FormField;
            control={form.control}
            name="description";
            render={({ field } { field:ControllerRenderProps<z.infer<typeof formSchema>, "description"> }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder="Please provide specific details about the issue...";
                    className="min-h-[150px]";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
          />;
          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className='space-y-4'>;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
                <Input
                  type='file'
                  multiple
                  onChange={handleFileChange}
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
                  className='cursor-pointer'                />;
                {files && files.length > 0 && (;
                  <div className='space-y-2'>;
                    <p className='text-sm font-medium'>Selected files:</p>;
                    <ul className='space-y-1'>;
                      {files && files.map((file, index) => (;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"

<<<<<<< HEAD
>>>>>>>                     {...field}
>>>>>>>                   />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "description"> }) => (
              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {...field}
                  />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className='space-y-4'>
                <Input
                  type='file'
                  multiple
                  onChange={handleFileChange}
                  className='cursor-pointer'                />
                {files.length > 0 && (
                  <div className='space-y-2'>
                    <p className='text-sm font-medium'>Selected files:</p>
                    <ul className='space-y-1'>
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className='flex items-center justify-between text-sm bg-muted/30 p-2 rounded'
                        >
                          <span>
                            {file.name} ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            onClick={() => removeFile(index)}                          >
                            Remove
                          </Button>
                        </li>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
                          >;
                            Remove;
                          </Button>;
                        </li>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                      ))}
=======
>>>>>>>                       ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </ul>
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            {onCancel && (
=======
          <div className='flex justify-end space-x-2'>
>>>>>>>             {onCancel && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='flex justify-end space-x-2'>
          
          <div className="flex justify-end space-x-2">
            {onCancel && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 
}</ul> </div>) ;
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) ;
}'"};

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const removeFile = (index: number) => {
  async function onSubmit (values: z.infer<typeof formSchema>) {
  try {
  setIsSubmitting (true)
const dispute = await createDispute ({
  project id: projectId
milestone id: milestoneId
reason code: values.reason code
description: values.description
})
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files.length > 0) {
}finally {
  setIsSubmitting (false)
}"
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {
  field.onChange
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {
  value
}value= {
  value
}> {
  label
}</SelectItem>) )
}</SelectContent> </Select> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) "
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) )
}</ul> </div>)
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      ))}
                    </ul>;
                  </div>;
                )}
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx


          
          <div className="flex justify-end space-x-2">


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {onCancel && (
              <Button type='button' variant='outline' onClick={onCancel}>
                Cancel
              </Button>
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </FormItem>)}
          />;
          <FormItem>;
            <FormLabel > Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className='space - y-4'>;
                <Input;
                  type='file';
                  multiple;
                  on_change={handleFileChange}
                  className='cursor - pointer'                />;
                {files.length > 0 && (
                  <div className='space - y-2'>;
                    <p className='text - sm font - medium'>Selected files:</p>;
                    <ul className='space - y-1'>;
                      {files.map ((file, index) => (
                        <li;
                          key={index}
                          className='flex items - center justify - between text - sm bg - muted / 30 p - 2 rounded';
                        >;
                          <span>;
                            {file.name} ({(file.size / 1024).to_fixed (1)} KB);
                          </span>;
                          <Button;
                            type='button';
                            variant='ghost';
                            size='sm';
                            on_click={() => remove_file (index)}                          >;
                            Remove;
                          </Button>;
                        </li>))}
                    </ul>;
                  </div>)}
<<<<<<< HEAD
=======
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
                        </li>;                      ))}
                    </ul>;
                  </div>;
                )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
          <div className='flex justify - end space - x-2'>;
            {on_cancel && (
              <Button type='button' variant='outline' on_click={on_cancel}>;
                Cancel;
              </Button>)}
            <Button type='submit' disabled={is_submitting}>;
              {is_submitting ? 'Submitting...' : 'Submit Dispute'}
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
            </Button>;
          </div>;
        </form>;
      </Form>;
<<<<<<< HEAD
    </div>);
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx

}

========
}
const remove_file = (index: number) =>: any {
  async /**
 * on_submit - Function description
 */
function on_submit() {
  try {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );
};
const removeFile = (index: number) => {;
  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
=======
    </div>;
  ),;}
 import { ;
  {;
  {;
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
import {;
  Select;
SelectContent;
SelectItem;
SelectTrigger;
import {;
  FileText ;
 } from "lucide-react";
const formSchema = z.object ({;
  reason code: z.string () .min (1, {;
  message: "Please select a reason for the dispute" ;
});
description: z.string () attachments: z.array (z.any () ) .optional () ;
});
}
};
const removeFile = (index: number) => {;
  async function onSubmit (values: z.infer<typeof formSchema>) {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  try {;
  setIsSubmitting (true);
const dispute = await createDispute ({;
  project id: projectId;
milestone id: milestoneId;
<<<<<<< HEAD
reason code: values && values.reason code;
description: values && values.description ;
});
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files && files.length > 0) {;
}finally {;
  setIsSubmitting (false) ;
}";
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <SelectonValueChange= {
  field && field.onChange 
}defaultValue= {
  field && field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {;
  Object && Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItemkey= {
  value 
}value= {
  value 
=======
reason code: values.reason code;
description: values.description ;
});
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files.length > 0) {;
  ;
}
}finally {;
  setIsSubmitting (false) ;
}";
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {;
  field.onChange ;
}defaultValue= {;
  field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {;
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {;
  value ;
}value= {;
  value ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}> {;
  label ;
}</SelectItem>) ) ;
}</SelectContent> </Select> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) ;

<<<<<<< HEAD
>>>>>>> }/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 
=======

}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

}</ul> </div>) ;
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) ;
<<<<<<<< HEAD:src/components/disputes/DisputeForm.tsx
}'"};
>>>>>>> >>>>>>> 
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
}'"}
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  setIsSubmitting (true);
const dispute = await create_dispute ({
  project id: project_id;
milestone id: milestone_id;
reason code: values.reason code;
description: values.description;
});
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded // Check condition
if ( {) {
  $2
}
}finally {
  setIsSubmitting (false);
}";
}return (<div className="space - y-6" > <div className="flex items - center space - x-2" > <FileText className="h - 5 w - 5 text - primary" /> <h2 className="text - xl font - semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel > Reason for dispute</FormLabel> <Select onValueChange= {
  field.on_change;
}default_value= {
  field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {
  Object.entries (disputeReasonLabels) .map ( ([value, label]) => (<SelectItem key= {
  value;
}value= {
  value;
}> {
  label;
}</SelectItem>) );
}</SelectContent> </Select> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel > Attachments (optional) </FormLabel> <FormControl> <div className="space - y-4" > <Input type="file" multiple > Remove </Button> </li>) );
}</ul> </div>);
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>);
<<<<<<< HEAD
}'"}
=======
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/disputes/DisputeForm.tsx
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 
}</ul> </div>) ;
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) ;
}'"};
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}'"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
