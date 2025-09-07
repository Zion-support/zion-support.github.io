<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  projectStartDate?: string;
  projectEndDate?: string;  onSubmit;
  isSubmitting;
  onCancel;

>>>>>>> merged-prs-20250907-203621
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form,
import { Input } from @/components/ui/input',
import { Textarea } from '@/components/ui/textarea,
  Popover,
  PopoverContent,
  PopoverTrigger} from @/components/ui/popover',
import { AIMilestoneGenerator } from './AIMilestoneGenerator,
import { GeneratedMilestone } from @/hooks/useMilestoneGenerator',
const formSchema = z.object({
  title: z.string().min(1, 'Title is required),,
  description: z.string().optional(),
  due_date: z.date().optional(),
  amount: z.coerce.number().min(0, Amount must be greater than or equal to 0')}),
type MilestoneFormValues = z.infer<typeof formSchema>,
interface AddMilestoneFormProps {
  onSubmit: (data: MilestoneFormValues) => void,
  isSubmitting: boolean,
  onCancel?: () => void,
  projectScope?: string,
  projectStartDate?: string,
  projectEndDate?: string,
  projectType?: string;
}
export function AddMilestoneForm({
  onSubmit,
  isSubmitting,
  onCancel,
  projectScope = ',
  projectStartDate = ',
  projectEndDate = null,
  projectType = 'Other;
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ',,
  description: ',
      amount: 0}}),  return (
    <div className="space-y-6>;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
import React from react';
import { useForm } from 'react-hook-form;
import { zodResolver } from @hookform/resolvers/zod';
import { z } from 'zod;
import { CalendarIcon, Loader2 } from lucide-react';
import { format } from 'date-fns;
import { Button } from @/components/ui/button';
import { Calendar } from '@/components/ui/calendar;
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from @/components/ui/form',
import { Input } from '@/components/ui/input;
import { Textarea } from @/components/ui/textarea';
  Popover,
  PopoverContent,
  PopoverTrigger} from '@/components/ui/popover,
import { AIMilestoneGenerator } from ./AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator;
  title: z.string().min($2);
  description: z.string().optional($2);
  due_date: z.date().optional($2);
  amount: z.coerce.number().min(0, Amount must be greater than or equal to 0')}),

type MilestoneFormValues = $2;
interface AddMilestoneFormProps {
  onSubmit: (data: MilestoneFormValues) => void,
  isSubmitting: boolean,
  onCancel?: () => void,
  projectScope?: string,
  projectStartDate?: string,
  projectEndDate?: string,
  projectType?: string
}
export function AddMilestoneForm({
  onSubmit,
  isSubmitting,
  onCancel,
  projectScope = $2;
  projectStartDate = $2;
  projectEndDate = $2;
  projectType = 'Other
}: AddMilestoneFormProps) {
    resolver: zodResolver($2);
    defaultValues: {
      title: ',
      description: ',
      amount: 0}}),
=======
export function AddMilestoneForm({;

export function AddMilestoneForm(): any ({;
  projectType?: string
}
export function AddMilestoneForm({
<<<<<<< HEAD

export function AddMilestoneForm({;

  onSubmit;

  isSubmitting;
  onCancel;'
  projectScope = '';'
  projectStartDate = '';
  projectEndDate = null;

      });
      return

import React from 'react',;

=======
=======
import {use_form} from 'react - hook - form';
import {zod_resolver} from '@hookform / resolvers / zod';

const formSchema = z && z.object({;
  title: z && z.string().min(1, 'Title is required');
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});
type MilestoneFormValues = z && z.infer<typeof formSchema>;
interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues) => void,;
  isSubmitting: boolean,;

<<<<<<< HEAD
import React from 'react';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {CalendarIcon, Loader2} from 'lucide-react';
import {format} from 'date-fns';
import {Button} from '@/components/ui/button';
import {Calendar} from '@/components/ui/calendar';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {AIMilestoneGenerator} from './AIMilestoneGenerator';
import {GeneratedMilestone} from '@/hooks/useMilestoneGenerator';
const formSchema = z.object({
  title: z.string().min(1, 'Title is required');
  description: z.string().optional()
  due_date: z.date().optional()
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});
type MilestoneFormValues = z.infer<typeof formSchema>;
interface AddMilestoneFormProps {
  onSubmit: (data: MilestoneFormValues) => void
  isSubmitting: boolean
=======
import {use_form} from 'react - hook - form';
import {zod_resolver} from '@hookform / resolvers / zod';

import {z} from 'zod';
import {CalendarIcon, Loader2} from 'lucide-react';
import {format} from 'date - fns';
import {Button} from '@/components / ui / button';
import {Calendar} from '@/components / ui / calendar';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {Input} from '@/components / ui / input';
import {Textarea} from '@/components / ui / textarea';
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';
import {AIMilestoneGenerator} from './AIMilestoneGenerator';

const formSchema = z && z.object({;
  title: z && z.string().min(1, 'Title is required');
  description: z && z.string().optional(),;
  due_date: z && z.date().optional(),;
  amount: z && z.coerce.number().min(0, 'Amount must be greater than or equal to 0')});

type MilestoneFormValues = z && z.infer<typeof formSchema>;

interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues) => void,;
  isSubmitting: boolean,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onCancel?: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function AddMilestoneForm({;
=======
  projectType?: string;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function AddMilestoneForm(): any ({;
  projectType?: string
}
export function AddMilestoneForm({

export function AddMilestoneForm({;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onSubmit;

  isSubmitting;
  onCancel;'
  projectScope = '';'
  projectStartDate = '';
  projectEndDate = null;
<<<<<<< HEAD
=======

<<<<<<< HEAD
      });
      return

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      });
      return


<<<<<<< HEAD
  projectType = 'Other'
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: ''
      description: ''
      amount: 0}})
  const handleSubmit = (values: MilestoneFormValues) => {
    onSubmit(values)
    form.reset()
  }
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
    // If there's only one milestone, submit it directly
    if (milestones.length === 1) {
      const milestone = milestones[0];
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      });
      return
    }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react',;
import { format } from 'date-fns',;
import { Button } from '@/components/ui/button',;

import { Calendar } from '@/components/ui/calendar',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;'
  FormMessage} from '@/components/ui/form',;'
import { Input } from '@/components/ui/input',;'
import { Textarea } from '@/components/ui/textarea',;
import {;
  Popover,;
  PopoverContent,;'
  PopoverTrigger} from '@/components/ui/popover',;'
import { AIMilestoneGenerator } from './AIMilestoneGenerator',;'
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',;

  description: z.string().optional(),;
  due_date: z.date().optional(),;'
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),;
type MilestoneFormValues = z.infer<typeof formSchema>,;
interface AddMilestoneFormProps {;
  onSubmit: (data: MilestoneFormValues) => void,;
  isSubmitting: boolean,;
  onCancel?: () => void,;
  projectScope?: string,;
  projectStartDate?: string,;
  projectEndDate?: string,;
  projectType?: string;
}
;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
export function AddMilestoneForm({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope = '',;
  projectStartDate = '',;
  projectEndDate = null,;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  projectType = 'Other';
}: AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      title: '',;
      description: '',;
      amount: 0}}),;
<<<<<<< HEAD
  const handleSubmit = (values: MilestoneFormValues) => {;
    onSubmit(values),;
    form.reset();
  },;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones.length === 1) {;
      const milestone = milestones[0],;
      onSubmit({;
        title: milestone.title,;
        description: milestone.description,;
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,;
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      }),;
      return;
    }

    // If there are multiple milestones, submit them one by one
    milestones.forEach(milestone => {
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      })
    })
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    form && form.reset();
  };
