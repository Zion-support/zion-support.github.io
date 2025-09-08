
<<<<<<< HEAD

=======
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { ContractTemplate } from "@/types/contracts";
import { useContractTemplates } from "@/hooks/useContractTemplates";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
>>>>>>> origin/cursor/delete-old-data-records-6bba
const formSchema = z && z.object({;
  title: z && z.string().min(1, "Title is required");
  isDefault: z && z.boolean().default(false)}),;

type FormValues = z && z.infer<typeof formSchema>;

interface TemplateSaveFormProps {;
  onCancel: () => void,;
  onComplete: () => void,;

  editTemplate?: ContractTemplate | null;
  currentValues?: ContractFormValues;
<<<<<<< HEAD
}


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onCancel;
  onComplete;
  editTemplate;
  currentValues;
}: TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();


<<<<<<< HEAD



import { useState } from "react",




=======
import { useState } from "react",

>>>>>>> origin/cursor/delete-old-data-records-6bba
const formSchema = z.object({
  title: z.string().min(1, "Title is required");
  isDefault: z.boolean().default(false)})
type FormValues = z.infer<typeof formSchema>;
interface TemplateSaveFormProps {
  onCancel: () => void
  onComplete: () => void

const formSchema = z.object({
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title: z.string().min(1, "Title is required"),
  isDefault: z.boolean().default(false)}),

type FormValues = z.infer<typeof formSchema>,

interface TemplateSaveFormProps {
  onCancel: () => void,
  onComplete: () => void,
<<<<<<< HEAD

  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


}

export function TemplateSaveForm({;
  onCancel;
  onComplete;
  editTemplate;
  currentValues
}: TemplateSaveFormProps) {
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: editTemplate?.title || "",
      isDefault: editTemplate?.is_default || false}}),
  
  const onSubmit = async (values: FormValues) => {
    if (!currentValues && !editTemplate) {
      return
    }
    
    setSaving(true);
    
    try {
      if (editTemplate) {
        await updateTemplate.mutateAsync({
          templateId: editTemplate.id,
          title: values.title,
          templateData: editTemplate.template_data,
          isDefault: values.isDefault})
      } else if (currentValues) {
        await createTemplate.mutateAsync({
          title: values.title,
          templateData: currentValues,
          isDefault: values.isDefault})

import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Loader2 } from "lucide-react",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { ContractTemplate } from "@/types/contracts",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Button } from "@/components/ui/button",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;

import { Switch } from "@/components/ui/switch",;
const formSchema = z.object({;"

  title: z.string().min(1, "Title is required"),;
  isDefault: z.boolean().default(false)}),;
type FormValues = z.infer<typeof formSchema>,;
interface TemplateSaveFormProps {;
  onCancel: () => void,;
  onComplete: () => void,;
  editTemplate?: ContractTemplate | null,;
  currentValues?: ContractFormValues;
}
;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
      
      onComplete()
    } finally {
      setSaving(false)
    }
<<<<<<< HEAD

  }

=======
  currentValues?: ContractFormValues  };
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },
  

    defaultValues: {;
      title: editTemplate?.title || "",;
      isDefault: editTemplate?.is_default || false}}),;
  const onSubmit = async (values: FormValues) => {;
    if (!currentValues && !editTemplate) {;
      return;
    }
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
  };


  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField
          control={form && form.control}
          name="title"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
              <FormControl>;
                <Input {...field} placeholder="Enter template name" />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

<<<<<<< HEAD
        />;
        <FormField
          control={form && form.control}
          name="isDefault"
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;

<<<<<<< HEAD
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
            ) : (;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              `${editTemplate ? "Update" : "Save"} Template`;
            )}
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
}

<<<<<<< HEAD
import { useState } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { Loader2 } from './lucide-react';
import { ContractFormValues } from '@/components / contracts / components / ContractForm';
import { ContractTemplate } from '@/types / contracts';
import { useContractTemplates } from '@/hooks / useContractTemplates';
import { Button } from '@/components / ui / button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Switch } from '@/components / ui / switch';
const form_schema = z.object ({
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  title: z.string ().min (1, "Title is required");
  is_default: z.boolean ().default (false)}),
