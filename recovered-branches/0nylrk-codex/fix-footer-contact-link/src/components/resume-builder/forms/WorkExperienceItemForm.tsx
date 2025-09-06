<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

import { useState  } from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {useState} from 'react';
import {zodResolver} from "@hookform/resolvers/zod";"
import {useForm} from "react-hook-form";"
import {z} from "zod";"
import {WorkExperience} from "@/types/resume";"
import {Button} from "@/components/ui/button";"
import {Calendar} from "@/components/ui/calendar";"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";"
import {Input} from "@/components/ui/input";"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";"
import {Textarea} from "@/components/ui/textarea";"
import {cn} from "@/lib/utils";"
import {Switch} from "@/components/ui/switch";"
import {format} from "date-fns";"
import {CalendarIcon, Loader2} from "lucide-react";"
import {AIEnhancementButton} from "@/components/ai-enhancement/AIEnhancementButton";"
import {AIEnhancementDialog} from "@/components/ai-enhancement/AIEnhancementDialog";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
import { useState } from 'react',
<<<<<<< HEAD

=======
import { useState } from 'react',

import { useState } from 'react',
import { useState } from 'react',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { useState } from 'react',
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState } from 'react',import { useState } from 'react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useState } from 'react',import { useState } from 'react',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import { useState } from 'react',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CalendarIcon, Loader2 } from "lucide-react",
<<<<<<< HEAD

import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
import { zodResolver } from "@hookform/resolvers/zod","
import { useForm } from "react-hook-form","
import { z } from "zod","
import { WorkExperience } from "@/types/resume","
import { Button } from "@/components/ui/button","
import { Calendar } from "@/components/ui/calendar","
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form","
import { Input } from "@/components/ui/input","
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover","
import { Textarea } from "@/components/ui/textarea","
import { cn } from "@/lib/utils","
import { Switch } from "@/components/ui/switch","
import { format } from "date-fns","
import { CalendarIcon, Loader2 } from "lucide-react",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
import { CalendarIcon, Loader2 } from "lucide-react",

import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",

import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton";
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog";
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Define form schema

const formSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  role_title: z.string().min(1, "Role title is required"),
  start_date: z.date({
<<<<<<< HEAD
<<<<<<< HEAD

  onCancel: () => void
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
    required_error: "Start date is required"})
  end_date: z.date().optional()
  is_current: z.boolean().default(false)
  description: z.string().optional()
  location: z.string().optional()})
