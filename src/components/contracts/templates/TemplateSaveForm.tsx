
<<<<<<< HEAD
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
=======
import { useState } from &quot;react&quot;;
import { useForm, type ControllerRenderProps } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Loader2 } from 'lucide-react'
import { ContractFormValues } from &quot;@/components/contracts/components/ContractForm&quot;;
import { ContractTemplate } from &quot;@/types/contracts&quot;;
import { useContractTemplates } from &quot;@/hooks/useContractTemplates&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
=======

const _formSchema = z.object({_title: z.string().min(1, _"Title is required"), _isDefault: z.boolean()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const formSchema = z.object({
  title: z.string().min(1, &quot;Title is required&quot;),
  isDefault: z.boolean()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type FormValues = z.infer<typeof formSchema>,

<<<<<<< HEAD
interface TemplateSaveFormProps {
  onCancel: () => void,
  onComplete: () => void,
  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues
}

export function TemplateSaveForm({
  onCancel,
  onComplete,
  editTemplate,
  currentValues
}: TemplateSaveFormProps) {
  const [saving, setSaving] = useState(false),
  const { createTemplate, updateTemplate } = useContractTemplates(),
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: editTemplate?.title || "",
      isDefault: editTemplate?.is_default || false}}),
  
  const onSubmit = async (values: FormValues) => {
    if (!currentValues && !editTemplate) {
      return
    }
=======
interface TemplateSaveFormProps {_onCancel: () => void;
  onComplete: () => void;
  editTemplate?: ContractTemplate | null;
  currentValues?: ContractFormValues;}

export function TemplateSaveForm(_{_onCancel, _onComplete, _editTemplate, _currentValues}: TemplateSaveFormProps) {_const [saving, _setSaving] = useState(false);
  const { createTemplate, _updateTemplate} = useContractTemplates();
  
  const _form = useForm<FormValues>({_resolver: zodResolver(formSchema), _defaultValues: {
      title: editTemplate?.title || "", _isDefault: editTemplate?.is_default || false}});
  
  const _onSubmit = async (_values: FormValues) => {_if (!currentValues && !editTemplate) {
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setSaving(true),
    
    try {_if (editTemplate) {
        await updateTemplate.mutateAsync({
<<<<<<< HEAD
          templateId: editTemplate.id,
          title: values.title,
          templateData: editTemplate.template_data,
          isDefault: values.isDefault})
      } else if (currentValues) {
        await createTemplate.mutateAsync({
          title: values.title,
          templateData: currentValues,
          isDefault: values.isDefault})
      }
      
      onComplete()
    } finally {
      setSaving(false)
    }
  },
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4&quot;>
        <FormField
          control={form.control}
<<<<<<< HEAD
          name="title"
          render={({ field }: { field: ControllerRenderProps<FormValues "title"> }) => (
=======
          name=&quot;title&quot;
          render={({ field }: { field: ControllerRenderProps<FormValues, &quot;title&quot;> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder=&quot;Enter template name&quot; />
=======
          templateId: editTemplate.id, _title: values.title, _templateData: editTemplate.template_data, _isDefault: values.isDefault});
      } else if (currentValues) {_await createTemplate.mutateAsync({
          title: values.title, _templateData: currentValues, _isDefault: values.isDefault});
      }
      
      onComplete();
    } finally {_setSaving(false);}
  };
  
  return (
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={_form.control}
          name="title"
          render={_(_{ field}: {_field: ControllerRenderProps<FormValues, _"title">}) => (
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {_...field} placeholder="Enter template name" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
<<<<<<< HEAD
          control={form.control}
<<<<<<< HEAD
          name="isDefault"
          render={({ field }: { field: ControllerRenderProps<FormValues "isDefault"> }) => (
=======
          name=&quot;isDefault&quot;
          render={({ field }: { field: ControllerRenderProps<FormValues, &quot;isDefault"> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          control={_form.control}
          name="isDefault"
          render={_(_{ field}: {_field: ControllerRenderProps<FormValues, _"isDefault">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem className="flex items-center justify-between">
              <FormLabel className="cursor-pointer&quot;>Set as default template</FormLabel>
              <FormControl>
                <Switch
<<<<<<< HEAD
                  aria-label=&quot;Default template"
                  checked={field.value}
                  onCheckedChange={field.onChange}
=======
                  aria-label="Default template"
                  checked={_field.value}
                  onCheckedChange={_field.onChange}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
<<<<<<< HEAD
        <div className="flex gap-2 justify-end&quot;>
          <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={onCancel}>
            Cancel
          </Button>
          <Button type=&quot;submit" disabled={saving}>
            {saving ? (
=======
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={_onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={_saving}>
            {_saving ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin&quot; />
                Saving...
              </>
            ) : (
              `${editTemplate ? &quot;Update&quot; : &quot;Save"} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
