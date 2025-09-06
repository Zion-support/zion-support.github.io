<<<<<<< HEAD
<<<<<<< HEAD
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
=======
import { useState } from 'react';
import { useForm, type ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
    }
  }
  return (
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}
          name='title';
  
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
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          name='title'
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'title'>
          }) => (            <FormItem>
<<<<<<< HEAD

=======
          name="title"
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (
            <FormItem>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter template name" />
              </FormControl>
              <FormMessage />
            </FormItem>
<<<<<<< HEAD
          )}
        />
        <FormField
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}                />;

=======
          control={form.control}
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'title'>;
          }) => (            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
            field: ControllerRenderProps < FormValues, 'title'>;
          }) => (            <FormItem>;
              <FormLabel > Template Name</FormLabel>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <FormControl>;
                <Input {...field} placeholder='Enter template name' />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name='is_default';
<<<<<<< HEAD
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'isDefault'>;
          }) => (;
            <FormItem className='flex items-center justify-between'>;
              <FormLabel className='cursor-pointer'>;
                Set as default template;
              </FormLabel>;
              <FormControl>;
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Switch
                  aria-label='Default template'
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}                />;
<<<<<<< HEAD

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  };
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
          name="title";
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (;
            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
              <FormControl>;
                <Input {...field} placeholder="Enter template name" />;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD
        />;
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
            <FormItem className="flex items-center justify-between">;
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch;
                  aria-label="Default template";
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />;
<<<<<<< HEAD

=======
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />
        
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          <Button type='submit' disabled={saving}>
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
            Cancel
=======


            Cancel
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
<<<<<<< HEAD
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
  editTemplate ? "Update" : "Save"
}Template`)
}</Button> </div> </form> </Form>)
}"}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  editTemplate ? "Update" : "Save" 
}Template`) ;
}</Button> </div> </form> </Form>) ;
}"};

<<<<<<< HEAD
=======
              `${editTemplate ? "Update" : "Save"} Template`
            )}
          </Button>;
        </div>;
      </form>;
<<<<<<< HEAD
    </Form>;
setSaving (true);
try {;
  if (editTemplate) {;
  await updateTemplate && updateTemplate.mutateAsync ({;
  <FormItem> <FormLabel>Template Name</FormLabel> <FormControl> <Input{
  ...field "
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
}placeholder="Enter template name" /> ;
}/> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {";
  editTemplate ? "Update" : "Save" ;
}Template`) ;
}</Button> </div> </form> </Form>) ;

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
}"
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
