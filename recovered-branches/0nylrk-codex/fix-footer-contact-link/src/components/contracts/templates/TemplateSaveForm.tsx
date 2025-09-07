
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Loader2} from "lucide-react";
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
import {ContractTemplate} from "@/types/contracts";
import {useContractTemplates} from "@/hooks/useContractTemplates";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
  editTemplate?: ContractTemplate | null;
  currentValues?: ContractFormValues;
}
export function TemplateSaveForm(): any ({;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
}

<<<<<<< HEAD
=======

export function TemplateSaveForm(): any ({;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onCancel;
  onComplete;
  editTemplate;
  currentValues;
}: TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
const formSchema = z.object({
  title: z.string().min($2);
  isDefault: z.boolean().default(false)}),

type FormValues = $2;
interface TemplateSaveFormProps {
  onCancel: () => void,
  onComplete: () => void,
  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

  onCancel;
  onComplete;
  editTemplate;
<<<<<<< HEAD
  currentValues;
}: TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();

=======
  currentValues
}: TemplateSaveFormProps) {
  const [saving, setSaving] = useState($2);
  const { createTemplate, updateTemplate } = useContractTemplates($2);
  const form = useForm<FormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      title: editTemplate ?.title || "",
      isDefault: editTemplate ?.is_default || false}),
  
  const onSubmit = async (values: FormValues) => {
    if (!currentValues && !editTemplate) {
      return
    }
<<<<<<< HEAD
export function TemplateSaveForm(): any ({;import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Loader2 } from "lucide-react",
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { ContractTemplate } from "@/types/contracts",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Button } from "@/components/ui/button",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Switch } from "@/components/ui/switch",
=======
<<<<<<< HEAD
=======
    setSaving(true);
    try {
      if (editTemplate) {
        await updateTemplate.mutateAsync({
          templateId: editTemplate.id
          title: values.title
          templateData: editTemplate.template_data
          isDefault: values.isDefault})
      } else if (currentValues) {
        await createTemplate.mutateAsync({
          title: values.title
          templateData: currentValues
          isDefault: values.isDefault})
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const formSchema = z.object({
  title: z.string().min(1, "Title is required");
  isDefault: z.boolean().default(false)})
type FormValues = z.infer<typeof formSchema>;
interface TemplateSaveFormProps {
  onCancel: () => void
  onComplete: () => void
>>>>>>> origin/resolved-merge-conflicts

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  isDefault: z.boolean().default(false)}),

type FormValues = z.infer<typeof formSchema>,

interface TemplateSaveFormProps {
  onCancel: () => void,
  onComplete: () => void,
<<<<<<< HEAD
  editTemplate?: ContractTemplate | null,
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    
    setSaving($2);
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
const formSchema = z.object({;
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      }
      
      onComplete()
    } finally {
      setSaving(false)
    }
<<<<<<< HEAD
  currentValues?: ContractFormValues  };
  },
  
=======
<<<<<<< HEAD
  }

  },
=======
<<<<<<< HEAD
  },
=======
  }

  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    defaultValues: {;
      title: editTemplate?.title || "",;
      isDefault: editTemplate?.is_default || false}}),;
  const onSubmit = async (values: FormValues) => {;
    if (!currentValues && !editTemplate) {;
      return;
    }
<<<<<<< HEAD
;
    setSaving(true),;
=======
<<<<<<< HEAD
;
    setSaving(true),;
=======
    setSaving(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {;
      if (editTemplate) {;
        await updateTemplate.mutateAsync({;
          templateId: editTemplate.id,;
          title: values.title,;
          templateData: editTemplate.template_data,;
          isDefault: values.isDefault});
      } else if (currentValues) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        await createTemplate.mutateAsync({;
          title: values.title,;
          templateData: currentValues;
          isDefault: values.isDefault});

  };

  },

  };

<<<<<<< HEAD
  },

