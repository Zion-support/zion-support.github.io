
}





import { useState } from "react",







  editTemplate?: ContractTemplate | null,
  currentValues?: ContractFormValues


  }

        />;
        <FormField
          control={form && form.control}
          name="isDefault"
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>;
              <FormControl>;
                <Switch
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

export function TemplateSaveForm({;
  onCancel,;
  onComplete,;
  editTemplate,;
  currentValues;
} TemplateSaveFormProps) {;
  const [saving, setSaving] = useState(false),;
    defaultValues:{;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;
        <FormField;
          control={form.control}
              <FormControl>;
                <Input {...field} placeholder="Enter template name" />;
              </FormControl>;
              <FormMessage />;
          control={form.control}
          name="isDefault";
          render={({ field }) => (;
            <FormItem className="flex items-center justify-between">;

        ;
        <div className="flex gap-2 justify-end">;

              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Saving...;
              </>;
            ) :(;

 const formSchema = z.object ({


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
              <FormControl>

        <FormField
          control={form.control}
          name="isDefault"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between">
              <FormLabel className="cursor-pointer">Set as default template</FormLabel>
              <FormControl>
                <Switch

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


}


