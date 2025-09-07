


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">"
        <FormField
          control={form.control}
          name="title""
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => ("
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter template name' />'
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
                  aria-label='Default template''
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}                />;

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
      isDefault: editTemplate?.is_default || false}),;
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter template name" />
              </FormControl>
              <FormMessage />
            </FormItem>
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
          name="isDefault""
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => ("
            <FormItem className="flex items-center justify-between">"
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>"
              <FormControl>
                <Switch
                  aria-label="Default template""
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

            Cancel
          </Button>
          <Button type='submit' disabled={saving}>'
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
              `${editTemplate ? 'Update' : 'Save'} Template`;`
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
                Saving...
              </>
            ) : (
  editTemplate ? "Update" : "Save" "
}Template`) ;`
}</Button> </div> </form> </Form>) ;
}"};
              `${editTemplate ? "Update" : "Save"} Template``
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
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
}Template`);`
}</Button> </div> </form> </Form>);
}"}"
}
;)
}
;
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
