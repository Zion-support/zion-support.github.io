import React, {_useState} from "react";
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";

const _formSchema = z.object({_reason_code: z.string()
    .min(1, _{ message: "Please select a reason for the dispute"}),
  description: z.string()
    .min(20, {_message: "Description must be at least 20 characters"}),
  attachments: z.array(z.any()).optional()});

type DisputeFormProps = {_projectId: string;
  milestoneId?: string;
  onDisputeCreated?: (_disputeId: string) => void;
  onCancel?: () => void;};

export function DisputeForm(_{_projectId, _milestoneId, _onDisputeCreated, _onCancel}: DisputeFormProps) {_const { createDispute} = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const _form = useForm<z.infer<typeof formSchema>>({_resolver: zodResolver(formSchema), _defaultValues: {
      reason_code: "", _description: "", _attachments: []}});

  const _handleFileChange = (_e: React.ChangeEvent<HTMLInputElement>) => {_if (e.target.files) {
      const _newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, _...newFiles]);
      form.setValue("attachments", _[...files, _...newFiles]);}
  };

  const _removeFile = (_index: number) => {_const _newFiles = [...files];
    newFiles.splice(index, _1);
    setFiles(newFiles);
    form.setValue("attachments", _newFiles);};

  async function onSubmit(_values: z.infer<typeof formSchema>) {_try {
      setIsSubmitting(true);
      
      const _dispute = await createDispute({
        project_id: projectId, _milestone_id: milestoneId, _reason_code: values.reason_code, _description: values.description});
      
      if (dispute && dispute.id) {_// Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
          // logInfo(`Would upload ${files.length} files for dispute ${_dispute.id}`);
        }
        
        toast.success("Your dispute has been submitted");
        
        if (onDisputeCreated) {_onDisputeCreated(dispute.id);}
      }
    } catch (error) {_logErrorToProduction('Error submitting dispute:', _{ data: error});
      toast.error("Failed to submit dispute. Please try again.");
    } finally {_setIsSubmitting(false);}
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Report an Issue</h2>
      </div>
      
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={_form.control}
            name="reason_code"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"reason_code">}) => (
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {_Object.entries(disputeReasonLabels).map(_([value, _label]) => (
                      <SelectItem key={value} value={_value}>{_label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={_form.control}
            name="description"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"description">}) => (
              <FormItem>
                <FormLabel>Describe the issue in detail</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide specific details about the issue..."
                    className="min-h-[150px]"
                    {_...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormItem>
            <FormLabel>Attachments (optional)</FormLabel>
            <FormControl>
              <div className="space-y-4">
                <Input 
                  type="file" 
                  multiple 
                  onChange={_handleFileChange}
                  className="cursor-pointer"
                />
                
                {_files.length > 0 && (_<div className="space-y-2">
                    <p className="text-sm font-medium">Selected files:</p>
                    <ul className="space-y-1">
                      {files.map((file, _index) => (
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">
                          <span>{_file.name} ({_(file.size / 1024).toFixed(1)} KB)</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            onClick={_() => removeFile(index)}
                          >
                            Remove
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
          
          <div className="flex justify-end space-x-2">
            {_onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? "Submitting..." : "Submit Dispute"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}