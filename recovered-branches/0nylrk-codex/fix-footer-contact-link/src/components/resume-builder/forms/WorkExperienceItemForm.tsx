
<<<<<<< HEAD
<<<<<<< HEAD


import { useState  } from 'react';
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {WorkExperience} from "@/types/resume";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Textarea} from "@/components/ui/textarea";
import {cn} from "@/lib/utils";
import {Switch} from "@/components/ui/switch";
import {format} from "date-fns";
import {CalendarIcon, Loader2} from "lucide-react";
import {AIEnhancementButton} from "@/components/ai-enhancement/AIEnhancementButton";
import {AIEnhancementDialog} from "@/components/ai-enhancement/AIEnhancementDialog";
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',

import { useState } from 'react',
import { useState } from 'react',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
import { useState } from 'react',
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { WorkExperience } from "@/types/resume",
import { Button } from "@/components/ui/button",
import { Calendar } from "@/components/ui/calendar",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Textarea } from "@/components/ui/textarea",
import { cn } from "@/lib/utils",
import { Switch } from "@/components/ui/switch",
import { format } from "date-fns",
import { CalendarIcon, Loader2 } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton";
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog";
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",
<<<<<<< HEAD
=======

import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define form schema

const formSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  role_title: z.string().min(1, "Role title is required"),
  start_date: z.date({
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_error: "Start date is required"})
  end_date: z.date().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()})
type FormValues = z.infer<typeof formSchema>;
interface WorkExperienceItemFormProps {
  initialData?: WorkExperience;
  onSubmit: (data: WorkExperience) => Promise<void>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_error: "Start date is required"}),
  end_date: z.date().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type FormValues = z.infer<typeof formSchema>,

interface WorkExperienceItemFormProps {
  initialData?: WorkExperience,
  onSubmit: (data: WorkExperience) => Promise<void>,
<<<<<<< HEAD
<<<<<<< HEAD
  onCancel: () => void
}

export function WorkExperienceItemForm({;
  initialData;
  onSubmit;
export function WorkExperienceItemForm({
  initialData,
  onSubmit,
=======
  onCancel: () => void
}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onCancel}: WorkExperienceItemFormProps) {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),

<<<<<<< HEAD
=======

  onCancel: () => void
}



  onCancel}: WorkExperienceItemFormProps) {

  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      company_name: initialData?.company_name |""
      role_title: initialData?.role_title |""
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date()
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined
      is_current: initialData?.is_current |false
      description: initialData?.description |""
      location: initialData?.location |""}})
  const { isSubmitting } = form.formState;
  const watchIsCurrent = form.watch("is_current");
  const watchRoleTitle = form.watch("role_title");
  const watchCompanyName = form.watch("company_name");
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      company_name: initialData?.company_name || "",
      role_title: initialData?.role_title || "",
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      is_current: initialData?.is_current || false,
      description: initialData?.description || "",
      location: initialData?.location || ""}}),
  
  const { isSubmitting } = form.formState,
  const watchIsCurrent = form.watch("is_current"),
  const watchRoleTitle = form.watch("role_title"),
  const watchCompanyName = form.watch("company_name"),

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleFormSubmit = async (values: FormValues) => {
    // Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
      id: initialData?.id
      company_name: values.company_name,  // Required
      role_title: values.role_title,      // Required
      start_date: values.start_date,      // Required
      end_date: values.end_date,          // Optional
      is_current: values.is_current,      // Required
      description: values.description,    // Optional
      location: values.location,          // Optional
<<<<<<< HEAD


<<<<<<< HEAD

    }
    await onSubmit(workExperience)
  }
    }
    await onSubmit(workExperience)
  }
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    await onSubmit(workExperience)
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    
    await onSubmit(workExperience)
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAIEnhancement = (content: string) => {
    form.setValue("description", content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)
  }
  },

