<<<<<<< HEAD
import React, { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { disputeReasonLabels } from "@/types/disputes";
import { useDisputes } from "@/hooks/useDisputes";
import { toast } from "sonner";
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
import React, { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
import React, { useState } from 'react';
import { use_form, ControllerRenderProps } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { Button } from '@/components / ui / button';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
import {
import { Button } from "@/components/ui/button";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
import { Button } from "@/components/ui/button",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components / ui / form';
import { Textarea } from '@/components / ui / textarea'; import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
  FormMessage,;
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea'; import {
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
  FormMessage} from "@/components/ui/form",
import { Textarea } from "@/components/ui/textarea",
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { Input } from "@/components/ui/input",
import { disputeReasonLabels } from "@/types/disputes",
import { useDisputes } from "@/hooks/useDisputes",
import { toast } from "sonner",
import { FileText } from 'lucide-react'

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
>>>>>>> merged-prs-20250907-203621
import { FileText } from 'lucide-react'

const formSchema = z.object({
  reason_code: z.string()
    .min(1, { message: "Please select a reason for the dispute" }),
  description: z.string()
    .min(20, { message: "Description must be at least 20 characters" }),
  attachments: z.array(z.any()).optional()}),

type DisputeFormProps = {
  projectId: string,
<<<<<<< HEAD
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void,
  onCancel?: () => void
};
=======
  milestoneId?: string,
  onDisputeCreated?: (disputeId: string) => void,
  onCancel?: () => void
},
>>>>>>> merged-prs-20250907-203621

export function DisputeForm({ 
  projectId, 
  milestoneId, 
  onDisputeCreated, 
  onCancel 
}: DisputeFormProps) {
<<<<<<< HEAD
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
=======
  const { createDispute } = useDisputes(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [files, setFiles] = useState<File[]>([]),

    resolver: zodResolver(formSchema)
    defaultValues: {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
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
>>>>>>> merged-prs-20250907-203621
      reason_code: "",
      description: "",
      attachments: []}}),

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
<<<<<<< HEAD
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      form.setValue("attachments", [...files, ...newFiles])
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles)
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
=======
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
>>>>>>> merged-prs-20250907-203621
      
      const dispute = await createDispute({
        project_id: projectId,
        milestone_id: milestoneId,
        reason_code: values.reason_code,
        description: values.description}),
      
<<<<<<< HEAD
=======
        description: values.description,
      })
        description: values.description}),
      
>>>>>>> merged-prs-20250907-203621
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          // logInfo(`Would upload ${files.length} files for dispute ${dispute.id}`)
        }