type FormValues = z.infer<typeof formSchema>;
interface WorkExperienceItemFormProps {
  initialData?: WorkExperience;
  onSubmit: (data: WorkExperience) => Promise<void>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
// Define form schema;
const formSchema = z.object({"
  company_name: z.string().min(1, "Company name is required"),"
  role_title: z.string().min(1, "Role title is required"),
  start_date: z.date({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    required_error: "Start date is required"}),
  end_date: z.date().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type FormValues = z.infer<typeof formSchema>,

<<<<<<< HEAD
interface WorkExperienceItemFormProps {}
  initialData?: WorkExperience,
  onSubmit: (data: WorkExperience) => Promise<void>,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function WorkExperienceItemForm({;
=======
import { CalendarIcon, Loader2 } from "lucide-react",export function WorkExperienceItemForm({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { CalendarIcon, Loader2 } from "lucide-react",export function WorkExperienceItemForm({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface WorkExperienceItemFormProps {
  initialData?: WorkExperience,
  onSubmit: (data: WorkExperience) => Promise<void>,

  onCancel: () => void
}



export function WorkExperienceItemForm({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  initialData;
  onSubmit;
export function WorkExperienceItemForm({}
  initialData,
  onSubmit,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  onCancel}: WorkExperienceItemFormProps) {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



  onCancel}: WorkExperienceItemFormProps) {
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      company_name: initialData?.company_name || "",
=======





  onCancel}: WorkExperienceItemFormProps) {};
  // Set up form;
  const form = useForm<FormValues>({}
    resolver: zodResolver(formSchema)
    defaultValues: {}
"
      company_name: initialData?.company_name || "","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      role_title: initialData?.role_title || "",
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      is_current: initialData?.is_current || false,"
      description: initialData?.description || "","
      location: initialData?.location || ""}}),
  
  const { isSubmitting } = form.formState,"
  const watchIsCurrent = form.watch("is_current"),"
  const watchRoleTitle = form.watch("role_title"),"
  const watchCompanyName = form.watch("company_name"),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


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



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleFormSubmit = async (values: FormValues) => {}
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {}
      id: initialData?.id;
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    },
    
    await onSubmit(workExperience)
  },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleAIEnhancement = (content: string) => {
    form.setValue("description", content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)

  },


<<<<<<< HEAD
=======
  const handleAIEnhancement = (content: string) => {
    form.setValue("description", content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <>
      <Form {...form}>"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField;
              control={form.control}"
=======
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
<<<<<<< HEAD
                  <FormControl>"
=======
                  <FormControl>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <Input placeholder="e.g. Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              )}
            />
            <FormField
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
'
import { useState } from 'react',;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { useForm } from "react-hook-form",;"
import { z } from "zod",;"
import { WorkExperience } from "@/types/resume",;"
import { Button } from "@/components/ui/button",;"
import { Calendar } from "@/components/ui/calendar",;"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;"
import { Input } from "@/components/ui/input",;"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;"
import { Textarea } from "@/components/ui/textarea",;"
import { cn } from "@/lib/utils",;"
import { Switch } from "@/components/ui/switch",;"
import { format } from "date-fns",;"
import { CalendarIcon, Loader2 } from "lucide-react",;"
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;
// Define form schema;
const formSchema = z.object({;"
  company_name: z.string().min(1, "Company name is required"),;"
  role_title: z.string().min(1, "Role title is required"),;
  start_date: z.date({;"
=======
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;
// Define form schema;
const formSchema = z.object({;
  company_name: z.string().min(1, "Company name is required"),;
  role_title: z.string().min(1, "Role title is required"),;
  start_date: z.date({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function WorkExperienceItemForm({;
  initialData,;
  onSubmit,;
  onCancel}: WorkExperienceItemFormProps) {;
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),;
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Set up form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      company_name: initialData?.company_name || "",;
      role_title: initialData?.role_title || "",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleFormSubmit = async (values: FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {;
      id: initialData?.id,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      company_name: values && values.company_name,  // Required;
      role_title: values && values.role_title,      // Required;
      start_date: values && values.start_date,      // Required;
      end_date: values && values.end_date,          // Optional;
      is_current: values && values.is_current,      // Required;
      description: values && values.description,    // Optional;
      location: values && values.location,          // Optional;
    };

    await onSubmit(workExperience);
  };

  const handleAIEnhancement = (content: string) => {;
    form && form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);
  };

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
  onCancel}: WorkExperienceItemFormProps) {  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onCancel}: WorkExperienceItemFormProps) {  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleFormSubmit)} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField
              control={form && form.control}
<<<<<<< HEAD
              name="company_name"  onCancel}: WorkExperienceItemFormProps) {;
=======
export function WorkExperienceItemForm() { return null; }
  onCancel}: WorkExperienceItemFormProps) {;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              name="company_name"
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;
    },;
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
  onCancel}: WorkExperienceItemFormProps) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);
  return (
    <>;
      <Form {...form}>;"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <Input placeholder="e && e.g. Acme Corporation" {...field} />;                  </FormControl>;
=======
                    <Input placeholder="e && e.g. Acme Corporation" {...field} />;
                  </FormControl>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <FormMessage />;
                </FormItem>;
              )}

            />;


            <FormField
              control={form && form.control}
              name="role_title"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e && e.g. Senior Developer" {...field} />;
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}



<<<<<<< HEAD
            <FormField
              control={form && form.control}
              name="location"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e && e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

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
=======
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;


'
import {useState} from 'react';'
import { zod_resolver } from '@hookform / resolvers / zod';'
import { use_form } from './react - hook - form';'
import { z } from './zod';'
import { WorkExperience } from '@/types / resume';'
import { Button } from '@/components / ui / button';'
import { Calendar } from '@/components / ui / calendar';'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';'
import { Input } from '@/components / ui / input';'
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';'
import { Textarea } from '@/components / ui / textarea';'
import { cn } from '@/lib / utils';'
import { Switch } from '@/components / ui / switch';'
import { format } from './date - fns';'
import { CalendarIcon, Loader2 } from './lucide-react';'
import { AIEnhancementButton } from '@/components / ai - enhancement / AIEnhancementButton';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AIEnhancementDialog } from '@/components / ai - enhancement / AIEnhancementDialog';
// Define form schema;
const form_schema = z.object ({"
  company_name: z.string ().min (1, "Company name is required");"
  role_title: z.string ().min (1, "Role title is required");
  start_date: z.date ({"
    required_error: "Start date is required"}),
  end_date: z.date ().optional (),
  is_current: z.boolean ().default (false),
  description: z.string ().optional (),
  location: z.string ().optional ()}),