<<<<<<< HEAD
=======

  const handleAIEnhancement = (content: string) => {
    form.setValue("description", content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from 'react',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { WorkExperience } from "@/types/resume",;
import { Button } from "@/components/ui/button",;
import { Calendar } from "@/components/ui/calendar",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Textarea } from "@/components/ui/textarea",;
import { cn } from "@/lib/utils",;
import { Switch } from "@/components/ui/switch",;
import { format } from "date-fns",;
import { CalendarIcon, Loader2 } from "lucide-react",;
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;
// Define form schema;
const formSchema = z.object({;
  company_name: z.string().min(1, "Company name is required"),;
  role_title: z.string().min(1, "Role title is required"),;
  start_date: z.date({;
    required_error: "Start date is required"}),;
  end_date: z.date().optional(),;
  is_current: z.boolean().default(false),;
  description: z.string().optional(),;
  location: z.string().optional()}),;
type FormValues = z.infer<typeof formSchema>,;
interface WorkExperienceItemFormProps {;
  initialData?: WorkExperience,;
  onSubmit: (data: WorkExperience) => Promise<void>,;
  onCancel: () => void;
}
;
export function WorkExperienceItemForm({;
  initialData,;
  onSubmit,;
  onCancel}: WorkExperienceItemFormProps) {;
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),;
<<<<<<< HEAD
<<<<<<< HEAD
// Define form schema;
const formSchema = z && z.object({;
  company_name: z && z.string().min(1, "Company name is required");
  role_title: z && z.string().min(1, "Role title is required");
  start_date: z && z.date({;
    required_error: "Start date is required"}),;
  end_date: z && z.date().optional(),;
  is_current: z && z.boolean().default(false),;
  description: z && z.string().optional(),;
  location: z && z.string().optional()}),;
type FormValues = z && z.infer<typeof formSchema>;
interface WorkExperienceItemFormProps {;
  initialData?: WorkExperience;
  onSubmit: (data: WorkExperience) => Promise<void>,;
  onCancel: () => void;
}
export function WorkExperienceItemForm(): any ({;
  initialData;
  onSubmit;
  onCancel}: WorkExperienceItemFormProps) {;
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Set up form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      company_name: initialData?.company_name || "",;
      role_title: initialData?.role_title || "",;
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from 'react',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { WorkExperience } from "@/types/resume",;
import { Button } from "@/components/ui/button",;
import { Calendar } from "@/components/ui/calendar",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Textarea } from "@/components/ui/textarea",;
import { cn } from "@/lib/utils",;
import { Switch } from "@/components/ui/switch",;
import { format } from "date-fns",;
import { CalendarIcon, Loader2 } from "lucide-react",;
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;
;
// Define form schema;
const formSchema = z.object({;
  company_name:z.string().min(1, "Company name is required"),;
  role_title:z.string().min(1, "Role title is required"),;
  start_date:z.date({;
    required_error:"Start date is required"}),;
  end_date:z.date().optional(),;
  is_current:z.boolean().default(false),;
  description:z.string().optional(),;
  location:z.string().optional()}),;
;
type FormValues = z.infer<typeof formSchema>,;
;
interface WorkExperienceItemFormProps {;
  initialData?:WorkExperience,;
  onSubmit:(data:WorkExperience) => Promise<void>,;
  onCancel:() => void;
}
;
export function WorkExperienceItemForm({;
  initialData,;
  onSubmit,;
  onCancel} WorkExperienceItemFormProps) {;
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),;
;
  // Set up form;
  const form = useForm<FormValues>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      company_name:initialData?.company_name || "",;
      role_title:initialData?.role_title || "",;
      start_date:initialData?.start_date ? new Date(initialData.start_date) :new Date(),;
      end_date:initialData?.end_date ? new Date(initialData.end_date) :undefined,;
      is_current:initialData?.is_current || false,;
      description:initialData?.description || "",;
      location:initialData?.location || ""}}),;
  ;
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),;
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,;
      is_current: initialData?.is_current || false,;
      description: initialData?.description || "",;
      location: initialData?.location || ""}}),;
  const { isSubmitting } = form.formState,;
  const watchIsCurrent = form.watch("is_current"),;
  const watchRoleTitle = form.watch("role_title"),;
  const watchCompanyName = form.watch("company_name"),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      start_date: initialData?.start_date ? new Date(initialData && initialData.start_date) : new Date(),;
      end_date: initialData?.end_date ? new Date(initialData && initialData.end_date) : undefined,;
      is_current: initialData?.is_current || false,;
      description: initialData?.description || "",;
      location: initialData?.location || ""}}),;

  const { isSubmitting } = form && form.formState;
  const watchIsCurrent = form && form.watch("is_current");
  const watchRoleTitle = form && form.watch("role_title");
  const watchCompanyName = form && form.watch("company_name");

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleFormSubmit = async (values: FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {;
      id: initialData?.id,;
<<<<<<< HEAD
<<<<<<< HEAD
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;
    },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      company_name: values && values.company_name,  // Required;
      role_title: values && values.role_title,      // Required;
      start_date: values && values.start_date,      // Required;
      end_date: values && values.end_date,          // Optional;
      is_current: values && values.is_current,      // Required;
      description: values && values.description,    // Optional;
      location: values && values.location,          // Optional;
    };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    await onSubmit(workExperience);
  },;
  const handleAIEnhancement = (content: string) => {;
    form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);
  },;
  return (;
    <>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="company_name";
=======
    await onSubmit(workExperience);
  };

  const handleAIEnhancement = (content: string) => {;
    form && form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleFormSubmit)} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField
              control={form && form.control}
              name="company_name"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="role_title";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Senior Developer" {...field} />;