type FormValues = z.infer < typeof form_schema>;
;

  on_cancel: () => void,
  on_complete: () => void,
  edit_template?: ContractTemplate | null;
  current_values?: ContractFormValues;
}

}
      return;
    }
    set_saving (true);
;

          template_id: edit_template.id,
          title: values.title,
          template_data: edit_template.template_data,
          is_default: values.is_default});

          title: values.title,
          template_data: current_values,
          is_default: values.is_default});
      }
      on_complete ();

      set_saving (false);
    }
  }
;
  return (

          name="title";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Template Name</FormLabel>;


<<<<<<< HEAD
import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Loader2 } from "lucide-react",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { ContractTemplate } from "@/types/contracts",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Button } from "@/components/ui/button",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
;
const formSchema = z.object({;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title:z.string().min(1, "Title is required"),;
  isDefault:z.boolean().default(false)}),;
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

<<<<<<< HEAD
export function TemplateSaveForm({;
  onCancel,;
  onComplete,;
  editTemplate,;
  currentValues;
} TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false),;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const { createTemplate, updateTemplate } = useContractTemplates(),;
  ;
  const form = useForm<FormValues>({;
    resolver:zodResolver(formSchema),;

<<<<<<< HEAD
    defaultValues:{;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
  return (;

<<<<<<< HEAD
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          name="title";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Template Name</FormLabel>;

<<<<<<< HEAD
              <FormControl>;
                <Input {...field} placeholder="Enter template name" />;
              </FormControl>;
              <FormMessage />;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </FormItem>;          )}
        />;
        ;
        <FormField;

<<<<<<< HEAD
          control={form.control}
          name="isDefault";
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch;
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;

<<<<<<< HEAD
        ;
        <div className="flex gap-2 justify-end">;

=======
        ;"
        <div className="flex gap-2 justify-end">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={saving}>;
            {saving ? (;

<<<<<<< HEAD
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Saving...;
              </>;
            ) :(;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              `${editTemplate ? "Update" :"Save"} Template`;
            )}
          </Button>;
        </div>;
      </form>;
    </Form>;
  ),;}

<<<<<<< HEAD
 const formSchema = z.object ({

=======
 const formSchema = z.object ({"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title: z.string () .min (1, "Title is required");
isDefault: z.boolean () .default (false) 
});
setSaving (true);
<<<<<<< HEAD

try {
  if (editTemplate) {
  await updateTemplate.mutateAsync ({
  </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem className="flex items-center justify-between"> <FormLabel className="cursor-pointer">Set as default template</FormLabel> <FormControl> <Switch checked= {
  field.value 
}onCheckedChange= {
  field.onChange 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {
  editTemplate ? "Update" : "Save" 
}Template`) 
}</Button> </div> </form> </Form>) 
}

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
=======

try {}
  if (editTemplate) {}
  await updateTemplate.mutateAsync ({}
  </FormControl> <FormMessage /> </FormItem>) "
}/> <FormField <FormItem className="flex items-center justify-between"> <FormLabel className="cursor-pointer">Set as default template</FormLabel> <FormControl> <Switch checked= {}
  field.value;
}onCheckedChange= {}
  field.onChange;
}/> </FormControl> <FormMessage /> </FormItem>) "`
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {"
  editTemplate ? "Update" : "Save" `

  return (
    <Form {...form}>"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField;
          control={form.control}"
>>>>>>> origin/cursor/delete-old-data-records-6bba

          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Template Name</FormLabel>

<<<<<<< HEAD
              <FormControl>

=======
              <FormControl>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Input {...field} placeholder="Enter template name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<<<<<<< HEAD
        <FormField
          control={form.control}
          name="isDefault"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between">
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

<<<<<<< HEAD
        />
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              `${editTemplate ? "Update" : "Save"} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
<<<<<<< HEAD

}


=======
}

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