type FormValues = z.infer < typeof form_schema>;
;
interface WorkExperienceItemFormProps {}
  initial_data?: WorkExperience;
  on_submit: (data: WorkExperience) => Promise < void>,
  on_cancel: () => void;
}
export /**;
 * WorkExperienceItemForm - Function description;
 */
function WorkExperienceItemForm() {}
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState (false);
;
  // Set up form;
  const form = use_form < FormValues>({}
    resolver: zod_resolver (form_schema),
    default_values: {"
      company_name: initial_data?.company_name || "","
      role_title: initial_data?.role_title || "",
      start_date: initial_data?.start_date ? new Date (initial_data.start_date) : new Date (),
      end_date: initial_data?.end_date ? new Date (initial_data.end_date) : undefined,
      is_current: initial_data?.is_current || false,"
      description: initial_data?.description || "","
      location: initial_data?.location || ""}}),
  const { is_submitting } = form.form_state;"
  const watchIsCurrent = form.watch ("is_current");"
  const watchRoleTitle = form.watch ("role_title");"
  const watchCompanyName = form.watch ("company_name");
;
  const handleFormSubmit = async (values: FormValues) => {}
    // Create a properly typed WorkExperience object with all required fields;
    const work_experience: WorkExperience = {}
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
  const handleAIEnhancement = (content: string) =>: any {"
    form.set_value ("description", content, { should_dirty: true }),
    setIsEnhancementDialogOpen (false);
  }
