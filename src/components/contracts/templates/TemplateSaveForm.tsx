
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
          name='title'
          render={({
            field
          }: {
            field: ControllerRenderProps<FormValues, 'title'>
          }) => (            <FormItem>

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

  editTemplate ? "Update" : "Save" 
}Template`) ;
}</Button> </div> </form> </Form>) ;
}"};

}
;