>>>>>>> origin/chore/fix-lint-and-merge

  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones && milestones.length === 1) {;
      const milestone = milestones[0];
      onSubmit({;
        title: milestone && milestone.title,;
        description: milestone && milestone.description,;
        due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
        amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;

    form.reset();
  },;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones.length === 1) {;
      const milestone = milestones[0],;
      onSubmit({;
        title: milestone.title,;
        description: milestone.description,;
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,;
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      }),;
      return;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

<<<<<<< HEAD
  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
    // If theres only one milestone, submit it directly
    if (milestones.length = $2;
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      }),
      return
=======
>>>>>>> origin/chore/fix-lint-and-merge
    }

  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleAddMilestone = (milestone: GeneratedMilestone) => {
    onSubmit({
      title: milestone.title
      description: milestone.description
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount

    })

<<<<<<< HEAD
=======
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // If there are multiple milestones, submit them one by one;
    milestones && milestones.forEach(milestone => {;
      onSubmit({;
        title: milestone && milestone.title,;
        description: milestone && milestone.description,;
        due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
        amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      });
    });
  };
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleAddMilestone = (milestone: GeneratedMilestone) => {;
    onSubmit({;
      title: milestone && milestone.title,;
      description: milestone && milestone.description,;
      due_date: milestone && milestone.dueDate ? new Date(milestone && milestone.dueDate) : undefined,;
      amount: milestone && milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    });
  };

