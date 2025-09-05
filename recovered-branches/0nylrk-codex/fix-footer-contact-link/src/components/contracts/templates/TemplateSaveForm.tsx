
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
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
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  isDefault: z.boolean().default(false)}),
=======
import { useState } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Loader2 } from &quot;lucide-react&quot;;
import { ContractFormValues } from &quot;@/components/contracts/components/ContractForm&quot;;
import { ContractTemplate } from &quot;@/types/contracts&quot;;
import { useContractTemplates } from &quot;@/hooks/useContractTemplates&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;

const formSchema = z.object({
  title: z.string().min(1, &quot;Title is required&quot;),
  isDefault: z.boolean().default(false)});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type FormValues = z.infer<typeof formSchema>,

interface TemplateSaveFormProps {
  onCancel: () => void,
  onComplete: () => void,
  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
  },
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4&quot;>
        <FormField
          control={form.control}
          name=&quot;title&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder=&quot;Enter template name&quot; />
              </FormControl>
              <FormMessage />
            </FormItem>
=======
  };
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
          name="title";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Template Name</FormLabel>;
              <FormControl>;
                <Input {...field} placeholder="Enter template name" />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        />;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name=&quot;isDefault"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between">
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch
=======
          name="isDefault";
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD
        />
        
        <div className="flex gap-2 justify-end&quot;>
          <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={onCancel}>
            Cancel
          </Button>
          <Button type=&quot;submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin&quot; />
                Saving...
              </>
            ) : (
              `${editTemplate ? &quot;Update&quot; : &quot;Save"} Template`
=======
        />;
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
              `${editTemplate ? "Update" : "Save"} Template`;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
}
;