=======
                    <Input placeholder="e && e.g. Acme Corporation" {...field} />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
            />;
            />;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField
              control={form && form.control}
              name="location"
          </div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="location";
=======

            />;


            <FormField
              control={form && form.control}
              name="role_title"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e && e.g. Senior Developer" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

            <FormField
              control={form && form.control}
              name="location"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
=======
                    <Input placeholder="e && e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import { zod_resolver } from '@hookform / resolvers / zod';
import { use_form } from './react - hook - form';
import { z } from './zod';
import { WorkExperience } from '@/types / resume';
import { Button } from '@/components / ui / button';
import { Calendar } from '@/components / ui / calendar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';
import { Textarea } from '@/components / ui / textarea';
import { cn } from '@/lib / utils';
import { Switch } from '@/components / ui / switch';
import { format } from './date - fns';
import { CalendarIcon, Loader2 } from './lucide-react';
import { AIEnhancementButton } from '@/components / ai - enhancement / AIEnhancementButton';
import { AIEnhancementDialog } from '@/components / ai - enhancement / AIEnhancementDialog';
// Define form schema;
const form_schema = z.object ({
  company_name: z.string ().min (1, "Company name is required");
  role_title: z.string ().min (1, "Role title is required");
  start_date: z.date ({
    required_error: "Start date is required"}),
  end_date: z.date ().optional (),
  is_current: z.boolean ().default (false),
  description: z.string ().optional (),
  location: z.string ().optional ()}),
type FormValues = z.infer < typeof form_schema>;
;
interface WorkExperienceItemFormProps {
  initial_data?: WorkExperience;
  on_submit: (data: WorkExperience) => Promise < void>,
  on_cancel: () => void;
}
export /**
 * WorkExperienceItemForm - Function description
 */