<<<<<<< HEAD
  },

  return (
<<<<<<< HEAD
    <div className=space-y-6">
=======

    <div className="space-y-6">;
>>>>>>> origin/chore/fix-lint-and-merge
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator

          scope={projectScope}

=======
  },

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
<<<<<<< HEAD
    <div className=space-y-6">
=======

    <div className="space-y-6">;
>>>>>>> origin/chore/fix-lint-and-merge
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
<<<<<<< HEAD
        <AIMilestoneGenerator

import React from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { CalendarIcon, Loader2 } from 'lucide-react',;
import { format } from 'date-fns',;
;
import { Button } from '@/components/ui/button',;
import { Calendar } from '@/components/ui/calendar',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger} from '@/components/ui/popover',;
import { AIMilestoneGenerator } from './AIMilestoneGenerator',;
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',;
;
const formSchema = z.object({;
  title:z.string().min(1, 'Title is required'),;
  description:z.string().optional(),;
  due_date:z.date().optional(),;
  amount:z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),;
;
type MilestoneFormValues = z.infer<typeof formSchema>,;
;
interface AddMilestoneFormProps {;
  onSubmit:(data:MilestoneFormValues) => void,;
  isSubmitting:boolean,;
  onCancel?:() => void,;
  projectScope?:string,;
  projectStartDate?:string,;
  projectEndDate?:string,;
  projectType?:string;
}
;
export function AddMilestoneForm({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope = '',;
  projectStartDate = '',;
  projectEndDate = null,;
  projectType = 'Other';
} AddMilestoneFormProps) {;
  const form = useForm<MilestoneFormValues>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      title:'',;
      description:'',;
      amount:0}}),;
;
  const handleSubmit = (values:MilestoneFormValues) => {;
    onSubmit(values),;
    form.reset();
  },;
;
  const handleAddMilestones = (milestones:GeneratedMilestone[]) => {;
    // If there's only one milestone, submit it directly;
    if (milestones.length === 1) {;
      const milestone = milestones[0],;
      onSubmit({;
        title:milestone.title,;
        description:milestone.description,;
        due_date:milestone.dueDate ? new Date(milestone.dueDate) :undefined,;
        amount:milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      }),;
      return,;
    }
;
    // If there are multiple milestones, submit them one by one;
    milestones.forEach(milestone => {;
      onSubmit({;
        title:milestone.title,;
        description:milestone.description,;
        due_date:milestone.dueDate ? new Date(milestone.dueDate) :undefined,;
        amount:milestone.estimatedHours * 10, // Convert hours to a default payment amount;
      }),;
    }),;
  },;
;
  const handleAddMilestone = (milestone:GeneratedMilestone) => {;
    onSubmit({;
      title:milestone.title,;
      description:milestone.description,;
      due_date:milestone.dueDate ? new Date(milestone.dueDate) :undefined,;
      amount:milestone.estimatedHours * 10, // Convert hours to a default payment amount;
    }),;
  },;
;
  return (;
    <div className="space-y-6">;
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
        <AIMilestoneGenerator;
  }
  },

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <AIMilestoneGenerator
<<<<<<< HEAD
          scope={projectScope}
=======

          scope={projectScope}

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          onAddMilestone={handleAddMilestone}
        />
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          onAddMilestone={handleAddMilestone}      <Form {...form}>

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
import {GeneratedMilestone} from '@/hooks / useMilestoneGenerator';'
=======
          onAddMilestone={handleAddMilestone}
<<<<<<< HEAD
=======
        />;
      )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
<<<<<<< HEAD

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;
=======
=======

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <FormField
            control={form && form.control}
            name="title"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {GeneratedMilestone} from '@/hooks / useMilestoneGenerator';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const form_schema = z.object ({

type MilestoneFormValues = z.infer < typeof form_schema>;
interface AddMilestoneFormProps {
  }
  "on_submit": ("data": MilestoneFormValues) => void,
  "is_submitting": boolean,
=======

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">

      <Form {...form}>

  description: z.string ().optional (),
  due_date: z.date ().optional (),'
  amount: z.coerce.number ().min (0, 'Amount must be greater than or equal to 0')});
;
type MilestoneFormValues = z.infer < typeof form_schema>;
;

  on_submit: (data: MilestoneFormValues) => void,
  is_submitting: boolean,
>>>>>>> origin/chore/fix-lint-and-merge
  on_cancel?: () => void;
  project_scope?: string;
  projectStartDate?: string;
  projectEndDate?: string;}
  project_type?: string;}
}
export /**;
 * AddMilestoneForm - Function description;
 */