<<<<<<< HEAD
        
        toast.success("Your dispute has been submitted");
        
        if (onDisputeCreated) {
=======
        toast.success('Your dispute has been submitted')
        
        toast.success("Your dispute has been submitted"),
        

        toast.success('Your dispute has been submitted')
        
        toast.success("Your dispute has been submitted"),
        
        if (onDisputeCreated) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
if (onDisputeCreated) {
>>>>>>> merged-prs-20250907-203621
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {
<<<<<<< HEAD
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

=======

<<<<<<< HEAD

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      logErrorToProduction('Error submitting dispute:', { data: error })
      toast.error('Failed to submit dispute. Please try again.')
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")
      logErrorToProduction('Error submitting dispute:', { data: error }),
      toast.error("Failed to submit dispute. Please try again.")

    } finally {
      setIsSubmitting(false)
    }
  }
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>
<<<<<<< HEAD
      
=======
<<<<<<< HEAD
      
      
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
<<<<<<< HEAD
            name="reason_code"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (
              <FormItem>
=======
<<<<<<< HEAD
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name='reason_code'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'reason_code'
              >
            }) => (              <FormItem>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            name="reason_code"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (
              <FormItem>

<<<<<<< HEAD
            name="reason_code"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (
              <FormItem>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
<<<<<<< HEAD
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
=======
<<<<<<< HEAD
                    {Object.entries(disputeReasonLabels).map(
                      ([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      )
                    )}                  </SelectContent>
>>>>>>> merged-prs-20250907-203621
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
<<<<<<< HEAD
          
          <FormField
            control={form.control}
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
import React, { useState } from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  FormMessage} from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import {;
=======
  FormMessage,;
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';import {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
<<<<<<< HEAD
    <div className='space-y-6'>;
      <div className='flex items-center space-x-2'>;
        <FileText className='h-5 w-5 text-primary' />;
        <h2 className='text-xl font-semibold'>Report an Issue</h2>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;
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
                z && z.infer<typeof formSchema>,;
                'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
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
          />;
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
                z && z.infer<typeof formSchema>,;
                'description';
              >;
            }) => (              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
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
  SelectValue} from "@/components/ui/select",;
import { Input } from "@/components/ui/input",;
import { disputeReasonLabels } from "@/types/disputes",;
import { useDisputes } from "@/hooks/useDisputes",;
import { toast } from "sonner",;
import { FileText } from 'lucide-react';
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;
      logErrorToProduction('Error submitting dispute:', { data: error });
<<<<<<< HEAD
      toast.error("Failed to submit dispute. Please try again.");
=======
      toast && toast.error('Failed to submit dispute. Please try again.');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {;
      setIsSubmitting(false);
    }
  }
<<<<<<< HEAD
;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="reason_code";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "reason_code"> }) => (;
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
                    ))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
=======
  return (

    <div className='space-y-6'>;
      <div className='flex items-center space-x-2'>;
        <FileText className='h-5 w-5 text-primary' />;
        <h2 className='text-xl font-semibold'>Report an Issue</h2>;
      </div>;

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;

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

                z && z.infer<typeof formSchema>,;
                'reason_code';
              >;
            }) => (              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;

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

          />;


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

                z && z.infer<typeof formSchema>,;
                'description';
              >;
            }) => (              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
                <Input
                  type='file'
                  multiple
                  onChange={handleFileChange}
                  className='cursor-pointer'                />;
                {files && files.length > 0 && (;
                  <div className='space-y-2'>;
                    <p className='text-sm font-medium'>Selected files:</p>;
                    <ul className='space-y-1'>;
                      {files && files.map((file, index) => (;
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
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"

<<<<<<< HEAD
          <FormField;
            control={form.control}
>>>>>>> merged-prs-20250907-203621
            name="description"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "description"> }) => (
              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
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
>>>>>>> merged-prs-20250907-203621
          
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
                            onClick={() => removeFile(index)}
<<<<<<< HEAD
                          >
                            Remove
                          </Button>
                        </li>
=======
                          >;
                            Remove;
                          </Button>;
                        </li>;
>>>>>>> merged-prs-20250907-203621
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
=======
          <div className='flex justify-end space-x-2'>
          <div className='flex justify-end space-x-2'>
>>>>>>> merged-prs-20250907-203621
          
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
<<<<<<< HEAD
}
=======
}
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
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) )
}</ul> </div>)
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)
}'"}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      ))}
                    </ul>;
                  </div>;
                )}
            {onCancel && (
              <Button type='button' variant='outline' onClick={onCancel}>
                Cancel
              </Button>
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
}
const remove_file = (index: number) =>: any {
  async /**
 * on_submit - Function description
 */
function on_submit() {
  try {
            </Button>;
          </div>;
        </form>;
      </Form>;
    </div>;
  );
};
const removeFile = (index: number) => {;
  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
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
  try {;
  setIsSubmitting (true);
const dispute = await createDispute ({;
  project id: projectId;
milestone id: milestoneId;
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
}> {;
  label ;
}</SelectItem>) ) ;
}</SelectContent> </Select> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) ;


}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 

}</ul> </div>) ;
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) ;



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
}'"
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) ) 
}</ul> </div>) ;
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>) ;
}'"};
}'"}
=======
}'"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
