import React from "react";
import { useState } from 'react';
import { useForm, type ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useContractTemplates } from '@/hooks/useContractTemplates';
import { ContractTemplate } from '@/types/contracts';

const formSchema = z.object({
  title: z.string().min(1, 'Template name is required'),
  isDefault: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface TemplateSaveFormProps {
  template?: ContractTemplate;
  onCancel: () => void;
  onSuccess: () => void;
}

export function TemplateSaveForm({ template, onCancel, onSuccess }: TemplateSaveFormProps) {
  const [saving, setSaving] = useState(false);
  const { createTemplate, updateTemplate } = useContractTemplates();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: template?.name || '',
      isDefault: template?.isDefault || false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSaving(true);
    try {
      if (template) {
        await updateTemplate(template.id, {
          name: data.title,
          isDefault: data.isDefault,
        });
      } else {
        await createTemplate({
          name: data.title,
          description: 'User created template',
          category: 'Custom',
          content: '',
          isDefault: data.isDefault || false,
          isStarred: false,
        });
      }
      onSuccess();
    } catch (error) {
      console.error('Failed to save template:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
      <div className="space-y-2">
        <Label htmlFor="title">Template Name</Label>
        <Input
          id="title"
          {...form.register('title')}
          placeholder='Enter template name'
        />
        {form.formState.errors.title && (
          <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
        )}
      </div>
      
      <div className='flex items-center justify-between'>
        <Label htmlFor="isDefault" className='cursor-pointer'>
          Set as default template
        </Label>
        <Switch
          id="isDefault"
          checked={form.watch('isDefault')}
          onCheckedChange={(checked) => form.setValue('isDefault', checked)}
        />
      </div>
      
      <div className='flex gap-2 justify-end'>
        <Button type='button'  onClick={onCancel}>
          Cancel
        </Button>
        <Button type='submit' disabled={saving}>
          {saving ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Saving...
            </>
          ) : (
            `${template ? 'Update' : 'Save'} Template`
          )}
        </Button>
      </div>
    </form>
  );
}