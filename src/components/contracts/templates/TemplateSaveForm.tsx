<<<<<<< HEAD


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
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
const formSchema = null;
=======
pr-12325
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
const formSchema = z && z.object({;)
pr-12325
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
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { ContractTemplate } from "@/types/contracts",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Button } from "@/components/ui/button",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
const formSchema = null;
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
origin/cursor/automate-test-improve-and-merge-code-2533
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
</typeof>
  const form = useForm<FormValues>({;

type FormValues = z.infer < typeof form_schema>;
interface TemplateSaveFormProps {
  // TODO: Implement
})
  on_cancel: () => void;,
pr-12325
  on_complete: () => void;
  edit_template?: ContractTemplate | null;
  current_values?: ContractFormValues;
export /**
 * TemplateSaveForm - Function description
 * TemplateSaveForm - Function description;
pr-12325
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
  const form = use_form < FormValues>({)
    resolver: zod_resolver (form_schema),
    default_values: {,
  title: edit_template?.title || ,
      is_default: edit_template?.is_default || false,
    },
  const on_submit = async (values: FormValues) => {    // Check condition;
if ( {) {
  $2;
}
      return;
    set_saving (true);
    try {
  // TODO: Implement
      // Check condition;
pr-12325
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

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Form {...form}>;

      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
        <FormField;
          control={form.control}
          name='title';

          render={({
            field
          }: {

    }
  },
          is_default: values.is_default,)
      } else // Check condition;
        await create_template.mutate_async ({
          template_data: current_values,
      on_complete ();
    } finally {
  // TODO: Implement
      set_saving (false);


  return (
    <Form {...form}>;

)
      <form on_submit={form.handle_submit (on_submit)} className='space - y-4'>;
</form>
        <FormField;
          control={form.control}
          name='title';
          render={({
            field;
          }: {

pr-12325
  


>>>>>>> origin/main

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}

          name="title"
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (
            <FormItem>

              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter template name' />
              </FormControl>
              <FormMessage />
            </FormItem>

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

            field: ControllerRenderProps<FormValues, 'isDefault'>;
          }) => (;
            <FormItem className='flex items-center justify-between'>;
              <FormLabel className='cursor-pointer'>;
                Set as default template;
              </FormLabel>;
              <FormControl>;

                <Switch
                  aria-label='Default template'
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}                />;

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
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
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
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

        />
        
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>


            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? (
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
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (

  editTemplate ? "Update" : "Save" 
}Template`) ;
}</Button> </div> </form> </Form>) ;
}"};

              `${editTemplate ? "Update" : "Save"} Template`

            )}
          </Button>;
        </div>;
      </form>;
    </Form>;
  );



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
}
;
          </Button>
        </div>
      </form>
    </Form>
  );

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
}"
origin/cursor/automate-test-improve-and-merge-code-2533
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">"
"
          name="title"""
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => ("

            <FormItem>


              <FormLabel>Template Name
              <FormControl>
                <Input {...field} placeholder='Enter template name' />

              
              <FormMessage />

            

            field: ControllerRenderProps<FormValues, 'title'>;
          }) => (            <FormItem>;

              <FormLabel>Template Name;
            field: ControllerRenderProps < FormValues, 'title'>;')

              <FormLabel > Template Name;
              <FormControl>;

                <Input {...field} placeholder='Enter template name' />;

              ;
              <FormMessage />;

            )}
          name='is_default';

            field: ControllerRenderProps<FormValues, 'isDefault'>;

            <FormItem className='flex items-center justify-between'>;

              <FormLabel className='cursor-pointer'>;



                <Switch;
                  aria-label='Default template
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}                />;

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;"
          control={form.control}"
          name="title";""
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (;"

            <FormItem>;

                <Input {...field} placeholder="Enter template name" />;"


          name="isDefault"")"
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => ("
            <FormItem className="flex items-center justify-between">"
              <FormLabel className="cursor-pointer">Set as default template"

                <Switch;"
                  aria-label="Default template"""
          name="isDefault";")"
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => (;"
            <FormItem className="flex items-center justify-between">;"
              <FormLabel className="cursor-pointer">Set as default template;"

                  aria-label="Default template";"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />;


            ;"
        <div className="flex gap-2 justify-end">"
</div>"
          <Button type="button" variant="outline" onClick={onCancel}>"

          <Button type='submit' disabled={saving}>

            field: ControllerRenderProps < FormValues, 'is_default'>;')
          }) => (
            <FormItem className='flex items - center justify - between'>;

              <FormLabel className='cursor - pointer'>;


                  aria - label='Default template';
                  onCheckedChange={field.on_change}                />;

        <div className='flex gap - 2 justify - end'>;
</div>
          <Button type='button' variant='outline' on_click={on_cancel}>;

          <Button type='submit' disabled={saving}>;

        <div className='flex gap-2 justify-end'>;
          <Button type='button' variant='outline' onClick={onCancel}>;


              <>;
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
</Loader2>
              </>;
            ) : (;
              `${editTemplate ? 'Update' : 'Save'} Template`;
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
              </>)
            ) : (
  editTemplate ? "Update" : "Save"")`;
}Template`) ;
} </div> </form> ) ;
        </div>;
      </form>;
  <FormItem> <FormLabel > Template Name <FormControl> <Input {
}/> <FormField >Set as default template <FormControl> <Switch />  <FormMessage /> ) ";"
"`;
}/> <> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : (`$ {";"
</Loader2>)
} </div> </form> );"`;
pr-12325
