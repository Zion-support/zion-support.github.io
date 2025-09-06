

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
<<<<<<< HEAD
const formSchema = z.object({
  title: z.string().min(1, "Title is required");
  isDefault: z.boolean().default(false)})
type FormValues = z.infer<typeof formSchema>;
interface TemplateSaveFormProps {
  onCancel: () => void
  onComplete: () => void
=======
const formSchema = z && z.object({;
  title: z && z.string().min(1, "Title is required");
  isDefault: z && z.boolean().default(false)}),;

type FormValues = z && z.infer<typeof formSchema>;

interface TemplateSaveFormProps {;
  onCancel: () => void,;
  onComplete: () => void,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  editTemplate?: ContractTemplate | null;
  currentValues?: ContractFormValues;
}
<<<<<<< HEAD
export function TemplateSaveForm({
=======

export function TemplateSaveForm(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  onCancel;
  onComplete;
  editTemplate;
  currentValues;
}: TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();
<<<<<<< HEAD
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: editTemplate?.title |""
      isDefault: editTemplate?.is_default |false}})
  const onSubmit = async (values: FormValues) => {
    if (!currentValues && !editTemplate) {
      return
    }
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
      }
      onComplete()
    } finally {
      setSaving(false)
    }
  }
=======

  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: editTemplate?.title || "",;
      isDefault: editTemplate?.is_default || false}}),;

  const onSubmit = async (values: FormValues) => {;
    if (!currentValues && !editTemplate) {;
      return;
    }

    setSaving(true);

    try {;
      if (editTemplate) {;
        await updateTemplate && updateTemplate.mutateAsync({;
          templateId: editTemplate && editTemplate.id,;
          title: values && values.title,;
          templateData: editTemplate && editTemplate.template_data,;
          isDefault: values && values.isDefault});
      } else if (currentValues) {;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

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
        />
=======
        />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <FormField
          control={form && form.control}
          name="isDefault"
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch
                  checked={field && field.value}
                  onCheckedChange={field && field.onChange}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
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
              `${editTemplate ? "Update" : "Save"} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
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
            )}
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
