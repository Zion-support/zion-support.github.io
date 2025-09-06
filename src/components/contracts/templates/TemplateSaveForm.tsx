<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react'
import { useForm, type ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'

import { ContractFormValues } from '@/components/contracts/components/ContractForm'
import { ContractTemplate } from '@/types/contracts'
import { useContractTemplates } from '@/hooks/useContractTemplates'
import { Button } from '@/components/ui/button'
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
const formSchema = z.object({
  title: z.string().min(1, 'Title is required')
  isDefault: z.boolean()
})
type FormValues = z.infer<typeof formSchema>
interface TemplateSaveFormProps {
  onCancel: () => void
  onComplete: () => void
  editTemplate?: ContractTemplate | null
  currentValues?: ContractFormValues
export function TemplateSaveForm({
  onCancel
  onComplete
  editTemplate
  currentValues
}: TemplateSaveFormProps) {
  const [saving, setSaving] = useState(false)
  const { createTemplate, updateTemplate } = useContractTemplates()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: editTemplate?.title |''
      isDefault: editTemplate?.is_default |false
    }
  })
  const onSubmit = async (values: FormValues) => {    if (!currentValues && !editTemplate) {
      return;
    }
    setSaving(true)
    try {
      if (editTemplate) {
        await updateTemplate.mutateAsync({
          templateId: editTemplate.id
          title: values.title
          templateData: editTemplate.template_data
          isDefault: values.isDefault
        })
      } else if (currentValues) {
        await createTemplate.mutateAsync({
          title: values.title
          templateData: currentValues
          isDefault: values.isDefault
        })
      }
      onComplete()
    } finally {
      setSaving(false)
    }
  }

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { useState } from "react",
import { useForm, type ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Loader2 } from 'lucide-react'
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { ContractTemplate } from "@/types/contracts",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Button } from "@/components/ui/button",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Switch } from "@/components/ui/switch",
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  isDefault: z.boolean()}),

type FormValues = z.infer<typeof formSchema>,

interface TemplateSaveFormProps {
  onCancel: () => void,
  onComplete: () => void,
  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues
import { useState } from "react",;
import { useForm, type ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
<<<<<<< HEAD
========
import { useState } from 'react';
import { useForm, type ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
import { Loader2 } from 'lucide-react';
import { ContractFormValues } from '@/components/contracts/components/ContractForm';
import { ContractTemplate } from '@/types/contracts';
import { useContractTemplates } from '@/hooks/useContractTemplates';
import { Button } from '@/components/ui/button';
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
const formSchema = z && z.object({;
  title: z && z.string().min(1, 'Title is required'),;
  isDefault: z && z.boolean(),;
});
type FormValues = z && z.infer<typeof formSchema>;
interface TemplateSaveFormProps {;
  onCancel: () => void;
  onComplete: () => void;
  editTemplate?: ContractTemplate | null;
  currentValues?: ContractFormValues;
export function TemplateSaveForm(): any ({;
  onCancel,;
  onComplete,;
  editTemplate,;
  currentValues,;
}: TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: editTemplate?.title || '',;
      isDefault: editTemplate?.is_default || false,;
    },;
  });
  const onSubmit = async (values: FormValues) => {    if (!currentValues && !editTemplate) {;
      return;
    }
    setSaving(true);
    try {;
      if (editTemplate) {;
        await updateTemplate && updateTemplate.mutateAsync({;
          templateId: editTemplate && editTemplate.id,;
          title: values && values.title,;
          templateData: editTemplate && editTemplate.template_data,;
          isDefault: values && values.isDefault,;
        });
      } else if (currentValues) {;
        await createTemplate && createTemplate.mutateAsync({;
          title: values && values.title,;
          templateData: currentValues,;
          isDefault: values && values.isDefault,;
        });
      }
      onComplete();
    } finally {;
      setSaving(false);
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
import { useState } from 'react';
import { use_form, type ControllerRenderProps } from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { ContractFormValues } from '@/components / contracts / components / ContractForm';
import { ContractTemplate } from '@/types / contracts';
import { useContractTemplates } from '@/hooks / useContractTemplates';
import { Button } from '@/components / ui / button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Switch } from '@/components / ui / switch';
const form_schema = z.object ({
  title: z.string ().min (1, 'Title is required'),
  is_default: z.boolean (),
});
type FormValues = z.infer < typeof form_schema>;
interface TemplateSaveFormProps {
  on_cancel: () => void;
  on_complete: () => void;
  edit_template?: ContractTemplate | null;
  current_values?: ContractFormValues;
export /**
 * TemplateSaveForm - Function description
 */
function TemplateSaveForm() {
  const [saving, set_saving] = useState (false);
  const { create_template, update_template } = useContractTemplates ();
  const form = use_form < FormValues>({
    resolver: zod_resolver (form_schema),
    default_values: {
      title: edit_template?.title || '',
      is_default: edit_template?.is_default || false,
    },
  });
  const on_submit = async (values: FormValues) => {    // Check condition
if ( {) {
  $2
}
      return;
    }
    set_saving (true);
    try {
      // Check condition
if ( {) {
  $2
}
        await update_template.mutate_async ({
          template_id: edit_template.id,
          title: values.title,
          template_data: edit_template.template_data,
          is_default: values.is_default,
        });
      } else // Check condition
if ( {) {
  $2
}
        await create_template.mutate_async ({
          title: values.title,
          template_data: current_values,
          is_default: values.is_default,
        });
      }
      on_complete ();
    } finally {
      set_saving (false);
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
    }
  }
  return (
    <Form {...form}>;
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}
          name='title';
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

          render={({
            field
          }: {

    }
  },
<<<<<<< HEAD

  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { Loader2 } from 'lucide-react';
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { ContractTemplate } from "@/types/contracts",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Button } from "@/components/ui/button",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
const formSchema = z.object({;
  title: z.string().min(1, "Title is required"),;
  isDefault: z.boolean()}),;
type FormValues = z.infer<typeof formSchema>,;
interface TemplateSaveFormProps {;
  onCancel: () => void,;
  onComplete: () => void,;
  editTemplate?: ContractTemplate | null,;
  currentValues?: ContractFormValues;
}
;
export function TemplateSaveForm({;
  onCancel,;
  onComplete,;
  editTemplate,;
  currentValues;
}: TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false),;
  const { createTemplate, updateTemplate } = useContractTemplates(),;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: editTemplate?.title || "",;
      isDefault: editTemplate?.is_default || false}}),;
  const onSubmit = async (values: FormValues) => {;
    if (!currentValues && !editTemplate) {;
      return;
    }
;
    setSaving(true),;
    try {;
      if (editTemplate) {;
        await updateTemplate.mutateAsync({;
          templateId: editTemplate.id,;
          title: values.title,;
          templateData: editTemplate.template_data,;
          isDefault: values.isDefault});
      } else if (currentValues) {;
        await createTemplate.mutateAsync({;
          title: values.title,;
          templateData: currentValues;
          isDefault: values.isDefault});
      }
;
      onComplete();
    } finally {;
      setSaving(false);
    }
  },
  
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          name='title'
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'title'>
          }) => (            <FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               <FormLabel>Template Name</FormLabel>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <FormLabel>Template Name</FormLabel>
>>>>>>>               <FormControl>
                <Input {...field} placeholder='Enter template name' />
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          name="title"
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter template name" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </FormControl>
              <FormMessage />
            </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          )}
        />
        <FormField
          control={form.control}