;
  return (
    <>;
<<<<<<< HEAD
      <Form {...form}>;
<<<<<<< HEAD
        <form on_submit={form.handle_submit (handleFormSubmit)} className="space-y-6">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
=======
      <Form {...form}>;"
        <form on_submit={form.handle_submit (handleFormSubmit)} className="space - y-6">;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <form on_submit={form.handle_submit (handleFormSubmit)} className="space - y-6">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <FormField;
              control={form.control}"
              name="company_name";
              render={({ field }) => (
<<<<<<< HEAD
                <FormItem>;
                  <FormLabel > Company Name</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />
            <FormField
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
              )}
            />
<<<<<<< HEAD
            <FormField

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              control={form.control}
=======
            <FormField;
              control={form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              name="role_title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Role Title</FormLabel>;
                  <FormControl>;"
                    <Input placeholder="e.g. Senior Developer" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
<<<<<<< HEAD
          </div>;
<<<<<<< HEAD
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
=======
          </div>;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <FormField;
              control={form.control}"
              name="location";
              render={({ field }) => (
<<<<<<< HEAD
<<<<<<< HEAD
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              control={form.control}
              name="is_current";
              render={({ field }) => (
                <FormItem className="flex flex - col">;
                  <FormLabel > Current Position</FormLabel>;
                  <div className="flex items - center gap - 2 h - 10">;
                    <Switch;
                      checked={field.value}

            />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
            />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      onCheckedChange={field.on_change}
                      id="current - position";
                    />;
                    <label html_for="current - position" className="text - sm text - muted - foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
            ;
<<<<<<< HEAD
=======
              control={form.control}"
              name="is_current";
              render={({ field }) => ("
                <FormItem className="flex flex - col">;
                  <FormLabel > Current Position</FormLabel>;"
                  <div className="flex items - center gap - 2 h - 10">;
                    <Switch;
                      checked={field.value}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <FormField;
              control={form && form.control}"
              name="is_current"
              render={({ field }) => (;"
                <FormItem className="flex flex-col">;
                  <FormLabel>Current Position</FormLabel>;"
                  <div className="flex items-center gap-2 h-10">;
                    <Switch;
                      checked={field && field.value}
                      onCheckedChange={field && field.onChange}"
                      id="current-position"
                    />;"
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                      onCheckedChange={field.on_change}"
                      id="current - position";
                    />;"
                    <label html_for="current - position" className="text - sm text - muted - foreground">;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      I currently work here;
                    </label>;
                  </div>;
                  <FormMessage />;

<<<<<<< HEAD

=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;

<<<<<<< HEAD

<<<<<<< HEAD
            {!watchIsCurrent && (;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            />;

            {!watchIsCurrent && (;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <FormField
                control={form && form.control}
                name="end_date"
              <FormField
                control={form && form.control}
=======
              <FormField
                control={form && form.control}
                name="end_date"              <FormField
                control={form && form.control}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                name="end_date"
                render={({ field }) => (;
=======
              <FormField;
                control={form && form.control}"
                name="end_date"

                render={({ field }) => (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;
<<<<<<< HEAD
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal"
                              !field && field.value && "text-muted-foreground"
                            )}>;
                            {field && field.value ? (;
                              format(field && field.value, "MMM yyyy");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            ) : (;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                              <span>Select date</span>;

                          <Button"
                            variant={"outline"}
                            className={cn(

                            )}"
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;"
                      <PopoverContent className="w-auto p-0" align="start">;


                        <Calendar"
                          mode="single"

                          initialFocus"
=======
                            ) : (;
                              <span>Select date</span>;
                          <Button
                            variant={"outline"}
                            className={cn(
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;
                      <PopoverContent className="w-auto p-0" align="start">;
                        <Calendar
                          mode="single"

                          selected={field && field.value || undefined}
                          onSelect={field && field.onChange}

                        <Calendar
                          mode="single"
                          initialFocus
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          captionLayout="dropdown-buttons"
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                        <Calendar;
=======


                        <Calendar;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          mode="single";
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus;"
=======
                        <Calendar;
                          mode="single";
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          captionLayout="dropdown-buttons";
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        />;
=======
                            ) : (;                              <span>Select date</span>;                        />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                            ) : (;                              <span>Select date</span>;                        />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      </PopoverContent>;
                    </Popover>;
<<<<<<< HEAD
                    <FormMessage />;          <FormField
=======
                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;

          </div>;


          <FormField
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            control={form && form.control}
            name="description"
          <FormField
            control={form && form.control}
            name="description"
=======
                    <FormMessage />;


          <FormField;
            control={form && form.control}"
            name="description"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            render={({ field }) => (;
              <FormItem>;"
                <div className="flex justify-between items-center">;
                  <FormLabel>Description</FormLabel>;"
                  <div className="flex gap-2">;
<<<<<<< HEAD
                    <AIEnhancementButton
                      options={{

                        enhancementType: "work-description",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        content: field && field.value || "",
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                    <AIEnhancementButton;
                      options={{}
                        context: `${watchRoleTitle} at ${watchCompanyName}`
                      }}"
                      onEnhanced={(content) => form && form.setValue("description", content, { shouldDirty: true })}"
                      buttonText="Enhance with AI";
                    />;



                    <Button"
                      type="button""
                      variant="outline""
                      size="sm"
                      onClick={() => setIsEnhancementDialogOpen(true)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className="text-xs";

=======
                        content: field && field.value || "",

                    <AIEnhancementButton
                      options={{
                        context: `${watchRoleTitle} at ${watchCompanyName}`
                      }}
                      onEnhanced={(content) => form && form.setValue("description", content, { shouldDirty: true })}
                      buttonText="Enhance with AI";
                    />;
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className="text-xs";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </FormItem>)}
              />)}
          </div>;
          <FormField;
<<<<<<< HEAD
            control={form.control}"
            name="description";
            render={({ field }) => (
              <FormItem>;"
                <div className="flex justify - between items - center">;
                  <FormLabel > Description</FormLabel>;"
                  <div className="flex gap - 2">;
                    <AIEnhancementButton;
                      options={{"
                        enhancement_type: "work - description","
                        content: field.value || "",`
                        context: `${watchRoleTitle} at ${watchCompanyName}`;
                      }}"
                      on_enhanced={(content) => form.set_value ("description", content, { should_dirty: true })}"
                      button_text="Enhance with AI";
                    />;
                    <Button;"
                      type="button";"
                      variant="outline";"
                      size="sm";
                      on_click={() => setIsEnhancementDialogOpen (true)}"
                      className="text - xs";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    >;
=======
                        content: field && field.value || "",                    >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                        content: field && field.value || "",                    >;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
                  <Textarea;
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";
=======

                  <Textarea;
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

                  <Textarea;
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    className="min-h-[150px]";
=======
=======
                    className="min - h-[150px]";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
<<<<<<< HEAD
"
          <div className="flex justify-end gap-2">;"
            <Button type="button" variant="outline" onClick={onCancel}>;
              Cancel;
            </Button>;"
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;



=======

          />;

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
              ) : (;
                <>Save</>;
              )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </Button>;
          </div>;
        </form>;
      </Form>;
<<<<<<< HEAD
`
          context: `${watchRoleTitle} at ${watchCompanyName}`}}"
=======

        defaultOptions={{;
          enhancementType: "work-description",;
          content: form && form.getValues("description") || "",;
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        initialContent={form && form.getValues("description") || ""}
      />;
    </>;
  );
}

<<<<<<< HEAD


      <AIEnhancementDialog;"
=======
      <AIEnhancementDialog;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title="Enhance Work Experience Description";
        is_open={isEnhancementDialogOpen}
        on_close={() => setIsEnhancementDialogOpen (false)}
        on_apply={handleAIEnhancement}
<<<<<<< HEAD
        default_options={{"
          enhancement_type: "work - description","
          content: form.get_values ("description") || "",`
          context: `${watchRoleTitle} at ${watchCompanyName}`}}"
=======
        default_options={{
          enhancement_type: "work - description",
          content: form.get_values ("description") || "",
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        initial_content={form.get_values ("description") || ""}
      />;
    </>);
}

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
;


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;

;
      <AIEnhancementDialog;"
        title="Enhance Work Experience Description";
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{;"
          enhancementType:"work-description",;"
          content:form.getValues("description") || "",;`
          context:`${watchRoleTitle} at ${watchCompanyName}`}}"
        initialContent={form.getValues("description") || ""}
      />;
    </>;
  ),;}
 is current: z.boolean () .default (false);
description: z.string () .optional ();
location: z.string () .optional () 
});
type FormValues = z.infer<typeof formSchema>;
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {}
  await onSubmit (workExperience) 
};
setIsEnhancementDialogOpen (false);
};
}/> <FormField </FormControl> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) "
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> {}
  !watchIsCurrent && (<FormField control= {}
  form.control;
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/>) "
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {}
  ...field;
}/> </FormControl> <FormMessage /> </FormItem>) "
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) 
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) 
}
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
