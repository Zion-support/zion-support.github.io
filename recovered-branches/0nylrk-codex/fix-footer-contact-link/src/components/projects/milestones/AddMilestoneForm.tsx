<<<<<<< HEAD
import {use_form} from 'react - hook - form';'
import {zod_resolver} from '@hookform / resolvers / zod';'
import {z} from 'zod';'
import {CalendarIcon, Loader2} from 'lucide-react';'
import {format} from 'date - fns';'
import {Button} from '@/components / ui / button';'
import {Calendar} from '@/components / ui / calendar';'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';'
import {Input} from '@/components / ui / input';'
import {Textarea} from '@/components / ui / textarea';'
import {Popover, PopoverContent, PopoverTrigger} from '@/components / ui / popover';'
import {AIMilestoneGenerator} from './AIMilestoneGenerator';  projectScope?: string;'
  projectStartDate?: string;
  projectEndDate?: string;  onSubmit;
  isSubmitting;
  onCancel;
  projectScope = '';'
  projectStartDate = '';'
  projectEndDate = null;
      });
return;
import { useForm } from 'react-hook-form';'
import { zodResolver } from '@hookform/resolvers/zod',;'
import { z } from 'zod',;'
import { CalendarIcon, Loader2 } from 'lucide-react',;'
import { format } from 'date-fns',;'
import { Button } from '@/components/ui/button',;'
import { Calendar } from '@/components/ui/calendar',;'
import {;
  }
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;'
import { Input } from '@/components/ui/input',;'
import { Textarea } from '@/components/ui/textarea',;'
import {;
  }
  Popover,;
  PopoverContent,;
  PopoverTrigger} from '@/components/ui/popover',;'
import { AIMilestoneGenerator } from './AIMilestoneGenerator',;'
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator',;'
const formSchema = z.object({;
  }
  "title": z.string().min(1, 'Title is required'),,'
  "description": z.string().optional(),;
  "due_date": z.date().optional(),;
  "amount": z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),;'
type MilestoneFormValues = z.infer<typeof formSchema>,;
interface AddMilestoneFormProps {;
  }
  "onSubmit": ("data": MilestoneFormValues) => void,;
  "isSubmitting": boolean,;
  onCancel?: () => void,;
  projectScope?: string,;
  projectStartDate?: string,;
  projectEndDate?: string,;
  projectType?: string;
}
;
export function AddMilestoneForm() {;
  }
  const form = useForm<MilestoneFormValues>({;
    }
    "resolver": zodResolver(formSchema),;
    "defaultValues": {;
      }
      "title": '',,'
  "description": '',;'
      "amount": 0}),;  return (
    <div className="space-y-6">;"
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  projectStartDate?: string;
  projectEndDate?: string;  onSubmit;
  isSubmitting;
  onCancel;

>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form',
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger} from '@/components/ui/popover',
import { AIMilestoneGenerator } from './AIMilestoneGenerator';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
const formSchema = z.object({
  title: z.string().min($2);
  description: z.string().optional($2);
  due_date: z.date().optional($2);
  amount: z.coerce.number().min(0, 'Amount must be greater than or equal to 0')}),

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
<<<<<<< HEAD
=======
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
>>>>>>> origin/resolved-merge-conflicts
  projectType = 'Other'
}: AddMilestoneFormProps) {
  const form = useForm<MilestoneFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      title: '',
      description: '',
      amount: 0}),

  const handleSubmit = (values: MilestoneFormValues) => {
    onSubmit($2);
    form.reset()
  },

  const handleAddMilestones = (milestones: GeneratedMilestone[]) => {
    // If there's only one milestone, submit it directly
<<<<<<< HEAD
=======
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
>>>>>>> origin/resolved-merge-conflicts
    if (milestones.length = $2;
      onSubmit({
        title: milestone.title
        description: milestone.description
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      }),
      return
    }

<<<<<<< HEAD
    // If there are multiple milestones, submit them one by one
    milestones.forEach(milestone = $2;
        description: milestone.description,
        due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
        amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
      })
    })
=======
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
>>>>>>> origin/resolved-merge-conflicts
  },

  const handleAddMilestone = $2;
      description: milestone.description,
      due_date: milestone.dueDate ? new Date(milestone.dueDate) : undefined,
      amount: milestone.estimatedHours * 10, // Convert hours to a default payment amount
    })
  },

  return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (
        <AIMilestoneGenerator
<<<<<<< HEAD
}
scope={projectScope}
=======
<<<<<<< HEAD
          scope={projectScope}
=======

          scope={projectScope}

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          startDate={projectStartDate}
          endDate={projectEndDate}
          projectType={projectType}
          onAddMilestones={handleAddMilestones}