=======
=======
        await createTemplate && createTemplate.mutateAsync({;
          title: values && values.title,;
          templateData: currentValues,;
          isDefault: values && values.isDefault});
      }
      onComplete();
    } finally {;
      setSaving(false);
    }
  };

  }

  },
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}

        />;

=======
=======
        />;
        <FormField
          control={form && form.control}
          name="isDefault"
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              `${editTemplate ? "Update" : "Save"} Template`;
            )}
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
export function TemplateSaveForm({;
  onCancel,;
  onComplete,;
  editTemplate,;
  currentValues;
} TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { createTemplate, updateTemplate } = useContractTemplates(),;
  ;
  const form = useForm<FormValues>({;
    resolver:zodResolver(formSchema),;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    defaultValues:{;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          name="title";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
              <FormControl>;
                <Input {...field} placeholder="Enter template name" />;
              </FormControl>;
              <FormMessage />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            </FormItem>;          )}
        />;
        ;
        <FormField;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          control={form.control}"
          name="isDefault";
          render={({ field }) => (;"
            <FormItem className="flex items-center justify-between">;"
=======
<<<<<<< HEAD
          control={form.control}"
          name="isDefault";
          render={({ field }) => (;"
            <FormItem className="flex items-center justify-between">;"
=======
>>>>>>> origin/resolved-merge-conflicts
          control={form.control}
          name="isDefault";
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
        ;"
        <div className="flex gap-2 justify-end">;"
=======
<<<<<<< HEAD
        ;"
        <div className="flex gap-2 justify-end">;"
=======
        ;
        <div className="flex gap-2 justify-end">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={saving}>;
            {saving ? (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <>;"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Saving...;
              </>;
            ) :(;"`
=======
<<<<<<< HEAD
              <>;"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Saving...;
              </>;
            ) :(;"`
=======
>>>>>>> origin/resolved-merge-conflicts
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Saving...;
              </>;
            ) :(;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
 const formSchema = z.object ({"
=======
<<<<<<< HEAD
 const formSchema = z.object ({"
=======
 const formSchema = z.object ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  title: z.string () .min (1, "Title is required");
isDefault: z.boolean () .default (false) 
});
setSaving (true);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}Template`) 
}</Button> </div> </form> </Form>) 
}

=======
}Template`) 
}</Button> </div> </form> </Form>) 
}

  return (
    <Form {...form}>"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField;
          control={form.control}"
=======
>>>>>>> origin/resolved-merge-conflicts
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
  },
  
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <Form {...form}>"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
<<<<<<< HEAD
        <FormField;
          control={form.control}"
=======
        <FormField
          control={form.control}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Template Name</FormLabel>
<<<<<<< HEAD
              <FormControl>
=======
<<<<<<< HEAD
              <FormControl>"
=======
<<<<<<< HEAD
              <FormControl>"
=======
              <FormControl>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                <Input {...field} placeholder="Enter template name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <FormField;
          control={form.control}"
=======
<<<<<<< HEAD
        <FormField;
          control={form.control}"
          name="isDefault"
          render={({ field }) => ("
            <FormItem className="flex items-center justify-between">"
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch;
=======
>>>>>>> origin/resolved-merge-conflicts
        <FormField
          control={form.control}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          name="isDefault"
          render={({ field }) => ("
            <FormItem className="flex items-center justify-between">"
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
<<<<<<< HEAD
                <Switch;
=======
                <Switch
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        />"
        <div className="flex gap-2 justify-end">"
=======
<<<<<<< HEAD
        />"
        <div className="flex gap-2 justify-end">"
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel;
          </Button>"
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : ("`
=======
>>>>>>> origin/resolved-merge-conflicts
        />
        <div className="flex gap-2 justify-end">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel;
          </Button>"
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
<<<<<<< HEAD
            ) : ("`
=======
            ) : (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              `${editTemplate ? "Update" : "Save"} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
