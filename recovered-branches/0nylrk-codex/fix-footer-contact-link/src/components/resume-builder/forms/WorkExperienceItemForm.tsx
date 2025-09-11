

import { useState  } from 'react';
=======
=======

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
import { useState } from 'react',
import { useState } from 'react',
=======
=======

=======
import { useState } from 'react',
=======import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton";
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog";
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define form schema

const formSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  role_title: z.string().min(1, "Role title is required"),
  start_date: z.date({
type FormValues = z.infer<typeof formSchema>,

interface WorkExperienceItemFormProps {
  initialData?: WorkExperience,
  onSubmit: (data: WorkExperience) => Promise<void>,
export function WorkExperienceItemForm({;
  initialData;
  onSubmit;
export function WorkExperienceItemForm({
  initialData,
  onSubmit,
=======
  onCancel: () => void
}


  onCancel}: WorkExperienceItemFormProps) {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),

  onCancel: () => void
}



  onCancel}: WorkExperienceItemFormProps) {

  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
=======  const handleFormSubmit = async (values: FormValues) => {
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
=======import { useState } from 'react',;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Set up form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      company_name: initialData?.company_name || "",;
      role_title: initialData?.role_title || "",;
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
=======      start_date: initialData?.start_date ? new Date(initialData && initialData.start_date) : new Date(),;
      end_date: initialData?.end_date ? new Date(initialData && initialData.end_date) : undefined,;
      is_current: initialData?.is_current || false,;
      description: initialData?.description || "",;
      location: initialData?.location || ""}}),;

  const { isSubmitting } = form && form.formState;
  const watchIsCurrent = form && form.watch("is_current");
  const watchRoleTitle = form && form.watch("role_title");
  const watchCompanyName = form && form.watch("company_name");

  const handleAIEnhancement = (content: string) => {;
    form && form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);
  };
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
              name="location"              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;
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