<<<<<<< HEAD
          name='is_default';

          render={({
            field
          }: {

========
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'title'>;
          }) => (            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
            field: ControllerRenderProps < FormValues, 'title'>;
          }) => (            <FormItem>;
              <FormLabel > Template Name</FormLabel>;
              <FormControl>;
                <Input {...field} placeholder='Enter template name' />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name='is_default';
          render={({
            field
          }: {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
            field: ControllerRenderProps<FormValues, 'isDefault'>;
          }) => (;
            <FormItem className='flex items-center justify-between'>;
              <FormLabel className='cursor-pointer'>;
                Set as default template;
              </FormLabel>;
              <FormControl>;
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

=======
          name='isDefault'
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'isDefault'>
          }) => (
            <FormItem className='flex items-center justify-between'>
              <FormLabel className='cursor-pointer'>
                Set as default template
              </FormLabel>
              <FormControl>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Switch
                  aria-label='Default template'
                  checked={field.value}
                  onCheckedChange={field.onChange}                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-2 justify-end'>
          <Button type='button' variant='outline' onClick={onCancel}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             Cancel
ursor/fix-website-loading-errors-and-merge-6662
========
                <Switch
                  aria-label='Default template'
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}                />;
=======

import { useState } from "react",;
import { useForm, type ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Loader2 } from 'lucide-react';
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { ContractTemplate } from "@/types/contracts",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Button } from "@/components/ui/button",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
;
const formSchema = z.object({;
  title:z.string().min(1, "Title is required"),;
  isDefault:z.boolean()}),;