<<<<<<< HEAD
function AddMilestoneForm() {
  }
  const form = use_form < MilestoneFormValues>({

    // Check condition
=======
function AddMilestoneForm() {}
  const form = use_form < MilestoneFormValues>({}
    resolver: zod_resolver (form_schema),
    default_values: {'
      title: '','
      description: '',
      amount: 0}}),
  const handle_submit = (values: MilestoneFormValues) =>: any {}
    on_submit (values),
    form.reset ();
  }
;
  const handleAddMilestones = (milestones: GeneratedMilestone[]) =>: any {'
    // If there's only one milestone, submit it directly;
    // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/chore/fix-lint-and-merge
}
      const milestone = milestones[0];
      on_submit ({}
        title: milestone.title,
        description: milestone.description,
 * AddMilestoneForm - Function description;
 */
function AddMilestoneForm() {
  const form = use_form < MilestoneFormValues>({)
    resolver: zod_resolver (form_schema),

    default_values: {,"
  title: ,
      description: ,
      amount: 0}}),
  const handle_submit = (values: MilestoneFormValues) =>: any {
  // TODO: Implement
}
    on_submit (values),
    form.reset ();
  const handleAddMilestones = (milestones: GeneratedMilestone[]) =>: any {
  // TODO: Implement
    // If there's only one milestone, submit it directly;
    // Check condition;
if ( {) {
  $2;
      const milestone = milestones[0];
      on_submit ({
        title: milestone.title,
        description: milestone.description,)
pr-12325

}
      const milestone = milestones[0];
      on_submit ({
        title: milestone.title,

        description: milestone.description,)
        due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
        amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;

      });
      return;
    }
    // If there are multiple milestones, submit them one by one;
    milestones.for_each (milestone => {}
      on_submit ({}
        title: milestone.title,
        description: milestone.description,

        description: milestone.description,)
        due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
        amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;

      });
    });
  }
<<<<<<< HEAD

=======
;
  const handleAddMilestone = (milestone: GeneratedMilestone) =>: any {}
    on_submit ({}
      title: milestone.title,
      description: milestone.description,
  // TODO: Implement
}
>>>>>>> origin/chore/fix-lint-and-merge
    on_submit ({
      title: milestone.title,

      description: milestone.description,)
      due_date: milestone.due_date ? new Date (milestone.due_date) : undefined,
      amount: milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });
  }
<<<<<<< HEAD
=======
;
>>>>>>> origin/chore/fix-lint-and-merge

      {/* AI Milestone Generator */}
      {project_scope && projectStartDate && (
        <AIMilestoneGenerator;
    // If there are multiple milestones, submit them one by one;
    milestones.for_each (milestone => {
  const handleAddMilestone = (milestone: GeneratedMilestone) =>: any {
  // TODO: Implement
  return (
    <div className="space - y-6">;"
pr-12325
  return ('
    <div className="space - y-6">;"
</div>
        <AIMilestoneGenerator;

          scope={project_scope}
          start_date={projectStartDate}
          end_date={projectEndDate}
          project_type={project_type}
          onAddMilestones={handleAddMilestones}
<<<<<<< HEAD
          onAddMilestone={handleAddMilestone} />)}
      <Form {...form}>;

=======
          onAddMilestone={handleAddMilestone}
        />)}

          <FormField;
            control={form.control}"
            name="title";
            render={({ field }) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <FormControl>;"
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;

<<<<<<< HEAD
=======
=======
              <FormItem>;
                <FormLabel > Title</FormLabel>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <FormControl>;
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;
<<<<<<< HEAD
          />;
          <FormField
            control={form && form.control}
            name="description"
;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
          <FormField;
            control={form.control}
            name="title";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
                <FormControl>;
                  <Input placeholder="Milestone title" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;            )}
          />;
;
          <FormField;
            control={form.control}
            name="description";
=======

          />;


          <FormField
            control={form && form.control}
            name="description"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Description (optional)</FormLabel>;
                <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min-h-[100px]";
=======
                  <Textarea
                    placeholder="Describe what needs to be delivered"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    className="min-h-[100px]"
              </FormItem>)}
          />;
          <FormField;

            name="description";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Description (optional)</FormLabel>;
                <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                  <Textarea;
                    placeholder="Describe what needs to be delivered";
                    className="min - h-[100px]";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <FormField
              control={form && form.control}
              name="due_date"
              </FormItem>;
            )}
          />;
;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="due_date";
=======