<<<<<<< HEAD
=======
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
>>>>>>> origin/resolved-merge-conflicts
          onAddMilestone={handleAddMilestone}      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">"
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(handleSubmit)} className="space-y-4">;"
          <FormField,
control={form && form.control}
            name="title""
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Title</FormLabel>;
import {GeneratedMilestone} from '@/hooks / useMilestoneGenerator';'
const form_schema = z.object ({
  }
  "title": z.string ().min (1, 'Title is required'),'
  "description": z.string ().optional (),
  "due_date": z.date ().optional (),
  "amount": z.coerce.number ().min (0, 'Amount must be greater than or equal to 0')});'
;
type MilestoneFormValues = z.infer < typeof form_schema>;
;
interface AddMilestoneFormProps {
  }
  "on_submit": ("data": MilestoneFormValues) => void,
  "is_submitting": boolean,
  on_cancel?: () => void;
  project_scope?: string;
  projectStartDate?: string;
  projectEndDate?: string;
  project_type?: string;
}
export /**
 * AddMilestoneForm - Function description
 */
function AddMilestoneForm() {
  }
  const form = use_form < MilestoneFormValues>({
    }
    "resolver": zod_resolver (form_schema),
    "default_values": {
      }
      "title": '','
      "description": '','
      "amount": 0}),
  const handle_submit = ("values": MilestoneFormValues) =>: any {
    }
    on_submit (values),
    form.reset ();
  }
;
  const handleAddMilestones = ("milestones": GeneratedMilestone[]) =>: any {
    // If there's only one milestone, submit it directly;'
    // Check condition
}
if ( {) {
  $2
}
      const milestone = milestones[0];
      on_submit ({
        }
        "title": milestone.title,
        "description": milestone.description,
        "due_date": milestone.due_date ? new Date (milestone.due_date) : undefined,
        "amount": milestone.estimated_hours * 10, // Convert hours to a default payment amount;
      });
      return;
    }
    // If there are multiple milestones, submit them one by one;
    milestones.for_each ((milestone) => {
      }
      on_submit ({
        }
        "title": milestone.title,
        "description": milestone.description,
        "due_date": milestone.due_date ? new Date (milestone.due_date) : undefined,
        "amount": milestone.estimated_hours * 10, // Convert hours to a default payment amount;
      });
    });
  }
;
  const handleAddMilestone = ("milestone": GeneratedMilestone) =>: any {
    }
    on_submit ({
      }
      "title": milestone.title,
      "description": milestone.description,
      "due_date": milestone.due_date ? new Date (milestone.due_date) : undefined,
      "amount": milestone.estimated_hours * 10, // Convert hours to a default payment amount;
    });
  }
;
return (;
    <div className="space-y-6">;"
      {/* AI Milestone Generator */}
      {project_scope && projectStartDate && (
        <AIMilestoneGenerator;
          }
          scope={project_scope}
          start_date={projectStartDate}
          end_date={projectEndDate}
          project_type={project_type}
          onAddMilestones={handleAddMilestones}
          onAddMilestone={handleAddMilestone} />)}
      <Form {...form}>;
<<<<<<< HEAD
        <form on_submit={form.handle_submit (handle_submit)} className="space-y-4">;"
          <FormField;
            control={form.control}
            name="title";"
=======

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
>>>>>>> origin/resolved-merge-conflicts
            render={({ field }) => (
                <FormControl>;
<<<<<<< HEAD
                  <Input placeholder="Milestone title" {...field} />;"
                </FormControl>;
                <FormMessage />;              render={({ field }) => (;
                <FormItem className="flex flex-col">;"
=======
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
>>>>>>> origin/resolved-merge-conflicts
                  <FormLabel>Due Date (optional)</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
                            <span className="text-muted-foreground">;"
                              Pick a date;
                            </span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Amount ($)</FormLabel>;
                  <FormControl>;
                    <Input;
<<<<<<< HEAD
                      type="number";"
                      min="0";"
                      step="0.01";"
                      placeholder="0.00";"
                      {...field} />;
=======
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
>>>>>>> origin/resolved-merge-conflicts
                  </FormControl>;
                  <FormMessage />;

            />;
          </div>;
          <div className="flex justify-end space-x-2 pt-4">;"
            {onCancel && (;                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;"
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
                  }
                  Saving...;
                </>;
              ) : (;
                "Add Milestone";"
              )}
                </FormItem>)}
            />;
          </div>;
          <div className="flex justify - end space - x-2 pt-4">;"
            {on_cancel && (
              <Button;
                }
                type="button";"
                variant="outline";"
                on_click={on_cancel}
                disabled={is_submitting}
              >;
                Cancel;
              </Button>)}
            <Button type="submit" disabled={is_submitting}>;"
              {is_submitting ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;"
                  }
                  Saving...;
                </>) : (
<<<<<<< HEAD
                "Add Milestone")}
=======
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
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
=======

    </div>);
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
