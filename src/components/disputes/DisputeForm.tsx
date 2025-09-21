import React, { useState } from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { FileText } from "lucide-react",
import { logInfoToProduction, logErrorToProduction } from '@/utils/productionLogger',
import { disputeReasonLabels } from '@/types/disputes',
const formSchema = z.object({
  reason_code: z.string().min(1, 'Please select a reason');
  description: z.string().min(10, 'Please provide a detailed description');
});

type FormValues = z.infer<typeof formSchema>

interface DisputeFormProps {
  projectId: string,
  milestoneId?: string;
  onSubmit: (data: FormValues) => Promise<void>,
  onCancel?: () => void;
}

export function DisputeForm({ projectId, milestoneId, onSubmit, onCancel }: DisputeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason_code: '',
      description: ''};
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []),
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));;

  const handleSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true),
      logInfoToProduction('Submitting dispute form', { projectId, milestoneId, values });
      
      await onSubmit(values);
      
      // Future enhancement: Upload attachments
      // For now we just log the files that would be uploaded
      if (files.length > 0) {
        logInfoToProduction('Files would be uploaded:', files.map(f => f.name));
    } catch (error) {
      logErrorToProduction('Error submitting dispute form', { error, projectId, milestoneId }); finally {
      setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>
      
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="reason_code">Reason for dispute</Label>
          <Select
            value={form.watch('reason_code')}
            onValueChange={(value) => form.setValue('reason_code', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a reason" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(disputeReasonLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.reason_code && (
            <p className="text-sm text-red-500">{form.formState.errors.reason_code.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Describe the issue in detail</Label>
          <Textarea
            id="description"
            placeholder="Please provide specific details about the issue..."
            className="min-h-[150px]"
            {...form.register('description')}
          />
          {form.formState.errors.description && (
            <p className="text-sm text-red-500">{form.formState.errors.description.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Attachments (optional)</Label>
          <div className="space-y-4">
            <Input
              type="file"
              multiple
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            {files.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Selected files:</p>
                <ul className="space-y-1">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded"
                    >
                      <span>
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                      <Button
                        type="button"
                        
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button type="button"  onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Dispute'}
          </Button>
        </div>
      </form>
    </div>
  );