function WorkExperienceItemForm() {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState (false);
;
  // Set up form;
  const form = use_form < FormValues>({
    resolver: zod_resolver (form_schema),
    default_values: {
      company_name: initial_data?.company_name || "",
      role_title: initial_data?.role_title || "",
      start_date: initial_data?.start_date ? new Date (initial_data.start_date) : new Date (),
      end_date: initial_data?.end_date ? new Date (initial_data.end_date) : undefined,
      is_current: initial_data?.is_current || false,
      description: initial_data?.description || "",
      location: initial_data?.location || ""}}),
  const { is_submitting } = form.form_state;
  const watchIsCurrent = form.watch ("is_current");
  const watchRoleTitle = form.watch ("role_title");
  const watchCompanyName = form.watch ("company_name");
;
  const handleFormSubmit = async (values: FormValues) => {
    // Create a properly typed WorkExperience object with all required fields;
    const work_experience: WorkExperience = {
      id: initial_data?.id,
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;
    }
;
    await on_submit (work_experience);
  }
;
  const handleAIEnhancement = (content: string) =>: any {
    form.set_value ("description", content, { should_dirty: true }),
    setIsEnhancementDialogOpen (false);
  }
;
  return (
    <>;
      <Form {...form}>;
        <form on_submit={form.handle_submit (handleFormSubmit)} className="space - y-6">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="company_name";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Company Name</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              control={form.control}
              name="role_title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Role Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Senior Developer" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="location";
              render={({ field }) => (
<<<<<<< HEAD
<<<<<<< HEAD
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />
            <FormField
              control={form.control}
              name="role_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Senior Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <FormItem>;
                  <FormLabel > Location</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            />
            <FormField
            />;
            <FormField;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              control={form.control}
              name="is_current";
              render={({ field }) => (
                <FormItem className="flex flex - col">;
                  <FormLabel > Current Position</FormLabel>;
                  <div className="flex items - center gap - 2 h - 10">;
                    <Switch;
                      checked={field.value}
<<<<<<< HEAD
<<<<<<< HEAD
            />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormField
              control={form && form.control}
              name="is_current"
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Current Position</FormLabel>;
                  <div className="flex items-center gap-2 h-10">;
                    <Switch
                      checked={field && field.value}
                      onCheckedChange={field && field.onChange}
                      id="current-position"
                    />;
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      onCheckedChange={field.on_change}
                      id="current - position";
                    />;
                    <label html_for="current - position" className="text - sm text - muted - foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="is_current";
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Current Position</FormLabel>;
                  <div className="flex items-center gap-2 h-10">;
                    <Switch;
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="current-position";
                    />;
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      I currently work here;
                    </label>;
                  </div>;
                  <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                </FormItem>;
              )}
            />;
          </div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="start_date";
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Start Date</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
                        <Button;
                          variant={"outline"}
                          className={cn(;
                            "w-full pl-3 text-left font-normal",;
                            !field.value && "text-muted-foreground";
                          )}
                        >;
                          {field.value ? (;
                            format(field.value, "MMM yyyy");
                          ) :(;
                            <span>Select date</span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;
                      <Calendar;
                        mode="single";
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus;
                        captionLayout="dropdown-buttons";
                        fromYear={1990}
                        toYear={new Date().getFullYear()}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </FormItem>)}
            />;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="start_date";
              render={({ field }) => (
                <FormItem className="flex flex - col">;
                  <FormLabel > Start Date</FormLabel>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <FormControl>;
                        <Button;
                          variant={"outline"}
                          className={cn (
                            "w - full pl - 3 text - left font - normal";
                            !field.value && "text - muted - foreground")}
                        >;
                          {field.value ? (
                            format (field.value, "MMM yyyy")) : (
                            <span > Select date</span>)}
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0" align="start">;
                      <Calendar;
                        mode="single";
                        selected={field.value}
                        on_select={field.on_change}
                        initial_focus;
                        caption_layout="dropdown - buttons";
                        from_year={1990}
                        to_year={new Date ().getFullYear ()}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
              <FormField
                control={form && form.control}
                name="end_date"
                </FormItem>;
              )}
            />;
            ;
            {!watchIsCurrent && (;
              <FormField;
                control={form.control}
                name="end_date";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;

            {!watchIsCurrent && (;

              <FormField
                control={form && form.control}
                name="end_date"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                render={({ field }) => (;
                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                          <Button;
                            variant={"outline"}
                            className={cn(;
                              "w-full pl-3 text-left font-normal",;
                              !field.value && "text-muted-foreground";
                            )}
                          >;
                            {field.value ? (;
                              format(field.value, "MMM yyyy");
                            ) :(;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal"
                              !field && field.value && "text-muted-foreground"
                            )}>;
                            {field && field.value ? (;
                              format(field && field.value, "MMM yyyy");
                            ) : (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              <span>Select date</span>;
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;
                      <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
<<<<<<< HEAD
                          selected={field && field.value || undefined}
                          onSelect={field && field.onChange}
            />
            <FormField
            />;
            <FormField;
              control={form.control}
              name="is_current"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Current Position</FormLabel>
                  <div className="flex items-center gap-2 h-10">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="current-position"
                    />
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">
                      I currently work here
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "MMM yyyy")
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={1990}
                        toYear={new Date().getFullYear()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!watchIsCurrent && (
              <FormField
                control={form.control}
                name="end_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "MMM yyyy")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value |undefined}
                          onSelect={field.onChange}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Calendar
                          mode="single"

                          selected={field && field.value || undefined}
                          onSelect={field && field.onChange}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
<<<<<<< HEAD
<<<<<<< HEAD
                        <Calendar;
                          mode="single";
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus;
                          captionLayout="dropdown-buttons";
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
                </FormItem>)}
            />;
            {!watchIsCurrent && (
              <FormField;
                control={form.control}
                name="end_date";
                render={({ field }) => (
                  <FormItem className="flex flex - col">;
                    <FormLabel > End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger as_child>;
                        <FormControl>;
                          <Button;
                            variant={"outline"}
                            className={cn (
                              "w - full pl - 3 text - left font - normal";
                              !field.value && "text - muted - foreground")}
                          >;
                            {field.value ? (
                              format (field.value, "MMM yyyy")) : (
                              <span > Select date</span>)}
                            <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;
                      <PopoverContent className="w - auto p - 0" align="start">;
                        <Calendar;
                          mode="single";
                          selected={field.value || undefined}
                          on_select={field.on_change}
                          initial_focus;
                          caption_layout="dropdown - buttons";
                          from_year={1990}
                          to_year={new Date ().getFullYear ()}
                          disabled={(date) => date > new Date ()}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                  </FormItem>;                )}
              />;
            )}
          </div>;
;
          <FormField;
            control={form.control}
            name="description";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;


          <FormField
            control={form && form.control}
            name="description"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            render={({ field }) => (;
              <FormItem>;
                <div className="flex justify-between items-center">;
                  <FormLabel>Description</FormLabel>;
                  <div className="flex gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
                        enhancementType: "work-description",
                        content: field && field.value || "",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <AIEnhancementButton
                      options={{

                        enhancementType: "work-description",
                        content: field && field.value || "",

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        context: `${watchRoleTitle} at ${watchCompanyName}`
                      }}
                      onEnhanced={(content) => form && form.setValue("description", content, { shouldDirty: true })}
                      buttonText="Enhance with AI";
                    />;
<<<<<<< HEAD
<<<<<<< HEAD
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>Description</FormLabel>
                  <div className="flex gap-2">
                    <AIEnhancementButton
                      options={{
                        enhancementType: "work-description"
                        content: field.value |""
                        context: `${watchRoleTitle} at ${watchCompanyName}`
                      }}
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty: true })}
                      buttonText="Enhance with AI"
                    />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEnhancementDialogOpen(true)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="text-xs"
                    >
                      AI Writer
                    </Button>
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    placeholder="Describe your responsibilities, achievements, and skills used in this role..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>Save</>
              )}
            </Button>
          </div>
        </form>
      </Form>
      <AIEnhancementDialog
        title="Enhance Work Experience Description"
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{
          enhancementType: "work-description"
          content: form.getValues("description") |""

          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues("description") |""}
      />
    </>
  )
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="text-xs";
                  </FormItem>)}
              />)}
          </div>;
          <FormField;
            control={form.control}
            name="description";
            render={({ field }) => (
              <FormItem>;
                <div className="flex justify - between items - center">;
                  <FormLabel > Description</FormLabel>;
                  <div className="flex gap - 2">;
                    <AIEnhancementButton;
                      options={{
                        enhancement_type: "work - description",
                        content: field.value || "",
                        context: `${watchRoleTitle} at ${watchCompanyName}`;
                      }}
                      on_enhanced={(content) => form.set_value ("description", content, { should_dirty: true })}
                      button_text="Enhance with AI";
                    />;
                    <Button;
                      type="button";
                      variant="outline";
                      size="sm";
                      on_click={() => setIsEnhancementDialogOpen (true)}
                      className="text - xs";
                    <AIEnhancementButton;
                      options={{;
                        enhancementType:"work-description",;
                        content:field.value || "",;
                        context:`${watchRoleTitle} at ${watchCompanyName}`;
                      }}
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty:true })}
                      buttonText="Enhance with AI";
                    />;
                    <Button;
                      type="button";
                      variant="outline";
                      size="sm";
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className="text-xs";
                    >;
                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;
                  <Textarea;
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";
                    className="min-h-[150px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
          ;
          <div className="flex justify-end gap-2">;
            <Button type="button" variant="outline" onClick={onCancel}>;
              Cancel;
            </Button>;
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;
              ) :(;
                <>Save</>;
              )}
            </Button>;
          </div>;
        </form>;
      </Form>;
      <AIEnhancementDialog;
        title="Enhance Work Experience Description";
        is_open={isEnhancementDialogOpen}
        on_close={() => setIsEnhancementDialogOpen (false)}
        on_apply={handleAIEnhancement}
        default_options={{
          enhancement_type: "work - description",
          content: form.get_values ("description") || "",
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initial_content={form.get_values ("description") || ""}
      />;
    </>);
}

}
;

<<<<<<< HEAD
;
      <AIEnhancementDialog;
        title="Enhance Work Experience Description";
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{;
          enhancementType:"work-description",;
          content:form.getValues("description") || "",;
          context:`${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues("description") || ""}
      />;
    </>;
  ),;}
 is current: z.boolean () .default (false);
description: z.string () .optional ();
location: z.string () .optional () 
});
type FormValues = z.infer<typeof formSchema>;
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {
  await onSubmit (workExperience) 
};
setIsEnhancementDialogOpen (false);
};
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> {
  !watchIsCurrent && (<FormField control= {
  form.control 
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/>) 
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) 
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) 
}
}
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