<<<<<<< HEAD
=======
          />;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

            <FormField
              control={form && form.control}
              name="due_date"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              render={({ field }) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <FormItem className="flex flex-col">;
>>>>>>> origin/chore/fix-lint-and-merge
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                        <Button;
                          variant="outline";
                          className="w-full pl-3 text-left font-normal";
                        >;
                          {field.value ? (;
                            format(field.value, "PPP");
                          ) :(;
=======
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal">;
                          {field && field.value ? (;
                            format(field && field.value, "PPP");
                          ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            <span className="text-muted-foreground">;
                              Pick a date;
                            </span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
            />;
            <FormField
              control={form && form.control}
              name="amount"
                      <Calendar;
                        mode="single";
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus;
=======
                      <Calendar
                        mode="single"
                        selected={field && field.value}
                        onSelect={field && field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus;
=======
              </FormItem>)}
          />;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="due_date";
              render={({ field }) => (
                <FormItem className="flex flex - col">;
                  <FormLabel > Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger as_child>;
                      <FormControl>;
                        <Button;
                          variant="outline";
                          className="w - full pl - 3 text - left font - normal";
                        >;
                          {field.value ? (
                            format (field.value, "PPP")) : (
                            <span className="text - muted - foreground">;
                              Pick a date;
                            </span>)}
                          <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w - auto p - 0" align="start">;
                      <Calendar;
                        mode="single";
                        selected={field.value}
                        on_select={field.on_change}
                        disabled={(date) => date < new Date ()}
                        initial_focus;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
<<<<<<< HEAD
                </FormItem>;              )}
            />;
;
            <FormField;
              control={form.control}
              name="amount";
=======

            />;


            <FormField
              control={form && form.control}
              name="amount"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD

                    <Input;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

                    <Input;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
                    <Input
                      type="number"
                      min="0"
                      step="0 && 0.01"
                      placeholder="0 && 0.00"
=======
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="amount";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Amount ($)</FormLabel>;
                  <FormControl>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Input;
                      type="number";
                      min="0";
                      step="0.01";
                      placeholder="0.00";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {...field}
                    />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </FormControl>;
                  <FormMessage />;
<<<<<<< HEAD
        />
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
>>>>>>> merged-prs-20250907-203621
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Milestone title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
<<<<<<< HEAD
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="due_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className="text-muted-foreground">
                              Pick a date
                            </span>
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
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
=======
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe what needs to be delivered"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="due_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full pl-3 text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className="text-muted-foreground">
                              Pick a date
                            </span>
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
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            {onCancel && (
=======

            />;
          </div>;

<<<<<<< HEAD
              )}
=======
          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
<<<<<<< HEAD
                </FormItem>;
              )}
            />;
          </div>;
;
          <div className="flex justify-end space-x-2 pt-4">;
            {onCancel && (;
              <Button;
                type="button";
                variant="outline";
                onClick={onCancel}
                disabled={isSubmitting}
              >;
=======
                disabled={isSubmitting}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;
<<<<<<< HEAD
=======
              ) : (;
                "Add Milestone";
              )}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </FormItem>)}
            />;
          </div>;

=======
                      type="number";
                      min="0";
                      step="0.01";

                      placeholder="0.00";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

            {on_cancel && (
              <Button;"
                type="button";"
                variant="outline";
>>>>>>> origin/chore/fix-lint-and-merge
                on_click={on_cancel}
                disabled={is_submitting}
              >;
                Cancel;
<<<<<<< HEAD
              </Button>)}

                  Saving...;
                </>) : (
<<<<<<< HEAD
                "Add Milestone)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button type=submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin />
                  Saving...
                </>
              ) : (
                Add Milestone"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
=======
              </Button>)}"
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? (
<<<<<<< HEAD

=======
=======
                "Add Milestone")}
<<<<<<< HEAD
              ) :(;
                "Add Milestone";
              )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </Button>;
          </div>;
        </form>;
      </Form>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
    </div>;
  ),;}
 type MilestoneFormValues = z.infer<typeof formSchema>;
const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
  //If there's only one milestone, submit it directly if (milestones.length === 1) {
  <AIMilestoneGenerator scope= {
  projectScope 
}startDate= {
  projectStartDate 
}endDate= {
  projectEndDate 
}projectType= {
  projectType 
}onAddMilestones= {
  handleAddMilestones 
}onAddMilestone= {
  handleAddMilestone 
}/>) 
}</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Description (optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Due Date (optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button variant="outline" className="w-full pl-3 text-left font-normal" >) : (<span className="text-muted-foreground" > Pick a date </span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Amount ($) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <Button type="button" variant="outline" onClick= {
  onCancel 
}disabled= {
  isSubmitting 
}> Cancel </Button>) 
}<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : ("Add Milestone") 
}</Button> </div> </form> </Form> </div>) 
}
>>>>>>> merged-prs-20250907-203621
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Add Milestone"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
=======

    </div>);
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