;
type FormValues = z.infer<typeof formSchema>,;
;
interface TemplateSaveFormProps {;
  onCancel:() => void,;
  onComplete:() => void,;
  editTemplate?:ContractTemplate | null,;
  currentValues?:ContractFormValues;
}
;
export function TemplateSaveForm({;
  onCancel,;
  onComplete,;
  editTemplate,;
  currentValues;
} TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false),;
  const { createTemplate, updateTemplate } = useContractTemplates(),;
  ;
  const form = useForm<FormValues>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      title:editTemplate?.title || "",;
      isDefault:editTemplate?.is_default || false}}),;
  ;
  const onSubmit = async (values:FormValues) => {;
    if (!currentValues && !editTemplate) {;
      return;
    }
    ;
    setSaving(true),;
    ;
    try {;
      if (editTemplate) {;
        await updateTemplate.mutateAsync({;
          templateId:editTemplate.id,;
          title:values.title,;
          templateData:editTemplate.template_data,;
          isDefault:values.isDefault}),;
      } else if (currentValues) {;
        await createTemplate.mutateAsync({;
          title:values.title,;
          templateData:currentValues,;
          isDefault:values.isDefault}),;
      }
      ;
      onComplete(),;
    } finally {;
      setSaving(false),;
    }
  },;
  ;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
          name="title";
<<<<<<< HEAD
          render={({ field } { field:ControllerRenderProps<FormValues "title"> }) => (;
=======
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
              <FormControl>;
                <Input {...field} placeholder="Enter template name" />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
<<<<<<< HEAD
        ;
        <FormField;
          control={form.control}
          name="isDefault";
          render={({ field } { field:ControllerRenderProps<FormValues "isDefault"> }) => (;
=======
        <FormField;
          control={form.control}
          name="isDefault"
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => (
            <FormItem className="flex items-center justify-between">
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch
                  aria-label="Default template"
          name="isDefault";
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <FormItem className="flex items-center justify-between">;
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch;
                  aria-label="Default template";
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />
        
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Cancel
>>>>>>>           </Button>
          <Button type='submit' disabled={saving}>
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
            field: ControllerRenderProps < FormValues, 'is_default'>;
          }) => (
            <FormItem className='flex items - center justify - between'>;
              <FormLabel className='cursor - pointer'>;
                Set as default template;
              </FormLabel>;
              <FormControl>;
                <Switch;
                  aria - label='Default template';
                  checked={field.value}
                  onCheckedChange={field.on_change}                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <div className='flex gap - 2 justify - end'>;
          <Button type='button' variant='outline' on_click={on_cancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={saving}>;
            {saving ? (
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx

========
              <>;
                <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
                Saving...;
              </>) : (
              `${edit_template ? 'Update' : 'Save'} Template`)}
          </Button>;
        </div>;
      </form>;
    </Form>);
set_saving (true);
try {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
        />;
        <div className='flex gap-2 justify-end'>;
          <Button type='button' variant='outline' onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={saving}>;
            {saving ? (;
              <>;
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                Saving...;
              </>;
            ) : (;
              `${editTemplate ? 'Update' : 'Save'} Template`;
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              `${editTemplate ? 'Update' : 'Save'} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
setSaving (true)
try {
  if (editTemplate) {
  await updateTemplate.mutateAsync ({
  <FormItem> <FormLabel>Template Name</FormLabel> <FormControl> <Input {
  ...field "
}placeholder="Enter template name" />
}/> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> </FormItem>) "
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  editTemplate ? "Update" : "Save"
}Template`)
}</Button> </div> </form> </Form>)
}"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              `${editTemplate ? "Update" : "Save"} Template`

========
=======
        />;
        ;
        <div className="flex gap-2 justify-end">;
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={saving}>;
            {saving ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Saving...;
              </>;
            ) :(;
              `${editTemplate ? "Update" :"Save"} Template`;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  editTemplate ? "Update" : "Save" 
}Template`) ;
}</Button> </div> </form> </Form>) ;
}"};
              `${editTemplate ? "Update" : "Save"} Template`
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          </Button>;
        </div>;
      </form>;
    </Form>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
setSaving (true);
try {;
  if (editTemplate) {;
  await updateTemplate && updateTemplate.mutateAsync ({;
  <FormItem> <FormLabel>Template Name</FormLabel> <FormControl> <Input{
  ...field "
=======
  ),;}
 const formSchema = z.object ({;
  title: z.string () .min (1, "Title is required");
isDefault: z.boolean () ;
});
setSaving (true);
try {;
  if (editTemplate) {;
  await updateTemplate.mutateAsync ({;
  <FormItem> <FormLabel>Template Name</FormLabel> <FormControl> <Input {;
  ...field ";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}placeholder="Enter template name" /> ;
}/> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {";
  editTemplate ? "Update" : "Save" ;
}Template`) ;
}</Button> </div> </form> </Form>) ;
<<<<<<< HEAD
}"}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
  // Check condition
if ( {) {
  $2
}
  await update_template.mutate_async ({
  <FormItem> <FormLabel > Template Name</FormLabel> <FormControl> <Input {
  ...field ";
}placeholder="Enter template name" />;
}/> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : (`$ {";
  edit_template ? "Update" : "Save";
}Template`);
}</Button> </div> </form> </Form>);
}"}
<<<<<<<< HEAD:src/components/contracts/templates/TemplateSaveForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateSaveForm.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
