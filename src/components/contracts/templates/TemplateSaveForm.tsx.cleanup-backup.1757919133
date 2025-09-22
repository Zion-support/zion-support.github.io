
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
=======
import { useState } from "react";
import { useForm, type ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from 'lucide-react'
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { ContractTemplate } from "@/types/contracts";
import { useContractTemplates } from "@/hooks/useContractTemplates";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  isDefault: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

interface TemplateSaveFormProps {
  onCancel: () => void;
  onComplete: () => void;
  editTemplate?: ContractTemplate | null;
  currentValues?: ContractFormValues;
>>>>>>> origin/auto/autonomy-17186719616
}

export function TemplateSaveForm({
  onCancel,
  onComplete,
  editTemplate,
  currentValues
}: TemplateSaveFormProps) {
<<<<<<< HEAD
  const [saving, setSaving] = useState(false),
  const { createTemplate, updateTemplate } = useContractTemplates(),
=======
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();
>>>>>>> origin/auto/autonomy-17186719616
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: editTemplate?.title || "",
<<<<<<< HEAD
      isDefault: editTemplate?.is_default || false}}),
  
  const onSubmit = async (values: FormValues) => {
    if (!currentValues && !editTemplate) {
      return
    }
    
    setSaving(true),
=======
      isDefault: editTemplate?.is_default || false,
    },
  });
  
  const onSubmit = async (values: FormValues) => {
    if (!currentValues && !editTemplate) {
      return;
    }
    
    setSaving(true);
>>>>>>> origin/auto/autonomy-17186719616
    
    try {
      if (editTemplate) {
        await updateTemplate.mutateAsync({
          templateId: editTemplate.id,
          title: values.title,
          templateData: editTemplate.template_data,
<<<<<<< HEAD
          isDefault: values.isDefault}),
=======
          isDefault: values.isDefault,
        });
>>>>>>> origin/auto/autonomy-17186719616
      } else if (currentValues) {
        await createTemplate.mutateAsync({
          title: values.title,
          templateData: currentValues,
<<<<<<< HEAD
          isDefault: values.isDefault}),
      }
      
      onComplete(),
    } finally {
      setSaving(false),
    }
  },
=======
          isDefault: values.isDefault,
        });
      }
      
      onComplete();
    } finally {
      setSaving(false);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
<<<<<<< HEAD
          name='title'
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'title'>
          }) => (            <FormItem>
          name="title"
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (
=======
          name="title"
          render={({ field }: { field: ControllerRenderProps<FormValues, "title"> }) => (
>>>>>>> origin/auto/autonomy-17186719616
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter template name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="isDefault"
<<<<<<< HEAD
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => (
=======
          render={({ field }: { field: ControllerRenderProps<FormValues, "isDefault"> }) => (
>>>>>>> origin/auto/autonomy-17186719616
            <FormItem className="flex items-center justify-between">
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch
                  aria-label="Default template"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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
              `${editTemplate ? "Update" : "Save"} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
